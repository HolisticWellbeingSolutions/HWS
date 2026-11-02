import crypto from "node:crypto";
import nodemailer from "nodemailer";
import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Website enquiry endpoint (POST /api/contact), served by Vercel alongside the site.
 * Replaces the old Render server, which only ever stored enquiries in Mailchimp.
 *
 * Environment variables (Vercel → Project → Settings → Environment Variables):
 *   EMAIL_FROM   Gmail address the enquiry is sent from            (required)
 *   EMAIL_PASS   Google App Password for EMAIL_FROM               (required)
 *   CONTACT_TO   inbox that receives enquiries                    (optional, default below)
 *   MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX, MAILCHIMP_LIST_ID   (optional: also keep a Mailchimp record)
 */

const CONTACT_TO = process.env.CONTACT_TO || "contact@holisticwell-beingsolutions.com";

interface Enquiry {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  subject: string;
  message: string;
}

const clean = (value: unknown, max: number): string =>
  String(value ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

async function sendEnquiryEmail(e: Enquiry): Promise<boolean> {
  const user = process.env.EMAIL_FROM;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) {
    console.error("[contact] EMAIL_FROM / EMAIL_PASS not set: enquiry email not sent");
    return false;
  }
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });
    const name = `${e.firstName} ${e.lastName}`.trim();
    await transporter.sendMail({
      from: { name: "HWS Website", address: user },
      to: CONTACT_TO,
      replyTo: { name, address: e.email },
      subject: `New website enquiry: ${e.subject || "General"} – ${name}`,
      text: [
        "A new enquiry was submitted on holisticwell-beingsolutions.com.",
        "",
        `Name:    ${name}`,
        `Email:   ${e.email}`,
        `Phone:   ${e.phone || "-"}`,
        `Country: ${e.country || "-"}`,
        `Subject: ${e.subject || "-"}`,
        "",
        "Message:",
        e.message,
        "",
        "Reply to this email to respond to the enquirer directly.",
      ].join("\n"),
    });
    return true;
  } catch (error) {
    console.error("[contact] enquiry email failed:", error);
    return false;
  }
}

async function saveToMailchimp(e: Enquiry): Promise<boolean> {
  const key = process.env.MAILCHIMP_API_KEY;
  const server = process.env.MAILCHIMP_SERVER_PREFIX;
  const list = process.env.MAILCHIMP_LIST_ID;
  if (!key || !server || !list) return false;
  try {
    const auth = `Basic ${Buffer.from(`anystring:${key}`).toString("base64")}`;
    const hash = crypto.createHash("md5").update(e.email.toLowerCase()).digest("hex");
    const base = `https://${server}.api.mailchimp.com/3.0/lists/${list}/members/${hash}`;
    const member = await fetch(base, {
      method: "PUT",
      headers: { Authorization: auth, "Content-Type": "application/json" },
      body: JSON.stringify({
        email_address: e.email,
        status_if_new: "subscribed",
        merge_fields: { FNAME: e.firstName, LNAME: e.lastName, PHONE: e.phone, COUNTRY: e.country },
      }),
    });
    if (!member.ok) {
      console.error("[contact] Mailchimp member update failed:", member.status);
      return false;
    }
    const note = await fetch(`${base}/notes`, {
      method: "POST",
      headers: { Authorization: auth, "Content-Type": "application/json" },
      body: JSON.stringify({ note: `Subject: ${e.subject}\n\nMessage:\n${e.message}`.slice(0, 1000) }),
    });
    if (!note.ok) console.error("[contact] Mailchimp note failed:", note.status);
    return true;
  } catch (error) {
    console.error("[contact] Mailchimp submission failed:", error);
    return false;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body: Record<string, unknown> = {};
  if (req.body && typeof req.body === "object") body = req.body;
  else if (typeof req.body === "string") {
    try {
      body = JSON.parse(req.body);
    } catch {
      body = {};
    }
  }

  const enquiry: Enquiry = {
    firstName: clean(body.firstName, 100),
    lastName: clean(body.lastName, 100),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    country: clean(body.country, 80),
    subject: clean(body.subject, 150),
    message: String(body.message ?? "").trim().slice(0, 5000),
  };

  if (!enquiry.firstName || !enquiry.message || !/^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(enquiry.email)) {
    return res.status(400).json({ error: "Name, a valid email and a message are required" });
  }

  const [emailed, saved] = await Promise.all([sendEnquiryEmail(enquiry), saveToMailchimp(enquiry)]);

  // Tell the visitor "sent" only if the enquiry reached the inbox or Mailchimp.
  if (!emailed && !saved) {
    return res.status(502).json({ error: "Enquiry could not be delivered" });
  }
  return res.status(200).json({ success: true, emailed, saved });
}

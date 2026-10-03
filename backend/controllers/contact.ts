import { Request, Response } from 'express';
import crypto from "crypto";
import nodemailer from 'nodemailer';

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER_PREFIX;
const AUDIENCE_ID = process.env.MAILCHIMP_LIST_ID;

// Where website enquiries are delivered. Override with CONTACT_TO on the server if needed.
const CONTACT_TO = process.env.CONTACT_TO || 'admin@holisticwell-beingsolutions.com';

const clean = (value: unknown, max: number): string =>
  String(value ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);

/** Emails the enquiry to the practice inbox. Returns true when the mail server accepted it. */
async function sendEnquiryEmail(e: {
  firstName: string; lastName: string; email: string; phone: string;
  country: string; subject: string; message: string;
}): Promise<boolean> {
  if (!process.env.EMAIL_FROM || !process.env.EMAIL_PASS) {
    console.error('[contact] EMAIL_FROM / EMAIL_PASS not set: enquiry email not sent');
    return false;
  }
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_FROM, pass: process.env.EMAIL_PASS },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    await transporter.sendMail({
      from: `"HWS Website" <${process.env.EMAIL_FROM}>`,
      to: CONTACT_TO,
      replyTo: `"${e.firstName} ${e.lastName}" <${e.email}>`,
      subject: `New website enquiry: ${e.subject || 'General'} – ${e.firstName} ${e.lastName}`,
      text: [
        'A new enquiry was submitted on holisticwell-beingsolutions.com.',
        '',
        `Name:    ${e.firstName} ${e.lastName}`,
        `Email:   ${e.email}`,
        `Phone:   ${e.phone || '-'}`,
        `Country: ${e.country || '-'}`,
        `Subject: ${e.subject || '-'}`,
        '',
        'Message:',
        e.message,
        '',
        'Reply to this email to respond to the enquirer directly.',
      ].join('\n'),
    });
    return true;
  } catch (error) {
    console.error('[contact] enquiry email failed:', error);
    return false;
  }
}

/** Saves the enquiry in Mailchimp (contact + note). Returns true only if Mailchimp accepted it. */
async function saveToMailchimp(e: {
  firstName: string; lastName: string; email: string; phone: string;
  country: string; subject: string; message: string;
}): Promise<boolean> {
  if (!MAILCHIMP_API_KEY || !MAILCHIMP_SERVER || !AUDIENCE_ID) return false;
  try {
    const auth = `Basic ${Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString("base64")}`;
    const subscriberHash = crypto.createHash("md5").update(e.email.toLowerCase()).digest("hex");
    const base = `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}`;

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
      console.error('[contact] Mailchimp member update failed:', member.status);
      return false;
    }

    const note = await fetch(`${base}/notes`, {
      method: "POST",
      headers: { Authorization: auth, "Content-Type": "application/json" },
      body: JSON.stringify({ note: `Subject: ${e.subject}\n\nMessage:\n${e.message}`.slice(0, 1000) }),
    });
    if (!note.ok) console.error('[contact] Mailchimp note failed:', note.status);
    return true;
  } catch (error) {
    console.error('[contact] Mailchimp submission failed:', error);
    return false;
  }
}

export default async function handler(req: Request, res: Response) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body ?? {};
  const enquiry = {
    firstName: clean(body.firstName, 100),
    lastName: clean(body.lastName, 100),
    email: clean(body.email, 200),
    phone: clean(body.phone, 40),
    country: clean(body.country, 80),
    subject: clean(body.subject, 150),
    message: String(body.message ?? '').trim().slice(0, 5000),
  };

  if (!enquiry.firstName || !enquiry.message || !/^\S+@\S+\.\S+$/.test(enquiry.email)) {
    return res.status(400).json({ error: "Name, a valid email and a message are required" });
  }

  // Deliver by email to the practice inbox and keep the Mailchimp record.
  const [emailed, saved] = await Promise.all([sendEnquiryEmail(enquiry), saveToMailchimp(enquiry)]);

  // Only tell the visitor "sent" if the enquiry actually reached somewhere.
  if (!emailed && !saved) {
    return res.status(502).json({ error: "Enquiry could not be delivered" });
  }
  return res.status(200).json({ success: true, emailed, saved });
}

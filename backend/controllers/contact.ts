import { Request, Response } from 'express';
import crypto from "crypto";

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY!;
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER_PREFIX!;
const AUDIENCE_ID = process.env.MAILCHIMP_LIST_ID!;

export default async function handler(req: Request, res: Response) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    country,
    subject,
    message,
  } = req.body;

  try {
    // Mailchimp uses MD5 hash of lowercase email
    const subscriberHash = crypto
      .createHash("md5")
      .update(email.toLowerCase())
      .digest("hex");

    // Add / Update contact
    await fetch(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Basic ${Buffer.from(
            `anystring:${MAILCHIMP_API_KEY}`
          ).toString("base64")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status_if_new: "subscribed",
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
            PHONE: phone,
            COUNTRY: country,
          },
        }),
      }
    );

    // Add NOTE (message history)
    await fetch(
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}/notes`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(
            `anystring:${MAILCHIMP_API_KEY}`
          ).toString("base64")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          note: `Subject: ${subject}\n\nMessage:\n${message}`,
        }),
      }
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Mailchimp submission failed" });
  }
}
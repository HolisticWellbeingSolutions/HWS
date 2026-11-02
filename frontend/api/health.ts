import type { VercelRequest, VercelResponse } from "@vercel/node";

/** GET /api/health — reports whether the enquiry endpoint is configured (never reveals values). */
export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader("Cache-Control", "no-store");
  return res.status(200).json({
    ok: true,
    email: Boolean(process.env.EMAIL_FROM && process.env.EMAIL_PASS),
    mailchimp: Boolean(
      process.env.MAILCHIMP_API_KEY && process.env.MAILCHIMP_SERVER_PREFIX && process.env.MAILCHIMP_LIST_ID,
    ),
  });
}

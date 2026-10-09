/**
 * Shared helpers for the two enquiry forms (Contact page and the side "Contact" panel).
 */
const API = import.meta.env.VITE_API_URL;

export const CONTACT_PHONE = "+44 7770 778104";
export const CONTACT_EMAIL = "contact@holisticwell-beingsolutions.com";

export interface EnquiryPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  subject: string;
  message: string;
}

/** Accepts international numbers: digits, spaces, +, brackets, dashes; 7–15 digits in total. */
export const isValidPhone = (phone: string): boolean => {
  const value = phone.trim();
  if (!/^\+?[\d\s().-]+$/.test(value)) return false;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
};

/**
 * The enquiry server sleeps when idle and takes up to ~30 seconds to wake.
 * Calling this when a visitor arrives wakes it in the background, so it is
 * ready by the time they submit the form.
 */
let warmedUp = false;
export const warmUpEnquiryServer = (): void => {
  if (warmedUp || !API || typeof window === "undefined") return;
  warmedUp = true;
  fetch(`${API}/health`, { mode: "no-cors", cache: "no-store" }).catch(() => {
    /* ignore: this is only a wake-up call */
  });
};

/** Sends the enquiry. Resolves true only when the server confirms it was delivered. */
export const submitEnquiry = async (payload: EnquiryPayload): Promise<boolean> => {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 60000);
  try {
    const response = await fetch(`${API}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    return response.ok;
  } catch {
    return false;
  } finally {
    window.clearTimeout(timeout);
  }
};

export const ENQUIRY_ERROR_MESSAGE = `We could not send your message. Please try again, or contact us on ${CONTACT_PHONE} or ${CONTACT_EMAIL}.`;

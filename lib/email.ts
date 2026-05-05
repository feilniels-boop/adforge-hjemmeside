import type { LeadPayload } from "./leads";

type SendResult =
  | { sent: true }
  | { sent: false; reason: "not_configured" | "api_error"; detail?: string };

function formatLeadBody(lead: LeadPayload): string {
  const createdAt = new Date().toISOString();
  const lines = [
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Webshop URL: ${lead.webshopUrl}`,
    `Product URL: ${lead.productUrl}`,
    `Product description: ${lead.productDescription}`,
    `Meta ads status: ${lead.metaAdsStatus}`,
    `Monthly ad spend: ${lead.adSpend}`,
    `Biggest challenge: ${lead.biggestChallenge}`,
    `Message: ${lead.message?.trim() ? lead.message.trim() : "(none)"}`,
    `Created at: ${createdAt}`,
  ];
  return lines.join("\n");
}

/**
 * Optional Resend notification. Requires RESEND_API_KEY and LEAD_NOTIFY_EMAIL.
 * Does not throw; returns status for logging.
 */
export async function sendLeadNotificationEmail(
  lead: LeadPayload,
): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  if (!apiKey || !to) {
    return { sent: false, reason: "not_configured" };
  }

  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "StaticForge <onboarding@resend.dev>";

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: "Nyt lead: 3 gratis static koncepter",
        text: formatLeadBody(lead),
        reply_to: lead.email,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => res.statusText);
      return { sent: false, reason: "api_error", detail };
    }
    return { sent: true };
  } catch (e) {
    const detail = e instanceof Error ? e.message : "unknown_error";
    return { sent: false, reason: "api_error", detail };
  }
}

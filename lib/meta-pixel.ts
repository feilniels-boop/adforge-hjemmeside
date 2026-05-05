"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() ?? "";

function debugLog(message: string, payload?: unknown) {
  if (process.env.NODE_ENV !== "development") return;
  if (payload === undefined) {
    console.info(`[Meta Pixel] ${message}`);
    return;
  }
  console.info(`[Meta Pixel] ${message}`, payload);
}

export function getMetaPixelId(): string {
  return pixelId;
}

export function trackLeadEvent(payload: {
  source: "lead_form";
  status: "success";
  value?: number;
  currency?: string;
}) {
  if (!pixelId) {
    debugLog("Lead not tracked: NEXT_PUBLIC_META_PIXEL_ID missing");
    return;
  }

  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    debugLog("Lead not tracked: fbq unavailable");
    return;
  }

  const eventPayload = {
    content_name: "Lead Form Submission",
    source: payload.source,
    status: payload.status,
    ...(typeof payload.value === "number" ? { value: payload.value } : {}),
    ...(payload.currency ? { currency: payload.currency } : {}),
  };

  window.fbq("track", "Lead", eventPayload);
  debugLog("Lead tracked", eventPayload);
}

"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Fire standard Lead event only after /api/leads succeeds.
 * Must call exactly: fbq("track", "Lead")
 */
export function trackMetaLead(): void {
  if (typeof window === "undefined") return;

  const fbq = window.fbq;
  if (typeof fbq !== "function") {
    return;
  }

  fbq("track", "Lead");

  if (process.env.NODE_ENV === "development") {
    console.log("Lead fired");
  }
}

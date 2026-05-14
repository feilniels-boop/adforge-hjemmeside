"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Standard Meta Pixel Lead event. Call only after a lead is successfully
 * persisted and the UI has moved to the success state (see LeadForm).
 * Does not fire on click, validation failure, or API errors.
 */
export function fireMetaPixelLeadEvent(): void {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead");
    if (process.env.NODE_ENV === "development") {
      console.log("Meta Pixel: Lead");
    }
  }
}

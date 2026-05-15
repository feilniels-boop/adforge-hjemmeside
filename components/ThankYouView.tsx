"use client";

import { brand, thankYouPage } from "@/content/site";
import { fireMetaPixelLeadEvent } from "@/lib/meta-pixel";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function ThankYouView() {
  const [secondsLeft, setSecondsLeft] = useState<number>(
    thankYouPage.redirectSeconds,
  );
  const metaLeadSentRef = useRef(false);
  const redirectSentRef = useRef(false);

  useEffect(() => {
    let tsRaw: string | null = null;
    try {
      tsRaw = sessionStorage.getItem(thankYouPage.sessionStorageKey);
    } catch {
      tsRaw = null;
    }

    const ts = tsRaw ? Number(tsRaw) : NaN;
    const fresh =
      Number.isFinite(ts) &&
      Date.now() - ts >= 0 &&
      Date.now() - ts < thankYouPage.sessionMaxAgeMs;

    if (fresh) {
      try {
        sessionStorage.removeItem(thankYouPage.sessionStorageKey);
      } catch {
        /* ignore */
      }
      if (!metaLeadSentRef.current) {
        metaLeadSentRef.current = true;
        fireMetaPixelLeadEvent();
      }
    }
  }, []);

  useEffect(() => {
    let remaining = thankYouPage.redirectSeconds;
    const id = window.setInterval(() => {
      remaining -= 1;
      setSecondsLeft(remaining);
      if (remaining <= 0) {
        window.clearInterval(id);
        if (!redirectSentRef.current) {
          redirectSentRef.current = true;
          window.location.assign(thankYouPage.redirectTo);
        }
      }
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="mx-auto max-w-lg px-4 py-20 sm:py-28">
      <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
        {brand.name}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
        {thankYouPage.headline}
      </h1>
      <p className="mt-5 text-lg leading-relaxed text-zinc-600">
        {thankYouPage.supporting}
      </p>
      <p className="mt-6 text-sm text-zinc-500">
        Du sendes videre om{" "}
        <span className="font-semibold tabular-nums text-zinc-800">{secondsLeft}</span>{" "}
        sekunder.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href={thankYouPage.redirectTo}
          className="inline-flex justify-center rounded-full bg-amber-500 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-amber-900/20 transition-colors hover:bg-amber-600"
        >
          {thankYouPage.ctaLabel}
        </Link>
        <Link
          href="/"
          className="text-center text-sm font-medium text-zinc-600 hover:text-zinc-900 sm:text-left"
        >
          Til forsiden
        </Link>
      </div>
    </div>
  );
}

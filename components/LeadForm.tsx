"use client";

import {
  adSpendOptions,
  biggestChallengeOptions,
  leadSection,
  metaAdsStatusOptions,
  thankYouPage,
} from "@/content/site";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LeadForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      webshopUrl: String(fd.get("webshopUrl") ?? ""),
      productUrl: String(fd.get("productUrl") ?? ""),
      productDescription: String(fd.get("productDescription") ?? ""),
      metaAdsStatus: String(fd.get("metaAdsStatus") ?? ""),
      adSpend: String(fd.get("adSpend") ?? ""),
      biggestChallenge: String(fd.get("biggestChallenge") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as {
        success?: boolean;
        error?: string;
      };
      if (!res.ok || !data.success) {
        setStatus("error");
        setErrorMessage(data.error ?? "Noget gik galt. Prøv igen.");
        return;
      }

      try {
        sessionStorage.setItem(
          thankYouPage.sessionStorageKey,
          String(Date.now()),
        );
      } catch {
        /* private mode / blocked storage — thank-you page still works, Meta Lead may not qualify */
      }
      form.reset();
      router.push(thankYouPage.path);
    } catch {
      setStatus("error");
      setErrorMessage("Kunne ikke sende. Tjek din forbindelse og prøv igen.");
    }
  }

  const fieldClass =
    "mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-zinc-900 outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-400/30";

  return (
    <section
      id={leadSection.id}
      className="scroll-mt-32 border-b border-zinc-200 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(251,191,36,0.12),transparent)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl lg:text-[2.4rem] lg:leading-tight">
              {leadSection.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              {leadSection.body}
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-relaxed text-zinc-600">
              {leadSection.bullets.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.35rem] border-2 border-amber-400/50 bg-white p-6 shadow-xl shadow-zinc-300/50 ring-1 ring-zinc-200/80 sm:p-9">
            <form className="space-y-5" onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Navn
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="webshopUrl"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Webshop URL
                  </label>
                  <input
                    id="webshopUrl"
                    name="webshopUrl"
                    type="url"
                    required
                    placeholder="https://"
                    className={cn(fieldClass, "placeholder:text-zinc-400")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="productUrl"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Produkt URL
                  </label>
                  <input
                    id="productUrl"
                    name="productUrl"
                    type="url"
                    required
                    placeholder="https://"
                    className={cn(fieldClass, "placeholder:text-zinc-400")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="productDescription"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Hvad sælger du?
                  </label>
                  <textarea
                    id="productDescription"
                    name="productDescription"
                    required
                    rows={4}
                    placeholder="Kort om produkt, målgruppe og evt. tilbud."
                    className={cn(fieldClass, "resize-y placeholder:text-zinc-400")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="metaAdsStatus"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Kører du Meta ads lige nu?
                  </label>
                  <select
                    id="metaAdsStatus"
                    name="metaAdsStatus"
                    required
                    defaultValue=""
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Vælg
                    </option>
                    {metaAdsStatusOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="adSpend"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Månedligt annonceforbrug (ca.)
                  </label>
                  <select
                    id="adSpend"
                    name="adSpend"
                    required
                    defaultValue=""
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Vælg interval
                    </option>
                    {adSpendOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="biggestChallenge"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Største udfordring
                  </label>
                  <select
                    id="biggestChallenge"
                    name="biggestChallenge"
                    required
                    defaultValue=""
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Vælg
                    </option>
                    {biggestChallengeOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-700"
                  >
                    Ekstra besked (valgfri)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className={cn(fieldClass, "resize-y")}
                  />
                </div>

                {status === "error" && errorMessage && (
                  <p className="text-sm text-red-400" role="alert">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={cn(
                    "w-full rounded-full bg-amber-500 py-4 text-base font-semibold text-white shadow-lg shadow-amber-900/20 transition-colors hover:bg-amber-600",
                    status === "loading" && "cursor-wait opacity-80",
                  )}
                >
                  {status === "loading" ? "Sender…" : leadSection.submitLabel}
                </button>
                <p className="text-center text-xs leading-relaxed text-zinc-600">
                  {leadSection.formNote}
                </p>
              </form>
          </div>
        </div>
      </div>
    </section>
  );
}

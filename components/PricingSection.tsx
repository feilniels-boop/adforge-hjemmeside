import { pricingSection } from "@/content/site";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section
      id={pricingSection.id}
      className="scroll-mt-32 border-b border-zinc-200 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          {pricingSection.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600">
          {pricingSection.intro}
        </p>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {pricingSection.cards.map((card) => (
            <div
              key={card.name}
              className={cn(
                "flex flex-col rounded-3xl border bg-zinc-50/90 p-8",
                card.highlighted
                  ? "border-amber-300/70 shadow-lg shadow-amber-100 ring-1 ring-amber-200/60"
                  : "border-zinc-200",
              )}
            >
              {card.highlighted && (
                <span className="mb-3 w-fit rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
                  Mest fleksibel
                </span>
              )}
              <h3 className="text-xl font-semibold text-zinc-900">{card.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {card.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-zinc-700">
                {card.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={card.cta.href}
                className={cn(
                  "mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors",
                  card.highlighted
                    ? "border-2 border-amber-500/40 bg-amber-500 text-white hover:bg-amber-600"
                    : "border border-zinc-300 bg-white text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50",
                )}
              >
                {card.cta.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

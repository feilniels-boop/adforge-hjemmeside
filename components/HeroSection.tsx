import { hero } from "@/content/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-30%,rgba(251,191,36,0.22),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl sm:leading-[1.06] lg:text-[3.15rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 sm:text-xl">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:justify-center">
            <a
              href={hero.primaryCta.href}
              className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-full bg-amber-500 px-7 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-amber-900/20 transition-colors hover:bg-amber-600 sm:flex-none sm:px-8"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-zinc-300 bg-white px-7 py-3.5 text-base font-semibold text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-50 sm:px-8"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-zinc-500 sm:text-[15px]">
            {hero.trustLine}
          </p>
        </div>
      </div>
    </section>
  );
}

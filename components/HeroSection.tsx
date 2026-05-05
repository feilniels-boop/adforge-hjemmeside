import { hero, heroAdMocks } from "@/content/site";
import { AdCreativeCard } from "./AdCreativeCard";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-30%,rgba(251,191,36,0.22),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-32">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            {hero.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl sm:leading-[1.06] lg:text-[3.15rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 sm:text-xl">
            {hero.subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-stretch">
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
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-zinc-500 sm:text-[15px]">
            {hero.trustLine}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] lg:ml-auto lg:mr-0">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-zinc-100 to-zinc-200/90 ring-1 ring-zinc-200/80 shadow-xl shadow-zinc-400/30" />
            <div className="absolute inset-3 sm:inset-5">
              <div className="relative h-full w-full">
                {heroAdMocks.map((mock, i) => {
                  const rotate = [-7, 5, -3, 6][i] ?? 0;
                  const x = [0, 10, -8, 14][i] ?? 0;
                  const y = [0, 16, 32, 48][i] ?? 0;
                  const scale = 1 - i * 0.035;
                  return (
                    <div
                      key={mock.id}
                      className="absolute top-0 w-[74%] max-w-[290px]"
                      style={{
                        left: "50%",
                        transform: `translate(calc(-50% + ${x}px), ${y}px) rotate(${rotate}deg) scale(${scale})`,
                        zIndex: heroAdMocks.length - i,
                      }}
                    >
                      <AdCreativeCard
                        brandLabel={mock.brandLabel}
                        angleLabel={mock.angleLabel}
                        hookLine={mock.hook}
                        ctaBadge={mock.ctaBadge}
                        accentHue={mock.accentHue}
                        imageSrc={mock.imageSrc}
                        aspect="vertical"
                        className="ring-2 ring-white shadow-2xl shadow-zinc-400/40"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

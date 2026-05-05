import { portfolioItems, portfolioSection } from "@/content/site";
import { AdCreativeCard } from "./AdCreativeCard";

const cardShell = "w-[188px] shrink-0 sm:w-[220px] md:w-[236px]";

function MarqueeStrip({ stripKey }: { stripKey: "a" | "b" }) {
  const row = portfolioItems.map((item) => (
    <div key={`${stripKey}-${item.id}`} className={cardShell}>
      <AdCreativeCard
        brandLabel={item.brandLabel}
        angleLabel={item.angleLabel}
        hookLine={item.hook}
        ctaBadge={item.ctaBadge}
        accentHue={item.accentHue}
        imageSrc={item.imageSrc}
        aspect="square"
        showCreativeChrome={false}
      />
    </div>
  ));

  return (
    <>
      <div className={`flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5 md:gap-6 md:pr-6`}>
        {row}
      </div>
      <div
        className={`flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5 md:gap-6 md:pr-6`}
        aria-hidden
      >
        {portfolioItems.map((item) => (
          <div key={`${stripKey}-dup-${item.id}`} className={cardShell}>
            <AdCreativeCard
              brandLabel={item.brandLabel}
              angleLabel={item.angleLabel}
              hookLine={item.hook}
              ctaBadge={item.ctaBadge}
              accentHue={item.accentHue}
              imageSrc={item.imageSrc}
              aspect="square"
              showCreativeChrome={false}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export function PortfolioMarquee() {
  return (
    <section
      id={portfolioSection.id}
      className="scroll-mt-32 border-b border-zinc-200 bg-zinc-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
          {portfolioSection.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          {portfolioSection.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600">
          {portfolioSection.intro}
        </p>
      </div>

      <div className="portfolio-marquee relative mt-12 w-full">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-zinc-50 to-transparent sm:w-16"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-zinc-50 to-transparent sm:w-16"
          aria-hidden
        />

        <div className="relative overflow-hidden py-1">
          <div className="marquee-track flex w-max">
            <MarqueeStrip stripKey="a" />
          </div>
        </div>

        <div className="relative mt-4 overflow-hidden py-1 sm:mt-5">
          <div className="marquee-track marquee-track-reverse flex w-max">
            <MarqueeStrip stripKey="b" />
          </div>
        </div>
      </div>
    </section>
  );
}

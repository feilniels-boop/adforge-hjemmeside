import { founderSection } from "@/content/site";
import Image from "next/image";

export function FounderSection() {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              {founderSection.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              {founderSection.body}
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-200 ring-1 ring-zinc-200/80">
              {founderSection.imageSrc ? (
                <Image
                  src={founderSection.imageSrc}
                  alt={founderSection.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 448px"
                />
              ) : (
                <div className="flex h-full min-h-[280px] flex-col items-center justify-center p-8 text-center">
                  <div className="h-28 w-28 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-100 ring-2 ring-zinc-300" />
                  <p className="mt-8 max-w-xs text-sm leading-relaxed text-zinc-600">
                    {founderSection.placeholderCaption}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

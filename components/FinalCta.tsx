import { finalCta } from "@/content/site";

export function FinalCta() {
  return (
    <section className="bg-zinc-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <div className="rounded-[1.75rem] border border-zinc-200 bg-gradient-to-br from-white to-zinc-100 px-6 py-16 shadow-lg shadow-zinc-200/80 sm:px-12 sm:py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {finalCta.headline}
          </h2>
          <a
            href={finalCta.button.href}
            className="mt-10 inline-flex min-h-[52px] items-center justify-center rounded-full bg-amber-500 px-10 py-3.5 text-base font-semibold text-white shadow-lg shadow-amber-900/15 transition-colors hover:bg-amber-600"
          >
            {finalCta.button.label}
          </a>
        </div>
      </div>
    </section>
  );
}

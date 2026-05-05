import { credibility } from "@/content/site";

export function CredibilityStrip() {
  return (
    <section className="border-b border-zinc-200 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-zinc-500">
          {credibility.title}
        </h2>
        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {credibility.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50/90 p-8 shadow-md shadow-zinc-200/50"
            >
              <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

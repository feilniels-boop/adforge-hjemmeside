import { faqSection } from "@/content/site";

export function FAQSection() {
  return (
    <section
      id={faqSection.id}
      className="scroll-mt-32 border-b border-zinc-200 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          {faqSection.title}
        </h2>
        <div className="mt-12 divide-y divide-zinc-200">
          {faqSection.items.map((item) => (
            <details
              key={item.q}
              className="group py-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-zinc-900 hover:text-zinc-700">
                {item.q}
                <span className="shrink-0 text-zinc-400 transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

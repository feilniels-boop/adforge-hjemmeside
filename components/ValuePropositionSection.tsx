import { valuePropositionSection } from "@/content/site";

export function ValuePropositionSection() {
  return (
    <section
      id={valuePropositionSection.id}
      className="scroll-mt-32 border-b border-zinc-200 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          {valuePropositionSection.title}
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600">
          {valuePropositionSection.body}
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {valuePropositionSection.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-8 shadow-md shadow-zinc-200/60"
            >
              <h3 className="text-lg font-semibold text-zinc-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

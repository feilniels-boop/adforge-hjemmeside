import { processSection } from "@/content/site";

export function ProcessSection() {
  return (
    <section
      id={processSection.id}
      className="scroll-mt-32 border-b border-zinc-200 bg-zinc-50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          {processSection.title}
        </h2>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSection.steps.map((step, i) => (
            <li key={step.title} className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-800 ring-1 ring-amber-200">
                {i + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-zinc-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

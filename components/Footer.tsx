import { brand, footer } from "@/content/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:flex-row sm:items-center sm:px-6">
        <div>
          <Link href="/" className="font-semibold text-zinc-900">
            {brand.name}
          </Link>
          <p className="mt-1 text-sm text-zinc-600">{footer.note}</p>
        </div>
        <nav className="flex flex-wrap gap-8 text-sm text-zinc-600">
          {footer.links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-zinc-900">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

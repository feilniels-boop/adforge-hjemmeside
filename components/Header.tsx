"use client";

import { brand, nav } from "@/content/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/90 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center"
          aria-label={brand.name}
          onClick={() => setOpen(false)}
        >
          <Logo priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-amber-900/15 transition-colors hover:bg-amber-600"
          >
            {nav.cta.label}
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white p-2.5 text-zinc-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex h-5 w-5 flex-col justify-center gap-1">
            <span
              className={cn(
                "h-0.5 w-full origin-center bg-zinc-800 transition-transform duration-200",
                open && "translate-y-[3px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full bg-zinc-800 transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full origin-center bg-zinc-800 transition-transform duration-200",
                open && "-translate-y-[3px] -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto border-t border-zinc-200 bg-white px-4 py-5 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="flex flex-col gap-1">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-2 py-3 text-sm text-zinc-700 active:bg-zinc-100"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={nav.cta.href}
            className="mt-3 rounded-full bg-amber-500 py-3.5 text-center text-sm font-semibold text-white shadow-md shadow-amber-900/15"
            onClick={() => setOpen(false)}
          >
            {nav.cta.label}
          </a>
        </div>
      </div>
    </header>
  );
}

import Image from "next/image";
import { cn } from "@/lib/utils";

export type AdCreativeCardProps = {
  brandLabel: string;
  angleLabel: string;
  hookLine: string;
  ctaBadge: string;
  accentHue: number;
  imageSrc?: string | null;
  aspect?: "vertical" | "square";
  /** When false: no top pills, no “CONCEPT PREVIEW” watermark, no tint wash — image only (portfolio marquee). */
  showCreativeChrome?: boolean;
  className?: string;
};

export function AdCreativeCard({
  brandLabel,
  angleLabel,
  hookLine,
  ctaBadge,
  accentHue,
  imageSrc,
  aspect = "vertical",
  showCreativeChrome = true,
  className,
}: AdCreativeCardProps) {
  void ctaBadge;
  const aspectClass =
    aspect === "vertical" ? "aspect-[9/16] max-h-[min(72vw,520px)]" : "aspect-square";

  const imageAlt = showCreativeChrome
    ? `${brandLabel} — ${angleLabel}`
    : `${brandLabel}: ${hookLine}`;

  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-300/50",
        aspectClass,
        className,
      )}
    >
      {showCreativeChrome && (
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.55]"
          style={{
            background: `linear-gradient(145deg, hsla(${accentHue}, 45%, 92%, 1) 0%, hsla(${accentHue}, 35%, 88%, 1) 45%, #fafafa 100%)`,
          }}
        />
      )}

      {imageSrc ? (
        <div className="relative z-[1] h-full w-full bg-zinc-100">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 320px"
          />
        </div>
      ) : (
        <MockCreative accentHue={accentHue} hookLine={hookLine} />
      )}

      {showCreativeChrome && (
        <>
          <div className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center">
            <span
              className="rotate-[-18deg] select-none text-[clamp(0.65rem,2.5vw,0.85rem)] font-bold uppercase tracking-[0.2em] text-zinc-400/25 sm:text-sm"
              aria-hidden
            >
              CONCEPT PREVIEW
            </span>
          </div>

          <div className="absolute inset-x-0 top-0 z-[4] flex items-start justify-between gap-2 p-3">
            <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-zinc-800 ring-1 ring-zinc-200/80 backdrop-blur-sm sm:text-[11px]">
              {brandLabel}
            </span>
            <span className="max-w-[55%] rounded-full bg-zinc-900/90 px-2.5 py-1 text-[10px] text-white ring-1 ring-zinc-700 backdrop-blur-sm sm:text-[11px]">
              {angleLabel}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

function MockCreative({
  accentHue,
  hookLine,
}: {
  accentHue: number;
  hookLine: string;
}) {
  return (
    <div className="relative z-[1] flex h-full flex-col p-3 pt-14">
      <div className="flex flex-1 flex-col gap-3 rounded-xl border border-zinc-200/80 bg-white/70 p-3 ring-1 ring-white/80 backdrop-blur-[2px]">
        <p className="text-left text-[13px] font-semibold leading-snug tracking-tight text-zinc-900 sm:text-sm">
          {hookLine}
        </p>

        <div
          className="relative min-h-[88px] flex-1 overflow-hidden rounded-lg border border-zinc-200 ring-1 ring-zinc-100"
          style={{
            background: `linear-gradient(180deg, hsla(${accentHue}, 50%, 88%, 0.9) 0%, hsla(${accentHue}, 30%, 96%, 1) 100%)`,
          }}
        >
          <div className="absolute inset-3 rounded-md bg-gradient-to-b from-white/80 to-white/40" />
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-end justify-between gap-2">
            <div className="h-12 w-12 shrink-0 rounded-lg bg-zinc-200/90 ring-1 ring-zinc-300" />
            <div className="flex min-w-0 flex-1 flex-col gap-1.5">
              <div className="h-2 w-[75%] max-w-[120px] rounded bg-zinc-300/90" />
              <div className="h-2 w-[50%] max-w-[80px] rounded bg-zinc-200" />
            </div>
          </div>
        </div>

        <p className="line-clamp-2 text-left text-[10px] leading-snug text-zinc-500 sm:text-[11px]">
          Layout + vinkel — viser hook, layout og visuel retning.
        </p>
      </div>
    </div>
  );
}

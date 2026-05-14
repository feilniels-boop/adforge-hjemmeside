export function cn(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

/** In-place Fisher–Yates shuffle of a shallow copy (does not mutate the input). */
export function shuffleArray<T>(items: readonly T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

function hasLinearAdjacentSameBrand<T>(
  items: readonly T[],
  getBrand: (item: T) => string,
): boolean {
  for (let i = 0; i < items.length - 1; i++) {
    if (getBrand(items[i]!) === getBrand(items[i + 1]!)) return true;
  }
  return false;
}

function isCircularBrandArrangementValid<T>(
  items: readonly T[],
  getBrand: (item: T) => string,
): boolean {
  if (items.length <= 1) return true;
  if (getBrand(items[0]!) === getBrand(items[items.length - 1]!)) return false;
  return !hasLinearAdjacentSameBrand(items, getBrand);
}

/**
 * Orders items so the same brand is not immediately next to another (linear),
 * then fixes wrap adjacency for infinite marquees (first/last must differ).
 * Uses greedy picks weighted by remaining per-brand count; shuffles within each brand.
 */
export function orderByBrandAvoidAdjacentCircular<T>(
  items: readonly T[],
  getBrand: (item: T) => string,
): T[] {
  if (items.length <= 1) return [...items];

  for (let attempt = 0; attempt < 48; attempt++) {
    const buckets = new Map<string, T[]>();
    for (const item of items) {
      const brand = getBrand(item);
      const list = buckets.get(brand);
      if (list) list.push(item);
      else buckets.set(brand, [item]);
    }
    for (const [brand, list] of [...buckets.entries()]) {
      buckets.set(brand, shuffleArray(list));
    }

    const out: T[] = [];
    let lastBrand: string | null = null;

    const totalLeft = () => {
      let n = 0;
      for (const list of buckets.values()) n += list.length;
      return n;
    };

    while (totalLeft() > 0) {
      const entries = [...buckets.entries()].filter(([, list]) => list.length > 0);
      const candidates = entries.filter(([brand]) => brand !== lastBrand);
      const pool = candidates.length > 0 ? candidates : entries;
      pool.sort((a, b) => b[1].length - a[1].length);
      const [, list] = pool[0]!;
      const next = list.pop();
      if (!next) break;
      out.push(next);
      lastBrand = getBrand(next);
    }

    if (hasLinearAdjacentSameBrand(out, getBrand)) continue;

    if (isCircularBrandArrangementValid(out, getBrand)) return out;

    const n = out.length;
    let swapped: T[] | null = null;
    for (let j = 1; j < n - 1; j++) {
      const trial = [...out];
      [trial[j], trial[n - 1]] = [trial[n - 1]!, trial[j]!];
      if (
        !hasLinearAdjacentSameBrand(trial, getBrand) &&
        getBrand(trial[0]!) !== getBrand(trial[n - 1]!)
      ) {
        swapped = trial;
        break;
      }
    }
    if (swapped) return swapped;

    for (let r = 1; r < n; r++) {
      const rotated = [...out.slice(r), ...out.slice(0, r)];
      if (isCircularBrandArrangementValid(rotated, getBrand)) return rotated;
    }
  }

  return shuffleArray([...items]);
}

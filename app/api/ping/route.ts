import { NextResponse } from "next/server";

/** Tiny health check — should return immediately when dev server is up. */
export function GET() {
  return NextResponse.json({ ok: true, now: Date.now() });
}

import { sendLeadNotificationEmail } from "@/lib/email";
import {
  leadLogSummary,
  persistLead,
  validateLeadPayload,
} from "@/lib/leads";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Ugyldig JSON." },
      { status: 400 },
    );
  }

  const parsed = validateLeadPayload(json);
  if (!parsed.ok) {
    return NextResponse.json(
      { success: false, error: parsed.error },
      { status: 400 },
    );
  }

  const lead = parsed.data;
  const hasDb = Boolean(process.env.DATABASE_URL);
  const isDev = process.env.NODE_ENV === "development";

  try {
    if (hasDb) {
      await persistLead(lead);
    }
  } catch (e) {
    console.error("[leads] database error", e);
    return NextResponse.json(
      {
        success: false,
        error:
          "Vi kunne ikke gemme din forespørgsel lige nu. Prøv igen om lidt.",
      },
      { status: 503 },
    );
  }

  const emailResult = await sendLeadNotificationEmail(lead);
  if (emailResult.sent === false && emailResult.reason === "api_error") {
    console.warn("[leads] resend failed", emailResult.detail);
  }

  if (!hasDb) {
    if (isDev) {
      console.info("[leads] dev fallback (no DATABASE_URL)", leadLogSummary(lead));
      return NextResponse.json({ success: true });
    }
    if (emailResult.sent) {
      return NextResponse.json({ success: true });
    }
    console.error("[leads] production: no DATABASE_URL and email not sent");
    return NextResponse.json(
      {
        success: false,
        error:
          "Modtagelse er midlertidig utilgængelig. Prøv igen senere, eller skriv direkte på email.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ success: true });
}

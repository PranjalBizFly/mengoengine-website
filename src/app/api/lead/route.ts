import { NextResponse } from "next/server";

/**
 * Lead intake endpoint.
 *
 * One endpoint for every form on the site — modal, inline and newsletter — so
 * there is a single place to add a CRM, an email provider or a webhook later.
 *
 * Right now it validates, normalises and logs. `MENGO_LEAD_WEBHOOK` forwards the
 * payload when set, which is the intended production wiring: point it at the
 * inbox, CRM or automation the team actually uses. Nothing here stores personal
 * data on this server.
 */

export const runtime = "nodejs";

const MAX_FIELD = 4000;
const ALLOWED_INTENTS = new Set([
  "waitlist",
  "demo",
  "sales",
  "expert",
  "download",
  "enquiry",
  "investor",
  "newsletter",
]);

interface LeadPayload {
  intent: string;
  email: string;
  source: string;
  name?: string;
  company?: string;
  phone?: string;
  website?: string;
  industry?: string;
  message?: string;
  subject?: string | null;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot. A real person cannot see this field, so anything in it is a bot.
  // Answer 200 so the bot has no signal that it was rejected.
  if (typeof body.company_website === "string" && body.company_website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = clean(body.email);
  if (!email || !isEmail(email)) {
    return NextResponse.json({ error: "A valid email address is required" }, { status: 400 });
  }

  const intent = clean(body.intent) ?? "enquiry";
  if (!ALLOWED_INTENTS.has(intent)) {
    return NextResponse.json({ error: "Unknown intent" }, { status: 400 });
  }

  const payload: LeadPayload = {
    intent,
    email,
    source: clean(body.source) ?? "/",
    name: clean(body.name),
    company: clean(body.company),
    phone: clean(body.phone),
    website: clean(body.website),
    industry: clean(body.industry),
    message: clean(body.message),
    subject: clean(body.subject) ?? null,
  };

  const webhook = process.env.MENGO_LEAD_WEBHOOK;
  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, receivedAt: new Date().toISOString() }),
      });
      if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
    } catch (error) {
      // The visitor did their part; a downstream failure should be our problem,
      // not theirs. Log loudly so it is visible in server logs and still 200.
      console.error("[lead] webhook delivery failed", error);
      return NextResponse.json({ ok: true, delivered: false });
    }
  } else {
    console.info("[lead] received", { intent: payload.intent, source: payload.source, subject: payload.subject });
  }

  return NextResponse.json({ ok: true, delivered: Boolean(webhook) });
}

function clean(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim().slice(0, MAX_FIELD);
  return trimmed === "" ? undefined : trimmed;
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

import { NextResponse } from "next/server";
import { saveEntry } from "@/lib/store";
import { ROLES, type Role } from "@/lib/site";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
  // Honeypot: real people never fill the hidden "website" field. Pretend it worked.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const email = clean(body.email, 254).toLowerCase();
  const role = clean(body.role, 20) as Role;
  if (!EMAIL.test(email)) return NextResponse.json({ error: "email" }, { status: 422 });
  if (!ROLES.includes(role)) return NextResponse.json({ error: "role" }, { status: 422 });

  const result = await saveEntry({
    email,
    role,
    name: clean(body.name, 120) || null,
    company: clean(body.company, 160) || null,
    locale: clean(body.locale, 5) === "es" ? "es" : "en",
    source: clean(body.source, 40) || "home",
  });
  if (!result.ok) return NextResponse.json({ error: result.reason }, { status: 503 });
  return NextResponse.json({ ok: true });
}

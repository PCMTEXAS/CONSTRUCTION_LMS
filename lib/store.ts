// Where early-access sign-ups are kept.
// - Supabase table `waitlist` when SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set
//   (server-only secrets, set in Vercel by the owner; schema in supabase/migrations).
// - Local development without them: one JSON line per entry in .data/waitlist.ndjson.
// - Anywhere else without them: refuse, so no entry is silently lost.
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import type { Role } from "./site";

export type WaitlistEntry = {
  email: string;
  role: Role;
  name: string | null;
  company: string | null;
  locale: string;
  source: string;
};

export type SaveResult = { ok: true } | { ok: false; reason: "not_configured" | "failed" };

export async function saveEntry(entry: WaitlistEntry): Promise<SaveResult> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (url && key) {
    const res = await fetch(`${url}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(entry),
    });
    // 409 = this email and role are already on the list; treat as success.
    if (res.ok || res.status === 409) return { ok: true };
    console.error("waitlist insert failed", res.status, await res.text());
    return { ok: false, reason: "failed" };
  }
  if (process.env.NODE_ENV !== "production" || process.env.WAITLIST_LOCAL_FILE === "true") {
    const dir = path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "waitlist.ndjson"), JSON.stringify({ ...entry, created_at: new Date().toISOString() }) + "\n");
    return { ok: true };
  }
  return { ok: false, reason: "not_configured" };
}

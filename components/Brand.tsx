// Wordmark: an amber "beam" mark plus the name in live text (crisp, translatable, no image request).
// Approved by the owner, 23 Nov 2026, as ConstructionLMS's own identity.
import { t, type Locale } from "@/lib/i18n";
import { SHOW_PLACEHOLDERS } from "@/lib/site";
export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className={`logo${onDark ? " on-dark" : ""}`}>
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true" focusable="false">
        <rect width="30" height="30" rx="6" fill="var(--amber)" />
        {/* I-beam */}
        <path d="M8 8h14v3.5h-5v7h5V22H8v-3.5h5v-7H8z" fill="var(--ink)" />
      </svg>
      <span>
        Construction<b>LMS</b>
      </span>
    </span>
  );
}

/** A clearly marked slot for proof we do not have yet. Never rendered once indexing is on. */
export function ProofSlot({ label, inline = false, locale = "en" }: { label: string; inline?: boolean; locale?: Locale }) {
  if (!SHOW_PLACEHOLDERS) return null;
  return (
    <div className={`proof-slot${inline ? " inline" : ""}`} role="note">
      <strong>{t(locale).placeholder}</strong> {label}
    </div>
  );
}

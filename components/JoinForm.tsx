"use client";
// Early-access form. Few fields: email and role are required; name and company are optional.
// Role can be preset by links such as href="?role=employer#join".
import { useEffect, useId, useRef, useState } from "react";
import { t, type Locale } from "@/lib/i18n";
import { ROLES, type Role } from "@/lib/site";

type Status = "idle" | "sending" | "done" | "error";
const track = (event: string, params: Record<string, string> = {}) =>
  (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag?.("event", event, params);

type Props = { locale?: Locale; source?: string; defaultRole?: Role };

export function JoinForm({ locale = "en", source = "home", defaultRole = "learner" }: Props) {
  const f = t(locale).form;
  const uid = useId();
  const [role, setRole] = useState<Role>(defaultRole);
  const [status, setStatus] = useState<Status>("idle");
  const [emailError, setEmailError] = useState("");
  const started = useRef(false);
  const doneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preset = new URLSearchParams(window.location.search).get("role");
    if (ROLES.includes(preset as Role)) setRole(preset as Role);
    // Links with data-role preset the role without a page reload.
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-role]");
      if (el?.dataset.role && ROLES.includes(el.dataset.role as Role)) setRole(el.dataset.role as Role);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (status === "done") doneRef.current?.focus();
  }, [status]);

  function onFirstInput() {
    if (started.current) return;
    started.current = true;
    track("form_start", { form: "join" });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email ?? "")) {
      setEmailError(f.emailError);
      e.currentTarget.querySelector<HTMLInputElement>("input[name=email]")?.focus();
      return;
    }
    setEmailError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, role, locale, source }),
      });
      if (!res.ok) throw new Error(String(res.status));
      track("form_submit", { form: "join", role });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="form-card done" ref={doneRef} tabIndex={-1} role="status">
        <h3>{f.doneTitle}</h3>
        <p>
          {f.done}
          {role === "employer" ? f.doneEmployer : null}
          {role === "vendor" ? f.doneVendor : null}
        </p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit} onInput={onFirstInput} noValidate aria-describedby={`${uid}-req`}>
      <p id={`${uid}-req`} className="fine">{f.required}</p>

      <fieldset>
        <legend>{f.which}</legend>
        {ROLES.map((r) => (
          <label key={r} className="radio">
            <input type="radio" name="role" value={r} checked={role === r} onChange={() => setRole(r)} />
            {f.roles[r]}
          </label>
        ))}
      </fieldset>

      <label htmlFor={`${uid}-email`}>{f.email}</label>
      <input
        id={`${uid}-email`}
        name="email"
        type="email"
        autoComplete="email"
        required
        aria-required="true"
        aria-invalid={emailError ? "true" : undefined}
        aria-describedby={emailError ? `${uid}-email-err` : undefined}
      />
      {emailError ? <p id={`${uid}-email-err`} className="field-error">{emailError}</p> : null}

      <label htmlFor={`${uid}-name`}>{f.name}</label>
      <input id={`${uid}-name`} name="name" type="text" autoComplete="name" />

      {role !== "learner" ? (
        <>
          <label htmlFor={`${uid}-company`}>{f.company}</label>
          <input id={`${uid}-company`} name="company" type="text" autoComplete="organization" />
        </>
      ) : null}

      {/* Honeypot for bots: hidden from people and screen readers */}
      <div className="hp" aria-hidden="true">
        <label htmlFor={`${uid}-website`}>Website</label>
        <input id={`${uid}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? f.sending : f.submit}
      </button>
      {status === "error" ? (
        <p className="field-error" role="alert">{f.error}</p>
      ) : null}
      <p className="fine">{f.fine}</p>
    </form>
  );
}

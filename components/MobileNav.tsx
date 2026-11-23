"use client";
// Phone and tablet menu (under 1200px, where the desktop links are hidden).
// A labelled "Menu" button opens a panel with the same links as the desktop nav.
// Closes on a link tap, Escape (focus returns to the button) or a tap outside.
// On phones (under 560px) the header's "Get free access" button moves into this panel.
import { useEffect, useRef, useState } from "react";
import { LangSwitch } from "@/components/LangSwitch";
import type { NavItem } from "@/components/nav";

type Props = { items: NavItem[]; menuLabel: string; navLabel: string; ctaLabel: string };

export function MobileNav({ items, menuLabel, navLabel, ctaLabel }: Props) {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div className="mobile-nav" ref={wrap}>
      <button
        ref={button}
        type="button"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20">
          {open ? (
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          ) : (
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          )}
        </svg>
        {menuLabel}
      </button>
      <nav id="mobile-menu" aria-label={navLabel} className="mobile-menu" hidden={!open}>
        <ul>
          {items.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
            </li>
          ))}
        </ul>
        <p className="mobile-menu-cta">
          <a className="btn btn-primary" href="#join" data-role="learner" data-cta-event="join" data-cta-location="menu" onClick={() => setOpen(false)}>
            {ctaLabel}
          </a>
        </p>
        <p className="mobile-menu-lang">
          <LangSwitch />
        </p>
      </nav>
    </div>
  );
}

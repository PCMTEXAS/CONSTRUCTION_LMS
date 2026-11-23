import type { Metadata } from "next";
import { JoinSection } from "@/components/JoinSection";
import { PageHero } from "@/components/PageHero";

// DRAFT: not reviewed by counsel. Kept out of the sitemap and never indexed until approved.
export const metadata: Metadata = {
  title: "Terms of use (draft)",
  description: "ConstructionLMS terms of use. Being prepared with legal counsel.",
  alternates: { canonical: "/terms/" },
  robots: { index: false, follow: true },
};

export default function Terms() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Terms of use"
        title="Terms of use"
        lede="Our terms of use are being prepared with legal counsel and will be published before courses open."
      />
      <section className="section">
        <div className="container narrow">
          <p className="draft-note" role="note"><strong>Draft, not yet in effect.</strong> This page is under legal review.</p>
        </div>
      </section>
      <JoinSection source="terms" />
    </main>
  );
}

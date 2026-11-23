import type { Metadata } from "next";
import { JoinSection } from "@/components/JoinSection";
import { PageHero } from "@/components/PageHero";

// DRAFT: not reviewed by counsel. Kept out of the sitemap and never indexed until approved.
export const metadata: Metadata = {
  title: "Privacy (draft)",
  description: "What the ConstructionLMS early-access form collects and why. Draft pending legal review.",
  alternates: { canonical: "/privacy/" },
  robots: { index: false, follow: true },
};

export default function Privacy() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Privacy"
        title="Privacy"
        lede="Our full privacy policy is being prepared with legal counsel and will be published before courses open."
      />
      <section className="section">
        <div className="container narrow">
          <p className="draft-note" role="note"><strong>Draft, not yet in effect.</strong> This page is under legal review.</p>
          <h2>What the early-access form collects</h2>
          <p>
            Which option describes you (learner, employer or vendor), your email address, and, if you give them, your name
            and company. We also record the language of the page and which page you signed up from.
          </p>
          <h2>Why</h2>
          <p>To email you about ConstructionLMS: when courses open, team-plan details or vendor spaces, depending on the option you chose.</p>
          <h2>Where it is kept</h2>
          <p>In a database hosted in the United States.</p>
        </div>
      </section>
      <JoinSection source="privacy" />
    </main>
  );
}

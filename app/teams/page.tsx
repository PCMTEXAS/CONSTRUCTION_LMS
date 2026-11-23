import type { Metadata } from "next";
import { ProofSlot } from "@/components/Brand";
import { JoinSection } from "@/components/JoinSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Team plans for construction employers",
  description:
    "Assign training by trade and role, track compliance and expiring training, and get reports you can hand to an owner or inspector. Coming soon.",
  alternates: { canonical: "/teams/" },
};

export default function Teams() {
  return (
    <main id="main">
      <PageHero
        eyebrow="For employers · Coming soon"
        title="Train your whole crew and prove it."
        lede="Team plans add assigned training, compliance tracking and reports on top of the free library, in a space branded for your company."
      >
        <a className="btn btn-primary" href="#join" data-role="employer" data-cta-event="join_employer" data-cta-location="teams-hero">
          Talk to us about team plans
        </a>
      </PageHero>

      <section className="section">
        <div className="container split">
          <div>
            <h2>What a team plan gives you</h2>
            <ul className="check-list">
              <li>Assign learning paths by trade and role</li>
              <li>Track compliance and expiring training</li>
              <li>Reports you can hand to an owner or inspector</li>
              <li>A branded space for your company</li>
              <li>Every course in English and Spanish, with a certificate for each one</li>
            </ul>
          </div>
          <div className="aside-stack">
            <ProofSlot label="result from an employer: time saved or completion rate, with a named company." />
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container">
          <div className="section-head">
            <h2>How it will work</h2>
          </div>
          <ol className="steps">
            <li>
              <h3>Set up your crew</h3>
              <p>Add your people and group them by trade, role or jobsite.</p>
            </li>
            <li>
              <h3>Assign the training</h3>
              <p>Pick courses or learning paths for each group. Your crew learns in English or Spanish.</p>
            </li>
            <li>
              <h3>See who finished</h3>
              <p>Track completions and expiring training, and pull reports when you need them.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>Pricing</h2>
          <p>Team-plan pricing is not set yet. Join the list and we&rsquo;ll send the details as soon as they&rsquo;re ready.</p>
        </div>
      </section>

      <JoinSection
        source="teams"
        role="employer"
        heading="Talk to us about team plans."
        intro="Tell us about your crew and we&rsquo;ll send team-plan details as soon as they&rsquo;re ready."
      />
    </main>
  );
}

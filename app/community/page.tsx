import type { Metadata } from "next";
import { JoinSection } from "@/components/JoinSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Construction community by trade and role",
  description:
    "A moderated community organized by trade and role, with questions linked to each lesson and live sessions with experienced practitioners. Planned.",
  alternates: { canonical: "/community/" },
};

const SPACES = ["Superintendents", "Foremen", "Safety managers", "Electrical", "Concrete", "Equipment operators"];

export default function Community() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Community · Planned"
        title="Ask people who do the work."
        lede="A moderated community organized by trade and role, linked to the courses, with regular live sessions."
      >
        <a className="btn btn-primary" href="#join" data-role="learner" data-cta-event="join" data-cta-location="community-hero">
          Get free early access
        </a>
      </PageHero>

      <section className="section dark">
        <div className="container split">
          <div>
            <h2>The first spaces</h2>
            <p>Each trade and role gets its own space. These are the first ones planned.</p>
          </div>
          <ul className="chips" aria-label="First community spaces (planned)">
            {SPACES.map((s) => (
              <li key={s} className="chip">{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ol className="steps">
            <li>
              <h3>Questions on every lesson</h3>
              <p>Ask about a lesson right where you are, and see what others asked before you.</p>
            </li>
            <li>
              <h3>Live sessions</h3>
              <p>Regular sessions with experienced practitioners and vendor specialists.</p>
            </li>
            <li>
              <h3>Recognition</h3>
              <p>Members who help others get recognized for it.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section tint">
        <div className="container narrow">
          <h2>House rules</h2>
          <ul className="problem-list">
            <li><strong>Safety first.</strong> Unsafe advice is removed quickly. For safety questions, check the standard or ask a qualified person on your site.</li>
            <li><strong>No sales pitches.</strong> Vendors are welcome to help, not to advertise.</li>
            <li><strong>Moderated.</strong> Every space has moderators who apply these rules.</li>
          </ul>
        </div>
      </section>

      <JoinSection source="community" />
    </main>
  );
}

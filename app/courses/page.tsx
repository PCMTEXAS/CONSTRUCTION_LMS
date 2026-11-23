import type { Metadata } from "next";
import { JoinSection } from "@/components/JoinSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Free construction courses in English and Spanish",
  description:
    "Short, practical jobsite courses on safety basics, toolbox talks, equipment orientation and jobsite software. Free for learners, with a certificate for every course.",
  alternates: { canonical: "/courses/" },
};

export default function Courses() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Free course library"
        title="Short, practical courses for the jobsite."
        lede="Free for learners, in English and Spanish, with a certificate for every completed course. The launch library is in development."
      >
        <a className="btn btn-primary" href="#join" data-role="learner" data-cta-event="join" data-cta-location="courses-hero">
          Get free early access
        </a>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>The first topics</h2>
          </div>
          <ul className="topics">
            <li><h3>Safety basics</h3><p>Falls, ladders, PPE, electrical and struck-by hazards.</p></li>
            <li><h3>Toolbox talks</h3><p>Ready-to-run talks a foreman can lead in ten minutes.</p></li>
            <li><h3>Equipment orientation</h3><p>Walk-arounds and safe operation basics before the first shift.</p></li>
            <li><h3>Jobsite software</h3><p>How to use the tools your company already runs, step by step.</p></li>
          </ul>
        </div>
      </section>

      <section className="section tint">
        <div className="container split">
          <div>
            <h2>What every course includes</h2>
            <ul className="check-list">
              <li>Short lessons that fit a jobsite day</li>
              <li>English and Spanish, and you can switch at any time</li>
              <li>A certificate when you finish, to show your employer</li>
              <li>Runs in a web browser on a phone, tablet or computer</li>
            </ul>
          </div>
          <div>
            <h2>How courses are made</h2>
            <p>
              Courses come from public safety resources, licensed content from training partners, and product training
              from vendors. Nothing is published until we have the right to use it.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2>OSHA 10-hour and 30-hour cards</h2>
          <p>
            We don&rsquo;t issue OSHA Outreach cards. Those come only from OSHA-authorized providers. Our courses cover
            practical jobsite topics and award a ConstructionLMS certificate.
          </p>
        </div>
      </section>

      <JoinSection source="courses" />
    </main>
  );
}

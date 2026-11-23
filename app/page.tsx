// Home page. Section order follows the brief, adapted for a learner-first site:
// hero -> proof bar -> problem -> how it works -> audiences (learners, teams, vendors)
// -> courses -> community -> how pricing works -> FAQ -> final call to action.
import type { Metadata } from "next";
import { ProofSlot } from "@/components/Brand";
import { CoursePreview } from "@/components/CoursePreview";
import { JoinSection } from "@/components/JoinSection";
import { ORG, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Free construction training in English and Spanish | ConstructionLMS" },
  description:
    "Short, practical jobsite courses on safety, toolbox talks, equipment and the software crews use, in English and Spanish, with a certificate for every course. Free for learners.",
  alternates: { canonical: "/" },
};

const FAQS = [
  {
    q: "Is it really free?",
    a: "Yes. Courses in the free library cost nothing for learners. Companies that want assigned training, compliance tracking and reports will be able to buy a team plan.",
  },
  {
    q: "What languages are the courses in?",
    a: "English and Spanish. Every free course is planned in both languages from day one.",
  },
  {
    q: "Do I get a certificate?",
    a: "Yes. Every completed course awards a certificate you can show an employer.",
  },
  {
    q: "Do you issue OSHA 10-hour or 30-hour cards?",
    a: "No. OSHA Outreach cards can only be issued by OSHA-authorized providers. Our courses cover practical jobsite topics and award a ConstructionLMS certificate.",
  },
  {
    q: "Is there a mobile app?",
    a: "Not yet. A mobile app is planned for Q1 2027. Until then, courses run in a web browser.",
  },
  {
    q: "When does it open?",
    a: "We are building the first courses now. Join the early-access list and we will email you when they open.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE_URL}/#org`, name: ORG.name, url: SITE_URL, description: ORG.description },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: ORG.name, url: SITE_URL, inLanguage: ["en-US", "es-US"], publisher: { "@id": `${SITE_URL}/#org` } },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <main id="main">
        {/* HERO */}
        <section className="hero">
          <div className="container split">
            <div>
              <p className="eyebrow">Free training for the construction workforce</p>
              <h1>Jobsite training your crew will actually finish.</h1>
              <p className="lede">
                Short, practical courses on safety, toolbox talks, equipment and the software your crew already runs. In
                English and Spanish, with a certificate for every course.
              </p>
              <div className="actions">
                <a className="btn btn-primary" href="#join" data-role="learner" data-cta-event="join" data-cta-location="hero">
                  Get free early access
                </a>
                <a className="btn-link" href="#teams" data-cta-event="teams" data-cta-location="hero">
                  Training a crew? See team plans
                </a>
              </div>
              <p className="reassure">Free for learners. We&rsquo;ll email you when the first courses open.</p>
              <ProofSlot inline label="short quote with a result from a superintendent or safety manager, or a rating." />
            </div>
            <CoursePreview />
          </div>
        </section>

        {/* PROOF BAR */}
        <section className="proof-bar" aria-label="Partners">
          <div className="container">
            <p className="proof-bar-label">Built with construction training partners</p>
            <ProofSlot label="3 to 6 partner or contractor logos, shown only after each agreement allows it." />
          </div>
        </section>

        {/* PROBLEM */}
        <section className="section">
          <div className="container narrow">
            <p className="eyebrow">The problem</p>
            <h2>Construction training is hard to get to the people who need it.</h2>
            <ul className="problem-list">
              <li><strong>Crews change fast.</strong> New hands arrive every week and need the basics before they start.</li>
              <li><strong>Not everyone learns in English.</strong> Training that ignores Spanish speakers misses part of the crew.</li>
              <li><strong>Courses are too long.</strong> Hour-long modules do not fit a jobsite day.</li>
              <li><strong>Proof is scattered.</strong> Sign-in sheets and binders make it hard to show who learned what.</li>
            </ul>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section tint" id="how">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">How it works</p>
              <h2>Three steps, no sales call.</h2>
            </div>
            <ol className="steps">
              <li>
                <h3>Pick a short course</h3>
                <p>Safety basics, toolbox talks, equipment orientation or jobsite software. Most take minutes, not hours.</p>
              </li>
              <li>
                <h3>Learn in your language</h3>
                <p>Switch between English and Spanish at any time.</p>
              </li>
              <li>
                <h3>Earn a certificate</h3>
                <p>Every completed course gives you a certificate to show your employer.</p>
              </li>
            </ol>
          </div>
        </section>

        {/* AUDIENCES */}
        <section className="section" id="courses">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Free course library</p>
              <h2>Start with what keeps people safe and productive.</h2>
              <p className="muted">The launch library is in development. These are the first topics. <a href="/courses/">More about the courses</a>.</p>
            </div>
            <ul className="topics">
              <li><h3>Safety basics</h3><p>Falls, ladders, PPE, electrical and struck-by hazards.</p></li>
              <li><h3>Toolbox talks</h3><p>Ready-to-run talks a foreman can lead in ten minutes.</p></li>
              <li><h3>Equipment orientation</h3><p>Walk-arounds and safe operation basics before the first shift.</p></li>
              <li><h3>Jobsite software</h3><p>How to use the tools your company already runs, step by step.</p></li>
            </ul>
          </div>
        </section>

        <section className="section tint" id="teams">
          <div className="container split">
            <div>
              <p className="eyebrow">For employers · Coming soon</p>
              <h2>See your whole crew&rsquo;s training in one place.</h2>
              <ul className="check-list">
                <li>Assign learning paths by trade and role</li>
                <li>Track compliance and expiring training</li>
                <li>Reports you can hand to an owner or inspector</li>
                <li>A branded space for your company</li>
              </ul>
              <div className="actions">
                <a className="btn btn-secondary" href="#join" data-role="employer" data-cta-event="join_employer" data-cta-location="teams">
                  Talk to us about team plans
                </a>
                <a className="btn-link" href="/teams/">How team plans will work</a>
              </div>
            </div>
            <div className="aside-stack">
              <ProofSlot label="result from an employer: time saved or completion rate, with a named company." />
            </div>
          </div>
        </section>

        <section className="section" id="vendors">
          <div className="container split">
            <div>
              <p className="eyebrow">For vendors · Coming later</p>
              <h2>Train the people who use your product on site.</h2>
              <p>
                Software and materials vendors will be able to publish branded product training, reach the crews who use
                their products, and see who completed it.
              </p>
              <div className="actions">
                <a className="btn btn-secondary" href="#join" data-role="vendor" data-cta-event="join_vendor" data-cta-location="vendors">
                  Talk to us about vendor spaces
                </a>
                <a className="btn-link" href="/vendors/">How vendor spaces will work</a>
              </div>
            </div>
            <div className="aside-stack">
              <ProofSlot label="named vendor partner and what they publish, once agreed." />
            </div>
          </div>
        </section>

        {/* COMMUNITY */}
        <section className="section dark" id="community">
          <div className="container split">
            <div>
              <p className="eyebrow">Community</p>
              <h2>Ask people who do the work.</h2>
              <p>
                A moderated community organized by trade and role, with questions linked to each lesson and regular live
                sessions with experienced practitioners.
              </p>
              <p><a className="on-dark-link" href="/community/">How the community will work</a></p>
            </div>
            <ul className="chips" aria-label="First community spaces (planned)">
              <li className="chip">Superintendents</li>
              <li className="chip">Foremen</li>
              <li className="chip">Safety managers</li>
              <li className="chip">Electrical</li>
              <li className="chip">Concrete</li>
              <li className="chip">Equipment operators</li>
            </ul>
          </div>
        </section>

        {/* PRICING */}
        <section className="section" id="pricing">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">How pricing works</p>
              <h2>Free to learn. Pay only for what a company needs.</h2>
            </div>
            <div className="tiers">
              <div className="tier featured">
                <h3>Learners</h3>
                <p className="price">Free</p>
                <p>Every course in the free library, with a certificate for each one.</p>
              </div>
              <div className="tier">
                <h3>Teams</h3>
                <p className="price">Coming soon</p>
                <p>Assigned paths, compliance tracking, reporting and a company space.</p>
              </div>
              <div className="tier">
                <h3>Vendors</h3>
                <p className="price">Coming later</p>
                <p>Branded product training and completion reports.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section tint" id="faq">
          <div className="container narrow">
            <h2>Questions</h2>
            <div className="faq">
              {FAQS.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <JoinSection source="home" />
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}

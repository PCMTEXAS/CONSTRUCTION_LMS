import type { Metadata } from "next";
import { JoinSection } from "@/components/JoinSection";
import { PageHero } from "@/components/PageHero";
import { ORG } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "ConstructionLMS is a home for practical construction training: free for learners, in English and Spanish, powered by DigitalChalk.",
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About"
        title="A home for practical construction training."
        lede="ConstructionLMS gives the construction workforce free, practical training in English and Spanish, with a certificate for every course."
      />

      <section className="section">
        <div className="container narrow">
          <h2>What we believe</h2>
          <ul className="problem-list">
            <li><strong>Useful first.</strong> The free library has to solve real jobsite problems before we ask anyone to pay.</li>
            <li><strong>Every language on the crew.</strong> Courses are planned in English and Spanish from day one.</li>
            <li><strong>Short beats long.</strong> Lessons fit a jobsite day.</li>
            <li><strong>Proof that travels.</strong> Every completed course gives the learner a certificate.</li>
          </ul>
        </div>
      </section>

      <section className="section tint">
        <div className="container narrow">
          <h2>How it&rsquo;s paid for</h2>
          <p>
            Learners never pay for the free library. Team plans for employers and training spaces for vendors will pay for
            the work.
          </p>
          <h2>Who runs the platform</h2>
          <p>
            ConstructionLMS runs on the{" "}
            <a href={ORG.poweredBy.url} rel="noopener">{ORG.poweredBy.name}</a> learning platform.
          </p>
        </div>
      </section>

      <JoinSection source="about" />
    </main>
  );
}

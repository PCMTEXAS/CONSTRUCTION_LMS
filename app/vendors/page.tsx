import type { Metadata } from "next";
import { ProofSlot } from "@/components/Brand";
import { JoinSection } from "@/components/JoinSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Vendor training spaces",
  description:
    "Software and materials vendors will be able to publish branded product training for the crews who use their products and see who completed it. Coming later.",
  alternates: { canonical: "/vendors/" },
};

export default function Vendors() {
  return (
    <main id="main">
      <PageHero
        eyebrow="For vendors · Coming later"
        title="Train the crews who use your product."
        lede="Software and materials vendors will be able to publish branded product training, reach the people who use their products on site, and see who completed it."
      >
        <a className="btn btn-primary" href="#join" data-role="vendor" data-cta-event="join_vendor" data-cta-location="vendors-hero">
          Talk to us about vendor spaces
        </a>
      </PageHero>

      <section className="section">
        <div className="container split">
          <div>
            <h2>What a vendor space includes</h2>
            <ul className="check-list">
              <li>A branded space for your product training</li>
              <li>Product and safety courses for the crews who use your products</li>
              <li>Completion records for learners who agree to share them with you</li>
              <li>An onboarding kit: content guidelines, templates and a review checklist</li>
            </ul>
          </div>
          <div className="aside-stack">
            <ProofSlot label="named vendor partner and what they publish, once agreed." />
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="container narrow">
          <h2>Learners choose what you see</h2>
          <p>
            Vendors see completion records only for learners who agreed to share them with that vendor. Learners are
            asked when they enrol in a vendor&rsquo;s training, their answer is recorded, and they can withdraw it at any
            time.
          </p>
          <h2>Training, not advertising</h2>
          <p>We review every vendor course against our content guidelines before it goes live.</p>
        </div>
      </section>

      <JoinSection
        source="vendors"
        role="vendor"
        heading="Talk to us about vendor spaces."
        intro="Tell us about your company and someone from our partnerships team will contact you."
      />
    </main>
  );
}

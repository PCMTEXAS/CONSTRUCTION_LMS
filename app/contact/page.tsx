import type { Metadata } from "next";
import { JoinSection } from "@/components/JoinSection";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ConstructionLMS about free courses, team plans or vendor spaces.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        lede="Use the form below. Choose the option that fits you and we&rsquo;ll follow up by email."
      />
      <JoinSection
        source="contact"
        heading="Tell us who you are."
        intro="Learners hear when courses open. Employers get team-plan details. Vendors hear from our partnerships team."
      />
    </main>
  );
}

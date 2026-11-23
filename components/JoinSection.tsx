// Closing sign-up section. Every page ends with it, so "#join" works site-wide.
import { ProofSlot } from "@/components/Brand";
import { JoinForm } from "@/components/JoinForm";
import type { Role } from "@/lib/site";

type Props = { source: string; role?: Role; heading?: string; intro?: string };

export function JoinSection({
  source,
  role = "learner",
  heading = "Be first in when the courses open.",
  intro = "Tell us who you are and we’ll send what matters to you: new courses, team plans or vendor spaces.",
}: Props) {
  return (
    <section className="closing" id="join">
      <div className="container split">
        <div>
          <h2>{heading}</h2>
          <p>{intro}</p>
          <ul className="next-steps">
            <li>1. Join the list (30 seconds).</li>
            <li>2. Get an email when the first courses open.</li>
            <li>3. Sign up free and start learning.</li>
          </ul>
          <ProofSlot inline label="one-line quote plus security and privacy badges." />
        </div>
        <JoinForm source={source} defaultRole={role} />
      </div>
    </section>
  );
}

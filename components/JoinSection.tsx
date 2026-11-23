// Closing sign-up section. Every page ends with it, so "#join" works site-wide.
import { ProofSlot } from "@/components/Brand";
import { JoinForm } from "@/components/JoinForm";
import { t, type Locale } from "@/lib/i18n";
import type { Role } from "@/lib/site";

type Props = { locale: Locale; source: string; role?: Role; heading?: string; intro?: string };

export function JoinSection({ locale, source, role = "learner", heading, intro }: Props) {
  const j = t(locale).join;
  return (
    <section className="closing" id="join">
      <div className="container split">
        <div>
          <h2>{heading ?? j.heading}</h2>
          <p>{intro ?? j.intro}</p>
          <ul className="next-steps">
            {j.steps.map((step) => <li key={step}>{step}</li>)}
          </ul>
          <ProofSlot inline locale={locale} label={j.proof} />
        </div>
        <JoinForm locale={locale} source={source} defaultRole={role} />
      </div>
    </section>
  );
}

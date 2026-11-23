import { JoinSection } from "@/components/JoinSection";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <main id="main">
      <PageHero eyebrow="Page not found" title="We couldn’t find that page." lede="It may have moved, or the address may be mistyped.">
        <a className="btn btn-secondary" href="/">Go to the home page</a>
      </PageHero>
      <JoinSection source="404" />
    </main>
  );
}

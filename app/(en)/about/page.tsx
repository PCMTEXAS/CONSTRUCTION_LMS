import { AboutPage, aboutMeta } from "@/components/pages/About";

export const metadata = aboutMeta("en");

export default function AboutEn() {
  return <AboutPage locale="en" />;
}

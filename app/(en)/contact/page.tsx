import { ContactPage, contactMeta } from "@/components/pages/Contact";

export const metadata = contactMeta("en");

export default function ContactEn() {
  return <ContactPage locale="en" />;
}

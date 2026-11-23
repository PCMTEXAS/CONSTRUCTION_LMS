import { VendorsPage, vendorsMeta } from "@/components/pages/Vendors";

export const metadata = vendorsMeta("en");

export default function VendorsEn() {
  return <VendorsPage locale="en" />;
}

import { VendorsPage, vendorsMeta } from "@/components/pages/Vendors";

export const metadata = vendorsMeta("es");

export default function VendorsEs() {
  return <VendorsPage locale="es" />;
}

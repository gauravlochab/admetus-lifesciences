import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Softgel Capsule Manufacturer India for Jordan — Halal, WHO-GMP",
  description:
    "Halal and WHO-GMP certified softgel capsule manufacturer in India for Jordan. JFDA (Jordan Food and Drug Administration) registration support. 97% Muslim population, regional pharma hub. Nigella Sativa, Vitamin D3, Omega-3. JNPT to Aqaba port (Red Sea) in 7-10 days.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/jordan/",
  },
  openGraph: {
    title:
      "Softgel Capsule Manufacturer India for Jordan — Halal, WHO-GMP",
    description:
      "Halal and WHO-GMP certified softgel capsule manufacturer in India for Jordan. JFDA registration support, 97% Muslim, regional pharma hub. Nigella Sativa, Vitamin D3, Omega-3. JNPT to Aqaba in 7-10 days.",
    url: "https://www.admetuslifesciences.com/export/jordan/",
  },
};

export default function JordanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

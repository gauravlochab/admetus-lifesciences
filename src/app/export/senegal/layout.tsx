import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Softgel Capsule Manufacturer India for Senegal — Halal Certified, WHO-GMP",
  description:
    "Halal certified, WHO-GMP softgel capsule manufacturer in India for Senegalese importers. Senegal — 95% Muslim majority, ECOWAS hub, gateway to Francophone West Africa. DPM registration support, full export documentation. JNPT to Dakar port shipping.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/senegal/",
  },
  openGraph: {
    title:
      "Softgel Capsule Manufacturer India for Senegal — Halal Certified, WHO-GMP",
    description:
      "Halal certified, WHO-GMP softgel capsule manufacturer in India for Senegalese importers. Senegal — 95% Muslim majority, ECOWAS hub, gateway to Francophone West Africa. DPM registration support, full export documentation. JNPT to Dakar port shipping.",
    url: "https://www.admetuslifesciences.com/export/senegal/",
  },
};

export default function SenegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

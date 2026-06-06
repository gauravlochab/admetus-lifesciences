import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Softgel Capsule Manufacturer India for Tunisia — Halal Certified",
  description:
    "Halal certified softgel capsule manufacturer in India exporting to Tunisia. WHO-GMP compliant nutraceutical generics for the Tunisian market — Vitamin D3, Omega-3, Calcitriol K2, Nigella Sativa. DPM-compliant documentation, direct shipping via JNPT to Tunis and Rades.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/tunisia/",
  },
  openGraph: {
    title:
      "Softgel Capsule Manufacturer India for Tunisia — Halal Certified",
    description:
      "Halal certified softgel capsule manufacturer in India exporting to Tunisia. WHO-GMP compliant nutraceutical generics for the Tunisian market — Vitamin D3, Omega-3, Calcitriol K2, Nigella Sativa. DPM-compliant documentation, direct shipping via JNPT to Tunis and Rades.",
    url: "https://www.admetuslifesciences.com/export/tunisia/",
  },
};

export default function TunisiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

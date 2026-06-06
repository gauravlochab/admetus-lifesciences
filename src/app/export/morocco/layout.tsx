import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Softgel Capsule Manufacturer India for Morocco — Halal Certified",
  description:
    "Halal certified softgel capsule manufacturer in India exporting to Morocco. WHO-GMP compliant nutraceutical generics for 37 million consumers — Vitamin D3, Omega-3, Calcitriol K2, Nigella Sativa. DMP-compliant documentation, shipping via JNPT to Casablanca and Tangier.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/morocco/",
  },
  openGraph: {
    title:
      "Softgel Capsule Manufacturer India for Morocco — Halal Certified",
    description:
      "Halal certified softgel capsule manufacturer in India exporting to Morocco. WHO-GMP compliant nutraceutical generics for 37 million consumers — Vitamin D3, Omega-3, Calcitriol K2, Nigella Sativa. DMP-compliant documentation, shipping via JNPT to Casablanca and Tangier.",
    url: "https://www.admetuslifesciences.com/export/morocco/",
  },
};

export default function MoroccoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Softgel Capsule Manufacturer India for Algeria — Halal, WHO-GMP",
  description:
    "Halal and WHO-GMP certified softgel capsule manufacturer in India exporting to Algeria. Nutraceutical generics for 45 million consumers — Vitamin D3, Omega-3, Calcitriol K2, Nigella Sativa. DPH-compliant documentation, direct shipping via JNPT to Algiers and Oran.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/algeria/",
  },
  openGraph: {
    title:
      "Softgel Capsule Manufacturer India for Algeria — Halal, WHO-GMP",
    description:
      "Halal and WHO-GMP certified softgel capsule manufacturer in India exporting to Algeria. Nutraceutical generics for 45 million consumers — Vitamin D3, Omega-3, Calcitriol K2, Nigella Sativa. DPH-compliant documentation, direct shipping via JNPT to Algiers and Oran.",
    url: "https://www.admetuslifesciences.com/export/algeria/",
  },
};

export default function AlgeriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

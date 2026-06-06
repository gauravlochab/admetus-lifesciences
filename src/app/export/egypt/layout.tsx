import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Softgel Capsule Manufacturer India for Egypt — Halal, WHO-GMP",
  description:
    "Halal and WHO-GMP certified softgel capsule manufacturer in India exporting to Egypt. Nutraceutical generics for 105 million consumers — Vitamin D3, Omega-3, Calcitriol K2, Nigella Sativa. EDA-compliant documentation, direct shipping via JNPT to Port Said and Alexandria.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/egypt/",
  },
  openGraph: {
    title:
      "Softgel Capsule Manufacturer India for Egypt — Halal, WHO-GMP",
    description:
      "Halal and WHO-GMP certified softgel capsule manufacturer in India exporting to Egypt. Nutraceutical generics for 105 million consumers — Vitamin D3, Omega-3, Calcitriol K2, Nigella Sativa. EDA-compliant documentation, direct shipping via JNPT to Port Said and Alexandria.",
    url: "https://www.admetuslifesciences.com/export/egypt/",
  },
};

export default function EgyptLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

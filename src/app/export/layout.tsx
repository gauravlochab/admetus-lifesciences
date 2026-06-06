import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Softgel Capsule Exporter India — Halal Certified, WHO-GMP",
  description:
    "Leading softgel capsule exporter from India — Halal, FSSAI, WHO-GMP certified. Serving GCC, Middle East, Africa, ASEAN, Latin America & CIS markets. Nutraceutical export with full documentation — COA, FSC, Free Sale Certificate, country-specific regulatory paperwork.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/",
  },
  openGraph: {
    title: "Softgel Capsule Exporter India — Halal Certified, WHO-GMP",
    description:
      "Leading softgel capsule exporter from India — Halal, FSSAI, WHO-GMP certified. Serving GCC, Middle East, Africa, ASEAN, Latin America & CIS markets. Nutraceutical export with full documentation — COA, FSC, Free Sale Certificate, country-specific regulatory paperwork.",
    url: "https://www.admetuslifesciences.com/export/",
  },
};

export default function ExportLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Softgel Capsule Manufacturer India for Mali — Halal, WHO-GMP",
  description:
    "WHO-GMP and Halal certified softgel capsule manufacturer in India for Malian importers. Mali is 100% import-dependent for pharmaceuticals — 22M Muslim-majority population, DPM-regulated market, minimal regulatory barriers, Nigella Sativa (Habbatus Sauda) and essential nutraceutical formulations. Shipping via JNPT to Dakar to Bamako, 22-28 days.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/mali/",
  },
  openGraph: {
    title:
      "Softgel Capsule Manufacturer India for Mali — Halal, WHO-GMP",
    description:
      "WHO-GMP and Halal certified softgel capsule manufacturer in India for Malian importers. Mali is 100% import-dependent for pharmaceuticals — 22M Muslim-majority population, DPM-regulated market, minimal regulatory barriers, Nigella Sativa (Habbatus Sauda) and essential nutraceutical formulations. Shipping via JNPT to Dakar to Bamako, 22-28 days.",
    url: "https://www.admetuslifesciences.com/export/mali/",
  },
};

export default function MaliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

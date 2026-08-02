import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Certified Softgel Capsule Manufacturer India — GCC & Middle East Export",
  description:
    "Halal certified softgel capsule manufacturer in India for GCC, Middle East, Africa & Southeast Asia markets. WHO-GMP, FSSAI, HACCP certified. Nutraceutical soft gelatin capsules with Halal documentation for import compliance.",
  keywords: [
    "halal certified softgel",
    "halal softgel manufacturer india",
    "halal softgel capsules export",
    "halal nutraceutical manufacturer",
    "kosher certified supplement",
    "who-gmp certified softgel manufacturer",
    "softgel exporter gcc",
    "halal softgel capsules for muslim markets",
    "fssai certified nutraceutical",
  ],
  alternates: {
    canonical: "https://www.admetuslifesciences.com/halal-softgel-manufacturer-india/",
  },
  openGraph: {
    title: "Halal Softgel Capsule Manufacturer India | Admetus Lifesciences",
    description:
      "Halal + WHO-GMP certified nutraceutical softgel manufacturer in India. Export-ready for GCC, Middle East, Africa with full Halal certification documentation.",
    url: "https://www.admetuslifesciences.com/halal-softgel-manufacturer-india/",
  },
};

export default function HalalLayout({ children }: { children: React.ReactNode }) {
  return children;
}

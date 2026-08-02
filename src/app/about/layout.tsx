import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Admetus Lifesciences — Softgel Manufacturer in Haryana",
  description:
    "Founded 2020 by Anudeep Deswal, Admetus Lifesciences is a WHO-GMP certified precision softgel capsule manufacturer in Village Anta, Tehsil Safidon, District Jind, Haryana, India. 10+ formulations, 90%+ women workforce, FSSAI/GMP/HACCP/Halal certified.",
  keywords: [
    "softgel capsule manufacturer india",
    "nutraceutical & ayurvedic softgel capsules",
    "who-gmp certified softgel manufacturer",
    "admetus lifesciences",
    "softgel manufacturer jind haryana",
  ],
  alternates: {
    canonical: "https://www.admetuslifesciences.com/about/",
  },
  openGraph: {
    title: "About Admetus Lifesciences — Softgel Manufacturer in Haryana",
    description:
      "Founded 2020 by Anudeep Deswal, Admetus Lifesciences is a WHO-GMP certified precision softgel capsule manufacturer in Village Anta, Tehsil Safidon, District Jind, Haryana, India. 10+ formulations, 90%+ women workforce, FSSAI/GMP/HACCP/Halal certified.",
    url: "https://www.admetuslifesciences.com/about/",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

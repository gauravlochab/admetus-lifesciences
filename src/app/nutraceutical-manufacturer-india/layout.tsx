import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutraceutical Manufacturer in India — Softgel Capsules & Supplements",
  description:
    "Leading nutraceutical manufacturer in India specializing in softgel capsule formulations — Vitamin D3, Omega-3, Calcitriol K2-7, Glutathione, Krill Oil & 80+ products. WHO-GMP, FSSAI, Halal certified. Contract manufacturing, private label, third party manufacturing & export.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/nutraceutical-manufacturer-india/",
  },
  openGraph: {
    title: "Nutraceutical Manufacturer India | Admetus Lifesciences",
    description:
      "WHO-GMP certified nutraceutical softgel capsule manufacturer in India. 80+ formulations, contract manufacturing, private label & export services.",
    url: "https://www.admetuslifesciences.com/nutraceutical-manufacturer-india/",
  },
};

export default function NutraceuticalLayout({ children }: { children: React.ReactNode }) {
  return children;
}

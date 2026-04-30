import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Admetus Lifesciences — Softgel Manufacturer in Haryana",
  description:
    "Founded 2020 by Anudeep Deswal, Admetus Lifesciences is a WHO-GMP certified precision softgel capsule manufacturer in Jind, Haryana, India. 10+ formulations, 90%+ women workforce, FSSAI/GMP/HACCP/Halal certified.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/about/",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WHO-GMP, FSSAI & HACCP Certified Softgel Manufacturer Quality",
  description:
    "WHO-GMP, FSSAI, HACCP, Halal certified softgel capsule manufacturer — multi-point quality control, batch testing, COA documentation, ICH stability validation. Quality systems for international export.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/quality/",
  },
};

export default function QualityLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description: "FSSAI, GMP, HACCP, Halal, and WHO-GMP certified quality systems ensuring pharmaceutical-grade softgel capsule production.",
};

export default function QualityLayout({ children }: { children: React.ReactNode }) {
  return children;
}

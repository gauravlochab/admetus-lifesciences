import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Softgel Capsule Exporter India for Nepal — Free Trade Agreement, Zero Duty",
  description:
    "Leading softgel capsule exporter from India to Nepal. India-Nepal Free Trade Agreement enables zero/low duty imports. WHO-GMP, FSSAI, Halal certified. Road transport via Birgunj/Biratnagar — 1-3 days transit from Haryana.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/nepal/",
  },
  openGraph: {
    title:
      "Softgel Capsule Exporter India for Nepal — Free Trade Agreement, Zero Duty",
    description:
      "Leading softgel capsule exporter from India to Nepal. India-Nepal Free Trade Agreement enables zero/low duty imports. WHO-GMP, FSSAI, Halal certified. Road transport via Birgunj/Biratnagar — 1-3 days transit from Haryana.",
    url: "https://www.admetuslifesciences.com/export/nepal/",
  },
};

export default function NepalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

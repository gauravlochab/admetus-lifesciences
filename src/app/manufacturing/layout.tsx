import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Softgel Manufacturing Facility in Jind, Haryana — ARBES SGX-806P | WHO-GMP",
  description:
    "WHO-GMP certified softgel & soft gelatin capsule manufacturing facility in Jind, Haryana, India — ARBES SGX-806P encapsulation, Elmach EPI 2000 blister packing, in-house QC laboratory, 7-stage production process. Third party & contract manufacturing available.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/manufacturing/",
  },
  openGraph: {
    title: "Softgel Manufacturing Facility in Jind, Haryana — ARBES SGX-806P | WHO-GMP",
    description:
      "WHO-GMP certified softgel & soft gelatin capsule manufacturing facility in Jind, Haryana, India — ARBES SGX-806P encapsulation, Elmach EPI 2000 blister packing, in-house QC laboratory, 7-stage production process. Third party & contract manufacturing available.",
    url: "https://www.admetuslifesciences.com/manufacturing/",
  },
};

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return children;
}

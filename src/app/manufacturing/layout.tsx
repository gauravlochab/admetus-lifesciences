import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Softgel Manufacturing Facility in Jind, Haryana — ARBES SGX-806P",
  description:
    "WHO-GMP certified softgel manufacturing facility in Jind, Haryana — ARBES SGX-806P encapsulation, Elmach EPI 2000 blister packing, in-house QC laboratory, 7-stage production process from raw material to dispatch.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/manufacturing/",
  },
};

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return children;
}

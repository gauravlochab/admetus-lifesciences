import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Softgel Manufacturing Facility in Jind, Haryana — ARBES SGX-806P | WHO-GMP",
  description:
    "WHO-GMP certified softgel & soft gelatin capsule manufacturing facility in Jind, Haryana, India — ARBES SGX-806P encapsulation, Elmach EPI 2000 blister packing, in-house QC laboratory, 7-stage production process. Third party & contract manufacturing available.",
  keywords: [
    "softgel capsule manufacturing",
    "soft gelatin encapsulation",
    "who-gmp certified softgel manufacturer",
    "gmp certified softgel manufacturer",
    "arbes softgel encapsulation line",
    "blister packing nutraceuticals",
    "custom softgel formulation",
    "softgel manufacturing unit india",
  ],
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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Third Party Softgel Capsule Manufacturer in India — WHO-GMP Certified",
  description:
    "Leading third party softgel capsule manufacturer in India — WHO-GMP, FSSAI, HACCP, Halal certified. Flexible MOQ, 30-45 day lead time, 80+ formulations. Soft gelatin capsule third party manufacturing for pharma & nutraceutical brands.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/third-party-softgel-manufacturer-india/",
  },
  openGraph: {
    title: "Third Party Softgel Capsule Manufacturer India | Admetus Lifesciences",
    description:
      "Third party soft gelatin capsule manufacturing in India — WHO-GMP certified facility in Haryana. Contract manufacturing, private label, custom formulation, PCD pharma services.",
    url: "https://www.admetuslifesciences.com/third-party-softgel-manufacturer-india/",
  },
};

export default function ThirdPartyLayout({ children }: { children: React.ReactNode }) {
  return children;
}

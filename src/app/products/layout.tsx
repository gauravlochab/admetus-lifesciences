import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutraceutical Softgel Capsules — Product Range | Admetus Lifesciences",
  description:
    "Explore 80+ precision-formulated soft gelatin capsules — Vitamin D3 60000 IU, Omega-3, Calcitriol K2-7, Glutathione, Krill Oil and more. Contract manufacturing, private label & third party manufacturing available. WHO-GMP certified facility, India.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/products/",
  },
  openGraph: {
    title: "Nutraceutical Softgel Capsules — Product Range | Admetus Lifesciences",
    description:
      "80+ precision-formulated softgel capsules for contract manufacturing, private label & export. WHO-GMP certified manufacturer in India.",
    url: "https://www.admetuslifesciences.com/products/",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutraceutical Softgel Capsules — Product Range | Admetus Lifesciences",
  description:
    "Explore 80+ precision-formulated soft gelatin capsules — Vitamin D3 60000 IU, Omega-3, Calcitriol K2-7, Glutathione, Krill Oil and more. Contract manufacturing, private label & third party manufacturing available. WHO-GMP certified facility, India.",
  keywords: [
    "vitamin d3 60000 iu softgel",
    "omega 3 softgel manufacturer",
    "krill oil softgel",
    "glutathione softgel capsule",
    "multivitamin softgel capsule",
    "calcitriol calcium k2-7 softgel",
    "nigella sativa softgel",
    "ginseng astaxanthin softgel",
    "lycopene softgel capsule",
    "softgel capsule manufacturer india",
  ],
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

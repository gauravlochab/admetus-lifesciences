import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Label Softgel Capsule Manufacturer in India",
  description:
    "Launch your softgel brand in India — private label softgel capsule manufacturing with 10+ formulations, custom packaging, MOQ flexibility, and full export documentation. WHO-GMP, FSSAI, Halal certified.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/private-label-softgel-manufacturer-india/",
  },
  openGraph: {
    title: "Private Label Softgel Capsule Manufacturer in India | Admetus Lifesciences",
    description:
      "Private label softgel manufacturing — Vitamin D3, Omega-3, Krill Oil, Calcitriol K2 and more. Brand-ready packaging, MOQ flexibility, export-ready documentation.",
    url: "https://www.admetuslifesciences.com/private-label-softgel-manufacturer-india/",
  },
};

export default function PrivateLabelLayout({ children }: { children: React.ReactNode }) {
  return children;
}

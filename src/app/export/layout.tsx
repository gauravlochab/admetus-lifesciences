import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halal Certified Softgel Manufacturer for Export — India",
  description:
    "Halal, FSSAI, WHO-GMP certified softgel capsule manufacturer in India serving GCC, ASEAN, USA, Europe markets. Full export documentation — COA, FSC, country-specific regulatory paperwork.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/",
  },
};

export default function ExportLayout({ children }: { children: React.ReactNode }) {
  return children;
}

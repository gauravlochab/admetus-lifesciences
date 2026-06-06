import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Softgel Capsule Exporter India — Nutraceutical Export to Africa, Middle East, Asia",
  description:
    "Leading softgel capsule exporter from India — nutraceutical & pharmaceutical soft gelatin capsule exports to Africa, Middle East, GCC, Southeast Asia, Latin America, CIS countries. WHO-GMP, Halal, FSSAI certified. Full export documentation.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/softgel-capsule-exporter-india/",
  },
  openGraph: {
    title: "Softgel Capsule Exporter India | Admetus Lifesciences",
    description:
      "Export-ready nutraceutical softgel capsules from India. WHO-GMP, Halal certified. Serving Africa, Middle East, Southeast Asia with full regulatory documentation.",
    url: "https://www.admetuslifesciences.com/softgel-capsule-exporter-india/",
  },
};

export default function ExporterLayout({ children }: { children: React.ReactNode }) {
  return children;
}

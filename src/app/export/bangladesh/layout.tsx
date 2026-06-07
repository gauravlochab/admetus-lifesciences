import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Softgel Capsule Exporter India for Bangladesh — SAARC, Flexible MOQ",
  description:
    "WHO-GMP certified softgel capsule exporter from India to Bangladesh. SAARC trade corridor, Halal certified nutraceuticals — Vitamin D3, Omega-3, Calcitriol K2, Multivitamin. Kolkata/Haldia to Chittagong port, 3-5 day transit. DGDA compliant documentation.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/bangladesh/",
  },
  openGraph: {
    title:
      "Softgel Capsule Exporter India for Bangladesh — SAARC, Flexible MOQ",
    description:
      "WHO-GMP certified softgel capsule exporter from India to Bangladesh. SAARC trade corridor, Halal certified nutraceuticals — Vitamin D3, Omega-3, Calcitriol K2, Multivitamin. Kolkata/Haldia to Chittagong port, 3-5 day transit. DGDA compliant documentation.",
    url: "https://www.admetuslifesciences.com/export/bangladesh/",
  },
};

export default function BangladeshLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

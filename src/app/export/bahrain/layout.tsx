import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Softgel Capsule Manufacturer India for Bahrain — Halal Certified",
  description:
    "Halal certified softgel capsule manufacturer in India for Bahrain. NHRA (National Health Regulatory Authority) registration support, easiest GCC entry point with simplified registration. Large Indian community. Nigella Sativa, Vitamin D3, Omega-3. JNPT to Khalifa Bin Salman Port in 5-7 days.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/bahrain/",
  },
  openGraph: {
    title:
      "Softgel Capsule Manufacturer India for Bahrain — Halal Certified",
    description:
      "Halal certified softgel capsule manufacturer in India for Bahrain. NHRA registration, easiest GCC entry point. Large Indian community. Nigella Sativa, Vitamin D3, Omega-3. JNPT to Khalifa Bin Salman Port in 5-7 days.",
    url: "https://www.admetuslifesciences.com/export/bahrain/",
  },
};

export default function BahrainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

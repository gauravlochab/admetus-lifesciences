import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Softgel Capsule Manufacturer India for Oman — Halal Certified, WHO-GMP",
  description:
    "Halal certified and WHO-GMP softgel capsule manufacturer in India for Oman. MOH (Ministry of Health) registration support. India-Oman historical trade ties, closest GCC country to India. Nigella Sativa, Vitamin D3 60K IU, Omega-3. JNPT/Mundra to Sohar/Salalah in 3-5 days.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/oman/",
  },
  openGraph: {
    title:
      "Softgel Capsule Manufacturer India for Oman — Halal Certified, WHO-GMP",
    description:
      "Halal certified and WHO-GMP softgel capsule manufacturer in India for Oman. MOH registration support, closest GCC to India, strong historical trade ties. Nigella Sativa, Vitamin D3, Omega-3. JNPT to Sohar in 3-5 days.",
    url: "https://www.admetuslifesciences.com/export/oman/",
  },
};

export default function OmanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

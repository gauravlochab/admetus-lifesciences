import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Softgel Capsule Manufacturer India for Qatar — Halal, WHO-GMP",
  description:
    "Halal and WHO-GMP certified softgel capsule manufacturer in India for Qatar. MOPH registration support, highest GDP per capita globally, growing wellness and supplement market. Large Indian expat community. Nigella Sativa, Vitamin D3 60K IU, Omega-3. JNPT to Hamad Port (Doha) in 5-7 days.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/qatar/",
  },
  openGraph: {
    title:
      "Softgel Capsule Manufacturer India for Qatar — Halal, WHO-GMP",
    description:
      "Halal and WHO-GMP certified softgel capsule manufacturer in India for Qatar. MOPH registration support, highest GDP per capita, growing supplement market. Nigella Sativa, Vitamin D3, Omega-3. JNPT to Doha in 5-7 days.",
    url: "https://www.admetuslifesciences.com/export/qatar/",
  },
};

export default function QatarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

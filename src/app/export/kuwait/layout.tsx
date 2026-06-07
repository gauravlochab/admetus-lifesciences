import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Softgel Capsule Manufacturer India for Kuwait — Halal, WHO-GMP",
  description:
    "Halal and WHO-GMP certified softgel capsule manufacturer in India for Kuwait. KDCPA registration support, high purchasing power market. Nigella Sativa, Vitamin D3 60K IU, Omega-3 softgels. Arabic labeling. JNPT to Shuwaikh Port (Kuwait City) in 5-7 days.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/kuwait/",
  },
  openGraph: {
    title:
      "Softgel Capsule Manufacturer India for Kuwait — Halal, WHO-GMP",
    description:
      "Halal and WHO-GMP certified softgel capsule manufacturer in India for Kuwait. KDCPA registration support, high purchasing power. Nigella Sativa, Vitamin D3, Omega-3. JNPT to Shuwaikh Port in 5-7 days.",
    url: "https://www.admetuslifesciences.com/export/kuwait/",
  },
};

export default function KuwaitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Softgel Capsule Manufacturer India for Lebanon — Halal, WHO-GMP",
  description:
    "Halal and WHO-GMP certified softgel capsule manufacturer in India supplying Lebanon. Affordable nutraceutical generics for Lebanon's healthcare market — Vitamin D3, Omega-3, Calcitriol K2, Nigella Sativa. Full export documentation via JNPT to Beirut port, 10-14 day transit.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/lebanon/",
  },
  openGraph: {
    title:
      "Softgel Capsule Manufacturer India for Lebanon — Halal, WHO-GMP",
    description:
      "Halal and WHO-GMP certified softgel capsule manufacturer in India supplying Lebanon. Affordable nutraceutical generics for Lebanon's healthcare market — Vitamin D3, Omega-3, Calcitriol K2, Nigella Sativa. Full export documentation via JNPT to Beirut port, 10-14 day transit.",
    url: "https://www.admetuslifesciences.com/export/lebanon/",
  },
};

export default function LebanonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Nutraceutical Softgel Supplier India for UAE — Halal, WHO-GMP, Dubai Export Hub",
  description:
    "Halal and WHO-GMP certified nutraceutical softgel supplier from India for the UAE market. Dubai as GCC re-export hub for Saudi Arabia, Oman, Qatar, Kuwait, Bahrain & East Africa. India-UAE CEPA preferential tariffs. MoHAP/Dubai Municipality registration support. JNPT to Jebel Ali in 3-5 days.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/uae/",
  },
  openGraph: {
    title:
      "Nutraceutical Softgel Supplier India for UAE — Halal, WHO-GMP, Dubai Export Hub",
    description:
      "Halal and WHO-GMP certified nutraceutical softgel supplier from India for the UAE market. Dubai as GCC re-export hub for Saudi Arabia, Oman, Qatar, Kuwait, Bahrain & East Africa. India-UAE CEPA preferential tariffs. MoHAP/Dubai Municipality registration support.",
    url: "https://www.admetuslifesciences.com/export/uae/",
  },
};

export default function UAELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

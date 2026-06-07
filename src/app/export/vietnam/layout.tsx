import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Softgel Capsule Manufacturer India for Vietnam — WHO-GMP Certified",
  description:
    "WHO-GMP certified softgel capsule manufacturer in India for Vietnamese importers. 100M population, DAV registration support, fast-growing healthcare market, competitive pricing, and full export documentation from Haryana, India to Ho Chi Minh City.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/export/vietnam/",
  },
  openGraph: {
    title:
      "Softgel Capsule Manufacturer India for Vietnam — WHO-GMP Certified",
    description:
      "WHO-GMP certified softgel capsule manufacturer in India for Vietnamese importers. 100M population, DAV registration support, fast-growing healthcare market, competitive pricing, and full export documentation from Haryana, India to Ho Chi Minh City.",
    url: "https://www.admetuslifesciences.com/export/vietnam/",
  },
};

export default function VietnamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

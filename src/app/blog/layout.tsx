import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Softgel Manufacturing Insights | Admetus Lifesciences",
  description:
    "Expert insights on softgel capsule manufacturing, nutraceutical industry trends, product education, and buyer guides from Admetus Lifesciences.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/blog/",
  },
  openGraph: {
    title: "Blog — Softgel Manufacturing Insights | Admetus Lifesciences",
    description:
      "Expert insights on softgel capsule manufacturing, nutraceutical industry trends, and buyer guides.",
    url: "https://www.admetuslifesciences.com/blog/",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

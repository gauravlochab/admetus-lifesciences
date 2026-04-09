import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Admetus Lifesciences, a precision softgel capsule manufacturer based in Haryana, India.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

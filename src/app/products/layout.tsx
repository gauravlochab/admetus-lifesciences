import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our range of 7 precision-formulated softgel capsules for nutraceutical and pharmaceutical markets.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

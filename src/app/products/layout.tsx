import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our range of 10 precision-formulated softgel capsules — Vitamin D3, Omega-3, Calcitriol, Glutathione, Krill Oil and more — for nutraceutical and healthcare markets.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

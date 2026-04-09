import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Facility",
  description: "Explore our WHO-GMP certified softgel capsule manufacturing facility in Haryana, India with ARBES SGX-806P encapsulation technology.",
};

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return children;
}

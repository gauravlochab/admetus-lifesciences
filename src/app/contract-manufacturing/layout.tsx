import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contract Manufacturing",
  description: "Private label and contract manufacturing for softgel capsules. Custom formulations, flexible MOQs, and turnkey production.",
};

export default function ContractManufacturingLayout({ children }: { children: React.ReactNode }) {
  return children;
}

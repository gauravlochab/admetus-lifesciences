import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Contact Admetus Lifesciences for bulk enquiries, contract manufacturing, private label, and export requirements.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

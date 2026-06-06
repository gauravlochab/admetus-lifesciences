import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Admetus Lifesciences — Softgel Manufacturer Quote",
  description:
    "Request a quote for softgel contract manufacturing, private label, or export. Quotation within 48 hours. Email: team@admetuslifesciences.com. Facility: Jind, Haryana 126112.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/contact/",
  },
  openGraph: {
    title: "Contact Admetus Lifesciences — Softgel Manufacturer Quote",
    description:
      "Request a quote for softgel contract manufacturing, private label, or export. Quotation within 48 hours. Email: team@admetuslifesciences.com. Facility: Jind, Haryana 126112.",
    url: "https://www.admetuslifesciences.com/contact/",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

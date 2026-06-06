import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Product Samples — Softgel Capsules | Admetus Lifesciences",
  description:
    "Request evaluation samples of our softgel capsules — Vitamin D3, Omega-3, Calcitriol K2-7, Krill Oil, Glutathione and more. Samples shipped within 5-7 business days. WHO-GMP certified manufacturer.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/request-samples/",
  },
  openGraph: {
    title: "Request Softgel Samples | Admetus Lifesciences",
    description:
      "Evaluate our WHO-GMP certified softgel capsules before committing to production. Complimentary samples shipped within 5-7 business days for qualified business enquiries.",
    url: "https://www.admetuslifesciences.com/request-samples/",
  },
};

export default function RequestSamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

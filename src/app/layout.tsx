import type { Metadata } from "next";
import { Inter, Literata, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SmoothScroll } from "@/components/smooth-scroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.admetuslifesciences.com"),
  title: {
    default: "Admetus Lifesciences | Precision Softgel Capsule Manufacturer",
    template: "%s | Admetus Lifesciences",
  },
  description:
    "Leading softgel capsule manufacturer in India. Contract manufacturing, private label, and export-ready nutraceutical softgel capsules. FSSAI, GMP, HACCP, Halal certified.",
  keywords: [
    "softgel capsule manufacturer india",
    "nutraceutical manufacturer india",
    "private label softgel manufacturer",
    "contract manufacturing softgel capsules",
    "softgel exporter india",
    "healthcare supplements manufacturer india",
  ],
  authors: [{ name: "Admetus Lifesciences" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.admetuslifesciences.com",
    siteName: "Admetus Lifesciences",
    title: "Admetus Lifesciences | Precision Softgel Capsule Manufacturer",
    description:
      "Precision-engineered softgel capsules from India. Contract manufacturing, private label solutions, and export-ready nutraceuticals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Admetus Lifesciences | Precision Softgel Capsule Manufacturer",
    description:
      "Precision-engineered softgel capsules from India. Contract manufacturing, private label solutions, and export-ready nutraceuticals.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.admetuslifesciences.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${literata.variable} ${dmMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#FAFAFA]">
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Archivo, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SmoothScroll } from "@/components/smooth-scroll";

const archivo = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
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
    <html lang="en" className={`${archivo.variable} ${sourceSerif.variable} ${jetbrains.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try { if(localStorage.getItem('admetus-theme')==='light') document.documentElement.classList.add('light'); } catch(e){}
        `}} />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

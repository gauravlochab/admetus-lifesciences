import type { Metadata } from "next";
import { Archivo, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollProgress } from "@/components/scroll-progress";

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
    default: "Admetus Lifesciences | Nutraceutical & Ayurvedic Softgel Capsule Manufacturer & Exporter India",
    template: "%s | Admetus Lifesciences",
  },
  description:
    "Leading softgel capsule manufacturer & exporter in India. Contract manufacturing, third party manufacturing, private label, and export-ready nutraceutical soft gelatin capsules. WHO-GMP, FSSAI, GMP, HACCP, Halal certified. Bulk supplier for Africa, Middle East, Southeast Asia.",
  keywords: [
    // Core manufacturing
    "softgel capsule manufacturer india",
    "soft gelatin capsule manufacturer india",
    "softgel manufacturing company",
    "softgel capsule manufacturer haryana",
    "softgel manufacturer jind haryana",
    "soft gelatin encapsulation",
    // Contract / third-party / private label
    "contract manufacturing softgel capsules",
    "third party softgel manufacturer india",
    "third party nutraceutical manufacturer",
    "private label softgel manufacturer",
    "white label softgel manufacturer",
    "pcd pharma franchise softgel",
    "custom softgel formulation",
    // Nutraceutical & Ayurvedic
    "nutraceutical manufacturer india",
    "nutraceutical contract manufacturer",
    "nutraceutical & ayurvedic softgel capsules",
    "ayurvedic softgel capsule manufacturer",
    "herbal softgel manufacturer india",
    "dietary supplement manufacturer india",
    "healthcare supplements manufacturer india",
    // Export / international
    "softgel capsule exporter india",
    "nutraceutical exporter india",
    "bulk softgel capsule supplier india",
    "wholesale nutraceutical products",
    "import softgel capsules from india",
    "softgel exporter africa middle east",
    "gcc softgel capsule supplier",
    "global softgel supplier",
    // Products
    "vitamin d3 60000 iu softgel",
    "omega 3 softgel manufacturer",
    "fish oil softgel",
    "krill oil softgel",
    "glutathione softgel capsule",
    "multivitamin softgel capsule",
    "nigella sativa softgel",
    // Certifications & format
    "who-gmp certified softgel manufacturer",
    "gmp certified softgel manufacturer",
    "fssai certified nutraceutical",
    "halal certified softgel",
    "kosher certified supplement",
    "haccp certified",
    "vegetarian softgel capsule",
    // Buyer intent
    "best softgel manufacturer in india",
    "top nutraceutical manufacturers in india",
  ],
  authors: [{ name: "Admetus Lifesciences" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.admetuslifesciences.com",
    siteName: "Admetus Lifesciences",
    title: "Admetus Lifesciences | Precision Softgel Capsule Manufacturer",
    description:
      "Precision-engineered softgel capsules from India. Contract manufacturing, private label solutions, and export-ready nutraceuticals.",
    images: [
      {
        url: "/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Admetus Lifesciences — Precision Softgel Capsule Manufacturer in Haryana, India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admetus Lifesciences | Precision Softgel Capsule Manufacturer",
    description:
      "Precision-engineered softgel capsules from India. Contract manufacturing, private label solutions, and export-ready nutraceuticals.",
    images: ["/seo/og-image.png"],
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
    <html lang="en" className={`${archivo.variable} ${sourceSerif.variable} ${jetbrains.variable} h-full light`} suppressHydrationWarning>
      <head>
        {/* Prevent Flash of Unstyled Content (FOUC) - Theme Initializer */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem("admetus-theme") || "dark";
                  if (saved === "dark") {
                    document.documentElement.classList.remove("light");
                  } else {
                    document.documentElement.classList.add("light");
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Structured data: Organization + LocalBusiness — sitewide entity definition for AI/search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.admetuslifesciences.com/#organization",
                  name: "Admetus Lifesciences",
                  url: "https://www.admetuslifesciences.com/",
                  logo: "https://www.admetuslifesciences.com/images/logo-horizontal.png",
                  description:
                    "Precision softgel capsule manufacturer in Haryana, India. Contract manufacturing, private label, and export-ready nutraceutical softgel capsules. FSSAI, GMP, HACCP, Halal, WHO-GMP certified.",
                  foundingDate: "2020",
                  founder: { "@type": "Person", name: "Anudeep Deswal" },
                  email: "team@admetuslifesciences.com",
                  telephone: "+91-7497841608",
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+91-7497841608",
                    contactType: "sales",
                    availableLanguage: ["English", "Hindi"],
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Village Anta, Tehsil Safidon",
                    addressLocality: "Jind",
                    addressRegion: "Haryana",
                    postalCode: "126112",
                    addressCountry: "IN",
                  },
                  hasCredential: [
                    "FSSAI Certified",
                    "GMP Certified",
                    "HACCP Certified",
                    "Halal Certified",
                    "WHO-GMP Certified",
                  ],
                  knowsAbout: [
                    "Softgel capsule manufacturing",
                    "Soft gelatin capsule manufacturing",
                    "Nutraceutical contract manufacturing",
                    "Third party softgel manufacturing",
                    "Private label softgel",
                    "Soft gelatin encapsulation",
                    "Custom formulation development",
                    "Export of nutraceuticals from India",
                    "Halal certified softgel manufacturing",
                    "Bulk softgel capsule supply",
                    "Pharmaceutical export from India",
                  ],
                  sameAs: [
                    "https://www.linkedin.com/company/admetus-lifesciences",
                    "https://www.indiamart.com/admetus-lifesciences/",
                    "https://maps.app.goo.gl/admetus-lifesciences",
                  ],
                },
                {
                  "@type": ["LocalBusiness", "Manufacturer"],
                  "@id": "https://www.admetuslifesciences.com/#localbusiness",
                  name: "Admetus Lifesciences Manufacturing Facility",
                  url: "https://www.admetuslifesciences.com/manufacturing/",
                  image:
                    "https://www.admetuslifesciences.com/images/logo-horizontal.png",
                  parentOrganization: {
                    "@id": "https://www.admetuslifesciences.com/#organization",
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Village Anta, Tehsil Safidon",
                    addressLocality: "Jind",
                    addressRegion: "Haryana",
                    postalCode: "126112",
                    addressCountry: "IN",
                  },
                  areaServed: [
                    { "@type": "Country", name: "India" },
                    { "@type": "AdministrativeArea", name: "Worldwide (export)" },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.admetuslifesciences.com/#website",
                  url: "https://www.admetuslifesciences.com/",
                  name: "Admetus Lifesciences",
                  publisher: {
                    "@id": "https://www.admetuslifesciences.com/#organization",
                  },
                  inLanguage: "en-IN",
                },
              ],
            }),
          }}
        />
        {/* Delight #9: Console easter egg */}
        <script dangerouslySetInnerHTML={{ __html: `
          console.log('%c\\u2726 Admetus Lifesciences', 'font-size: 14px; font-weight: bold; color: #C8A951;');
          console.log('%cPrecision-engineered softgel capsules from India.', 'font-size: 11px; color: #8A8274;');
          console.log('%cInterested in partnership? \\u2192 team@admetuslifesciences.com', 'font-size: 11px; color: #8A8274;');
        `}} />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300" suppressHydrationWarning>
        {/* Skip to content link for keyboard navigation */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <noscript>
          <div style={{ padding: "2rem", textAlign: "center", background: "#F5F0E8", color: "#1A1710", fontFamily: "sans-serif" }}>
            This site requires JavaScript for the best experience.
          </div>
        </noscript>
        <ScrollProgress />
        <CustomCursor />
        <SmoothScroll />
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

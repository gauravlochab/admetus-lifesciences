import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, FileText, ShieldCheck } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

export const metadata: Metadata = {
  title: "Catalog — Private-Label & Contract-Manufacturing Capabilities | Admetus Lifesciences",
  description:
    "Download the Admetus Lifesciences private-label catalog (10 ready softgel formulations) or our contract-manufacturing capabilities catalog (115+ FSSAI-licensed formulations across 13 categories). FSSAI Central License #10020064002545.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/catalog/",
  },
  openGraph: {
    title: "Catalog — Admetus Lifesciences",
    description:
      "Two ways to work with Admetus: private-label menu (10 ready SKUs) or contract-manufacturing across 115+ FSSAI-licensed formulations.",
    url: "https://www.admetuslifesciences.com/catalog/",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.admetuslifesciences.com/" },
    { "@type": "ListItem", position: 2, name: "Catalog", item: "https://www.admetuslifesciences.com/catalog/" },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Admetus Lifesciences — Catalog Downloads",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "DigitalDocument",
        name: "Admetus Private-Label Catalog 2026",
        description: "10 ready-to-launch softgel formulations available for private-label manufacturing.",
        url: "https://www.admetuslifesciences.com/pdfs/admetus-private-label-catalog.pdf",
        encodingFormat: "application/pdf",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "DigitalDocument",
        name: "Admetus Contract Manufacturing — Capabilities Catalog 2026",
        description: "115+ formulations across 13 categories under FSSAI Central License #10020064002545.",
        url: "https://www.admetuslifesciences.com/pdfs/admetus-contract-manufacturing-capabilities.pdf",
        encodingFormat: "application/pdf",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "DigitalDocument",
        name: "FSSAI Central License (Form C) — Admetus Lifesciences",
        description: "FSSAI Central License #10020064002545 — issued 25 Dec 2025, valid through 03 Oct 2026.",
        url: "https://www.admetuslifesciences.com/pdfs/admetus-fssai-license.pdf",
        encodingFormat: "application/pdf",
      },
    },
  ],
};

export default function CatalogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="/images/facility/dispatch-area.jpg"
          alt="Admetus Lifesciences catalog — softgel manufacturing capabilities"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))",
          }}
        />
        {/* Very light white/cream gradient overlay for soft visual lift */}
        <div className="absolute inset-0 opacity-15" style={{ background: "linear-gradient(to top, var(--hero-grad-start) 0%, var(--hero-grad-mid) 20%, transparent 40%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[#1A1710] font-bold tracking-[0.14em] block mb-6">CATALOG · 2026</span>
          <h1 className="mt-6 display-section text-[var(--hero-text)]">
            TWO WAYS TO<br />WORK WITH&nbsp;ADMETUS
          </h1>
          <p className="mt-8 body-large text-[#1A1710] max-w-[60ch]">
            Pick a ready formulation off the shelf, or build a custom SKU under our FSSAI Central
            License — both produced at our WHO-GMP facility in Village Anta, Safidon, Jind.
          </p>
        </div>
      </section>

      {/* Two-card hero */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Card A — Private Label */}
            <SectionReveal>
              <article className="h-full flex flex-col p-8 lg:p-10 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 transition-colors duration-300">
                <span className="label-text text-[var(--gold)] mb-6 block">OPTION A · PRIVATE LABEL</span>
                <h2
                  className="mt-4 display-section text-[var(--foreground)] mb-8"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", lineHeight: 1.1 }}
                >
                  10 PROVEN<br />FORMULATIONS.
                </h2>
                <p className="body-text text-[var(--text-cream)] mb-5">
                  Put your brand on softgel SKUs we already manufacture. Faster to market, lower MOQ,
                  proven stability profiles. Pick from D3 60K, Calcitriol+Calcium+K2-7, Omega-3, Krill
                  Oil, Glutathione, and more.
                </p>

                <ul className="space-y-2.5 mb-7 body-text text-[var(--text-muted)] !text-[0.875rem]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--gold)] mono-text">›</span> 10 ready-to-launch SKUs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--gold)] mono-text">›</span> 6–12 weeks brief to dispatch
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--gold)] mono-text">›</span> Custom packaging & artwork
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--gold)] mono-text">›</span> Halal & Kosher certifiable
                  </li>
                </ul>

                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href="/pdfs/admetus-private-label-catalog.pdf"
                    download
                    className="inline-flex items-center gap-2.5 px-6 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <Download size={14} /> Download Catalog
                  </a>
                  <Link
                    href="/products/"
                    className="inline-flex items-center gap-2.5 px-6 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--gold)] border border-[var(--gold)]/30 hover:bg-[var(--gold)]/[0.06] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    View All Products <ArrowRight size={14} />
                  </Link>
                </div>

                <p className="mt-6 mono-text text-[var(--text-muted)] !text-[0.6875rem]">
                  PDF · 18 KB · Updated May 2026
                </p>
              </article>
            </SectionReveal>

            {/* Card B — Contract Manufacturing */}
            <SectionReveal>
              <article className="h-full flex flex-col p-8 lg:p-10 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 transition-colors duration-300">
                <span className="label-text text-[var(--gold)] mb-6 block">OPTION B · CONTRACT MANUFACTURING</span>
                <h2
                  className="mt-4 display-section text-[var(--foreground)] mb-8"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", lineHeight: 1.1 }}
                >
                  115+ LICENSED<br />FORMULATIONS.
                </h2>
                <p className="body-text text-[var(--text-cream)] mb-5">
                  Build a custom SKU within our FSSAI Central License scope — 13 nutraceutical categories,
                  from Omega-3 and Calcium-D3 to multivitamins, herbal adaptogens, and antioxidant
                  complexes. Composition, dosage, and pack format engineered per contract.
                </p>

                <ul className="space-y-2.5 mb-7 body-text text-[var(--text-muted)] !text-[0.875rem]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--gold)] mono-text">›</span> 115+ licensed formulation profiles
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--gold)] mono-text">›</span> Custom composition & dosage
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--gold)] mono-text">›</span> Export-authorised scope
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--gold)] mono-text">›</span> ICH stability & full QC
                  </li>
                </ul>

                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href="/pdfs/admetus-contract-manufacturing-capabilities.pdf"
                    download
                    className="inline-flex items-center gap-2.5 px-6 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <Download size={14} /> Download Capabilities
                  </a>
                  <Link
                    href="/contract-manufacturing/"
                    className="inline-flex items-center gap-2.5 px-6 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--gold)] border border-[var(--gold)]/30 hover:bg-[var(--gold)]/[0.06] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Service Overview <ArrowRight size={14} />
                  </Link>
                </div>

                <p className="mt-6 mono-text text-[var(--text-muted)] !text-[0.6875rem]">
                  PDF · 31 KB · Updated May 2026
                </p>
              </article>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Trust block: FSSAI license */}
      <section className="py-20 bg-[var(--bg-black)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="border border-[var(--border-subtle)] bg-[var(--bg-charcoal)] flex flex-col overflow-hidden">

              {/* Top: Header Row (Logo, Text, and Button aligned horizontally) */}
              <div className="p-8 lg:p-10 bg-[var(--bg-charcoal)] border-b border-[var(--border-subtle)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div className="flex items-center gap-5">
                  <ShieldCheck size={64} className="text-[var(--gold)] shrink-0" strokeWidth={1.2} />
                  <div>
                    <span className="label-text text-[var(--gold)] mb-1 block">REGULATORY GROUND TRUTH</span>
                    <h2 className="heading-2 text-[var(--foreground)] mt-1 uppercase" style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)", lineHeight: 1.15 }}>
                      FSSAI Central License
                    </h2>
                  </div>
                </div>

                <a
                  href="/pdfs/admetus-fssai-license.pdf"
                  download
                  className="inline-flex items-center gap-2.5 px-6 py-3 shrink-0 active:translate-y-[1px] hover:-translate-y-[1px] text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-all duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <FileText size={14} /> View License (PDF)
                </a>
              </div>

              {/* Bottom: Detailed Credentials Grid */}
              <div className="p-8 lg:p-12 pl-12 lg:pl-[7.25rem] grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 sm:gap-y-8">
                <div>
                  <div className="mono-text text-[var(--text-muted)] uppercase text-[0.6875rem] tracking-[0.12em]">License Number</div>
                  <div className="text-[1.125rem] font-bold text-[var(--foreground)] mt-1 tracking-wider" style={{ fontFamily: "var(--font-display)" }}>
                    10020064002545
                  </div>
                </div>
                <div>
                  <div className="mono-text text-[var(--text-muted)] uppercase text-[0.6875rem] tracking-[0.12em]">Validity</div>
                  <div className="text-[1.125rem] font-medium text-[var(--foreground)] mt-1">
                    Valid through 03 Oct 2026
                  </div>
                </div>
                <div className="mt-8 sm:mt-12">
                  <div className="mono-text text-[var(--text-muted)] uppercase text-[0.6875rem] tracking-[0.12em]">Scope</div>
                  <div className="text-[1.125rem] font-medium text-[var(--foreground)] mt-1">
                    Manufacturer · Exporter
                  </div>
                </div>
                <div className="mt-8 sm:mt-12">
                  <div className="mono-text text-[var(--text-muted)] uppercase text-[0.6875rem] tracking-[0.12em]">Premises</div>
                  <div className="text-[1.125rem] font-medium text-[var(--foreground)] mt-1">
                    Village Anta, Safidon, Jind
                  </div>
                </div>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)] mb-8" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              CAN&apos;T DECIDE WHICH ROUTE&nbsp;FITS?
            </h2>
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Send us your brief. We&apos;ll review your composition, target market, and timeline,
              and recommend whether a private-label SKU or a custom contract formulation is the
              right path. Detailed quotation within 48&nbsp;hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Request a Quote <ArrowRight size={14} />
              </Link>
              <Link
                href="/quality/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--gold)] border border-[var(--gold)]/30 hover:bg-[var(--gold)]/[0.06]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Quality & Certifications
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

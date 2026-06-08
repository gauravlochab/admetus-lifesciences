"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

/* ------------------------------------------------------------------ */
/*  Static data                                                       */
/* ------------------------------------------------------------------ */

const exportCapabilities = [
  { title: "Export-Ready Packaging", desc: "Products packaged to international standards with proper labeling, batch coding, and tamper-evident sealing." },
  { title: "Documentation Support", desc: "Complete export documentation including COA, batch records, and regulatory paperwork -- shared on request." },
  { title: "Logistics Coordination", desc: "Support for shipping arrangements, packaging for transit, and coordination with freight forwarders." },
  { title: "Competitive Pricing", desc: "MOQ-based pricing with volume discounts. Transparent quotations with no hidden costs." },
  { title: "Lead Time Commitment", desc: "Clear production timelines with proactive updates. We deliver within the committed schedule." },
  { title: "Multi-Market Awareness", desc: "Understanding of regulatory requirements across markets to support your compliance needs." },
];

const faqs = [
  {
    q: "Which countries do you currently export softgel capsules to?",
    a: "We supply nutraceutical softgel capsules to importers and distributors across multiple international markets. Specific country support is confirmed during quotation based on your target regulatory framework (FDA, EFSA, GCC, ASEAN, etc.). Contact us with your destination market and we will confirm documentation and labeling capabilities.",
  },
  {
    q: "What export documentation do you provide?",
    a: "Standard export documentation includes Certificate of Analysis (COA), Free Sale Certificate, ingredient declaration / composition statement, manufacturing license copy, GMP certificate, and packing list. Country-specific certificates (Halal certification for GCC markets, kosher attestation, organic certification for applicable products) are arranged on request.",
  },
  {
    q: "Do you support private label exports?",
    a: "Yes. We manufacture under your brand name with custom packaging design — blister packs, HDPE bottles, or custom cartons aligned to your brand identity and the regulatory labeling requirements of your destination market. See our private label softgel manufacturer page for the full process. Brand approval and proof signoff happens before production begins.",
  },
  {
    q: "What is the minimum order quantity for export shipments?",
    a: "MOQs are flexible based on the formulation, packaging format, and target market. We support both pilot orders for new international brands and full-container loads for established distributors. Specific MOQ is confirmed within 48 hours of inquiry.",
  },
  {
    q: "How is shipping arranged?",
    a: "We coordinate with the buyer's preferred freight forwarder or recommend trusted partners for sea freight, air freight, and door-to-door logistics. Products are packed for international transit with desiccants and tamper-evident sealing. We handle export clearance from India; the buyer is responsible for import clearance at the destination.",
  },
  {
    q: "What payment terms do you offer for international buyers?",
    a: "Standard terms are 30% advance with the order and 70% against shipping documents. We work via T/T (telegraphic transfer) and Letter of Credit (LC) for established orders. Specific terms are confirmed in the proforma invoice.",
  },
  {
    q: "Can you support regulatory submissions in my country?",
    a: "We provide the technical documentation typically required for regulatory submissions (full composition, manufacturing process flow, stability data, COA samples, GMP and WHO-GMP certificates). The buyer or their regulatory consultant handles the submission to the destination authority. We respond promptly to follow-up data requests from regulators.",
  },
  {
    q: "How long from order to dispatch for an export shipment?",
    a: "Standard formulations typically ship 30–45 days from order confirmation, including production, quality testing, packaging, and export documentation. Custom formulations require additional time for stability validation. The exact timeline is committed in your proforma invoice.",
  },
];

/* ------------------------------------------------------------------ */
/*  Export markets — organised by region                              */
/* ------------------------------------------------------------------ */

interface CountryEntry {
  name: string;
  slug: string;
}

interface RegionGroup {
  region: string;
  countries: CountryEntry[];
}

const exportMarkets: RegionGroup[] = [
  {
    region: "SAARC & South Asia",
    countries: [
      { name: "Nepal", slug: "nepal" },
      { name: "Afghanistan", slug: "afghanistan" },
      { name: "Bangladesh", slug: "bangladesh" },
      { name: "Myanmar", slug: "myanmar" },
    ],
  },
  {
    region: "Southeast Asia",
    countries: [
      { name: "Philippines", slug: "philippines" },
      { name: "Indonesia", slug: "indonesia" },
      { name: "Vietnam", slug: "vietnam" },
      { name: "Cambodia", slug: "cambodia" },
      { name: "Laos", slug: "laos" },
      { name: "Malaysia", slug: "malaysia" },
      { name: "Thailand", slug: "thailand" },
    ],
  },
  {
    region: "Middle East & GCC",
    countries: [
      { name: "UAE", slug: "uae" },
      { name: "Saudi Arabia", slug: "saudi-arabia" },
      { name: "Qatar", slug: "qatar" },
      { name: "Oman", slug: "oman" },
      { name: "Kuwait", slug: "kuwait" },
      { name: "Bahrain", slug: "bahrain" },
      { name: "Iraq", slug: "iraq" },
      { name: "Jordan", slug: "jordan" },
      { name: "Lebanon", slug: "lebanon" },
      { name: "Syria", slug: "syria" },
      { name: "Yemen", slug: "yemen" },
    ],
  },
  {
    region: "Central Asia",
    countries: [
      { name: "Tajikistan", slug: "tajikistan" },
      { name: "Uzbekistan", slug: "uzbekistan" },
      { name: "Kyrgyzstan", slug: "kyrgyzstan" },
      { name: "Turkmenistan", slug: "turkmenistan" },
    ],
  },
  {
    region: "North Africa",
    countries: [
      { name: "Egypt", slug: "egypt" },
      { name: "Morocco", slug: "morocco" },
      { name: "Algeria", slug: "algeria" },
      { name: "Tunisia", slug: "tunisia" },
      { name: "Libya", slug: "libya" },
    ],
  },
  {
    region: "West Africa",
    countries: [
      { name: "Nigeria", slug: "nigeria" },
      { name: "Ghana", slug: "ghana" },
      { name: "Senegal", slug: "senegal" },
      { name: "Cameroon", slug: "cameroon" },
      { name: "Sierra Leone", slug: "sierra-leone" },
    ],
  },
  {
    region: "Sahel",
    countries: [
      { name: "Mali", slug: "mali" },
      { name: "Niger", slug: "niger" },
      { name: "Chad", slug: "chad" },
      { name: "Mauritania", slug: "mauritania" },
      { name: "Sudan", slug: "sudan" },
    ],
  },
  {
    region: "East Africa",
    countries: [
      { name: "Kenya", slug: "kenya" },
      { name: "Somalia", slug: "somalia" },
      { name: "Tanzania", slug: "tanzania" },
      { name: "Ethiopia", slug: "ethiopia" },
      { name: "Uganda", slug: "uganda" },
      { name: "Rwanda", slug: "rwanda" },
      { name: "South Sudan", slug: "south-sudan" },
    ],
  },
  {
    region: "Southern & Central Africa",
    countries: [
      { name: "South Africa", slug: "south-africa" },
      { name: "Mozambique", slug: "mozambique" },
      { name: "DR Congo", slug: "dr-congo" },
    ],
  },
];

const totalCountries = exportMarkets.reduce(
  (sum, r) => sum + r.countries.length,
  0
);

/* ------------------------------------------------------------------ */
/*  JSON-LD                                                           */
/* ------------------------------------------------------------------ */

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.admetuslifesciences.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Export",
      item: "https://www.admetuslifesciences.com/export/",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page component                                                    */
/* ------------------------------------------------------------------ */

export default function ExportPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="/images/facility/softgels-hero-golden.jpg"
          alt="Premium softgel capsules exported from India to global markets — Admetus Lifesciences, WHO-GMP certified manufacturer"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0 opacity-45 dark:opacity-80" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">International Markets</span>
          <h1 className="mt-8 display-section" style={{ color: "#F7F4EF" }}>
            FROM INDIA<br />TO THE&nbsp;WORLD
          </h1>
          <p className="mt-8 body-large max-w-[58ch]" style={{ color: "#E0D8C8" }}>
            Admetus Lifesciences serves international buyers worldwide --
            importers and distributors seeking a reliable, quality-focused{" "}
            <Link href="/softgel-capsule-manufacturer-haryana/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">softgel manufacturer in Haryana, India</Link>{" "}
            with full export documentation and Halal&nbsp;certification.
          </p>
        </div>
      </section>

      {/* ── Export Markets ───────────────────────────────────────── */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)] mb-8 block">
              {totalCountries} COUNTRIES
            </span>
            <h2 className="display-section text-[var(--foreground)] mb-4">
              OUR GLOBAL EXPORT&nbsp;MARKETS
            </h2>
            <p className="body-text text-[var(--text-muted)] max-w-[68ch] mb-14">
              We supply WHO-GMP certified softgel capsules, tablets, and
              nutraceutical formulations to importers and distributors across{" "}
              {totalCountries} countries. Select a market below to view
              country-specific export&nbsp;details.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {exportMarkets.map((group, gi) => (
              <SectionReveal key={group.region} delay={gi * 0.05}>
                <div className="p-6 border border-[var(--border-subtle)] bg-[var(--bg-warm-dark)] h-full">
                  <span className="label-text text-[var(--gold)] block mb-5">
                    {group.region}
                  </span>
                  <ul className="space-y-0">
                    {group.countries.map((country) => (
                      <li key={country.slug}>
                        <Link
                          href={`/export/${country.slug}/`}
                          className="group flex items-center gap-3 py-2.5 border-t border-[var(--border-subtle)] first:border-t-0"
                        >
                          <ArrowRight
                            size={12}
                            className="text-[var(--gold)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0"
                          />
                          <span className="body-text text-[var(--text-cream)] group-hover:text-[var(--gold)] transition-colors duration-200">
                            {country.name}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ─────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)] mb-8 block">CAPABILITIES</span>
            <h2 className="display-section text-[var(--foreground)] mb-10">
              EXPORT CAPABILITIES
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {exportCapabilities.map((cap, i) => (
              <SectionReveal key={cap.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{cap.title}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">{cap.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── For International Buyers ─────────────────────────────── */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">For International Buyers</span>
                <h2 className="mt-8 display-section text-[var(--foreground)] mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                  WHAT WE OFFER EXPORT&nbsp;PARTNERS
                </h2>
                <p className="body-text text-[var(--text-cream)] mb-8 max-w-[58ch]">
                  As an export-oriented manufacturer, we understand the
                  requirements of international buyers. Our team provides
                  dedicated support for export&nbsp;enquiries.
                </p>
                <ul className="space-y-3">
                  {[
                    "Dedicated export enquiry handling",
                    "Custom quotation based on requirements",
                    "Sample dispatch for evaluation",
                    "Flexible MOQ for initial orders",
                    "Complete batch documentation",
                    "Quality certificates provided with each shipment",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4 body-text text-[var(--text-cream)]">
                      <span className="w-5 h-px bg-[var(--gold)] mt-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="p-8 bg-[var(--bg-warm-dark)] border border-[var(--border-subtle)]">
                <span className="label-text text-[var(--gold)] block mb-4">GLOBAL REACH</span>
                <h3 className="heading-2 text-[var(--foreground)] mb-3">
                  Ready for Global&nbsp;Markets
                </h3>
                <p className="body-text text-[var(--text-muted)] mb-6 max-w-[58ch]">
                  Export documentation, international packaging, and regulatory
                  support -- shared on&nbsp;request.
                </p>
                <Link
                  href="/contact/"
                  className="block w-full px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold text-center tracking-[0.12em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Enquire for Export
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)] mb-6 block">Frequently Asked</span>
            <h2 className="mt-4 display-section text-[var(--foreground)] mb-12">
              EXPORT &amp; INTERNATIONAL Q&amp;A
            </h2>
          </SectionReveal>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <SectionReveal key={faq.q} delay={i * 0.03}>
                <details className="group py-6 border-t border-[var(--border-subtle)] last:border-b">
                  <summary className="flex items-start gap-5 cursor-pointer list-none">
                    <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="heading-2 text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors duration-200"
                      style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
                    >
                      {faq.q}
                    </h3>
                  </summary>
                  <p className="mt-4 ml-12 body-text text-[var(--text-muted)] max-w-[68ch]">
                    {faq.a}
                  </p>
                </details>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-t border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)] mb-8" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              START AN EXPORT&nbsp;ENQUIRY
            </h2>
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For bulk and export enquiries, share your requirements and our
              team will respond with a detailed&nbsp;proposal.
            </p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Enquire for Export
              <ArrowRight size={14} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

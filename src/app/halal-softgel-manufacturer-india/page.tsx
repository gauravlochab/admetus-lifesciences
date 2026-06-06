import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const halalAdvantages = [
  {
    title: "Halal certified gelatin sourcing",
    desc: "Every batch of bovine gelatin used at Admetus Lifesciences is sourced from Halal-certified abattoirs with full traceability documentation. Gelatin supplier certificates, species declarations, and Halal slaughter attestations are maintained per batch and made available to importers on request.",
  },
  {
    title: "Dedicated production protocols",
    desc: "Our Jind facility follows strict Halal manufacturing SOPs — from raw material intake through encapsulation, drying, and packing. Cross-contamination controls ensure that Halal production runs are segregated with documented line clearance and cleaning validation between batches.",
  },
  {
    title: "Complete Halal documentation chain",
    desc: "We issue Halal certificates, ingredient source declarations, gelatin species attestations, and batch-level Halal compliance letters — the full documentation stack that GCC customs authorities and SFDA/ESMA/BPOM regulators require for import clearance.",
  },
  {
    title: "Multi-certification facility",
    desc: "Our Halal certification sits alongside WHO-GMP, FSSAI, GMP, and HACCP certifications on the same production site. International buyers get a single-source manufacturer that satisfies both Halal compliance and pharmaceutical-grade quality standards simultaneously.",
  },
];

const marketsServed = [
  {
    region: "GCC (Gulf Cooperation Council)",
    countries: "UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain",
    detail: "SFDA (Saudi), ESMA (UAE), and individual GCC member-state regulatory requirements supported. Halal certification is mandatory for all nutraceutical imports across the GCC bloc.",
  },
  {
    region: "Africa",
    countries: "Kenya, Nigeria, Ghana, Tanzania, Ethiopia, Egypt",
    detail: "Growing demand for Halal-certified nutraceuticals across both Muslim-majority and multi-faith African markets. We provide NAFDAC (Nigeria), PPB (Kenya), and FDA Ghana documentation alongside Halal certificates.",
  },
  {
    region: "Southeast Asia",
    countries: "Malaysia, Indonesia, Brunei",
    detail: "JAKIM (Malaysia) and BPOM/MUI (Indonesia) require Halal certification for all imported nutraceutical and food supplement products. Our documentation is structured to support these regulatory frameworks.",
  },
  {
    region: "Central Asia & CIS",
    countries: "Uzbekistan, Kazakhstan, Turkmenistan, Kyrgyzstan, Tajikistan",
    detail: "Emerging nutraceutical markets with growing Halal import requirements. Our export documentation supports Central Asian regulatory submissions.",
  },
];

const exportDocs = [
  {
    doc: "Halal Certificate",
    desc: "Facility-level Halal certification from a recognized Indian Halal certification body, valid for the production site and listed product categories.",
  },
  {
    doc: "Batch-level Halal Compliance Letter",
    desc: "Per-shipment attestation confirming that the specific production batch was manufactured under Halal protocols with Halal-certified raw materials.",
  },
  {
    doc: "Gelatin Source Declaration",
    desc: "Species identification (bovine), abattoir Halal certification, and traceability documentation for the gelatin used in the specific batch.",
  },
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Complete analytical report per batch — assay, dissolution, weight variation, microbial limits, heavy metals — issued by our in-house QC laboratory.",
  },
  {
    doc: "Free Sale Certificate (FSC)",
    desc: "Government-issued certificate confirming that the products are freely sold in the Indian domestic market — required by most importing countries.",
  },
  {
    doc: "Country-specific Regulatory Dossier",
    desc: "Product registration support documents formatted for SFDA (Saudi Arabia), ESMA (UAE), NAFDAC (Nigeria), BPOM (Indonesia), and other national regulators.",
  },
];

const faqs = [
  {
    q: "Is Admetus Lifesciences Halal certified?",
    a: "Yes. Our manufacturing facility at Village Anta, Tehsil Safidon, District Jind, Haryana 126112 holds Halal certification alongside WHO-GMP, FSSAI, GMP, and HACCP certifications. The Halal certificate covers our softgel capsule production lines and is renewed annually. Certificate copies are provided to all qualified business inquiries.",
  },
  {
    q: "What gelatin source do you use for Halal softgel capsules?",
    a: "We use bovine gelatin sourced exclusively from Halal-certified abattoirs. Each gelatin supplier provides species declarations, Halal slaughter attestations, and batch traceability documentation. We do not use porcine gelatin at our facility. Gelatin source certificates are available per batch for importer verification.",
  },
  {
    q: "Can you provide Halal certification documents for import clearance?",
    a: "Yes — we provide a complete Halal documentation package: facility Halal certificate, batch-level Halal compliance letters, gelatin source declarations, Certificate of Analysis (COA), and Free Sale Certificate. This documentation is structured to satisfy customs and regulatory requirements in GCC, Middle East, Africa, and Southeast Asian markets.",
  },
  {
    q: "Which GCC countries can you export Halal softgels to?",
    a: "We export to all six GCC member states — UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain. Our export documentation supports SFDA (Saudi Food and Drug Authority) and ESMA (Emirates Authority for Standardization and Metrology) regulatory submissions. We also support exports to non-GCC Middle Eastern markets including Jordan, Iraq, and Lebanon.",
  },
  {
    q: "Do you manufacture Kosher softgel capsules as well?",
    a: "Our facility is primarily Halal certified. For buyers requiring Kosher certification, we can discuss requirements on a case-by-case basis — the manufacturing protocols for Halal and Kosher have significant overlap in terms of ingredient sourcing and process controls. Contact us at admetuslifesciences@gmail.com for Kosher-specific inquiries.",
  },
  {
    q: "What is the MOQ for Halal certified softgel orders?",
    a: "MOQs for Halal certified softgel production are flexible and depend on the formulation, capsule size, and packaging configuration. We support pilot runs for market testing as well as full-scale production for established distributors. Specific MOQ and pricing for your order is confirmed within 48 hours of inquiry.",
  },
  {
    q: "What Halal softgel formulations are available?",
    a: "Our 10+ standard formulations are all available as Halal certified production runs: Cholecalciferol (Vitamin D3) 60,000 IU, Calcitriol + Calcium + K2-7, Omega-3 + Vitamin E, Krill Oil, Ginseng + Astaxanthin Multivitamin, Glutathione + ALA + Grape Seed, Lycopene + Grape Seed Multivitamin, Isoflavones + Calcium + D3, Ginkgo + Tribulus, and Nigella Sativa (Kalonji). Custom Halal formulations are developed on request.",
  },
  {
    q: "How do you ensure Halal compliance during manufacturing?",
    a: "Halal compliance is maintained through a documented system: (1) gelatin and all animal-derived excipients sourced only from Halal-certified suppliers, (2) line clearance and cleaning validation between production runs, (3) ingredient segregation in raw material storage, (4) batch-level traceability from raw material receipt through finished goods dispatch, and (5) annual Halal certification audits by an accredited certification body. Our SOPs are designed so that every production step is auditable against Halal requirements.",
  },
];

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
      name: "Halal Certified Softgel Manufacturer India",
      item: "https://www.admetuslifesciences.com/halal-softgel-manufacturer-india/",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HalalSoftgelPage() {
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

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="/images/facility/packing-area-women.jpg"
          alt="Halal certified softgel capsule packing line at Admetus Lifesciences — women workforce preparing export-ready nutraceutical softgels for GCC and Middle East markets"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 py-2 label-text text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={13} />
            Home
          </Link>
          <span className="label-text text-[var(--gold)]">Halal Certified  ·  WHO-GMP  ·  Export Ready</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            HALAL CERTIFIED SOFTGEL<br />MANUFACTURER IN&nbsp;INDIA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal certified nutraceutical softgel capsule manufacturer in Jind, Haryana —
            export-ready production for GCC, Middle East, Africa, and Southeast Asia
            with complete Halal documentation for import&nbsp;compliance.
          </p>
        </div>
      </section>

      {/* Intro / context */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences is a <strong>Halal certified softgel capsule manufacturer</strong> operating
                from <strong>Village Anta, Tehsil Safidon, District Jind, Haryana 126112, India</strong>.
                Founded in 2020 by Mr. Anudeep Deswal, our facility produces nutraceutical soft gelatin
                capsules under Halal certification for export to Muslim-majority markets across the GCC,
                Middle East, Africa, and Southeast&nbsp;Asia.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                For international nutraceutical importers and distributors, Halal certification is not
                optional — it is a regulatory and commercial requirement. Saudi Arabia&apos;s SFDA, the
                UAE&apos;s ESMA, Malaysia&apos;s JAKIM, and Indonesia&apos;s BPOM all mandate Halal certification
                for imported food supplements and nutraceuticals. Our facility holds Halal certification
                alongside WHO-GMP, FSSAI, GMP, and HACCP — giving international buyers a single
                Halal-compliant, pharma-grade manufacturing source with documented quality&nbsp;systems.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Halal Matters */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Why Halal Matters</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  HALAL CERTIFICATION IS A MARKET&nbsp;REQUIREMENT
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Over 1.9 billion Muslims worldwide represent the fastest-growing consumer segment for
                  nutraceuticals. Halal certification is not just a religious preference — it is a
                  legally mandated import requirement in most GCC, Middle Eastern, and Southeast
                  Asian&nbsp;markets.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                {[
                  ["Regulatory compliance", "Saudi Arabia (SFDA), UAE (ESMA), Malaysia (JAKIM), and Indonesia (BPOM) all require Halal certification for imported nutraceuticals. Without a valid Halal certificate from the manufacturer, your shipment will not clear customs."],
                  ["Consumer trust in Muslim markets", "Halal certification on softgel packaging is a baseline consumer expectation in GCC and Muslim-majority countries. Brands without visible Halal compliance lose shelf placement and buyer confidence."],
                  ["Gelatin sensitivity", "Softgel capsules are gelatin-based products — the single most Halal-sensitive ingredient category. Buyers and regulators specifically scrutinize gelatin source, slaughter method, and cross-contamination controls for soft gelatin capsules."],
                  ["Growing global Halal market", "The global Halal nutraceutical market exceeds USD 50 billion and is growing at 8-12% annually. GCC countries, Indonesia, Malaysia, Turkey, and African markets are driving demand for Halal-certified supplements from Indian manufacturers."],
                ].map(([title, desc], i) => (
                  <div key={title} className="flex items-start gap-4 body-text text-[var(--text-cream)]">
                    <span className="shrink-0 mono-text text-[0.6875rem] font-bold text-[var(--gold)] mt-1.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}>{title}</h3>
                      <p className="mt-1 body-text text-[var(--text-muted)] max-w-[58ch] !text-[0.9375rem]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Halal Manufacturing Process */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Halal Manufacturing Process</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              HOW WE ENSURE HALAL&nbsp;COMPLIANCE
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {halalAdvantages.map((adv, i) => (
              <SectionReveal key={adv.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{adv.title}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">{adv.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Served */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Markets Served</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              HALAL SOFTGEL EXPORT&nbsp;MARKETS
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {marketsServed.map((market, i) => (
              <SectionReveal key={market.region} delay={i * 0.05}>
                <div>
                  <h3 className="heading-2 text-[var(--foreground)] mb-1" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>
                    {market.region}
                  </h3>
                  <p className="mono-text text-[0.6875rem] text-[var(--gold)] uppercase tracking-[0.1em] mb-3">
                    {market.countries}
                  </p>
                  <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
                    {market.detail}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Export Documentation */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Export Documentation</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              HALAL EXPORT DOCUMENTATION&nbsp;PACKAGE
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
            {exportDocs.map((item) => (
              <div key={item.doc} className="p-5 bg-[var(--background)]">
                <span className="mono-text text-[0.6875rem] text-[var(--gold)] uppercase tracking-[0.1em] block mb-2">
                  {item.doc}
                </span>
                <p className="body-text text-[var(--text-muted)] !text-[0.875rem]">{item.desc}</p>
              </div>
            ))}
          </div>

          <SectionReveal delay={0.1}>
            <p className="mt-8 body-text text-[var(--text-cream)] max-w-[68ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              All documentation is prepared in English and can be notarized, apostilled, or
              embassy-attested as required by the destination country. For GCC markets, we
              routinely provide documentation formatted for SFDA and ESMA product registration
              submissions. Contact us at{" "}
              <a href="mailto:admetuslifesciences@gmail.com" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">
                admetuslifesciences@gmail.com
              </a>{" "}
              to request a sample documentation package.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Frequently Asked</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              HALAL SOFTGEL MANUFACTURING Q&amp;A
            </h2>
            <div className="gold-rule w-16 mb-10" />
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

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              SOURCE HALAL CERTIFIED SOFTGELS FROM&nbsp;INDIA
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Request a Halal softgel manufacturing quote, sample documentation package,
              or schedule a facility audit at our Jind, Haryana production&nbsp;site.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Request a Quote
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/export/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--foreground)] border border-[var(--border-subtle)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Export Capabilities
                <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

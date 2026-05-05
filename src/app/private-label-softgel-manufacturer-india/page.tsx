import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const steps = [
  {
    title: "Inquiry & specification",
    desc: "Share your formulation preferences, target market, regulatory framework, and projected volumes. We respond within 48 hours with a feasibility assessment, recommended packaging options, and indicative MOQ.",
  },
  {
    title: "Quote & sample agreement",
    desc: "Receive a detailed proforma quotation covering per-unit cost, MOQ, lead time, packaging, and documentation. Sample agreement signed; samples produced and dispatched for evaluation.",
  },
  {
    title: "Brand & artwork approval",
    desc: "Your brand identity (label artwork, carton design, regulatory copy) is reviewed against destination-market labeling requirements. Print-ready files signed off before any production batch starts.",
  },
  {
    title: "Production & QC",
    desc: "Full-scale production on the ARBES SGX-806P encapsulation line at our WHO-GMP certified Haryana facility. Multi-point quality control: dissolution testing, microbial limits, fill weight verification, finished product visual inspection.",
  },
  {
    title: "Packaging & dispatch",
    desc: "Tamper-evident blister packing on Elmach EPI 2000 or HDPE bottle filling. Secondary packaging applied per your brand guidelines. Full Certificate of Analysis (COA) and batch records included.",
  },
];

const formulations = [
  { name: "Cholecalciferol 60K IU", slug: "cholecalciferol-60000-iu", category: "Vitamin D3" },
  { name: "Calcitriol + Calcium + K2-7", slug: "calcitriol-calcium-k27-softgel", category: "Bone Health" },
  { name: "Omega-3 + Vitamin E", slug: "omega-3-vitamin-e-softgel", category: "Heart Health" },
  { name: "Krill Oil", slug: "krill-oil-softgel", category: "Premium Omega" },
  { name: "Glutathione + ALA + Grape Seed", slug: "glutathione-ala-grape-seed", category: "Antioxidant" },
  { name: "Ginseng + Astaxanthin Multi", slug: "ginseng-astaxanthin-multivitamin", category: "Energy" },
  { name: "Lycopene + Grape Seed Multi", slug: "lycopene-grape-seed-multivitamin", category: "Antioxidant" },
  { name: "Isoflavones + Calcium + D3", slug: "isoflavones-calcium-vitamin-d3", category: "Women's Health" },
  { name: "Ginkgo + Tribulus", slug: "ginkgo-tribulus-mens-vitality", category: "Men's Vitality" },
  { name: "Nigella Sativa (Kalonji)", slug: "nigella-sativa-kalonji", category: "Herbal" },
];

const faqs = [
  {
    q: "What does private label softgel manufacturing in India typically cost?",
    a: "Per-unit pricing depends on the formulation (active ingredient cost is usually the largest variable), packaging format (blister vs HDPE bottle vs custom carton), MOQ, and regulatory destination. Standard formulations like Vitamin D3 60K IU softgels start at lower per-unit pricing than premium ingredients like Krill Oil or branded bioactives. We provide transparent quotations within 48 hours of inquiry — no hidden costs.",
  },
  {
    q: "What is the minimum order quantity (MOQ) for private label softgel in India?",
    a: "MOQs are flexible based on the formulation and packaging configuration. We support pilot orders for new brands launching their first softgel SKU as well as full-volume production for established distributors. Specific MOQ for your formulation is confirmed during quotation. We don't require massive volume commitments to begin.",
  },
  {
    q: "Can I get exclusivity on a custom formulation?",
    a: "Yes. For custom formulations developed specifically for your brand, we offer exclusivity terms — meaning the formulation is not supplied to other clients. Standard catalog formulations (our 10 listed products) are typically supplied on a non-exclusive basis to keep MOQs accessible. Exclusivity terms and minimum annual volume commitments are confirmed in your private label agreement.",
  },
  {
    q: "What packaging options are available for private label softgel orders?",
    a: "Standard options: blister packs (multiple configurations including 10x1x10, 4x1x4, 20x1x10), HDPE bottles (30/60/90/120 count), and custom carton designs aligned to your brand. Packaging includes barcode integration (EAN/UPC), batch coding, manufacturing/expiry date printing, and tamper-evident sealing per international standards. Custom packaging artwork is approved before production.",
  },
  {
    q: "Do you handle regulatory documentation for private label softgel exports?",
    a: "Yes. For export shipments we provide Certificate of Analysis (COA), Free Sale Certificate, ingredient declaration / composition statement, manufacturing license copy, GMP certificate, and country-specific certificates (Halal certification for GCC markets, kosher attestation, organic certification for applicable products). Your or your regulatory consultant handles the actual submission to destination authorities; we provide all underlying technical documentation promptly.",
  },
  {
    q: "How long from order confirmation to first dispatch?",
    a: "Standard formulations typically ship 30–45 days from confirmed order, including raw material sourcing, encapsulation, drying, multi-point quality testing, packaging, and documentation. Custom formulations require additional time (typically 8–12 weeks total) for stability validation. The exact timeline is committed in your proforma invoice before production begins.",
  },
  {
    q: "Can I visit and audit your manufacturing facility before placing my first private label order?",
    a: "Yes, and we strongly recommend it. We welcome facility audits from prospective brand owners and your appointed regulatory consultants. Visits are typically arranged within 1–2 weeks of an audit request. Our facility is at Village Anta, Tehsil Safidon, District Jind, Haryana 126112 — approximately 3 hours by road from Indira Gandhi International Airport, Delhi.",
  },
  {
    q: "What payment terms do you offer for private label orders?",
    a: "Standard terms are 30% advance with the order confirmation and 70% against shipping documents (or before dispatch for domestic orders). For international orders we work via T/T (telegraphic transfer) and Letter of Credit (LC) for established orders. Specific terms are confirmed in your proforma invoice and may be adjusted based on order size and ongoing relationship.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.admetuslifesciences.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Private Label Softgel Manufacturer India",
      item: "https://www.admetuslifesciences.com/private-label-softgel-manufacturer-india/",
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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Private Label Softgel Capsule Manufacturing",
  provider: {
    "@id": "https://www.admetuslifesciences.com/#organization",
  },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Place", name: "Worldwide (export)" },
  ],
  description:
    "Private label softgel capsule manufacturing in India — 10+ standard formulations including Vitamin D3, Omega-3, Krill Oil, and Calcitriol K2-7. Custom packaging, MOQ flexibility, full export documentation. WHO-GMP certified facility in Haryana.",
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "Brand owners launching softgel lines, distributors expanding portfolios, importers requiring private label supply",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Available Private Label Formulations",
    itemListElement: formulations.map((f, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Product",
        name: f.name,
        category: f.category,
        url: `https://www.admetuslifesciences.com/products/${f.slug}/`,
      },
    })),
  },
};

export default function PrivateLabelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="/images/facility/softgels-pile.jpg"
          alt="Private label softgel capsule manufacturing in India — Admetus Lifesciences"
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
          <span className="label-text text-[var(--gold)]">Brand Owner Service  ·  India</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            PRIVATE LABEL<br />SOFTGEL MANUFACTURER&nbsp;INDIA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Launch your softgel brand from a WHO-GMP certified Indian facility —
            10+ formulations, custom packaging, flexible MOQs, and full export
            documentation under your brand&nbsp;name.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences operates as a private label softgel capsule
                manufacturer for brand owners, distributors, and importers across India and
                international markets. Our private label service handles every stage from
                formulation selection through packaging artwork approval to dispatch — all
                under your brand name, with documented quality systems, and full
                regulatory paperwork.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                We work with brands launching their first softgel SKU as well as
                established distributors expanding their nutraceutical portfolios. Our 10+
                standard formulations cover bone health, heart health, antioxidants,
                women&apos;s health, men&apos;s vitality, and herbal categories. Custom
                formulations are developed on request with stability validation and
                regulatory alignment for your destination market.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Our manufacturing facility in <Link href="/softgel-capsule-manufacturer-haryana/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">Jind, Haryana</Link>{" "}
                holds FSSAI, GMP, HACCP, Halal, and WHO-GMP certifications — covering
                domestic FSSAI compliance and the documentation needed for international
                export.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Process</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              FROM BRIEF TO DISPATCH IN 5&nbsp;STEPS
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <SectionReveal key={step.title} delay={i * 0.04}>
                <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr] gap-4 py-8 border-t border-[var(--border-subtle)]">
                  <div>
                    <span
                      className="text-[var(--gold)]"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        fontWeight: 900,
                        lineHeight: 1,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{step.title}</h3>
                    <p className="mt-2 body-text text-[var(--text-muted)] max-w-[58ch]">{step.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Available formulations */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Available Formulations</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              10 STANDARD PRIVATE LABEL&nbsp;SOFTGELS
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <p className="body-text text-[var(--text-muted)] max-w-[68ch] mb-10">
            All formulations available for private label under your brand name. Click
            any product for full composition, ingredient list, key benefits, and
            manufacturing specifications. Custom formulations developed on request.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {formulations.map((f, i) => (
              <SectionReveal key={f.slug} delay={i * 0.03}>
                <Link
                  href={`/products/${f.slug}/`}
                  className="group block p-4 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/15 transition-all duration-200 hover:-translate-y-px"
                >
                  <span className="mono-text text-[0.5rem] text-[var(--text-muted)] opacity-50 block mb-1.5 uppercase tracking-[0.1em]">
                    {f.category}
                  </span>
                  <p className="text-[0.8125rem] font-semibold text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors duration-200" style={{ fontFamily: "var(--font-display)" }}>
                    {f.name}
                  </p>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Packaging</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  YOUR BRAND, YOUR&nbsp;PACKAGING
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Every private label order ships under your brand identity. Our team
                  reviews artwork, regulatory copy, and labeling against destination-
                  market requirements before any production batch begins.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ul className="space-y-4">
                {[
                  ["Blister packs", "10x1x10, 4x1x4, 20x1x10 standard configurations. Custom configurations on request. Tamper-evident sealing on Elmach EPI 2000 line."],
                  ["HDPE bottles", "30, 60, 90, 120 count standard sizes. Tamper-evident induction sealing, child-resistant caps available."],
                  ["Custom cartons", "Brand-aligned secondary packaging. Print files reviewed for regulatory compliance before production."],
                  ["Coding & traceability", "Batch number, manufacturing date, expiry date, EAN/UPC barcode integration. Full batch records linked to dispatched units."],
                ].map(([title, desc]) => (
                  <li key={title} className="flex items-start gap-4 body-text text-[var(--text-cream)]">
                    <span className="w-5 h-px bg-[var(--gold)] mt-3 shrink-0" />
                    <div>
                      <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}>{title}</h3>
                      <p className="mt-1 body-text text-[var(--text-muted)] !text-[0.9375rem]">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Frequently Asked</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              PRIVATE LABEL Q&amp;A
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
      <section className="py-20 bg-[var(--bg-charcoal)] border-t border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              LAUNCH YOUR SOFTGEL&nbsp;BRAND
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Share your formulation preferences, target market, and projected
              volumes. Detailed quotation within 48&nbsp;hours.
            </p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Request a Quote
              <ArrowRight size={14} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

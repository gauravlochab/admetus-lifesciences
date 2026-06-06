import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyTunisia = [
  {
    title: "Strategic gateway to Libya and the Maghreb",
    desc: "Tunisia occupies a strategic position in North Africa — bordered by Algeria to the west and Libya to the southeast. Tunisian trading companies and pharmaceutical distributors maintain commercial relationships across the Maghreb region and serve as a re-export gateway to Libya, where direct import infrastructure is limited. Establishing a supply relationship with a Tunisian importer can open secondary distribution into the broader Maghreb corridor.",
  },
  {
    title: "12 million consumers with developed healthcare infrastructure",
    desc: "Despite its relatively small population of 12 million, Tunisia has one of the most developed healthcare systems in North Africa. The country's universal healthcare coverage, extensive pharmacy network, and well-trained medical workforce create structured demand for pharmaceutical and nutraceutical products through formal channels — unlike markets where informal distribution dominates.",
  },
  {
    title: "Growing nutraceutical demand with import dependency",
    desc: "Tunisia has a domestic pharmaceutical manufacturing sector, but nutraceutical softgel capsule production capacity is limited. The country imports finished nutraceutical formulations and APIs from India, Europe, and other suppliers. Indian WHO-GMP certified manufacturers are recognized within Tunisia's regulatory framework, and the sourcing relationship is operationally familiar to Tunisian procurement teams.",
  },
  {
    title: "Competitive pricing for a cost-sensitive market",
    desc: "Tunisia's healthcare spending is constrained relative to GCC or European markets, creating demand for affordable quality-certified nutraceuticals. WHO-GMP certified softgels manufactured in Haryana are 40-60% less expensive than European-manufactured equivalents — aligning with Tunisian market economics without compromising on quality documentation or Halal certification standards.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is prevalent across Tunisia — driven by indoor lifestyles, clothing customs, and dietary insufficiency despite the Mediterranean climate. Cholecalciferol 60,000 IU softgels are prescribed as weekly therapeutic supplementation by Tunisian clinicians for deficiency correction across all age groups and are distributed through Tunisia's well-organized pharmacy network.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular disease is a leading cause of mortality in Tunisia. Omega-3 softgels with Vitamin E support cardiac health, triglyceride management, and anti-inflammatory response — a high-demand category across Tunisian pharmacy retail, hospital formularies, and specialist clinics in Tunis, Sfax, and Sousse.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Broad-spectrum nutritional supplementation addressing micronutrient gaps in the Tunisian population. Our multivitamin softgels serve the growing consumer wellness segment in urban Tunisia while also supporting clinical nutritional supplementation across the country's primary healthcare network.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health is a significant therapeutic category in Tunisia — osteoporosis prevalence is comparable to Southern European rates, particularly among post-menopausal women. Calcitriol + Calcium Citrate + K2-7 formulations support bone mineralization and calcium absorption, serving both preventive and therapeutic prescribing in the Tunisian healthcare system.",
  },
  {
    name: "Nigella Sativa (Habbatus Sauda / Habba Sawda)",
    desc: "Known as Habba Sawda in Tunisian Arabic and Habbatus Sauda in classical Arabic, Nigella Sativa (black seed oil) carries deep cultural and religious significance in Tunisia. The Prophet Muhammad (PBUH) referenced it as a remedy for all ailments except death — and it remains a widely consumed traditional remedy. Our softgel encapsulation delivers standardized Nigella Sativa oil with consistent potency and modern shelf stability.",
  },
];

const shippingSteps = [
  {
    title: "Production & QC at Jind facility",
    desc: "Softgel capsules manufactured on the ARBES SGX-806P line, dried under controlled conditions, and subjected to multi-point quality testing — visual inspection, weight uniformity, dissolution, microbial limits. Full Certificate of Analysis (COA) generated per batch.",
  },
  {
    title: "Export packaging & documentation",
    desc: "Products packed in export-grade secondary packaging with desiccants and tamper-evident sealing. Export documentation prepared: COA, Halal certificate, Free Sale Certificate (FSSAI), commercial invoice, packing list, and bill of lading. French-language labeling supported for the Tunisian market.",
  },
  {
    title: "Dispatch from JNPT port",
    desc: "Sea freight from JNPT (Nhava Sheva, Mumbai) — India's largest west-coast container port. Regular shipping lines operate on the India-Suez-Mediterranean route with services to North African ports.",
  },
  {
    title: "Arrival at Tunis or Rades port",
    desc: "Primary destination: Port of Rades (La Goulette) — Tunisia's main container port located in the Tunis metropolitan area. This is the primary import hub for pharmaceutical products entering Tunisia, with established customs clearance infrastructure for pharmaceutical goods.",
  },
  {
    title: "Transit time: 12-16 days",
    desc: "JNPT to Tunis / Rades transit is approximately 12-16 days via the Suez Canal and central Mediterranean route. Air freight via Delhi or Mumbai to Tunis-Carthage International Airport is available for urgent or sample shipments with 3-4 day delivery.",
  },
];

const exportDocs = [
  {
    title: "Certificate of Analysis (COA)",
    desc: "Batch-specific laboratory analysis confirming identity, potency, purity, dissolution, and microbial limits for every shipment.",
  },
  {
    title: "Halal Certificate",
    desc: "Product-level Halal certification confirming compliance with Islamic dietary and manufacturing standards — essential for Tunisian market acceptance and DPM regulatory compliance.",
  },
  {
    title: "Free Sale Certificate (FSSAI)",
    desc: "Issued by FSSAI (Food Safety and Standards Authority of India), confirming that the products are legally manufactured and freely sold in India.",
  },
  {
    title: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with HS codes, unit pricing, total value, and comprehensive packing list for customs clearance at Rades, Tunis, or the buyer's designated Tunisian port.",
  },
  {
    title: "GMP / WHO-GMP Certificate",
    desc: "Manufacturing facility certification confirming compliance with Good Manufacturing Practice and World Health Organization GMP standards — recognized within Tunisia's DPM regulatory framework.",
  },
  {
    title: "Certificate of Origin",
    desc: "Issued by the Indian Chamber of Commerce, confirming the country of manufacture for Tunisian customs and import duty assessment.",
  },
];

const faqs = [
  {
    q: "Is Halal certification available for all softgel products exported to Tunisia?",
    a: "Yes. Our Jind facility holds Halal certification covering the entire manufacturing process — raw materials, gelatin sourcing, production line, and finished products. Halal certificates are included with every export shipment to Tunisia and other Muslim-majority markets. The gelatin used in our softgel shells is sourced from Halal-certified suppliers with full traceability documentation.",
  },
  {
    q: "What is the DPM regulatory process for importing nutraceutical softgels into Tunisia?",
    a: "The Direction de la Pharmacie et du Médicament (DPM) oversees pharmaceutical and nutraceutical product registration in Tunisia. The registration process requires manufacturer certifications (WHO-GMP, GMP, Halal), product specifications, stability data, and Certificate of Analysis. Documentation is typically required in French. Admetus Lifesciences provides all manufacturer-side documentation — the Tunisian importer or their regulatory agent handles the in-country registration with the DPM.",
  },
  {
    q: "What is the minimum order quantity for export to Tunisia?",
    a: "MOQs are flexible based on the formulation, packaging format, and order configuration. Given Tunisia's smaller market size, we support modest pilot shipments for new Tunisian distributors establishing the product line, as well as regular orders for established importers. Specific MOQ for your order is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Can Tunisian distributors re-export to Libya through your supply chain?",
    a: "Our export documentation and pricing is structured for the Tunisian market. Many Tunisian distributors do maintain commercial relationships with Libyan buyers and handle re-export or overland shipment to Libya independently. If you are a Tunisian distributor serving the Libyan market, we can discuss volume pricing that accounts for the broader distribution footprint. Contact us at team@admetuslifesciences.com to discuss your requirements.",
  },
  {
    q: "Can you supply softgels under our brand name for the Tunisian market?",
    a: "Yes. We operate as a private-label and contract manufacturer — your brand name, packaging design, and labeling specifications are applied to the finished product. We support Arabic and French bilingual labeling for the Tunisian market. Brand artwork approval and proof signoff happens before production begins. See our private label softgel manufacturer page for the full process.",
  },
  {
    q: "What payment terms do you offer for Tunisian buyers?",
    a: "Standard terms are 30% advance with the order and 70% against shipping documents (bill of lading). We work via T/T (telegraphic transfer) and Letter of Credit (LC) for established orders. For first-time buyers, we recommend starting with a pilot order to validate the product and logistics chain before scaling. Specific terms are confirmed in the proforma invoice.",
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
      name: "Export",
      item: "https://www.admetuslifesciences.com/export/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Tunisia",
      item: "https://www.admetuslifesciences.com/export/tunisia/",
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

export default function TunisiaExportPage() {
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
          src="/images/facility/softgels-hero-golden.jpg"
          alt="Halal certified softgel capsules manufactured in India for export to Tunisia — Admetus Lifesciences, WHO-GMP certified"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <Link
            href="/export/"
            className="inline-flex items-center gap-2 py-2 label-text text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={13} />
            Export Markets
          </Link>
          <span className="label-text text-[var(--gold)]">India &rarr; Tunisia</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;TUNISIA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal certified softgel capsules from Haryana, India &mdash;
            WHO-GMP compliant nutraceutical generics for Tunisia&apos;s healthcare
            market and the broader Maghreb corridor. Full export documentation,
            direct shipping to Tunis and&nbsp;Rades.
          </p>
        </div>
      </section>

      {/* Tunisia Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Tunisia occupies a strategic position on North Africa&apos;s Mediterranean
                coast — bordered by Algeria to the west and Libya to the southeast. With a
                population of 12&nbsp;million and one of the most developed healthcare systems
                in the Maghreb, Tunisia represents a quality-focused pharmaceutical market
                with structured demand through formal pharmacy and hospital channels.
                <strong> Tunisia also serves as a commercial gateway to Libya</strong>, where
                direct import infrastructure is limited and Tunisian distributors handle
                significant re-export volumes.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The Tunisian pharmaceutical market, while smaller than Egypt or Algeria, is
                well-organized with a comprehensive pharmacy network, universal healthcare
                coverage, and professional pharmaceutical distribution infrastructure.
                Tunisia imports APIs and finished nutraceutical formulations, and Indian
                manufacturers are recognized within the regulatory framework. The Direction
                de la Pharmacie et du M&eacute;dicament (DPM) regulates pharmaceutical
                imports with a moderate registration framework.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana 126112,
                manufactures Halal-certified, WHO-GMP compliant softgel capsules suited for
                the Tunisian market — combining Indian manufacturing economics with the
                quality certifications and French/Arabic documentation that Tunisian importers
                and the DPM require.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Tunisia */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY EXPORT SOFTGELS TO&nbsp;TUNISIA
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyTunisia.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{item.title}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">{item.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Halal Focus */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Halal Certification</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  HALAL CERTIFIED FOR THE TUNISIAN&nbsp;MARKET
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Tunisia is a Muslim-majority country (over 99% Muslim) where
                  Halal certification is essential for market acceptance of ingestible
                  products. Tunisian consumers and pharmacy professionals expect
                  Halal labeling on nutraceutical and pharmaceutical&nbsp;products.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Admetus Lifesciences holds Halal certification covering the entire
                  manufacturing chain — from raw material sourcing (Halal-certified
                  gelatin suppliers with full traceability) through the production process
                  on our ARBES SGX-806P encapsulation line to finished product packaging.
                  This is not a third-party attestation applied at the end; it is integrated
                  into our manufacturing protocols.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For the Tunisian market specifically, Halal certification serves three
                  critical functions: (1) it satisfies import requirements under the DPM
                  framework where Halal documentation is expected for ingestible products,
                  (2) it enables placement in Tunisia&apos;s well-organized pharmacy retail
                  channels — from chains in Tunis, Sfax, and Sousse to independent
                  pharmacies — where Halal labeling is a consumer expectation, and (3) it
                  supports Tunisian distributors who also serve the Libyan market, where
                  Halal certification is equally critical for the 97% Muslim population.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Every export shipment to Tunisia includes a product-specific Halal
                  certificate alongside the Certificate of Analysis, Free Sale Certificate,
                  and commercial documentation. Our Halal certification is recognized
                  across MENA and Maghreb markets, supporting Tunisian distributors who
                  serve multiple countries from their Tunis-based operations.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range for Tunisia */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Range</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;TUNISIA
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="space-y-0">
            {products.map((product, i) => (
              <SectionReveal key={product.name} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] last:border-b flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{product.name}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[68ch]">{product.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.25}>
            <p className="mt-10 body-text text-[var(--text-muted)] max-w-[68ch]">
              Beyond these core formulations, Admetus Lifesciences develops custom
              softgel blends for Tunisian distributors targeting specific therapeutic
              categories. Custom formulation requests are evaluated within 48 hours.
              Contact us at{" "}
              <a href="mailto:team@admetuslifesciences.com" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">
                team@admetuslifesciences.com
              </a>{" "}
              with your formulation requirements.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Regulatory — DPM */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Regulatory Landscape</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              DPM REGULATORY FRAMEWORK
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <SectionReveal delay={0.05}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  The Direction de la Pharmacie et du M&eacute;dicament (DPM) is Tunisia&apos;s
                  regulatory authority governing the registration, import, and distribution
                  of pharmaceutical and nutraceutical products. Tunisia maintains a moderate
                  pharmaceutical regulatory environment — professional and structured, reflecting
                  the country&apos;s well-developed healthcare infrastructure, but not as
                  restrictive as the most demanding GCC regulatory frameworks.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For Indian manufacturers with WHO-GMP certification, Tunisia&apos;s DPM
                  registration process is navigable. WHO-GMP certification is recognized as
                  a quality benchmark, and the nutraceutical supplement registration pathway
                  requires standard documentation — product specifications, stability data,
                  Certificate of Analysis, and manufacturer certifications. Documentation
                  is typically required in French.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Key documentation accepted by the DPM includes: WHO-GMP certificate,
                  GMP certificate, Halal certificate, Free Sale Certificate (FSSAI),
                  Certificate of Analysis per batch, stability data, product specifications,
                  and Certificate of Origin. The Tunisian importer typically handles the
                  in-country registration process with the DPM, while Admetus Lifesciences
                  provides all manufacturer-side documentation with French-language support.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Tunisia&apos;s proximity to Libya adds a strategic dimension — Tunisian
                  distributors who also serve the Libyan market can use the same manufacturer
                  documentation for both markets. Admetus Lifesciences provides complete
                  manufacturer-side dossiers formatted for DPM submission, and our export
                  team assists Tunisian importers in compiling the documentation package
                  needed for efficient regulatory processing.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Shipping & Logistics */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Shipping &amp; Logistics</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  INDIA TO TUNISIA SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Sea freight via the Suez Canal and central Mediterranean connects
                  our Haryana facility to Tunisia&apos;s main port at Rades (Tunis).
                  Transit time: 12-16&nbsp;days.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {shippingSteps.map(({ title, desc }, i) => (
                  <li key={title} className="flex items-start gap-4 body-text text-[var(--text-cream)]">
                    <span className="shrink-0 mono-text text-[0.6875rem] font-bold text-[var(--gold)] mt-1.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}>{title}</h3>
                      <p className="mt-1 body-text text-[var(--text-muted)] max-w-[58ch] !text-[0.9375rem]">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Export Documentation */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Documentation</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              EXPORT DOCUMENTATION FOR&nbsp;TUNISIA
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {exportDocs.map((doc, i) => (
              <SectionReveal key={doc.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{doc.title}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">{doc.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Frequently Asked</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              TUNISIA EXPORT Q&amp;A
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
              EXPORT SOFTGELS TO&nbsp;TUNISIA
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Tunisian importers and distributors seeking a WHO-GMP and Halal
              certified softgel capsule manufacturer in India — share your
              requirements and our export team will respond within 48&nbsp;hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Request Export Quote
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/products/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--foreground)] border border-[var(--border-subtle)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                View Product Catalog
                <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

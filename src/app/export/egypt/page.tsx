import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyEgypt = [
  {
    title: "Largest Arab country by population — 105 million consumers",
    desc: "Egypt is the most populous Arab nation and the third-largest country in Africa. With over 105 million people and a young, growing population, the demand for affordable pharmaceutical and nutraceutical products is massive and sustained. The Egyptian healthcare system serves both urban centres like Cairo and Alexandria and an extensive rural population that relies heavily on pharmacy retail channels for supplementation.",
  },
  {
    title: "India is a leading pharma supplier to Egypt",
    desc: "Indian pharmaceutical manufacturers have established strong trade relationships with Egyptian importers and distributors. India supplies a significant share of Egypt's generic pharmaceutical imports, and Indian WHO-GMP certifications are recognized by Egyptian regulatory authorities. Admetus Lifesciences fits directly into this established India-Egypt pharmaceutical supply chain.",
  },
  {
    title: "EDA regulatory framework accepts WHO-GMP certification",
    desc: "The Egyptian Drug Authority (EDA) — Egypt's centralized pharmaceutical regulatory body — maintains a structured but navigable registration process for imported nutraceuticals. WHO-GMP certification from an Indian manufacturer is recognized and accepted as a quality benchmark, and the registration pathway for nutraceutical supplements is less complex than for prescription pharmaceuticals.",
  },
  {
    title: "Strong demand for affordable generics and nutraceuticals",
    desc: "Egypt's per-capita healthcare spending is constrained, creating sustained demand for affordable generics and nutraceutical supplements. WHO-GMP certified softgels manufactured in Haryana are 40-60% less expensive than European-manufactured equivalents — aligning directly with the pricing dynamics of the Egyptian pharmaceutical market without compromising on quality documentation.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is widespread across Egypt despite abundant sunlight — driven by indoor lifestyles, clothing customs, and dietary insufficiency. Cholecalciferol 60,000 IU softgels are prescribed as weekly therapeutic supplementation by Egyptian clinicians for deficiency correction across all age groups and are a staple in Egyptian pharmacy chains.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular disease is the leading cause of death in Egypt. Omega-3 softgels with Vitamin E support cardiac health, triglyceride management, and anti-inflammatory response — a high-demand category across Egyptian pharmacy retail, hospital formularies, and specialist cardiology clinics.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Broad-spectrum nutritional supplementation addressing the micronutrient gaps common in the Egyptian population. Our multivitamin softgels are formulated for general adult health and serve a large consumer base across Egypt's pharmacy distribution networks — from major urban chains to independent rural pharmacies.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health is a significant therapeutic category in Egypt — osteoporosis prevalence is high, particularly among post-menopausal women and the elderly population. Calcitriol + Calcium Citrate + K2-7 formulations support bone mineralization, calcium absorption, and fracture prevention, serving both preventive and therapeutic prescribing patterns.",
  },
  {
    name: "Nigella Sativa (Habbatus Sauda / Black Seed Oil)",
    desc: "Known as Habbatus Sauda in Arabic tradition, Nigella Sativa (black seed / Habba Baraka in Egyptian dialect) carries deep cultural and religious significance across Egypt. The Prophet Muhammad (PBUH) referenced it as a remedy for all ailments except death — making it one of the most culturally resonant nutraceutical products in the Egyptian market. Our softgel encapsulation delivers standardized Nigella Sativa oil with consistent potency and shelf stability.",
  },
];

const shippingSteps = [
  {
    title: "Production & QC at Jind facility",
    desc: "Softgel capsules manufactured on the ARBES SGX-806P line, dried under controlled conditions, and subjected to multi-point quality testing — visual inspection, weight uniformity, dissolution, microbial limits. Full Certificate of Analysis (COA) generated per batch.",
  },
  {
    title: "Export packaging & documentation",
    desc: "Products packed in export-grade secondary packaging with desiccants and tamper-evident sealing. Export documentation prepared: COA, Halal certificate, Free Sale Certificate (FSSAI), commercial invoice, packing list, and bill of lading.",
  },
  {
    title: "Dispatch from JNPT port",
    desc: "Sea freight from JNPT (Nhava Sheva, Mumbai) — India's largest west-coast container port. Regular shipping services operate on the India-Suez-Mediterranean route with direct calls at Egyptian ports.",
  },
  {
    title: "Arrival at Port Said or Alexandria",
    desc: "Direct sea route via the Suez Canal to Port Said on the Mediterranean coast, or to Alexandria — Egypt's primary commercial import port. Both ports have established pharmaceutical customs clearance infrastructure and bonded warehousing facilities.",
  },
  {
    title: "Transit time: 10-14 days",
    desc: "Direct JNPT to Port Said / Alexandria transit is approximately 10-14 days via the Suez Canal route. Air freight via Delhi or Mumbai is available for urgent or sample shipments with 3-4 day delivery to Cairo International Airport.",
  },
];

const exportDocs = [
  {
    title: "Certificate of Analysis (COA)",
    desc: "Batch-specific laboratory analysis confirming identity, potency, purity, dissolution, and microbial limits for every shipment.",
  },
  {
    title: "Halal Certificate",
    desc: "Product-level Halal certification confirming compliance with Islamic dietary and manufacturing standards — essential for Egyptian market acceptance and EDA regulatory compliance.",
  },
  {
    title: "Free Sale Certificate (FSSAI)",
    desc: "Issued by FSSAI (Food Safety and Standards Authority of India), confirming that the products are legally manufactured and freely sold in India.",
  },
  {
    title: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with HS codes, unit pricing, total value, and comprehensive packing list for customs clearance at Port Said, Alexandria, or the buyer's designated Egyptian port.",
  },
  {
    title: "GMP / WHO-GMP Certificate",
    desc: "Manufacturing facility certification confirming compliance with Good Manufacturing Practice and World Health Organization GMP standards — recognized by the Egyptian Drug Authority.",
  },
  {
    title: "Certificate of Origin",
    desc: "Issued by the Indian Chamber of Commerce, confirming the country of manufacture for Egyptian customs and import duty assessment under applicable India-Egypt trade agreements.",
  },
];

const faqs = [
  {
    q: "Is Halal certification available for all softgel products exported to Egypt?",
    a: "Yes. Our Jind facility holds Halal certification covering the entire manufacturing process — raw materials, gelatin sourcing, production line, and finished products. Halal certificates are included with every export shipment to Egypt and other Muslim-majority markets. The gelatin used in our softgel shells is sourced from Halal-certified suppliers with full traceability documentation.",
  },
  {
    q: "What is the EDA regulatory process for importing nutraceutical softgels into Egypt?",
    a: "The Egyptian Drug Authority (EDA) oversees pharmaceutical and nutraceutical product registration. For nutraceutical supplements, the registration pathway involves submitting manufacturer certifications (WHO-GMP, GMP, Halal), product specifications, stability data, and Certificate of Analysis. The process is structured but navigable for WHO-GMP certified Indian manufacturers. Admetus Lifesciences provides all manufacturer-side documentation required for EDA submission — the Egyptian importer or their regulatory agent handles the in-country registration process.",
  },
  {
    q: "What is the minimum order quantity for export to Egypt?",
    a: "MOQs are flexible based on the formulation, packaging format, and order configuration. We support pilot shipments for new Egyptian distributors establishing the product line, as well as full-container loads for established importers. Specific MOQ for your order is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How are shipments routed from India to Egypt?",
    a: "Primary route: Sea freight from JNPT (Mumbai) via the Suez Canal to Port Said or Alexandria — approximately 10-14 days transit. Egypt's position at the Suez Canal makes it one of the most direct shipping destinations from India's west coast. Air freight via Delhi or Mumbai to Cairo International Airport is available for samples and urgent shipments (3-4 days).",
  },
  {
    q: "Can you supply softgels under our brand name for the Egyptian market?",
    a: "Yes. We operate as a private-label and contract manufacturer — your brand name, packaging design, and labeling specifications are applied to the finished product. We support Arabic labeling for the Egyptian market. Brand artwork approval and proof signoff happens before production begins. See our private label softgel manufacturer page for the full process.",
  },
  {
    q: "What payment terms do you offer for Egyptian buyers?",
    a: "Standard terms are 30% advance with the order and 70% against shipping documents (bill of lading). We work via T/T (telegraphic transfer) and Letter of Credit (LC) for established orders. For first-time buyers, we recommend starting with a pilot order to validate the product and logistics chain before scaling to full-container volumes. Specific terms are confirmed in the proforma invoice.",
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
      name: "Egypt",
      item: "https://www.admetuslifesciences.com/export/egypt/",
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

export default function EgyptExportPage() {
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
          alt="Halal certified softgel capsules manufactured in India for export to Egypt — Admetus Lifesciences, WHO-GMP certified"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Egypt</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;EGYPT
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal and WHO-GMP certified softgel capsules from Haryana, India &mdash;
            affordable nutraceutical generics for Egypt&apos;s 105&nbsp;million-strong
            healthcare market. Full export documentation, direct shipping to
            Port Said and&nbsp;Alexandria.
          </p>
        </div>
      </section>

      {/* Egypt Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Egypt is the largest pharmaceutical market in North Africa and one of the
                most significant in the entire Arab world. With a population exceeding
                105&nbsp;million — the largest in the Middle East and North Africa region —
                and a healthcare system serving both dense urban centres and an extensive
                rural population, Egypt imports substantial volumes of pharmaceutical and
                nutraceutical products. <strong>India is one of Egypt&apos;s leading
                pharmaceutical supplier countries</strong>, with established trade channels
                and regulatory recognition.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The Egyptian pharmaceutical market is valued at over $5&nbsp;billion annually.
                While Egypt has a significant domestic pharmaceutical manufacturing sector,
                it relies heavily on imported APIs (active pharmaceutical ingredients) and
                finished formulations — particularly in the nutraceutical and supplements
                category where Indian manufacturers offer price-competitive, quality-certified
                products. The Egyptian Drug Authority (EDA) regulates pharmaceutical and
                nutraceutical imports with a structured registration framework that recognizes
                WHO-GMP certification.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana 126112,
                manufactures Halal-certified, WHO-GMP compliant softgel capsules specifically
                suited for the Egyptian market — combining the pricing economics of Indian
                manufacturing with the quality certifications and documentation that Egyptian
                importers and the EDA require.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Egypt */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY EXPORT SOFTGELS TO&nbsp;EGYPT
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyEgypt.map((item, i) => (
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
                  HALAL CERTIFIED FOR THE EGYPTIAN&nbsp;MARKET
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Egypt is a Muslim-majority country (approximately 90% Muslim) where
                  Halal certification is not merely a regulatory checkbox — it is a
                  fundamental requirement for market acceptance. Products without visible
                  Halal certification face resistance from pharmacists, distributors,
                  and end&nbsp;consumers.
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
                  For the Egyptian market specifically, Halal certification serves three
                  critical functions: (1) it satisfies the EDA&apos;s import requirements
                  where Halal documentation is expected for ingestible products, (2) it
                  enables placement in Egypt&apos;s extensive pharmacy retail channels —
                  from major chains in Cairo and Alexandria to independent pharmacies across
                  Upper Egypt — where Halal labeling is expected by consumers, and (3) it
                  differentiates our products from non-certified competitors who may offer
                  lower pricing but cannot provide the Halal documentation Egyptian
                  distributors need.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Every export shipment to Egypt includes a product-specific Halal
                  certificate alongside the Certificate of Analysis, Free Sale Certificate,
                  and commercial documentation. Our Halal certification is recognized
                  across MENA markets, meaning Egyptian distributors who also trade in
                  Saudi Arabia, the UAE, or other Arab countries can use the same
                  certification documentation.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range for Egypt */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Range</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;EGYPT
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
              softgel blends for Egyptian distributors targeting specific therapeutic
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

      {/* Regulatory — EDA */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Regulatory Landscape</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              EDA REGULATORY FRAMEWORK
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <SectionReveal delay={0.05}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  The Egyptian Drug Authority (EDA) is Egypt&apos;s centralized regulatory
                  body governing the registration, import, and distribution of pharmaceutical
                  and nutraceutical products. Established as a successor to earlier regulatory
                  structures, the EDA maintains a structured registration process that is
                  moderate in complexity — more rigorous than post-conflict markets like Iraq
                  but less restrictive than GCC authorities like Saudi SFDA.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For Indian manufacturers with WHO-GMP certification, Egypt represents
                  an accessible market with clear regulatory pathways. The EDA recognizes
                  WHO-GMP as a quality benchmark, and the nutraceutical supplement
                  registration track is less intensive than the full pharmaceutical
                  registration process — making it practical for softgel manufacturers
                  to register product lines within a reasonable&nbsp;timeframe.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Key documentation accepted by the EDA includes: WHO-GMP certificate,
                  GMP certificate, Halal certificate, Free Sale Certificate (FSSAI),
                  Certificate of Analysis per batch, stability data, product specifications,
                  and Certificate of Origin. The Egyptian importer typically handles the
                  in-country registration process with the EDA, while Admetus Lifesciences
                  provides all manufacturer-side documentation.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  India&apos;s established position as a pharmaceutical supplier to Egypt
                  means that Indian manufacturing certifications are well-understood by
                  EDA reviewers. This familiarity reduces the friction in the registration
                  process compared to manufacturers from countries without an established
                  pharma export relationship with Egypt. Admetus Lifesciences provides
                  complete manufacturer-side dossiers formatted for EDA submission
                  requirements.
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
                  INDIA TO EGYPT SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Direct shipping via the Suez Canal route connects our Haryana
                  facility to Egyptian importers — Port Said and Alexandria are
                  among the most accessible destinations from India&apos;s west
                  coast. Transit time: 10-14&nbsp;days.
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
              EXPORT DOCUMENTATION FOR&nbsp;EGYPT
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
              EGYPT EXPORT Q&amp;A
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
              EXPORT SOFTGELS TO&nbsp;EGYPT
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Egyptian importers and distributors seeking a WHO-GMP and Halal
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

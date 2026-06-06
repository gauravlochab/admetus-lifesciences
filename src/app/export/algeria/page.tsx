import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAlgeria = [
  {
    title: "Largest African country — 45 million consumers",
    desc: "Algeria is the largest country in Africa by area and has a population of 45 million — making it one of the most significant pharmaceutical markets in North Africa. The Algerian healthcare system serves a young, growing population with expanding insurance coverage, driving sustained demand for affordable pharmaceutical and nutraceutical products across both urban centres and an extensive rural population.",
  },
  {
    title: "India is a significant pharmaceutical supplier to Algeria",
    desc: "India is one of Algeria's largest pharmaceutical supplier countries. Algerian importers and distributors have established procurement channels with Indian manufacturers, and Indian WHO-GMP certifications are recognized within Algeria's regulatory framework. The India-Algeria pharmaceutical trade relationship is mature and operationally streamlined — Admetus Lifesciences fits directly into this existing supply chain.",
  },
  {
    title: "Import-dependent pharma market with domestic manufacturing gaps",
    desc: "While Algeria has invested in domestic pharmaceutical manufacturing (producing approximately 50% of its needs domestically), it remains heavily dependent on imports for specialized formulations — particularly nutraceutical softgel capsules where domestic encapsulation capacity is limited. Indian manufacturers fill a genuine supply gap with competitively priced, quality-certified finished formulations and APIs.",
  },
  {
    title: "Government push for affordable healthcare",
    desc: "The Algerian government has prioritized affordable access to essential medicines and supplements through its national healthcare system. WHO-GMP certified softgels manufactured in Haryana are 40-60% less expensive than European-manufactured equivalents — aligning with Algeria's healthcare economics and import substitution priorities without compromising on quality or certification standards.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is widespread across Algeria — driven by indoor lifestyles, traditional clothing customs, and dietary gaps despite North Africa's abundant sunlight. Cholecalciferol 60,000 IU softgels are prescribed as weekly therapeutic supplementation by Algerian clinicians for deficiency correction and are widely distributed through Algeria's pharmacy network across all 58 wilayas (provinces).",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular disease is the leading cause of death in Algeria. Omega-3 softgels with Vitamin E support cardiac health, triglyceride management, and anti-inflammatory response — a high-demand category across Algerian pharmacy retail, hospital formularies, and specialist cardiology clinics in Algiers, Oran, Constantine, and Annaba.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Broad-spectrum nutritional supplementation addressing micronutrient deficiencies across the Algerian population. Our multivitamin softgels serve both the urban consumer wellness segment and clinical nutritional supplementation in rural Algeria — distributed through the national pharmacy network.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health is a significant therapeutic category in Algeria — osteoporosis prevalence is substantial, particularly among post-menopausal women. Calcitriol + Calcium Citrate + K2-7 formulations support bone mineralization, calcium absorption, and fracture prevention, serving both preventive and therapeutic prescribing patterns across Algerian healthcare facilities.",
  },
  {
    name: "Nigella Sativa (Habbatus Sauda / Habba Sawda)",
    desc: "Known as Habba Sawda in Algerian Arabic and Habbatus Sauda in classical Arabic, Nigella Sativa (black seed oil) carries deep cultural and religious significance across Algeria. The Prophet Muhammad (PBUH) referenced it as a remedy for all ailments except death — and it remains a widely consumed traditional remedy across Algerian households. Our softgel encapsulation delivers standardized Nigella Sativa oil with consistent potency and shelf stability.",
  },
];

const shippingSteps = [
  {
    title: "Production & QC at Jind facility",
    desc: "Softgel capsules manufactured on the ARBES SGX-806P line, dried under controlled conditions, and subjected to multi-point quality testing — visual inspection, weight uniformity, dissolution, microbial limits. Full Certificate of Analysis (COA) generated per batch.",
  },
  {
    title: "Export packaging & documentation",
    desc: "Products packed in export-grade secondary packaging with desiccants and tamper-evident sealing. Export documentation prepared: COA, Halal certificate, Free Sale Certificate (FSSAI), commercial invoice, packing list, and bill of lading. French-language labeling supported for the Algerian market.",
  },
  {
    title: "Dispatch from JNPT port",
    desc: "Sea freight from JNPT (Nhava Sheva, Mumbai) — India's largest west-coast container port. Regular shipping lines operate on the India-Suez-Mediterranean route with direct or transshipment services to Algerian ports.",
  },
  {
    title: "Arrival at Algiers or Oran port",
    desc: "Primary destination: Port of Algiers — Algeria's main commercial port and import hub. Alternative: Port of Oran — the second-largest port serving western Algeria. Both ports have established customs clearance infrastructure for pharmaceutical imports.",
  },
  {
    title: "Transit time: 14-18 days",
    desc: "JNPT to Algiers / Oran transit is approximately 14-18 days via the Suez Canal and Mediterranean route. Air freight via Delhi or Mumbai to Algiers Houari Boumediene Airport is available for urgent or sample shipments with 3-5 day delivery.",
  },
];

const exportDocs = [
  {
    title: "Certificate of Analysis (COA)",
    desc: "Batch-specific laboratory analysis confirming identity, potency, purity, dissolution, and microbial limits for every shipment.",
  },
  {
    title: "Halal Certificate",
    desc: "Product-level Halal certification confirming compliance with Islamic dietary and manufacturing standards — essential for Algerian market acceptance and DPH regulatory compliance.",
  },
  {
    title: "Free Sale Certificate (FSSAI)",
    desc: "Issued by FSSAI (Food Safety and Standards Authority of India), confirming that the products are legally manufactured and freely sold in India.",
  },
  {
    title: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with HS codes, unit pricing, total value, and comprehensive packing list for customs clearance at Algiers, Oran, or the buyer's designated Algerian port.",
  },
  {
    title: "GMP / WHO-GMP Certificate",
    desc: "Manufacturing facility certification confirming compliance with Good Manufacturing Practice and World Health Organization GMP standards — recognized within Algeria's DPH regulatory framework.",
  },
  {
    title: "Certificate of Origin",
    desc: "Issued by the Indian Chamber of Commerce, confirming the country of manufacture for Algerian customs and import duty assessment.",
  },
];

const faqs = [
  {
    q: "Is Halal certification available for all softgel products exported to Algeria?",
    a: "Yes. Our Jind facility holds Halal certification covering the entire manufacturing process — raw materials, gelatin sourcing, production line, and finished products. Halal certificates are included with every export shipment to Algeria and other Muslim-majority markets. The gelatin used in our softgel shells is sourced from Halal-certified suppliers with full traceability documentation.",
  },
  {
    q: "What is the DPH regulatory process for importing nutraceutical softgels into Algeria?",
    a: "The Direction de la Pharmacie et des Hôpitaux (DPH) oversees pharmaceutical and nutraceutical product registration in Algeria. The registration process requires manufacturer certifications (WHO-GMP, GMP, Halal), product specifications, stability data, and Certificate of Analysis. Documentation is typically required in French. Admetus Lifesciences provides all manufacturer-side documentation — the Algerian importer or their regulatory agent handles the in-country registration with the DPH.",
  },
  {
    q: "What is the minimum order quantity for export to Algeria?",
    a: "MOQs are flexible based on the formulation, packaging format, and order configuration. We support pilot shipments for new Algerian distributors establishing the product line, as well as full-container loads for established importers. Specific MOQ for your order is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Do you support French-language labeling for the Algerian market?",
    a: "Yes. Algeria's official languages are Arabic and French (Tamazight is also official), and pharmaceutical labeling typically requires French-language product information. We support custom labeling in French and Arabic for the Algerian market — your labeling specifications are incorporated during the packaging phase. Artwork approval and proof signoff happens before production begins.",
  },
  {
    q: "Can you supply softgels under our brand name for the Algerian market?",
    a: "Yes. We operate as a private-label and contract manufacturer — your brand name, packaging design, and labeling specifications are applied to the finished product. We support Arabic and French bilingual labeling for the Algerian market. Brand artwork approval and proof signoff happens before production begins. See our private label softgel manufacturer page for the full process.",
  },
  {
    q: "What payment terms do you offer for Algerian buyers?",
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
      name: "Algeria",
      item: "https://www.admetuslifesciences.com/export/algeria/",
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

export default function AlgeriaExportPage() {
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
          alt="Halal certified softgel capsules manufactured in India for export to Algeria — Admetus Lifesciences, WHO-GMP certified"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Algeria</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;ALGERIA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal and WHO-GMP certified softgel capsules from Haryana, India &mdash;
            affordable nutraceutical generics for Algeria&apos;s 45&nbsp;million-consumer
            healthcare market. Full export documentation, direct shipping to
            Algiers and&nbsp;Oran.
          </p>
        </div>
      </section>

      {/* Algeria Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Algeria is the largest country in Africa by area and one of the most
                significant pharmaceutical markets on the continent. With a population of
                45&nbsp;million and a healthcare system undergoing continuous modernization,
                Algeria imports a substantial share of its pharmaceutical and nutraceutical
                products. <strong>India is one of Algeria&apos;s most important pharmaceutical
                supplier countries</strong>, with a well-established trade relationship
                spanning APIs, finished formulations, and nutraceutical products.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The Algerian pharmaceutical market is valued at approximately $4&nbsp;billion
                annually. While Algeria has made significant investments in domestic
                pharmaceutical manufacturing — covering roughly half of its pharmaceutical
                needs domestically — the country remains dependent on imports for specialized
                formulations, particularly nutraceutical softgel capsules where domestic
                encapsulation capacity is insufficient. The Direction de la Pharmacie et des
                H&ocirc;pitaux (DPH) regulates pharmaceutical imports under a structured
                regulatory framework.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana 126112,
                manufactures Halal-certified, WHO-GMP compliant softgel capsules specifically
                suited for the Algerian market — combining Indian manufacturing economics with
                the quality certifications and French/Arabic documentation that Algerian
                importers and the DPH require.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Algeria */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY EXPORT SOFTGELS TO&nbsp;ALGERIA
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyAlgeria.map((item, i) => (
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
                  HALAL CERTIFIED FOR THE ALGERIAN&nbsp;MARKET
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Algeria is a Muslim-majority country (over 99% Muslim) where
                  Halal certification is a fundamental requirement for market
                  acceptance. Products without Halal certification are not accepted
                  by Algerian distributors, pharmacies, or end&nbsp;consumers.
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
                  For the Algerian market specifically, Halal certification serves three
                  critical functions: (1) it satisfies import and regulatory requirements
                  under the DPH framework where Halal documentation is mandatory for
                  ingestible products, (2) it enables placement in Algeria&apos;s pharmacy
                  retail channels — from major chains in Algiers and Oran to independent
                  pharmacies across all 58&nbsp;wilayas — where Halal labeling is a strict
                  consumer expectation, and (3) it differentiates our products from
                  non-certified competitors who cannot provide the documentation Algerian
                  distributors require.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Every export shipment to Algeria includes a product-specific Halal
                  certificate alongside the Certificate of Analysis, Free Sale Certificate,
                  and commercial documentation. Our Halal certification is recognized
                  across MENA and African markets, supporting Algerian distributors who
                  may also serve neighbouring markets in Tunisia and Libya.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range for Algeria */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Range</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;ALGERIA
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
              softgel blends for Algerian distributors targeting specific therapeutic
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

      {/* Regulatory — DPH */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Regulatory Landscape</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              DPH REGULATORY FRAMEWORK
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <SectionReveal delay={0.05}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  The Direction de la Pharmacie et des H&ocirc;pitaux (DPH) is Algeria&apos;s
                  regulatory authority governing the registration, import, and distribution
                  of pharmaceutical and nutraceutical products. Algeria maintains a structured
                  pharmaceutical regulatory environment that reflects the country&apos;s
                  significant domestic pharma sector and its position as one of the largest
                  pharmaceutical markets in Africa.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For Indian manufacturers with WHO-GMP certification, Algeria&apos;s DPH
                  registration process is well-established. India is already one of Algeria&apos;s
                  top pharmaceutical supplier countries, and WHO-GMP certification is recognized
                  as a quality benchmark. The nutraceutical supplement registration pathway
                  requires comprehensive documentation — typically in French — but is navigable
                  for established Indian manufacturers with proper certification.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Key documentation accepted by the DPH includes: WHO-GMP certificate,
                  GMP certificate, Halal certificate, Free Sale Certificate (FSSAI),
                  Certificate of Analysis per batch, stability data, product specifications,
                  and Certificate of Origin. The Algerian importer typically handles the
                  in-country registration process with the DPH, while Admetus Lifesciences
                  provides all manufacturer-side documentation with French-language support.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Algeria has implemented import substitution policies encouraging domestic
                  manufacturing — but these primarily affect products that can be manufactured
                  locally. Specialized nutraceutical softgel formulations where domestic
                  encapsulation capacity is limited remain importable. Admetus Lifesciences
                  provides complete manufacturer-side dossiers formatted for DPH submission,
                  and our export team assists Algerian importers in compiling the documentation
                  package needed for efficient regulatory processing.
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
                  INDIA TO ALGERIA SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Sea freight via the Suez Canal and Mediterranean connects our
                  Haryana facility to Algeria&apos;s main commercial ports —
                  Algiers and Oran. Transit time: 14-18&nbsp;days.
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
              EXPORT DOCUMENTATION FOR&nbsp;ALGERIA
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
              ALGERIA EXPORT Q&amp;A
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
              EXPORT SOFTGELS TO&nbsp;ALGERIA
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Algerian importers and distributors seeking a WHO-GMP and Halal
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

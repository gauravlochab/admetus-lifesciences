import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyLibya = [
  {
    title: "Post-conflict market heavily reliant on imports",
    desc: "Libya's healthcare infrastructure has been severely disrupted by over a decade of conflict since 2011. Domestic pharmaceutical manufacturing is virtually non-existent, and the country relies almost entirely on imported medicines, supplements, and nutraceuticals. This import dependency creates sustained demand for affordable, quality-certified products from established international manufacturers — particularly Indian WHO-GMP certified companies that offer the price-quality combination Libyan importers require.",
  },
  {
    title: "97% Muslim population — Halal certification is mandatory",
    desc: "Libya is one of the most uniformly Muslim countries in the world, with approximately 97% of the 7 million population identifying as Muslim. Halal certification is not a marketing advantage in Libya — it is a fundamental prerequisite for market entry. Products without Halal certification will not be accepted by Libyan importers, distributors, pharmacists, or consumers under any circumstances.",
  },
  {
    title: "Very low regulatory enforcement creates faster market entry",
    desc: "Unlike Egypt's EDA or Morocco's DMP, Libya does not have a functioning centralized pharmaceutical registration system comparable to stable North African markets. The NCCDA (National Center for Disease Control and Prevention) handles some pharmaceutical oversight, but the practical regulatory barrier for importing quality-certified nutraceuticals is low. WHO-GMP certification and Halal documentation from the manufacturer are the primary quality assurance mechanisms relied upon by Libyan importers.",
  },
  {
    title: "Multiple supply routes — sea and overland via Tunisia",
    desc: "Libya can be supplied via two routes: direct sea freight to Tripoli or Misrata ports, and overland from Tunisia. Many Libyan importers maintain procurement operations in Tunis or Dubai and handle the final-mile logistics into Libya themselves. This dual-route flexibility makes supply chain management more resilient despite Libya's challenging domestic logistics environment.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is widespread across Libya — driven by indoor lifestyles, traditional clothing norms, and dietary gaps. The disruption to Libya's healthcare system means that preventive supplementation is largely managed through the pharmacy retail channel rather than clinical prescribing. Cholecalciferol 60,000 IU softgels serve as weekly therapeutic supplementation distributed through Libya's pharmacy and wholesale networks.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular disease remains a leading cause of death in Libya. Omega-3 softgels with Vitamin E support cardiac health, triglyceride management, and anti-inflammatory response. In a market where specialist cardiology care is limited by the post-conflict healthcare environment, pharmacy-dispensed supplements play an outsized role in cardiovascular health management.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Broad-spectrum nutritional supplementation addressing the micronutrient deficiencies prevalent in Libya's post-conflict population. Disrupted food supply chains and limited dietary diversity make multivitamin supplementation a critical product category in the Libyan pharmacy retail channel — serving both general wellness and clinical nutritional support.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health supplementation is critical in Libya — conflict-related injuries, limited access to specialist orthopaedic care, and an aging population segment create sustained demand for calcium and vitamin D metabolite supplementation. Calcitriol + K2-7 formulations support bone mineralization and fracture recovery across Libya's primary healthcare network.",
  },
  {
    name: "Nigella Sativa (Habbatus Sauda / Black Seed Oil)",
    desc: "Known as Habbatus Sauda in Arabic tradition, Nigella Sativa (black seed / Kalonji) has deep cultural and religious significance across Libya. The Prophet Muhammad (PBUH) referenced it as a remedy for all ailments except death — making it one of the most culturally resonant nutraceutical products in the Libyan market. In Libya's traditional medicine culture, Nigella Sativa is widely consumed. Our softgel encapsulation delivers standardized Nigella Sativa oil with consistent potency.",
  },
];

const shippingSteps = [
  {
    title: "Production & QC at Jind facility",
    desc: "Softgel capsules manufactured on the ARBES SGX-806P line, dried under controlled conditions, and subjected to multi-point quality testing — visual inspection, weight uniformity, dissolution, microbial limits. Full Certificate of Analysis (COA) generated per batch.",
  },
  {
    title: "Export packaging & documentation",
    desc: "Products packed in export-grade secondary packaging with desiccants and tamper-evident sealing. Export documentation prepared: COA, Halal certificate, Free Sale Certificate (FSSAI), commercial invoice, packing list, and bill of lading. Arabic labeling supported for the Libyan market.",
  },
  {
    title: "Dispatch from JNPT port",
    desc: "Sea freight from JNPT (Nhava Sheva, Mumbai) — India's largest west-coast container port. Regular shipping lines operate on the India-Suez-Mediterranean route with services to North African ports.",
  },
  {
    title: "Arrival at Tripoli or Misrata port — or overland via Tunisia",
    desc: "Two primary logistics paths: (1) Direct sea freight to Tripoli port or Misrata port — Libya's main commercial ports. (2) Sea freight to Tunis/Rades (Tunisia) followed by overland transport to Libya — a route commonly used by Libyan importers who maintain Tunis-based procurement operations. The Tunisia overland route provides logistics resilience when Libyan port operations are disrupted.",
  },
  {
    title: "Transit time: 12-16 days (direct) / 14-20 days (via Tunisia)",
    desc: "Direct JNPT to Tripoli / Misrata transit is approximately 12-16 days via the Suez Canal and central Mediterranean route. The Tunisia transshipment route (JNPT to Rades + overland to Libya) typically takes 14-20 days total. Air freight via Delhi to Tripoli's Mitiga Airport is available for urgent or sample shipments where commercial air links are operational.",
  },
];

const exportDocs = [
  {
    title: "Certificate of Analysis (COA)",
    desc: "Batch-specific laboratory analysis confirming identity, potency, purity, dissolution, and microbial limits for every shipment.",
  },
  {
    title: "Halal Certificate",
    desc: "Product-level Halal certification confirming compliance with Islamic dietary and manufacturing standards — absolutely essential for Libya's 97% Muslim market. Without Halal certification, products will not be accepted.",
  },
  {
    title: "Free Sale Certificate (FSSAI)",
    desc: "Issued by FSSAI (Food Safety and Standards Authority of India), confirming that the products are legally manufactured and freely sold in India.",
  },
  {
    title: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with HS codes, unit pricing, total value, and comprehensive packing list for customs clearance at Tripoli, Misrata, or via the Tunisian overland route.",
  },
  {
    title: "GMP / WHO-GMP Certificate",
    desc: "Manufacturing facility certification confirming compliance with Good Manufacturing Practice and World Health Organization GMP standards — the primary quality assurance benchmark relied upon by Libyan importers in the absence of a centralized registration system.",
  },
  {
    title: "Certificate of Origin",
    desc: "Issued by the Indian Chamber of Commerce, confirming the country of manufacture for Libyan customs and import duty assessment.",
  },
];

const faqs = [
  {
    q: "Is Halal certification available for all softgel products exported to Libya?",
    a: "Yes — and it is absolutely mandatory. Our Jind facility holds Halal certification covering the entire manufacturing process — raw materials, gelatin sourcing, production line, and finished products. Halal certificates are included with every export shipment to Libya. The gelatin used in our softgel shells is sourced from Halal-certified suppliers with full traceability documentation. Libya's 97% Muslim population makes Halal certification a non-negotiable requirement for any ingestible product.",
  },
  {
    q: "What is the regulatory process for importing nutraceutical softgels into Libya?",
    a: "Libya's pharmaceutical regulatory environment is less structured than neighbouring countries like Egypt or Tunisia due to the ongoing post-conflict institutional situation. The NCCDA (National Center for Disease Control and Prevention) handles some pharmaceutical oversight, but there is no centralized product registration system comparable to Egypt's EDA or Morocco's DMP. In practice, Libyan importers rely on manufacturer-side certifications — WHO-GMP, Halal, Free Sale Certificate — as the primary quality assurance mechanism. Admetus Lifesciences provides all manufacturer-side documentation required. The buyer or their Libyan import agent handles in-country customs clearance.",
  },
  {
    q: "What is the minimum order quantity for export to Libya?",
    a: "MOQs are flexible based on the formulation, packaging format, and order configuration. We support pilot shipments for new Libyan distributors establishing the product line, as well as regular orders for established importers. Given the logistics complexity of the Libyan market, we work with importers to find order sizes that balance MOQ requirements with practical shipping economics. Specific MOQ for your order is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Can shipments be routed via Tunisia for overland delivery to Libya?",
    a: "Yes. Many Libyan importers prefer the Tunisia overland route — shipping to Rades port (Tunis) and then transporting overland to Libya. This route provides logistics resilience and is familiar to Libyan trading companies that maintain Tunis-based operations. We can prepare export documentation for either direct Libyan port delivery or the Tunisia transshipment route. Discuss your preferred logistics path with our export team at team@admetuslifesciences.com.",
  },
  {
    q: "Can you supply softgels under our brand name for the Libyan market?",
    a: "Yes. We operate as a private-label and contract manufacturer — your brand name, packaging design, and labeling specifications are applied to the finished product. We support Arabic labeling for the Libyan market. Brand artwork approval and proof signoff happens before production begins. See our private label softgel manufacturer page for the full process.",
  },
  {
    q: "What payment terms do you offer for Libyan buyers?",
    a: "Given the financial infrastructure challenges in Libya, we typically work with Libyan buyers through T/T (telegraphic transfer) with 30-50% advance payment and the balance against shipping documents. Letter of Credit (LC) arrangements depend on the issuing bank. Many Libyan importers process payments through Tunisia or Dubai-based intermediaries — we accommodate these arrangements. For first-time buyers, we recommend starting with a pilot order. Specific terms are confirmed in the proforma invoice.",
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
      name: "Libya",
      item: "https://www.admetuslifesciences.com/export/libya/",
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

export default function LibyaExportPage() {
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
          alt="Halal certified softgel capsules manufactured in India for export to Libya — Admetus Lifesciences, WHO-GMP certified"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Libya</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;LIBYA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal and WHO-GMP certified softgel capsules from Haryana, India &mdash;
            affordable nutraceutical generics for Libya&apos;s import-dependent
            healthcare market. Full export documentation, shipping to Tripoli,
            Misrata, or overland via&nbsp;Tunisia.
          </p>
        </div>
      </section>

      {/* Libya Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Libya presents a unique pharmaceutical export opportunity — a country
                of 7&nbsp;million people with virtually no domestic pharmaceutical
                manufacturing capacity and near-total dependence on imported medicines and
                supplements. Over a decade of post-conflict instability has disrupted
                Libya&apos;s healthcare infrastructure, but the fundamental demand for
                pharmaceutical and nutraceutical products remains strong.
                <strong> The market is almost entirely import-driven</strong>, creating
                sustained opportunity for manufacturers who can provide quality-certified
                products with reliable documentation.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Libya&apos;s regulatory environment is less structured than neighbouring
                Egypt, Tunisia, or Algeria — the NCCDA (National Center for Disease Control
                and Prevention) handles some pharmaceutical oversight, but there is no
                centralized product registration system comparable to stable North African
                markets. In practice, Libyan importers rely on manufacturer-side
                certifications — WHO-GMP, Halal, GMP — as the primary quality assurance
                mechanism. This lower regulatory barrier means faster market entry for
                certified Indian manufacturers.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana 126112,
                manufactures Halal-certified, WHO-GMP compliant softgel capsules suited for
                the Libyan market — combining the pricing economics of Indian manufacturing
                with the certifications and documentation that Libyan importers require in
                the absence of a formal registration framework.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Libya */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY EXPORT SOFTGELS TO&nbsp;LIBYA
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyLibya.map((item, i) => (
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
                  HALAL CERTIFIED FOR THE LIBYAN&nbsp;MARKET
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Libya is approximately 97% Muslim — one of the most uniformly
                  Muslim countries globally. Halal certification is not a marketing
                  advantage; it is an absolute prerequisite. Products without Halal
                  certification will not enter the Libyan&nbsp;market.
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
                  For the Libyan market specifically, Halal certification is arguably more
                  critical than in any other North African market because Libya lacks the
                  institutional regulatory frameworks (like Egypt&apos;s EDA or Tunisia&apos;s
                  DPM) that provide a secondary layer of product vetting. In Libya,
                  manufacturer-side certifications — particularly Halal and WHO-GMP — are
                  the primary trust signals that importers, distributors, pharmacists, and
                  consumers rely on. Without Halal certification, a product has no pathway
                  to market in Libya regardless of its quality or pricing.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Every export shipment to Libya includes a product-specific Halal
                  certificate alongside the Certificate of Analysis, Free Sale Certificate,
                  and commercial documentation — whether shipped directly to Tripoli/Misrata
                  or routed via Tunisia. Our Halal certification is recognized across
                  MENA and North African markets.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range for Libya */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Range</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;LIBYA
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
              softgel blends for Libyan distributors targeting specific therapeutic
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

      {/* Regulatory — Low Barrier */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Regulatory Landscape</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              STREAMLINED IMPORT FRAMEWORK
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <SectionReveal delay={0.05}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Libya&apos;s pharmaceutical regulatory environment is fundamentally
                  different from its North African neighbours. While Egypt has the EDA,
                  Morocco has the DMP, Algeria has the DPH, and Tunisia has the DPM —
                  Libya does not currently operate a fully functioning centralized
                  pharmaceutical registration authority. The NCCDA (National Center for
                  Disease Control and Prevention) handles some pharmaceutical oversight,
                  but post-conflict institutional disruption means that the practical
                  regulatory barrier for importing quality-certified nutraceuticals is
                  significantly lower than in stable North African markets.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For Indian manufacturers with WHO-GMP certification, Libya represents
                  one of the fastest paths to market in North Africa. The key requirements
                  are manufacturer-side certifications (WHO-GMP, GMP, Halal) and standard
                  export documentation — not a product-by-product registration process.
                  This is similar to the Iraqi market dynamics, where post-conflict
                  reconstruction priorities have resulted in streamlined import
                  frameworks that prioritize getting quality products into the market.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  In the absence of a centralized registration system, Libyan importers
                  rely heavily on manufacturer-side quality certifications. WHO-GMP
                  certification, Halal certification, and FSSAI Free Sale Certificate from
                  an Indian manufacturer are the primary trust signals in the Libyan
                  pharmaceutical import chain. Importers who source from WHO-GMP certified
                  facilities can demonstrate product quality to their customers and
                  to any oversight bodies that may be involved.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Admetus Lifesciences provides all manufacturer-side documentation
                  required for Libyan import operations: WHO-GMP certificate, GMP
                  certificate, Halal certificate, Free Sale Certificate from FSSAI,
                  Certificate of Analysis per batch, Certificate of Origin, and
                  commercial documentation. The buyer or their import agent handles
                  the in-country clearance process — whether at Tripoli or Misrata ports
                  or via the Tunisian overland route.
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
                  INDIA TO LIBYA SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Two established logistics paths connect our Haryana facility to
                  Libyan importers — direct sea freight to Tripoli/Misrata or via
                  Tunisia with overland forwarding. Transit time:
                  12-20&nbsp;days.
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
              EXPORT DOCUMENTATION FOR&nbsp;LIBYA
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
              LIBYA EXPORT Q&amp;A
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
              EXPORT SOFTGELS TO&nbsp;LIBYA
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Libyan importers and distributors seeking a WHO-GMP and Halal
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

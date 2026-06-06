import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyMorocco = [
  {
    title: "Gateway to Francophone West Africa",
    desc: "Morocco is the commercial bridge between Europe and Sub-Saharan Africa. Moroccan distributors and trading companies maintain extensive networks across Francophone West African markets — Senegal, Côte d'Ivoire, Mali, Niger, Burkina Faso. Establishing a supply relationship with a Moroccan importer opens secondary distribution channels across the entire Francophone African corridor without requiring separate market entry for each country.",
  },
  {
    title: "37 million consumers with growing healthcare spending",
    desc: "Morocco's population of 37 million is young, increasingly urbanised, and experiencing rising per-capita healthcare expenditure. The Moroccan government has expanded universal health coverage (AMO) — driving increased pharmaceutical and nutraceutical consumption through the formal pharmacy channel. This expanding insurance coverage creates sustained demand for affordable, quality-certified supplements.",
  },
  {
    title: "India is a significant pharmaceutical supplier to Morocco",
    desc: "Indian pharmaceutical manufacturers have established trade relationships with Moroccan importers, and Indian WHO-GMP certifications are recognized within Morocco's regulatory framework. India supplies APIs and finished formulations to Moroccan pharma companies, and the sourcing relationship is familiar to Moroccan procurement teams. Admetus Lifesciences fits directly into this existing India-Morocco pharmaceutical supply chain.",
  },
  {
    title: "Domestic pharma sector imports APIs and finished formulations",
    desc: "While Morocco has a domestic pharmaceutical manufacturing base (one of the strongest in Africa), it remains dependent on imported APIs and specialized finished formulations — particularly in the nutraceutical softgel category where domestic encapsulation capacity is limited. WHO-GMP certified softgels from India fill a genuine supply gap in the Moroccan market at competitive pricing.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is prevalent across Morocco — driven by indoor lifestyles, traditional clothing norms, and dietary insufficiency despite North Africa's abundant sunlight. Cholecalciferol 60,000 IU softgels are prescribed as weekly therapeutic supplementation by Moroccan clinicians for deficiency correction and are widely distributed through Morocco's pharmacy network.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular disease is the leading cause of mortality in Morocco. Omega-3 softgels with Vitamin E support cardiac health, triglyceride management, and anti-inflammatory response — a high-demand category across Moroccan pharmacy retail, hospital formularies, and specialist clinics in Casablanca, Rabat, and Marrakech.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Broad-spectrum nutritional supplementation addressing micronutrient gaps in the Moroccan population. Our multivitamin softgels serve the growing consumer wellness segment in urban Morocco while also addressing clinical nutritional deficiency in rural areas — distributed through both pharmacy chains and independent pharmacies.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health is a significant therapeutic category in Morocco — osteoporosis prevalence among post-menopausal women is comparable to European rates. Calcitriol + Calcium Citrate + K2-7 formulations support bone mineralization and calcium absorption, serving both preventive supplementation and therapeutic prescribing patterns in the Moroccan healthcare system.",
  },
  {
    name: "Nigella Sativa (Habbatus Sauda / Habba Sawda)",
    desc: "Known as Habba Sawda in Moroccan Arabic and Habbatus Sauda in classical Arabic, Nigella Sativa (black seed oil) carries deep cultural and religious significance in Morocco. The Prophet Muhammad (PBUH) referenced it as a remedy for all ailments except death — and it remains a widely consumed traditional remedy across Moroccan households. Our softgel encapsulation delivers standardized Nigella Sativa oil with consistent potency and shelf stability.",
  },
];

const shippingSteps = [
  {
    title: "Production & QC at Jind facility",
    desc: "Softgel capsules manufactured on the ARBES SGX-806P line, dried under controlled conditions, and subjected to multi-point quality testing — visual inspection, weight uniformity, dissolution, microbial limits. Full Certificate of Analysis (COA) generated per batch.",
  },
  {
    title: "Export packaging & documentation",
    desc: "Products packed in export-grade secondary packaging with desiccants and tamper-evident sealing. Export documentation prepared: COA, Halal certificate, Free Sale Certificate (FSSAI), commercial invoice, packing list, and bill of lading. French-language labeling supported.",
  },
  {
    title: "Dispatch from JNPT port",
    desc: "Sea freight from JNPT (Nhava Sheva, Mumbai) — India's largest west-coast container port. Regular shipping lines operate on the India-Suez-Mediterranean-Atlantic route with direct or transshipment services to Moroccan ports.",
  },
  {
    title: "Arrival at Casablanca or Tangier Med",
    desc: "Primary destination: Casablanca port — Morocco's largest commercial port and the main import hub for pharmaceutical products. Alternative: Tangier Med — the Mediterranean gateway port that has become one of Africa's busiest container terminals. Both ports have pharmaceutical customs clearance infrastructure.",
  },
  {
    title: "Transit time: 14-18 days",
    desc: "JNPT to Casablanca / Tangier Med transit is approximately 14-18 days via the Suez Canal and Mediterranean route. Air freight via Delhi or Mumbai to Casablanca Mohammed V International Airport is available for urgent or sample shipments with 3-5 day delivery.",
  },
];

const exportDocs = [
  {
    title: "Certificate of Analysis (COA)",
    desc: "Batch-specific laboratory analysis confirming identity, potency, purity, dissolution, and microbial limits for every shipment.",
  },
  {
    title: "Halal Certificate",
    desc: "Product-level Halal certification confirming compliance with Islamic dietary and manufacturing standards — essential for Moroccan market acceptance and DMP regulatory compliance.",
  },
  {
    title: "Free Sale Certificate (FSSAI)",
    desc: "Issued by FSSAI (Food Safety and Standards Authority of India), confirming that the products are legally manufactured and freely sold in India.",
  },
  {
    title: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with HS codes, unit pricing, total value, and comprehensive packing list for customs clearance at Casablanca, Tangier Med, or the buyer's designated Moroccan port.",
  },
  {
    title: "GMP / WHO-GMP Certificate",
    desc: "Manufacturing facility certification confirming compliance with Good Manufacturing Practice and World Health Organization GMP standards — recognized within Morocco's DMP regulatory framework.",
  },
  {
    title: "Certificate of Origin",
    desc: "Issued by the Indian Chamber of Commerce, confirming the country of manufacture for Moroccan customs and import duty assessment.",
  },
];

const faqs = [
  {
    q: "Is Halal certification available for all softgel products exported to Morocco?",
    a: "Yes. Our Jind facility holds Halal certification covering the entire manufacturing process — raw materials, gelatin sourcing, production line, and finished products. Halal certificates are included with every export shipment to Morocco and other Muslim-majority markets. The gelatin used in our softgel shells is sourced from Halal-certified suppliers with full traceability documentation.",
  },
  {
    q: "What is the DMP regulatory process for importing nutraceutical softgels into Morocco?",
    a: "The Direction du Médicament et de la Pharmacie (DMP) oversees pharmaceutical and nutraceutical product registration in Morocco. The registration process requires manufacturer certifications (WHO-GMP, GMP, Halal), product specifications, stability data, and Certificate of Analysis. Documentation may need to be submitted in French. Admetus Lifesciences provides all manufacturer-side documentation — the Moroccan importer or their regulatory agent handles the in-country registration with the DMP.",
  },
  {
    q: "What is the minimum order quantity for export to Morocco?",
    a: "MOQs are flexible based on the formulation, packaging format, and order configuration. We support pilot shipments for new Moroccan distributors establishing the product line, as well as full-container loads for established importers. Specific MOQ for your order is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Do you support French-language labeling for the Moroccan market?",
    a: "Yes. Morocco's official languages are Arabic and French, and pharmaceutical labeling typically requires French-language product information. We support custom labeling in French and Arabic for the Moroccan market — your labeling specifications are incorporated during the packaging phase. Artwork approval and proof signoff happens before production begins.",
  },
  {
    q: "Can you supply softgels under our brand name for the Moroccan market?",
    a: "Yes. We operate as a private-label and contract manufacturer — your brand name, packaging design, and labeling specifications are applied to the finished product. We support Arabic and French bilingual labeling for the Moroccan market. Brand artwork approval and proof signoff happens before production begins. See our private label softgel manufacturer page for the full process.",
  },
  {
    q: "What payment terms do you offer for Moroccan buyers?",
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
      name: "Morocco",
      item: "https://www.admetuslifesciences.com/export/morocco/",
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

export default function MoroccoExportPage() {
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
          alt="Halal certified softgel capsules manufactured in India for export to Morocco — Admetus Lifesciences, WHO-GMP certified"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Morocco</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;MOROCCO
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal certified softgel capsules from Haryana, India &mdash;
            WHO-GMP compliant nutraceutical generics for Morocco&apos;s
            37&nbsp;million-consumer healthcare market. Full export documentation,
            direct shipping to Casablanca and Tangier&nbsp;Med.
          </p>
        </div>
      </section>

      {/* Morocco Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Morocco occupies a unique strategic position in African and Middle Eastern
                pharmaceutical trade. Located at the northwest tip of Africa, with coastlines
                on both the Atlantic Ocean and the Mediterranean Sea, Morocco serves as a
                commercial gateway between Europe, the Middle East, and Francophone West
                Africa. For Indian nutraceutical manufacturers, Morocco represents both a
                direct market of 37&nbsp;million consumers and a <strong>distribution hub
                for the broader Francophone African corridor</strong>.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Morocco has one of the most developed pharmaceutical sectors in Africa, with
                a domestic manufacturing base that produces a significant share of its own
                pharmaceutical needs. However, the nutraceutical and softgel capsule segment
                relies substantially on imports — Morocco imports both APIs (active
                pharmaceutical ingredients) and finished formulations from India, Europe, and
                China. The Direction du M&eacute;dicament et de la Pharmacie (DMP) regulates
                pharmaceutical imports with a structured but navigable registration framework.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana 126112,
                manufactures Halal-certified, WHO-GMP compliant softgel capsules suited for
                the Moroccan market — combining Indian manufacturing economics with the
                quality certifications and French/Arabic documentation that Moroccan importers
                and the DMP require.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Morocco */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY EXPORT SOFTGELS TO&nbsp;MOROCCO
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyMorocco.map((item, i) => (
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
                  HALAL CERTIFIED FOR THE MOROCCAN&nbsp;MARKET
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Morocco is a Muslim-majority country (over 99% Muslim) where
                  Halal certification is a non-negotiable requirement for ingestible
                  products. The Moroccan consumer expects Halal labeling, and
                  distributors will not stock products without&nbsp;it.
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
                  For the Moroccan market specifically, Halal certification serves three
                  critical functions: (1) it satisfies import and regulatory requirements
                  under the DMP framework where Halal documentation is expected for
                  ingestible products, (2) it enables placement in Morocco&apos;s pharmacy
                  retail channels — from major chains in Casablanca and Rabat to independent
                  pharmacies across the country — where Halal labeling is a consumer
                  expectation, and (3) it supports re-export to Francophone West African
                  markets (Senegal, Mali, C&ocirc;te d&apos;Ivoire) where Muslim populations
                  also require Halal certification.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Every export shipment to Morocco includes a product-specific Halal
                  certificate alongside the Certificate of Analysis, Free Sale Certificate,
                  and commercial documentation. Our Halal certification is recognized
                  across MENA and African markets, supporting Moroccan distributors who
                  serve multiple countries from their Casablanca or Tangier operations.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range for Morocco */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Range</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;MOROCCO
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
              softgel blends for Moroccan distributors targeting specific therapeutic
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

      {/* Regulatory — DMP */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Regulatory Landscape</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              DMP REGULATORY FRAMEWORK
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <SectionReveal delay={0.05}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  The Direction du M&eacute;dicament et de la Pharmacie (DMP) is Morocco&apos;s
                  regulatory authority governing the registration, import, and distribution
                  of pharmaceutical and nutraceutical products. Morocco maintains a structured
                  pharmaceutical regulatory environment — more developed than many African
                  markets — reflecting the country&apos;s established domestic pharma sector
                  and its aspiration to serve as a regional pharmaceutical hub.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For Indian manufacturers with WHO-GMP certification, Morocco&apos;s DMP
                  registration process is navigable. WHO-GMP certification is recognized as
                  a quality benchmark, and the nutraceutical supplement registration pathway
                  — while requiring comprehensive documentation — is less intensive than the
                  full pharmaceutical registration process. Documentation is typically
                  required in French.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Key documentation accepted by the DMP includes: WHO-GMP certificate,
                  GMP certificate, Halal certificate, Free Sale Certificate (FSSAI),
                  Certificate of Analysis per batch, stability data, product specifications,
                  and Certificate of Origin. The Moroccan importer typically handles the
                  in-country registration process with the DMP, while Admetus Lifesciences
                  provides all manufacturer-side documentation.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  India&apos;s growing position as a pharmaceutical supplier to Morocco means
                  that Indian manufacturing certifications are increasingly recognized by DMP
                  reviewers. Admetus Lifesciences provides complete manufacturer-side dossiers
                  with French-language documentation support, formatted for DMP submission
                  requirements. Our export team assists Moroccan importers in compiling the
                  documentation package needed for a smooth registration process.
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
                  INDIA TO MOROCCO SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Sea freight via the Suez Canal and Mediterranean connects our
                  Haryana facility to Morocco&apos;s main commercial ports —
                  Casablanca and Tangier Med. Transit time: 14-18&nbsp;days.
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
              EXPORT DOCUMENTATION FOR&nbsp;MOROCCO
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
              MOROCCO EXPORT Q&amp;A
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
              EXPORT SOFTGELS TO&nbsp;MOROCCO
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Moroccan importers and distributors seeking a WHO-GMP and Halal
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

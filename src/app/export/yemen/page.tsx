import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyYemen = [
  {
    title: "30+ million people with critical healthcare needs",
    desc: "Yemen's population of over 30 million is caught in one of the world's worst humanitarian crises. Healthcare infrastructure has been devastated by prolonged conflict — hospitals destroyed, supply chains disrupted, and medical professionals displaced. The population's healthcare needs are immense and growing, creating sustained demand for affordable, quality-certified pharmaceutical and nutraceutical imports from established Indian manufacturers.",
  },
  {
    title: "Zero domestic pharmaceutical manufacturing",
    desc: "Yemen has virtually no domestic pharmaceutical manufacturing capacity. Before the conflict, domestic production was minimal — now it is effectively non-existent. The country is 100% dependent on imported pharmaceuticals for everything from antibiotics and analgesics to vitamins and nutritional supplements. This total import dependency means every softgel capsule consumed in Yemen is manufactured abroad, and India is one of the primary source countries.",
  },
  {
    title: "India already established as trusted supplier",
    desc: "Indian pharmaceutical manufacturers have a long-established presence in the Yemeni market. Indian generics are widely recognized and trusted by Yemeni pharmacists, healthcare workers, and consumers. The existing trade relationship between Indian pharma exporters and Yemeni importers means the procurement channel is familiar and operationally proven — Admetus Lifesciences fits directly into this established supply chain.",
  },
  {
    title: "Massive demand for essential medicines and supplements",
    desc: "The combination of conflict, displacement, and widespread malnutrition has created enormous demand for essential medicines — antibiotics, vitamins, nutritional supplements, and therapeutic products. Vitamin D deficiency, iron deficiency, and general micronutrient malnutrition are endemic. Both humanitarian organizations (WHO, UNICEF, MSF) and commercial importers actively procure affordable generics from India to address these needs.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is widespread across Yemen — driven by indoor confinement during conflict, displacement to camps with limited sun exposure, and dietary inadequacy. Cholecalciferol 60,000 IU softgels serve as weekly therapeutic supplementation prescribed across Yemeni clinics, humanitarian medical facilities, and the limited remaining pharmacy retail network. This is one of the highest-demand products for Yemeni importers.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular disease remains a leading cause of death in Yemen even amid the conflict. Omega-3 softgels with Vitamin E support cardiac health, triglyceride management, and anti-inflammatory response. The product is procured both through commercial pharmacy channels in urban areas like Sana'a and Aden, and through humanitarian health programs targeting chronic disease management in displaced populations.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Yemen is experiencing one of the world's worst malnutrition crises — over 16 million people face food insecurity. Broad-spectrum multivitamin softgels address the widespread micronutrient deficiencies affecting adults and adolescents. These are a staple procurement item for both commercial distributors and humanitarian organizations operating across Yemen's governorates.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health supplementation is critical in Yemen — conflict-related injuries, fractures from displacement, and chronic calcium deficiency driven by malnutrition create sustained demand for bone mineralization support. Calcitriol + K2-7 formulations support fracture recovery and long-term bone health in a population with severely compromised nutritional intake.",
  },
  {
    name: "Nigella Sativa (Habbatus Sauda / Black Seed Oil)",
    desc: "Known as Habbatus Sauda in Arabic tradition, Nigella Sativa holds profound cultural and religious significance across Yemen. The Prophet Muhammad (PBUH) referenced it as a remedy for all ailments except death — making it one of the most culturally resonant and commercially demanded nutraceutical products in Yemen. Yemeni consumers actively seek Habbatus Sauda in softgel form for immune support, respiratory health, and general wellness. Our softgel encapsulation delivers standardized Nigella Sativa oil with consistent potency and Halal certification.",
  },
];

const shippingSteps = [
  {
    title: "Production & QC at Jind facility",
    desc: "Softgel capsules manufactured on the ARBES SGX-806P line, dried under controlled conditions, and subjected to multi-point quality testing — visual inspection, weight uniformity, dissolution, microbial limits. Full Certificate of Analysis (COA) generated per batch.",
  },
  {
    title: "Export packaging & documentation",
    desc: "Products packed in export-grade secondary packaging with desiccants and tamper-evident sealing. Export documentation prepared: COA, Halal certificate, Free Sale Certificate (FSSAI), commercial invoice, packing list, and bill of lading. Minimal regulatory documentation required for the Yemeni market.",
  },
  {
    title: "Dispatch from JNPT or Mundra port",
    desc: "Sea freight from JNPT (Nhava Sheva, Mumbai) or Mundra (Gujarat) — India's two largest west-coast container ports. Both offer regular shipping services to Arabian Sea destinations including Yemen's ports.",
  },
  {
    title: "Arrival at Aden or Hudaydah port",
    desc: "Direct sea route via the Arabian Sea to Aden port (southern Yemen, currently more accessible) or Hudaydah port (western Yemen, Red Sea coast). Port selection depends on the importer's location and current operational status of each port. Alternatively, shipments can route via Dubai (Jebel Ali) for transshipment — a common logistics path for Yemeni importers who maintain Dubai-based trading operations.",
  },
  {
    title: "Transit time: 7-12 days",
    desc: "Direct JNPT/Mundra to Aden transit is approximately 7-10 days via the Arabian Sea. The Dubai transshipment route (Jebel Ali + onward to Aden/Hudaydah) typically takes 10-12 days total. Air freight via Delhi or Mumbai is available for urgent or sample shipments with 2-4 day delivery.",
  },
];

const exportDocs = [
  {
    title: "Certificate of Analysis (COA)",
    desc: "Batch-specific laboratory analysis confirming identity, potency, purity, dissolution, and microbial limits for every shipment.",
  },
  {
    title: "Halal Certificate",
    desc: "Product-level Halal certification confirming compliance with Islamic dietary and manufacturing standards — mandatory for Yemen's entirely Muslim population and essential for market acceptance at every level of the supply chain.",
  },
  {
    title: "Free Sale Certificate (FSSAI)",
    desc: "Issued by FSSAI (Food Safety and Standards Authority of India), confirming that the products are legally manufactured and freely sold in India.",
  },
  {
    title: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with HS codes, unit pricing, total value, and comprehensive packing list for customs clearance at Aden, Hudaydah, or the buyer's designated port.",
  },
  {
    title: "GMP / WHO-GMP Certificate",
    desc: "Manufacturing facility certification confirming compliance with Good Manufacturing Practice and World Health Organization GMP standards.",
  },
  {
    title: "Certificate of Origin",
    desc: "Issued by the Indian Chamber of Commerce, confirming the country of manufacture for Yemeni customs and import duty assessment.",
  },
];

const faqs = [
  {
    q: "Is Halal certification available for all softgel products exported to Yemen?",
    a: "Yes. Our Jind facility holds Halal certification covering the entire manufacturing process — raw materials, gelatin sourcing, production line, and finished products. Yemen is entirely Muslim — Halal certification is a non-negotiable requirement for all pharmaceutical and nutraceutical imports. Halal certificates are included with every export shipment. The gelatin used in our softgel shells is sourced from Halal-certified suppliers with full traceability documentation.",
  },
  {
    q: "What regulatory documentation is required for importing softgels into Yemen?",
    a: "Yemen's pharmaceutical import regulatory framework currently operates with minimal complexity due to the conflict situation. The key requirements are: WHO-GMP certificate from the manufacturer, Free Sale Certificate, Halal certificate, Certificate of Analysis per batch, and standard commercial import documentation (commercial invoice, packing list, bill of lading). There is no centralized product registration system comparable to GCC markets — importers work with available health authorities or port-level customs clearance. Specific requirements may vary depending on the port of entry and the controlling authority.",
  },
  {
    q: "What is the minimum order quantity for export to Yemen?",
    a: "MOQs are flexible and designed to accommodate Yemen's market conditions. We understand that Yemeni importers often operate with constrained capital and fragmented distribution — small consignment pilot orders are supported alongside full-container loads. We also work with humanitarian procurement organizations that may have specific volume and documentation requirements. Specific MOQ for your order is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How are shipments routed from India to Yemen?",
    a: "Three primary routes: (1) Direct sea freight from JNPT (Mumbai) or Mundra (Gujarat) to Aden port — approximately 7-10 days transit via the Arabian Sea. (2) Direct to Hudaydah port on Yemen's Red Sea coast — similar transit time, subject to port operational status. (3) Via Dubai (Jebel Ali port) with onward transshipment to Aden or Hudaydah — approximately 10-12 days total. Many Yemeni importers maintain trading offices in Dubai and prefer the transshipment route. Air freight is available for samples and urgent shipments (2-4 days).",
  },
  {
    q: "Can you supply softgels under our brand name for the Yemeni market?",
    a: "Yes. We operate as a private-label and contract manufacturer — your brand name, packaging design, and labeling specifications are applied to the finished product. We support Arabic labeling for the Yemeni market. Brand artwork approval and proof signoff happens before production begins. See our private label softgel manufacturer page for the full process.",
  },
  {
    q: "Do you work with humanitarian organizations procuring for Yemen?",
    a: "Yes. We understand that a significant portion of pharmaceutical and nutraceutical procurement for Yemen is channeled through humanitarian organizations, NGOs, and UN agencies. Our WHO-GMP certification, competitive pricing, flexible MOQs, and comprehensive export documentation are aligned with humanitarian procurement requirements. We can accommodate specific documentation, labeling, or packaging requirements mandated by procurement agencies. Contact our export team at team@admetuslifesciences.com to discuss humanitarian procurement specifications.",
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
      name: "Yemen",
      item: "https://www.admetuslifesciences.com/export/yemen/",
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

export default function YemenExportPage() {
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
          alt="Halal certified softgel capsules manufactured in India for export to Yemen — Admetus Lifesciences, WHO-GMP certified"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Yemen</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;YEMEN
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal and WHO-GMP certified softgel capsules from Haryana, India &mdash;
            affordable nutraceutical generics for Yemen&apos;s critical healthcare needs.
            Full export documentation, direct shipping to Aden and&nbsp;Hudaydah.
          </p>
        </div>
      </section>

      {/* Yemen Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Yemen represents one of the most urgent pharmaceutical import markets in
                the Middle East &mdash; and one of the most underserved. With a population
                exceeding 30 million caught in a prolonged conflict that has devastated the
                country&apos;s healthcare infrastructure, Yemen is{" "}
                <strong>100% dependent on imported pharmaceuticals</strong> for virtually
                every category of medicine, supplement, and nutraceutical product.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Before the conflict escalated in 2015, Yemen already had limited domestic
                pharmaceutical manufacturing. Today, that capacity is effectively zero.
                Hospitals and clinics that survived destruction operate with chronic supply
                shortages. The World Health Organization estimates that only half of
                Yemen&apos;s health facilities are functional, and those that remain depend
                entirely on imported medicines. This creates both humanitarian urgency and
                sustained commercial demand for affordable, quality-certified pharmaceutical
                products from established manufacturing countries &mdash; with India at the
                forefront.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana 126112,
                manufactures Halal-certified, WHO-GMP compliant softgel capsules suited for
                the Yemeni market &mdash; combining the pricing economics of Indian
                manufacturing with the Halal certification that Yemen&apos;s entirely Muslim
                population requires. Our competitive pricing is particularly relevant for
                humanitarian procurement channels that operate under strict cost constraints.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Yemen&apos;s regulatory environment for pharmaceutical imports is currently
                minimal due to the conflict conditions. Unlike GCC markets with centralized
                registration systems, Yemen&apos;s import framework operates with very low
                regulatory barriers &mdash; WHO-GMP certification from the manufacturer,
                Halal documentation, and standard commercial export paperwork are the
                primary requirements. This allows faster market entry and simpler logistics
                compared to more regulated markets in the region.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Yemen */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY EXPORT SOFTGELS TO&nbsp;YEMEN
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyYemen.map((item, i) => (
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
                  HALAL CERTIFIED FOR THE YEMENI&nbsp;MARKET
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Yemen is an entirely Muslim country &mdash; Halal certification is
                  not optional. All pharmaceutical and nutraceutical imports must carry
                  Halal documentation for acceptance by importers, distributors,
                  pharmacists, and end&nbsp;consumers.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Admetus Lifesciences holds Halal certification covering the entire
                  manufacturing chain &mdash; from raw material sourcing (Halal-certified
                  gelatin suppliers with full traceability) through the production process
                  on our ARBES SGX-806P encapsulation line to finished product packaging.
                  This is not a third-party attestation applied at the end; it is integrated
                  into our manufacturing protocols from the first step.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For the Yemeni market specifically, Halal certification serves as the
                  single most important product qualification. In a market where regulatory
                  infrastructure is disrupted by conflict, Halal certification functions
                  as both a quality signal and a cultural requirement. Products without
                  Halal documentation are simply unsaleable &mdash; regardless of pricing
                  or clinical efficacy. Yemeni consumers and healthcare workers expect Halal
                  labeling on every pharmaceutical and nutraceutical product.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Every export shipment to Yemen includes a product-specific Halal
                  certificate alongside the Certificate of Analysis, Free Sale Certificate,
                  and commercial documentation. Admetus Lifesciences provides Halal
                  certification documentation with every shipment as standard &mdash; no
                  separate request or additional cost required.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range for Yemen */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Range</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;YEMEN
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
              softgel blends for Yemeni distributors and humanitarian procurement
              agencies targeting specific therapeutic categories. Custom formulation
              requests are evaluated within 48 hours. Contact us at{" "}
              <a href="mailto:team@admetuslifesciences.com" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">
                team@admetuslifesciences.com
              </a>{" "}
              with your formulation requirements.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Documentation</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              EXPORT DOCUMENTATION FOR&nbsp;YEMEN
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <div className="max-w-[68ch] space-y-5 mb-12">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Yemen&apos;s import documentation requirements are minimal compared to
                regulated markets like the GCC. The conflict has disrupted centralized
                regulatory institutions, and the practical import process operates
                primarily through port-level customs clearance. The documentation
                Admetus provides covers both the regulatory essentials and the
                commercial paperwork needed for smooth logistics.
              </p>
            </div>
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

      {/* Shipping & Logistics */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Shipping &amp; Logistics</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  INDIA TO YEMEN SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Multiple shipping routes connect our Haryana facility to
                  Yemeni importers &mdash; direct to Aden or Hudaydah, or via
                  Dubai (Jebel Ali) transshipment for reliability.
                  Transit time: 7-12&nbsp;days.
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

      {/* Why Admetus */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Why Admetus</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY YEMENI IMPORTERS CHOOSE&nbsp;ADMETUS
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <SectionReveal delay={0.05}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  <strong>Halal certified, WHO-GMP compliant.</strong> The two
                  certifications that matter most for Yemen &mdash; Halal for cultural
                  and religious compliance, WHO-GMP for manufacturing quality assurance.
                  Both are integrated into our production process, not applied as
                  afterthoughts. Every shipment includes complete certification
                  documentation.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  <strong>Competitive pricing critical for humanitarian markets.</strong>{" "}
                  Yemen&apos;s pharmaceutical procurement operates under extreme cost
                  constraints &mdash; whether through commercial importers serving a
                  price-sensitive population or humanitarian organizations operating
                  on donor budgets. Indian manufacturing economics deliver WHO-GMP
                  certified softgels at 40-60% lower cost than European equivalents.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  <strong>Flexible MOQ for fragmented markets.</strong> Yemen&apos;s
                  import market is fragmented across multiple ports, zones of control,
                  and distribution networks. Not every importer can commit to
                  full-container loads. Admetus supports small consignment pilot orders
                  as well as bulk procurement &mdash; accommodating the operational
                  realities of a conflict-affected market.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  <strong>Fast shipping via Arabian Sea route.</strong> Our facility in
                  Jind, Haryana connects to JNPT and Mundra ports with established
                  freight forwarding. The Arabian Sea shipping lane provides direct
                  access to Aden &mdash; Yemen&apos;s most accessible port &mdash; with
                  7-10 day transit times. Dubai transshipment adds reliability for
                  importers who prefer that logistics path.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Frequently Asked</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              YEMEN EXPORT Q&amp;A
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

      {/* Related Markets */}
      <SectionReveal>
        <section className="py-12 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
          <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
            <span className="label-text text-[var(--gold)] mb-4 block">RELATED MARKETS</span>
            <div className="flex flex-wrap gap-3">
              <Link href="/export/iraq/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Iraq
              </Link>
              <Link href="/export/jordan/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Jordan
              </Link>
              <Link href="/export/lebanon/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Lebanon
              </Link>
              <Link href="/export/syria/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Syria
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              EXPORT SOFTGELS TO&nbsp;YEMEN
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Yemeni importers, distributors, and humanitarian procurement
              agencies seeking a WHO-GMP and Halal certified softgel capsule
              manufacturer in India &mdash; share your requirements and our
              export team will respond within 48&nbsp;hours.
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

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyTajikistan = [
  {
    title: "Muslim-majority market with mandatory Halal expectations",
    desc: "Tajikistan is approximately 98% Sunni Muslim. Halal certification is not optional for pharmaceutical and nutraceutical imports — it is a baseline market expectation. Products without Halal documentation face rejection at the distributor, pharmacy, and consumer level. Admetus Lifesciences holds Halal certification across the entire manufacturing chain, making our softgel capsules immediately acceptable in Tajik retail and clinical channels.",
  },
  {
    title: "Iran is the incumbent — India competes on quality and price",
    desc: "Iran currently supplies a significant share of Tajikistan's pharmaceutical imports, leveraging geographic proximity and cultural ties. However, Indian manufacturers offer WHO-GMP certified products at competitive pricing with broader formulation capabilities. Admetus Lifesciences provides the same Halal compliance as Iranian manufacturers with the added credibility of WHO-GMP, FSSAI, and HACCP certifications — a stronger quality documentation package than most Iranian competitors offer.",
  },
  {
    title: "Growing healthcare spending in a 10-million population",
    desc: "Tajikistan's population of approximately 10 million is experiencing steady growth in healthcare expenditure, driven by government investment, World Bank health programs, and increasing consumer awareness of preventive supplementation. The nutraceutical segment — particularly Vitamin D3, Omega-3, and traditional remedies like Nigella Sativa — is expanding as pharmacy networks modernize across Dushanbe, Khujand, and regional centres.",
  },
  {
    title: "Low regulatory barriers via SMON",
    desc: "The State Service on Drug Control (SMON) regulates pharmaceutical and nutraceutical imports in Tajikistan. Compared to EAEU-aligned markets or GCC regulatory frameworks, Tajikistan's import requirements are relatively streamlined — WHO-GMP certification from the manufacturer, Halal certificate, Certificate of Analysis, and standard commercial documentation. There is no multi-month product registration queue equivalent to Saudi SFDA, enabling faster market entry for new product lines.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is widespread across Central Asia, driven by long winters with limited sunlight, indoor lifestyles, and dietary gaps. Cholecalciferol 60,000 IU softgels serve as weekly therapeutic supplementation prescribed across Tajik clinics and pharmacies for deficiency correction — a high-volume, recurring-demand formulation.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular disease is a leading cause of mortality in Tajikistan. Omega-3 softgels with Vitamin E support cardiac health, triglyceride management, and anti-inflammatory response — addressing a critical therapeutic need in a population with limited access to dietary fish and marine-sourced nutrients.",
  },
  {
    name: "Nigella Sativa (Kalonji / Habbatus Sauda)",
    desc: "Nigella Sativa — known as Siyah Dona in Tajik and Central Asian tradition — has deep roots in traditional medicine across the region. The Prophet Muhammad (PBUH) referenced it as a remedy for all ailments except death, giving it profound cultural significance in this 98% Muslim population. Our softgel encapsulation delivers standardized Nigella Sativa oil with consistent potency — bridging traditional usage with modern pharmaceutical delivery.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health is a significant therapeutic category in Tajikistan — harsh winters, nutritional deficiencies, and limited dairy consumption contribute to elevated osteoporosis rates, particularly among women. Calcitriol + K2-7 formulations support bone mineralization and calcium absorption, addressing a sustained clinical need across Tajik healthcare facilities.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Broad-spectrum nutritional supplementation addressing the micronutrient deficiencies common in populations with limited dietary diversity. Our multivitamin softgels are formulated for general adult health and are positioned for pharmacy retail distribution across urban and semi-urban Tajikistan.",
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
    title: "Sea freight from JNPT to Bandar Abbas",
    desc: "Primary route: sea freight from JNPT (Nhava Sheva, Mumbai) to Bandar Abbas, Iran — India's established western trade corridor. Bandar Abbas is the gateway port for overland transit into Central Asia via the Iran-Afghanistan-Tajikistan corridor.",
  },
  {
    title: "Overland transit to Dushanbe",
    desc: "From Bandar Abbas, cargo moves overland through Iran and into Tajikistan via established trade corridors — either through the Afghanistan transit route or via Turkmenistan/Uzbekistan depending on current logistics conditions. Total transit: 18-25 days from port departure.",
  },
  {
    title: "Air freight alternative via Dubai",
    desc: "For urgent or sample shipments, air freight via Dubai to Dushanbe International Airport offers 3-5 day delivery. Delhi to Dushanbe direct flights are also available seasonally, providing an even faster corridor for time-sensitive consignments.",
  },
];

const exportDocs = [
  {
    title: "Certificate of Analysis (COA)",
    desc: "Batch-specific laboratory analysis confirming identity, potency, purity, dissolution, and microbial limits for every shipment.",
  },
  {
    title: "Halal Certificate",
    desc: "Product-level Halal certification confirming compliance with Islamic dietary and manufacturing standards — essential for Tajikistan's 98% Muslim population and SMON import clearance.",
  },
  {
    title: "Free Sale Certificate (FSSAI)",
    desc: "Issued by FSSAI (Food Safety and Standards Authority of India), confirming that the products are legally manufactured and freely sold in India.",
  },
  {
    title: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with HS codes, unit pricing, total value, and comprehensive packing list for customs clearance at Tajik border or the buyer's designated entry point.",
  },
  {
    title: "GMP / WHO-GMP Certificate",
    desc: "Manufacturing facility certification confirming compliance with Good Manufacturing Practice and World Health Organization GMP standards — the primary quality credential recognized by SMON.",
  },
  {
    title: "Certificate of Origin",
    desc: "Issued by the Indian Chamber of Commerce, confirming the country of manufacture for Tajik customs and import duty assessment under applicable bilateral trade agreements.",
  },
];

const faqs = [
  {
    q: "Is Halal certification available for all softgel products exported to Tajikistan?",
    a: "Yes. Our Jind facility holds Halal certification covering the entire manufacturing process — raw materials, gelatin sourcing, production line, and finished products. Halal certificates are included with every export shipment to Tajikistan. The gelatin used in our softgel shells is sourced from Halal-certified suppliers with full traceability documentation. Given Tajikistan's 98% Muslim population, Halal certification is included as standard with every consignment.",
  },
  {
    q: "What is the regulatory process for importing nutraceutical softgels into Tajikistan?",
    a: "Tajikistan's pharmaceutical and nutraceutical imports are regulated by the State Service on Drug Control (SMON). The regulatory framework is comparatively streamlined versus EAEU or GCC markets. Key requirements include: WHO-GMP certificate from the manufacturer, Halal certificate, Certificate of Analysis per batch, Free Sale Certificate, and standard commercial documentation. Specific requirements may evolve as Tajikistan aligns with CIS trade regulations — your import agent in Dushanbe will advise on current clearance procedures.",
  },
  {
    q: "How are shipments routed from India to Tajikistan?",
    a: "Primary route: sea freight from JNPT (Mumbai) to Bandar Abbas (Iran), then overland to Dushanbe — approximately 18-25 days total transit. Alternative: air freight via Dubai to Dushanbe International Airport, 3-5 days for urgent or sample shipments. Delhi to Dushanbe direct flights are also available seasonally. The Bandar Abbas overland route is the most cost-effective for full-container volumes.",
  },
  {
    q: "Can you compete with Iranian pharmaceutical suppliers on pricing?",
    a: "Yes. While Iran has geographic proximity to Tajikistan, Indian manufacturers — particularly those operating from cost-efficient facilities like our Jind, Haryana plant — offer WHO-GMP certified softgels at pricing that is 30-50% lower than European alternatives and competitive with Iranian products. Our advantage is the combination of lower manufacturing cost, broader formulation range, and stronger quality documentation (WHO-GMP, FSSAI, HACCP, Halal) than most Iranian competitors provide.",
  },
  {
    q: "What is the minimum order quantity for export to Tajikistan?",
    a: "MOQs are flexible based on the formulation, packaging format, and order configuration. We support pilot shipments for new Tajik distributors establishing the product line, as well as full-container loads for established importers. For the Tajikistan market specifically, we recommend starting with a pilot shipment to validate logistics via the Bandar Abbas corridor before scaling. Specific MOQ for your order is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Is there demand for Nigella Sativa softgels in Tajikistan?",
    a: "Yes. Nigella Sativa (Siyah Dona / black seed) has deep roots in Central Asian and Islamic traditional medicine. In Tajikistan, it is widely recognized both as a cultural remedy and an increasingly popular nutraceutical supplement. Our softgel encapsulation provides standardized Nigella Sativa oil with consistent potency — a modern delivery format for a product with strong existing demand in Tajik pharmacies and health food retail.",
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
      name: "Tajikistan",
      item: "https://www.admetuslifesciences.com/export/tajikistan/",
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

export default function TajikistanExportPage() {
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
          alt="Halal certified softgel capsules manufactured in India for export to Tajikistan — Admetus Lifesciences, WHO-GMP certified"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Tajikistan</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;TAJIKISTAN
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal and WHO-GMP certified softgel capsules from Haryana, India &mdash;
            affordable nutraceutical generics for Tajikistan&apos;s growing healthcare market.
            Full export documentation, shipping via Bandar Abbas to&nbsp;Dushanbe.
          </p>
        </div>
      </section>

      {/* Tajikistan Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Tajikistan is a landlocked Central Asian republic with a population of
                approximately 10 million &mdash; and one of the most underserved
                pharmaceutical markets in the CIS region. The country imports the vast
                majority of its pharmaceutical and nutraceutical products, with
                <strong> Iran currently serving as a dominant supplier</strong> due to
                geographic proximity and shared cultural ties. However, Indian manufacturers
                are increasingly competitive in this market, offering WHO-GMP certified
                products at pricing that matches or undercuts Iranian alternatives &mdash;
                with stronger quality documentation.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                As a CIS member state, Tajikistan participates in regional trade frameworks
                that facilitate pharmaceutical imports from established manufacturing
                countries. India&apos;s reputation as &ldquo;the pharmacy of the
                world&rdquo; extends into Central Asia, where Indian generics and
                nutraceuticals are recognized for their quality-to-cost ratio. The Tajik
                pharmaceutical market, while smaller than Uzbekistan or Kazakhstan, is
                growing steadily &mdash; driven by World Bank health programs, government
                healthcare investment, and increasing consumer demand for preventive
                supplementation.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana 126112,
                manufactures Halal-certified, WHO-GMP compliant softgel capsules
                specifically suited for the Tajik market &mdash; combining Indian
                manufacturing economics with the Halal compliance that Tajikistan&apos;s
                98% Muslim population requires. Our facility operates ARBES SGX-806P and
                Elmach EPI 2000 encapsulation lines with FSSAI, GMP, HACCP, Halal, and
                WHO-GMP certifications.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Tajikistan */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY EXPORT SOFTGELS TO&nbsp;TAJIKISTAN
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyTajikistan.map((item, i) => (
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
                  HALAL CERTIFIED FOR THE TAJIK&nbsp;MARKET
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Tajikistan is a 98% Sunni Muslim country where Halal certification
                  is a non-negotiable requirement for pharmaceutical and nutraceutical
                  market acceptance. Products without visible Halal certification face
                  immediate rejection from distributors, pharmacists, and
                  end&nbsp;consumers.
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
                  into our manufacturing protocols.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For the Tajik market specifically, Halal certification serves three
                  critical functions: (1) it satisfies import clearance requirements under
                  SMON&apos;s regulatory framework, (2) it enables placement in pharmacy
                  retail channels where Halal labeling is expected by consumers, and
                  (3) it positions our products competitively against Iranian suppliers
                  who also provide Halal-certified products &mdash; ensuring no
                  disadvantage on religious compliance while offering superior
                  quality&nbsp;documentation.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Every export shipment to Tajikistan includes a product-specific Halal
                  certificate alongside the Certificate of Analysis, Free Sale Certificate,
                  and commercial documentation. Our Halal certification is internationally
                  recognized, meaning Tajik distributors who also trade across Central
                  Asian markets &mdash; Uzbekistan, Kyrgyzstan, Kazakhstan &mdash; can
                  use the same certification documentation across multiple&nbsp;territories.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range for Tajikistan */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Range</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;TAJIKISTAN
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
              softgel blends for Tajik distributors targeting specific therapeutic
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

      {/* Regulatory — SMON */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Regulatory Landscape</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SMON REGULATORY FRAMEWORK
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <SectionReveal delay={0.05}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Tajikistan&apos;s pharmaceutical and nutraceutical imports are regulated
                  by the State Service on Drug Control (SMON &mdash; also transliterated
                  as the State Service for Supervision of Medicines). SMON oversees product
                  registration, import licensing, and quality control for pharmaceutical
                  products entering the Tajik market. Compared to EAEU-aligned markets like
                  Russia or Kazakhstan, Tajikistan&apos;s regulatory framework is
                  less&nbsp;complex.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For Indian manufacturers with WHO-GMP certification, Tajikistan
                  represents one of the more accessible Central Asian markets. The key
                  requirements are manufacturer-side certifications (WHO-GMP, GMP,
                  Halal) and standard export documentation &mdash; the regulatory
                  barriers are significantly lower than those imposed by EAEU member
                  states or Gulf Cooperation Council&nbsp;countries.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  As a CIS member state, Tajikistan participates in certain regional
                  pharmaceutical trade agreements that can simplify cross-border
                  documentation. Indian pharma products with WHO-GMP certification are
                  recognized and accepted &mdash; India is already an established
                  pharmaceutical supplier across the CIS region, and procurement
                  channels exist through Tajik import agents operating in Dushanbe
                  and&nbsp;Khujand.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Admetus Lifesciences provides all manufacturer-side documentation
                  required for Tajik import clearance: WHO-GMP certificate, GMP
                  certificate, Halal certificate, Free Sale Certificate from FSSAI,
                  Certificate of Analysis per batch, Certificate of Origin, and
                  commercial documentation. The buyer or their Tajik import agent
                  handles the in-country SMON registration and customs clearance
                  process.
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
                  INDIA TO TAJIKISTAN SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Two primary shipping routes connect our Haryana facility to
                  Tajik importers &mdash; sea-plus-overland via Bandar Abbas
                  (Iran) or air freight via Dubai. Transit time:
                  18-25&nbsp;days (sea) or 3-5&nbsp;days&nbsp;(air).
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
              EXPORT DOCUMENTATION FOR&nbsp;TAJIKISTAN
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
              TAJIKISTAN EXPORT Q&amp;A
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
              <Link href="/export/uzbekistan/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Uzbekistan
              </Link>
              <Link href="/export/kyrgyzstan/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Kyrgyzstan
              </Link>
              <Link href="/export/turkmenistan/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Turkmenistan
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
              EXPORT SOFTGELS TO&nbsp;TAJIKISTAN
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Tajik importers and distributors seeking a WHO-GMP and Halal
              certified softgel capsule manufacturer in India &mdash; share your
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

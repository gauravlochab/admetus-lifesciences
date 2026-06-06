import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyUzbekistan = [
  {
    title: "Largest Central Asian market — 35 million population",
    desc: "Uzbekistan is the most populous country in Central Asia with approximately 35 million people — more than double the population of Kazakhstan and three times Tajikistan. This demographic scale translates directly into pharmaceutical and nutraceutical import volume. The country's healthcare system is undergoing modernization under President Mirziyoyev's reform agenda, with increasing budgetary allocation to primary care, preventive medicine, and pharmacy infrastructure.",
  },
  {
    title: "Established India-Uzbekistan pharma trade corridor",
    desc: "Indian pharmaceutical companies already export to Uzbekistan — Lenus Lifecare, for example, has obtained Uzbekistan GMP approval, validating the India-to-Uzbekistan pharma supply chain. This precedent demonstrates that Uzbek regulators recognize and accept Indian pharmaceutical manufacturing standards. Admetus Lifesciences enters this corridor with WHO-GMP, FSSAI, HACCP, and Halal certifications — a comprehensive quality documentation package for Uzbek importers.",
  },
  {
    title: "EAEU observer status — aligning with regional standards",
    desc: "Uzbekistan holds observer status in the Eurasian Economic Union (EAEU) and is progressively aligning its pharmaceutical technical regulations with EAEU standards. For Indian manufacturers, this means Uzbekistan is adopting more structured — but still accessible — import frameworks. Early entry positions Admetus Lifesciences before full EAEU alignment potentially increases regulatory complexity for new market entrants.",
  },
  {
    title: "Muslim-majority with strong Halal demand",
    desc: "Approximately 88% of Uzbekistan's population is Muslim. While Uzbekistan's regulatory framework is secular, Halal certification significantly enhances product acceptance at the distributor, pharmacy, and consumer level. Products with Halal documentation command faster shelf placement and stronger consumer trust — particularly in Tashkent, Samarkand, Bukhara, and the Fergana Valley where religious observance influences purchasing decisions.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is pervasive across Central Asia — Uzbekistan's continental climate with harsh winters and limited winter sunlight creates sustained clinical demand for therapeutic Vitamin D supplementation. Cholecalciferol 60,000 IU softgels are prescribed for weekly deficiency correction across Uzbek healthcare facilities and dispensed through pharmacy retail networks in all major cities.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular disease is the leading cause of death in Uzbekistan, accounting for over 50% of total mortality. Omega-3 softgels with Vitamin E support cardiac health, lipid management, and anti-inflammatory response — addressing a critical public health priority. The Uzbek government's focus on non-communicable disease prevention is driving increased prescriber and consumer awareness of Omega-3 supplementation.",
  },
  {
    name: "Nigella Sativa (Kalonji / Qora Dona)",
    desc: "Nigella Sativa — known as Qora Dona in Uzbek — has centuries of traditional use across Central Asia and Islamic medicine. The Prophet Muhammad (PBUH) referenced it as a remedy for all ailments except death. In Uzbekistan's bazaar culture and traditional pharmacy channels, black seed preparations are widely consumed. Our softgel encapsulation delivers standardized Nigella Sativa oil with consistent potency — a modern pharmaceutical format for a product with deep cultural roots.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health supplementation addresses a significant clinical need in Uzbekistan — particularly among aging populations and women with elevated osteoporosis risk. Calcitriol + K2-7 formulations support bone mineralization and calcium metabolism, and are increasingly prescribed by Uzbek endocrinologists and general practitioners as part of preventive care protocols.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Broad-spectrum nutritional supplementation for the general adult population. Uzbekistan's dietary patterns — heavy in bread, rice, and meat but often low in micronutrient diversity — create sustained demand for multivitamin products. Our formulations are positioned for pharmacy retail distribution across Tashkent and regional pharmacy chains.",
  },
];

const shippingSteps = [
  {
    title: "Production & QC at Jind facility",
    desc: "Softgel capsules manufactured on the ARBES SGX-806P line, dried under controlled conditions, and subjected to multi-point quality testing — visual inspection, weight uniformity, dissolution, microbial limits. Full Certificate of Analysis (COA) generated per batch.",
  },
  {
    title: "Export packaging & documentation",
    desc: "Products packed in export-grade secondary packaging with desiccants and tamper-evident sealing. Export documentation prepared: COA, Halal certificate, Free Sale Certificate (FSSAI), commercial invoice, packing list, and bill of lading. Russian-language COA translations available upon request for Uzbek regulatory submissions.",
  },
  {
    title: "Sea freight from JNPT to Bandar Abbas",
    desc: "Primary sea route: JNPT (Nhava Sheva, Mumbai) to Bandar Abbas, Iran — India's established western corridor for Central Asian trade. Bandar Abbas serves as the gateway for overland transit into Uzbekistan via the Iran-Turkmenistan-Uzbekistan road and rail network.",
  },
  {
    title: "Overland transit to Tashkent",
    desc: "From Bandar Abbas, cargo moves overland through Iran and Turkmenistan into Uzbekistan — arriving in Tashkent via the Farap-Alat border crossing. Total sea-plus-overland transit: approximately 20-28 days from port departure. The Bandar Abbas corridor is the most cost-effective route for full-container volumes.",
  },
  {
    title: "Air freight alternative via Delhi",
    desc: "For urgent or sample shipments, air freight from Delhi to Tashkent offers 2-4 day delivery — multiple airlines operate direct Delhi-Tashkent flights. Dubai-Tashkent air freight is also available with 3-5 day transit. Air freight is recommended for initial pilot shipments and time-sensitive orders.",
  },
];

const exportDocs = [
  {
    title: "Certificate of Analysis (COA)",
    desc: "Batch-specific laboratory analysis confirming identity, potency, purity, dissolution, and microbial limits for every shipment. Russian-language translations available for Uzbek regulatory submissions.",
  },
  {
    title: "Halal Certificate",
    desc: "Product-level Halal certification confirming compliance with Islamic dietary and manufacturing standards — enhancing product acceptance in Uzbekistan's 88% Muslim consumer market.",
  },
  {
    title: "Free Sale Certificate (FSSAI)",
    desc: "Issued by FSSAI (Food Safety and Standards Authority of India), confirming that the products are legally manufactured and freely sold in India.",
  },
  {
    title: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with HS codes, unit pricing, total value, and comprehensive packing list for customs clearance at Uzbek border or the buyer's designated entry point.",
  },
  {
    title: "GMP / WHO-GMP Certificate",
    desc: "Manufacturing facility certification confirming compliance with Good Manufacturing Practice and World Health Organization GMP standards — the primary quality credential recognized by Uzbekistan's Agency for Development of Pharmaceutical Industry.",
  },
  {
    title: "Certificate of Origin",
    desc: "Issued by the Indian Chamber of Commerce, confirming the country of manufacture for Uzbek customs and import duty assessment under applicable bilateral trade agreements between India and Uzbekistan.",
  },
];

const faqs = [
  {
    q: "Does Admetus Lifesciences have experience exporting to Central Asian markets?",
    a: "Yes. Admetus Lifesciences manufactures softgel capsules with the certifications required across Central Asian markets — WHO-GMP, FSSAI, HACCP, and Halal. Indian pharmaceutical manufacturers already have an established presence in Uzbekistan, with companies like Lenus Lifecare holding Uzbekistan GMP approval. Our product range and documentation package are specifically designed for markets that require WHO-GMP compliance and Halal certification.",
  },
  {
    q: "What is the regulatory process for importing nutraceutical softgels into Uzbekistan?",
    a: "Uzbekistan's pharmaceutical imports are regulated by the Agency for Development of Pharmaceutical Industry. As an EAEU observer state, Uzbekistan is progressively aligning with Eurasian technical regulations. Current requirements include: WHO-GMP certificate from the manufacturer, Certificate of Analysis per batch, Free Sale Certificate, and standard commercial documentation. Russian-language translations of COA and key documents may be required. Your Uzbek import agent will advise on current registration procedures, which may evolve as EAEU alignment progresses.",
  },
  {
    q: "Can you provide Russian-language Certificates of Analysis?",
    a: "Yes. We understand that Russian remains a working language in Uzbekistan's pharmaceutical regulatory and trade environment. We can provide Russian-language translations of Certificates of Analysis and other key export documents upon request. This facilitates smoother regulatory review and distributor communication within Uzbekistan.",
  },
  {
    q: "How are shipments routed from India to Uzbekistan?",
    a: "Primary route: sea freight from JNPT (Mumbai) to Bandar Abbas (Iran), then overland through Turkmenistan to Tashkent — approximately 20-28 days total transit. Alternative: air freight from Delhi to Tashkent via direct flights, 2-4 days for urgent or sample shipments. Dubai-Tashkent air freight is also available with 3-5 day transit. The Bandar Abbas overland route is the most cost-effective for full-container volumes.",
  },
  {
    q: "What is the minimum order quantity for export to Uzbekistan?",
    a: "MOQs are flexible based on the formulation, packaging format, and order configuration. We support pilot shipments for new Uzbek distributors establishing the product line, as well as full-container loads for established importers. For the Uzbekistan market, we recommend starting with an air-freight pilot shipment via Delhi-Tashkent to validate product acceptance before committing to sea-freight container volumes. Specific MOQ for your order is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Can you supply softgels under our brand name for the Uzbek market?",
    a: "Yes. We operate as a private-label and contract manufacturer — your brand name, packaging design, and labeling specifications are applied to the finished product. We support Russian and Uzbek language labeling for the Uzbekistan market. Brand artwork approval and proof signoff happens before production begins. See our private label softgel manufacturer page for the full process.",
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
      name: "Uzbekistan",
      item: "https://www.admetuslifesciences.com/export/uzbekistan/",
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

export default function UzbekistanExportPage() {
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
          alt="WHO-GMP and Halal certified softgel capsules manufactured in India for export to Uzbekistan — Admetus Lifesciences"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Uzbekistan</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;UZBEKISTAN
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP and Halal certified softgel capsules from Haryana, India &mdash;
            nutraceutical generics for Central Asia&apos;s largest market.
            Full export documentation, shipping via Bandar Abbas to&nbsp;Tashkent.
          </p>
        </div>
      </section>

      {/* Uzbekistan Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Uzbekistan is Central Asia&apos;s largest pharmaceutical market by population,
                with approximately 35 million people and a healthcare system undergoing
                significant modernization. The country&apos;s pharmaceutical industry has
                grown substantially under President Mirziyoyev&apos;s economic reforms, but
                <strong> domestic manufacturing capacity does not cover the full spectrum
                of pharmaceutical and nutraceutical demand</strong> &mdash; creating sustained
                import opportunities for quality-certified international manufacturers.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                India is an increasingly important pharmaceutical supplier to Uzbekistan.
                Indian companies have already established regulatory footholds &mdash;
                Lenus Lifecare, for example, holds Uzbekistan GMP approval, validating
                the India-to-Uzbekistan pharma trade corridor. This precedent demonstrates
                that Uzbek regulators recognize and accept Indian manufacturing standards,
                creating a pathway for additional Indian manufacturers to enter the market
                with confidence.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana 126112,
                manufactures WHO-GMP compliant, Halal-certified softgel capsules for
                the Uzbek market. Our facility operates ARBES SGX-806P and Elmach EPI 2000
                encapsulation lines with FSSAI, GMP, HACCP, Halal, and WHO-GMP
                certifications &mdash; the complete documentation package that Uzbek
                importers and the Agency for Development of Pharmaceutical Industry require.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Uzbekistan */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY EXPORT SOFTGELS TO&nbsp;UZBEKISTAN
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyUzbekistan.map((item, i) => (
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
                  HALAL CERTIFIED FOR THE UZBEK&nbsp;MARKET
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Uzbekistan is approximately 88% Muslim. While the regulatory framework
                  is secular, Halal certification significantly enhances product
                  acceptance across pharmacy retail, hospital formularies, and direct
                  consumer&nbsp;channels.
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
                  For the Uzbek market specifically, Halal certification provides
                  competitive differentiation against non-certified international
                  suppliers. Uzbek distributors in Tashkent, Samarkand, Bukhara, and
                  the Fergana Valley report that Halal-labeled products achieve faster
                  shelf placement and stronger sell-through rates &mdash; particularly
                  in the nutraceutical category where consumer trust in product purity
                  directly influences purchasing&nbsp;decisions.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Every export shipment to Uzbekistan includes a product-specific Halal
                  certificate alongside the Certificate of Analysis, Free Sale Certificate,
                  and commercial documentation. Our Halal certification is internationally
                  recognized, meaning Uzbek distributors who also trade across Central
                  Asian markets &mdash; Tajikistan, Kyrgyzstan, Kazakhstan, Turkmenistan
                  &mdash; can use the same certification documentation across
                  multiple&nbsp;territories.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range for Uzbekistan */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Range</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;UZBEKISTAN
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
              softgel blends for Uzbek distributors targeting specific therapeutic
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

      {/* Regulatory — EAEU alignment */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Regulatory Landscape</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              UZBEKISTAN PHARMA REGULATION
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <SectionReveal delay={0.05}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Uzbekistan&apos;s pharmaceutical sector is regulated by the Agency for
                  Development of Pharmaceutical Industry, which oversees product
                  registration, import licensing, manufacturing standards, and market
                  surveillance. The regulatory landscape is evolving &mdash; as an EAEU
                  observer state, Uzbekistan is progressively aligning its technical
                  regulations with Eurasian Economic Union standards, which will
                  eventually create a more structured (but potentially more complex)
                  import&nbsp;framework.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Currently, the import requirements for nutraceutical softgels
                  are accessible for Indian manufacturers with WHO-GMP certification.
                  The precedent set by Indian companies like Lenus Lifecare &mdash;
                  which holds Uzbekistan GMP approval &mdash; demonstrates that the
                  regulatory pathway from India to Uzbekistan is established and
                  functional.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Russian remains a working language in Uzbekistan&apos;s pharmaceutical
                  regulatory environment. Certificates of Analysis, product specifications,
                  and key regulatory documents may require Russian-language translations
                  for submission to the Agency. Admetus Lifesciences can provide
                  Russian-language COA translations to facilitate smoother regulatory
                  review and distributor&nbsp;communication.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Admetus Lifesciences provides all manufacturer-side documentation
                  required for Uzbek import clearance: WHO-GMP certificate, GMP
                  certificate, Halal certificate, Free Sale Certificate from FSSAI,
                  Certificate of Analysis per batch (with Russian translation available),
                  Certificate of Origin, and commercial documentation. The buyer or their
                  Uzbek import agent handles the in-country registration and customs
                  clearance process.
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
                  INDIA TO UZBEKISTAN SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Two primary shipping routes connect our Haryana facility to
                  Uzbek importers &mdash; sea-plus-overland via Bandar Abbas
                  (Iran) or air freight via Delhi direct to Tashkent. Transit time:
                  20-28&nbsp;days (sea) or 2-4&nbsp;days&nbsp;(air).
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
              EXPORT DOCUMENTATION FOR&nbsp;UZBEKISTAN
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
              UZBEKISTAN EXPORT Q&amp;A
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
              EXPORT SOFTGELS TO&nbsp;UZBEKISTAN
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Uzbek importers and distributors seeking a WHO-GMP and Halal
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

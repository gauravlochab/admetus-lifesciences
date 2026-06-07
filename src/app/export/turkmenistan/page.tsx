import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyTurkmenistan = [
  {
    title: "100% import-dependent pharmaceutical market",
    desc: "Turkmenistan has effectively no domestic pharmaceutical manufacturing capability. The country imports the entirety of its pharmaceutical and nutraceutical products from international suppliers — primarily Iran, India, Turkey, and European manufacturers. This complete import dependency creates a structurally guaranteed demand for quality-certified softgel capsules from established Indian manufacturers like Admetus Lifesciences.",
  },
  {
    title: "Iran is the incumbent — India competes on quality documentation",
    desc: "Iran currently supplies a significant share of Turkmenistan's pharmaceutical imports, leveraging geographic proximity (shared border) and cultural connections. However, Indian manufacturers offer WHO-GMP certified products with stronger quality documentation packages — WHO-GMP, FSSAI, HACCP, and Halal certifications — at competitive pricing. Admetus Lifesciences provides the same Halal compliance as Iranian manufacturers with the added credibility of international quality certifications that Turkmen importers increasingly demand.",
  },
  {
    title: "Muslim-majority population with Halal requirements",
    desc: "Turkmenistan is approximately 89% Muslim (primarily Sunni). Halal certification is essential for pharmaceutical and nutraceutical market acceptance — products without Halal documentation face resistance from distributors, pharmacists, and consumers. Our facility-wide Halal certification ensures immediate product compatibility with Turkmen market expectations, matching the Halal compliance offered by competing Iranian suppliers.",
  },
  {
    title: "Closed economy with controlled import channels",
    desc: "Turkmenistan operates a relatively closed economy with state-controlled import channels. While this creates higher barriers to initial market entry, once an import relationship is established, it tends to be stable and long-term. The state pharmaceutical procurement system provides predictable volume demand, and Indian manufacturers who establish themselves in the Turkmen supply chain benefit from sustained repeat orders with minimal competitive disruption.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is widespread across Turkmenistan — the continental climate with extreme temperature variations, indoor lifestyles during harsh winters and extreme summer heat, and dietary gaps create sustained clinical demand for therapeutic Vitamin D supplementation. Cholecalciferol 60,000 IU softgels are prescribed for weekly deficiency correction across Turkmen healthcare facilities and pharmacy channels.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular disease is a leading cause of mortality in Turkmenistan. The traditional Turkmen diet — heavy in meat, bread, and animal fats — combined with limited access to marine-sourced nutrients creates significant clinical demand for Omega-3 supplementation. Omega-3 softgels with Vitamin E support cardiac health, lipid management, and anti-inflammatory response across Turkmen pharmacy retail and clinical channels.",
  },
  {
    name: "Nigella Sativa (Kalonji / Gara Chigit)",
    desc: "Nigella Sativa — known as Gara Chigit in Turkmen — has deep roots in Central Asian and Islamic traditional medicine. The Prophet Muhammad (PBUH) referenced it as a remedy for all ailments except death, giving it profound cultural significance in Turkmenistan's 89% Muslim population. Our softgel encapsulation delivers standardised Nigella Sativa oil with consistent potency — a modern pharmaceutical format for a product with strong traditional demand across Turkmen bazaars and pharmacies.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health supplementation addresses significant clinical need in Turkmenistan — harsh continental climate, nutritional deficiencies, and limited access to specialised orthopaedic care contribute to elevated osteoporosis and fracture risk. Calcitriol + K2-7 formulations support bone mineralisation and calcium metabolism, serving both preventive and therapeutic needs across Turkmen healthcare facilities.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Broad-spectrum nutritional supplementation addressing micronutrient deficiencies common in populations with limited dietary diversity. Turkmenistan's dietary patterns — dominated by meat, bread, and limited fresh produce availability during winter months — create sustained demand for quality multivitamin formulations through pharmacy retail and state healthcare distribution channels.",
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
    desc: "Primary route: sea freight from JNPT (Nhava Sheva, Mumbai) to Bandar Abbas, Iran — India's established western trade corridor. Bandar Abbas is the gateway port for overland transit into Turkmenistan via the Iran-Turkmenistan border.",
  },
  {
    title: "Overland transit to Ashgabat",
    desc: "From Bandar Abbas, cargo moves overland through Iran to the Sarakhs border crossing into Turkmenistan, then to Ashgabat. This Iran-Turkmenistan overland corridor is the primary trade route — Iranian and Indian goods both enter Turkmenistan via this established logistics path. Total overland transit from Bandar Abbas: approximately 5-7 days.",
  },
  {
    title: "Transit time: 14-20 days",
    desc: "Total JNPT to Ashgabat transit is approximately 14-20 days — 7-10 days sea freight to Bandar Abbas plus 5-7 days overland to Ashgabat. Air freight via Dubai to Ashgabat International Airport offers 3-5 day delivery for urgent or sample shipments. The Bandar Abbas overland route is the most cost-effective for regular volumes.",
  },
];

const exportDocs = [
  {
    title: "Certificate of Analysis (COA)",
    desc: "Batch-specific laboratory analysis confirming identity, potency, purity, dissolution, and microbial limits for every shipment.",
  },
  {
    title: "Halal Certificate",
    desc: "Product-level Halal certification confirming compliance with Islamic dietary and manufacturing standards — essential for Turkmenistan's 89% Muslim population and market acceptance across distribution channels.",
  },
  {
    title: "Free Sale Certificate (FSSAI)",
    desc: "Issued by FSSAI (Food Safety and Standards Authority of India), confirming that the products are legally manufactured and freely sold in India.",
  },
  {
    title: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with HS codes, unit pricing, total value, and comprehensive packing list for customs clearance at the Turkmen border or the buyer's designated entry point.",
  },
  {
    title: "GMP / WHO-GMP Certificate",
    desc: "Manufacturing facility certification confirming compliance with Good Manufacturing Practice and World Health Organization GMP standards — the primary quality credential for Turkmen pharmaceutical import clearance.",
  },
  {
    title: "Certificate of Origin",
    desc: "Issued by the Indian Chamber of Commerce, confirming the country of manufacture for Turkmen customs and import duty assessment under applicable bilateral trade agreements.",
  },
];

const faqs = [
  {
    q: "How does Turkmenistan's closed economy affect pharmaceutical imports from India?",
    a: "Turkmenistan operates a relatively closed economy with state-controlled import channels. Pharmaceutical imports are managed through the Ministry of Health and state procurement systems. While initial market entry requires working through established Turkmen import agents or state procurement channels, once an import relationship is established, it tends to be stable with predictable repeat volumes. We recommend working with a Turkmen-based import agent who has established relationships with the Ministry of Health and state pharmaceutical procurement.",
  },
  {
    q: "Can you compete with Iranian pharmaceutical suppliers in Turkmenistan?",
    a: "Yes. While Iran has geographic proximity (shared border with Turkmenistan), Indian manufacturers offer competitive advantages: (1) WHO-GMP certification — a stronger quality credential than most Iranian manufacturers provide, (2) broader formulation range across softgel categories, (3) FSSAI, HACCP, and internationally-recognised Halal certifications, and (4) competitive pricing that matches or undercuts Iranian alternatives for equivalent-quality products. Our documentation package is stronger than typical Iranian competitors.",
  },
  {
    q: "What is the regulatory process for importing softgels into Turkmenistan?",
    a: "Turkmenistan's pharmaceutical imports are regulated by the Ministry of Health. The regulatory framework requires WHO-GMP certificate from the manufacturer, Halal certificate, Certificate of Analysis per batch, Free Sale Certificate, and standard commercial documentation. Turkmenistan does not follow EAEU regulations (it is not an EAEU member), and its import requirements are less structured than EAEU markets. Your Turkmen import agent will handle the in-country clearance process and advise on current MOH requirements.",
  },
  {
    q: "How are shipments routed from India to Turkmenistan?",
    a: "Primary route: sea freight from JNPT (Mumbai) to Bandar Abbas (Iran), then overland through Iran to the Sarakhs border crossing into Turkmenistan and on to Ashgabat — approximately 14-20 days total transit. Air freight via Dubai to Ashgabat International Airport offers 3-5 day delivery for urgent or sample shipments. The Bandar Abbas corridor is the most cost-effective route, leveraging the same Iran-Turkmenistan trade infrastructure that Iranian suppliers use.",
  },
  {
    q: "What is the minimum order quantity for export to Turkmenistan?",
    a: "MOQs are flexible based on the formulation, packaging format, and order configuration. We support pilot shipments for new Turkmen distributors establishing the product line. For the Turkmenistan market specifically, given the state procurement system, orders tend to be larger and more structured once the import channel is established. Specific MOQ for your order is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Is Halal certification necessary for the Turkmen market?",
    a: "Yes. Turkmenistan is approximately 89% Muslim, and Halal certification is strongly expected for pharmaceutical and nutraceutical products — particularly softgel capsules that contain gelatin. Iranian suppliers, who currently hold significant market share in Turkmenistan, provide Halal-certified products as standard. To compete effectively in this market, Halal certification is not optional. Our Jind facility holds Halal certification covering the entire manufacturing chain, and Halal certificates are included with every export shipment.",
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
      name: "Turkmenistan",
      item: "https://www.admetuslifesciences.com/export/turkmenistan/",
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

export default function TurkmenistanExportPage() {
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
          alt="Halal and WHO-GMP certified softgel capsules manufactured in India for export to Turkmenistan — Admetus Lifesciences"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Turkmenistan</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;TURKMENISTAN
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal and WHO-GMP certified softgel capsules from Haryana, India &mdash;
            affordable nutraceutical generics for Turkmenistan&apos;s import-dependent
            pharmaceutical market. Full export documentation, shipping via Bandar Abbas
            to&nbsp;Ashgabat.
          </p>
        </div>
      </section>

      {/* Turkmenistan Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Turkmenistan is a Central Asian republic of approximately 6 million people
                with a unique position in the regional pharmaceutical landscape: the country
                <strong> imports 100% of its pharmaceutical and nutraceutical products</strong>.
                There is no meaningful domestic pharmaceutical manufacturing capability,
                making Turkmenistan entirely dependent on international suppliers for its
                healthcare product needs. Iran currently holds significant market share due
                to geographic proximity (shared border), but Indian manufacturers are
                increasingly competitive.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Turkmenistan&apos;s closed economy and state-controlled import channels create
                a distinctive market dynamic: initial market entry requires navigating
                government procurement systems and establishing relationships with authorised
                Turkmen import agents, but once an import channel is established, it provides
                stable, predictable volume demand with minimal competitive disruption. For
                Indian manufacturers who invest in the initial market entry process,
                Turkmenistan offers a reliable long-term export destination.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana 126112,
                manufactures Halal-certified, WHO-GMP compliant softgel capsules for the
                Turkmen market &mdash; offering stronger quality documentation than most
                Iranian competitors (WHO-GMP, FSSAI, HACCP, Halal) at competitive pricing.
                Our facility operates ARBES SGX-806P and Elmach EPI 2000 encapsulation lines
                with comprehensive certifications.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Turkmenistan */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY EXPORT SOFTGELS TO&nbsp;TURKMENISTAN
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyTurkmenistan.map((item, i) => (
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
                  HALAL CERTIFIED FOR THE TURKMEN&nbsp;MARKET
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Turkmenistan is approximately 89% Muslim. Halal certification
                  is essential for pharmaceutical product acceptance and for
                  competing effectively against Iranian suppliers who provide
                  Halal-certified products as&nbsp;standard.
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
                  For the Turkmen market specifically, Halal certification serves a critical
                  competitive function: Iranian pharmaceutical suppliers &mdash; who currently
                  hold significant market share in Turkmenistan &mdash; provide Halal-certified
                  products as standard. To compete for Turkmen pharmaceutical procurement,
                  Indian manufacturers must match this Halal compliance while offering superior
                  quality documentation (WHO-GMP, HACCP, FSSAI). Admetus Lifesciences delivers
                  both &mdash; Halal parity with Iranian competitors plus stronger
                  international quality&nbsp;certifications.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Every export shipment to Turkmenistan includes a product-specific Halal
                  certificate alongside the Certificate of Analysis, Free Sale Certificate,
                  and commercial documentation. Our Halal certification is internationally
                  recognised, meaning Turkmen importers who also distribute across Central
                  Asian markets can use the same certification documentation across multiple
                  territories.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range for Turkmenistan */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Range</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;TURKMENISTAN
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
              softgel blends for Turkmen distributors and state procurement channels
              targeting specific therapeutic categories. Custom formulation requests
              are evaluated within 48 hours. Contact us at{" "}
              <a href="mailto:team@admetuslifesciences.com" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">
                team@admetuslifesciences.com
              </a>{" "}
              with your formulation requirements.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Regulatory — MOH */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Regulatory Landscape</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              TURKMEN IMPORT FRAMEWORK
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <SectionReveal delay={0.05}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Turkmenistan&apos;s pharmaceutical imports are regulated by the Ministry
                  of Health within a state-controlled economic framework. Unlike EAEU member
                  states (Turkmenistan is not an EAEU member), the regulatory requirements
                  are less structured but are mediated through government procurement
                  channels and authorised import agents. The focus is on manufacturer
                  quality credentials &mdash; WHO-GMP certification is the primary
                  quality standard recognised for pharmaceutical&nbsp;imports.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  The practical import process typically involves working through
                  established Turkmen pharmaceutical import agents who maintain
                  relationships with the Ministry of Health and state procurement
                  system. These agents handle in-country registration, customs clearance,
                  and distribution logistics. Indian manufacturers provide the
                  manufacturer-side documentation package, and the Turkmen agent
                  manages the domestic clearance&nbsp;process.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For Indian manufacturers with WHO-GMP certification, Turkmenistan
                  presents relatively low regulatory barriers once the import channel
                  is established. The key requirements are manufacturer-side certifications
                  (WHO-GMP, GMP, Halal) and standard export documentation. There is no
                  complex product-by-product registration system equivalent to EAEU or
                  GCC regulatory&nbsp;frameworks.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Admetus Lifesciences provides all manufacturer-side documentation
                  required for Turkmen import clearance: WHO-GMP certificate, GMP
                  certificate, Halal certificate, Free Sale Certificate from FSSAI,
                  Certificate of Analysis per batch, Certificate of Origin, and
                  commercial documentation. The buyer or their authorised Turkmen
                  import agent handles the in-country clearance and distribution
                  process through the state pharmaceutical system.
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
                  INDIA TO TURKMENISTAN SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Sea-plus-overland via Bandar Abbas (Iran) to Ashgabat,
                  or air freight via Dubai. Transit time: 14-20&nbsp;days
                  (sea) or 3-5&nbsp;days&nbsp;(air).
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
              EXPORT DOCUMENTATION FOR&nbsp;TURKMENISTAN
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
              TURKMENISTAN EXPORT Q&amp;A
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
              EXPORT SOFTGELS TO&nbsp;TURKMENISTAN
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Turkmen importers and pharmaceutical procurement channels
              seeking a WHO-GMP and Halal certified softgel capsule manufacturer
              in India &mdash; share your requirements and our export team will
              respond within 48&nbsp;hours.
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

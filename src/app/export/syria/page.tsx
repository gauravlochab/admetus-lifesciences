import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whySyria = [
  {
    title: "Post-conflict, import-dependent healthcare system",
    desc: "Syria's healthcare infrastructure has been devastated by over a decade of conflict. The country's domestic pharmaceutical manufacturing capacity has been severely reduced, and the healthcare system is now heavily dependent on imported pharmaceutical and nutraceutical products. International humanitarian organisations, local pharmacies, and private healthcare providers are all sourcing imported products to fill critical supply gaps — creating sustained demand for affordable, quality-certified softgel capsules from established Indian manufacturers.",
  },
  {
    title: "Massive humanitarian and clinical demand",
    desc: "Syria's population has experienced years of malnutrition, displacement, and disrupted healthcare access. The resulting burden of nutritional deficiencies — Vitamin D, iron, essential fatty acids, micronutrients — is enormous. Humanitarian agencies, NGOs, and UNICEF-affiliated programmes operating in Syria are active purchasers of nutraceutical products for population-level supplementation. Indian manufacturers with WHO-GMP certification and Halal compliance are preferred suppliers for these procurement channels.",
  },
  {
    title: "Muslim-majority population (87%) requiring Halal certification",
    desc: "Syria is approximately 87% Sunni Muslim. Halal certification is a fundamental requirement for pharmaceutical and nutraceutical market acceptance — products without visible Halal documentation face rejection from distributors, pharmacists, and consumers. Admetus Lifesciences holds Halal certification across the entire manufacturing chain, ensuring immediate market compatibility in Syria's Muslim-majority consumer base.",
  },
  {
    title: "Very low regulatory barriers for imports",
    desc: "Syria's regulatory framework for pharmaceutical imports operates with minimal complexity in the current post-conflict environment. The Ministry of Health oversees pharmaceutical imports, but enforcement and registration requirements are significantly reduced compared to pre-conflict standards. WHO-GMP certification from an Indian manufacturer is widely accepted, and there is no lengthy product registration queue — enabling rapid market entry for new product lines needed to address critical healthcare gaps.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is endemic across Syria — driven by displacement-related indoor confinement, clothing norms, dietary disruption, and limited access to fortified foods. Cholecalciferol 60,000 IU softgels serve as weekly therapeutic supplementation prescribed across Syrian clinics, field hospitals, and pharmacy channels. This is one of the highest-demand nutraceutical products in the Syrian market, with both humanitarian and commercial procurement channels.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular disease burden in Syria has increased during the conflict years — stress, dietary degradation, and disrupted chronic disease management have worsened cardiovascular outcomes. Omega-3 softgels with Vitamin E support cardiac health and anti-inflammatory response, addressing both clinical needs in operational healthcare facilities and pharmacy retail demand in Syrian cities.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Broad-spectrum nutritional supplementation addressing the severe micronutrient deficiencies that have developed across Syria's conflict-affected population. Multivitamin softgels are procured by both commercial pharmacy channels and humanitarian supply chains — a staple product for addressing population-level nutritional gaps in a country where dietary quality has been severely compromised.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health supplementation addresses sustained clinical demand in Syria — conflict-related injuries, fractures, prolonged immobilisation, and nutritional deficiencies have created an elevated need for calcium and vitamin D metabolite supplementation. Calcitriol + K2-7 formulations support bone mineralisation and fracture recovery across Syrian orthopaedic and rehabilitative care programmes.",
  },
  {
    name: "Nigella Sativa (Kalonji / Habbatus Sauda)",
    desc: "Known as Habbatus Sauda in Arabic, Nigella Sativa has profound cultural and religious significance across Syria. The Prophet Muhammad (PBUH) referenced it as a remedy for all ailments except death. In Syrian traditional medicine, black seed has been used for centuries for immune support, digestive health, and respiratory function. Our softgel encapsulation delivers standardised Nigella Sativa oil with consistent potency — a modern pharmaceutical format for a product with deep cultural roots in Syrian society.",
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
    title: "Sea freight from JNPT to Latakia or Tartus",
    desc: "Primary route: sea freight from JNPT (Nhava Sheva, Mumbai) to Latakia or Tartus — Syria's two operational Mediterranean ports. Direct and transshipment routes available via Port Said (Egypt) or Mersin (Turkey).",
  },
  {
    title: "Alternative: via Beirut with overland transit",
    desc: "Many Syrian importers operate trading offices in Beirut, Lebanon. Shipments can be routed to Beirut port (10-12 days from JNPT) and then transported overland into Syria via the Masnaa border crossing — a common logistics path that leverages Lebanon's more established port infrastructure.",
  },
  {
    title: "Transit time: 12-16 days",
    desc: "Direct JNPT to Latakia/Tartus transit is approximately 12-14 days. The Beirut transshipment route with overland forwarding to Syria typically takes 14-16 days total. Air freight via Dubai is available for urgent humanitarian or sample shipments with 3-5 day delivery.",
  },
];

const exportDocs = [
  {
    title: "Certificate of Analysis (COA)",
    desc: "Batch-specific laboratory analysis confirming identity, potency, purity, dissolution, and microbial limits for every shipment.",
  },
  {
    title: "Halal Certificate",
    desc: "Product-level Halal certification confirming compliance with Islamic dietary and manufacturing standards — essential for Syria's 87% Muslim population and market acceptance across all distribution channels.",
  },
  {
    title: "Free Sale Certificate (FSSAI)",
    desc: "Issued by FSSAI (Food Safety and Standards Authority of India), confirming that the products are legally manufactured and freely sold in India.",
  },
  {
    title: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with HS codes, unit pricing, total value, and comprehensive packing list for customs clearance at Latakia, Tartus, or the buyer's designated entry point.",
  },
  {
    title: "GMP / WHO-GMP Certificate",
    desc: "Manufacturing facility certification confirming compliance with Good Manufacturing Practice and World Health Organization GMP standards.",
  },
  {
    title: "Certificate of Origin",
    desc: "Issued by the Indian Chamber of Commerce, confirming the country of manufacture for Syrian customs and import clearance.",
  },
];

const faqs = [
  {
    q: "Can Indian pharmaceutical products be exported to Syria given the conflict situation?",
    a: "Yes. India does not impose trade sanctions on Syria for pharmaceutical and humanitarian products. Nutraceutical softgel capsules are classified as essential health products and are not subject to export restrictions. Indian manufacturers have been supplying pharmaceutical products to Syria and neighbouring markets throughout the conflict period. Shipping routes via Latakia/Tartus ports and overland via Beirut remain operational. Specific trade compliance requirements should be verified with your export compliance advisor.",
  },
  {
    q: "What is the regulatory process for importing nutraceutical softgels into Syria?",
    a: "Syria's Ministry of Health oversees pharmaceutical imports, but the regulatory framework operates with significantly reduced complexity in the current environment. Key requirements include: WHO-GMP certificate from the manufacturer, Halal certificate, Certificate of Analysis per batch, and standard commercial documentation. There is no lengthy product registration process equivalent to pre-conflict standards — the focus is on getting quality-certified essential health products into the market. Your Syrian import agent or distributor will advise on current clearance procedures.",
  },
  {
    q: "Do you supply to humanitarian organisations operating in Syria?",
    a: "Yes. Admetus Lifesciences can supply nutraceutical softgel capsules to humanitarian procurement channels, NGOs, and international health organisations operating in Syria. Our WHO-GMP certification, Halal compliance, and comprehensive batch documentation (COA, stability data) meet the procurement standards of international humanitarian supply chains. Contact team@admetuslifesciences.com with your procurement requirements and we will provide pricing and documentation within 48 hours.",
  },
  {
    q: "How are shipments routed from India to Syria?",
    a: "Two primary routes: (1) Direct sea freight from JNPT (Mumbai) to Latakia or Tartus port — approximately 12-14 days transit. (2) Via Beirut (Lebanon) with overland transport to Syria through the Masnaa border crossing — approximately 14-16 days total. Many Syrian importers prefer the Beirut route as they maintain trading offices in Lebanon. Air freight via Dubai is available for urgent or sample shipments (3-5 days).",
  },
  {
    q: "What payment terms do you offer for Syrian buyers?",
    a: "Given the complexities of the Syrian banking environment, payment terms are structured on a case-by-case basis. Standard options include T/T (telegraphic transfer) through correspondent banks and advance payment arrangements. For humanitarian procurement, we work with established payment channels used by international organisations. For first-time commercial buyers, we recommend starting with a pilot order to validate the logistics and payment chain. Contact team@admetuslifesciences.com for specific terms.",
  },
  {
    q: "Is Halal certification available for all softgel products exported to Syria?",
    a: "Yes. Our Jind facility holds Halal certification covering the entire manufacturing process — raw materials, gelatin sourcing, production line, and finished products. Halal certificates are included with every export shipment to Syria. The gelatin used in our softgel shells is sourced from Halal-certified suppliers with full traceability documentation. Given Syria's 87% Muslim population, Halal certification is included as standard with every consignment.",
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
      name: "Syria",
      item: "https://www.admetuslifesciences.com/export/syria/",
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

export default function SyriaExportPage() {
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
          alt="Halal certified softgel capsules manufactured in India for export to Syria — Admetus Lifesciences"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Syria</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;SYRIA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal certified softgel capsules from Haryana, India &mdash;
            affordable nutraceutical generics for Syria&apos;s import-dependent
            healthcare market. Full export documentation, shipping to
            Latakia/Tartus or via&nbsp;Beirut.
          </p>
        </div>
      </section>

      {/* Syria Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Syria represents one of the most acute pharmaceutical import markets in the
                Middle East. After over a decade of conflict, the country&apos;s domestic
                manufacturing capacity has been severely reduced, and the healthcare system
                is now <strong>almost entirely dependent on imported pharmaceutical and
                nutraceutical products</strong> to serve the remaining population of
                approximately 21 million people across government-controlled, opposition-held,
                and humanitarian-administered territories.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The demand for affordable, quality-certified nutraceuticals in Syria is driven
                by two parallel channels: commercial pharmacy networks that continue to operate
                in Damascus, Aleppo, Latakia, and other cities, and humanitarian procurement
                channels through which international organisations supply essential health
                products to displaced and vulnerable populations. Both channels require WHO-GMP
                certified, Halal-compliant products with complete batch documentation &mdash;
                and both prioritise affordability given Syria&apos;s devastated economy.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana 126112,
                manufactures Halal-certified softgel capsules suitable for the Syrian market
                &mdash; combining Indian manufacturing economics with the certifications and
                documentation that both commercial importers and humanitarian procurement
                channels require. Our facility operates ARBES SGX-806P and Elmach EPI 2000
                encapsulation lines with FSSAI, GMP, HACCP, Halal, and WHO-GMP certifications.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Syria */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY EXPORT SOFTGELS TO&nbsp;SYRIA
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whySyria.map((item, i) => (
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
                  HALAL CERTIFIED FOR THE SYRIAN&nbsp;MARKET
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Syria is approximately 87% Sunni Muslim. Halal certification is
                  a non-negotiable requirement for pharmaceutical and nutraceutical
                  market acceptance &mdash; both in commercial pharmacy channels and
                  humanitarian procurement&nbsp;programmes.
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
                  For the Syrian market, Halal certification serves dual purposes:
                  (1) it satisfies the religious requirements of Syria&apos;s Muslim-majority
                  population, ensuring product acceptance at the pharmacy counter and
                  in clinical settings, and (2) it meets the procurement standards of
                  international humanitarian organisations that require Halal-compliant
                  products for distribution in Muslim-majority populations &mdash;
                  a requirement that non-certified manufacturers cannot&nbsp;fulfil.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Every export shipment to Syria includes a product-specific Halal
                  certificate alongside the Certificate of Analysis, Free Sale Certificate,
                  and commercial documentation. Our Halal certification is recognised
                  across Middle Eastern markets, meaning Syrian distributors who also
                  trade in Lebanon, Iraq, or Jordan can use the same certification
                  documentation across multiple territories.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range for Syria */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Range</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;SYRIA
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
              softgel blends for Syrian distributors and humanitarian procurement
              channels targeting specific therapeutic categories. Custom formulation
              requests are evaluated within 48 hours. Contact us at{" "}
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
                  Syria&apos;s pharmaceutical import regulatory framework operates with
                  significantly reduced complexity in the current post-conflict environment.
                  The Ministry of Health nominally oversees pharmaceutical imports, but the
                  practical import process is focused on ensuring that quality-certified
                  essential health products reach the market &mdash; not on imposing
                  multi-month registration queues that would delay critically needed
                  pharmaceutical&nbsp;supplies.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For Indian manufacturers with WHO-GMP certification, Syria represents
                  one of the lowest-barrier import markets in the Middle East. The key
                  requirements are manufacturer-side certifications (WHO-GMP, GMP, Halal)
                  and standard export documentation &mdash; not a product-by-product
                  registration process that would delay market&nbsp;entry.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Humanitarian procurement channels operating in Syria have their own
                  quality standards &mdash; typically requiring WHO-GMP certification,
                  batch-specific COA, stability data, and Halal certification for
                  products distributed to Muslim populations. These requirements
                  align directly with Admetus Lifesciences&apos; standard export
                  documentation package, making us immediately compatible with both
                  commercial and humanitarian procurement&nbsp;pathways.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Admetus Lifesciences provides all manufacturer-side documentation
                  required for Syrian import clearance: WHO-GMP certificate, GMP
                  certificate, Halal certificate, Free Sale Certificate from FSSAI,
                  Certificate of Analysis per batch, Certificate of Origin, and
                  commercial documentation. The buyer, their Syrian import agent, or
                  the humanitarian procurement organisation handles the in-country
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
                  INDIA TO SYRIA SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Two primary routes &mdash; direct sea freight to Latakia/Tartus
                  or via Beirut with overland forwarding. Transit time:
                  12-16&nbsp;days.
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
              EXPORT DOCUMENTATION FOR&nbsp;SYRIA
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
              SYRIA EXPORT Q&amp;A
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
              EXPORT SOFTGELS TO&nbsp;SYRIA
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Syrian importers, distributors, and humanitarian procurement
              channels seeking Halal certified softgel capsules from India &mdash;
              share your requirements and our export team will respond
              within 48&nbsp;hours.
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

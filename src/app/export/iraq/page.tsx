import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyIraq = [
  {
    title: "Post-conflict healthcare reconstruction",
    desc: "Iraq's healthcare infrastructure is undergoing a multi-decade rebuild after prolonged conflict. The Ministry of Health is actively importing pharmaceutical and nutraceutical products to fill supply gaps across primary care clinics, hospitals, and community pharmacies — creating sustained demand for affordable, quality-certified softgel capsules from established Indian manufacturers.",
  },
  {
    title: "India is already Iraq's dominant pharma supplier",
    desc: "India accounts for a significant share of Iraq's total pharmaceutical imports. Iraqi importers and distributors have established procurement channels with Indian manufacturers — making the sourcing relationship familiar, trusted, and operationally streamlined. Admetus Lifesciences fits directly into this existing supply chain.",
  },
  {
    title: "Low regulatory barriers for Indian pharma",
    desc: "Unlike GCC markets that require detailed product registration through centralized authorities (SFDA, MoHAP), Iraq's pharmaceutical import framework has comparatively minimal regulatory complexity. WHO-GMP certification from an Indian manufacturer is widely accepted, and there is no multi-month registration queue — allowing faster market entry for new product lines.",
  },
  {
    title: "Massive demand for affordable generics",
    desc: "Iraq's population of 44+ million relies heavily on imported generics and nutraceuticals. The pricing sensitivity of the Iraqi market aligns directly with Indian manufacturing economics — WHO-GMP certified softgels from Haryana are 40-60% less expensive than equivalent European-manufactured products, without compromising on quality documentation.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is endemic across the Middle East, including Iraq, despite abundant sunlight — driven by indoor lifestyles, clothing norms, and dietary gaps. Cholecalciferol 60,000 IU softgels serve as weekly therapeutic supplementation prescribed across Iraqi clinics and pharmacies for deficiency correction.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular disease is the leading cause of death in Iraq. Omega-3 softgels with Vitamin E support cardiac health, triglyceride management, and anti-inflammatory response — a high-demand category in Iraqi pharmacy retail and hospital formularies.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Broad-spectrum nutritional supplementation addressing the micronutrient deficiencies common in post-conflict populations. Our multivitamin softgels are formulated for general adult health and are a staple in Iraqi pharmacy distribution networks.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health is a critical therapeutic category in Iraq — conflict-related injuries, fractures, and long-term rehabilitation create sustained demand for calcium and vitamin D metabolite supplementation. Calcitriol + K2-7 formulations support bone mineralization and fracture recovery.",
  },
  {
    name: "Nigella Sativa (Kalonji / Habbatus Sauda)",
    desc: "Known as Habbatus Sauda in Arabic tradition, Nigella Sativa (black seed / Kalonji) has deep cultural significance across the Middle East. The Prophet Muhammad (PBUH) referenced it as a remedy for all ailments except death — making it one of the most culturally resonant nutraceutical products in Iraq. Our softgel encapsulation delivers standardized Nigella Sativa oil with consistent potency.",
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
    title: "Dispatch from JNPT or Mundra port",
    desc: "Sea freight from JNPT (Nhava Sheva, Mumbai) or Mundra (Gujarat) — India's two largest west-coast container ports. Both offer regular shipping services to the Persian Gulf and Iraqi ports.",
  },
  {
    title: "Arrival at Umm Qasr port (Basra)",
    desc: "Direct sea route to Umm Qasr, Iraq's primary commercial port near Basra. Alternatively, shipments can route via Jebel Ali (Dubai, UAE) and then overland to Iraq — a common logistics path used by Iraqi importers who maintain Dubai-based trading operations.",
  },
  {
    title: "Transit time: 7-14 days",
    desc: "Direct JNPT/Mundra to Umm Qasr transit is approximately 7-10 days. The Dubai transshipment route (Jebel Ali + overland) typically takes 10-14 days total. Air freight via Delhi is available for urgent or sample shipments with 2-3 day delivery.",
  },
];

const exportDocs = [
  {
    title: "Certificate of Analysis (COA)",
    desc: "Batch-specific laboratory analysis confirming identity, potency, purity, dissolution, and microbial limits for every shipment.",
  },
  {
    title: "Halal Certificate",
    desc: "Product-level Halal certification confirming compliance with Islamic dietary and manufacturing standards — essential for Iraqi market acceptance.",
  },
  {
    title: "Free Sale Certificate (FSSAI)",
    desc: "Issued by FSSAI (Food Safety and Standards Authority of India), confirming that the products are legally manufactured and freely sold in India.",
  },
  {
    title: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with HS codes, unit pricing, total value, and comprehensive packing list for customs clearance at Umm Qasr or the buyer's designated port.",
  },
  {
    title: "GMP / WHO-GMP Certificate",
    desc: "Manufacturing facility certification confirming compliance with Good Manufacturing Practice and World Health Organization GMP standards.",
  },
  {
    title: "Certificate of Origin",
    desc: "Issued by the Indian Chamber of Commerce, confirming the country of manufacture for Iraqi customs and import duty assessment.",
  },
];

const faqs = [
  {
    q: "Is Halal certification available for all softgel products exported to Iraq?",
    a: "Yes. Our Jind facility holds Halal certification covering the entire manufacturing process — raw materials, gelatin sourcing, production line, and finished products. Halal certificates are included with every export shipment to Iraq and other Muslim-majority markets. The gelatin used in our softgel shells is sourced from Halal-certified suppliers with full traceability documentation.",
  },
  {
    q: "What is the regulatory process for importing nutraceutical softgels into Iraq?",
    a: "Iraq's import regulatory framework for nutraceuticals is comparatively streamlined versus GCC markets. The key requirements are: WHO-GMP certificate from the manufacturer, Free Sale Certificate, Halal certificate, Certificate of Analysis per batch, and standard commercial import documentation. There is no centralized product registration system equivalent to Saudi SFDA or UAE MoHAP — importers typically work with the Iraqi Ministry of Health or local health directorate for clearance. Specific requirements may vary by governorate.",
  },
  {
    q: "What is the minimum order quantity for export to Iraq?",
    a: "MOQs are flexible based on the formulation, packaging format, and order configuration. We support pilot shipments for new Iraqi distributors establishing the product line, as well as full-container loads for established importers. Specific MOQ for your order is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How are shipments routed from India to Iraq?",
    a: "Two primary routes: (1) Direct sea freight from JNPT (Mumbai) or Mundra (Gujarat) to Umm Qasr port near Basra — approximately 7-10 days transit. (2) Via Dubai (Jebel Ali port) with overland transport to Iraq — approximately 10-14 days total. Many Iraqi importers prefer the Dubai route as they maintain trading offices in Jebel Ali Free Zone. Air freight via Delhi is available for samples and urgent shipments (2-3 days).",
  },
  {
    q: "Can you supply softgels under our brand name for the Iraqi market?",
    a: "Yes. We operate as a private-label and contract manufacturer — your brand name, packaging design, and labeling specifications are applied to the finished product. We support Arabic labeling for the Iraqi market. Brand artwork approval and proof signoff happens before production begins. See our private label softgel manufacturer page for the full process.",
  },
  {
    q: "What payment terms do you offer for Iraqi buyers?",
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
      name: "Iraq",
      item: "https://www.admetuslifesciences.com/export/iraq/",
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

export default function IraqExportPage() {
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
          alt="Halal certified softgel capsules manufactured in India for export to Iraq — Admetus Lifesciences, WHO-GMP certified"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Iraq</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;IRAQ
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal and WHO-GMP certified softgel capsules from Haryana, India &mdash;
            affordable nutraceutical generics for Iraq&apos;s healthcare market.
            Full export documentation, direct shipping to Umm Qasr&nbsp;(Basra).
          </p>
        </div>
      </section>

      {/* Iraq Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Iraq represents one of the most significant pharmaceutical import markets
                in the Middle East for Indian manufacturers. With a population exceeding
                44 million and a healthcare system in active reconstruction, Iraq imports
                the vast majority of its pharmaceutical and nutraceutical products &mdash;
                and <strong>India is the dominant source country</strong> for these imports.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The Iraqi pharmaceutical market is estimated at over $3 billion annually,
                with domestic manufacturing capacity covering less than 15% of total demand.
                The remaining 85%+ is imported, with Indian pharmaceutical manufacturers
                holding the largest market share. This import dependency, combined with
                Iraq&apos;s relatively straightforward regulatory framework for Indian
                pharma products, makes it an accessible and high-volume export destination
                for nutraceutical softgel capsules.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana 126112,
                manufactures Halal-certified, WHO-GMP compliant softgel capsules specifically
                suited for the Iraqi market &mdash; combining the pricing economics of Indian
                manufacturing with the quality certifications and documentation that Iraqi
                importers and health authorities require.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Iraq */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY EXPORT SOFTGELS TO&nbsp;IRAQ
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyIraq.map((item, i) => (
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
                  HALAL CERTIFIED FOR THE IRAQI&nbsp;MARKET
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Iraq is a Muslim-majority country where Halal certification is not
                  merely a regulatory checkbox &mdash; it is a fundamental requirement
                  for market acceptance. Products without visible Halal certification
                  face resistance from pharmacists, distributors, and end&nbsp;consumers.
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
                  For the Iraqi market specifically, Halal certification serves three
                  critical functions: (1) it satisfies import clearance requirements at
                  Iraqi customs and the Ministry of Health, (2) it enables placement in
                  pharmacy retail channels where Halal labeling is expected by consumers,
                  and (3) it differentiates our products from non-certified competitors
                  who may offer lower pricing but cannot provide the documentation Iraqi
                  distributors need.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Every export shipment to Iraq includes a product-specific Halal
                  certificate alongside the Certificate of Analysis, Free Sale Certificate,
                  and commercial documentation. Our Halal certification is recognized
                  across GCC and Middle Eastern markets, meaning Iraqi distributors who
                  also trade in Kuwait, Saudi Arabia, or the UAE can use the same
                  certification documentation.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range for Iraq */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Range</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;IRAQ
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
              softgel blends for Iraqi distributors targeting specific therapeutic
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
                  Unlike GCC countries that require centralized product registration
                  (Saudi SFDA, UAE MoHAP), Iraq&apos;s regulatory framework for
                  pharmaceutical and nutraceutical imports operates with comparatively
                  lower complexity. This is a direct consequence of the country&apos;s
                  healthcare reconstruction priorities &mdash; the focus is on getting
                  quality products into the market quickly rather than imposing
                  multi-month registration&nbsp;queues.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For Indian manufacturers with WHO-GMP certification, Iraq represents
                  one of the fastest paths to market in the Middle East. The key
                  requirements are manufacturer-side certifications (WHO-GMP, GMP,
                  Halal) and standard export documentation &mdash; not a product-by-product
                  registration process that can take 6-12 months in other&nbsp;markets.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  The Iraqi Ministry of Health oversees pharmaceutical imports, but the
                  practical import process is handled through the Iraqi customs authority
                  and local health directorates at the governorate level. Indian pharma
                  products with WHO-GMP certification are widely accepted &mdash; India
                  is already the largest pharmaceutical supplier to Iraq, and the
                  procurement channel is well-established.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Admetus Lifesciences provides all manufacturer-side documentation
                  required for Iraqi import clearance: WHO-GMP certificate, GMP
                  certificate, Halal certificate, Free Sale Certificate from FSSAI,
                  Certificate of Analysis per batch, Certificate of Origin, and
                  commercial documentation. The buyer or their Iraqi import agent
                  handles the in-country clearance process.
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
                  INDIA TO IRAQ SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Two established shipping routes connect our Haryana facility to
                  Iraqi importers &mdash; direct to Umm Qasr or via Dubai with
                  overland forwarding. Transit time: 7-14&nbsp;days.
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
              EXPORT DOCUMENTATION FOR&nbsp;IRAQ
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
              IRAQ EXPORT Q&amp;A
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
              <Link href="/export/jordan/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Jordan
              </Link>
              <Link href="/export/lebanon/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Lebanon
              </Link>
              <Link href="/export/syria/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Syria
              </Link>
              <Link href="/export/yemen/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Yemen
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
              EXPORT SOFTGELS TO&nbsp;IRAQ
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Iraqi importers and distributors seeking a WHO-GMP and Halal
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

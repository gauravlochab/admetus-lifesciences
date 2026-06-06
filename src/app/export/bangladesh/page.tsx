import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyBangladesh = [
  {
    title: "170 million population — massive pharmaceutical market",
    desc: "Bangladesh is the eighth most populous country in the world with approximately 170 million people — and a rapidly growing healthcare sector. The country's pharmaceutical industry is one of the most developed in South Asia, covering nearly 98% of domestic demand for finished dosage forms. However, softgel capsule manufacturing remains a specialized capability that Bangladesh largely imports — creating a sustained, high-volume opportunity for Indian softgel manufacturers like Admetus Lifesciences.",
  },
  {
    title: "Strong India-Bangladesh trade corridor",
    desc: "India and Bangladesh share the fifth-longest land border in the world. The Petrapole-Benapole border crossing is one of the busiest trade points in South Asia, with established pharmaceutical trade flows in both directions. Kolkata port is just hours from the Bangladesh border, and Chittagong port is accessible via short sea routes from Kolkata/Haldia. This geographic proximity translates into the fastest transit times of any Admetus export market — 1-2 days by road or 3-5 days by sea.",
  },
  {
    title: "SAARC membership — preferential trade framework",
    desc: "Both India and Bangladesh are SAARC (South Asian Association for Regional Cooperation) member states. The SAFTA (South Asian Free Trade Area) agreement provides preferential tariff treatment for pharmaceutical products traded between member countries. Additionally, the Named Patient Program access under SAARC frameworks can facilitate import of specific pharmaceutical products for Bangladeshi healthcare facilities — creating regulatory pathways beyond standard commercial import channels.",
  },
  {
    title: "Bangladesh imports softgel capsules and APIs from India",
    desc: "While Bangladesh has a robust domestic pharmaceutical manufacturing industry, softgel capsule production requires specialized encapsulation equipment and gelatin processing capabilities that most Bangladeshi manufacturers do not possess. India is a primary source for softgel capsule imports, APIs (Active Pharmaceutical Ingredients), and excipients. Admetus Lifesciences — with ARBES SGX-806P and Elmach EPI 2000 encapsulation lines — provides the specialized manufacturing capability that Bangladeshi importers and contract buyers require.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is widespread in Bangladesh despite tropical geography — driven by indoor lifestyles, clothing practices, air pollution reducing UV exposure in Dhaka and urban centres, and dietary gaps. Cholecalciferol 60,000 IU softgels serve as weekly therapeutic supplementation prescribed across Bangladeshi hospitals, clinics, and pharmacies — a high-volume, recurring-demand product category.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular disease is the leading cause of death in Bangladesh. Despite being a riverine country with fish consumption traditions, urbanization has shifted dietary patterns away from omega-3-rich foods. Omega-3 softgels with Vitamin E address cardiac health, triglyceride management, and anti-inflammatory needs — a growing prescriber-driven category in Bangladeshi healthcare.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health supplementation is a significant therapeutic category in Bangladesh — high rates of osteoporosis among women, nutritional deficiencies, and limited dairy consumption create sustained clinical demand for calcium and vitamin D metabolite supplementation. Calcitriol + K2-7 formulations are increasingly prescribed by Bangladeshi orthopaedists and endocrinologists.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Broad-spectrum nutritional supplementation addressing micronutrient deficiencies prevalent in the Bangladeshi population. The growing middle class is driving demand for premium-format supplements — softgel capsules are perceived as a higher-quality delivery format compared to tablets, commanding better margins in Bangladeshi pharmacy retail.",
  },
  {
    name: "Nigella Sativa (Kalonji / Kalojira)",
    desc: "Known as Kalojira in Bengali, Nigella Sativa has deep cultural significance in Bangladesh — used extensively in traditional cooking and folk medicine. The Prophet Muhammad (PBUH) referenced it as a remedy for all ailments except death, giving it profound religious significance in Bangladesh's 90% Muslim population. Our softgel encapsulation delivers standardized Nigella Sativa oil with consistent potency — a premium pharmaceutical format for a product with established mass-market demand.",
  },
];

const shippingSteps = [
  {
    title: "Production & QC at Jind facility",
    desc: "Softgel capsules manufactured on the ARBES SGX-806P line, dried under controlled conditions, and subjected to multi-point quality testing — visual inspection, weight uniformity, dissolution, microbial limits. Full Certificate of Analysis (COA) generated per batch.",
  },
  {
    title: "Export packaging & documentation",
    desc: "Products packed in export-grade secondary packaging with desiccants and tamper-evident sealing. Export documentation prepared: COA, Halal certificate, Free Sale Certificate (FSSAI), commercial invoice, packing list, and bill of lading or truck receipt.",
  },
  {
    title: "Road freight via Petrapole-Benapole",
    desc: "Fastest route: road freight from our Jind, Haryana facility through Delhi-Kolkata highway to the Petrapole-Benapole border crossing — the busiest India-Bangladesh land trade point. From Benapole, Bangladeshi transport handles onward distribution to Dhaka, Chittagong, or the buyer's warehouse. Transit time: 1-2 days from dispatch.",
  },
  {
    title: "Sea freight via Kolkata/Haldia port",
    desc: "Alternative route: sea freight from Kolkata or Haldia port to Chittagong or Mongla port in Bangladesh. Transit time: 3-5 days by sea. This route is preferred for full-container loads and buyers located in Chittagong, Sylhet, or the port-proximate industrial zones of Bangladesh.",
  },
  {
    title: "Transit time: 1-5 days",
    desc: "Bangladesh is the closest major export market to our Haryana facility. Road freight via Petrapole-Benapole takes 1-2 days. Sea freight via Kolkata/Haldia to Chittagong takes 3-5 days. For sample shipments, courier services from Delhi to Dhaka deliver within 2-3 days. No other Admetus export market offers transit times this short.",
  },
];

const exportDocs = [
  {
    title: "Certificate of Analysis (COA)",
    desc: "Batch-specific laboratory analysis confirming identity, potency, purity, dissolution, and microbial limits for every shipment — required by DGDA for import clearance of pharmaceutical and nutraceutical products.",
  },
  {
    title: "Halal Certificate",
    desc: "Product-level Halal certification confirming compliance with Islamic dietary and manufacturing standards — important for market acceptance in Bangladesh's 90% Muslim consumer population.",
  },
  {
    title: "Free Sale Certificate (FSSAI)",
    desc: "Issued by FSSAI (Food Safety and Standards Authority of India), confirming that the products are legally manufactured and freely sold in India — a standard requirement for DGDA import applications.",
  },
  {
    title: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with HS codes, unit pricing, total value, and comprehensive packing list for customs clearance at Benapole, Chittagong, or the buyer's designated entry point.",
  },
  {
    title: "GMP / WHO-GMP Certificate",
    desc: "Manufacturing facility certification confirming compliance with Good Manufacturing Practice and World Health Organization GMP standards — the primary quality credential recognized by Bangladesh's DGDA.",
  },
  {
    title: "Certificate of Origin",
    desc: "Issued by the Indian Chamber of Commerce, confirming the country of manufacture for Bangladeshi customs and preferential tariff assessment under SAFTA (South Asian Free Trade Area) provisions.",
  },
];

const faqs = [
  {
    q: "What is the regulatory process for importing softgel capsules into Bangladesh?",
    a: "Bangladesh's pharmaceutical imports are regulated by the Directorate General of Drug Administration (DGDA). For nutraceutical and pharmaceutical softgel capsules, the import process requires: WHO-GMP certificate from the manufacturer, Certificate of Analysis per batch, Free Sale Certificate, product registration with DGDA (handled by the Bangladeshi importer), and standard commercial documentation. Bangladesh's regulatory framework is well-established — the country has a sophisticated pharmaceutical industry, so DGDA processes are structured and predictable. Your Bangladeshi import partner will handle the in-country registration process.",
  },
  {
    q: "How quickly can shipments reach Bangladesh from your Haryana facility?",
    a: "Bangladesh is the fastest-transit export market from our Jind, Haryana facility. Road freight via the Petrapole-Benapole border crossing takes 1-2 days. Sea freight from Kolkata/Haldia port to Chittagong or Mongla port takes 3-5 days. Courier delivery for samples from Delhi to Dhaka takes 2-3 days. No other international market we serve offers transit times this short — making Bangladesh ideal for just-in-time inventory models and rapid restocking.",
  },
  {
    q: "Does Bangladesh have preferential trade terms with India for pharmaceutical products?",
    a: "Yes. Both India and Bangladesh are SAARC member states, and the SAFTA (South Asian Free Trade Area) agreement provides preferential tariff treatment for qualifying pharmaceutical and nutraceutical products. Certificate of Origin documentation is required to claim SAFTA preferential rates at Bangladeshi customs. Admetus Lifesciences provides Certificate of Origin with every export shipment to Bangladesh. Additionally, SAARC frameworks include Named Patient Program access that can facilitate import of specific pharmaceutical products.",
  },
  {
    q: "Can you supply softgels under our brand name for the Bangladeshi market?",
    a: "Yes. We operate as a private-label and contract manufacturer — your brand name, packaging design, and labeling specifications are applied to the finished product. We support Bengali and English language labeling for the Bangladesh market. Brand artwork approval and proof signoff happens before production begins. Given the short transit times to Bangladesh, turnaround from order confirmation to delivery can be as fast as 2-3 weeks for established formulations.",
  },
  {
    q: "What is the minimum order quantity for export to Bangladesh?",
    a: "MOQs are flexible based on the formulation, packaging format, and order configuration. We support pilot shipments for new Bangladeshi distributors as well as full-container loads for established importers. Given the proximity of Bangladesh and low shipping costs (both road and sea routes are cost-effective), smaller order quantities are more economically viable for Bangladesh than for distant markets. Specific MOQ for your order is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Why would Bangladeshi companies import softgels from India when Bangladesh has its own pharma industry?",
    a: "Bangladesh has one of the most developed pharmaceutical industries in South Asia — covering nearly 98% of domestic demand for standard dosage forms (tablets, capsules, syrups). However, softgel capsule manufacturing is a specialized capability requiring dedicated encapsulation equipment (rotary die, gelatin melting systems, drying tunnels) that most Bangladeshi manufacturers do not possess. India — with its established softgel manufacturing base — is the natural source for this specialized product category. Admetus Lifesciences offers ARBES SGX-806P and Elmach EPI 2000 encapsulation technology, WHO-GMP certification, and the proximity advantage of being just 1-2 days from Bangladesh by road.",
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
      name: "Bangladesh",
      item: "https://www.admetuslifesciences.com/export/bangladesh/",
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

export default function BangladeshExportPage() {
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
          alt="WHO-GMP certified softgel capsules manufactured in India for export to Bangladesh — Admetus Lifesciences"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Bangladesh</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />EXPORTER INDIA<br />FOR&nbsp;BANGLADESH
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP and Halal certified softgel capsules from Haryana, India &mdash;
            specialized nutraceutical manufacturing for Bangladesh&apos;s 170M market.
            SAARC trade corridor, 1-2 day road transit via&nbsp;Petrapole-Benapole.
          </p>
        </div>
      </section>

      {/* Bangladesh Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Bangladesh is one of the most significant pharmaceutical markets in South
                Asia &mdash; a country of approximately 170 million people with a
                well-developed domestic pharmaceutical industry that covers nearly 98% of
                its demand for standard dosage forms. However,
                <strong> softgel capsule manufacturing remains a specialized import
                category</strong> that Bangladesh sources primarily from India. The
                encapsulation technology, gelatin processing capabilities, and quality
                certifications required for softgel production are not widely available
                among Bangladeshi manufacturers &mdash; creating a sustained and growing
                import opportunity.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The India-Bangladesh trade corridor is one of the strongest bilateral
                pharmaceutical trade relationships in the SAARC region. India supplies a
                significant volume of APIs (Active Pharmaceutical Ingredients), excipients,
                and finished pharmaceutical products to Bangladesh through both land
                (Petrapole-Benapole) and sea (Kolkata/Haldia to Chittagong) routes. This
                established logistics infrastructure means that transit from our Haryana
                facility to Bangladeshi buyers takes as little as 1-2 days by road &mdash;
                the fastest transit time of any Admetus Lifesciences export market.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana 126112,
                manufactures WHO-GMP compliant, Halal-certified softgel capsules for the
                Bangladeshi market. Our facility operates ARBES SGX-806P and Elmach EPI 2000
                encapsulation lines with FSSAI, GMP, HACCP, Halal, and WHO-GMP
                certifications. The Directorate General of Drug Administration (DGDA)
                recognizes WHO-GMP certification from Indian manufacturers, and our
                documentation package is structured to support Bangladeshi import
                registration requirements.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Bangladesh */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY EXPORT SOFTGELS TO&nbsp;BANGLADESH
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyBangladesh.map((item, i) => (
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
                  HALAL CERTIFIED FOR THE BANGLADESHI&nbsp;MARKET
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Bangladesh is approximately 90% Muslim. Halal certification
                  enhances product acceptance across pharmacy retail, hospital
                  channels, and direct consumer purchasing &mdash; particularly
                  for softgel capsules where gelatin sourcing is a common
                  consumer&nbsp;concern.
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
                  For the Bangladeshi market, Halal certification addresses a specific
                  consumer concern: softgel capsules are made with gelatin, and
                  Bangladeshi consumers are increasingly aware of the distinction
                  between Halal-sourced and non-Halal gelatin. Our Halal certification
                  provides documented assurance that the gelatin used in our softgel
                  shells is sourced exclusively from Halal-certified suppliers &mdash;
                  eliminating a potential barrier to consumer acceptance and enabling
                  pharmacists to confidently recommend our products to
                  religiously-observant&nbsp;patients.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Every export shipment to Bangladesh includes a product-specific Halal
                  certificate alongside the Certificate of Analysis, Free Sale Certificate,
                  and commercial documentation. Our Halal certification is internationally
                  recognized across SAARC and OIC member states, providing cross-market
                  utility for Bangladeshi distributors who also trade in other
                  Muslim-majority&nbsp;markets.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range for Bangladesh */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Range</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;BANGLADESH
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
              softgel blends for Bangladeshi distributors and pharmaceutical companies
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

      {/* Regulatory — DGDA */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Regulatory Landscape</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              DGDA IMPORT FRAMEWORK
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <SectionReveal delay={0.05}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Bangladesh&apos;s pharmaceutical imports are regulated by the Directorate
                  General of Drug Administration (DGDA), one of the more structured
                  regulatory bodies in South Asia. Unlike some developing markets with
                  minimal oversight, DGDA maintains a formal product registration process
                  for imported pharmaceutical and nutraceutical products &mdash;
                  reflecting Bangladesh&apos;s sophisticated domestic pharmaceutical
                  industry and its commitment to quality&nbsp;standards.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For Indian manufacturers with WHO-GMP certification, the DGDA import
                  pathway is well-established. India is already a major pharmaceutical
                  supplier to Bangladesh &mdash; APIs, excipients, and finished products
                  flow across the border through both land and sea routes. WHO-GMP
                  certification from an Indian manufacturer is recognized by DGDA as
                  a primary quality credential, and the bilateral pharmaceutical trade
                  relationship is operationally&nbsp;mature.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  The DGDA registration process for imported nutraceutical softgels
                  typically involves: submission of manufacturer WHO-GMP certificate,
                  product dossier with Certificate of Analysis, Free Sale Certificate
                  from FSSAI, stability data, and standard commercial documentation.
                  The Bangladeshi importer or their regulatory agent handles the
                  in-country registration submission. Registration timelines vary but
                  are generally faster than GCC or EAEU regulatory&nbsp;processes.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Admetus Lifesciences provides all manufacturer-side documentation
                  required for DGDA import clearance: WHO-GMP certificate, GMP
                  certificate, Halal certificate, Free Sale Certificate from FSSAI,
                  Certificate of Analysis per batch, Certificate of Origin (for SAFTA
                  preferential tariff claims), stability data, and commercial
                  documentation. The SAFTA framework between India and Bangladesh can
                  provide preferential duty treatment for qualifying pharmaceutical
                  products.
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
                  INDIA TO BANGLADESH SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  The fastest transit times of any Admetus export market &mdash;
                  road via Petrapole-Benapole (1-2 days) or sea via
                  Kolkata/Haldia to Chittagong (3-5&nbsp;days).
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
              EXPORT DOCUMENTATION FOR&nbsp;BANGLADESH
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
              BANGLADESH EXPORT Q&amp;A
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
              EXPORT SOFTGELS TO&nbsp;BANGLADESH
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Bangladeshi importers, pharmaceutical companies, and distributors
              seeking a WHO-GMP certified softgel capsule manufacturer in India &mdash;
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

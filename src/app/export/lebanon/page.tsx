import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyLebanon = [
  {
    title: "Economic crisis drives demand for affordable generics",
    desc: "Lebanon has been experiencing one of the most severe economic crises in modern history since 2019 — the Lebanese pound has lost over 98% of its value against the US dollar, hyperinflation has devastated purchasing power, and the healthcare system is under extreme strain. In this environment, affordable Indian-manufactured generics and nutraceuticals have a compelling competitive advantage over European and American-branded alternatives that Lebanese consumers and healthcare facilities can no longer afford.",
  },
  {
    title: "5.5 million population with sophisticated healthcare expectations",
    desc: "Despite its small size, Lebanon has historically maintained one of the most advanced healthcare systems in the Middle East — with high physician density, well-established pharmacy networks, and a population accustomed to quality pharmaceutical products. Lebanese consumers understand supplementation, trust pharmacy-dispensed nutraceuticals, and are familiar with softgel capsule formats. The economic crisis has not reduced demand — it has shifted procurement toward affordable alternatives from India.",
  },
  {
    title: "Muslim-majority market requiring Halal certification",
    desc: "Lebanon's population is approximately 54% Muslim (Sunni and Shia combined), with Halal certification enhancing product acceptance across all demographic segments. Unlike purely secular markets, Lebanese pharmacies and distributors prefer products with Halal documentation — it broadens the addressable consumer base and eliminates concerns about gelatin sourcing that would otherwise limit market penetration for softgel capsules.",
  },
  {
    title: "India is a growing pharmaceutical supplier to Lebanon",
    desc: "As traditional European pharmaceutical suppliers become unaffordable in the current economic environment, Lebanese importers are increasingly sourcing from India — the world's largest generic pharmaceutical manufacturer. Indian pharma products with WHO-GMP certification are accepted by Lebanon's Ministry of Public Health, and the procurement channel from JNPT to Beirut port is well-established with 10-14 day transit times.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is widespread in Lebanon — driven by indoor lifestyles, modesty-related clothing practices, and dietary gaps exacerbated by the economic crisis. Cholecalciferol 60,000 IU softgels serve as weekly therapeutic supplementation prescribed across Lebanese clinics and pharmacies. With European-manufactured Vitamin D products becoming prohibitively expensive, Indian-manufactured alternatives are capturing significant market share.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular disease is a leading cause of mortality in Lebanon, and Omega-3 supplementation is widely prescribed by Lebanese physicians. The economic crisis has made imported Omega-3 products from European manufacturers unaffordable for most consumers — creating a direct opportunity for WHO-GMP certified Indian alternatives at 40-60% lower price points without compromising quality documentation.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Nutritional supplementation has become more critical as the economic crisis has degraded dietary quality for millions of Lebanese. Multivitamin softgels address micronutrient deficiencies that have worsened since 2019 — particularly iron, zinc, B-vitamins, and fat-soluble vitamins. This is both a clinical need and a growing pharmacy retail category in Lebanon.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health supplementation is a significant therapeutic category in Lebanon — the aging population, combined with nutritional deficiencies worsened by the economic crisis, creates sustained demand for calcium and vitamin D metabolite formulations. Lebanese orthopaedists and endocrinologists prescribe these combinations as standard of care for osteoporosis prevention.",
  },
  {
    name: "Nigella Sativa (Kalonji / Habbatus Sauda)",
    desc: "Known as Habbatus Sauda in Arabic, Nigella Sativa has deep cultural and religious significance across Lebanon's Muslim communities. The Prophet Muhammad (PBUH) referenced it as a remedy for all ailments except death. In Lebanese traditional medicine, black seed oil is widely used for immune support, respiratory health, and general wellness. Our softgel encapsulation delivers standardized Nigella Sativa oil with consistent potency — a pharmaceutical-grade format for a product with established cultural demand.",
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
    title: "Dispatch from JNPT port",
    desc: "Sea freight from JNPT (Nhava Sheva, Mumbai) — India's largest west-coast container port with regular shipping services to the Eastern Mediterranean. Direct and transshipment routes available to Beirut.",
  },
  {
    title: "Arrival at Beirut port",
    desc: "Beirut port is Lebanon's primary commercial port and the entry point for the majority of pharmaceutical imports. Despite the 2020 port explosion, the port has been partially restored and continues to handle commercial cargo. Alternative entry via Tripoli port (North Lebanon) is also available for specific shipments.",
  },
  {
    title: "Transit time: 10-14 days",
    desc: "Direct JNPT to Beirut transit is approximately 10-12 days. Transshipment routes via Jebel Ali (Dubai) or Port Said (Egypt) typically take 12-14 days total. Air freight via Delhi or Mumbai is available for urgent or sample shipments with 3-4 day delivery.",
  },
];

const exportDocs = [
  {
    title: "Certificate of Analysis (COA)",
    desc: "Batch-specific laboratory analysis confirming identity, potency, purity, dissolution, and microbial limits for every shipment — required by Lebanon's Ministry of Public Health for import clearance.",
  },
  {
    title: "Halal Certificate",
    desc: "Product-level Halal certification confirming compliance with Islamic dietary and manufacturing standards — enhancing market acceptance across Lebanon's Muslim-majority consumer segments.",
  },
  {
    title: "Free Sale Certificate (FSSAI)",
    desc: "Issued by FSSAI (Food Safety and Standards Authority of India), confirming that the products are legally manufactured and freely sold in India — a standard requirement for Lebanese import applications.",
  },
  {
    title: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with HS codes, unit pricing, total value, and comprehensive packing list for customs clearance at Beirut port or the buyer's designated entry point.",
  },
  {
    title: "GMP / WHO-GMP Certificate",
    desc: "Manufacturing facility certification confirming compliance with Good Manufacturing Practice and World Health Organization GMP standards — the primary quality credential recognized by Lebanon's Ministry of Public Health.",
  },
  {
    title: "Certificate of Origin",
    desc: "Issued by the Indian Chamber of Commerce, confirming the country of manufacture for Lebanese customs and import duty assessment.",
  },
];

const faqs = [
  {
    q: "How does the Lebanese economic crisis affect pharmaceutical imports from India?",
    a: "The economic crisis has actually increased demand for Indian pharmaceutical and nutraceutical products. European and American-branded alternatives have become prohibitively expensive for most Lebanese consumers and healthcare facilities. Indian WHO-GMP certified softgels offer the same quality documentation at 40-60% lower price points — making them the most viable option for Lebanese importers seeking to maintain product supply in a hyperinflationary environment. Payment terms may require additional structuring — we work with Lebanese importers on flexible arrangements including L/C through correspondent banks.",
  },
  {
    q: "What is the regulatory process for importing nutraceutical softgels into Lebanon?",
    a: "Lebanon's pharmaceutical and nutraceutical imports are regulated by the Ministry of Public Health (MOH). The MOH requires: WHO-GMP certificate from the manufacturer, Certificate of Analysis per batch, Free Sale Certificate, Halal certificate (recommended), and standard commercial documentation. Lebanon's regulatory framework, while structured, is generally accessible for Indian manufacturers with WHO-GMP certification. The Lebanese importer or their regulatory agent handles the in-country registration and MOH clearance process.",
  },
  {
    q: "Is Halal certification necessary for the Lebanese market?",
    a: "While Lebanon is a multi-confessional country, approximately 54% of the population is Muslim. Halal certification is strongly recommended — it broadens the addressable market, eliminates gelatin-sourcing concerns that could limit softgel adoption, and is expected by many Lebanese pharmacy chains and distributors. Our Jind facility holds Halal certification covering the entire manufacturing chain, and Halal certificates are included with every export shipment.",
  },
  {
    q: "What payment terms do you offer for Lebanese buyers?",
    a: "We understand the financial complexities of operating in Lebanon's current economic environment. Standard terms are 30% advance with the order and 70% against shipping documents (bill of lading). We work via T/T (telegraphic transfer) and Letter of Credit (LC) through correspondent banks. For first-time Lebanese buyers, we recommend starting with a pilot order to validate the logistics and payment chain before scaling. Specific terms are confirmed in the proforma invoice — contact team@admetuslifesciences.com.",
  },
  {
    q: "Can you supply softgels under our brand name for the Lebanese market?",
    a: "Yes. We operate as a private-label and contract manufacturer — your brand name, packaging design, and labeling specifications are applied to the finished product. We support Arabic, French, and English language labeling for the Lebanese market — reflecting Lebanon's trilingual commercial environment. Brand artwork approval and proof signoff happens before production begins.",
  },
  {
    q: "How are shipments routed from India to Lebanon?",
    a: "Primary route: sea freight from JNPT (Mumbai) to Beirut port — approximately 10-12 days direct transit. Alternative routes via Jebel Ali (Dubai) or Port Said (Egypt) with transshipment take 12-14 days. Tripoli port (North Lebanon) is an alternative entry point. Air freight via Delhi or Mumbai is available for samples and urgent shipments with 3-4 day delivery. The JNPT-Beirut route is the most cost-effective for regular container volumes.",
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
      name: "Lebanon",
      item: "https://www.admetuslifesciences.com/export/lebanon/",
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

export default function LebanonExportPage() {
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
          alt="Halal certified softgel capsules manufactured in India for export to Lebanon — Admetus Lifesciences, WHO-GMP certified"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Lebanon</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;LEBANON
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal and WHO-GMP certified softgel capsules from Haryana, India &mdash;
            affordable nutraceutical generics for Lebanon&apos;s price-sensitive healthcare
            market. Full export documentation, direct shipping to Beirut&nbsp;port.
          </p>
        </div>
      </section>

      {/* Lebanon Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Lebanon is a country of approximately 5.5 million people currently
                experiencing one of the most severe economic crises in modern history.
                The collapse of the Lebanese pound, hyperinflation, and the deterioration
                of the banking sector have fundamentally reshaped the pharmaceutical
                import landscape &mdash; <strong>shifting procurement decisively toward
                affordable generics from India</strong> and away from the European and
                American-branded products that traditionally dominated Lebanese pharmacies.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Despite the economic turmoil, Lebanon maintains a sophisticated healthcare
                infrastructure with high physician density, well-established pharmacy networks
                across Beirut, Tripoli, Sidon, and regional towns, and a population that
                understands and values pharmaceutical supplementation. The demand for
                nutraceutical products has not decreased &mdash; consumers and prescribers
                have simply shifted to affordable alternatives that deliver equivalent quality
                at sustainable price points. Indian WHO-GMP certified softgels are 40-60%
                less expensive than European equivalents, making them the most viable option
                in the current Lebanese market.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana 126112,
                manufactures Halal-certified, WHO-GMP compliant softgel capsules positioned
                for the Lebanese market &mdash; combining the pricing economics of Indian
                manufacturing with the quality certifications and documentation that Lebanon&apos;s
                Ministry of Public Health and Lebanese importers require. Our facility operates
                ARBES SGX-806P and Elmach EPI 2000 encapsulation lines with FSSAI, GMP, HACCP,
                Halal, and WHO-GMP certifications.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Lebanon */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY EXPORT SOFTGELS TO&nbsp;LEBANON
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyLebanon.map((item, i) => (
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
                  HALAL CERTIFIED FOR THE LEBANESE&nbsp;MARKET
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Lebanon is a multi-confessional country with approximately 54%
                  Muslim population. Halal certification broadens the addressable
                  market and eliminates gelatin-sourcing concerns that could
                  otherwise limit softgel capsule&nbsp;adoption.
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
                  For the Lebanese market, Halal certification serves a commercial
                  function beyond religious compliance: it maximises the addressable
                  consumer base in a country where both Muslim and non-Muslim consumers
                  purchase the same pharmacy products. Halal-certified softgels face no
                  consumer resistance from any demographic segment, while non-certified
                  products may lose a significant portion of the Muslim consumer base
                  &mdash; particularly in Sunni-majority areas like Tripoli, Sidon, and
                  the Bekaa Valley.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Every export shipment to Lebanon includes a product-specific Halal
                  certificate alongside the Certificate of Analysis, Free Sale Certificate,
                  and commercial documentation. Our Halal certification is recognized
                  across Middle Eastern markets, meaning Lebanese distributors who also
                  trade in Syria, Iraq, Jordan, or GCC countries can use the same
                  certification documentation across multiple territories.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range for Lebanon */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Range</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;LEBANON
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
              softgel blends for Lebanese distributors targeting specific therapeutic
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

      {/* Regulatory — MOH */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Regulatory Landscape</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              MINISTRY OF PUBLIC HEALTH FRAMEWORK
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <SectionReveal delay={0.05}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Lebanon&apos;s pharmaceutical and nutraceutical imports are regulated by
                  the Ministry of Public Health (MOH), which oversees product registration,
                  import licensing, and quality standards for all pharmaceutical products
                  entering the Lebanese market. Despite the economic crisis, the MOH
                  maintains its regulatory framework &mdash; and WHO-GMP certification from
                  an Indian manufacturer is recognized as a valid quality&nbsp;credential.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  The economic crisis has, in some respects, made the regulatory pathway
                  more accessible for Indian manufacturers. As Lebanon actively seeks
                  affordable pharmaceutical alternatives to replace unaffordable European
                  imports, the MOH has facilitated faster import clearance for WHO-GMP
                  certified generic and nutraceutical products &mdash; particularly in
                  therapeutic categories where supply gaps have&nbsp;emerged.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  The Lebanese regulatory framework requires manufacturer WHO-GMP
                  certification, Certificate of Analysis per batch, Free Sale Certificate
                  from FSSAI, and standard commercial documentation. Product registration
                  with the MOH is handled by the Lebanese importer or their regulatory
                  agent. Registration timelines are generally manageable, and the MOH is
                  familiar with Indian pharmaceutical manufacturer&nbsp;documentation.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Admetus Lifesciences provides all manufacturer-side documentation
                  required for Lebanese import clearance: WHO-GMP certificate, GMP
                  certificate, Halal certificate, Free Sale Certificate from FSSAI,
                  Certificate of Analysis per batch, Certificate of Origin, and
                  commercial documentation. We support Arabic, French, and English
                  language labeling to meet Lebanese market requirements, where all
                  three languages are used in commercial and regulatory&nbsp;contexts.
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
                  INDIA TO LEBANON SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Direct sea freight from JNPT to Beirut port with 10-14 day
                  transit. Transshipment via Dubai or Port Said also&nbsp;available.
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
              EXPORT DOCUMENTATION FOR&nbsp;LEBANON
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
              LEBANON EXPORT Q&amp;A
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
              EXPORT SOFTGELS TO&nbsp;LEBANON
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Lebanese importers and distributors seeking a WHO-GMP and Halal
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

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const marketHighlights = [
  {
    title: "High purchasing power — 4.3M population",
    desc: "Kuwait has one of the highest GDP per capita in the world, with a population of approximately 4.3 million. The Kuwaiti Dinar is the world's most valuable currency. This extraordinary purchasing power drives premium healthcare spending and creates strong demand for quality-certified, internationally-manufactured nutraceutical products. Kuwaiti consumers and healthcare providers prioritize quality certification over price, making the market highly attractive for WHO-GMP certified manufacturers.",
  },
  {
    title: "Growing healthcare infrastructure",
    desc: "Kuwait is investing heavily in healthcare modernization under its New Kuwait 2035 vision. New hospitals, specialty medical centers, and pharmacy chains are being established across the country. The government healthcare spending is among the highest per capita in the world. This expansion directly increases demand for imported pharmaceutical and nutraceutical products, particularly softgel capsules in the vitamin, mineral, and herbal supplement categories.",
  },
  {
    title: "KDCPA regulatory framework",
    desc: "The Kuwait Drug & Food Control and Pharmaceutical Administration (KDCPA) regulates all pharmaceutical and nutraceutical imports. KDCPA maintains a structured registration process that validates manufacturer credentials, product quality, Halal compliance, and labeling standards. The regulatory framework is well-established and transparent, providing clear requirements for foreign manufacturers seeking market entry.",
  },
  {
    title: "Halal mandatory — strict compliance",
    desc: "Kuwait enforces strict Halal requirements for all food, pharmaceutical, and nutraceutical products. Halal certification is mandatory — not optional. Products without valid Halal certification are rejected at Kuwait customs. The Halal requirement extends to raw materials, the manufacturing process, and the finished product. Admetus Lifesciences holds Halal certification covering the entire manufacturing chain, meeting Kuwait's stringent requirements.",
  },
];

const regulatoryReqs = [
  {
    title: "KDCPA product registration",
    desc: "All pharmaceutical and nutraceutical products imported into Kuwait require registration with the Kuwait Drug & Food Control and Pharmaceutical Administration (KDCPA). The registration process validates the manufacturer's credentials, product composition, quality documentation, safety data, and labeling compliance. KDCPA registration is mandatory before any product can be distributed in Kuwait.",
  },
  {
    title: "GMP / WHO-GMP certificate",
    desc: "The manufacturer must hold a valid GMP certificate, with WHO-GMP certification strongly preferred by KDCPA. Admetus Lifesciences holds both GMP and WHO-GMP certifications for our Jind, Haryana facility — these certificates are submitted as part of the KDCPA registration package and establish manufacturer credibility with Kuwaiti regulators and importers.",
  },
  {
    title: "Free Sale Certificate from FSSAI",
    desc: "A Free Sale Certificate issued by FSSAI (Food Safety and Standards Authority of India) confirming that the products are legally manufactured and freely sold in India. This is a mandatory document in the KDCPA registration submission, establishing the product's regulatory status in the country of origin.",
  },
  {
    title: "Halal certification — mandatory",
    desc: "Kuwait mandates Halal certification for all food, pharmaceutical, and nutraceutical products without exception. Our facility holds Halal certification covering raw materials, manufacturing process, and finished products. Product-specific Halal certificates are included with every shipment to Kuwait and submitted as part of the KDCPA registration package.",
  },
  {
    title: "Arabic labeling required",
    desc: "All product labels must include Arabic text covering product name, active ingredients, dosage instructions, warnings, contraindications, manufacturer details, batch number, manufacturing date, and expiry date. Admetus Lifesciences provides end-to-end Arabic labeling support — translation, design, and print-ready artwork as part of our Kuwait export service.",
  },
  {
    title: "Local authorized agent",
    desc: "A Kuwait-based authorized agent with a valid commercial registration is required to submit the KDCPA registration and act as the local representative for the product. The agent handles regulatory liaison, in-country distribution coordination, and post-market surveillance responsibilities.",
  },
  {
    title: "GSO 2571/2021 compliance",
    desc: "Products must comply with GSO 2571/2021 — the Gulf Standards Organization technical regulation for pre-packaged food labeling, applicable to nutraceuticals sold across the GCC including Kuwait. This covers labeling format, nutritional information, allergen declarations, and Arabic language requirements. Our export team ensures label compliance before production.",
  },
  {
    title: "Certificate of Analysis per batch",
    desc: "A Certificate of Analysis (COA) is required for each batch of imported nutraceutical products. The COA confirms that the product meets the registered specifications for identity, potency, purity, and microbial limits. Our quality control laboratory provides comprehensive COAs with every production batch, tested against pharmacopoeial standards.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is endemic across Kuwait — affecting an estimated 80-90% of the population despite year-round sunshine. Extreme summer heat (reaching 50+ degrees Celsius), air-conditioned indoor lifestyles, and limited outdoor activity drive widespread deficiency. Cholecalciferol 60,000 IU weekly softgels are one of the highest-volume nutraceutical categories in Kuwaiti pharmacy retail, prescribed by endocrinologists and physicians across government and private hospitals.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular health supplementation is a critical category in Kuwait's healthcare market. Kuwait has among the highest obesity rates globally, with over 70% of the adult population classified as overweight or obese. This drives high rates of cardiovascular disease, diabetes, and metabolic syndrome. Omega-3 softgels with Vitamin E are prescribed by cardiologists and purchased as preventive supplements across hospital and retail pharmacy channels.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health formulations targeting Kuwait's aging population and post-menopausal women. Calcitriol (active Vitamin D metabolite) combined with Calcium Citrate and K2-7 for enhanced calcium absorption and bone mineralization. The combination addresses the downstream effects of widespread Vitamin D deficiency in the Kuwaiti population.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Comprehensive multivitamin formulations for Kuwait's health-conscious consumer segment. Rising wellness awareness, particularly among younger demographics, is driving demand for daily multivitamin supplementation. Kuwait's high purchasing power supports premium-priced multivitamin products that command higher margins than standard formulations.",
  },
  {
    name: "Nigella Sativa (Habbatus Sauda / Habba Sawda)",
    desc: "Nigella Sativa — known as Habbatus Sauda or Habba Sawda in Kuwait — holds deep cultural and religious significance as a traditional remedy referenced in Islamic hadith. The cultural resonance of black seed drives consistent, high-volume demand across all demographics in Kuwait. Standardized black seed oil softgel capsules deliver the traditional remedy in a convenient, dose-controlled format with documented health benefits including immune support and anti-inflammatory properties.",
  },
  {
    name: "Glutathione + ALA + Grape Seed Extract",
    desc: "Antioxidant and skin health formulation — a growing category in Kuwait's beauty and wellness market. Glutathione softgels are among the fastest-growing nutraceutical segments across the GCC. Kuwait's high-income consumers drive demand for premium antioxidant and skin health supplements across pharmacy retail, beauty clinics, and online health platforms.",
  },
  {
    name: "Krill Oil Softgel Capsules",
    desc: "Premium Omega-3 source with superior bioavailability — positioned for Kuwait's premium health supplement market. Krill oil softgels carry a higher price point than standard fish oil, appealing to quality-conscious consumers. Kuwait's purchasing power and premium-oriented retail environment make it an ideal market for high-value nutraceutical products.",
  },
];

const whyAdmetus = [
  {
    title: "Halal certified — full supply chain",
    desc: "Our Halal certification covers the entire manufacturing chain: raw material sourcing (Halal-certified gelatin suppliers), production process, packaging, and finished products. Kuwait mandates strict Halal compliance — our certification meets these requirements at every level. Product-specific Halal certificates accompany every export shipment to Kuwait.",
  },
  {
    title: "WHO-GMP certified facility",
    desc: "Our Jind, Haryana facility holds WHO-GMP certification — the gold standard for pharmaceutical and nutraceutical manufacturing recognized by KDCPA and regulatory authorities across the GCC. This certification is a prerequisite for KDCPA registration and establishes manufacturer credibility with Kuwaiti importers and hospital formulary committees.",
  },
  {
    title: "Competitive pricing — Indian manufacturing advantage",
    desc: "Indian-manufactured softgels offer 40-60% cost advantage over equivalent European-manufactured products, without compromising on quality or documentation standards. For Kuwaiti distributors, this cost advantage translates to improved margins while maintaining the WHO-GMP quality standards that KDCPA requires.",
  },
  {
    title: "Arabic labeling support",
    desc: "We provide end-to-end Arabic labeling support for Kuwait-bound products — translation coordination with native Arabic speakers, label design, GSO 2571/2021 compliance review, and print-ready artwork. Products arrive ready for Kuwaiti pharmacy shelves with no additional labeling work required.",
  },
  {
    title: "5-7 day shipping to Kuwait City",
    desc: "Sea freight from JNPT (Mumbai) or Mundra (Gujarat) to Shuwaikh Port in Kuwait City takes approximately 5-7 days. Air freight from Delhi or Mumbai reaches Kuwait International Airport in under 5 hours for sample shipments or urgent orders. We coordinate with trusted logistics partners experienced with the India-Kuwait trade corridor.",
  },
  {
    title: "Private label & contract manufacturing",
    desc: "Full private-label service for Kuwaiti brands — your brand identity, packaging design, and Arabic labeling on our manufactured products. We handle formulation, production, quality testing, export packaging, and documentation. You handle market distribution across Kuwait's concentrated urban market.",
  },
];

const faqs = [
  {
    q: "What is the KDCPA registration process for importing softgels to Kuwait?",
    a: "The Kuwait Drug & Food Control and Pharmaceutical Administration (KDCPA) requires product registration for all nutraceutical imports. Required documentation includes: manufacturer's GMP/WHO-GMP certificate, Free Sale Certificate from FSSAI, Halal certificate, Certificate of Analysis per batch, product composition and specifications, stability data, and label artwork with Arabic text. A Kuwait-based authorized agent with a valid commercial registration submits the application. Admetus Lifesciences provides all manufacturer-side documentation required for KDCPA submission.",
  },
  {
    q: "Is Halal certification mandatory for nutraceutical exports to Kuwait?",
    a: "Yes. Kuwait mandates strict Halal certification for all food, pharmaceutical, and nutraceutical products without exception. Our Jind facility holds Halal certification covering the entire manufacturing chain — raw material sourcing (Halal-certified gelatin suppliers), production process, and finished products. Product-specific Halal certificates are included with every export shipment to Kuwait. The certification covers all softgel formulations in our portfolio.",
  },
  {
    q: "What is the minimum order quantity for Kuwait export?",
    a: "MOQs are flexible based on the formulation, packaging format, and order configuration. We support pilot shipments for new Kuwaiti distributors testing product acceptance, as well as regular replenishment orders for established importers. Kuwait's population of 4.3 million and high purchasing power supports attractive order volumes. Specific MOQ and pricing is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How long does shipping from India to Kuwait take?",
    a: "Sea freight from JNPT (Nhava Sheva, Mumbai) or Mundra (Gujarat) to Shuwaikh Port in Kuwait City takes approximately 5-7 days. Air freight from Delhi or Mumbai reaches Kuwait International Airport in under 5 hours of flight time for sample shipments or urgent orders. We coordinate with the buyer's preferred freight forwarder or recommend trusted logistics partners experienced with the India-Kuwait trade corridor.",
  },
  {
    q: "What softgel products are in highest demand in Kuwait?",
    a: "The highest-demand softgel categories in Kuwait are: (1) Vitamin D3 60,000 IU — driven by endemic Vitamin D deficiency affecting 80-90% of the population, (2) Omega-3 fatty acids — driven by very high obesity and cardiovascular disease rates, (3) Nigella Sativa / Habbatus Sauda — deep cultural and religious demand, (4) Multivitamins — growing wellness culture, and (5) Glutathione antioxidant formulations — driven by the beauty and wellness market. Kuwait's high purchasing power supports premium-priced formulations.",
  },
  {
    q: "What documentation is provided with each Kuwait export shipment?",
    a: "Every shipment includes: Certificate of Analysis (COA) per batch, Halal certificate, Free Sale Certificate from FSSAI, GMP/WHO-GMP certificate copies, commercial invoice with HS codes, packing list, bill of lading, and Certificate of Origin from the Indian Chamber of Commerce. For KDCPA-registered products, we also provide stability data, product specifications, and any additional documentation requested during the registration review.",
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
      name: "Kuwait",
      item: "https://www.admetuslifesciences.com/export/kuwait/",
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

export default function KuwaitExportPage() {
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
          alt="Halal certified WHO-GMP softgel capsules manufactured in India for export to Kuwait — Admetus Lifesciences"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Kuwait</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;KUWAIT
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal and WHO-GMP certified softgel capsules from Haryana, India &mdash;
            KDCPA documentation support, Arabic labeling, and premium formulations
            for Kuwait&apos;s high-purchasing-power&nbsp;market.
          </p>
        </div>
      </section>

      {/* Kuwait Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Kuwait is one of the wealthiest nations in the world, with one of
                the <strong>highest GDP per capita globally</strong> and a population
                of approximately 4.3 million. The Kuwaiti Dinar is the world&apos;s
                most valuable currency. This extraordinary purchasing power drives
                premium healthcare spending and creates a market where quality
                certification, Halal compliance, and international manufacturing
                standards are valued above price competition.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The <strong>Kuwait Drug &amp; Food Control and Pharmaceutical
                Administration (KDCPA)</strong> regulates all pharmaceutical and
                nutraceutical imports into Kuwait. KDCPA maintains a structured
                registration process that validates manufacturer credentials,
                product quality, Halal compliance, and labeling standards.
                Registration is mandatory before any product can be distributed
                in the country.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                <strong>Halal certification is mandatory</strong> for all food,
                pharmaceutical, and nutraceutical products sold in Kuwait &mdash;
                this is non-negotiable. Kuwait enforces strict Halal requirements
                at customs. Products without valid Halal certification are
                rejected at the port of entry.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Kuwait is investing heavily in <strong>healthcare modernization
                under New Kuwait 2035</strong>, with new hospitals, specialty
                medical centers, and expanded pharmacy networks. Government
                healthcare spending is among the highest per capita globally.
                This infrastructure expansion directly increases demand for
                imported nutraceutical products.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana
                126112, manufactures Halal-certified, WHO-GMP compliant nutraceutical
                softgel capsules specifically configured for the Kuwaiti market &mdash;
                with full KDCPA documentation support, Arabic labeling, and
                formulations aligned with Kuwait&apos;s healthcare demand patterns.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Market Highlights */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              KUWAIT &mdash; HIGH-VALUE GCC&nbsp;MARKET
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {marketHighlights.map((item, i) => (
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

      {/* Regulatory Section */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Kuwait Regulatory Framework</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              KDCPA REGISTRATION &amp;&nbsp;COMPLIANCE
            </h2>
            <div className="gold-rule w-16 mb-6" />
            <p className="body-text text-[var(--text-cream)] max-w-[68ch] mb-10" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              The Kuwait Drug &amp; Food Control and Pharmaceutical Administration
              (KDCPA) administers product registration for all pharmaceutical and
              nutraceutical imports into Kuwait. Below are the key requirements
              &mdash; Admetus Lifesciences provides all manufacturer-side
              documentation.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {regulatoryReqs.map((req, i) => (
              <SectionReveal key={req.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{req.title}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">{req.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Halal Section */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Halal Compliance</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  HALAL CERTIFICATION FOR&nbsp;KUWAIT
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Kuwait enforces strict Halal requirements for all
                  nutraceutical imports &mdash; our certification is
                  integrated into every stage of&nbsp;manufacturing.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Kuwait mandates Halal certification for all food, pharmaceutical,
                  and nutraceutical products without exception. Products without
                  valid Halal documentation are rejected at Kuwait customs.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Admetus Lifesciences holds <strong>Halal certification</strong> that
                  covers the entire manufacturing chain. Our <strong>ARBES SGX-806P</strong> and{" "}
                  <strong>Elmach EPI 2000</strong> softgel encapsulation lines follow
                  documented Halal SOPs with dedicated protocols ensuring no
                  cross-contamination with non-Halal materials. Gelatin sourcing
                  uses Halal-certified bovine gelatin from approved suppliers with
                  full traceability.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Our facility certifications include <strong>FSSAI, GMP, HACCP, Halal,
                  and WHO-GMP</strong> &mdash; providing Kuwaiti importers with a
                  comprehensive quality and compliance framework that meets KDCPA
                  requirements without additional manufacturer-side action.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Product-specific Halal certificates are included with every export
                  shipment to Kuwait. Complete Halal traceability documentation from
                  raw material receipt through finished product release accompanies
                  each batch &mdash; meeting the audit requirements of KDCPA and
                  Kuwait customs authorities.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Portfolio</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;KUWAIT
            </h2>
            <div className="gold-rule w-16 mb-6" />
            <p className="body-text text-[var(--text-cream)] max-w-[68ch] mb-10" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              All products are Halal certified and manufactured at our WHO-GMP
              facility in Jind, Haryana. The full portfolio is available for
              private-label manufacturing with custom branding and Arabic
              labeling for the Kuwaiti&nbsp;market.
            </p>
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

          <SectionReveal delay={0.3}>
            <p className="mt-10 body-text text-[var(--text-muted)] max-w-[68ch]">
              Custom softgel formulations are developed on request for Kuwaiti
              distributors targeting specific therapeutic categories or consumer
              segments. Contact us at{" "}
              <a href="mailto:team@admetuslifesciences.com" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">
                team@admetuslifesciences.com
              </a>{" "}
              with your formulation requirements &mdash; evaluation within 48 hours.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Shipping */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Shipping &amp; Logistics</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              INDIA TO KUWAIT: SHUWAIKH&nbsp;PORT
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
            {[
              { label: "Origin Ports", value: "JNPT (Mumbai), Mundra (Gujarat)" },
              { label: "Destination", value: "Shuwaikh Port, Kuwait City" },
              { label: "Sea Transit", value: "5-7 days" },
              { label: "Air Freight", value: "Under 5 hours (Delhi/Mumbai)" },
              { label: "Facility to Port", value: "~1,200 km (Jind to JNPT)" },
              { label: "FCL Support", value: "20ft & 40ft containers" },
              { label: "Incoterms", value: "FOB, CIF, CFR available" },
              { label: "Documentation", value: "COA, Halal, FSC, CO, invoice, BL" },
            ].map((spec) => (
              <div key={spec.label} className="p-5 bg-[var(--background)]">
                <span className="mono-text text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.1em] block mb-2">
                  {spec.label}
                </span>
                <p className="body-text text-[var(--foreground)] !text-[0.875rem]">{spec.value}</p>
              </div>
            ))}
          </div>

          <SectionReveal delay={0.15}>
            <div className="mt-10 max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Sea freight from JNPT (Mumbai) or Mundra (Gujarat) to Shuwaikh
                Port in Kuwait City takes approximately 5-7 days via the Arabian
                Sea. Multiple weekly sailings are available on this route,
                ensuring consistent supply chain reliability for Kuwaiti importers.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                For sample shipments and urgent orders, air freight from Delhi or
                Mumbai reaches Kuwait International Airport in under 5 hours of
                flight time. Kuwait&apos;s compact geography means port-to-pharmacy
                distribution is highly efficient. We coordinate with the
                buyer&apos;s preferred freight forwarder or recommend trusted
                logistics partners experienced with the India-Kuwait trade corridor.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Admetus for Kuwait */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Why Admetus</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY ADMETUS FOR THE KUWAITI&nbsp;MARKET
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyAdmetus.map((item, i) => (
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

      {/* FAQ */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Frequently Asked</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              KUWAIT EXPORT Q&amp;A
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
              SUPPLY SOFTGELS TO&nbsp;KUWAIT
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Kuwaiti importers, Kuwait City-based distributors, and GCC
              trading companies seeking a WHO-GMP and Halal certified softgel
              manufacturer in India &mdash; share your requirements and our
              export team will respond within 48&nbsp;hours.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919729977795?text=I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Kuwait"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[#25D366] hover:bg-[#20bd5a] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                WhatsApp +91-9729977795
                <ArrowRight size={14} />
              </a>
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

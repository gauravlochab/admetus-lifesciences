import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const marketHighlights = [
  {
    title: "$8.9B pharmaceutical market",
    desc: "Saudi Arabia is the largest pharmaceutical market in the Gulf Cooperation Council (GCC) and the broader Middle East, valued at approximately $8.9 billion. The Kingdom accounts for roughly 60% of the total GCC pharma market. This scale creates massive demand for imported nutraceutical and pharmaceutical products, particularly softgel capsules in the vitamin, mineral, and herbal supplement categories.",
  },
  {
    title: "~$150M pharma imports from India",
    desc: "India is one of the leading source countries for pharmaceutical and nutraceutical products imported into Saudi Arabia, with approximately $150 million in annual pharma imports. Indian-manufactured softgels, capsules, and tablets are well-established across Saudi pharmacy retail, hospital formularies, and wholesale distribution channels. This existing trade relationship provides a foundation for new market entrants.",
  },
  {
    title: "Saudi Vision 2030 — healthcare expansion",
    desc: "Saudi Vision 2030, the Kingdom's national transformation program, is driving massive expansion in healthcare infrastructure. New hospitals, clinics, and pharmacy chains are being established across the country. Healthcare spending is projected to exceed $40 billion annually. This infrastructure expansion directly increases demand for pharmaceutical and nutraceutical imports, particularly from cost-competitive Indian manufacturers.",
  },
  {
    title: "Halal mandatory — non-negotiable",
    desc: "Saudi Arabia enforces the strictest Halal requirements globally for all food, pharmaceutical, and nutraceutical products. Halal certification is not optional — it is a mandatory prerequisite for market entry. Products without valid Halal certification are rejected at customs. Admetus Lifesciences holds Halal certification covering raw materials, manufacturing process, and finished products — meeting Saudi requirements at every level.",
  },
];

const regulatoryReqs = [
  {
    title: "SFDA electronic portal submission",
    desc: "All pharmaceutical and nutraceutical product registrations are submitted through the SFDA (Saudi Food & Drug Authority) electronic portal. The portal requires manufacturer credentials, product specifications, certificates, and labeling artwork. SFDA has moved fully digital — all submissions, status tracking, and approvals are managed through the electronic system.",
  },
  {
    title: "Certificate of Conformity (CoC)",
    desc: "A Certificate of Conformity issued by an accredited conformity assessment body is required for imported products. The CoC confirms that the product meets Saudi technical regulations, quality standards, and safety requirements. Admetus Lifesciences coordinates with accredited bodies to obtain CoC documentation for all export shipments to Saudi Arabia.",
  },
  {
    title: "GMP / WHO-GMP certificate",
    desc: "The manufacturer must hold a valid GMP certificate, with WHO-GMP certification strongly preferred by SFDA. Admetus Lifesciences holds both GMP and WHO-GMP certifications for our Jind, Haryana facility. These certificates are submitted as part of the SFDA registration package and are a prerequisite for product approval.",
  },
  {
    title: "Free Sale Certificate from FSSAI",
    desc: "A Free Sale Certificate issued by FSSAI (Food Safety and Standards Authority of India) confirming that the products are legally manufactured and freely sold in India. This is a mandatory document in the SFDA registration submission, establishing the product's regulatory status in the country of origin.",
  },
  {
    title: "Halal certification",
    desc: "Halal certification is mandatory for all products entering Saudi Arabia — pharmaceutical, nutraceutical, and food categories without exception. The certification must cover the entire supply chain: raw material sourcing, manufacturing process, packaging, and finished product. Our facility holds Halal certification that meets Saudi Arabia's stringent requirements.",
  },
  {
    title: "Arabic labeling — mandatory",
    desc: "All product labels must include Arabic text covering product name, composition, dosage instructions, warnings, contraindications, manufacturer details, batch number, manufacturing date, and expiry date. Arabic must be the primary language on the label. Admetus Lifesciences provides full Arabic labeling support as part of our Saudi export service.",
  },
  {
    title: "Local Saudi agent required",
    desc: "A Saudi-based authorized agent with a valid commercial registration (CR) is required to submit the SFDA registration and act as the local representative for the product. The Saudi agent serves as the legal point of contact for SFDA and is responsible for post-market surveillance. The buyer or their designated import partner typically serves as the authorized agent.",
  },
  {
    title: "SFDA.FD 55 compliance for food supplements",
    desc: "Food supplements must comply with SFDA.FD 55 — the Saudi technical regulation for food supplements. This regulation covers permissible ingredients, maximum daily intake limits, labeling requirements, health claims, and prohibited substances. Our regulatory team ensures formulation compliance before production.",
  },
  {
    title: "GSO 2571/2021 compliance",
    desc: "Products must comply with GSO 2571/2021 — the Gulf Standards Organization technical regulation for pre-packaged food labeling, applicable to nutraceuticals sold in Saudi Arabia and across the GCC. This covers labeling format, nutritional information, allergen declarations, Arabic language requirements, and country of origin marking.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is endemic in Saudi Arabia — affecting an estimated 80-90% of the population despite year-round intense sunshine. The paradox is driven by indoor lifestyles, air-conditioned environments, traditional full-body clothing, and limited outdoor activity during extreme summer heat. Cholecalciferol 60,000 IU weekly softgels are one of the highest-volume nutraceutical categories in Saudi pharmacy retail, prescribed by endocrinologists and available over-the-counter.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular disease is the leading cause of death in Saudi Arabia, driven by high rates of obesity, diabetes, and metabolic syndrome. Omega-3 softgels with Vitamin E are a pharmacy staple — prescribed by cardiologists, recommended by general practitioners, and purchased as a preventive supplement by health-conscious consumers. Strong demand across hospital pharmacy channels and retail pharmacy chains.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health formulations targeting Saudi Arabia's growing elderly population and post-menopausal women. Calcitriol (active Vitamin D metabolite) combined with Calcium Citrate and K2-7 for enhanced calcium absorption and bone mineralization. The combination addresses the downstream effects of widespread Vitamin D deficiency in the Saudi population.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Comprehensive multivitamin formulations for the Saudi wellness market. Saudi Arabia has a rapidly growing health-conscious consumer segment, particularly among younger demographics influenced by fitness and wellness culture. Multivitamin softgels are positioned across pharmacy retail, supermarket health aisles, and online health platforms.",
  },
  {
    name: "Nigella Sativa (Habba Sawda / Habbatus Sauda)",
    desc: "Nigella Sativa — known as Habba Sawda (Habba Sawda) in Saudi Arabia — holds enormous cultural and religious significance as 'Prophet's Medicine' (al-habbah al-sawda). The hadith reference drives deep consumer demand across all demographics. Standardized black seed oil softgel capsules deliver the traditional remedy in a modern, convenient format. This is one of the highest-demand herbal products in the Saudi market — combining cultural resonance with documented health benefits including immune support and anti-inflammatory properties.",
  },
  {
    name: "Krill Oil Softgel Capsules",
    desc: "Premium Omega-3 source with superior bioavailability — positioned for Saudi Arabia's premium health supplement market. Krill oil softgels carry a higher price point than standard fish oil, appealing to health-conscious consumers in Riyadh, Jeddah, and the Eastern Province. Growing demand in premium pharmacy chains and online health retailers.",
  },
];

const whyAdmetus = [
  {
    title: "Halal certified — full supply chain",
    desc: "Our Halal certification covers the entire manufacturing chain: raw material sourcing (Halal-certified gelatin suppliers), production process, packaging, and finished products. Saudi Arabia has the strictest Halal requirements globally — our certification meets these requirements at every level. Product-specific Halal certificates are included with every export shipment.",
  },
  {
    title: "WHO-GMP certified facility",
    desc: "Our Jind, Haryana facility holds WHO-GMP certification — the gold standard for pharmaceutical and nutraceutical manufacturing recognized by SFDA and regulatory authorities across the GCC. This certification is a prerequisite for SFDA registration and establishes manufacturer credibility with Saudi importers.",
  },
  {
    title: "Competitive pricing vs. EU manufacturers",
    desc: "Indian-manufactured softgels offer 40-60% cost advantage over equivalent European-manufactured products, without compromising on quality or documentation standards. For Saudi importers operating in a price-sensitive retail environment, this cost advantage translates directly to improved margins and competitive shelf pricing.",
  },
  {
    title: "Arabic labeling support",
    desc: "We provide end-to-end Arabic labeling support for Saudi-bound products — translation coordination, label design with Arabic as the primary language, SFDA.FD 55 compliance review, GSO 2571/2021 compliance, and print-ready artwork. Products arrive ready for Saudi pharmacy shelves.",
  },
  {
    title: "SFDA documentation support",
    desc: "We provide all manufacturer-side documentation required for SFDA registration: WHO-GMP certificate, Free Sale Certificate from FSSAI, Halal certificate, Certificate of Analysis, product specifications, stability data, and label artwork. Our export documentation team is experienced with the SFDA electronic portal submission requirements.",
  },
  {
    title: "Nigella Sativa formulation — huge Saudi demand",
    desc: "Our standardized Nigella Sativa (Habba Sawda) softgel formulation addresses one of the highest-demand product categories in the Saudi market. The cultural significance of black seed in Saudi Arabia creates consistent, recession-resistant demand — making it an ideal anchor product for new Saudi market entrants.",
  },
  {
    title: "Flexible MOQ for market entry",
    desc: "We support flexible minimum order quantities for Saudi importers — from pilot shipments for new market entrants testing product acceptance, to full-container loads for established distributors with national distribution networks. MOQ and pricing are confirmed within 48 hours of inquiry.",
  },
];

const faqs = [
  {
    q: "Are your softgel capsules Halal certified for Saudi Arabia?",
    a: "Yes. Our Jind, Haryana facility holds Halal certification covering the entire manufacturing chain — raw material sourcing (Halal-certified gelatin suppliers), production process, packaging, and finished products. Saudi Arabia enforces the strictest Halal requirements globally, and our certification is specifically designed to meet these requirements. Product-specific Halal certificates are included with every export shipment to Saudi Arabia. The certification covers all softgel formulations in our portfolio, including Vitamin D3, Omega-3, Nigella Sativa, and all other products.",
  },
  {
    q: "What SFDA documentation does Admetus provide?",
    a: "We provide all manufacturer-side documentation required for SFDA (Saudi Food & Drug Authority) registration. This includes: WHO-GMP certificate for our manufacturing facility, Free Sale Certificate from FSSAI, Halal certificate covering the full supply chain, Certificate of Analysis (COA) per batch, product composition and specifications, stability data, label artwork with Arabic text, Certificate of Conformity (CoC), and any additional documentation requested by SFDA during the review process. Our export team is experienced with the SFDA electronic portal submission format and requirements.",
  },
  {
    q: "What is the registration timeline with SFDA?",
    a: "SFDA registration timelines vary by product category. For food supplements (nutraceuticals classified under SFDA.FD 55), the typical processing time is 5-30 working days from complete submission. Pharmaceutical products may take longer depending on the classification. The timeline assumes all documentation is complete and compliant — incomplete submissions are returned for correction, which extends the timeline. We ensure all manufacturer-side documentation is complete and correctly formatted before submission to minimize delays.",
  },
  {
    q: "Do you provide Arabic labeling for Saudi market?",
    a: "Yes. Arabic labeling is mandatory for all products sold in Saudi Arabia, with Arabic required as the primary language on the label. We provide end-to-end Arabic labeling support: translation coordination with native Arabic speakers, label design with Arabic as the primary language, compliance review against SFDA.FD 55 requirements and GSO 2571/2021 standards, and print-ready artwork. The labeling includes product name, composition, dosage instructions, warnings, contraindications, manufacturer details, batch number, manufacturing and expiry dates — all in Arabic.",
  },
  {
    q: "What is the MOQ for Saudi Arabia export orders?",
    a: "Minimum order quantities are flexible based on the formulation, packaging format, and order configuration. We support pilot shipments for new Saudi importers testing product acceptance in the market, as well as full-container loads (20ft and 40ft) for established distributors with national distribution networks. For private-label orders with custom branding and Arabic labeling, MOQs may be higher due to packaging setup. Specific MOQ and pricing for your order is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "What softgel products are in highest demand in Saudi Arabia?",
    a: "The highest-demand softgel categories in Saudi Arabia are: (1) Vitamin D3 60,000 IU — driven by endemic Vitamin D deficiency affecting 80-90% of the population, (2) Nigella Sativa / Habba Sawda — enormous cultural and religious demand as 'Prophet's Medicine', (3) Omega-3 fatty acids — driven by high cardiovascular disease rates, (4) Multivitamins — growing wellness and fitness culture, and (5) Calcitriol + K2-7 bone health formulations. Nigella Sativa in particular represents a unique opportunity due to the deep cultural resonance and consistent demand in Saudi Arabia.",
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
      name: "Saudi Arabia",
      item: "https://www.admetuslifesciences.com/export/saudi-arabia/",
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

export default function SaudiArabiaExportPage() {
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
          alt="Halal certified WHO-GMP softgel capsules manufactured in India for export to Saudi Arabia — Admetus Lifesciences"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Saudi Arabia</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            HALAL SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;SAUDI&nbsp;ARABIA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal and WHO-GMP certified softgel capsules from Haryana, India &mdash;
            SFDA documentation support, Arabic labeling, and Nigella Sativa
            formulations for the Kingdom&apos;s $8.9B pharmaceutical&nbsp;market.
          </p>
        </div>
      </section>

      {/* Saudi Arabia Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Saudi Arabia is the largest pharmaceutical market in the Middle East
                and the Gulf Cooperation Council (GCC), valued at approximately{" "}
                <strong>$8.9 billion</strong>. The Kingdom accounts for roughly 60%
                of the total GCC pharmaceutical market, making it the single most
                important target market for Indian nutraceutical exporters in the
                region. India exports approximately $150 million worth of
                pharmaceutical products to Saudi Arabia annually, with nutraceutical
                softgels, capsules, and tablets forming a significant portion of this
                trade.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The <strong>Saudi Food &amp; Drug Authority (SFDA)</strong> regulates
                all pharmaceutical and nutraceutical imports into the Kingdom. SFDA
                registration is mandatory before any product can be sold in Saudi
                Arabia. The regulatory framework is structured, well-documented, and
                increasingly digital &mdash; with all product registrations now
                submitted through the SFDA electronic portal.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                <strong>Halal certification is mandatory</strong> for all food,
                pharmaceutical, and nutraceutical products sold in Saudi Arabia &mdash;
                this is non-negotiable. Saudi Arabia enforces the strictest Halal
                requirements globally. Products without valid Halal certification are
                rejected at customs. This requirement extends to raw materials, the
                manufacturing process, and the finished product &mdash; a surface-level
                Halal label is not sufficient.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                <strong>Saudi Vision 2030</strong> is driving massive expansion in
                healthcare infrastructure across the Kingdom. New hospitals, specialty
                clinics, pharmacy chains, and digital health platforms are being
                established at an unprecedented pace. Healthcare spending is projected
                to exceed $40 billion annually. For Indian nutraceutical manufacturers,
                this expansion translates directly to increased import demand &mdash;
                particularly for essential supplements like Vitamin D3, Omega-3, and
                culturally significant products like Nigella Sativa.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana
                126112, manufactures Halal-certified, WHO-GMP compliant nutraceutical
                softgel capsules specifically configured for the Saudi market &mdash;
                with full SFDA documentation support, Arabic labeling, and product
                formulations aligned with Saudi consumer demand patterns.
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
              SAUDI ARABIA &mdash; LARGEST GCC PHARMA&nbsp;MARKET
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

      {/* SFDA Regulatory Section */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Saudi Regulatory Framework</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SFDA REGISTRATION &amp;&nbsp;COMPLIANCE
            </h2>
            <div className="gold-rule w-16 mb-6" />
            <p className="body-text text-[var(--text-cream)] max-w-[68ch] mb-10" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              The Saudi Food &amp; Drug Authority (SFDA) administers product
              registration for all pharmaceutical and nutraceutical imports. All
              submissions are through the SFDA electronic portal. For food
              supplements classified under SFDA.FD 55, the typical processing
              timeline is 5-30 working days from complete submission. Below are
              the key requirements &mdash; Admetus Lifesciences provides all
              manufacturer-side documentation.
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

      {/* SFDA as Gateway to OIC */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Strategic Advantage</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  SFDA &mdash; GATEWAY TO 57 OIC&nbsp;COUNTRIES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Saudi SFDA approval is one of the most recognized regulatory
                  credentials in the Islamic world &mdash; opening doors to 57
                  OIC member countries and accelerating entry across the
                  entire&nbsp;GCC.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Saudi SFDA approval carries significant weight across the
                  Organisation of Islamic Cooperation (OIC) &mdash; a bloc of 57
                  member countries spanning the Middle East, Africa, Central Asia,
                  and Southeast Asia. Regulatory authorities in many OIC member
                  states recognize SFDA registration as a benchmark for product
                  quality and Halal compliance, which can significantly accelerate
                  registration timelines in these markets.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Within the GCC specifically, one SFDA approval can serve as a
                  foundation for accelerated entry into{" "}
                  <strong>Qatar</strong>, <strong>Kuwait</strong>,{" "}
                  <strong>Bahrain</strong>, <strong>Oman</strong>, and the{" "}
                  <strong>UAE</strong>. The Gulf States share common regulatory
                  frameworks through the Gulf Standards Organization (GSO), and
                  SFDA-approved products benefit from a degree of regulatory
                  reciprocity across the bloc.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Beyond the GCC, SFDA credentials strengthen registration
                  submissions in markets across North Africa (Egypt, Morocco,
                  Algeria, Tunisia), West Africa (Nigeria, Senegal, Mali), East
                  Africa (Somalia, Sudan), and Central Asia (Uzbekistan,
                  Tajikistan, Kazakhstan). For Indian nutraceutical exporters
                  targeting the Islamic world, Saudi Arabia is the strategic
                  entry point &mdash; not just a destination market.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For Admetus Lifesciences, this means our Saudi-approved
                  formulations &mdash; with Halal certification, WHO-GMP
                  credentials, and Arabic labeling already in place &mdash; are
                  pre-configured for expansion across the entire OIC footprint.
                  The investment in Saudi market entry generates returns far
                  beyond the Kingdom&apos;s borders.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Halal Section */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Halal Compliance</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              HALAL CERTIFICATION FOR THE SAUDI&nbsp;MARKET
            </h2>
            <div className="gold-rule w-16 mb-6" />
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Saudi Arabia has the <strong>strictest Halal requirements
                globally</strong> for pharmaceutical and nutraceutical products.
                Halal compliance is not a marketing advantage &mdash; it is a
                legal prerequisite. Products without valid Halal certification
                are rejected at Saudi customs, and non-compliant shipments
                result in import bans and reputational damage with SFDA.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences holds <strong>Halal certification</strong> that
                covers the entire manufacturing chain. This is not a label-only
                certification &mdash; it is integrated into our manufacturing
                protocols at every stage:
              </p>
              <ul className="space-y-3 ml-1">
                <li className="body-text text-[var(--text-cream)] flex items-start gap-3" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  <span className="text-[var(--gold)] shrink-0 mt-0.5">&bull;</span>
                  <span><strong>Gelatin sourcing:</strong> Halal-certified bovine gelatin from approved suppliers with full traceability documentation. Every batch of gelatin is verified against Halal certification before entering production.</span>
                </li>
                <li className="body-text text-[var(--text-cream)] flex items-start gap-3" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  <span className="text-[var(--gold)] shrink-0 mt-0.5">&bull;</span>
                  <span><strong>Manufacturing process:</strong> Dedicated Halal manufacturing protocols ensuring no cross-contamination with non-Halal materials. Our ARBES SGX-806P and Elmach EPI 2000 softgel encapsulation lines follow documented Halal SOPs.</span>
                </li>
                <li className="body-text text-[var(--text-cream)] flex items-start gap-3" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  <span className="text-[var(--gold)] shrink-0 mt-0.5">&bull;</span>
                  <span><strong>Documentation chain:</strong> Complete Halal traceability from raw material receipt through finished product release. Every shipment to Saudi Arabia includes product-specific Halal certificates as part of the export documentation package.</span>
                </li>
              </ul>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Our facility certifications include FSSAI, GMP, HACCP, Halal,
                and WHO-GMP &mdash; providing Saudi importers with a comprehensive
                quality and compliance framework that meets SFDA requirements
                without additional manufacturer-side action.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Portfolio</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR SAUDI&nbsp;ARABIA
            </h2>
            <div className="gold-rule w-16 mb-6" />
            <p className="body-text text-[var(--text-cream)] max-w-[68ch] mb-10" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              All products are Halal certified and manufactured at our WHO-GMP
              facility in Jind, Haryana. The full portfolio is available for
              private-label manufacturing with custom branding and Arabic
              labeling for the Saudi&nbsp;market.
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
              Custom softgel formulations are developed on request for Saudi
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

      {/* Arabic Labeling Support */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Labeling Compliance</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              ARABIC LABELING SUPPORT FOR&nbsp;SFDA
            </h2>
            <div className="gold-rule w-16 mb-6" />
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Arabic labeling is <strong>mandatory</strong> for all products
                sold in Saudi Arabia. SFDA requires Arabic as the primary
                language on product labels, with comprehensive information
                covering product name, active ingredients, excipients, dosage
                instructions, warnings, contraindications, storage conditions,
                manufacturer details, batch number, manufacturing date, and
                expiry date.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences provides end-to-end Arabic labeling
                support as part of our Saudi export service. Our process
                includes translation coordination with native Arabic speakers
                familiar with pharmaceutical terminology, label design with
                Arabic as the primary language, compliance review against
                SFDA.FD 55 requirements and GSO 2571/2021 standards, and
                delivery of print-ready artwork files.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                For private-label orders, we incorporate your brand identity
                and Arabic text into the label design. Products leave our
                facility with labels that are ready for Saudi pharmacy shelves
                &mdash; no additional labeling work is required by the
                importer.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Shipping */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Shipping &amp; Logistics</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              INDIA TO SAUDI ARABIA: JEDDAH &amp;&nbsp;DAMMAM
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
            {[
              { label: "Origin Ports", value: "JNPT (Mumbai), Mundra (Gujarat)" },
              { label: "West Coast", value: "Jeddah Islamic Port" },
              { label: "East Coast", value: "Dammam (King Abdulaziz Port)" },
              { label: "Sea Transit", value: "5-7 days via Arabian Sea" },
              { label: "Air Freight", value: "Under 6 hours (Delhi/Mumbai)" },
              { label: "FCL Support", value: "20ft & 40ft containers" },
              { label: "Incoterms", value: "FOB, CIF, CFR available" },
              { label: "Documentation", value: "COA, Halal, FSC, CoC, CO, BL" },
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
                Saudi Arabia has two major commercial ports serving different
                regions of the Kingdom. <strong>Jeddah Islamic Port</strong> on
                the west coast (Red Sea) serves Jeddah, Makkah, Madinah, and the
                western provinces. <strong>King Abdulaziz Port in Dammam</strong> on
                the east coast (Arabian Gulf) serves Riyadh, the Eastern Province,
                and the central regions. Sea freight from JNPT or Mundra to either
                port takes approximately 5-7 days via the Arabian Sea.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                For sample shipments and urgent orders, air freight from Delhi or
                Mumbai reaches Riyadh or Jeddah in under 6 hours of flight time.
                We coordinate with the buyer&apos;s preferred freight forwarder or
                recommend trusted logistics partners experienced with the
                India-Saudi trade corridor for both sea and air freight.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Admetus for Saudi Arabia */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Why Admetus</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY ADMETUS FOR THE SAUDI&nbsp;MARKET
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
              SAUDI ARABIA EXPORT Q&amp;A
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
              <Link href="/export/uae/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                UAE
              </Link>
              <Link href="/export/qatar/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Qatar
              </Link>
              <Link href="/export/oman/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Oman
              </Link>
              <Link href="/export/kuwait/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Kuwait
              </Link>
              <Link href="/export/bahrain/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Bahrain
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
              SUPPLY SOFTGELS TO SAUDI&nbsp;ARABIA
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Saudi importers, Riyadh and Jeddah-based distributors, and
              GCC trading companies seeking a WHO-GMP and Halal certified softgel
              manufacturer in India &mdash; share your requirements and our
              export team will respond within 48&nbsp;hours.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919729977795?text=I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Saudi%20Arabia"
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

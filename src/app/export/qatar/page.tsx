import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const marketHighlights = [
  {
    title: "Highest GDP per capita globally",
    desc: "Qatar has the highest GDP per capita in the world, exceeding $80,000 per person. This extraordinary purchasing power drives premium healthcare spending and creates a market where consumers and healthcare providers are willing to pay for quality-certified, internationally-manufactured nutraceutical products. For Indian softgel manufacturers, Qatar represents a high-margin, quality-first market rather than a volume-driven one.",
  },
  {
    title: "3M population — concentrated, accessible market",
    desc: "Qatar's population of approximately 3 million is concentrated almost entirely in Doha and its surrounding metropolitan area. This geographic concentration makes market distribution remarkably efficient — a single distributor relationship in Doha can effectively cover the entire country. Pharmacy chains, hospital formularies, and health food retailers are all within a compact distribution radius.",
  },
  {
    title: "Growing wellness & supplement market",
    desc: "Qatar's nutraceutical and wellness market is expanding rapidly, driven by rising health awareness, post-pandemic supplement adoption, and government investment in preventive healthcare under Qatar National Vision 2030. Vitamin D3, Omega-3, multivitamins, and herbal supplements are the fastest-growing categories. The FIFA World Cup 2022 legacy has further accelerated the fitness and wellness culture across the country.",
  },
  {
    title: "Large Indian expatriate population",
    desc: "Indians constitute the largest expatriate community in Qatar, numbering approximately 700,000-800,000 people. This population is already familiar with Indian-manufactured pharmaceutical and nutraceutical brands, creating built-in consumer trust and demand for Indian-sourced softgels. Indian community pharmacies and health food stores in Doha actively seek Indian-manufactured supplements.",
  },
];

const regulatoryReqs = [
  {
    title: "MOPH product registration",
    desc: "All pharmaceutical and nutraceutical products imported into Qatar require registration with the Ministry of Public Health (MOPH). The registration process validates the manufacturer's credentials, product composition, quality documentation, and labeling compliance. MOPH maintains a structured approval framework for health supplements and nutraceuticals.",
  },
  {
    title: "GMP / WHO-GMP certificate",
    desc: "The manufacturer must hold a valid GMP certificate, with WHO-GMP certification strongly preferred by MOPH. Admetus Lifesciences holds both GMP and WHO-GMP certifications for our Jind, Haryana facility — these certificates are submitted as part of the MOPH registration package and establish manufacturer credibility with Qatari regulators.",
  },
  {
    title: "Free Sale Certificate from FSSAI",
    desc: "A Free Sale Certificate issued by FSSAI (Food Safety and Standards Authority of India) confirming that the products are legally manufactured and freely sold in India. This is a mandatory document in the MOPH registration submission, establishing the product's regulatory status in the country of origin.",
  },
  {
    title: "Halal certification — mandatory",
    desc: "Qatar mandates Halal certification for all food, pharmaceutical, and nutraceutical products. Halal compliance is a legal requirement, not a marketing advantage. Our facility holds Halal certification covering raw materials, manufacturing process, and finished products — meeting Qatar's requirements at every stage of the supply chain.",
  },
  {
    title: "Arabic labeling required",
    desc: "All product labels must include Arabic text covering product name, composition, dosage instructions, warnings, manufacturer details, batch number, and expiry date. Admetus Lifesciences provides end-to-end Arabic labeling support — translation coordination, label design, and print-ready artwork as part of our Qatar export service.",
  },
  {
    title: "Local authorized agent",
    desc: "A Qatar-based authorized agent with a valid commercial registration is required to submit the MOPH registration and act as the local representative for the product. The buyer or their designated import partner typically serves as the authorized agent and handles in-country distribution.",
  },
  {
    title: "GSO 2571/2021 compliance",
    desc: "Products must comply with GSO 2571/2021 — the Gulf Standards Organization technical regulation for pre-packaged food labeling, applicable to nutraceuticals sold across the GCC including Qatar. This covers labeling format, nutritional information, allergen declarations, and Arabic language requirements. Our export documentation team ensures label compliance before production.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is endemic across Qatar — affecting an estimated 80-90% of the population despite abundant sunshine. Indoor lifestyles, air conditioning dependency, and limited outdoor activity during extreme summer heat drive pervasive deficiency. Cholecalciferol 60,000 IU weekly softgels are among the highest-volume nutraceutical categories in Qatari pharmacy retail, prescribed by endocrinologists and available over-the-counter.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular health supplementation is a major category in Qatar's healthcare market, driven by high prevalence of metabolic syndrome, diabetes, and heart disease. Omega-3 softgels with Vitamin E are prescribed by cardiologists and purchased as preventive supplements by Qatar's health-conscious population. Strong demand across hospital pharmacy channels and premium retail pharmacy chains.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health formulations targeting Qatar's aging population and post-menopausal women. Calcitriol (active Vitamin D metabolite) combined with Calcium Citrate and K2-7 for enhanced calcium absorption and bone mineralization. The combination addresses the downstream effects of widespread Vitamin D deficiency in the Qatari population.",
  },
  {
    name: "Ginseng + Astaxanthin Multivitamin",
    desc: "Premium multivitamin softgel combining Korean Ginseng and Astaxanthin — positioned for Qatar's affluent, health-conscious consumer segment. Qatar's high purchasing power supports premium-priced supplement categories that command higher margins than standard multivitamins. Strong demand in Doha's premium pharmacy chains and health food retailers.",
  },
  {
    name: "Nigella Sativa (Habbatus Sauda / Kalonji)",
    desc: "Nigella Sativa — known as Habbatus Sauda across the Arab world — holds deep cultural and religious significance as a traditional remedy referenced in Islamic hadith. Standardized black seed oil softgel capsules deliver the traditional remedy in a modern, convenient format. Consistent demand across both traditional and modern pharmacy channels in Qatar, driven by cultural resonance and documented health benefits including immune support and anti-inflammatory properties.",
  },
  {
    name: "Glutathione + ALA + Grape Seed Extract",
    desc: "Antioxidant and skin health formulation — a high-demand category in Qatar driven by the beauty and wellness market. Glutathione softgels are among the fastest-growing nutraceutical segments in the GCC. Qatar's affluent consumer base drives demand for premium antioxidant and skin health supplements across pharmacy retail and online platforms.",
  },
  {
    name: "Krill Oil Softgel Capsules",
    desc: "Premium Omega-3 source with superior bioavailability — positioned for Qatar's premium health supplement market. Krill oil softgels carry a higher price point than standard fish oil, appealing to quality-conscious consumers in Doha. Qatar's high-income demographics make it one of the strongest markets for premium-tier nutraceutical products in the GCC.",
  },
];

const whyAdmetus = [
  {
    title: "Halal certified — full supply chain",
    desc: "Our Halal certification covers the entire manufacturing chain: raw material sourcing (Halal-certified gelatin suppliers), production process, packaging, and finished products. Qatar mandates Halal compliance for all nutraceutical imports — our certification meets these requirements at every level. Product-specific Halal certificates accompany every export shipment.",
  },
  {
    title: "WHO-GMP certified facility",
    desc: "Our Jind, Haryana facility holds WHO-GMP certification — the gold standard for pharmaceutical and nutraceutical manufacturing recognized by MOPH and regulatory authorities across the GCC. This certification is a prerequisite for MOPH registration and establishes manufacturer credibility with Qatari importers and distributors.",
  },
  {
    title: "Premium quality for premium market",
    desc: "Qatar's high purchasing power demands premium product quality. Our WHO-GMP certified manufacturing, ARBES SGX-806P and Elmach EPI 2000 encapsulation lines, and comprehensive quality documentation (FSSAI, GMP, HACCP, Halal, WHO-GMP) meet the quality expectations of Qatar's discerning healthcare market.",
  },
  {
    title: "Arabic labeling support",
    desc: "We provide end-to-end Arabic labeling support for Qatar-bound products — translation coordination with native Arabic speakers, label design, GSO 2571/2021 compliance review, and print-ready artwork. Your products arrive ready for Qatari pharmacy shelves with no additional labeling work required.",
  },
  {
    title: "5-7 day shipping to Doha",
    desc: "Sea freight from JNPT (Mumbai) or Mundra (Gujarat) to Hamad Port (Doha) takes 5-7 days. Air freight from Delhi or Mumbai reaches Doha in under 5 hours for sample shipments or urgent orders. Qatar's compact geography means port-to-pharmacy delivery within the same day of arrival.",
  },
  {
    title: "Private label & contract manufacturing",
    desc: "Full private-label service for Qatari brands — your brand identity, packaging design, and Arabic labeling on our manufactured products. We handle formulation, production, quality testing, export packaging, and documentation. You handle market distribution in Qatar's concentrated Doha-centric market.",
  },
];

const faqs = [
  {
    q: "What is the MOPH registration process for importing softgels to Qatar?",
    a: "The Ministry of Public Health (MOPH) requires product registration for all nutraceutical imports into Qatar. Required documentation includes: manufacturer's GMP/WHO-GMP certificate, Free Sale Certificate from FSSAI, Halal certificate, Certificate of Analysis, product composition and specifications, stability data, and label artwork with Arabic text. A Qatar-based authorized agent with a valid commercial registration submits the application. Admetus Lifesciences provides all manufacturer-side documentation required for MOPH submission.",
  },
  {
    q: "Is Halal certification mandatory for nutraceutical exports to Qatar?",
    a: "Yes. Qatar mandates Halal certification for all food, pharmaceutical, and nutraceutical products. Our Jind facility holds Halal certification covering the entire manufacturing chain — raw material sourcing (Halal-certified gelatin suppliers), production process, and finished products. Product-specific Halal certificates are included with every export shipment to Qatar. The certification covers all softgel formulations in our portfolio including Vitamin D3, Omega-3, Nigella Sativa, and all other products.",
  },
  {
    q: "What is the minimum order quantity for Qatar export?",
    a: "MOQs are flexible based on the formulation, packaging format, and order configuration. Qatar's market size (3M population) means order volumes are typically smaller than Saudi Arabia or UAE but at higher margins due to premium pricing. We support pilot shipments for new Qatari distributors testing the product line, as well as regular replenishment orders for established importers. Specific MOQ and pricing is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How long does shipping from India to Qatar take?",
    a: "Sea freight from JNPT (Nhava Sheva, Mumbai) or Mundra (Gujarat) to Hamad Port in Doha takes approximately 5-7 days. Air freight from Delhi or Mumbai reaches Hamad International Airport in under 5 hours of flight time for sample shipments or urgent orders. We coordinate with the buyer's preferred freight forwarder or recommend trusted logistics partners experienced with the India-Qatar trade corridor.",
  },
  {
    q: "Does Qatar accept Indian-manufactured nutraceuticals?",
    a: "Yes. India is one of the major source countries for pharmaceutical and nutraceutical imports into Qatar. The large Indian expatriate community (700,000-800,000 people) creates built-in consumer familiarity with Indian-manufactured products. Indian WHO-GMP certified manufacturers are well-accepted by MOPH. Our facility certifications — FSSAI, GMP, HACCP, Halal, WHO-GMP — meet all MOPH requirements for nutraceutical registration in Qatar.",
  },
  {
    q: "What documentation is provided with each Qatar export shipment?",
    a: "Every shipment includes: Certificate of Analysis (COA) per batch, Halal certificate, Free Sale Certificate from FSSAI, GMP/WHO-GMP certificate copies, commercial invoice with HS codes, packing list, bill of lading, and Certificate of Origin from the Indian Chamber of Commerce. For MOPH-registered products, we also provide stability data, product specifications, and any additional documentation requested during the registration review.",
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
      name: "Qatar",
      item: "https://www.admetuslifesciences.com/export/qatar/",
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

export default function QatarExportPage() {
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
          alt="Halal certified WHO-GMP softgel capsules manufactured in India for export to Qatar — Admetus Lifesciences"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Qatar</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;QATAR
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal and WHO-GMP certified softgel capsules from Haryana, India &mdash;
            MOPH documentation support, Arabic labeling, and premium formulations
            for the world&apos;s highest GDP per capita&nbsp;market.
          </p>
        </div>
      </section>

      {/* Qatar Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Qatar is one of the most affluent markets in the world, with the{" "}
                <strong>highest GDP per capita globally</strong>, exceeding $80,000
                per person. Despite a relatively small population of approximately
                3 million, Qatar&apos;s extraordinary purchasing power creates a
                premium healthcare and nutraceutical market where quality
                certification, Halal compliance, and international manufacturing
                standards are valued over price competition.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The <strong>Ministry of Public Health (MOPH)</strong> regulates all
                pharmaceutical and nutraceutical imports into Qatar. MOPH maintains
                a structured registration framework that validates manufacturer
                credentials, product quality, Halal compliance, and labeling
                standards. Registration is mandatory before any product can be
                sold in Qatar.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Qatar&apos;s <strong>wellness and supplement market</strong> is
                expanding rapidly, fueled by rising health awareness, government
                investment in preventive healthcare under Qatar National Vision
                2030, and a post-pandemic surge in supplement adoption. The FIFA
                World Cup 2022 legacy has further accelerated fitness and
                wellness culture across the country, driving demand for Vitamin
                D3, Omega-3, multivitamins, and herbal supplements.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The <strong>Indian expatriate community in Qatar</strong> numbers
                approximately 700,000-800,000 &mdash; the largest expatriate group
                in the country. This population creates built-in consumer trust
                for Indian-manufactured pharmaceutical and nutraceutical products,
                providing a ready market segment for Indian softgel manufacturers
                entering Qatar.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana
                126112, manufactures Halal-certified, WHO-GMP compliant nutraceutical
                softgel capsules specifically configured for the Qatari market &mdash;
                with full MOPH documentation support, Arabic labeling, and premium
                formulations aligned with Qatar&apos;s quality-first purchasing
                behavior.
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
              QATAR &mdash; PREMIUM GCC HEALTHCARE&nbsp;MARKET
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
            <span className="label-text text-[var(--gold)]">Qatar Regulatory Framework</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              MOPH REGISTRATION &amp;&nbsp;COMPLIANCE
            </h2>
            <div className="gold-rule w-16 mb-6" />
            <p className="body-text text-[var(--text-cream)] max-w-[68ch] mb-10" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              The Ministry of Public Health (MOPH) administers product
              registration for all pharmaceutical and nutraceutical imports
              into Qatar. Below are the key requirements &mdash; Admetus
              Lifesciences provides all manufacturer-side documentation.
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
                  HALAL CERTIFICATION FOR&nbsp;QATAR
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Halal compliance is mandatory for all nutraceutical imports
                  into Qatar &mdash; integrated into our manufacturing
                  protocols at every&nbsp;stage.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Qatar mandates Halal certification for all food, pharmaceutical,
                  and nutraceutical products. This is a legal prerequisite &mdash;
                  products without valid Halal certification are rejected at Qatari
                  customs.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Admetus Lifesciences holds <strong>Halal certification</strong> that
                  covers the entire manufacturing chain. Our <strong>ARBES SGX-806P</strong> and{" "}
                  <strong>Elmach EPI 2000</strong> softgel encapsulation lines follow
                  documented Halal SOPs. Gelatin sourcing uses Halal-certified bovine
                  gelatin from approved suppliers with full traceability documentation.
                  Every batch is verified against Halal certification before entering
                  production.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Our facility certifications include <strong>FSSAI, GMP, HACCP, Halal,
                  and WHO-GMP</strong> &mdash; providing Qatari importers with a
                  comprehensive quality and compliance framework that meets MOPH
                  requirements without additional manufacturer-side action.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Product-specific Halal certificates are included with every export
                  shipment to Qatar. The documentation chain provides complete Halal
                  traceability from raw material receipt through finished product
                  release &mdash; meeting the audit requirements of MOPH and Qatari
                  customs authorities.
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
              SOFTGEL FORMULATIONS FOR&nbsp;QATAR
            </h2>
            <div className="gold-rule w-16 mb-6" />
            <p className="body-text text-[var(--text-cream)] max-w-[68ch] mb-10" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              All products are Halal certified and manufactured at our WHO-GMP
              facility in Jind, Haryana. The full portfolio is available for
              private-label manufacturing with custom branding and Arabic
              labeling for the Qatari&nbsp;market.
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
              Custom softgel formulations are developed on request for Qatari
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
              INDIA TO QATAR: HAMAD&nbsp;PORT
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
            {[
              { label: "Origin Ports", value: "JNPT (Mumbai), Mundra (Gujarat)" },
              { label: "Destination", value: "Hamad Port, Doha" },
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
                Sea freight from JNPT (Mumbai) or Mundra (Gujarat) to Hamad Port
                in Doha takes approximately 5-7 days via the Arabian Sea. Multiple
                weekly sailings are available on this route, ensuring consistent
                supply chain reliability for Qatari importers.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                For sample shipments and urgent orders, air freight from Delhi or
                Mumbai reaches Hamad International Airport in under 5 hours of
                flight time. Qatar&apos;s compact geography means port-to-pharmacy
                delivery within the same day of arrival. We coordinate with the
                buyer&apos;s preferred freight forwarder or recommend trusted
                logistics partners experienced with the India-Qatar trade corridor.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Admetus for Qatar */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Why Admetus</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY ADMETUS FOR THE QATARI&nbsp;MARKET
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
              QATAR EXPORT Q&amp;A
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
              SUPPLY SOFTGELS TO&nbsp;QATAR
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Qatari importers, Doha-based distributors, and healthcare
              companies seeking a WHO-GMP and Halal certified softgel
              manufacturer in India &mdash; share your requirements and our
              export team will respond within 48&nbsp;hours.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/919729977795?text=I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Qatar"
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

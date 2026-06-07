import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "JAKIM-recognized Halal certification — mandatory for Malaysia",
    desc: "Malaysia is a Muslim-majority country (61% of 33 million population), and JAKIM (Jabatan Kemajuan Islam Malaysia) — the Department of Islamic Development Malaysia — sets the global gold standard for Halal certification. All pharmaceutical and nutraceutical products marketed in Malaysia must carry Halal certification recognized by JAKIM. Admetus holds Halal certification for its Jind, Haryana manufacturing facility, ensuring that all softgel formulations meet the Halal manufacturing requirements recognized by Malaysian authorities. Our Halal certification covers the complete manufacturing process — from gelatin sourcing through encapsulation and packaging.",
  },
  {
    title: "WHO-GMP certification accepted by NPRA",
    desc: "NPRA (National Pharmaceutical Regulatory Agency) — Malaysia's pharmaceutical regulator under the Ministry of Health — recognizes WHO-GMP certification as evidence of manufacturing quality compliance. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which streamlines the NPRA product registration process. Malaysia has a rigorous registration framework, and WHO-GMP status is a prerequisite for product evaluation. Our WHO-GMP certification covers softgel capsule manufacturing, quality control, and stability testing operations.",
  },
  {
    title: "$155M pharma imports from India — established trade corridor",
    desc: "Malaysia imports approximately $155 million in pharmaceutical products from India annually, with shipment volumes growing by 65% year-over-year. India is one of Malaysia's top pharmaceutical supplier countries, with well-established trade relationships, regulatory acceptance, and logistics infrastructure. Malaysian importers are familiar with Indian pharmaceutical documentation, WHO-GMP standards, and CDSCO regulatory procedures — making India-Malaysia pharmaceutical trade efficient and predictable.",
  },
  {
    title: "Zone IVB stability data — tropical climate compliance",
    desc: "NPRA requires stability data conducted under ICH climatic Zone IVB conditions (30°C/75% RH) — reflecting Malaysia's equatorial tropical climate. Admetus conducts accelerated and real-time stability studies under Zone IVB conditions for all export formulations, ensuring that shelf life claims meet NPRA's requirements. This climate-specific stability data is a critical component of the QUEST 3+ electronic submission and demonstrates our understanding of Malaysian regulatory expectations.",
  },
  {
    title: "QUEST 3+ electronic submission experience",
    desc: "Malaysia's NPRA uses the QUEST 3+ electronic submission system for pharmaceutical product registration. All registration dossiers — including technical documentation, quality data, stability studies, and labeling information — must be submitted electronically through this system. Admetus prepares manufacturer documentation in formats compatible with QUEST 3+ submission requirements, enabling Malaysian importers to compile and submit their registration applications efficiently through the electronic portal.",
  },
];

const npraSteps = [
  [
    "Classify the product under NPRA categories",
    "NPRA classifies health products into several categories: registered medicines (prescription and non-prescription), health supplements (suplemen kesihatan), traditional medicines, and cosmetics. The classification determines the registration pathway, documentation requirements, and evaluation timeline. Softgel capsules may fall under registered medicines or health supplements depending on the formulation, ingredients, and health claims. Correct classification is critical — misclassification leads to application rejection.",
  ],
  [
    "Appoint a Malaysian Product Registration Holder (PRH)",
    "NPRA requires that all product registration applications be submitted by a Malaysian-registered company acting as the Product Registration Holder (PRH). The PRH is legally responsible for the product in Malaysia. The PRH must hold a valid Manufacturer's License, Wholesaler's License, or Import License from the Drug Control Authority (DCA). The foreign manufacturer cannot directly register products with NPRA.",
  ],
  [
    "Obtain JAKIM-recognized Halal certification",
    "Halal certification recognized by JAKIM is mandatory for pharmaceutical and nutraceutical products marketed to Malaysia's Muslim-majority population. The Halal certification must cover the manufacturing facility and specific product formulations — including gelatin source verification, ingredient traceability, and cross-contamination controls. Admetus holds Halal certification and provides all Halal manufacturing documentation for the Malaysian PRH's submission.",
  ],
  [
    "Submit registration dossier via QUEST 3+",
    "The product registration dossier is submitted electronically through NPRA's QUEST 3+ system. The dossier includes: administrative data, quality documentation (CTD Module 3 format), WHO-GMP certificate, CPP from CDSCO India, stability data under Zone IVB conditions (30°C/75% RH), Halal certificate, product labeling, and product samples. Admetus prepares the complete manufacturer documentation package in QUEST 3+-compatible formats.",
  ],
  [
    "NPRA evaluation and registration approval",
    "NPRA conducts a thorough evaluation of the submitted dossier, which may include documentary review, laboratory testing (by the National Pharmaceutical Regulatory Laboratory), and GMP compliance verification. The evaluation timeline varies by product category — health supplements typically have shorter review periods than registered medicines. Upon successful evaluation, NPRA issues the product registration number (MAL number), authorizing import and sale in Malaysia. Registration is typically valid for 5 years and renewable.",
  ],
];

const products = [
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Cardiovascular disease is a leading cause of mortality in Malaysia, with ischemic heart disease ranking as the number-one cause of death. Malaysia's National Health and Morbidity Survey shows high prevalence of hypercholesterolemia and hypertension across all ethnic groups. Omega-3 softgel capsules are widely recommended by Malaysian healthcare providers and are among the highest-volume health supplement imports. Halal-certified Omega-3 softgels are essential for the Malaysian market — gelatin source must be verified as Halal-compliant.",
  },
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Vitamin D deficiency is documented in Malaysian populations despite the equatorial climate — particularly among Muslim women who practice modest dressing that limits sun exposure, and among the urban workforce with indoor lifestyles. Malaysian physicians are increasingly prescribing Vitamin D3 for deficiency treatment, immune support, and bone health. The high-dose 60,000 IU format is used for therapeutic correction, while maintenance-dose formulations serve the retail health supplement market.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Malaysia's health-conscious urban population drives sustained demand for multivitamin supplements. The country's diverse dietary patterns across Malay, Chinese, and Indian communities create varying micronutrient needs that multivitamin formulations address. Malaysia's retail pharmacy sector (Guardian, Watsons, Caring Pharmacy) and e-commerce platforms provide extensive distribution channels for quality multivitamin products with NPRA registration and Halal certification.",
  },
  {
    name: "Glutathione (Reduced L-Glutathione) Softgel Capsules",
    relevance: "Malaysia's beauty and personal care market is sophisticated and growing, influenced by Korean beauty trends and local beauty standards. Glutathione softgel capsules are in high demand for their skin-brightening and antioxidant properties, particularly among Malaysian women across all ethnic groups. Halal-certified Glutathione supplements command premium pricing in the Malaysian market and are distributed through pharmacy retail, aesthetic clinics, and e-commerce platforms.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health is a growing concern in Malaysia, particularly among the aging population and post-menopausal women. Osteoporosis prevalence is increasing with demographic shifts. The Calcitriol-Calcium-K2 combination is prescribed by Malaysian orthopedic specialists and endocrinologists, and is available through pharmacy retail for preventive supplementation. Malaysia's healthcare system emphasizes preventive care, driving demand for evidence-based bone health formulations.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by NPRA for product registration and by Malaysian importers for each shipment's customs clearance at Malaysian ports.",
  },
  {
    doc: "Certificate of Pharmaceutical Product (CPP) from CDSCO",
    desc: "Issued by India's Central Drugs Standard Control Organisation, the CPP confirms that the product is registered and freely manufactured and sold in India. NPRA requires a CPP from the country of origin as part of the product registration dossier. Admetus coordinates the CPP application with CDSCO and provides the authenticated certificate.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. NPRA accepts WHO-GMP as baseline evidence of manufacturing quality — this certificate is a mandatory component of the QUEST 3+ registration submission and significantly influences the evaluation outcome.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific product formulations — recognized by JAKIM. Mandatory for pharmaceutical and nutraceutical products marketed in Malaysia. The certificate must cover gelatin sourcing, ingredient traceability, manufacturing process controls, and cross-contamination prevention. Admetus holds Halal certification and provides the complete Halal documentation package.",
  },
  {
    doc: "Zone IVB Stability Data",
    desc: "Accelerated and real-time stability study data conducted under ICH climatic Zone IVB conditions (30°C/75% RH) — mandatory for NPRA registration. Malaysia's equatorial tropical climate requires Zone IVB stability data to verify shelf life claims. We provide stability protocols, raw data, and results in CTD Module 3 format compatible with QUEST 3+ submission.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF pricing, HS codes, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by Malaysian customs (Royal Malaysian Customs Department — JKDM) for import duty assessment and clearance at Port Klang or Penang port.",
  },
];

const faqs = [
  {
    q: "Is Halal certification mandatory for pharmaceutical imports into Malaysia?",
    a: "Halal certification recognized by JAKIM (Jabatan Kemajuan Islam Malaysia) is effectively mandatory for pharmaceutical and nutraceutical products marketed in Malaysia. Malaysia is a Muslim-majority country (61% of population), and Halal certification is both a regulatory expectation and a commercial necessity. Products without Halal certification face severely limited market access — most pharmacy chains, hospitals, and distributors require Halal status. NPRA registration evaluation also considers Halal compliance. Admetus holds Halal certification for its manufacturing facility and provides all Halal documentation required for Malaysian product registration.",
  },
  {
    q: "What is QUEST 3+ and how does NPRA product registration work?",
    a: "QUEST 3+ is NPRA's electronic submission system for pharmaceutical product registration in Malaysia. All registration dossiers must be submitted electronically through this portal. The registration application must be filed by a Malaysian-registered Product Registration Holder (PRH). The dossier includes: administrative data, CTD Module 3 quality documentation, WHO-GMP certificate, CPP from CDSCO India, Zone IVB stability data (30°C/75% RH), Halal certificate, product labeling, and product samples. Admetus prepares the complete manufacturer documentation package in QUEST 3+-compatible formats, enabling Malaysian PRHs to compile and submit efficiently.",
  },
  {
    q: "What Zone IVB stability data does NPRA require?",
    a: "NPRA requires stability studies conducted under ICH climatic Zone IVB conditions — 30°C temperature and 75% relative humidity — reflecting Malaysia's equatorial tropical climate. Both accelerated stability data (40°C/75% RH for 6 months) and real-time stability data (30°C/75% RH for the proposed shelf life) are required. Admetus conducts Zone IVB stability studies for all export formulations and provides complete stability reports in CTD Module 3 format compatible with QUEST 3+ electronic submission.",
  },
  {
    q: "How long does shipping take from India to Malaysia?",
    a: "Sea freight from Chennai Port or JNPT (Mumbai) to Malaysia — Port Klang (near Kuala Lumpur) or Penang port — takes approximately 7-10 days transit time. This is one of the shortest shipping routes from India to any ASEAN market. Multiple shipping lines serve the India-Malaysia route with frequent departures. After port arrival, customs clearance at Malaysian ports typically takes 3-7 business days depending on documentation completeness. Total transit from factory dispatch to warehouse delivery in Malaysia is typically 15-25 days.",
  },
  {
    q: "What is the MOQ for Malaysia export orders?",
    a: "MOQs depend on the formulation, packaging format, and order configuration. For initial orders — particularly those tied to NPRA registration and market testing — we offer pilot volumes with the flexibility to scale. All orders for Malaysia must use Halal-certified formulations with Zone IVB stability data. Once NPRA registration is secured and market demand is established, we support full container loads for ongoing supply. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Can Admetus supply private label softgels for the Malaysian market?",
    a: "Yes. We offer full private label and contract manufacturing services for the Malaysian market. This includes custom formulation development, your brand name and artwork on packaging, NPRA-compliant labeling (English and Bahasa Malaysia), Halal-certified manufacturing, Zone IVB stability data, and all manufacturer documentation needed for QUEST 3+ registration under your brand. Omega-3, Multivitamins, Vitamin D3, and Glutathione are among the most commonly requested private label formulations for Malaysia. Contact team@admetuslifesciences.com for specific requirements.",
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
      name: "Malaysia",
      item: "https://www.admetuslifesciences.com/export/malaysia/",
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

export default function MalaysiaPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Malaysia — WHO-GMP and Halal JAKIM certified, NPRA documentation ready"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <Link
            href="/export/"
            className="inline-flex items-center gap-2 py-2 label-text text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={13} />
            Export
          </Link>
          <span className="label-text text-[var(--gold)]">
            India &rarr; Malaysia
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;MALAYSIA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP and Halal JAKIM certified softgel capsules from Haryana,
            India — serving Malaysian importers with NPRA-ready
            documentation, Zone IVB stability data, QUEST 3+ compatible
            dossiers, and competitive&nbsp;pricing.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <span className="label-text text-[var(--gold)]">
                Market Overview
              </span>
              <h2
                className="mt-3 display-section text-[var(--foreground)] mb-4"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
              >
                MALAYSIA PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Malaysia is a high-income ASEAN economy with a sophisticated
                pharmaceutical market and one of the most rigorous regulatory
                frameworks in Southeast Asia. The country imports
                approximately $155 million in pharmaceutical products from
                India annually, with shipment volumes growing by 65%
                year-over-year — making India one of Malaysia&apos;s top
                pharmaceutical supplier countries.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Malaysia&apos;s population of 33 million is 61%
                Muslim-majority, making JAKIM-recognized Halal certification
                an absolute legal and commercial requirement for
                pharmaceutical and nutraceutical products. Malaysia sets the
                global gold standard for Halal certification — JAKIM&apos;s
                Halal standards are referenced by Muslim-majority countries
                worldwide. Products without Halal certification have severely
                limited market access in Malaysia.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                NPRA (National Pharmaceutical Regulatory Agency) under the
                Ministry of Health regulates all pharmaceutical and health
                supplement imports. NPRA uses the QUEST 3+ electronic
                submission system for product registration, requires CTD-format
                dossiers, and mandates Zone IVB stability data (30&deg;C/75%
                RH) for all imported products. WHO-GMP certification is a
                prerequisite for NPRA product evaluation. The regulatory bar
                is high, but the reward is access to a wealthy, health-conscious
                market with strong retail distribution infrastructure.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Malaysia&apos;s health supplement market is growing rapidly,
                driven by an aging population, high prevalence of lifestyle
                diseases (cardiovascular disease, diabetes), increasing health
                consciousness, and a well-developed pharmacy retail network
                (Guardian, Watsons, Caring Pharmacy). E-commerce platforms
                like Shopee and Lazada are expanding supplement access to
                consumers across peninsular and East Malaysia.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* NPRA Regulatory Section */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">
                  Regulatory
                </span>
                <h2
                  className="mt-3 display-section text-[var(--foreground)] mb-4"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
                >
                  NPRA REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  NPRA (National Pharmaceutical Regulatory Agency) under the
                  Ministry of Health regulates all pharmaceutical and health
                  supplement imports. Registration requires QUEST 3+
                  electronic submission, Halal certification, and Zone IVB
                  stability&nbsp;data.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {npraSteps.map(([title, desc], i) => (
                  <li
                    key={title}
                    className="flex items-start gap-4 body-text text-[var(--text-cream)]"
                  >
                    <span className="shrink-0 mono-text text-[0.6875rem] font-bold text-[var(--gold)] mt-1.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className="heading-2 text-[var(--foreground)]"
                        style={{
                          fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
                        }}
                      >
                        {title}
                      </h3>
                      <p className="mt-1 body-text text-[var(--text-muted)] max-w-[58ch] !text-[0.9375rem]">
                        {desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why Admetus */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">
              Why Admetus for Malaysia
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY MALAYSIAN IMPORTERS CHOOSE&nbsp;US
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyAdmetus.map((adv, i) => (
              <SectionReveal key={adv.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="heading-2 text-[var(--foreground)]"
                      style={{
                        fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                      }}
                    >
                      {adv.title}
                    </h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">
              Product Range
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              SOFTGEL FORMULATIONS FOR THE MALAYSIAN&nbsp;MARKET
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
                    <h3
                      className="heading-2 text-[var(--foreground)]"
                      style={{
                        fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                      }}
                    >
                      {product.name}
                    </h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[68ch]">
                      {product.relevance}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.25}>
            <p className="mt-8 body-text text-[var(--text-cream)] max-w-[68ch]">
              We manufacture 10+ standard softgel formulations with custom
              formulation development on request. All products for Malaysia
              are manufactured with Halal certification and Zone IVB
              stability data. See our{" "}
              <Link
                href="/products/"
                className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline"
              >
                complete product catalog
              </Link>{" "}
              and{" "}
              <Link
                href="/private-label-softgel-manufacturer-india/"
                className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline"
              >
                private label service
              </Link>{" "}
              for full details.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Export Documentation */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">
              Export Documentation
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              DOCUMENTATION FOR NPRA &amp;&nbsp;CUSTOMS
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {exportDocs.map((item, i) => (
              <SectionReveal key={item.doc} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="heading-2 text-[var(--foreground)]"
                      style={{
                        fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                      }}
                    >
                      {item.doc}
                    </h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">
                  Shipping & Logistics
                </span>
                <h2
                  className="mt-3 display-section text-[var(--foreground)] mb-4"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
                >
                  INDIA TO MALAYSIA SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-Malaysia shipping corridor is one of the shortest
                  and most frequent routes in ASEAN trade, with multiple
                  weekly departures from Chennai and Mumbai to Port Klang
                  and&nbsp;Penang.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: Chennai Port or JNPT (Mumbai)",
                    "Products are dispatched from our Jind, Haryana facility to either Chennai Port or JNPT (Nhava Sheva) in Mumbai. Both ports have extensive container services to Malaysian ports, with the India-Malaysia route being one of the busiest shipping lanes in the Indian Ocean. Cargo is consolidated, inspected, and cleared for export at the port's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Sea freight: India to Malaysia",
                    "Container vessel services from Chennai/JNPT to Port Klang (near Kuala Lumpur) or Penang port operate with 7-10 days ocean transit time — one of the shortest transit times from India to any ASEAN market. Multiple major shipping lines serve this route with frequent weekly departures, ensuring high supply chain reliability. Port Klang is Malaysia's largest port and primary gateway for pharmaceutical imports.",
                  ],
                  [
                    "Destination: Port Klang or Penang",
                    "Pharmaceutical imports arrive at Port Klang (Westports or Northport terminals) — Malaysia's busiest container port, located near Kuala Lumpur. Penang port serves northern Malaysia and is an alternative for distribution to northern peninsular states. Malaysian customs (JKDM — Royal Malaysian Customs Department) clearance typically takes 3-7 business days. The importer's customs broker handles clearance with the documentation package we provide.",
                  ],
                  [
                    "Packaging for tropical transit",
                    "All Malaysia-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants and moisture barriers, tamper-evident sealing, and batch identification. Packaging is designed for tropical transit conditions and Malaysia's equatorial high-humidity environment (consistent with Zone IVB stability conditions). We coordinate with the buyer's freight forwarder or recommend trusted logistics partners.",
                  ],
                ].map(([title, desc], i) => (
                  <li
                    key={title}
                    className="flex items-start gap-4 body-text text-[var(--text-cream)]"
                  >
                    <span className="shrink-0 mono-text text-[0.6875rem] font-bold text-[var(--gold)] mt-1.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className="heading-2 text-[var(--foreground)]"
                        style={{
                          fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
                        }}
                      >
                        {title}
                      </h3>
                      <p className="mt-1 body-text text-[var(--text-muted)] max-w-[58ch] !text-[0.9375rem]">
                        {desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">
              Frequently Asked
            </span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              MALAYSIA EXPORT Q&amp;A
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
      <section className="py-20 bg-[var(--bg-charcoal)] border-t border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              START YOUR MALAYSIA EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Malaysia import
              requirements — NPRA documentation, Halal certification, Zone
              IVB stability data, MOQ, pricing, and shipping. We respond
              within 48&nbsp;hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Request a Quote
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://wa.me/917497841608?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Malaysia.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--foreground)] border border-[var(--border-subtle)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                WhatsApp Us
                <ArrowRight size={14} />
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

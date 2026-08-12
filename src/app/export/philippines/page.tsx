import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification accepted by FDA Philippines",
    desc: "The Food and Drug Administration of the Philippines (FDA PH) recognizes WHO-GMP certification as evidence of manufacturing quality compliance. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which streamlines the FDA PH product registration process. WHO-GMP status reduces the scope of additional manufacturing site inspections and accelerates the Certificate of Product Registration (CPR) application timeline.",
  },
  {
    title: "Glutathione formulation expertise",
    desc: "The Philippines is the world's largest market for Glutathione supplements — driven by demand for skin-lightening and antioxidant health benefits. Glutathione softgel capsules are among the highest-volume nutraceutical imports into the Philippines. Admetus manufactures Glutathione softgel formulations (reduced L-Glutathione) with verified potency, stability data, and the documentation required for FDA PH registration of Glutathione-containing products.",
  },
  {
    title: "Five international certifications",
    desc: "Beyond WHO-GMP, our facility holds FSSAI, GMP, HACCP, and Halal certifications. This multi-certification profile demonstrates compliance across food safety, pharmaceutical manufacturing, hazard control, and religious dietary standards — covering the documentation requirements of FDA Philippines and Filipino importers across different product categories.",
  },
  {
    title: "Competitive pricing for the Philippine market",
    desc: "India is the #1 supplier of softgel capsules to the Philippines — 53% of all Philippine softgel imports originate from India. This dominance is driven by competitive pricing at WHO-GMP quality levels. Our Haryana facility operates with lower overhead than manufacturers in major Indian metros. Our direct-to-importer model enables pricing that allows Philippine distributors to maintain healthy retail margins in a price-conscious market.",
  },
  {
    title: "Flexible MOQ and pilot orders",
    desc: "We understand that Philippine importers — particularly those registering new products with FDA PH — need flexibility in initial order sizes. We support pilot-volume orders for market testing and FDA PH sample submission, with the ability to scale to full-container loads once product registration and market demand are established. This flexibility is especially valuable for new-to-market formulations like specialty Glutathione or combination multivitamin products.",
  },
];

const fdaPhSteps = [
  [
    "Obtain License to Operate (LTO)",
    "FDA Philippines requires all entities involved in importing pharmaceutical and nutraceutical products to hold a valid License to Operate (LTO). The LTO is issued to the Philippine-based importing company — not the foreign manufacturer. The importer must apply for and maintain an active LTO before any product registration can proceed. This is the mandatory foundational step for importing softgel capsules into the Philippines.",
  ],
  [
    "Apply for Certificate of Product Registration (CPR)",
    "Each specific product to be imported must have a Certificate of Product Registration (CPR) issued by FDA Philippines. The CPR application requires submission of the ACTD-format dossier (ASEAN Common Technical Document), which includes product formulation details, manufacturing process, quality control specifications, stability data, and labeling information. Admetus prepares the manufacturer's portion of the ACTD dossier for submission by the Philippine importer.",
  ],
  [
    "Submit ACTD-format dossier",
    "The Philippines follows the ACTD (ASEAN Common Technical Document) format for product registration submissions. This standardized format covers five modules: administrative information, quality (chemistry, manufacturing, controls), safety, efficacy, and product labeling. Admetus provides the complete Module 3 (Quality) documentation including manufacturing process validation, analytical methods, stability data, and Certificate of Analysis templates.",
  ],
  [
    "Provide GMP certificate and CPP from CDSCO",
    "FDA Philippines requires a valid GMP certificate (WHO-GMP is accepted) and a Certificate of Pharmaceutical Product (CPP) issued by the Central Drugs Standard Control Organisation (CDSCO) of India. The CPP confirms that the product is registered and freely sold in the country of origin. Admetus coordinates the CPP application with CDSCO and provides the authenticated WHO-GMP certificate as part of the registration package.",
  ],
  [
    "FDA PH evaluation and CPR issuance",
    "Upon receiving the complete application — LTO verification, ACTD dossier, GMP certificate, and CPP — FDA Philippines evaluates the submission. This may include documentary review, laboratory testing of product samples, and verification of manufacturing compliance. Upon successful evaluation, FDA PH issues the Certificate of Product Registration (CPR), which authorizes import and sale of the specific product in the Philippines. The CPR is typically valid for 5 years and renewable.",
  ],
];

const products = [
  {
    name: "Glutathione (Reduced L-Glutathione) Softgel Capsules",
    relevance: "The Philippines is the world's largest consumer market for Glutathione supplements. Demand is driven by the skin-lightening and antioxidant properties of Glutathione, which has become a mainstream health and beauty product across all socioeconomic segments in the Philippines. Glutathione softgel capsules — both standalone and in combination with Vitamin C or Alpha Lipoic Acid — are among the top-selling nutraceutical imports. Filipino consumers strongly prefer branded Glutathione products with verifiable quality certifications.",
  },
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Despite the Philippines' tropical climate, Vitamin D deficiency is documented in Filipino populations — particularly among urban residents, office workers, and individuals who avoid sun exposure for skin-lightening purposes. Vitamin D3 softgel capsules are increasingly prescribed by Filipino physicians for deficiency treatment and are growing in the pharmacy retail channel as awareness of Vitamin D's role in immune function and bone health increases.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Cardiovascular disease is the leading cause of death in the Philippines, accounting for approximately 35% of all deaths. The burden of heart disease, hypertension, and stroke is growing rapidly with urbanization and dietary shifts. Omega-3 softgel capsules are widely recommended by Filipino healthcare providers for cardiovascular risk management, cholesterol control, and anti-inflammatory support — making this one of the most consistently demanded softgel formulations in the Philippine market.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "The Philippines has a significant burden of micronutrient deficiency — iron, Vitamin A, zinc, and iodine deficiencies are prevalent, particularly among women and children. Multivitamin softgel capsules address multiple deficiencies in a single dosage form. The Philippine government's nutrition programs and growing consumer health awareness drive demand across both institutional and retail pharmacy channels.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations serve the Philippines' growing elderly population and women's health segment. Osteoporosis is an increasing concern, particularly among post-menopausal Filipino women. The Calcitriol-Calcium-K2 combination is prescribed by Filipino orthopedic specialists and endocrinologists for osteoporosis prevention and treatment, and is available through pharmacy retail for preventive supplementation.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by FDA Philippines for product registration and by Philippine importers for each shipment's Bureau of Customs clearance.",
  },
  {
    doc: "Certificate of Pharmaceutical Product (CPP) from CDSCO",
    desc: "Issued by India's Central Drugs Standard Control Organisation, the CPP confirms that the product is registered and freely manufactured and sold in India. FDA Philippines requires a CPP from the country of origin as part of the product registration dossier. Admetus coordinates the CPP application with CDSCO.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. FDA Philippines accepts WHO-GMP as baseline evidence of manufacturing quality — this certificate is a key document in the CPR application dossier and significantly reduces the likelihood of requiring a separate facility inspection.",
  },
  {
    doc: "ACTD-Format Quality Dossier (Module 3)",
    desc: "The ASEAN Common Technical Document Module 3 (Quality) section includes manufacturing process description, validation data, analytical method details, stability study results, and specifications. Admetus prepares this module for the Philippine importer to include in their FDA PH registration submission.",
  },
  {
    doc: "Stability Data & Shelf Life Documentation",
    desc: "Accelerated and real-time stability study data for each product under ICH climatic Zone IVb conditions (relevant to the Philippines' tropical climate). FDA PH requires stability data to verify shelf life claims. We provide stability protocols and results as part of the ACTD Module 3 documentation.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF Manila pricing, HS codes, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by the Philippine Bureau of Customs for import duty assessment and clearance at Manila ports.",
  },
];

const faqs = [
  {
    q: "What is required for FDA Philippines product registration of imported softgels?",
    a: "FDA Philippines requires a Certificate of Product Registration (CPR) for every imported pharmaceutical and nutraceutical product. The CPR application requires: a valid License to Operate (LTO) held by the Philippine importer, an ACTD-format technical dossier, WHO-GMP certificate from the manufacturer, Certificate of Pharmaceutical Product (CPP) from CDSCO India, product samples for FDA PH laboratory testing, and product labeling in compliance with Philippine regulations. Admetus provides the complete manufacturer documentation package — WHO-GMP certificate, CPP coordination, ACTD Module 3 quality dossier, stability data, and COA — enabling Philippine importers to compile and submit their FDA PH registration application.",
  },
  {
    q: "What documentation does Admetus provide for Philippine import?",
    a: "We provide the complete manufacturer documentation package for FDA Philippines registration: Certificate of Analysis (batch-specific), WHO-GMP certificate, coordination for Certificate of Pharmaceutical Product (CPP) from CDSCO, ACTD Module 3 quality dossier (manufacturing process, validation, analytical methods, stability data), product specifications, and commercial export documents (invoice, packing list, HS codes). We also provide product samples for FDA PH laboratory evaluation upon request. Our export team is experienced in preparing documentation for the Philippine regulatory environment.",
  },
  {
    q: "What is the MOQ for Philippines export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. For initial orders — particularly those tied to FDA PH registration and market testing — we offer pilot volumes. Once CPR is secured and market demand is established, we support full 20ft and 40ft container loads for ongoing supply. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Does Admetus manufacture Glutathione softgel capsules?",
    a: "Yes. Admetus manufactures Glutathione softgel capsules using reduced L-Glutathione. The Philippines is the world's largest consumer market for Glutathione supplements, driven by demand for skin-lightening and antioxidant health benefits. We offer Glutathione in standalone formulations and in combination with Vitamin C, Alpha Lipoic Acid, or other synergistic ingredients. All Glutathione formulations are manufactured under WHO-GMP conditions with full stability data, COA, and the documentation required for FDA PH registration. Private label Glutathione softgels for the Philippine market are available.",
  },
  {
    q: "How long does shipping take from India to the Philippines?",
    a: "Sea freight from Chennai Port or JNPT (Mumbai) to Manila — Manila International Container Terminal (MICT) or Manila South Harbor — takes approximately 10-14 days transit time. This is the standard shipping route for pharmaceutical cargo from India to the Philippines. After port arrival, customs clearance at Philippine ports typically takes 3-7 business days depending on documentation completeness and FDA PH verification. Total transit from factory dispatch to warehouse delivery in Manila is typically 20-30 days.",
  },
  {
    q: "Can Admetus supply private label softgels for the Philippine market?",
    a: "Yes. We offer full private label and contract manufacturing services for the Philippine market. This includes custom formulation development, your brand name and artwork on packaging, FDA PH-compliant labeling, and all manufacturer documentation needed for CPR registration under your brand. Glutathione, Omega-3, Multivitamins, and Vitamin D3 are among the most commonly requested private label formulations for the Philippines. Minimum order quantities for private label are flexible — contact team@admetuslifesciences.com for specific requirements and pricing.",
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
      name: "Philippines",
      item: "https://www.admetuslifesciences.com/export/philippines/",
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

export default function PhilippinesPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Philippines — WHO-GMP certified, FDA PH documentation ready"
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
            India &rarr; Philippines
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;PHILIPPINES
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            Philippine importers with FDA PH-ready documentation, Glutathione
            formulations, competitive pricing, and flexible
            order&nbsp;volumes.
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
                PHILIPPINES PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The Philippines is one of the world&apos;s top importers of
                softgel capsules — and India is its dominant supplier.
                Philippine pharmaceutical imports from India total
                approximately $443 million annually, with year-over-year
                growth of 15%. India accounts for 53% of the
                Philippines&apos; softgel capsule imports, with approximately
                3,870 recorded shipments, making India the single largest
                source country for Philippine softgel demand.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                This trade relationship is structural and deepening. India
                offers WHO-GMP certified manufacturing at price points that
                Philippine distributors and consumers demand, with established
                shipping routes from Chennai and Mumbai to Manila. The
                Philippines&apos; 115-million population, growing middle
                class, and increasing health consciousness are driving
                sustained demand for nutraceutical softgel imports across
                pharmacy retail, e-commerce, and institutional channels.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The Philippine nutraceutical softgel market has distinctive
                demand patterns. Glutathione supplements are a
                uniquely massive category — the Philippines is the
                world&apos;s largest Glutathione consumer market, driven by
                cultural demand for skin-lightening products. Beyond
                Glutathione, cardiovascular health supplements (Omega-3) are
                critical — cardiovascular disease is the leading cause of
                death in the Philippines, accounting for approximately 35% of
                all mortality. Multivitamins, Vitamin D3, and bone health
                formulations round out the high-demand softgel categories.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                All pharmaceutical and nutraceutical imports into the
                Philippines must be registered with FDA Philippines — the Food
                and Drug Administration. FDA PH requires a License to Operate
                (LTO) for the importing entity and a Certificate of Product
                Registration (CPR) for each product, supported by an
                ACTD-format dossier, WHO-GMP certificate, and Certificate of
                Pharmaceutical Product (CPP) from CDSCO India. Indian
                manufacturers with WHO-GMP certification have a streamlined
                path through this regulatory framework.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FDA PH Regulatory Section */}
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
                  FDA PHILIPPINES REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  FDA Philippines — the Food and Drug Administration —
                  regulates all pharmaceutical and nutraceutical imports into
                  the Philippines. The registration process requires a License
                  to Operate (LTO) and a Certificate of Product Registration
                  (CPR) for each&nbsp;product.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {fdaPhSteps.map(([title, desc], i) => (
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
              Why Admetus for Philippines
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY PHILIPPINE IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE PHILIPPINE&nbsp;MARKET
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
              formulation development on request. All products can be supplied
              under your brand name for the Philippine market. See our{" "}
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
              DOCUMENTATION FOR FDA PH &amp;&nbsp;CUSTOMS
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
                  INDIA TO PHILIPPINES SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-Philippines shipping corridor is well-established
                  for pharmaceutical cargo, with regular container vessel
                  services from Chennai and Mumbai to&nbsp;Manila.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: Chennai Port or JNPT (Mumbai)",
                    "Products are dispatched from our Jind, Haryana facility to either Chennai Port or JNPT (Nhava Sheva) in Mumbai. Both ports have regular container services to Manila. Chennai Port offers slightly shorter transit times to Southeast Asian destinations. Cargo is consolidated, inspected, and cleared for export at the port's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Sea freight: India to Manila",
                    "Container vessel services from Chennai/JNPT to Manila operate on regular schedules with 10-14 days ocean transit time. Pharmaceutical cargo is shipped in standard dry containers with temperature monitoring for heat-sensitive products. Multiple shipping lines serve the India-Manila route with weekly departures, ensuring consistent supply chain reliability.",
                  ],
                  [
                    "Destination: Manila International Container Terminal",
                    "Pharmaceutical imports arrive at Manila — typically at Manila International Container Terminal (MICT) or Manila South Harbor. Philippine Bureau of Customs clearance and FDA PH verification at the port typically take 3-7 business days. The importer's customs broker handles port-side clearance with the documentation package we provide (commercial invoice, packing list, COA, CPR evidence).",
                  ],
                  [
                    "Packaging for tropical transit",
                    "All Philippines-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants and moisture barriers, tamper-evident sealing, and batch identification. Packaging is designed for tropical transit conditions and the Philippines' high-humidity environment. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-Philippines corridor.",
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
              PHILIPPINES EXPORT Q&amp;A
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
              <Link href="/export/indonesia/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Indonesia
              </Link>
              <Link href="/export/vietnam/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Vietnam
              </Link>
              <Link href="/export/cambodia/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Cambodia
              </Link>
              <Link href="/export/laos/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Laos
              </Link>
              <Link href="/export/malaysia/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Malaysia
              </Link>
              <Link href="/export/thailand/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Thailand
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* CTA */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-t border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              START YOUR PHILIPPINES EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Philippines import
              requirements — FDA PH documentation, Glutathione formulations,
              MOQ, pricing, and shipping. We respond within 48&nbsp;hours.
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
                href="https://wa.me/919729977795?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20the%20Philippines.%20Please%20share%20details."
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

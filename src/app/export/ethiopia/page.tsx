import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification accepted by EFDA",
    desc: "The Ethiopian Food and Drug Authority (EFDA) recognizes WHO-GMP certification as evidence of manufacturing quality compliance. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which streamlines the EFDA product registration process. WHO-GMP status is a baseline requirement for pharmaceutical imports into Ethiopia and reduces the scope of additional manufacturing site inspections by EFDA inspectors.",
  },
  {
    title: "Access to Africa's second-largest population",
    desc: "Ethiopia has a population exceeding 120 million — the second largest in Africa after Nigeria. This massive population, combined with significant unmet healthcare needs, represents one of the largest pharmaceutical market opportunities on the continent. The Ethiopian government's healthcare expansion agenda — including the Health Sector Transformation Plan — is driving increased demand for quality pharmaceutical and nutraceutical products across urban and rural areas.",
  },
  {
    title: "Five international certifications including Halal",
    desc: "Beyond WHO-GMP, our facility holds FSSAI, GMP, HACCP, and Halal certifications. Ethiopia has a significant Muslim population (approximately 34%) — Halal certification is important for distribution in eastern Ethiopia (Somali, Harari, and Dire Dawa regions) and for cross-border trade to Djibouti and Somalia. This multi-certification profile covers EFDA requirements and importer needs across different market segments.",
  },
  {
    title: "Competitive pricing for the Ethiopian market",
    desc: "Ethiopia is a highly price-sensitive pharmaceutical market where landed cost determines commercial viability. Our Haryana facility operates with lower overhead than manufacturers in Mumbai, Hyderabad, or Ahmedabad. Ethiopia's government frequently sources essential medicines through competitive tender processes — our pricing structure enables Ethiopian importers and distributors to compete effectively in both retail and institutional tender channels.",
  },
  {
    title: "Flexible MOQ for market entry",
    desc: "We understand that Ethiopian importers — particularly those registering new products with EFDA — need flexibility in initial order sizes. We support pilot-volume orders for market testing and EFDA sample submission, with the ability to scale to full-container loads once product registration and market demand are established. This is particularly valuable for importers entering new therapeutic categories or expanding their nutraceutical portfolio in Ethiopia's growing pharmacy retail channel.",
  },
];

const efdaSteps = [
  [
    "Appoint a local authorized agent",
    "EFDA requires all imported pharmaceutical and nutraceutical products to be represented by a locally authorized agent or company registered in Ethiopia. The local agent must hold a valid EFDA import license and is responsible for the product registration application, EFDA correspondence, and post-market surveillance obligations. This local partnership is mandatory before any product registration can proceed.",
  ],
  [
    "Manufacturer GMP inspection by EFDA",
    "EFDA may conduct a GMP inspection of the foreign manufacturing facility as part of the product registration process. EFDA inspectors may visit the manufacturing site to verify WHO-GMP compliance, production processes, quality control systems, and documentation practices. Our WHO-GMP certification significantly reduces the scope of inspection, but we welcome and facilitate EFDA inspection visits to our Jind, Haryana facility when required.",
  ],
  [
    "Submit CTD-format dossier",
    "EFDA follows the CTD (Common Technical Document) format for product registration submissions. The dossier includes modules covering administrative information, quality (chemistry, manufacturing, controls), safety data, efficacy information, and product labeling. Admetus prepares the complete Module 3 (Quality) documentation including manufacturing process validation, analytical methods, stability data under ICH Zone IVa conditions, and Certificate of Analysis templates.",
  ],
  [
    "Provide Certificate of Pharmaceutical Product (WHO format)",
    "EFDA requires a Certificate of Pharmaceutical Product (CPP) in WHO format issued by the Central Drugs Standard Control Organisation (CDSCO) of India. The CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in the country of origin. Admetus coordinates the CPP application with CDSCO and provides the authenticated certificate as part of the registration package.",
  ],
  [
    "Pre-registration laboratory analysis",
    "EFDA requires laboratory analysis of product samples at the Ethiopian Public Health Institute (EPHI) laboratory or at an EFDA-approved laboratory. Testing covers identity, assay, dissolution, microbial limits, heavy metals, and compliance with pharmacopoeial specifications. We provide the required sample quantities with full Certificate of Analysis documentation to facilitate the laboratory evaluation process.",
  ],
  [
    "Import permit and customs clearance",
    "Once product registration is approved, each import shipment requires an import permit from EFDA. Because Ethiopia is landlocked, all imports arrive via Djibouti port and are transported overland to Addis Ababa. The Ethiopian importer's clearing agent processes the import permit application with the documentation package we provide — commercial invoice, packing list, COA, and EFDA registration evidence. Customs clearance is handled through the Ethiopian Customs Commission.",
  ],
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Vitamin D deficiency is a significant health concern in Ethiopia, particularly among women and children in highland areas where traditional clothing provides skin coverage. The high-dose 60,000 IU softgel format is preferred for therapeutic loading doses, with weekly dosing protocols gaining adoption in Ethiopian clinical practice. Addis Ababa's major hospitals and pharmacies increasingly stock high-dose Vitamin D3 for deficiency treatment, immune support, and bone health in a population with widespread deficiency.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Non-communicable diseases — particularly cardiovascular disease, hypertension, and diabetes — are a rapidly growing health burden in Ethiopia. Urbanization and dietary changes in Addis Ababa and other major cities are driving NCD prevalence. Omega-3 softgel capsules are increasingly recommended by Ethiopian healthcare providers, with growing availability through pharmacy retail channels in Addis Ababa, Dire Dawa, Hawassa, and other urban centers.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Micronutrient deficiency is one of Ethiopia's most critical health challenges — iron, zinc, Vitamin A, iodine, and folate deficiencies are widespread, particularly among women of reproductive age and children under five. Multivitamin softgel capsules serve both the institutional market (government health programs, NGO nutrition interventions, UNICEF-supported programs) and the growing pharmacy retail channel. Ethiopia's Health Extension Program is expanding access to essential nutritional supplements across rural communities.",
  },
  {
    name: "Antioxidant Formulations (Lycopene + Grape Seed Extract)",
    relevance: "Preventive health awareness is growing in Ethiopia's expanding urban middle class, driven by increasing NCD burden and health education campaigns. Antioxidant formulations targeting cardiovascular protection, immune support, and prostate health (Lycopene) are gaining traction in Addis Ababa's pharmacy retail market as Ethiopian consumers increasingly adopt preventive supplementation practices.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations serve Ethiopia's aging population and women's health segment. Calcium deficiency and osteoporosis are under-diagnosed but increasingly recognized in Ethiopian clinical practice. The Calcitriol-Calcium-K2 combination is relevant for post-menopausal women and elderly patients, with prescriptions increasing at major referral hospitals in Addis Ababa, Jimma, Gondar, and Mekelle.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by EFDA for product registration and by Ethiopian importers for each shipment's customs clearance.",
  },
  {
    doc: "Certificate of Pharmaceutical Product (WHO Format)",
    desc: "Issued by India's CDSCO in WHO format, the CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in India. EFDA requires a WHO-format CPP as part of the product registration dossier. Admetus coordinates the CPP application with CDSCO.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. EFDA requires WHO-GMP as baseline evidence of manufacturing quality — this certificate is a key document in the EFDA registration dossier and may reduce the scope of an EFDA facility inspection.",
  },
  {
    doc: "CTD-Format Quality Dossier (Module 3)",
    desc: "The Common Technical Document Module 3 (Quality) section includes manufacturing process description, validation data, analytical method details, stability study results under ICH Zone IVa conditions, and product specifications. Admetus prepares this module for the Ethiopian importer to include in their EFDA registration submission.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific products. Important for distribution in Ethiopia's eastern Muslim-majority regions (Somali, Harari, Dire Dawa) and essential for cross-border trade to Djibouti and Somalia through the Djibouti Corridor.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF Djibouti pricing, HS codes, tariff classifications, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by the Ethiopian Customs Commission for import duty assessment and clearance at Modjo Dry Port or Addis Ababa.",
  },
];

const faqs = [
  {
    q: "What is the EFDA registration process for importing softgels to Ethiopia?",
    a: "The Ethiopian Food and Drug Authority (EFDA) is Ethiopia's pharmaceutical regulatory body. All imported pharmaceutical and nutraceutical products must be registered with EFDA before sale in Ethiopia. The process involves: appointing a local authorized agent with EFDA import license, submitting a CTD-format registration dossier, providing a WHO-GMP certificate and Certificate of Pharmaceutical Product (WHO format) from CDSCO India, and submitting product samples for laboratory analysis at the Ethiopian Public Health Institute (EPHI). EFDA may also conduct a GMP inspection of the manufacturing facility. Registration typically takes 8-14 months. Admetus provides the complete manufacturer documentation package for EFDA registration.",
  },
  {
    q: "What documentation does Admetus provide for Ethiopian import?",
    a: "We provide the complete manufacturer documentation package for EFDA registration: Certificate of Analysis (batch-specific), WHO-GMP certificate, coordination for Certificate of Pharmaceutical Product (WHO format) from CDSCO, CTD Module 3 quality dossier (manufacturing process, validation, analytical methods, stability data for ICH Zone IVa), product specifications, Halal certificate, and commercial export documents (invoice, packing list, HS codes, tariff classifications). We also provide product samples for EPHI laboratory evaluation upon request.",
  },
  {
    q: "How long does shipping take from India to Ethiopia?",
    a: "Because Ethiopia is landlocked, all sea freight enters via Djibouti port. Sea freight from JNPT (Mumbai) or Mundra Port to Djibouti takes approximately 10-14 days ocean transit time. From Djibouti port, cargo is transported overland to Addis Ababa via the Djibouti-Ethiopia road corridor (approximately 900km, 2-4 days by truck). Customs clearance at Modjo Dry Port or Addis Ababa typically takes 5-10 business days depending on documentation completeness and EFDA verification. Total transit from factory dispatch to warehouse delivery in Addis Ababa is typically 25-40 days.",
  },
  {
    q: "What is the MOQ for Ethiopia export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. For initial orders — particularly those tied to EFDA registration and market testing — we offer pilot volumes. Once EFDA registration is secured and market demand is established, we support full 20ft and 40ft container loads for ongoing supply. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Does Ethiopia have foreign exchange restrictions affecting pharma imports?",
    a: "Yes. Ethiopia has foreign exchange controls managed by the National Bank of Ethiopia. Pharmaceutical importers must obtain foreign exchange allocation through their commercial bank to pay for imports. Essential medicines and health products typically receive priority in foreign exchange allocation. Your local Ethiopian agent will manage the forex application process. Admetus provides all required documentation — proforma invoice, commercial invoice, COA, and registration evidence — to support the forex allocation application.",
  },
  {
    q: "Is Admetus Halal certified for the Ethiopian market?",
    a: "Yes. Admetus Lifesciences holds Halal certification for its manufacturing facility and product range. Halal certification is important for the Ethiopian market — approximately 34% of Ethiopia's population is Muslim, with concentrations in the Somali, Harari, Afar, and Dire Dawa regions. Additionally, Halal certification is essential for cross-border distribution from Ethiopia to Djibouti and Somalia. All our softgel formulations can be supplied with Halal certification documentation.",
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
      name: "Ethiopia",
      item: "https://www.admetuslifesciences.com/export/ethiopia/",
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

export default function EthiopiaPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Ethiopia — WHO-GMP certified, EFDA documentation ready"
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
            India &rarr; Ethiopia
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;ETHIOPIA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            Ethiopian importers with EFDA-ready documentation, Djibouti
            corridor logistics, competitive pricing, and flexible
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
                ETHIOPIA&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Ethiopia is Africa&apos;s second most populous nation with over
                120 million people — and one of the continent&apos;s fastest
                growing pharmaceutical markets. Ethiopian pharmaceutical
                imports from India total approximately $120 million annually,
                reflecting the country&apos;s massive healthcare infrastructure
                expansion and deepening trade relationship with Indian
                pharmaceutical manufacturers. India is one of Ethiopia&apos;s
                most important pharmaceutical supplier nations.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Ethiopia&apos;s government has made healthcare a national
                priority through the Health Sector Transformation Plan (HSTP),
                which is driving massive investment in hospital construction,
                primary healthcare expansion, and pharmaceutical supply chain
                development. The country is building new hospitals, expanding
                the Health Extension Worker program to rural areas, and
                increasing pharmaceutical procurement budgets. This top-down
                investment is creating sustained demand for quality
                pharmaceutical and nutraceutical products.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The Ethiopian Food and Drug Authority (EFDA) regulates all
                pharmaceutical and nutraceutical imports into Ethiopia. EFDA
                registration follows a structured process requiring a local
                authorized agent, CTD-format dossier submission, WHO-GMP
                certificate verification, Certificate of Pharmaceutical
                Product (WHO format) from CDSCO India, and pre-registration
                laboratory analysis at the Ethiopian Public Health Institute
                (EPHI). Indian manufacturers with WHO-GMP certification have
                an established pathway through this regulatory framework.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Ethiopia&apos;s disease burden spans both infectious and
                non-communicable diseases. While malaria, tuberculosis, and
                HIV/AIDS remain significant, NCDs — cardiovascular disease,
                diabetes, cancer — are rapidly growing, particularly in urban
                areas like Addis Ababa, Dire Dawa, and Hawassa. Micronutrient
                deficiency is widespread, especially among women and children.
                This dual burden drives demand for both therapeutic and
                preventive nutraceutical products: multivitamins, Omega-3,
                Vitamin D3, and bone health formulations.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* EFDA Regulatory Section */}
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
                  EFDA REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The Ethiopian Food and Drug Authority (EFDA) regulates all
                  pharmaceutical and nutraceutical imports into Ethiopia. The
                  registration process requires a local authorized agent, CTD
                  dossier, GMP verification, and laboratory&nbsp;analysis.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {efdaSteps.map(([title, desc], i) => (
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

      {/* Djibouti Corridor */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <span className="label-text text-[var(--gold)]">
                Strategic Position
              </span>
              <h2
                className="mt-3 display-section text-[var(--foreground)] mb-4"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
              >
                THE DJIBOUTI&ndash;ETHIOPIA TRADE&nbsp;CORRIDOR
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Ethiopia is a landlocked nation — all sea freight imports
                enter via the Port of Djibouti, located approximately 900
                kilometers from Addis Ababa. The Djibouti-Ethiopia road
                corridor is one of Africa&apos;s most important trade routes,
                handling over 95% of Ethiopia&apos;s international trade.
                Pharmaceutical imports follow this established corridor with
                regular trucking services connecting Djibouti port to
                Ethiopia&apos;s major commercial centers.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Ethiopia has invested heavily in its logistics infrastructure
                to reduce transit times and costs. The Modjo Dry Port —
                located approximately 73km southeast of Addis Ababa — serves
                as the primary inland customs clearance point for
                containerized cargo arriving from Djibouti. Ethiopian
                importers increasingly clear goods at Modjo rather than at the
                Djibouti border, streamlining the import process and reducing
                port congestion.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                For Admetus, the Djibouti corridor is a well-understood
                logistics pathway. We structure our documentation, packaging,
                and shipping to align with the specific requirements of
                Ethiopian customs clearance at Modjo Dry Port, including HS
                code classification, EFDA documentation, and commercial
                invoicing requirements for the Ethiopian Customs Commission.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Admetus */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">
              Why Admetus for Ethiopia
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY ETHIOPIAN IMPORTERS CHOOSE&nbsp;US
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
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">
              Product Range
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              SOFTGEL FORMULATIONS FOR THE ETHIOPIAN&nbsp;MARKET
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
              under your brand name for the Ethiopian market.
              See our{" "}
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
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">
              Export Documentation
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              DOCUMENTATION FOR EFDA &amp;&nbsp;CUSTOMS
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
      <section className="py-20">
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
                  INDIA TO ETHIOPIA SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-Ethiopia shipping corridor routes through Djibouti
                  port, with overland transport to Addis Ababa via the
                  established Djibouti-Ethiopia trade&nbsp;corridor.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: JNPT (Mumbai) or Mundra Port",
                    "Products are dispatched from our Jind, Haryana facility to JNPT port in Mumbai (approximately 1,200km by road, 2-3 days transit) or Mundra Port in Gujarat. Both ports have regular container services to Djibouti. Cargo is consolidated, inspected, and cleared for export at the port's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Sea freight: India to Djibouti",
                    "Container vessel services from JNPT/Mundra to Djibouti port operate on regular schedules with 10-14 days ocean transit time. Djibouti port is the primary entry point for all Ethiopian imports. Pharmaceutical cargo is shipped in standard dry containers with temperature monitoring for heat-sensitive products. Multiple shipping lines serve the India-Djibouti route.",
                  ],
                  [
                    "Overland: Djibouti to Addis Ababa",
                    "From Djibouti port, containerized cargo is transported by truck approximately 900km to Addis Ababa or cleared at Modjo Dry Port (73km from Addis). The Djibouti-Ethiopia road corridor handles over 95% of Ethiopia's international trade. Overland transit typically takes 2-4 days depending on border processing and road conditions. Ethiopian customs clearance through the Ethiopian Customs Commission typically takes 5-10 business days.",
                  ],
                  [
                    "Packaging for transit",
                    "All Ethiopia-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants, tamper-evident sealing, and batch identification. Packaging is designed for the multi-modal transit (sea + overland) and Ethiopia's varied climate zones. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-Djibouti-Ethiopia corridor.",
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
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">
              Frequently Asked
            </span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              ETHIOPIA EXPORT Q&amp;A
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
      <section className="py-20 border-t border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              START YOUR ETHIOPIA EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Ethiopia import
              requirements — EFDA documentation, formulation selection, MOQ,
              pricing, and shipping via the Djibouti corridor. We respond
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
                href="https://wa.me/919729977795?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Ethiopia.%20Please%20share%20details."
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

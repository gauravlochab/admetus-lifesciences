import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification accepted by TFDA",
    desc: "The Tanzania Food and Drugs Authority (TFDA) recognizes WHO-GMP certification as evidence of manufacturing quality compliance. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which streamlines the TFDA product registration process. WHO-GMP status is a baseline requirement for pharmaceutical imports into Tanzania and reduces the scope of additional manufacturing site inspections by TFDA inspectors.",
  },
  {
    title: "Dar es Salaam — gateway to Central and East Africa",
    desc: "Tanzania's Dar es Salaam port is the primary import gateway for landlocked Central and East African nations including Burundi, the Democratic Republic of Congo, Zambia, and Malawi through the Central Corridor trade route. A single Tanzanian import partnership opens distribution access to multiple landlocked markets. Tanzanian pharmaceutical distributors routinely serve cross-border markets, making Tanzania a strategic entry point for Indian manufacturers targeting the broader region.",
  },
  {
    title: "Five international certifications including Halal",
    desc: "Beyond WHO-GMP, our facility holds FSSAI, GMP, HACCP, and Halal certifications. Tanzania's coastal population, including Zanzibar and Dar es Salaam, is predominantly Muslim — Halal certification is essential for distribution in these regions and for cross-border trade to the Comoros and other Muslim-majority East African markets. This multi-certification profile covers TFDA requirements and importer needs across different market segments.",
  },
  {
    title: "Competitive pricing for the Tanzanian market",
    desc: "Tanzania is a highly price-sensitive pharmaceutical market where landed cost determines commercial viability. Our Haryana facility operates with lower overhead than manufacturers in Mumbai, Hyderabad, or Ahmedabad. Combined with Tanzania's zero or reduced import duty on essential medicines under the East African Community (EAC) Common External Tariff, our pricing structure enables Tanzanian distributors to maintain competitive retail margins across pharmacy, hospital, and institutional channels.",
  },
  {
    title: "Flexible MOQ for market entry",
    desc: "We understand that Tanzanian importers — particularly those registering new products with TFDA — need flexibility in initial order sizes. We support pilot-volume orders for market testing and TFDA sample submission, with the ability to scale to full-container loads once product registration and market demand are established. This is particularly valuable for importers entering new therapeutic categories or expanding into cross-border Central African distribution.",
  },
];

const tfdaSteps = [
  [
    "Appoint a local authorized representative",
    "TFDA requires all imported pharmaceutical and nutraceutical products to be represented by a locally authorized agent or company. The local representative must hold a valid TFDA license and is responsible for the product registration application, TFDA correspondence, and post-market surveillance obligations. This local partnership is mandatory before any product registration can proceed.",
  ],
  [
    "Manufacturer GMP inspection by TFDA",
    "TFDA may conduct a GMP inspection of the foreign manufacturing facility as part of the product registration process. TFDA inspectors may visit the manufacturing site to verify WHO-GMP compliance, production processes, quality control systems, and documentation practices. Our WHO-GMP certification significantly reduces the scope of inspection, but we welcome and facilitate TFDA inspection visits to our Jind, Haryana facility when required.",
  ],
  [
    "Submit CTD-format dossier via TFDA online portal",
    "TFDA follows the CTD (Common Technical Document) format for product registration submissions. The dossier includes modules covering administrative information, quality (chemistry, manufacturing, controls), safety data, efficacy information, and product labeling. Admetus prepares the complete Module 3 (Quality) documentation including manufacturing process validation, analytical methods, stability data under ICH Zone IVa conditions, and Certificate of Analysis templates.",
  ],
  [
    "Provide Certificate of Pharmaceutical Product (WHO format)",
    "TFDA requires a Certificate of Pharmaceutical Product (CPP) in WHO format issued by the Central Drugs Standard Control Organisation (CDSCO) of India. The CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in the country of origin. Admetus coordinates the CPP application with CDSCO and provides the authenticated certificate as part of the registration package.",
  ],
  [
    "Pre-registration laboratory analysis",
    "TFDA requires laboratory analysis of product samples at the Tanzania Medicines and Medical Devices Authority laboratory or at a TFDA-approved laboratory. Testing covers identity, assay, dissolution, microbial limits, heavy metals, and compliance with pharmacopoeial specifications. We provide the required sample quantities with full Certificate of Analysis documentation to facilitate the laboratory evaluation process.",
  ],
  [
    "Import permit and customs clearance",
    "Once product registration is approved, each import shipment requires an import permit from TFDA. The Tanzanian importer's clearing agent processes the import permit application with the documentation package we provide — commercial invoice, packing list, COA, and TFDA registration evidence. Customs clearance at Dar es Salaam port is handled through the Tanzania Customs Integrated System (TANCIS).",
  ],
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Vitamin D deficiency is a growing health concern in Tanzania, particularly among urban populations and women who cover skin for religious or cultural reasons. The high-dose 60,000 IU softgel format is preferred for therapeutic loading doses, with weekly dosing protocols gaining adoption in Tanzanian clinical practice. Dar es Salaam's major hospitals and pharmacies increasingly stock high-dose Vitamin D3 for deficiency treatment, immune support, and bone health.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Non-communicable diseases — particularly cardiovascular disease, hypertension, and diabetes — are an escalating health burden in Tanzania. The WHO estimates that NCDs account for a growing percentage of deaths in Tanzania, with cardiovascular disease as a leading category. Omega-3 softgel capsules are increasingly recommended by Tanzanian healthcare providers and are available through pharmacy retail in Dar es Salaam, Arusha, Mwanza, and other major urban centers.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Micronutrient deficiency remains a critical health challenge in Tanzania — iron, zinc, Vitamin A, and folate deficiencies are widespread, particularly among women of reproductive age and children under five. Multivitamin softgel capsules serve both the institutional market (government health programs, NGO nutrition interventions) and the growing pharmacy retail channel. Tanzania's healthcare infrastructure expansion is driving increased access to essential nutritional supplements.",
  },
  {
    name: "Antioxidant Formulations (Lycopene + Grape Seed Extract)",
    relevance: "Preventive health and wellness awareness is growing in Tanzania's urban middle class, driven by increasing NCD burden and health education campaigns. Antioxidant formulations targeting cardiovascular protection, immune support, and prostate health (Lycopene) are gaining traction in Dar es Salaam's pharmacy retail market and among health-conscious Tanzanian consumers who are shifting toward preventive supplementation.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations serve Tanzania's aging population and women's health segment. Osteoporosis and calcium deficiency are under-diagnosed but increasingly recognized in Tanzanian clinical practice. The Calcitriol-Calcium-K2 combination is relevant for post-menopausal women and elderly patients in Tanzania's growing urban healthcare infrastructure, with prescriptions increasing across major referral hospitals.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by TFDA for product registration and by Tanzanian importers for each shipment's customs clearance at Dar es Salaam port.",
  },
  {
    doc: "Certificate of Pharmaceutical Product (WHO Format)",
    desc: "Issued by India's CDSCO in WHO format, the CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in India. TFDA requires a WHO-format CPP as part of the product registration dossier. Admetus coordinates the CPP application with CDSCO.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. TFDA requires WHO-GMP as baseline evidence of manufacturing quality — this certificate is a key document in the TFDA registration dossier and may reduce the scope of a TFDA facility inspection.",
  },
  {
    doc: "CTD-Format Quality Dossier (Module 3)",
    desc: "The Common Technical Document Module 3 (Quality) section includes manufacturing process description, validation data, analytical method details, stability study results under ICH Zone IVa conditions, and product specifications. Admetus prepares this module for the Tanzanian importer to include in their TFDA registration submission.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific products. Essential for distribution in Tanzania's coastal Muslim-majority regions including Zanzibar, Dar es Salaam, and Tanga, and for cross-border trade to the Comoros and other Muslim-majority markets accessible through Dar es Salaam.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF Dar es Salaam pricing, HS codes, EAC tariff classifications, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by Tanzania Revenue Authority (TRA) for import duty assessment and TANCIS clearance.",
  },
];

const faqs = [
  {
    q: "What is the TFDA registration process for importing softgels to Tanzania?",
    a: "The Tanzania Food and Drugs Authority (TFDA) is Tanzania's pharmaceutical regulatory body. All imported pharmaceutical and nutraceutical products must be registered with TFDA before sale in Tanzania. The process involves: appointing a local authorized representative, submitting a CTD-format registration dossier via the TFDA online portal, providing a WHO-GMP certificate and Certificate of Pharmaceutical Product (WHO format) from CDSCO India, and submitting product samples for laboratory analysis. TFDA may also conduct a GMP inspection of the manufacturing facility. Registration typically takes 6-12 months and is valid for 5 years. Admetus provides the complete manufacturer documentation package for TFDA registration.",
  },
  {
    q: "What documentation does Admetus provide for Tanzanian import?",
    a: "We provide the complete manufacturer documentation package for TFDA registration: Certificate of Analysis (batch-specific), WHO-GMP certificate, coordination for Certificate of Pharmaceutical Product (WHO format) from CDSCO, CTD Module 3 quality dossier (manufacturing process, validation, analytical methods, stability data for ICH Zone IVa), product specifications, Halal certificate, and commercial export documents (invoice, packing list, HS codes, EAC tariff classifications). We also provide product samples for TFDA laboratory evaluation upon request.",
  },
  {
    q: "How long does shipping take from India to Dar es Salaam?",
    a: "Sea freight from JNPT (Mumbai) or Mundra Port to Dar es Salaam takes approximately 12-16 days ocean transit time. Dar es Salaam is East Africa's second-largest port and Tanzania's primary entry point for pharmaceutical imports. After port arrival, customs clearance through the Tanzania Customs Integrated System (TANCIS) typically takes 3-7 business days depending on documentation completeness and TFDA verification. Total transit from factory dispatch to warehouse delivery in Dar es Salaam is typically 22-32 days.",
  },
  {
    q: "Can Admetus products be distributed to landlocked countries from Tanzania?",
    a: "Yes. Tanzania's Dar es Salaam port is the primary import gateway for several landlocked Central and East African nations. The Central Corridor trade route connects Dar es Salaam to Burundi, the Democratic Republic of Congo (eastern regions), Zambia, and Malawi. Tanzanian pharmaceutical distributors routinely serve these cross-border markets. A single TFDA-registered product in Tanzania can be positioned for distribution across multiple landlocked markets, subject to each country's local registration requirements.",
  },
  {
    q: "What is the MOQ for Tanzania export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. For initial orders — particularly those tied to TFDA registration and market testing — we offer pilot volumes. Once TFDA registration is secured and market demand is established, we support full 20ft and 40ft container loads for ongoing supply. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Is Admetus Halal certified for the Tanzanian market?",
    a: "Yes. Admetus Lifesciences holds Halal certification for its manufacturing facility and product range. Halal certification is particularly important for the Tanzanian market — Tanzania's coastal regions including Zanzibar, Dar es Salaam, and Tanga have predominantly Muslim populations. Additionally, Halal certification is essential for cross-border distribution from Tanzania to the Comoros and other Muslim-majority markets in the Indian Ocean region. All our softgel formulations can be supplied with Halal certification documentation.",
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
      name: "Tanzania",
      item: "https://www.admetuslifesciences.com/export/tanzania/",
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

export default function TanzaniaPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Tanzania — WHO-GMP certified, TFDA documentation ready"
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
            India &rarr; Tanzania
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;TANZANIA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            Tanzanian importers with TFDA-ready documentation, Dar es Salaam
            gateway distribution, competitive pricing, and flexible
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
                TANZANIA&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Tanzania is a critical pharmaceutical market in East Africa —
                and India is one of its dominant suppliers. Tanzanian
                pharmaceutical imports from India total approximately $205
                million annually, reflecting the country&apos;s expanding
                healthcare infrastructure, growing population of over 65
                million, and deepening trade relationship with Indian
                pharmaceutical manufacturers.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Tanzania&apos;s strategic importance extends beyond its own
                population. Dar es Salaam — Tanzania&apos;s primary port — is
                the import gateway for several landlocked Central and East
                African nations. Pharmaceutical cargo entering through Dar es
                Salaam is distributed via the Central Corridor to Burundi, the
                Democratic Republic of Congo (eastern regions), Zambia, and
                Malawi. This makes Tanzania a strategic entry point for Indian
                manufacturers seeking access to landlocked markets that are
                otherwise difficult to reach directly.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The Tanzania Food and Drugs Authority (TFDA) regulates all
                pharmaceutical and nutraceutical imports into Tanzania. TFDA
                registration follows a structured process requiring a local
                authorized representative, CTD-format dossier submission via
                the TFDA online portal, WHO-GMP certificate verification,
                Certificate of Pharmaceutical Product (WHO format) from CDSCO
                India, and pre-registration laboratory analysis. Indian
                manufacturers with WHO-GMP certification have an established
                pathway through this regulatory framework.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Tanzania&apos;s disease burden is evolving. While infectious
                diseases — malaria, HIV/AIDS, tuberculosis — remain the
                leading health challenges, non-communicable diseases including
                cardiovascular disease, diabetes, and cancer are rapidly
                growing, driven by urbanization and dietary shifts. This
                epidemiological transition is driving demand for nutraceutical
                supplements: Omega-3 for cardiovascular health, multivitamins
                for micronutrient deficiency, Vitamin D3 for immune support,
                and bone health formulations. Tanzania&apos;s government
                healthcare expansion agenda is further increasing access to
                essential health products across the country.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* TFDA Regulatory Section */}
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
                  TFDA REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The Tanzania Food and Drugs Authority (TFDA) regulates all
                  pharmaceutical and nutraceutical imports into Tanzania. The
                  registration process requires a local authorized
                  representative, CTD dossier, GMP verification, and
                  laboratory&nbsp;analysis.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {tfdaSteps.map(([title, desc], i) => (
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

      {/* Gateway to Central/East Africa */}
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
                TANZANIA — GATEWAY TO CENTRAL &amp; EAST&nbsp;AFRICA
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Tanzania&apos;s Dar es Salaam port is one of the largest and
                most important ports in East Africa. Pharmaceutical imports
                entering through Dar es Salaam are distributed across the
                region via the Central Corridor trade route — serving
                landlocked nations including Burundi, the Democratic Republic
                of Congo (eastern regions), Zambia, and Malawi. This makes
                Tanzania a strategic entry point for any Indian pharmaceutical
                manufacturer targeting landlocked Central African markets.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The East African Community (EAC) — comprising Tanzania, Kenya,
                Uganda, Rwanda, Burundi, South Sudan, and the Democratic
                Republic of Congo — has a combined population exceeding 300
                million. The EAC Common External Tariff provides zero or
                reduced duty on essential medicines, making Dar es Salaam an
                efficient and cost-effective entry point for pharmaceutical
                distribution across the region. Tanzanian distributors have
                established cross-border supply chains and regulatory
                relationships throughout the Central Corridor.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                For Admetus, this means that a single Tanzanian import
                partnership is not just a Tanzanian opportunity — it is a
                Central and East African opportunity. We support importers who
                are positioning softgel capsule distribution across the
                broader region, with documentation and pricing structured for
                multi-market supply via the Dar es Salaam gateway.
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
              Why Admetus for Tanzania
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY TANZANIAN IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE TANZANIAN&nbsp;MARKET
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
              under your brand name for the Tanzanian and East African market.
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
              DOCUMENTATION FOR TFDA &amp;&nbsp;CUSTOMS
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
                  INDIA TO TANZANIA SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-Tanzania shipping corridor is well-established for
                  pharmaceutical cargo, with regular container vessel services
                  from Mumbai and Mundra to Dar es&nbsp;Salaam.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: JNPT (Mumbai) or Mundra Port",
                    "Products are dispatched from our Jind, Haryana facility to JNPT port in Mumbai (approximately 1,200km by road, 2-3 days transit) or Mundra Port in Gujarat. Both ports have regular container services to Dar es Salaam. Cargo is consolidated, inspected, and cleared for export at the port's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Sea freight: India to Dar es Salaam",
                    "Container vessel services from JNPT/Mundra to Dar es Salaam operate on regular schedules with 12-16 days ocean transit time. Pharmaceutical cargo is shipped in standard dry containers with temperature monitoring for heat-sensitive products. Multiple shipping lines serve the India-Dar es Salaam route with weekly departures, ensuring consistent supply chain reliability for Tanzanian importers.",
                  ],
                  [
                    "Destination: Dar es Salaam Port, Tanzania",
                    "Pharmaceutical imports arrive at Dar es Salaam — one of East Africa's largest ports and the primary entry point for Tanzania and landlocked Central African nations. Tanzania Revenue Authority (TRA) customs clearance and TFDA verification are processed through the Tanzania Customs Integrated System (TANCIS), typically taking 3-7 business days. The importer's clearing agent handles port-side clearance with the documentation package we provide. From Dar es Salaam, cargo can be transported inland or to cross-border destinations via the Central Corridor.",
                  ],
                  [
                    "Packaging for transit",
                    "All Tanzania-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants, tamper-evident sealing, and batch identification. Packaging is designed for tropical transit conditions and East Africa's warm climate. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-Tanzania corridor.",
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
              TANZANIA EXPORT Q&amp;A
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
              START YOUR TANZANIA EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Tanzania and Central
              Africa import requirements — TFDA documentation, formulation
              selection, MOQ, pricing, and shipping to Dar es Salaam. We
              respond within 48&nbsp;hours.
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
                href="https://wa.me/919729977795?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Tanzania.%20Please%20share%20details."
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

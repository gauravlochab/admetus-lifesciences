import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification aligned with SAHPRA requirements",
    desc: "The South African Health Products Regulatory Authority (SAHPRA) requires foreign pharmaceutical manufacturers to demonstrate GMP compliance as part of the product registration process. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which aligns with SAHPRA's GMP expectations and facilitates the regulatory dossier review. WHO-GMP status is a critical baseline for any Indian manufacturer seeking to supply the South African market.",
  },
  {
    title: "Africa's largest pharmaceutical import market from India",
    desc: "South Africa imports approximately $669 million in pharmaceutical products from India annually, making it the single largest African destination for Indian pharma exports. This established trade corridor means well-developed logistics infrastructure, experienced customs brokers, and a regulatory framework that Indian manufacturers can navigate with proper documentation. Admetus leverages this mature India-South Africa pharma trade relationship to ensure efficient market entry for our softgel capsule range.",
  },
  {
    title: "Five international certifications including Halal",
    desc: "Beyond WHO-GMP, our facility holds FSSAI, GMP, HACCP, and Halal certifications. South Africa has a significant Muslim population — approximately 2-3% of the total population concentrated in the Western Cape and KwaZulu-Natal provinces. Halal certification is important for distribution in these regions and positions our products for broader Southern African markets with Muslim populations including Mozambique and Tanzania.",
  },
  {
    title: "Competitive pricing for the South African market",
    desc: "South Africa is a sophisticated pharmaceutical market where importers evaluate landed cost, quality, and reliability together. Our Haryana facility operates with lower overhead than manufacturers in Mumbai, Hyderabad, or Ahmedabad, allowing competitive CIF Durban/Cape Town pricing. Combined with South Africa's trade agreements and tariff structures for pharmaceutical imports, our pricing enables South African distributors to maintain healthy retail margins across pharmacy and institutional channels.",
  },
  {
    title: "Flexible MOQ for market entry and registration",
    desc: "We understand that South African importers — particularly those registering new products with SAHPRA — need flexibility in initial order sizes. We support pilot-volume orders for SAHPRA sample submission and market testing, with the ability to scale to full-container loads once product registration and market demand are established. This is particularly valuable for importers expanding into new therapeutic categories or building distribution networks across Southern Africa.",
  },
];

const sahpraSteps = [
  [
    "Appoint a South African responsible pharmacist",
    "SAHPRA requires all imported pharmaceutical and health products to be represented by a locally registered responsible pharmacist or authorized importer. The South African entity must hold appropriate licenses from the South African Pharmacy Council and is responsible for the product registration application, SAHPRA correspondence, pharmacovigilance obligations, and post-market surveillance. This local partnership is mandatory before any product registration can proceed.",
  ],
  [
    "Manufacturer GMP compliance verification",
    "SAHPRA conducts rigorous GMP compliance assessment of foreign manufacturing facilities as part of the product registration process. This may include a desk review of GMP documentation or an on-site inspection of the manufacturing facility by SAHPRA inspectors. Our WHO-GMP certification provides a strong foundation for this assessment. Admetus welcomes and facilitates SAHPRA inspection visits to our Jind, Haryana facility when required, with all documentation prepared in English.",
  ],
  [
    "Submit CTD-format registration dossier",
    "SAHPRA follows the CTD (Common Technical Document) format for product registration — aligned with international ICH guidelines. The dossier includes five modules covering administrative information, quality (chemistry, manufacturing, controls), safety data, efficacy information, and product labeling compliant with South African requirements. Admetus prepares the complete Module 3 (Quality) documentation including manufacturing process validation, analytical methods, stability data under ICH Zone IVa conditions, and Certificate of Analysis templates.",
  ],
  [
    "Provide Certificate of Pharmaceutical Product (WHO format)",
    "SAHPRA requires a Certificate of Pharmaceutical Product (CPP) in WHO format issued by the Central Drugs Standard Control Organisation (CDSCO) of India. The CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in the country of origin. Admetus coordinates the CPP application with CDSCO and provides the authenticated certificate as part of the registration package.",
  ],
  [
    "Product quality testing and evaluation",
    "SAHPRA requires laboratory analysis of product samples at approved testing facilities in South Africa. Testing covers identity, assay, dissolution, microbial limits, heavy metals, and compliance with pharmacopoeial specifications (South African Pharmacopoeia, BP, or USP). We provide the required sample quantities with full Certificate of Analysis documentation to facilitate the laboratory evaluation process.",
  ],
  [
    "Import permit via SAHPRA and SARS customs",
    "Once product registration is approved, each import shipment requires documentation for clearance through the South African Revenue Service (SARS) customs system. The importer must obtain the necessary import permits from SAHPRA — including Form GW 12/44 for pharmaceutical products — and ensure HSN code compliance for correct tariff classification. The South African importer's clearing agent processes the customs documentation with the export paperwork we provide — commercial invoice, packing list, COA, and SAHPRA registration evidence.",
  ],
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Vitamin D deficiency is a documented health concern in South Africa, particularly among darker-skinned populations and urban dwellers with limited sun exposure despite the country's sunny climate. South African healthcare providers increasingly prescribe high-dose Vitamin D3 for deficiency treatment, immune support, and bone health. The 60,000 IU softgel format is preferred for therapeutic loading doses, with weekly dosing protocols becoming standard in South African clinical practice — particularly for patients with confirmed deficiency via blood testing.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Non-communicable diseases are the leading cause of death in South Africa, with cardiovascular disease, diabetes, and hypertension affecting millions. The WHO estimates that NCDs account for 51% of all deaths in South Africa — one of the highest rates on the African continent. Omega-3 softgel capsules are widely recommended by South African healthcare providers and are available through pharmacy retail chains including Dis-Chem, Clicks, and independent pharmacies across all nine provinces.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Micronutrient deficiency remains a significant health challenge in South Africa despite being an upper-middle-income country. Iron, zinc, Vitamin A, and folate deficiencies are widespread, particularly in rural areas and among lower-income populations. Multivitamin softgel capsules serve both the retail pharmacy market (Dis-Chem, Clicks, independent pharmacies) and institutional channels (government health programs, corporate wellness initiatives). South Africa's National Health Insurance rollout is expected to expand access to essential nutritional supplements.",
  },
  {
    name: "Antioxidant Formulations (Lycopene + Grape Seed Extract)",
    relevance: "South Africa has a well-developed wellness and preventive health market, driven by a health-conscious urban middle class and high NCD burden. Antioxidant formulations targeting cardiovascular protection, immune support, and prostate health (Lycopene) have established demand in South Africa's pharmacy retail market. The country's sophisticated consumer base understands preventive supplementation, making it one of Africa's most receptive markets for advanced nutraceutical formulations.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations serve South Africa's aging population and women's health segment. Osteoporosis is increasingly recognized as a significant health concern, particularly among post-menopausal women and the elderly. South Africa's orthopedic and endocrinology specialists regularly prescribe calcium-vitamin D-K2 combinations. The country's well-developed private healthcare infrastructure (Mediclinic, Netcare, Life Healthcare) supports specialist-driven prescribing of advanced bone health formulations.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by SAHPRA for product registration and by South African importers for each shipment's SARS customs clearance at Durban or Cape Town port.",
  },
  {
    doc: "Certificate of Pharmaceutical Product (WHO Format)",
    desc: "Issued by India's CDSCO in WHO format, the CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in India. SAHPRA requires a WHO-format CPP as part of the product registration dossier. Admetus coordinates the CPP application with CDSCO.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. SAHPRA requires GMP compliance as baseline evidence of manufacturing quality — this certificate is a key document in the SAHPRA registration dossier and supports the GMP compliance assessment process.",
  },
  {
    doc: "CTD-Format Quality Dossier (Module 3)",
    desc: "The Common Technical Document Module 3 (Quality) section includes manufacturing process description, validation data, analytical method details, stability study results under ICH Zone IVa conditions, and product specifications. Admetus prepares this module for the South African importer to include in their SAHPRA registration submission.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific products. Important for distribution to South Africa's Muslim communities concentrated in the Western Cape (Cape Town) and KwaZulu-Natal (Durban) provinces. Also essential for cross-border trade to Mozambique, Tanzania, and other Southern/East African markets with significant Muslim populations.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF Durban or Cape Town pricing, HS codes, South African tariff classifications, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by South African Revenue Service (SARS) for import duty assessment and customs clearance. Form GW 12/44 compliance documentation included.",
  },
];

const faqs = [
  {
    q: "What is the SAHPRA registration process for importing softgels to South Africa?",
    a: "The South African Health Products Regulatory Authority (SAHPRA) regulates all pharmaceutical and health product imports into South Africa. The registration process involves: appointing a local responsible pharmacist or authorized importer, submitting a CTD-format registration dossier, providing a WHO-GMP certificate and Certificate of Pharmaceutical Product (WHO format) from CDSCO India, undergoing GMP compliance verification (desk review or on-site inspection), and submitting product samples for laboratory analysis. Import permits including Form GW 12/44 are required for pharmaceutical products. SAHPRA registration is among the most rigorous in Africa. Admetus provides the complete manufacturer documentation package for SAHPRA registration.",
  },
  {
    q: "What documentation does Admetus provide for South African import?",
    a: "We provide the complete manufacturer documentation package for SAHPRA registration: Certificate of Analysis (batch-specific), WHO-GMP certificate, coordination for Certificate of Pharmaceutical Product (WHO format) from CDSCO, CTD Module 3 quality dossier (manufacturing process, validation, analytical methods, stability data for ICH Zone IVa), product specifications, Halal certificate, HSN code compliance documentation, and commercial export documents (invoice, packing list, HS codes, South African tariff classifications). We also provide product samples for SAHPRA laboratory evaluation upon request.",
  },
  {
    q: "What is the MOQ for South Africa export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. For initial orders — particularly those tied to SAHPRA registration and market testing — we offer pilot volumes. Once SAHPRA registration is secured and market demand is established, we support full 20ft and 40ft container loads for ongoing supply. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How long does shipping take from India to South Africa?",
    a: "Sea freight from JNPT (Mumbai) to Durban takes approximately 14-18 days ocean transit time. Durban is South Africa's largest and busiest port, handling the majority of the country's container traffic including pharmaceutical imports. Cape Town port is an alternative destination for Western Cape distribution. After port arrival, SARS customs clearance typically takes 3-7 business days depending on documentation completeness and SAHPRA verification. Total transit from factory dispatch to warehouse delivery is typically 25-35 days.",
  },
  {
    q: "Why is South Africa the largest African market for Indian pharma?",
    a: "South Africa imports approximately $669 million in pharmaceutical products from India annually — the largest volume of any African country. This is driven by several factors: South Africa has the most developed pharmaceutical market in Africa with sophisticated retail pharmacy chains (Dis-Chem, Clicks), a high NCD burden requiring ongoing medication and supplementation, well-established India-South Africa trade corridors, and a regulatory framework (SAHPRA) that, while rigorous, provides a clear pathway for WHO-GMP certified manufacturers. South Africa's position also makes it a gateway to the broader Southern African Development Community (SADC) region.",
  },
  {
    q: "Is Admetus Halal certified for the South African market?",
    a: "Yes. Admetus Lifesciences holds Halal certification for its manufacturing facility and product range. South Africa has a significant Muslim population concentrated in the Western Cape (Cape Town — largest Muslim community in South Africa) and KwaZulu-Natal (Durban) provinces. Halal certification is essential for distribution through halal-focused retailers and pharmacies serving these communities. Additionally, Halal certification supports cross-border distribution from South Africa to neighboring countries with Muslim populations. All our softgel formulations can be supplied with Halal certification documentation.",
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
      name: "South Africa",
      item: "https://www.admetuslifesciences.com/export/south-africa/",
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

export default function SouthAfricaPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to South Africa — WHO-GMP certified, SAHPRA documentation ready"
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
            India &rarr; South Africa
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;SOUTH&nbsp;AFRICA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            South African importers with SAHPRA-ready documentation, competitive
            pricing, Halal certification, and flexible
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
                SOUTH AFRICA&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                South Africa is the largest African market for Indian
                pharmaceutical exports — with approximately $669 million in
                pharma imports from India annually. This dominant trade
                relationship reflects South Africa&apos;s position as the most
                developed pharmaceutical market on the African continent, with
                sophisticated retail pharmacy chains, a robust private
                healthcare infrastructure, and a regulatory framework that is
                among the most rigorous in Africa.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                With a population of 60 million, South Africa has the highest
                per-capita pharmaceutical expenditure in Sub-Saharan Africa. The
                country&apos;s dual healthcare system — a well-resourced private
                sector alongside a public healthcare network serving the
                majority of the population — creates demand across both premium
                pharmacy retail (Dis-Chem, Clicks) and institutional channels
                (government hospitals, community health centres). South
                Africa&apos;s National Health Insurance (NHI) initiative is
                expected to further expand access to essential medicines and
                health products across the country.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The South African Health Products Regulatory Authority (SAHPRA)
                regulates all pharmaceutical and health product imports. SAHPRA
                is considered one of the strictest regulatory authorities in
                Africa — stricter than most other African countries. The
                registration process requires GMP compliance verification,
                CTD-format dossier submission, Certificate of Pharmaceutical
                Product (WHO format) from CDSCO India, product quality testing,
                and import permits including Form GW 12/44. Indian manufacturers
                with WHO-GMP certification have a recognized pathway through
                this regulatory framework, but the bar is high.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                South Africa&apos;s disease burden is dominated by
                non-communicable diseases — cardiovascular disease, diabetes,
                hypertension, and cancer account for 51% of all deaths.
                Simultaneously, the country faces a significant HIV/AIDS and
                tuberculosis burden that drives ongoing pharmaceutical demand.
                This dual disease burden creates sustained demand for both
                prescription medications and nutraceutical supplements: Omega-3
                for cardiovascular health, Vitamin D3 for immune support and
                bone health, multivitamins for micronutrient deficiency, and
                antioxidant formulations for preventive health — all areas where
                softgel capsule delivery is preferred by South African consumers
                and healthcare providers.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* SAHPRA Regulatory Section */}
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
                  SAHPRA REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The South African Health Products Regulatory Authority
                  (SAHPRA) regulates all pharmaceutical and health product
                  imports into South Africa. The registration process requires
                  a local responsible pharmacist, CTD dossier, GMP
                  verification, quality testing, and import&nbsp;permits.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {sahpraSteps.map(([title, desc], i) => (
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

      {/* Gateway to Southern Africa */}
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
                SOUTH AFRICA — GATEWAY TO SOUTHERN&nbsp;AFRICA
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                South Africa&apos;s Durban port is the largest and busiest port
                in Sub-Saharan Africa. Pharmaceutical imports entering through
                Durban are distributed not only across South Africa&apos;s nine
                provinces but also to neighbouring countries in the Southern
                African Development Community (SADC) region — including
                Mozambique, Botswana, Namibia, Zimbabwe, Zambia, and eSwatini.
                This makes South Africa the strategic hub for any Indian
                manufacturer targeting the Southern African market.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The SADC region — comprising 16 member states with a combined
                population exceeding 380 million — benefits from preferential
                trade agreements that facilitate cross-border pharmaceutical
                distribution. South African pharmaceutical distributors have
                established supply chains and regulatory relationships across
                the region, making a South African import partnership the most
                efficient entry point for the broader Southern African market.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                For Admetus, this means that a single South African import
                partnership is not just a South African opportunity — it is a
                Southern African opportunity. We support importers who are
                positioning softgel capsule distribution across the broader SADC
                region, with documentation and pricing structured for
                multi-market supply.
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
              Why Admetus for South Africa
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY SOUTH AFRICAN IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE SOUTH AFRICAN&nbsp;MARKET
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
              under your brand name for the South African and Southern African market.
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
              DOCUMENTATION FOR SAHPRA &amp;&nbsp;CUSTOMS
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
                  INDIA TO SOUTH AFRICA SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-South Africa shipping corridor is one of the
                  busiest pharmaceutical trade routes between Asia and Africa,
                  with regular container vessel services from Mumbai to
                  Durban and Cape&nbsp;Town.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: JNPT (Mumbai)",
                    "Products are dispatched from our Jind, Haryana facility to JNPT port in Mumbai (approximately 1,200km by road, 2-3 days transit). JNPT is India's largest container port and has regular services to South African ports. Cargo is consolidated, inspected, and cleared for export at the port's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Sea freight: India to Durban / Cape Town",
                    "Container vessel services from JNPT to Durban operate on regular schedules with 14-18 days ocean transit time. Durban — located on South Africa's east coast — is the largest port in Africa and the primary destination for pharmaceutical imports. Cape Town port serves as an alternative for Western Cape distribution. Multiple shipping lines serve the India-South Africa route with weekly departures, ensuring consistent supply chain reliability.",
                  ],
                  [
                    "Destination: Durban or Cape Town Port",
                    "Pharmaceutical imports arrive at Durban — the largest port in Sub-Saharan Africa — or Cape Town. South African Revenue Service (SARS) customs clearance and SAHPRA verification are processed through the customs system, typically taking 3-7 business days. The importer's clearing agent handles port-side clearance with the documentation package we provide. From Durban, cargo is distributed to Johannesburg (approximately 600km via the N3 highway), Pretoria, and across the country's logistics network.",
                  ],
                  [
                    "Packaging for transit",
                    "All South Africa-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants, tamper-evident sealing, and batch identification. Packaging is designed for ocean transit conditions and South Africa's varied climate zones. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-South Africa corridor.",
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
              SOUTH AFRICA EXPORT Q&amp;A
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
              START YOUR SOUTH AFRICA EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your South Africa and Southern
              Africa import requirements — SAHPRA documentation, formulation
              selection, MOQ, pricing, and shipping to Durban. We respond within
              48&nbsp;hours.
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
                href="https://wa.me/917497841608?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20South%20Africa.%20Please%20share%20details."
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

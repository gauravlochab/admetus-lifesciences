import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification accepted by PPB Kenya",
    desc: "The Pharmacy and Poisons Board (PPB) of Kenya recognizes WHO-GMP certification as evidence of manufacturing quality compliance. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which streamlines the PPB product registration process. WHO-GMP status is a baseline requirement for pharmaceutical imports into Kenya and reduces the scope of additional manufacturing site inspections by PPB inspectors.",
  },
  {
    title: "East Africa gateway — one partnership, five markets",
    desc: "Kenya's Mombasa port is the primary import gateway for East Africa. A single Kenyan import partnership opens distribution access to Uganda, Rwanda, South Sudan, Burundi, and Tanzania through the Northern Corridor and Central Corridor trade routes. Kenyan pharmaceutical distributors routinely serve cross-border markets, making Kenya the strategic entry point for any Indian manufacturer targeting the East African region.",
  },
  {
    title: "Five international certifications including Halal",
    desc: "Beyond WHO-GMP, our facility holds FSSAI, GMP, HACCP, and Halal certifications. Kenya's coastal and northeastern populations are predominantly Muslim — Halal certification is important for distribution in these regions and for cross-border trade to Somalia and other Muslim-majority East African markets. This multi-certification profile covers PPB requirements and importer needs across different market segments.",
  },
  {
    title: "Competitive pricing for African markets",
    desc: "Kenya is a price-sensitive pharmaceutical market where landed cost determines commercial viability. Our Haryana facility operates with lower overhead than manufacturers in Mumbai, Hyderabad, or Ahmedabad. Combined with Kenya's zero or reduced import duty on essential medicines under the East African Community (EAC) Common External Tariff, our pricing structure enables Kenyan distributors to maintain competitive retail margins across both pharmacy and institutional channels.",
  },
  {
    title: "Flexible MOQ for market entry",
    desc: "We understand that Kenyan importers — particularly those registering new products with PPB — need flexibility in initial order sizes. We support pilot-volume orders for market testing and PPB sample submission, with the ability to scale to full-container loads once product registration and market demand are established. This is particularly valuable for importers entering new therapeutic categories or expanding into cross-border East African distribution.",
  },
];

const ppbSteps = [
  [
    "Appoint a local licensed wholesale agent",
    "PPB Kenya requires all imported pharmaceutical and nutraceutical products to be represented by a locally licensed wholesale dealer or pharmaceutical importer. The local agent must hold a valid PPB wholesale license and is responsible for the product registration application, PPB correspondence, and post-market surveillance obligations. This local partnership is mandatory before any product registration can proceed.",
  ],
  [
    "Manufacturer GMP inspection by PPB",
    "PPB may conduct a GMP inspection of the foreign manufacturing facility as part of the product registration process. PPB inspectors may visit the manufacturing site to verify WHO-GMP compliance, production processes, quality control systems, and documentation practices. Our WHO-GMP certification significantly reduces the scope of inspection, but we welcome and facilitate PPB inspection visits to our Jind, Haryana facility when required.",
  ],
  [
    "Submit CTD-format dossier",
    "PPB Kenya follows the CTD (Common Technical Document) format for product registration submissions. The dossier includes five modules covering administrative information, quality (chemistry, manufacturing, controls), safety data, efficacy information, and product labeling. Admetus prepares the complete Module 3 (Quality) documentation including manufacturing process validation, analytical methods, stability data under ICH Zone IVa conditions, and Certificate of Analysis templates.",
  ],
  [
    "Provide Certificate of Pharmaceutical Product (WHO format)",
    "PPB requires a Certificate of Pharmaceutical Product (CPP) in WHO format issued by the Central Drugs Standard Control Organisation (CDSCO) of India. The CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in the country of origin. Admetus coordinates the CPP application with CDSCO and provides the authenticated certificate as part of the registration package.",
  ],
  [
    "Pre-registration lab analysis",
    "PPB requires laboratory analysis of product samples at the National Quality Control Laboratory (NQCL) in Nairobi or at a PPB-approved laboratory. Testing covers identity, assay, dissolution, microbial limits, heavy metals, and compliance with pharmacopoeial specifications. We provide the required sample quantities with full Certificate of Analysis documentation to facilitate the laboratory evaluation process.",
  ],
  [
    "Import permit via KESWS",
    "Once product registration is approved, each import shipment requires an import permit obtained through the Kenya Electronic Single Window System (KESWS). The KESWS integrates customs, port authority, and regulatory clearance into a single digital platform. The Kenyan importer's clearing agent processes the import permit application with the documentation package we provide — commercial invoice, packing list, COA, and PPB registration evidence.",
  ],
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Vitamin D deficiency is documented across East African populations, particularly in urban areas and among women who cover skin for religious or cultural reasons. Kenya's growing physician community is increasingly prescribing Vitamin D3 for deficiency treatment, immune support, and bone health. The high-dose 60,000 IU softgel format is preferred for therapeutic loading doses, with weekly dosing protocols becoming standard in Kenyan clinical practice.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Non-communicable diseases — particularly cardiovascular disease, hypertension, and diabetes — are an escalating health burden in Kenya. The WHO estimates that NCDs account for 27% of all deaths in Kenya, with cardiovascular disease as the leading NCD category. Omega-3 softgel capsules are increasingly recommended by Kenyan healthcare providers and are available through pharmacy retail in Nairobi, Mombasa, Kisumu, and other major urban centers.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Micronutrient deficiency remains a critical health challenge in Kenya — iron, zinc, Vitamin A, and folate deficiencies are widespread, particularly among women of reproductive age and children under five. Multivitamin softgel capsules serve both the institutional market (government health programs, NGO nutrition interventions) and the growing pharmacy retail channel. Kenya's Universal Health Coverage agenda is driving increased access to essential nutritional supplements.",
  },
  {
    name: "Antioxidant Formulations (Lycopene + Grape Seed Extract)",
    relevance: "Preventive health and wellness awareness is growing in Kenya's urban middle class, driven by increasing NCD burden and health education campaigns. Antioxidant formulations targeting cardiovascular protection, immune support, and prostate health (Lycopene) are gaining traction in Nairobi's pharmacy retail market and among health-conscious Kenyan consumers who are shifting toward preventive supplementation.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations serve Kenya's aging population and women's health segment. Osteoporosis and calcium deficiency are under-diagnosed but increasingly recognized in Kenyan clinical practice. The Calcitriol-Calcium-K2 combination is prescribed by Kenyan orthopedic specialists and is particularly relevant for post-menopausal women and elderly patients in Kenya's growing urban healthcare infrastructure.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by PPB Kenya for product registration and by Kenyan importers for each shipment's KRA customs clearance at Mombasa port.",
  },
  {
    doc: "Certificate of Pharmaceutical Product (WHO Format)",
    desc: "Issued by India's CDSCO in WHO format, the CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in India. PPB Kenya requires a WHO-format CPP as part of the product registration dossier. Admetus coordinates the CPP application with CDSCO.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. PPB Kenya requires WHO-GMP as baseline evidence of manufacturing quality — this certificate is a key document in the PPB registration dossier and may reduce the scope of a PPB facility inspection.",
  },
  {
    doc: "CTD-Format Quality Dossier (Module 3)",
    desc: "The Common Technical Document Module 3 (Quality) section includes manufacturing process description, validation data, analytical method details, stability study results under ICH Zone IVa conditions, and product specifications. Admetus prepares this module for the Kenyan importer to include in their PPB registration submission.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific products. Important for distribution in Kenya's coastal and northeastern Muslim-majority regions, and essential for cross-border trade to Somalia, Djibouti, and other Muslim-majority East African markets accessible through Mombasa.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF Mombasa pricing, HS codes, EAC tariff classifications, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by Kenya Revenue Authority (KRA) for import duty assessment and KESWS clearance.",
  },
];

const faqs = [
  {
    q: "What is the PPB registration process for importing softgels to Kenya?",
    a: "The Pharmacy and Poisons Board (PPB) is Kenya's pharmaceutical regulatory body. All imported pharmaceutical and nutraceutical products must be registered with PPB before sale in Kenya. The process involves: appointing a local licensed wholesale agent, submitting a CTD-format registration dossier, providing a WHO-GMP certificate and Certificate of Pharmaceutical Product (WHO format) from CDSCO India, and submitting product samples for laboratory analysis at the National Quality Control Laboratory (NQCL). PPB may also conduct a GMP inspection of the manufacturing facility. Registration typically takes 6-12 months and is valid for 5 years. Admetus provides the complete manufacturer documentation package for PPB registration.",
  },
  {
    q: "What documentation does Admetus provide for Kenyan import?",
    a: "We provide the complete manufacturer documentation package for PPB Kenya registration: Certificate of Analysis (batch-specific), WHO-GMP certificate, coordination for Certificate of Pharmaceutical Product (WHO format) from CDSCO, CTD Module 3 quality dossier (manufacturing process, validation, analytical methods, stability data for ICH Zone IVa), product specifications, Halal certificate, and commercial export documents (invoice, packing list, HS codes, EAC tariff classifications). We also provide product samples for NQCL laboratory evaluation upon request.",
  },
  {
    q: "What is the MOQ for Kenya export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. For initial orders — particularly those tied to PPB registration and market testing — we offer pilot volumes. Once PPB registration is secured and market demand is established, we support full 20ft and 40ft container loads for ongoing supply. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How long does shipping take from India to Mombasa?",
    a: "Sea freight from JNPT (Mumbai) or Mundra Port to Mombasa takes approximately 10-14 days ocean transit time. Mombasa is East Africa's largest port and the primary entry point for pharmaceutical imports into Kenya and the broader East African region. After port arrival, customs clearance at Mombasa through the Kenya Electronic Single Window System (KESWS) typically takes 3-7 business days depending on documentation completeness and PPB verification. Total transit from factory dispatch to warehouse delivery in Nairobi is typically 20-30 days.",
  },
  {
    q: "Can Admetus products be distributed to other East African countries from Kenya?",
    a: "Yes. Kenya's Mombasa port is the primary import gateway for the entire East African region. Kenyan pharmaceutical distributors routinely serve cross-border markets through the Northern Corridor (Uganda, Rwanda, South Sudan, Burundi) and Central Corridor (Tanzania) trade routes. A single PPB-registered product in Kenya can be positioned for distribution across 5+ East African markets, subject to each country's local registration requirements. Several East African countries accept or recognize Kenyan PPB registration as a reference during their own evaluation process, which can expedite market entry.",
  },
  {
    q: "Is Admetus Halal certified for the Kenyan market?",
    a: "Yes. Admetus Lifesciences holds Halal certification for its manufacturing facility and product range. Halal certification is important for the Kenyan market — Kenya's coastal regions (Mombasa, Lamu) and northeastern counties have predominantly Muslim populations. Additionally, Halal certification is essential for cross-border distribution from Kenya to Somalia, Djibouti, and other Muslim-majority markets in the Horn of Africa. All our softgel formulations can be supplied with Halal certification documentation.",
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
      name: "Kenya",
      item: "https://www.admetuslifesciences.com/export/kenya/",
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

export default function KenyaPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Kenya — WHO-GMP certified, PPB documentation ready"
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
            India &rarr; Kenya
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;KENYA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            Kenyan importers with PPB-ready documentation, East Africa
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
                KENYA&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Kenya is the pharmaceutical gateway to East Africa — and
                India is its dominant supplier. Kenyan pharmaceutical imports
                from India total approximately $353 million annually, with
                extraordinary year-over-year growth of 48% as of April 2025.
                This growth trajectory reflects Kenya&apos;s expanding
                healthcare infrastructure, growing middle class, and
                deepening trade relationship with Indian pharmaceutical
                manufacturers.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Kenya&apos;s strategic importance extends far beyond its own
                54-million population. Mombasa — Kenya&apos;s primary port —
                is the import gateway for the entire East African region.
                Pharmaceutical cargo entering through Mombasa is distributed
                via the Northern Corridor to Uganda, Rwanda, South Sudan, and
                Burundi, and via the Central Corridor to Tanzania. A single
                Kenyan import partnership effectively opens access to 5+
                markets with a combined population exceeding 250 million.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The Pharmacy and Poisons Board (PPB) regulates all
                pharmaceutical and nutraceutical imports into Kenya. PPB
                registration is a structured process that requires a local
                licensed wholesale agent, CTD-format dossier submission,
                WHO-GMP certificate verification, Certificate of
                Pharmaceutical Product (WHO format) from CDSCO India, and
                pre-registration laboratory analysis at the National Quality
                Control Laboratory (NQCL). Indian manufacturers with WHO-GMP
                certification have an established pathway through this
                regulatory framework.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Kenya&apos;s disease burden is shifting. While infectious
                diseases (malaria, HIV/AIDS, tuberculosis) remain significant,
                non-communicable diseases — cardiovascular disease, diabetes,
                cancer — are rapidly growing, driven by urbanization, dietary
                changes, and an aging population. This epidemiological
                transition is driving demand for nutraceutical supplements:
                Omega-3 for cardiovascular health, multivitamins for
                micronutrient deficiency, Vitamin D3 for immune support, and
                bone health formulations for the elderly. Kenya&apos;s
                Universal Health Coverage agenda is further expanding access to
                essential health products across the country.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* PPB Regulatory Section */}
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
                  PPB KENYA REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The Pharmacy and Poisons Board (PPB) regulates all
                  pharmaceutical and nutraceutical imports into Kenya. The
                  registration process requires a local licensed agent, CTD
                  dossier, GMP verification, and laboratory&nbsp;analysis.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {ppbSteps.map(([title, desc], i) => (
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

      {/* Gateway to East Africa */}
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
                KENYA — GATEWAY TO EAST&nbsp;AFRICA
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Kenya&apos;s Mombasa port is the largest and most important
                port in East Africa. Pharmaceutical imports entering through
                Mombasa are distributed across the region via two major trade
                corridors — the Northern Corridor serving Uganda, Rwanda,
                South Sudan, and Burundi, and the Central Corridor reaching
                into Tanzania. This makes Kenya the single most strategic
                entry point for any Indian pharmaceutical manufacturer
                targeting the East African market.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The East African Community (EAC) — comprising Kenya, Uganda,
                Tanzania, Rwanda, Burundi, South Sudan, and the Democratic
                Republic of Congo — has a combined population exceeding 300
                million. The EAC Common External Tariff provides zero or
                reduced duty on essential medicines, making Kenya&apos;s
                Mombasa an efficient and cost-effective entry point. Kenyan
                pharmaceutical distributors have established cross-border
                supply chains and regulatory relationships across the region.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                For Admetus, this means that a single Kenyan import
                partnership is not just a Kenyan opportunity — it is an East
                African opportunity. We support importers who are positioning
                softgel capsule distribution across the broader East African
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
              Why Admetus for Kenya
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY KENYAN IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE KENYAN&nbsp;MARKET
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
              under your brand name for the Kenyan and East African market.
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
              DOCUMENTATION FOR PPB &amp;&nbsp;CUSTOMS
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
                  INDIA TO KENYA SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-Kenya shipping corridor is well-established for
                  pharmaceutical cargo, with regular container vessel services
                  from Mumbai and Mundra to&nbsp;Mombasa.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: JNPT (Mumbai) or Mundra Port",
                    "Products are dispatched from our Jind, Haryana facility to JNPT port in Mumbai (approximately 1,200km by road, 2-3 days transit) or Mundra Port in Gujarat. Both ports have regular container services to Mombasa. Cargo is consolidated, inspected, and cleared for export at the port's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Sea freight: India to Mombasa",
                    "Container vessel services from JNPT/Mundra to Mombasa operate on regular schedules with 10-14 days ocean transit time. Pharmaceutical cargo is shipped in standard dry containers with temperature monitoring for heat-sensitive products. Multiple shipping lines serve the India-Mombasa route with weekly departures, ensuring consistent supply chain reliability for East African importers.",
                  ],
                  [
                    "Destination: Mombasa Port, Kenya",
                    "Pharmaceutical imports arrive at Mombasa — East Africa's largest port. Kenya Revenue Authority (KRA) customs clearance and PPB verification are processed through the Kenya Electronic Single Window System (KESWS), typically taking 3-7 business days. The importer's clearing agent handles port-side clearance with the documentation package we provide. From Mombasa, cargo is transported to Nairobi (approximately 500km via the Mombasa-Nairobi SGR railway or road) or to cross-border destinations.",
                  ],
                  [
                    "Packaging for transit",
                    "All Kenya-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants, tamper-evident sealing, and batch identification. Packaging is designed for tropical transit conditions and East Africa's warm climate. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-Kenya corridor.",
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
              KENYA EXPORT Q&amp;A
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
              START YOUR KENYA EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Kenya and East Africa
              import requirements — PPB documentation, formulation selection,
              MOQ, pricing, and shipping to Mombasa. We respond within
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
                href="https://wa.me/917497841608?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Kenya.%20Please%20share%20details."
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

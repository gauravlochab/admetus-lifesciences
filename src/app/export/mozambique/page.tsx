import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification for ANARME compliance",
    desc: "The Autoridade Nacional Reguladora de Medicamentos (ANARME) — Mozambique's national medicines regulatory authority — requires evidence of GMP compliance from foreign pharmaceutical manufacturers as part of the product registration process. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which aligns with ANARME's GMP requirements and streamlines the regulatory dossier review. WHO-GMP status is a critical baseline for any Indian manufacturer seeking to supply the Mozambican market.",
  },
  {
    title: "Portuguese-language documentation support",
    desc: "Mozambique is a Portuguese-speaking country — the only Lusophone nation in East Africa. Product labeling, patient information leaflets, and regulatory submissions may require Portuguese-language documentation. Admetus works with qualified translators to provide Portuguese-language product labeling and supporting documentation, ensuring compliance with ANARME requirements and market readiness for Mozambican distribution channels.",
  },
  {
    title: "Five international certifications including Halal",
    desc: "Beyond WHO-GMP, our facility holds FSSAI, GMP, HACCP, and Halal certifications. Mozambique has a significant Muslim population — approximately 18-20% of the total population, concentrated in the northern provinces (Cabo Delgado, Nampula, Niassa) and coastal areas. Halal certification is essential for distribution in these regions and positions our products for the country's diverse religious demographics.",
  },
  {
    title: "Competitive pricing for a price-sensitive market",
    desc: "Mozambique is one of the lowest-income countries in Southern Africa, and pharmaceutical affordability directly determines market viability. Our Haryana facility operates with lower overhead than manufacturers in Mumbai, Hyderabad, or Ahmedabad, enabling competitive CIF Maputo pricing. This cost advantage is critical for Mozambican distributors serving both urban pharmacy channels and rural health programmes where price sensitivity is extreme.",
  },
  {
    title: "Flexible MOQ for emerging market entry",
    desc: "We understand that Mozambican importers often require flexibility in initial order volumes — particularly those registering new products with ANARME or entering new therapeutic categories. We support pilot-volume orders for market testing and regulatory sample submission, with the ability to scale to full-container loads once product registration and demand are established. This flexibility is vital for an emerging pharmaceutical market where distribution networks are still developing.",
  },
];

const anarmeSteps = [
  [
    "Appoint a local licensed pharmaceutical importer",
    "ANARME requires all imported pharmaceutical and health products to be represented by a locally licensed pharmaceutical importer or authorized distributor. The Mozambican entity must hold appropriate licenses from ANARME and the Ministry of Health, and is responsible for the product registration application, ANARME correspondence, and post-market surveillance obligations. This local partnership is mandatory before any product registration can proceed.",
  ],
  [
    "Manufacturer GMP compliance assessment",
    "ANARME evaluates GMP compliance of foreign manufacturing facilities as part of the product registration process. This typically involves a desk review of GMP documentation — including the WHO-GMP certificate, facility photographs, quality system documentation, and manufacturing process descriptions. Our WHO-GMP certification provides strong evidence of manufacturing quality and significantly facilitates this assessment stage.",
  ],
  [
    "Submit product registration dossier",
    "ANARME requires a product registration dossier that includes manufacturing and quality information, product specifications, stability data, labeling samples, and supporting certificates. While Mozambique is moving toward CTD-format submissions, the current requirements may follow a national format. Admetus prepares the complete quality documentation including manufacturing process validation, analytical methods, stability data under ICH Zone IVa conditions (hot and humid), and Certificate of Analysis templates.",
  ],
  [
    "Provide Certificate of Pharmaceutical Product (WHO format)",
    "ANARME requires a Certificate of Pharmaceutical Product (CPP) in WHO format issued by the Central Drugs Standard Control Organisation (CDSCO) of India. The CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in the country of origin. Admetus coordinates the CPP application with CDSCO and provides the authenticated certificate as part of the registration package.",
  ],
  [
    "Product quality testing",
    "ANARME may require laboratory analysis of product samples at approved testing facilities — either in Mozambique or at recognized laboratories in the region (South Africa or other SADC countries). Testing covers identity, assay, dissolution, microbial limits, and compliance with pharmacopoeial specifications. We provide the required sample quantities with full Certificate of Analysis documentation.",
  ],
  [
    "Import permit and customs clearance",
    "Once product registration is approved, each import shipment requires an import permit from ANARME and customs clearance through Mozambique's Alfandegas (customs authority). The Mozambican importer's clearing agent processes the import documentation with the paperwork we provide — commercial invoice, packing list, COA, and ANARME registration evidence. Port clearance at Maputo typically takes 5-10 business days.",
  ],
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Vitamin D deficiency is a growing health concern in Mozambique, particularly among urban populations and women in northern provinces who cover skin for cultural or religious reasons. Despite Mozambique's tropical location, limited dietary intake and changing lifestyles contribute to deficiency. The high-dose 60,000 IU softgel format is suitable for therapeutic loading doses, with healthcare providers increasingly recognizing Vitamin D's role in immune support — particularly important in a country with a significant HIV/AIDS burden.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Non-communicable diseases are an emerging health burden in Mozambique, with cardiovascular disease and hypertension affecting growing urban populations in Maputo, Beira, and Nampula. While Mozambique's NCD burden is lower than South Africa's, the trajectory is rising with urbanization and dietary changes. Omega-3 softgel capsules are increasingly available through pharmacy channels in major cities and serve the country's emerging middle-class wellness market.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Micronutrient deficiency is a critical public health challenge in Mozambique — iron, zinc, Vitamin A, and folate deficiencies are widespread, particularly among women of reproductive age and children under five. Multivitamin softgel capsules serve both the institutional market (government health programmes funded by international donors, NGO nutrition interventions) and the growing private pharmacy retail channel in urban centres. International health programmes operating in Mozambique represent a significant demand channel for quality-certified supplements.",
  },
  {
    name: "Antioxidant Formulations (Lycopene + Grape Seed Extract)",
    relevance: "Preventive health awareness is growing in Mozambique's urban centres, driven by increasing NCD awareness and health education campaigns. Antioxidant formulations targeting immune support and cardiovascular protection are gaining traction in Maputo's pharmacy retail market. The country's young and growing population — median age approximately 17 years — represents a long-term market development opportunity for preventive health products.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations serve Mozambique's women's health segment and address calcium deficiency, which is widespread due to limited dairy consumption and dietary diversity. The Calcitriol-Calcium-K2 combination is particularly relevant for pregnant and lactating women — a large demographic in Mozambique's young population — and for post-menopausal women in the country's growing elderly cohort.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by ANARME for product registration and by Mozambican importers for each shipment's customs clearance at Maputo port.",
  },
  {
    doc: "Certificate of Pharmaceutical Product (WHO Format)",
    desc: "Issued by India's CDSCO in WHO format, the CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in India. ANARME requires a WHO-format CPP as part of the product registration dossier. Admetus coordinates the CPP application with CDSCO.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. ANARME requires GMP compliance evidence as a baseline for product registration — this certificate is a key document in the registration dossier and demonstrates manufacturing quality standards.",
  },
  {
    doc: "Quality Dossier (Manufacturing & Stability Data)",
    desc: "Comprehensive quality documentation including manufacturing process description, validation data, analytical method details, stability study results under ICH Zone IVa conditions (hot and humid — relevant for Mozambique's tropical climate), and product specifications. Admetus prepares this documentation for the Mozambican importer to include in their ANARME registration submission.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific products. Essential for distribution in Mozambique's northern provinces (Cabo Delgado, Nampula, Niassa) and coastal regions with significant Muslim populations. Approximately 18-20% of Mozambique's population is Muslim, making Halal certification a commercially important credential.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF Maputo pricing, HS codes, tariff classifications, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by Mozambique's Alfandegas (customs authority) for import duty assessment and clearance. Portuguese-language documentation provided where required.",
  },
];

const faqs = [
  {
    q: "What is the ANARME registration process for importing softgels to Mozambique?",
    a: "The Autoridade Nacional Reguladora de Medicamentos (ANARME) is Mozambique's national medicines regulatory authority. All imported pharmaceutical and health products must be registered with ANARME before sale in Mozambique. The process involves: appointing a local licensed pharmaceutical importer, submitting a product registration dossier with quality and manufacturing data, providing a WHO-GMP certificate and Certificate of Pharmaceutical Product (WHO format) from CDSCO India, and submitting product samples for quality testing. ANARME may also conduct a desk review of GMP compliance documentation. Registration timelines vary but typically take 6-12 months. Admetus provides the complete manufacturer documentation package for ANARME registration.",
  },
  {
    q: "Does Admetus provide Portuguese-language documentation for Mozambique?",
    a: "Yes. Mozambique is a Portuguese-speaking country, and product labeling, patient information leaflets, and certain regulatory documents may require Portuguese translation. Admetus works with qualified translators to provide Portuguese-language product labels and supporting documentation as required by ANARME and for market readiness. All regulatory and commercial documentation can be prepared in both English and Portuguese to meet Mozambican requirements.",
  },
  {
    q: "What is the MOQ for Mozambique export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. For initial orders — particularly those tied to ANARME registration and market testing in Mozambique — we offer pilot volumes appropriate for an emerging market. Once ANARME registration is secured and market demand is established, we support full 20ft and 40ft container loads for ongoing supply. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How long does shipping take from India to Mozambique?",
    a: "Sea freight from JNPT (Mumbai) to Maputo takes approximately 14-18 days ocean transit time. Maputo is Mozambique's primary port and largest city, located in the south of the country. An alternative route is via Durban, South Africa — just 500km south of Maputo — which offers more frequent shipping services and can serve as a transhipment hub. After port arrival, customs clearance at Maputo typically takes 5-10 business days depending on documentation completeness and ANARME verification. Total transit from factory dispatch to warehouse delivery is typically 25-35 days.",
  },
  {
    q: "Can products be shipped via Durban (South Africa) to Mozambique?",
    a: "Yes. Durban is only approximately 500km south of Maputo and is a major transhipment hub for Southern African pharmaceutical cargo. Many importers in Mozambique use Durban as an alternative port of entry, particularly when direct shipping services to Maputo are less frequent. Cargo entering through Durban can be transported overland to Mozambique via the N4/EN4 highway corridor. This Durban-Maputo route is well-established for pharmaceutical logistics and can offer more competitive freight rates due to higher shipping volumes to Durban.",
  },
  {
    q: "Is Admetus Halal certified for the Mozambican market?",
    a: "Yes. Admetus Lifesciences holds Halal certification for its manufacturing facility and product range. Mozambique has a significant Muslim population — approximately 18-20% of the total population — concentrated in the northern provinces (Cabo Delgado, Nampula, Niassa) and coastal areas. Halal certification is essential for effective distribution in these regions and ensures our products meet the religious requirements of a substantial portion of Mozambique's population. All our softgel formulations can be supplied with Halal certification documentation.",
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
      name: "Mozambique",
      item: "https://www.admetuslifesciences.com/export/mozambique/",
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

export default function MozambiquePage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Mozambique — WHO-GMP certified, ANARME documentation ready"
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
            India &rarr; Mozambique
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;MOZAMBIQUE
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            Mozambican importers with ANARME-ready documentation, Portuguese-language
            support, Halal certification, competitive pricing, and flexible
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
                MOZAMBIQUE&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Mozambique is a rapidly developing pharmaceutical market in
                Southern Africa with a population of 33 million and growing
                healthcare needs. As a Portuguese-speaking nation — the only
                Lusophone country in East/Southern Africa — Mozambique presents
                unique opportunities for pharmaceutical importers who can
                navigate its language requirements and regulatory landscape. The
                country&apos;s pharmaceutical market is import-dependent, with
                the vast majority of medicines and health products sourced from
                international manufacturers.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Mozambique faces a complex disease burden that drives
                pharmaceutical demand across multiple categories. The country is
                malaria-endemic — malaria remains the leading cause of morbidity
                and mortality, particularly among children under five. HIV/AIDS
                prevalence is among the highest in the world at approximately
                12-13% of the adult population. Simultaneously, non-communicable
                diseases are emerging as a growing health concern in urban
                centres like Maputo, Beira, and Nampula. This dual disease
                burden creates sustained demand for both essential medicines and
                nutritional supplements that support immune health, address
                micronutrient deficiencies, and support overall wellness.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The Autoridade Nacional Reguladora de Medicamentos (ANARME)
                regulates all pharmaceutical and health product imports into
                Mozambique. ANARME was established to strengthen pharmaceutical
                regulation in the country and is progressively building its
                regulatory capacity. The registration process requires a local
                licensed importer, product registration dossier with quality
                data, WHO-GMP certificate verification, Certificate of
                Pharmaceutical Product (WHO format) from CDSCO India, and
                product quality testing. Indian manufacturers with WHO-GMP
                certification have a recognized pathway through this regulatory
                framework.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                International health programmes — funded by organizations
                including USAID, the Global Fund, WHO, and UNICEF — are major
                purchasers of pharmaceutical and nutritional products in
                Mozambique. These programmes require WHO-GMP or equivalent
                certification from manufacturers, making Admetus&apos;s
                certification profile directly relevant for this significant
                demand channel. The combination of institutional procurement and
                growing private-sector pharmacy retail creates multiple market
                entry pathways for quality-certified Indian softgel
                manufacturers.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ANARME Regulatory Section */}
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
                  ANARME REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The Autoridade Nacional Reguladora de Medicamentos (ANARME)
                  regulates all pharmaceutical and health product imports into
                  Mozambique. The registration process requires a local licensed
                  importer, product dossier, GMP verification, and
                  quality&nbsp;testing.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {anarmeSteps.map(([title, desc], i) => (
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

      {/* Strategic Position */}
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
                MOZAMBIQUE — SOUTHERN AFRICA&apos;S EMERGING&nbsp;MARKET
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Mozambique occupies a strategic position on Southern Africa&apos;s
                Indian Ocean coastline, with 2,470 km of coastline and port
                access via Maputo in the south and Beira in the centre. Maputo
                port is closely linked to South Africa&apos;s economic hub —
                Johannesburg is only approximately 600km from Maputo via the
                Maputo Development Corridor. This proximity to South Africa
                creates a well-established logistics corridor for pharmaceutical
                distribution.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Access to Mozambique can be via direct shipping to Maputo or
                through Durban, South Africa — the largest port in Sub-Saharan
                Africa, located just 500km south of Maputo. The Durban-Maputo
                corridor is a proven pharmaceutical logistics route, and many
                regional distributors use this transhipment pathway to serve
                Mozambique efficiently.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                As a member of the Southern African Development Community
                (SADC), Mozambique benefits from regional trade agreements that
                facilitate pharmaceutical imports. The country&apos;s young and
                growing population — with a median age of approximately 17
                years — represents a long-term market development opportunity
                for pharmaceutical manufacturers establishing early supply
                relationships.
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
              Why Admetus for Mozambique
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY MOZAMBICAN IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE MOZAMBICAN&nbsp;MARKET
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
              under your brand name for the Mozambican market with
              Portuguese-language labeling. See our{" "}
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
              DOCUMENTATION FOR ANARME &amp;&nbsp;CUSTOMS
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
                  INDIA TO MOZAMBIQUE SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-Mozambique shipping corridor offers both direct
                  services to Maputo and transhipment via Durban, South Africa
                  — providing flexible logistics options for
                  Mozambican&nbsp;importers.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: JNPT (Mumbai)",
                    "Products are dispatched from our Jind, Haryana facility to JNPT port in Mumbai (approximately 1,200km by road, 2-3 days transit). JNPT is India's largest container port and offers services to Maputo — both direct and via transhipment ports. Cargo is consolidated, inspected, and cleared for export at the port's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Sea freight: India to Maputo (direct or via Durban)",
                    "Direct container vessel services from JNPT to Maputo take approximately 14-18 days ocean transit time. Alternatively, cargo can be routed via Durban, South Africa — with 14-18 days transit to Durban followed by short-haul transhipment or road transport to Maputo (approximately 500km). The Durban transhipment route may offer more frequent sailings and competitive freight rates. Pharmaceutical cargo is shipped in standard dry containers with temperature monitoring.",
                  ],
                  [
                    "Destination: Maputo Port, Mozambique",
                    "Pharmaceutical imports arrive at Maputo — Mozambique's primary port and capital city. Customs clearance through Mozambique's Alfandegas (customs authority) and ANARME verification typically takes 5-10 business days depending on documentation completeness. The importer's clearing agent handles port-side clearance with the documentation package we provide. From Maputo, cargo is distributed to other major cities including Beira and Nampula via road or coastal shipping.",
                  ],
                  [
                    "Packaging for tropical transit",
                    "All Mozambique-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants, tamper-evident sealing, and batch identification. Packaging is designed for tropical transit conditions — Mozambique's hot and humid climate (ICH Zone IVa) requires enhanced moisture and heat protection. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners.",
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
              MOZAMBIQUE EXPORT Q&amp;A
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
              START YOUR MOZAMBIQUE EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Mozambique import
              requirements — ANARME documentation, Portuguese-language labeling,
              formulation selection, MOQ, pricing, and shipping to Maputo. We
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
                href="https://wa.me/917497841608?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Mozambique.%20Please%20share%20details."
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

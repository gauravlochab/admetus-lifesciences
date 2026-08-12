import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification for ACOREP compliance",
    desc: "The Autorité Congolaise de Régulation Pharmaceutique (ACOREP) — the Democratic Republic of Congo's pharmaceutical regulatory authority — requires evidence of GMP compliance from foreign manufacturers as part of the product registration process. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which aligns with ACOREP's manufacturing quality requirements and facilitates the regulatory dossier review. WHO-GMP certification is a critical differentiator in DR Congo's import-dependent pharmaceutical market.",
  },
  {
    title: "Serving Africa's 4th most populous nation",
    desc: "The Democratic Republic of Congo has a population exceeding 100 million — the 4th most populous country in Africa and 14th globally. Despite this massive population, the country faces critical medicine shortages across nearly every therapeutic category. DR Congo's pharmaceutical market is almost entirely import-dependent, creating significant demand for quality-certified manufacturers who can supply affordable medicines and nutritional supplements at scale. This population size represents one of Africa's largest untapped pharmaceutical markets.",
  },
  {
    title: "Five international certifications including Halal",
    desc: "Beyond WHO-GMP, our facility holds FSSAI, GMP, HACCP, and Halal certifications. DR Congo has a growing Muslim population — approximately 10-12% of the total population, concentrated in eastern provinces and urban centres. Halal certification supports distribution in these communities and positions our products for cross-border trade with neighbouring Muslim-majority regions in East Africa.",
  },
  {
    title: "Competitive pricing for a critically underserved market",
    desc: "DR Congo is among the poorest countries globally, and pharmaceutical affordability is the single most important determinant of market access. Our Haryana facility operates with lower overhead than manufacturers in Mumbai, Hyderabad, or Ahmedabad, enabling the most competitive pricing possible for the Congolese market. This cost advantage is critical for distributors serving both urban pharmacy channels in Kinshasa and Lubumbashi, and rural health programmes where price sensitivity is extreme and donor-funded procurement is common.",
  },
  {
    title: "Flexible MOQ for a challenging logistics environment",
    desc: "DR Congo's internal logistics infrastructure is limited — road networks are sparse and unreliable across much of the country. We understand that Congolese importers need flexibility in order volumes to match the realities of their distribution networks. We support pilot-volume orders for market entry and ACOREP registration, with the ability to scale as distribution channels develop. This flexibility is essential for a market where commercial development is gradual and often region-by-region.",
  },
];

const acorepSteps = [
  [
    "Appoint a local licensed pharmaceutical importer",
    "ACOREP requires all imported pharmaceutical and health products to be represented by a locally licensed pharmaceutical importer or authorized distributor in DR Congo. The Congolese entity must hold appropriate licenses from ACOREP and the Ministry of Health, and is responsible for the product registration application, regulatory correspondence, and post-market obligations. This local partnership is mandatory before any product registration can proceed. Importers are typically based in Kinshasa or Lubumbashi.",
  ],
  [
    "Manufacturer GMP compliance assessment",
    "ACOREP evaluates GMP compliance of foreign manufacturing facilities as part of the product registration process. This typically involves a desk review of GMP documentation — including the WHO-GMP certificate, facility documentation, quality system overview, and manufacturing process descriptions. Our WHO-GMP certification provides strong evidence of manufacturing quality standards and significantly facilitates this assessment. On-site inspections may be required in some cases.",
  ],
  [
    "Submit product registration dossier",
    "ACOREP requires a product registration dossier that includes manufacturing and quality information, product specifications, stability data, labeling samples, and supporting certificates. French-language documentation is required for labeling and patient information. Admetus prepares the complete quality documentation including manufacturing process validation, analytical methods, stability data under ICH Zone IVa conditions (hot and humid — relevant for DR Congo's tropical climate), and Certificate of Analysis templates.",
  ],
  [
    "Provide Certificate of Pharmaceutical Product (WHO format)",
    "ACOREP requires a Certificate of Pharmaceutical Product (CPP) in WHO format issued by the Central Drugs Standard Control Organisation (CDSCO) of India. The CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in the country of origin. Admetus coordinates the CPP application with CDSCO and provides the authenticated certificate as part of the registration package.",
  ],
  [
    "Product quality testing",
    "ACOREP may require laboratory analysis of product samples at approved testing facilities — either in DR Congo or at recognized laboratories in the region. Testing covers identity, assay, dissolution, microbial limits, and compliance with pharmacopoeial specifications. We provide the required sample quantities with full Certificate of Analysis documentation to facilitate the laboratory evaluation process.",
  ],
  [
    "Import permit and customs clearance",
    "Once product registration is approved, each import shipment requires an import permit from ACOREP and customs clearance through DR Congo's Direction Générale des Douanes et Accises (DGDA — customs authority). The Congolese importer's clearing agent processes the import documentation with the export paperwork we provide — commercial invoice, packing list, COA, and ACOREP registration evidence. Port clearance at Dar es Salaam (for Lubumbashi-bound cargo) or Matadi/Boma (for Kinshasa-bound cargo) is followed by overland transit.",
  ],
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Vitamin D deficiency is a growing concern in DR Congo, particularly in urban centres where populations have limited dietary diversity and changing lifestyles. Despite the country's equatorial location, Vitamin D deficiency is documented due to limited dietary intake. The high-dose 60,000 IU softgel format is suitable for therapeutic loading doses, with healthcare providers in Kinshasa and Lubumbashi increasingly recognizing Vitamin D's role in immune support — particularly important in a population with high HIV/AIDS prevalence and endemic infectious diseases.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Non-communicable diseases are an emerging health burden in DR Congo's urban centres, with cardiovascular disease and hypertension affecting growing populations in Kinshasa (population 17 million+), Lubumbashi, Mbuji-Mayi, and Kisangani. As urbanization accelerates and dietary patterns shift, NCD prevalence is rising. Omega-3 softgel capsules serve the emerging pharmacy retail channel in major cities and the growing urban middle class that is beginning to adopt preventive health practices.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Micronutrient deficiency is a critical public health crisis in DR Congo — iron, zinc, Vitamin A, iodine, and folate deficiencies are endemic, particularly among women of reproductive age and children under five. Malnutrition contributes to high child mortality rates. Multivitamin softgel capsules serve the institutional market (government health programmes, UNICEF, WHO, NGO nutrition interventions) and the limited but growing private pharmacy retail channel. International donor-funded health programmes represent a major demand channel for WHO-GMP certified supplements in DR Congo.",
  },
  {
    name: "Antioxidant Formulations (Lycopene + Grape Seed Extract)",
    relevance: "Preventive health awareness is in early stages in DR Congo, concentrated in the urban middle class of Kinshasa and Lubumbashi. As NCD awareness grows through health education campaigns and media, demand for preventive health products is beginning to emerge. Antioxidant formulations targeting immune support and cardiovascular protection represent a market development opportunity in DR Congo's evolving urban health landscape.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations address calcium deficiency, which is widespread in DR Congo due to limited dairy consumption and dietary diversity. The Calcitriol-Calcium-K2 combination is particularly relevant for pregnant and lactating women — a large demographic in DR Congo's young population (median age approximately 17 years) — and for the women's health segment in urban healthcare facilities in Kinshasa and Lubumbashi.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by ACOREP for product registration and by Congolese importers for each shipment's customs clearance through DGDA.",
  },
  {
    doc: "Certificate of Pharmaceutical Product (WHO Format)",
    desc: "Issued by India's CDSCO in WHO format, the CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in India. ACOREP requires a WHO-format CPP as part of the product registration dossier. Admetus coordinates the CPP application with CDSCO.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. ACOREP requires GMP compliance evidence as a baseline for product registration — this certificate is a key document in the registration dossier and is particularly valued in DR Congo's quality-conscious regulatory environment.",
  },
  {
    doc: "Quality Dossier (Manufacturing & Stability Data)",
    desc: "Comprehensive quality documentation including manufacturing process description, validation data, analytical method details, stability study results under ICH Zone IVa conditions (hot and humid — critical for DR Congo's equatorial tropical climate), and product specifications. Admetus prepares this documentation for the Congolese importer to include in their ACOREP registration submission.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific products. Important for distribution to DR Congo's Muslim communities, concentrated in eastern provinces and urban centres. Approximately 10-12% of DR Congo's population is Muslim, and Halal certification supports product acceptance in these communities and facilitates cross-border trade with East African markets.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF pricing for Dar es Salaam (for Lubumbashi route) or Matadi/Boma (for Kinshasa route), HS codes, tariff classifications, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by DGDA (Direction Générale des Douanes et Accises) for import duty assessment. French-language documentation provided where required.",
  },
];

const faqs = [
  {
    q: "What is the ACOREP registration process for importing softgels to DR Congo?",
    a: "The Autorité Congolaise de Régulation Pharmaceutique (ACOREP) is DR Congo's pharmaceutical regulatory authority. All imported pharmaceutical and health products must be registered with ACOREP before sale in the country. The process involves: appointing a local licensed pharmaceutical importer (typically based in Kinshasa or Lubumbashi), submitting a product registration dossier with quality and manufacturing data in French, providing a WHO-GMP certificate and Certificate of Pharmaceutical Product (WHO format) from CDSCO India, and submitting product samples for quality testing. Registration timelines vary depending on ACOREP's processing capacity. Admetus provides the complete manufacturer documentation package for ACOREP registration.",
  },
  {
    q: "What documentation does Admetus provide for DR Congo import?",
    a: "We provide the complete manufacturer documentation package for ACOREP registration: Certificate of Analysis (batch-specific), WHO-GMP certificate, coordination for Certificate of Pharmaceutical Product (WHO format) from CDSCO, quality dossier (manufacturing process, validation, analytical methods, stability data for ICH Zone IVa), product specifications, Halal certificate, and commercial export documents (invoice, packing list, HS codes). French-language product labeling and documentation support is available. We also provide product samples for laboratory evaluation upon request.",
  },
  {
    q: "What is the MOQ for DR Congo export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. For initial orders — particularly those tied to ACOREP registration and market entry in DR Congo — we offer pilot volumes appropriate for the market's early-stage commercial development. Once ACOREP registration is secured and distribution channels are established, we support full 20ft and 40ft container loads for ongoing supply. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How does shipping work from India to DR Congo?",
    a: "DR Congo is a landlocked-access market with multiple shipping routes depending on the destination city. For Lubumbashi and southeastern DR Congo: sea freight from JNPT (Mumbai) to Dar es Salaam, Tanzania (approximately 10-14 days), followed by overland transit via the TAZARA railway or road corridor to Lubumbashi (4-7 days additional). For Kinshasa and western DR Congo: sea freight to Matadi or Boma port on the Congo River (approximately 18-22 days via transhipment). An alternative route via Mombasa, Kenya is also possible. Total transit from factory to warehouse is typically 22-35 days depending on the route and destination.",
  },
  {
    q: "Why is DR Congo a significant market opportunity despite its challenges?",
    a: "DR Congo has a population exceeding 100 million — the 4th largest in Africa — with critical medicine shortages across nearly every therapeutic category. The pharmaceutical market is almost entirely import-dependent, and there is massive unmet demand for quality, affordable medicines and nutritional supplements. International health programmes (WHO, UNICEF, Global Fund, USAID) are major purchasers and require WHO-GMP certification from manufacturers. As DR Congo's economy and healthcare infrastructure develop, early market entry positions manufacturers for long-term growth in one of Africa's largest potential pharmaceutical markets.",
  },
  {
    q: "Does Admetus provide French-language documentation for DR Congo?",
    a: "Yes. DR Congo is a French-speaking country, and product labeling, patient information leaflets, and certain regulatory documents require French-language documentation. Admetus works with qualified translators to provide French-language product labels and supporting documentation as required by ACOREP and for market readiness. All regulatory and commercial documentation can be prepared in both English and French to meet Congolese requirements.",
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
      name: "DR Congo",
      item: "https://www.admetuslifesciences.com/export/dr-congo/",
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

export default function DRCongoPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to DR Congo — WHO-GMP certified, ACOREP documentation ready"
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
            India &rarr; DR Congo
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;DR&nbsp;CONGO
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            Congolese importers with ACOREP-ready documentation, French-language
            support, competitive pricing, and flexible
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
                DR CONGO&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The Democratic Republic of Congo is the 4th most populous
                country in Africa with a population exceeding 100 million — and
                one of the continent&apos;s most critically underserved
                pharmaceutical markets. The country&apos;s pharmaceutical
                sector is almost entirely import-dependent, with minimal
                domestic manufacturing capacity. This creates significant and
                sustained demand for quality-certified international
                pharmaceutical manufacturers who can supply affordable
                medicines and nutritional supplements to this massive
                population.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                DR Congo faces one of the most complex disease burdens on the
                African continent. Malaria remains the leading cause of
                morbidity and mortality. HIV/AIDS, tuberculosis, Ebola
                outbreaks, and other infectious diseases place enormous strain
                on the healthcare system. Simultaneously, non-communicable
                diseases are emerging in urban centres — Kinshasa (population
                17 million+), Lubumbashi, Mbuji-Mayi, and Kisangani are
                experiencing rising rates of cardiovascular disease, diabetes,
                and hypertension as urbanization accelerates. This dual
                disease burden drives demand across both essential medicines
                and nutritional supplement categories.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The Autorité Congolaise de Régulation Pharmaceutique (ACOREP)
                regulates pharmaceutical imports into DR Congo. As a
                French-speaking country, regulatory submissions and product
                labeling require French-language documentation. ACOREP&apos;s
                registration process requires a local licensed importer,
                product registration dossier with quality data, WHO-GMP
                certificate verification, Certificate of Pharmaceutical
                Product (WHO format) from CDSCO India, and product quality
                testing. The regulatory framework is evolving and
                strengthening as ACOREP builds institutional capacity.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                International health programmes are a dominant force in DR
                Congo&apos;s pharmaceutical market. Organizations including
                WHO, UNICEF, the Global Fund, USAID, and MSF (Doctors Without
                Borders) operate extensive health programmes across the
                country and are major purchasers of medicines and nutritional
                supplements. These programmes universally require WHO-GMP
                certification from manufacturers, making Admetus&apos;s
                certification profile directly relevant for this critical
                procurement channel. The combination of institutional
                procurement, donor-funded programmes, and emerging
                private-sector pharmacy retail in major cities creates
                multiple market entry pathways.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ACOREP Regulatory Section */}
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
                  ACOREP REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The Autorité Congolaise de Régulation Pharmaceutique (ACOREP)
                  regulates all pharmaceutical and health product imports into
                  DR Congo. The registration process requires a local licensed
                  importer, product dossier in French, GMP verification, and
                  quality&nbsp;testing.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {acorepSteps.map(([title, desc], i) => (
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
                DR CONGO — CENTRAL AFRICA&apos;S LARGEST&nbsp;MARKET
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                DR Congo is the geographic heart of Africa — the 2nd largest
                country on the continent by land area, spanning from the
                Atlantic coast in the west to the Great Lakes region in the
                east. This vast territory borders nine countries: Republic of
                Congo, Central African Republic, South Sudan, Uganda, Rwanda,
                Burundi, Tanzania, Zambia, and Angola. A supply presence in DR
                Congo positions manufacturers at the centre of the African
                continent.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Access to DR Congo is primarily through two maritime corridors.
                The eastern route — via Dar es Salaam (Tanzania) or Mombasa
                (Kenya) — serves Lubumbashi and the mineral-rich Katanga/Haut-
                Katanga province via the TAZARA railway and road network. The
                western route — via Matadi or Boma ports on the Congo River —
                serves Kinshasa and western DR Congo. The eastern corridor is
                typically preferred for pharmaceutical imports due to better
                infrastructure and established trade routes.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                DR Congo is a member of the East African Community (EAC) and
                the Southern African Development Community (SADC), providing
                trade framework access to both regional blocs. As the
                country&apos;s economy and healthcare infrastructure develop
                — driven by significant mineral wealth and international
                development investment — early market entry positions
                manufacturers for long-term growth in one of Africa&apos;s
                most significant emerging pharmaceutical markets.
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
              Why Admetus for DR Congo
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY CONGOLESE IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE CONGOLESE&nbsp;MARKET
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
              under your brand name for the Congolese market with
              French-language labeling. See our{" "}
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
              DOCUMENTATION FOR ACOREP &amp;&nbsp;CUSTOMS
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
                  INDIA TO DR CONGO SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  DR Congo is accessed via two primary shipping corridors —
                  the eastern route through Dar es Salaam or Mombasa for
                  Lubumbashi, and the western route via Matadi for
                  Kinshasa.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: JNPT (Mumbai)",
                    "Products are dispatched from our Jind, Haryana facility to JNPT port in Mumbai (approximately 1,200km by road, 2-3 days transit). JNPT is India's largest container port and offers services to East African ports serving as gateways to DR Congo. Cargo is consolidated, inspected, and cleared for export at the port's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Eastern route: JNPT → Dar es Salaam → Lubumbashi",
                    "The primary route for southeastern DR Congo (Lubumbashi, Likasi, Kolwezi) is via Dar es Salaam, Tanzania. Sea freight from JNPT to Dar es Salaam takes approximately 10-14 days. From Dar es Salaam, cargo transits overland via the TAZARA railway corridor or road transport to Lubumbashi — approximately 1,800km, taking 4-7 additional days. An alternative eastern route via Mombasa, Kenya is also available. Total transit: 16-22 days ocean + overland.",
                  ],
                  [
                    "Western route: JNPT → Matadi → Kinshasa",
                    "For Kinshasa and western DR Congo, cargo is routed via Matadi or Boma ports on the Congo River. This route typically involves transhipment at a hub port (Durban, Cape Town, or a West African hub). Sea freight takes approximately 18-22 days. From Matadi, cargo is transported to Kinshasa (approximately 350km) via road or the Matadi-Kinshasa railway. This route serves the western and central regions of DR Congo.",
                  ],
                  [
                    "Packaging for equatorial transit",
                    "All DR Congo-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants, tamper-evident sealing, and batch identification. Packaging is designed for equatorial tropical conditions — DR Congo's hot and humid climate (ICH Zone IVa) requires enhanced moisture and heat protection. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-DR Congo corridor.",
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
              DR CONGO EXPORT Q&amp;A
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
              <Link href="/export/south-africa/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                South Africa
              </Link>
              <Link href="/export/mozambique/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Mozambique
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* CTA */}
      <section className="py-20 border-t border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              START YOUR DR CONGO EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your DR Congo import
              requirements — ACOREP documentation, French-language labeling,
              formulation selection, MOQ, pricing, and shipping to Lubumbashi
              or Kinshasa. We respond within 48&nbsp;hours.
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
                href="https://wa.me/919729977795?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20DR%20Congo.%20Please%20share%20details."
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

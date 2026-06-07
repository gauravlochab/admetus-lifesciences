import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification accepted by Thai FDA",
    desc: "The Thai Food and Drug Administration (Thai FDA) under the Ministry of Public Health recognizes WHO-GMP certification as evidence of manufacturing quality compliance. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which streamlines the Thai FDA product registration process. Thailand has a moderately rigorous regulatory framework — stronger than Cambodia or Laos but less complex than Malaysia — and WHO-GMP status is an important foundation for product registration and market acceptance among Thai healthcare professionals.",
  },
  {
    title: "ASEAN distribution hub — gateway to CLMV",
    desc: "Thailand is ASEAN's logistics hub, with established overland transport corridors to Cambodia, Laos, and Myanmar (the CLMV markets). Establishing a supply chain and product presence in Thailand creates a strategic base for distributing to neighboring markets. Thai distributors often serve multi-country territories across mainland Southeast Asia. An Admetus partnership for Thailand can serve as the anchor for a broader ASEAN distribution strategy — with Thailand as the hub and CLMV markets as spokes.",
  },
  {
    title: "Competitive against domestic Thai pharma",
    desc: "Thailand has a well-developed domestic pharmaceutical industry — unlike Cambodia or Laos. Thai manufacturers produce generic pharmaceuticals and nutraceuticals locally. However, India offers competitive advantages in specific categories: softgel capsule manufacturing expertise, WHO-GMP certification at lower cost points, and specialized formulations (Glutathione, high-dose Vitamin D3, complex combinations) that Thai manufacturers may not offer. Indian softgels compete on both price and formulation specialization in the Thai market.",
  },
  {
    title: "Five international certifications",
    desc: "Our facility holds WHO-GMP, FSSAI, GMP, HACCP, and Halal certifications. This multi-certification profile covers food safety, pharmaceutical manufacturing, hazard control, and religious dietary standards. While Thailand is a Buddhist-majority country, the southern provinces and urban Muslim communities represent a significant Halal-product market. Our Halal certification provides access to this segment without requiring separate manufacturing arrangements.",
  },
  {
    title: "Flexible MOQ and pilot orders",
    desc: "We understand that Thai importers — particularly those registering new products with Thai FDA — need flexibility in initial order sizes. We support pilot-volume orders for market testing and Thai FDA sample submission, with the ability to scale to full-container loads once product registration and market demand are established. This flexibility is especially valuable for Thai distributors testing new formulations or entering the nutraceutical import business alongside their domestic product portfolio.",
  },
];

const thaiFdaSteps = [
  [
    "Classify the product under Thai FDA categories",
    "Thai FDA classifies health products into several categories: modern medicines (ya phaen patchuban), dietary supplements (phuea sukhaphap), traditional medicines, and food products. The classification determines the registration pathway, documentation requirements, and evaluation timeline. Softgel capsules may fall under modern medicines or dietary supplements depending on the formulation, ingredients, and health claims. Thai FDA classification must be confirmed before proceeding with registration.",
  ],
  [
    "Appoint a Thai importer or license holder",
    "Thai FDA requires that all product registration applications be submitted by a locally registered Thai company. The Thai importer must hold a valid manufacturing/import license from Thai FDA. The foreign manufacturer cannot directly register products in Thailand. The Thai license holder assumes legal responsibility for the product in the Thai market, including adverse event reporting and post-market surveillance compliance.",
  ],
  [
    "Submit product registration dossier to Thai FDA",
    "The product registration dossier for Thai FDA includes: product formulation and specifications, manufacturing process documentation, Certificate of Analysis (COA), WHO-GMP certificate, Certificate of Pharmaceutical Product (CPP) from CDSCO India, stability data, product labeling in Thai language, and product samples for laboratory testing. Admetus prepares the complete manufacturer documentation package for the Thai importer to submit through Thai FDA's registration system.",
  ],
  [
    "Thai FDA evaluation and marketing authorization",
    "Thai FDA evaluates the submitted dossier, which may include documentary review, laboratory testing by the Department of Medical Sciences, and verification of manufacturing compliance. The evaluation timeline varies by product category — dietary supplements typically have shorter review periods than pharmaceutical products. Upon successful evaluation, Thai FDA issues the marketing authorization (registration number), which authorizes import and sale of the specific product in Thailand.",
  ],
  [
    "Import clearance and distribution",
    "Once Thai FDA registration is secured, each import shipment requires customs clearance at the destination port. Thai customs verifies the Thai FDA registration number, commercial invoice, packing list, COA, and import license. The importer's customs broker handles clearance at Laem Chabang port or Bangkok Port (Klong Toey). Distribution channels in Thailand include pharmacy chains (Boots, Watsons), hospital pharmacies, modern trade retailers, and a rapidly growing e-commerce sector.",
  ],
];

const products = [
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Cardiovascular disease is a leading cause of death in Thailand, with ischemic heart disease and stroke accounting for a significant portion of mortality. Thailand's urbanization and dietary shifts toward processed foods are driving cardiovascular risk factors. Omega-3 softgel capsules are widely recommended by Thai physicians and are available through pharmacy retail across the country. The Thai market is competitive — domestic manufacturers produce Omega-3 products — but Indian manufacturers can compete on price and offer specialized formulation combinations.",
  },
  {
    name: "Glutathione (Reduced L-Glutathione) Softgel Capsules",
    relevance: "Thailand has a strong beauty and personal care culture, heavily influenced by Korean beauty trends. Glutathione supplements are popular for their skin-brightening and antioxidant properties, particularly among Thai women in urban markets like Bangkok, Chiang Mai, and Phuket. Glutathione softgels are distributed through pharmacy chains, aesthetic clinics, beauty e-commerce platforms, and social media commerce channels. The Thai beauty supplement market is sophisticated and growing.",
  },
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Despite Thailand's tropical climate, Vitamin D deficiency is increasingly documented among Thai populations — particularly urban office workers, elderly individuals, and those who avoid sun exposure for cosmetic reasons. Thai physicians are increasingly prescribing Vitamin D3 for deficiency treatment, immune support, and bone health. The high-dose 60,000 IU format serves therapeutic correction, while maintenance-dose formulations serve the growing retail pharmacy market.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Thailand's health-conscious urban population drives sustained demand for multivitamin supplements. The country's diverse dietary patterns and increasing awareness of micronutrient gaps fuel multivitamin sales. Thailand's well-developed pharmacy retail sector (Boots, Watsons, independent pharmacies) and modern trade channels (7-Eleven, Big C, Tops) provide extensive distribution infrastructure for multivitamin products with Thai FDA registration.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Thailand's aging population is driving increased demand for bone health products. Osteoporosis is a growing concern among post-menopausal Thai women and elderly individuals. The Calcitriol-Calcium-K2 combination is prescribed by Thai orthopedic specialists and endocrinologists for osteoporosis prevention and treatment. Thailand's healthcare system is well-developed with strong specialist physician networks, creating a reliable prescription-driven demand channel for bone health formulations.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by Thai FDA for product registration and by Thai importers for each shipment's customs clearance at Thai ports.",
  },
  {
    doc: "Certificate of Pharmaceutical Product (CPP) from CDSCO",
    desc: "Issued by India's Central Drugs Standard Control Organisation, the CPP confirms that the product is registered and freely manufactured and sold in India. Thai FDA requires a CPP from the country of origin as part of the product registration dossier. Admetus coordinates the CPP application with CDSCO and provides the authenticated certificate.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. Thai FDA accepts WHO-GMP as baseline evidence of manufacturing quality — this certificate is a key document in the product registration dossier and supports the evaluation process for both pharmaceutical and dietary supplement categories.",
  },
  {
    doc: "Stability Data & Shelf Life Documentation",
    desc: "Accelerated and real-time stability study data for each product under ICH climatic Zone IVb conditions (relevant to Thailand's tropical climate). Thai FDA requires stability data to verify shelf life claims. We provide stability protocols and results as part of the registration documentation package.",
  },
  {
    doc: "Product Labeling Documentation",
    desc: "Complete labeling information including ingredients, dosage, storage conditions, manufacturer details, and warnings. Thai FDA requires labeling in Thai language. Admetus provides the base labeling content for the Thai importer to translate and adapt for Thai FDA compliance, including any mandatory warning statements and health claim restrictions.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF pricing, HS codes, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by Thai customs for import duty assessment and clearance at Laem Chabang port or Bangkok Port (Klong Toey).",
  },
];

const faqs = [
  {
    q: "What is required for Thai FDA product registration of imported softgels?",
    a: "Thai FDA requires product registration for every imported pharmaceutical and dietary supplement product. The registration application must be submitted by a locally licensed Thai company. The dossier requires: product formulation details, manufacturing process documentation, Certificate of Analysis (COA), WHO-GMP certificate, Certificate of Pharmaceutical Product (CPP) from CDSCO India, stability data, product labeling in Thai language, and product samples for laboratory testing by the Department of Medical Sciences. Admetus provides the complete manufacturer documentation package — WHO-GMP certificate, CPP coordination, stability data, COA, and labeling content — enabling Thai importers to compile and submit their Thai FDA registration application.",
  },
  {
    q: "Is Thailand a competitive market for imported softgels?",
    a: "Yes. Thailand has a well-developed domestic pharmaceutical industry, so imported softgels face competition from local manufacturers. However, Indian manufacturers compete effectively in specific segments: specialized formulations (Glutathione, high-dose Vitamin D3, complex combinations), WHO-GMP certified quality at competitive price points, and private label services that Thai distributors value. Thailand's pharmaceutical market is large (70 million population) and sophisticated, with strong pharmacy retail and e-commerce distribution channels. The key is to offer formulations and pricing that complement or outperform domestic Thai options.",
  },
  {
    q: "Can Thailand serve as a hub for distributing to Cambodia, Laos, and Myanmar?",
    a: "Yes. Thailand is ASEAN's logistics hub for mainland Southeast Asia. Thai distributors often serve multi-country territories covering Thailand, Cambodia, Laos, and Myanmar (CLMV). Establishing a supply chain and product registrations in Thailand creates a strategic base for expanding into neighboring markets via established overland transport corridors. Bangkok/Laem Chabang serves as the cargo entry point, with distribution to Cambodia (via Aranyaprathet/Poipet border), Laos (via Nong Khai/Vientiane), and Myanmar (via Mae Sot/Myawaddy). An Admetus-Thailand partnership can anchor a broader ASEAN distribution strategy.",
  },
  {
    q: "How long does shipping take from India to Thailand?",
    a: "Sea freight from Chennai Port or JNPT (Mumbai) to Thailand — Laem Chabang port (near Bangkok) — takes approximately 10-14 days transit time. Laem Chabang is Thailand's largest port and primary gateway for containerized imports. Multiple major shipping lines serve the India-Thailand route with weekly departures. After port arrival, customs clearance at Thai ports typically takes 3-7 business days depending on documentation completeness. Total transit from factory dispatch to warehouse delivery in Thailand is typically 18-28 days.",
  },
  {
    q: "What is the MOQ for Thailand export orders?",
    a: "MOQs depend on the formulation, packaging format, and order configuration. For initial orders — particularly those tied to Thai FDA registration and market testing — we offer pilot volumes. Once Thai FDA registration is secured and market demand is established, we support full 20ft and 40ft container loads for ongoing supply. Thailand's market size (70 million population) typically supports viable commercial-scale orders. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Can Admetus supply private label softgels for the Thai market?",
    a: "Yes. We offer full private label and contract manufacturing services for the Thai market. This includes custom formulation development, your brand name and artwork on packaging, Thai FDA-compliant labeling content (in Thai language), and all manufacturer documentation needed for registration under your brand. Private label services are particularly valuable for Thai distributors who want to build their own brand alongside imported branded products. Omega-3, Glutathione, Multivitamins, and Vitamin D3 are among the most commonly requested private label formulations for Thailand. Contact team@admetuslifesciences.com for requirements and pricing.",
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
      name: "Thailand",
      item: "https://www.admetuslifesciences.com/export/thailand/",
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

export default function ThailandPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Thailand — WHO-GMP certified, Thai FDA documentation ready"
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
            India &rarr; Thailand
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;THAILAND
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            Thai importers with Thai FDA-ready documentation, competitive
            pricing, ASEAN distribution hub positioning, and flexible
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
                THAILAND PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Thailand is Southeast Asia&apos;s second-largest economy and
                one of the most developed pharmaceutical markets in the
                region. With a population of approximately 70 million,
                Thailand has a mature healthcare system, strong pharmacy
                retail infrastructure (Boots, Watsons, independent
                pharmacies), and a well-developed domestic pharmaceutical
                manufacturing sector. The Thai pharmaceutical market is
                valued at over $6 billion.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Unlike Cambodia or Laos, Thailand has significant domestic
                pharmaceutical manufacturing capacity. Thai companies produce
                generic pharmaceuticals and nutraceuticals locally. However,
                Thailand remains a major importer of Indian generic
                pharmaceuticals — India is one of Thailand&apos;s top
                pharmaceutical supplier countries. Indian manufacturers
                compete in Thailand through competitive pricing, specialized
                formulations that Thai manufacturers may not offer, and
                WHO-GMP quality at cost-effective price points.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Thailand serves as ASEAN&apos;s primary distribution hub for
                mainland Southeast Asia. Thai distributors often cover
                multi-country territories including Cambodia, Laos, and
                Myanmar. Bangkok&apos;s Laem Chabang port is a major
                container transshipment hub, and overland logistics corridors
                connect Thailand to all neighboring countries. This hub
                position makes Thailand strategically important for
                manufacturers seeking ASEAN market coverage.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The Thai FDA (Food and Drug Administration) under the
                Ministry of Public Health regulates all pharmaceutical and
                dietary supplement imports. Thailand has a moderately rigorous
                regulatory framework — more demanding than Cambodia or Laos,
                comparable to Vietnam, but less complex than Malaysia&apos;s
                NPRA system. WHO-GMP certification is recognized and valued.
                The nutraceutical and health supplement segment is growing
                rapidly, driven by Thailand&apos;s aging population, health
                consciousness, and medical tourism industry.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Thai FDA Regulatory Section */}
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
                  THAI FDA REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The Thai Food and Drug Administration (Thai FDA) under the
                  Ministry of Public Health regulates all pharmaceutical and
                  dietary supplement imports into Thailand. WHO-GMP
                  certification is recognized and streamlines the
                  registration&nbsp;process.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {thaiFdaSteps.map(([title, desc], i) => (
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
              Why Admetus for Thailand
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY THAI IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE THAI&nbsp;MARKET
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
              under your brand name for the Thai market. See our{" "}
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
              DOCUMENTATION FOR THAI FDA &amp;&nbsp;CUSTOMS
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
                  INDIA TO THAILAND SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-Thailand shipping corridor is well-established
                  for pharmaceutical cargo, with regular container vessel
                  services from Chennai to Laem Chabang — Thailand&apos;s
                  largest&nbsp;port.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: Chennai Port or JNPT (Mumbai)",
                    "Products are dispatched from our Jind, Haryana facility to either Chennai Port or JNPT (Nhava Sheva) in Mumbai. Chennai Port is the preferred origin for Thailand-bound cargo due to shorter transit times. Cargo is consolidated, inspected, and cleared for export at the port's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Sea freight: India to Laem Chabang",
                    "Container vessel services from Chennai/JNPT to Laem Chabang port (near Bangkok) operate on regular schedules with 10-14 days ocean transit time. Laem Chabang is Thailand's largest deep-water port, handling the majority of the country's containerized imports. Multiple major shipping lines serve the India-Thailand route with weekly departures, ensuring consistent supply chain reliability.",
                  ],
                  [
                    "Destination: Laem Chabang Port",
                    "Pharmaceutical imports arrive at Laem Chabang port, located approximately 120 km southeast of Bangkok in Chonburi province. Bangkok Port (Klong Toey) is an alternative for smaller shipments closer to the city center. Thai customs clearance typically takes 3-7 business days depending on documentation completeness. The importer's customs broker handles port-side clearance with the documentation package we provide.",
                  ],
                  [
                    "Packaging for tropical transit",
                    "All Thailand-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants and moisture barriers, tamper-evident sealing, and batch identification. Packaging is designed for tropical transit conditions and Thailand's high-humidity environment. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-Thailand corridor.",
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
              THAILAND EXPORT Q&amp;A
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
              START YOUR THAILAND EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Thailand import
              requirements — Thai FDA documentation, formulations, MOQ,
              pricing, and ASEAN distribution strategy. We respond within
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
                href="https://wa.me/917497841608?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Thailand.%20Please%20share%20details."
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

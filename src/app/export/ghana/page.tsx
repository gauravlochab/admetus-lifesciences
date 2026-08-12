import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification accepted by FDA Ghana",
    desc: "FDA Ghana (Food and Drugs Authority) — Ghana's pharmaceutical and food safety regulatory body — recognizes WHO-GMP certification as evidence of manufacturing quality standards. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which streamlines the FDA Ghana product registration process and reduces the likelihood of requiring a separate manufacturing site inspection.",
  },
  {
    title: "Five international certifications",
    desc: "Beyond WHO-GMP, our facility holds FSSAI, GMP, HACCP, and Halal certifications. This multi-certification profile demonstrates compliance across food safety, pharmaceutical manufacturing, hazard control, and religious dietary standards — covering the documentation requirements of FDA Ghana and Ghanaian importers across different product categories.",
  },
  {
    title: "Export documentation for FDA Ghana registration",
    desc: "We provide the complete documentation package that Ghanaian importers need for FDA Ghana product registration: Certificate of Analysis (COA), Free Sale Certificate (authenticated), WHO-GMP certificate, ingredient declarations, stability data, manufacturing process flow, and product samples for FDA Ghana laboratory testing. Our export team is experienced in preparing FDA Ghana-specific documentation.",
  },
  {
    title: "Competitive pricing for West African markets",
    desc: "Ghana is a price-sensitive pharmaceutical market where competitive landed cost determines market viability. Our Haryana facility operates with lower overhead than manufacturers in Mumbai, Hyderabad, or Ahmedabad. Our direct-to-importer model and optimized production costs allow us to offer pricing that enables Ghanaian distributors to maintain competitive retail margins.",
  },
  {
    title: "Flexible MOQ and pilot orders",
    desc: "We understand that Ghanaian importers — particularly those registering new products with FDA Ghana — need flexibility in initial order sizes. We support pilot-volume orders for market testing and FDA Ghana sample submission, with the ability to scale to full-container loads once product registration and market demand are established.",
  },
];

const fdaGhanaSteps = [
  [
    "Appoint a Superintendent Pharmacist in Ghana",
    "FDA Ghana requires all imported pharmaceutical and nutraceutical products to be represented by a registered Superintendent Pharmacist in Ghana. The Superintendent Pharmacist is a licensed pharmacist who takes legal responsibility for the products being imported, oversees storage and distribution, and serves as the regulatory liaison with FDA Ghana. This is a mandatory prerequisite — no product registration can proceed without a designated Superintendent Pharmacist.",
  ],
  [
    "Manufacturer GMP assessment by FDA Ghana",
    "FDA Ghana may conduct a GMP assessment of the manufacturing facility as part of the product registration process. Our WHO-GMP certification significantly reduces the scope and likelihood of an on-site inspection, but we welcome and facilitate FDA Ghana inspection visits to our Jind, Haryana facility when required. We provide facility access, documentation, and staff availability for inspection teams.",
  ],
  [
    "Product registration via ICUMS",
    "Ghana uses the Integrated Customs Management System (ICUMS) for import processing. All pharmaceutical imports must be registered through ICUMS and cleared via FDA Ghana's product registration portal. We prepare the manufacturer's dossier — including COA, stability data, WHO-GMP certificate, Free Sale Certificate, and formulation details — for submission through the ICUMS system by your Superintendent Pharmacist.",
  ],
  [
    "Product samples for FDA Ghana laboratory testing",
    "FDA Ghana requires product samples for independent laboratory testing at the FDA Ghana Quality Control Laboratory. We prepare and ship the required sample quantities (typically 20-50 units per product) with full Certificate of Analysis documentation. FDA Ghana tests for identity, assay, dissolution, microbial limits, and heavy metal content.",
  ],
  [
    "FDA Ghana registration number issuance",
    "Upon successful completion of documentation review, GMP assessment, and laboratory testing, FDA Ghana issues a product registration number. This registration number must appear on all product packaging and labeling for the Ghanaian market. Registration is typically valid for 5 years and renewable. The process from application to approval typically takes 4-8 months.",
  ],
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Despite Ghana's tropical climate, Vitamin D deficiency is increasingly documented among Ghanaian populations — particularly in urban centers like Accra and Kumasi where indoor lifestyles and sun-protective practices limit UV exposure. Vitamin D3 softgel capsules are prescribed by Ghanaian physicians for deficiency treatment and represent a growing pharmacy retail segment.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Cardiovascular disease and hypertension are leading causes of morbidity and mortality in Ghana. With urbanization and dietary transitions accelerating, Omega-3 softgel capsules are increasingly recommended by Ghanaian healthcare providers for cardiovascular risk management, cholesterol control, and anti-inflammatory support — addressing Ghana's growing NCD burden.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Ghana has a significant burden of micronutrient deficiency — iron, zinc, Vitamin A, and B-complex deficiencies are prevalent, particularly in northern Ghana and among women of reproductive age and children. Multivitamin softgel capsules address multiple deficiencies in a single convenient dosage form and are distributed through pharmacy retail, clinics, and institutional health programs.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations serve Ghana's growing elderly population and women's health segment. Osteoporosis and calcium deficiency are under-diagnosed but increasingly recognized health concerns. The Calcitriol-Calcium-K2 combination is prescribed by Ghanaian orthopedic specialists, women's health practitioners, and general physicians for bone density management.",
  },
  {
    name: "Lycopene + Grape Seed Extract Multivitamin",
    relevance: "Antioxidant formulations are positioned in Ghana's growing preventive health and wellness market. Lycopene (prostate health) and Grape Seed Extract (cardiovascular and skin health) address health concerns relevant to Ghana's disease profile — prostate cancer awareness is increasing rapidly in the Ghanaian male population.",
  },
  {
    name: "Ginseng + Astaxanthin Multivitamin",
    relevance: "Energy and vitality supplements have strong demand in Ghana's urban pharmacy market — Accra, Kumasi, Takoradi, and Tamale. Ginseng-based softgel capsules are marketed for energy, stamina, and immune support, targeting working professionals and health-conscious consumers in Ghana's expanding middle class.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by FDA Ghana for product registration and by Ghanaian importers for each shipment's customs clearance at Tema Port.",
  },
  {
    doc: "Free Sale Certificate (Embassy Authenticated)",
    desc: "Indian government-issued certificate confirming the product is freely manufactured and sold in India. For Ghana, this must be authenticated by the Ghanaian Embassy/High Commission in India. We prepare the certificate and coordinate the authentication process.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. FDA Ghana recognizes WHO-GMP as baseline evidence of manufacturing quality — this certificate is a key document in the FDA Ghana registration dossier.",
  },
  {
    doc: "Manufacturing License & FSSAI",
    desc: "Indian manufacturing license and FSSAI (Food Safety and Standards Authority of India) registration. These documents establish the legal manufacturing authorization and food safety compliance of the facility for FDA Ghana review.",
  },
  {
    doc: "Stability Data & Process Flow",
    desc: "Accelerated and real-time stability study data for the specific product, along with manufacturing process flow documentation. FDA Ghana requires this for product registration to verify shelf life claims and manufacturing consistency.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF Tema pricing, HS codes, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by Ghana Revenue Authority (GRA) and Ghana Customs for import duty assessment via ICUMS.",
  },
];

const faqs = [
  {
    q: "What is FDA Ghana and how does it affect importing softgels to Ghana?",
    a: "FDA Ghana — the Food and Drugs Authority — is Ghana's regulatory body for pharmaceuticals, food, cosmetics, and medical devices. All pharmaceutical and nutraceutical products imported into Ghana must be registered with FDA Ghana before they can be sold. The registration process involves documentation review, manufacturer GMP assessment, Free Sale Certificate authentication, and laboratory testing of product samples. FDA Ghana registration typically takes 4-8 months and is valid for 5 years. Admetus provides the complete manufacturer documentation package required for FDA Ghana registration.",
  },
  {
    q: "Can Admetus export softgel capsules to Ghana?",
    a: "Yes. Admetus Lifesciences is an export-ready softgel capsule manufacturer with WHO-GMP certification — recognized by FDA Ghana as evidence of manufacturing quality standards. We provide the full documentation package for FDA Ghana registration: COA, Free Sale Certificate (with embassy authentication support), WHO-GMP certificate, stability data, manufacturing process flow, and product samples. We have the certifications, documentation capability, and production capacity to serve Ghanaian importers and distributors.",
  },
  {
    q: "Do I need a Superintendent Pharmacist to import softgels into Ghana?",
    a: "Yes. FDA Ghana requires all imported pharmaceutical and nutraceutical products to be overseen by a registered Superintendent Pharmacist in Ghana. The Superintendent Pharmacist is a licensed Ghanaian pharmacist who assumes legal responsibility for the imported products, manages regulatory compliance, and communicates with FDA Ghana on behalf of the importing company. This is a mandatory requirement before product registration can begin.",
  },
  {
    q: "What are the port restrictions for pharmaceutical imports into Ghana?",
    a: "Pharmaceutical imports into Ghana are restricted to Tema Port (sea freight) and Kotoka International Airport (air freight) — these are the only two entry points authorized by FDA Ghana for pharmaceutical cargo. Tema Port, located near Accra, handles the vast majority of containerized pharmaceutical imports from India. All pharmaceutical shipments must clear FDA Ghana inspection and customs processing at the designated port of entry.",
  },
  {
    q: "How long does shipping take from India to Ghana?",
    a: "Sea freight from JNPT (Mumbai) to Tema Port takes approximately 16-20 days transit time. This is the standard shipping route for pharmaceutical cargo from western India to Ghana. After port arrival, customs clearance at Tema Port via ICUMS typically takes 5-8 business days depending on documentation completeness and FDA Ghana verification. Total transit from factory dispatch to warehouse delivery in Accra is typically 28-35 days.",
  },
  {
    q: "What softgel products are in highest demand in Ghana?",
    a: "Based on Ghana's disease burden and pharmacy market demand, the highest-demand softgel formulations are: Multivitamins (addressing widespread micronutrient deficiency), Omega-3 for cardiovascular health (Ghana's growing NCD burden), Vitamin D3 for deficiency treatment, Calcitriol + Calcium for bone health, and Lycopene-based antioxidant formulations. Energy and vitality supplements (Ginseng-based) also have strong demand in Ghana's urban pharmacy retail market in Accra and Kumasi. All these formulations are in our standard production line.",
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
      name: "Ghana",
      item: "https://www.admetuslifesciences.com/export/ghana/",
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

export default function GhanaPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Ghana — WHO-GMP certified, FDA Ghana documentation ready"
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
            India &rarr; Ghana
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;GHANA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            Ghanaian importers with FDA Ghana-ready documentation, competitive
            pricing, and flexible order&nbsp;volumes.
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
                GHANA&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Ghana is the fastest-growing pharmaceutical import market in
                Africa for Indian manufacturers. Ghanaian pharmaceutical imports
                from India total approximately $220 million annually and are
                growing at 22.6% year-over-year — making Ghana one of the most
                dynamic and strategically important African destinations for
                Indian pharmaceutical exporters.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                This rapid growth is driven by Ghana&apos;s expanding National
                Health Insurance Scheme (NHIS), increasing healthcare
                expenditure, a growing middle class with rising disposable
                income, and the Ghanaian government&apos;s commitment to
                improving pharmaceutical access across the country. India offers
                WHO-GMP certified manufacturing at price points that Ghanaian
                distributors and consumers can afford, with an established
                logistics corridor from Mumbai to Tema.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The nutraceutical softgel segment is growing within this broader
                pharmaceutical trade. As Ghana&apos;s disease burden shifts
                toward non-communicable diseases (cardiovascular disease,
                diabetes, hypertension) alongside persistent infectious disease
                challenges (malaria, respiratory infections), demand is
                increasing for preventive health supplements, multivitamins,
                and condition-specific nutraceutical formulations.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                All pharmaceutical and nutraceutical imports into Ghana must be
                registered with FDA Ghana — the Food and Drugs Authority. Import
                is restricted to two entry points only: Tema Port for sea
                freight and Kotoka International Airport for air freight. A
                registered Superintendent Pharmacist is required to oversee all
                pharmaceutical imports, and products must be cleared through
                Ghana&apos;s ICUMS (Integrated Customs Management System).
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FDA Ghana Regulatory Section */}
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
                  FDA GHANA REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  FDA Ghana — the Food and Drugs Authority — regulates all
                  pharmaceutical and nutraceutical imports into Ghana. The
                  registration process is structured and typically takes
                  4-8&nbsp;months.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {fdaGhanaSteps.map(([title, desc], i) => (
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
              Why Admetus for Ghana
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY GHANAIAN IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE GHANAIAN&nbsp;MARKET
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
              under your brand name for the Ghanaian market. See our{" "}
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
              DOCUMENTATION FOR FDA GHANA &amp;&nbsp;CUSTOMS
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
                  INDIA TO GHANA SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-Ghana shipping corridor is well-established for
                  pharmaceutical cargo, with regular container vessel services
                  from Mumbai to&nbsp;Tema.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: JNPT (Nhava Sheva), Mumbai",
                    "Products are dispatched from our Jind, Haryana facility to JNPT port in Mumbai — approximately 1,200km by road, 2-3 days transit. JNPT is India's largest container port and the primary departure point for pharmaceutical exports to West Africa. Cargo is consolidated, inspected, and cleared for export at JNPT's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Sea freight: Mumbai to Tema",
                    "Container vessel services from JNPT to Tema Port operate on regular schedules with 16-20 days ocean transit time. Pharmaceutical cargo is shipped in standard dry containers with temperature monitoring for heat-sensitive products. Multiple shipping lines serve the Mumbai-Tema route with weekly departures.",
                  ],
                  [
                    "Destination: Tema Port, Greater Accra",
                    "Pharmaceutical imports into Ghana are restricted to Tema Port (sea freight) and Kotoka International Airport (air freight) — these are the only two authorized entry points for pharmaceutical cargo. Customs clearance at Tema Port via ICUMS typically takes 5-8 business days. The importer's customs broker handles port-side clearance with the documentation package we provide (commercial invoice, packing list, COA, FDA Ghana registration evidence).",
                  ],
                  [
                    "Packaging for transit",
                    "All Ghana-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants, tamper-evident sealing, and batch identification. Packaging is designed for 20+ day sea transit in tropical conditions. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-Ghana corridor.",
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
              GHANA EXPORT Q&amp;A
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
              START YOUR GHANA EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Ghana import
              requirements — FDA Ghana documentation, formulation selection, MOQ,
              pricing, and shipping to Tema Port. We respond within 48&nbsp;hours.
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
                href="https://wa.me/919729977795?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Ghana.%20Please%20share%20details."
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

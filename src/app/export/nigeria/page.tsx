import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification accepted by NAFDAC",
    desc: "NAFDAC (National Agency for Food and Drug Administration and Control) — Nigeria's pharmaceutical regulatory body — recognizes WHO-GMP certification as evidence of manufacturing quality standards. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which streamlines the NAFDAC product registration process and reduces the likelihood of requiring a separate manufacturing site inspection.",
  },
  {
    title: "Five international certifications",
    desc: "Beyond WHO-GMP, our facility holds FSSAI, GMP, HACCP, and Halal certifications. This multi-certification profile demonstrates compliance across food safety, pharmaceutical manufacturing, hazard control, and religious dietary standards — covering the documentation requirements of NAFDAC and Nigerian importers across different product categories.",
  },
  {
    title: "Export documentation for NAFDAC registration",
    desc: "We provide the complete documentation package that Nigerian importers need for NAFDAC product registration: Certificate of Analysis (COA), Free Sale Certificate (authenticated), WHO-GMP certificate, ingredient declarations, stability data, manufacturing process flow, and product samples for NAFDAC laboratory testing. Our export team is experienced in preparing NAFDAC-specific documentation.",
  },
  {
    title: "Competitive pricing for African markets",
    desc: "Nigeria is a price-sensitive pharmaceutical market where competitive landed cost determines market viability. Our Haryana facility operates with lower overhead than manufacturers in Mumbai, Hyderabad, or Ahmedabad. Our direct-to-importer model and optimized production costs allow us to offer pricing that enables Nigerian distributors to maintain competitive retail margins.",
  },
  {
    title: "Flexible MOQ and pilot orders",
    desc: "We understand that Nigerian importers — particularly those registering new products with NAFDAC — need flexibility in initial order sizes. We support pilot-volume orders for market testing and NAFDAC sample submission, with the ability to scale to full-container loads once product registration and market demand are established.",
  },
];

const nafdacSteps = [
  [
    "Appoint a local agent in Nigeria",
    "NAFDAC requires all imported pharmaceutical and nutraceutical products to be represented by a locally registered company or authorized agent in Nigeria. The local agent handles the registration application, communication with NAFDAC, and is legally responsible for the product in the Nigerian market. This is a mandatory first step before any product registration can begin.",
  ],
  [
    "Manufacturer GMP inspection",
    "NAFDAC may conduct a GMP inspection of the manufacturing facility as part of the product registration process. Our WHO-GMP certification significantly reduces the scope and likelihood of an on-site inspection, but we welcome and facilitate NAFDAC inspection visits to our Jind, Haryana facility when required. We provide facility access, documentation, and staff availability for inspection teams.",
  ],
  [
    "Free Sale Certificate authentication",
    "The Free Sale Certificate issued by Indian regulatory authorities must be authenticated by the Nigerian Embassy or High Commission in India. This authenticated document confirms that the products are freely manufactured and sold in the country of origin. We prepare the Free Sale Certificate and coordinate the embassy authentication process.",
  ],
  [
    "Product samples for NAFDAC laboratory testing",
    "NAFDAC requires product samples for independent laboratory testing at NAFDAC's own analytical laboratories in Nigeria. We prepare and ship the required sample quantities (typically 20-50 units per product) with full Certificate of Analysis documentation. NAFDAC tests for identity, assay, dissolution, microbial limits, and heavy metal content.",
  ],
  [
    "NAFDAC registration number issuance",
    "Upon successful completion of documentation review, GMP assessment, and laboratory testing, NAFDAC issues a registration number for the product. This NAFDAC registration number must appear on all product packaging and labeling for the Nigerian market. Registration is typically valid for 5 years and renewable. The process from application to approval typically takes 6-12 months.",
  ],
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Despite Nigeria's equatorial location, Vitamin D deficiency is increasingly documented in Nigerian populations — particularly in urban areas where indoor lifestyles, pollution, and sun-protective clothing limit UV exposure. Vitamin D3 softgel capsules are prescribed by Nigerian physicians for deficiency treatment and are a growing segment in pharmacy retail.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Cardiovascular disease and hypertension are leading causes of death in Nigeria. The disease burden is growing with urbanization, dietary changes, and an aging population. Omega-3 softgel capsules are increasingly recommended by Nigerian healthcare providers for cardiovascular risk management, cholesterol control, and anti-inflammatory support.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Nigeria has a significant burden of micronutrient deficiency across all age groups — iron, zinc, Vitamin A, and B-complex deficiencies are prevalent, particularly in northern Nigeria and among women and children. Multivitamin softgel capsules address multiple deficiencies in a single convenient dosage form and are distributed through both pharmacy retail and institutional health programs.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations serve Nigeria's growing elderly population and women's health segment. Osteoporosis and calcium deficiency are under-diagnosed but increasingly recognized health concerns in Nigeria. The Calcitriol-Calcium-K2 combination is prescribed by Nigerian orthopedic specialists and women's health practitioners.",
  },
  {
    name: "Lycopene + Grape Seed Extract Multivitamin",
    relevance: "Antioxidant formulations are positioned in Nigeria's growing preventive health and wellness market. Lycopene (prostate health) and Grape Seed Extract (cardiovascular and skin health) address health concerns relevant to Nigeria's disease profile — prostate cancer being one of the most common cancers in Nigerian men.",
  },
  {
    name: "Ginseng + Astaxanthin Multivitamin",
    relevance: "Energy and vitality supplements have strong demand in Nigeria's urban pharmacy market — Lagos, Abuja, Port Harcourt, and Kano. Ginseng-based softgel capsules are marketed for energy, stamina, and immune support, targeting working professionals and health-conscious consumers in Nigeria's large and growing middle class.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by NAFDAC for product registration and by Nigerian importers for each shipment's customs clearance.",
  },
  {
    doc: "Free Sale Certificate (Embassy Authenticated)",
    desc: "Indian government-issued certificate confirming the product is freely manufactured and sold in India. For Nigeria, this must be authenticated by the Nigerian Embassy/High Commission in India. We prepare the certificate and coordinate the authentication process.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. NAFDAC recognizes WHO-GMP as baseline evidence of manufacturing quality — this certificate is a key document in the NAFDAC registration dossier.",
  },
  {
    doc: "Manufacturing License & FSSAI",
    desc: "Indian manufacturing license and FSSAI (Food Safety and Standards Authority of India) registration. These documents establish the legal manufacturing authorization and food safety compliance of the facility for NAFDAC review.",
  },
  {
    doc: "Stability Data & Process Flow",
    desc: "Accelerated and real-time stability study data for the specific product, along with manufacturing process flow documentation. NAFDAC requires this for product registration to verify shelf life claims and manufacturing consistency.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF Lagos pricing, HS codes, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by Nigerian Customs Service (NCS) for import duty assessment.",
  },
];

const faqs = [
  {
    q: "What is NAFDAC and how does it affect importing softgels to Nigeria?",
    a: "NAFDAC — National Agency for Food and Drug Administration and Control — is Nigeria's pharmaceutical and food regulatory body. All pharmaceutical and nutraceutical products imported into Nigeria must be registered with NAFDAC before they can be sold. The registration process involves documentation review, manufacturer GMP assessment, Free Sale Certificate authentication, and laboratory testing of product samples. NAFDAC registration typically takes 6-12 months and is valid for 5 years. Admetus provides the complete manufacturer documentation package required for NAFDAC registration.",
  },
  {
    q: "Can Admetus export softgel capsules to Nigeria?",
    a: "Yes. Admetus Lifesciences is an export-ready softgel capsule manufacturer with WHO-GMP certification — recognized by NAFDAC as evidence of manufacturing quality standards. We provide the full documentation package for NAFDAC registration: COA, Free Sale Certificate (with embassy authentication support), WHO-GMP certificate, stability data, manufacturing process flow, and product samples. We have the certifications, documentation capability, and production capacity to serve Nigerian importers and distributors.",
  },
  {
    q: "Do I need a local agent in Nigeria to import softgels?",
    a: "Yes. NAFDAC requires all imported pharmaceutical and nutraceutical products to be represented by a locally registered Nigerian company or authorized agent. The local agent submits the product registration application, communicates with NAFDAC on behalf of the manufacturer, and assumes legal responsibility for the product in the Nigerian market. If you do not yet have a local agent, we can advise on the process based on our experience with the Nigerian market.",
  },
  {
    q: "What is the MOQ for Nigeria export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. For initial orders — particularly those tied to NAFDAC registration and market testing — we offer pilot volumes. Once NAFDAC registration is secured and market demand is established, we support full 20ft and 40ft container loads for ongoing supply. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How long does shipping take from India to Nigeria?",
    a: "Sea freight from JNPT (Mumbai) to Lagos — Apapa Port or Tin Can Island Port — takes approximately 18-22 days transit time. This is the standard shipping route for pharmaceutical cargo from western India to Nigeria. After port arrival, customs clearance at Nigerian ports typically takes 5-10 business days depending on documentation completeness and NAFDAC verification. Total transit from factory dispatch to warehouse delivery in Lagos is typically 30-40 days.",
  },
  {
    q: "What softgel products are in highest demand in Nigeria?",
    a: "Based on Nigeria's disease burden and pharmacy market demand, the highest-demand softgel formulations are: Multivitamins (addressing widespread micronutrient deficiency), Omega-3 for cardiovascular health (Nigeria's leading NCD burden), Vitamin D3 for deficiency treatment, Calcitriol + Calcium for bone health, and Lycopene-based antioxidant formulations for prostate health. Energy and vitality supplements (Ginseng-based) also have strong demand in Nigeria's urban pharmacy retail market. All these formulations are in our standard production line.",
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
      name: "Nigeria",
      item: "https://www.admetuslifesciences.com/export/nigeria/",
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

export default function NigeriaPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Nigeria — WHO-GMP certified, NAFDAC documentation ready"
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
            India &rarr; Nigeria
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;NIGERIA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            Nigerian importers with NAFDAC-ready documentation, competitive
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
                NIGERIA&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Nigeria is the largest pharmaceutical market in Africa — and
                India is its dominant supplier. Nigerian pharmaceutical imports
                from India total approximately $449 million annually, making
                Nigeria one of the most important African destinations for
                Indian pharmaceutical manufacturers.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                An estimated 70% of pharmaceutical products sold in Nigeria are
                Indian-manufactured generics. This deep trade relationship is
                structural: India offers WHO-GMP certified manufacturing at
                price points that Nigerian distributors and consumers can
                afford, with an established logistics corridor (Mumbai to Lagos)
                and decades of trade history between Indian manufacturers and
                Nigerian importers.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The nutraceutical softgel segment is growing within this
                broader pharmaceutical trade. As Nigeria&apos;s disease burden
                shifts toward non-communicable diseases (cardiovascular disease,
                diabetes, cancer) alongside persistent infectious disease
                challenges (malaria, HIV), demand is increasing for preventive
                health supplements, multivitamins, and condition-specific
                nutraceutical formulations.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                All pharmaceutical and nutraceutical imports into Nigeria must
                be registered with NAFDAC — the National Agency for Food and
                Drug Administration and Control. NAFDAC registration is a
                structured process that requires manufacturer documentation,
                GMP evidence, Free Sale Certificate authentication, and product
                sample testing. Indian manufacturers with WHO-GMP certification
                have a streamlined path through this process.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* NAFDAC Regulatory Section */}
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
                  NAFDAC REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  NAFDAC — the National Agency for Food and Drug Administration
                  and Control — regulates all pharmaceutical and nutraceutical
                  imports into Nigeria. The registration process is structured
                  and typically takes 6-12&nbsp;months.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {nafdacSteps.map(([title, desc], i) => (
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
              Why Admetus for Nigeria
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY NIGERIAN IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE NIGERIAN&nbsp;MARKET
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
              under your brand name for the Nigerian market. See our{" "}
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
              DOCUMENTATION FOR NAFDAC &amp;&nbsp;CUSTOMS
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
                  INDIA TO NIGERIA SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-Nigeria shipping corridor is well-established for
                  pharmaceutical cargo, with regular container vessel services
                  from Mumbai to&nbsp;Lagos.
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
                    "Sea freight: Mumbai to Lagos",
                    "Container vessel services from JNPT to Lagos ports operate on regular schedules with 18-22 days ocean transit time. Pharmaceutical cargo is shipped in standard dry containers with temperature monitoring for heat-sensitive products. Multiple shipping lines serve the Mumbai-Lagos route with weekly departures.",
                  ],
                  [
                    "Destination: Apapa or Tin Can Island Port, Lagos",
                    "Pharmaceutical imports arrive at Lagos — either Apapa Port or Tin Can Island Port. Nigerian customs clearance and NAFDAC verification at the port typically take 5-10 business days. The importer's customs broker handles port-side clearance with the documentation package we provide (commercial invoice, packing list, COA, NAFDAC registration evidence).",
                  ],
                  [
                    "Packaging for transit",
                    "All Nigeria-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants, tamper-evident sealing, and batch identification. Packaging is designed for 25+ day sea transit in tropical conditions. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-Nigeria corridor.",
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
              NIGERIA EXPORT Q&amp;A
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
              <Link href="/export/ghana/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Ghana
              </Link>
              <Link href="/export/senegal/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Senegal
              </Link>
              <Link href="/export/cameroon/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Cameroon
              </Link>
              <Link href="/export/sierra-leone/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Sierra Leone
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
              START YOUR NIGERIA EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Nigeria import
              requirements — NAFDAC documentation, formulation selection, MOQ,
              pricing, and shipping. We respond within 48&nbsp;hours.
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
                href="https://wa.me/919729977795?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Nigeria.%20Please%20share%20details."
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

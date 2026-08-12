import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification accepted by DAV",
    desc: "The Drug Administration of Vietnam (DAV) — under the Ministry of Health — recognizes WHO-GMP certification as evidence of manufacturing quality compliance. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which streamlines the Vietnamese product registration process. WHO-GMP status reduces the scope of additional manufacturing site inspections and accelerates the marketing authorization timeline for pharmaceutical and nutraceutical softgel products imported into Vietnam.",
  },
  {
    title: "India is a significant pharma supplier to Vietnam",
    desc: "India is already one of Vietnam's largest pharmaceutical suppliers, with well-established trade relationships in APIs, finished dosage forms, and nutraceutical products. Vietnamese importers are familiar with Indian pharmaceutical quality standards, WHO-GMP documentation, and regulatory procedures. This existing trade infrastructure makes India-Vietnam pharmaceutical exports efficient and predictable — from regulatory acceptance to shipping logistics and payment processing.",
  },
  {
    title: "Five international certifications",
    desc: "Beyond WHO-GMP, our facility holds FSSAI, GMP, HACCP, and Halal certifications. This multi-certification profile demonstrates compliance across food safety, pharmaceutical manufacturing, hazard control, and religious dietary standards — covering the documentation requirements of DAV and Vietnamese importers across different product categories. The breadth of certifications provides Vietnamese distributors with flexibility across pharmaceutical, nutraceutical, and food supplement categories.",
  },
  {
    title: "Competitive pricing for Vietnam's growing market",
    desc: "Vietnam's pharmaceutical market is growing at 10-12% annually, driven by a rapidly expanding middle class, increasing health insurance coverage, and rising consumer spending on health supplements. Our Haryana facility operates with lower overhead than manufacturers in major Indian metros, enabling competitive pricing that allows Vietnamese distributors to maintain healthy retail margins in a market where price sensitivity remains high across all consumer segments.",
  },
  {
    title: "Flexible MOQ and pilot orders",
    desc: "We understand that Vietnamese importers — particularly those registering new products with DAV — need flexibility in initial order sizes. We support pilot-volume orders for market testing and DAV sample submission, with the ability to scale to full-container loads once product registration and market demand are established. This flexibility is especially valuable for Vietnamese companies exploring new supplement categories or entering the nutraceutical import business for the first time.",
  },
];

const davSteps = [
  [
    "Identify product classification",
    "DAV classifies imported health products into different categories — pharmaceuticals (thuoc), dietary supplements (thuc pham chuc nang / thuc pham bao ve suc khoe), and traditional medicines. The classification determines the registration pathway, documentation requirements, and timeline. Softgel capsules may fall under pharmaceutical or dietary supplement categories depending on the formulation and health claims. Admetus provides product documentation suitable for both classification pathways.",
  ],
  [
    "Appoint a Vietnamese importer",
    "All product registration applications in Vietnam must be submitted by a locally registered Vietnamese company — either an importer, distributor, or local representative. The foreign manufacturer cannot directly register products with DAV. The Vietnamese importer must hold a valid business registration certificate and pharmaceutical trading license appropriate for the product category being imported.",
  ],
  [
    "Submit product registration dossier to DAV",
    "The product registration dossier for DAV includes: product formulation and specifications, manufacturing process documentation, Certificate of Analysis (COA), WHO-GMP certificate, Certificate of Pharmaceutical Product (CPP) from CDSCO India, stability data, product labeling in Vietnamese, and product samples for DAV laboratory testing. Admetus prepares the complete manufacturer documentation package for the Vietnamese importer to submit through DAV's registration portal.",
  ],
  [
    "DAV evaluation and marketing authorization",
    "DAV evaluates the submitted dossier, which may include documentary review, laboratory testing of product samples, and verification of manufacturing compliance. The evaluation timeline varies by product category — dietary supplements typically have shorter review periods than pharmaceutical products. Upon successful evaluation, DAV issues the marketing authorization (visa number), which authorizes import and sale of the specific product in Vietnam. The authorization is typically valid for 3-5 years.",
  ],
  [
    "Import clearance and distribution",
    "Once marketing authorization is secured, each import shipment requires customs clearance at the destination port. Vietnamese customs verifies the DAV registration number, commercial invoice, packing list, COA, and import license. The importer's customs broker handles port-side clearance at Ho Chi Minh City (Cat Lai) or Haiphong port. Post-clearance distribution must comply with Vietnam's GDP (Good Distribution Practice) requirements.",
  ],
];

const products = [
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Cardiovascular disease is a growing health concern in Vietnam, with hypertension rates increasing rapidly due to urbanization, dietary changes, and aging demographics. Omega-3 softgel capsules are widely recommended by Vietnamese healthcare providers for cardiovascular risk management, cholesterol control, and anti-inflammatory support. The growing middle class and increasing health awareness are driving sustained demand for Omega-3 supplements in pharmacy retail and emerging e-commerce channels across Vietnam.",
  },
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Vitamin D deficiency is increasingly documented in Vietnamese populations, particularly in urban areas where indoor lifestyles limit sun exposure. Vietnamese physicians are increasingly prescribing Vitamin D3 for deficiency treatment, immune support, and bone health. The high-dose 60,000 IU softgel format is used for therapeutic correction, while maintenance-dose formulations serve the retail supplement market. Vietnam's growing healthcare awareness is driving demand for evidence-based nutritional supplements.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Vietnam has documented micronutrient deficiencies — particularly iron, zinc, and Vitamin A — across various population segments. Multivitamin softgel capsules address multiple deficiencies in a convenient single dosage form. Vietnam's government nutrition programs and growing consumer health awareness are driving demand across both institutional and retail pharmacy channels. Urban Vietnamese consumers increasingly view daily multivitamin supplementation as part of a modern health-conscious lifestyle.",
  },
  {
    name: "Glutathione (Reduced L-Glutathione) Softgel Capsules",
    relevance: "Vietnam's beauty and personal care market is growing rapidly, driven by a young population with increasing disposable income and exposure to Korean and Japanese beauty trends. Glutathione softgel capsules are in demand for their skin-brightening and antioxidant properties, particularly among urban Vietnamese consumers in Ho Chi Minh City and Hanoi. The supplement is marketed through both pharmacy retail and e-commerce channels.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health is a growing concern in Vietnam, particularly among the aging population and women. Osteoporosis prevalence is significant among post-menopausal Vietnamese women. The Calcitriol-Calcium-K2 combination is prescribed by Vietnamese orthopedic specialists for osteoporosis prevention and treatment. Vietnam's rapidly aging demographics — with the 60+ population projected to reach 20% by 2038 — are driving sustained demand for bone health formulations.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by DAV for product registration and by Vietnamese importers for each shipment's customs clearance at Vietnamese ports.",
  },
  {
    doc: "Certificate of Pharmaceutical Product (CPP) from CDSCO",
    desc: "Issued by India's Central Drugs Standard Control Organisation, the CPP confirms that the product is registered and freely manufactured and sold in India. DAV requires a CPP from the country of origin as part of the product registration dossier. Admetus coordinates the CPP application with CDSCO.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. DAV accepts WHO-GMP as baseline evidence of manufacturing quality — this certificate is a key document in the product registration dossier and significantly reduces the likelihood of requiring a separate facility inspection.",
  },
  {
    doc: "Stability Data & Shelf Life Documentation",
    desc: "Accelerated and real-time stability study data for each product under ICH climatic Zone IVb conditions (relevant to Vietnam's tropical climate). DAV requires stability data to verify shelf life claims. We provide stability protocols and results as part of the registration documentation package.",
  },
  {
    doc: "Product Labeling Documentation",
    desc: "Complete labeling information including ingredients, dosage, storage conditions, manufacturer details, and warnings — formatted for Vietnamese regulatory requirements. Vietnamese labeling must be in Vietnamese (tieng Viet). Admetus provides the base labeling content for the Vietnamese importer to translate and adapt for DAV compliance.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF pricing, HS codes, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by Vietnamese customs for import duty assessment and clearance at Cat Lai (Ho Chi Minh City) or Haiphong ports.",
  },
];

const faqs = [
  {
    q: "What is required for DAV product registration of imported softgels?",
    a: "The Drug Administration of Vietnam (DAV) requires product registration for every imported pharmaceutical and nutraceutical product. The registration application must be submitted by a locally registered Vietnamese company. The dossier requires: product formulation details, manufacturing process documentation, Certificate of Analysis (COA), WHO-GMP certificate, Certificate of Pharmaceutical Product (CPP) from CDSCO India, stability data, product labeling in Vietnamese, and product samples for DAV laboratory testing. Admetus provides the complete manufacturer documentation package — WHO-GMP certificate, CPP coordination, stability data, COA, and labeling content — enabling Vietnamese importers to compile and submit their DAV registration application.",
  },
  {
    q: "What documentation does Admetus provide for Vietnamese import?",
    a: "We provide the complete manufacturer documentation package for DAV registration and Vietnamese customs clearance: Certificate of Analysis (batch-specific), WHO-GMP certificate, coordination for Certificate of Pharmaceutical Product (CPP) from CDSCO, stability data under Zone IVb tropical conditions, product specifications, base labeling content for Vietnamese translation, and commercial export documents (invoice, packing list, HS codes). We also provide product samples for DAV laboratory evaluation upon request.",
  },
  {
    q: "What is the MOQ for Vietnam export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. For initial orders — particularly those tied to DAV registration and market testing — we offer pilot volumes. Once marketing authorization is secured and market demand is established, we support full 20ft and 40ft container loads for ongoing supply. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How long does shipping take from India to Vietnam?",
    a: "Sea freight from Chennai Port or JNPT (Mumbai) to Ho Chi Minh City — Cat Lai port — takes approximately 10-14 days transit time. This is the primary shipping route for pharmaceutical cargo from India to Vietnam. Haiphong port in northern Vietnam is also served by regular container vessel services from Indian ports. After port arrival, customs clearance at Vietnamese ports typically takes 5-10 business days depending on documentation completeness and DAV verification. Total transit from factory dispatch to warehouse delivery is typically 20-30 days.",
  },
  {
    q: "Is Vietnam's pharmaceutical market growing?",
    a: "Yes. Vietnam's pharmaceutical market is one of the fastest-growing in Southeast Asia, expanding at 10-12% annually. The market is driven by a 100-million population, a rapidly growing middle class, increasing healthcare spending (both public and private), expanding health insurance coverage, and rising consumer awareness of preventive health and nutritional supplementation. Vietnam's GDP growth and urbanization trends are creating sustained demand for imported pharmaceutical and nutraceutical products, particularly softgel capsules in the cardiovascular, bone health, and beauty supplement categories.",
  },
  {
    q: "Can Admetus supply private label softgels for the Vietnamese market?",
    a: "Yes. We offer full private label and contract manufacturing services for the Vietnamese market. This includes custom formulation development, your brand name and artwork on packaging, DAV-compliant labeling content, and all manufacturer documentation needed for registration under your brand. Omega-3, Multivitamins, Vitamin D3, and Glutathione are among the most commonly requested private label formulations for Vietnam. Contact team@admetuslifesciences.com for specific requirements and pricing.",
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
      name: "Vietnam",
      item: "https://www.admetuslifesciences.com/export/vietnam/",
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

export default function VietnamPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Vietnam — WHO-GMP certified, DAV documentation ready"
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
            India &rarr; Vietnam
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;VIETNAM
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            Vietnamese importers with DAV-ready documentation, competitive
            pricing, flexible order volumes, and established India-Vietnam
            shipping&nbsp;routes.
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
                VIETNAM PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Vietnam is one of Southeast Asia&apos;s fastest-growing
                pharmaceutical markets, with a population of approximately
                100 million and a pharmaceutical sector expanding at 10-12%
                annually. The country&apos;s rapid economic development,
                growing middle class, and increasing health insurance coverage
                are driving sustained demand for imported pharmaceutical and
                nutraceutical products.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                India is already a significant pharmaceutical supplier to
                Vietnam, with established trade relationships across APIs,
                finished dosage forms, and nutraceutical products. Vietnamese
                importers are familiar with Indian pharmaceutical quality
                standards, WHO-GMP documentation, and CDSCO regulatory
                procedures. This existing trade infrastructure makes
                India-Vietnam pharmaceutical exports efficient and
                well-established.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Vietnam&apos;s healthcare spending is increasing rapidly —
                both through government programs and private out-of-pocket
                expenditure. The Vietnamese consumer is becoming increasingly
                health-conscious, with growing demand for preventive health
                supplements, vitamins, and nutraceuticals. E-commerce
                platforms are expanding access to health supplements beyond
                traditional pharmacy retail, particularly among younger urban
                consumers in Ho Chi Minh City and Hanoi.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The Drug Administration of Vietnam (DAV) — under the Ministry
                of Health — regulates all pharmaceutical and nutraceutical
                imports. DAV recognizes WHO-GMP certification, and Indian
                manufacturers with WHO-GMP status have a streamlined path
                through the Vietnamese product registration process. DAV
                classifies health products into pharmaceuticals and dietary
                supplements, with different registration pathways for each
                category.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* DAV Regulatory Section */}
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
                  DAV REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The Drug Administration of Vietnam (DAV) — under the
                  Ministry of Health — regulates all pharmaceutical and
                  nutraceutical imports into Vietnam. WHO-GMP certification is
                  recognized and streamlines the registration&nbsp;process.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {davSteps.map(([title, desc], i) => (
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
              Why Admetus for Vietnam
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY VIETNAMESE IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE VIETNAMESE&nbsp;MARKET
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
              under your brand name for the Vietnamese market. See our{" "}
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
              DOCUMENTATION FOR DAV &amp;&nbsp;CUSTOMS
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
                  INDIA TO VIETNAM SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-Vietnam shipping corridor is well-established for
                  pharmaceutical cargo, with regular container vessel services
                  from Chennai to Ho Chi Minh City&apos;s Cat Lai&nbsp;port.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: Chennai Port or JNPT (Mumbai)",
                    "Products are dispatched from our Jind, Haryana facility to either Chennai Port or JNPT (Nhava Sheva) in Mumbai. Both ports have regular container services to Vietnamese ports. Chennai Port offers shorter transit times to Southeast Asian destinations. Cargo is consolidated, inspected, and cleared for export at the port's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Sea freight: India to Ho Chi Minh City",
                    "Container vessel services from Chennai/JNPT to Ho Chi Minh City's Cat Lai port operate on regular schedules with 10-14 days ocean transit time. Pharmaceutical cargo is shipped in standard dry containers with temperature monitoring for heat-sensitive products. Multiple shipping lines serve the India-Vietnam route with weekly departures, ensuring consistent supply chain reliability.",
                  ],
                  [
                    "Destination: Cat Lai Port, Ho Chi Minh City",
                    "Pharmaceutical imports typically arrive at Cat Lai — Vietnam's busiest container port in Ho Chi Minh City. Haiphong port in northern Vietnam is an alternative for distribution to Hanoi and northern provinces. Vietnamese customs clearance at the port typically takes 5-10 business days depending on documentation completeness and DAV verification. The importer's customs broker handles port-side clearance with the documentation package we provide.",
                  ],
                  [
                    "Packaging for tropical transit",
                    "All Vietnam-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants and moisture barriers, tamper-evident sealing, and batch identification. Packaging is designed for tropical transit conditions and Vietnam's high-humidity environment. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-Vietnam corridor.",
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
              VIETNAM EXPORT Q&amp;A
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
              START YOUR VIETNAM EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Vietnam import
              requirements — DAV documentation, formulations, MOQ, pricing,
              and shipping. We respond within 48&nbsp;hours.
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
                href="https://wa.me/919729977795?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Vietnam.%20Please%20share%20details."
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

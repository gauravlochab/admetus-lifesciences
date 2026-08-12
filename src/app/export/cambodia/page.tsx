import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification — exceeds Cambodian requirements",
    desc: "Cambodia's pharmaceutical regulatory framework is less stringent than many ASEAN neighbors, but responsible importers and distributors prefer manufacturers with strong international certifications. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which provides Cambodian importers with quality assurance that exceeds baseline regulatory requirements. WHO-GMP documentation simplifies the product registration process with DDFM and provides a competitive differentiator for Cambodian distributors marketing to healthcare professionals and pharmacy chains.",
  },
  {
    title: "Flexible MOQ — ideal for Cambodia's market size",
    desc: "Cambodia's population of 17 million means individual order volumes are smaller than larger ASEAN markets. We understand this reality and support flexible minimum order quantities that match Cambodia's market demand. Pilot-volume orders for market entry and DDFM registration are available, with the ability to scale as your distribution network and market demand grow. This flexibility makes Admetus accessible to Cambodian importers of all sizes — from established pharmaceutical distributors to new entrants in the health supplement market.",
  },
  {
    title: "Minimal regulatory barriers — fast market entry",
    desc: "Cambodia has minimal domestic pharmaceutical manufacturing capacity and relies heavily on imported products. The regulatory pathway through DDFM (Department of Drugs and Food under the Ministry of Health) is comparatively straightforward — with fewer documentation requirements and shorter review timelines than markets like Indonesia, Malaysia, or the Philippines. This means Cambodian importers can achieve product registration and begin selling faster than in most other ASEAN countries.",
  },
  {
    title: "Five international certifications",
    desc: "Our facility holds WHO-GMP, FSSAI, GMP, HACCP, and Halal certifications. This multi-certification profile covers food safety, pharmaceutical manufacturing, hazard control, and religious dietary standards. For Cambodian importers, this breadth of certification means flexibility across product categories — from pharmaceutical softgels to dietary supplements and food-grade health products — all from a single certified manufacturer.",
  },
  {
    title: "Competitive pricing for a price-sensitive market",
    desc: "Cambodia is a price-sensitive market where affordability directly impacts market penetration and sales volume. Our Haryana facility operates with lower overhead than manufacturers in major Indian metros, enabling competitive pricing that allows Cambodian distributors to maintain viable retail margins. India's established position as a global pharmaceutical supplier — with cost advantages in API sourcing, manufacturing, and logistics — makes Indian softgel products highly competitive in the Cambodian market.",
  },
];

const ddfmSteps = [
  [
    "Appoint a Cambodian importer or distributor",
    "DDFM requires that all product registration applications be submitted by a locally registered Cambodian company — either an importer, distributor, or pharmaceutical company. The foreign manufacturer cannot directly register products in Cambodia. The Cambodian importer must hold a valid business registration and any licenses required for pharmaceutical or health product importation issued by the Ministry of Health.",
  ],
  [
    "Submit product registration to DDFM",
    "The product registration application to DDFM requires: product formulation and specifications, Certificate of Analysis (COA), GMP certificate (WHO-GMP is accepted and preferred), Certificate of Pharmaceutical Product (CPP) or Certificate of Free Sale (CFS) from the country of origin, product labeling, and product samples. The documentation requirements are less extensive than many ASEAN regulatory bodies. Admetus provides the complete manufacturer documentation package for the Cambodian importer to submit.",
  ],
  [
    "DDFM evaluation and product approval",
    "DDFM evaluates the submitted application, which typically involves documentary review and may include laboratory testing of product samples. The evaluation timeline is generally shorter than in more regulated ASEAN markets — typically 2-4 months for straightforward applications. Upon successful evaluation, DDFM issues the product registration, authorizing import and sale of the specific product in Cambodia.",
  ],
  [
    "Import clearance and distribution",
    "Once DDFM registration is secured, each import shipment requires customs clearance at the destination port or border crossing. Cambodian customs (General Department of Customs and Excise) verifies the registration documentation, commercial invoice, packing list, and COA. The importer's customs broker handles clearance at Sihanoukville port or Phnom Penh dry port. Distribution channels in Cambodia include pharmacies, clinics, hospitals, and an emerging modern retail sector.",
  ],
];

const products = [
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Cambodia has significant micronutrient deficiency challenges — iron, Vitamin A, zinc, and iodine deficiencies are prevalent, particularly in rural areas and among women and children. Multivitamin softgel capsules address multiple deficiencies in a convenient single dosage form. Both government nutrition programs and the growing private pharmacy sector drive demand for affordable, quality multivitamin products. Cambodia's improving healthcare infrastructure is increasing access to nutritional supplements across the country.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Cardiovascular health is an emerging health concern in Cambodia as the population urbanizes, diets change, and life expectancy increases. Omega-3 softgel capsules are recommended by healthcare providers for cardiovascular risk management and general health maintenance. The growing urban middle class in Phnom Penh and Siem Reap is driving demand for health supplements that were previously unavailable or unaffordable in the Cambodian market.",
  },
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Despite Cambodia's tropical climate, Vitamin D awareness is growing among Cambodian healthcare providers. Vitamin D3 softgel capsules serve both the therapeutic market (physician-prescribed for deficiency treatment) and the growing preventive supplement market. The high-dose 60,000 IU format is used for therapeutic correction under medical supervision, making it a valuable addition to Cambodian pharmacy offerings.",
  },
  {
    name: "Calcium + Vitamin D3 Softgel Capsules",
    relevance: "Bone health products serve Cambodia's growing awareness of osteoporosis and bone density concerns, particularly among older adults and women. Calcium-Vitamin D3 combination softgels are straightforward to register and market, with clear health claims that resonate with both healthcare professionals and consumers. This formulation is a strong entry point for Cambodian importers looking to build a softgel supplement portfolio.",
  },
  {
    name: "Evening Primrose Oil + Vitamin E",
    relevance: "Women's health supplements represent a growing market opportunity in Cambodia, driven by urbanization and increasing health awareness among Cambodian women. Evening Primrose Oil softgel capsules for hormonal balance and skin health are gaining traction in urban pharmacy retail, particularly in Phnom Penh. This product category has limited competition in the Cambodian market, offering good margins for early importers.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by DDFM for product registration and by Cambodian importers for each shipment's customs clearance.",
  },
  {
    doc: "Certificate of Pharmaceutical Product (CPP) from CDSCO",
    desc: "Issued by India's Central Drugs Standard Control Organisation, the CPP confirms that the product is registered and freely manufactured and sold in India. DDFM accepts a CPP or Certificate of Free Sale (CFS) from the country of origin as part of the product registration documentation. Admetus coordinates the CPP application with CDSCO.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. DDFM accepts WHO-GMP as strong evidence of manufacturing quality. This certificate strengthens the product registration application and provides Cambodian importers with quality documentation that exceeds baseline regulatory requirements.",
  },
  {
    doc: "Stability Data & Shelf Life Documentation",
    desc: "Accelerated and real-time stability study data for each product under ICH climatic Zone IVb conditions (relevant to Cambodia's tropical climate). Stability data supports shelf life claims in the product registration application. We provide stability protocols and results as part of the documentation package.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF pricing, HS codes, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by Cambodian customs (General Department of Customs and Excise) for import duty assessment and clearance at Sihanoukville port or Phnom Penh dry port.",
  },
  {
    doc: "Product Labeling Documentation",
    desc: "Complete labeling information including ingredients, dosage, storage conditions, manufacturer details, and warnings. Cambodian regulations may require labeling in Khmer. Admetus provides the base labeling content for the Cambodian importer to translate and adapt for DDFM compliance.",
  },
];

const faqs = [
  {
    q: "What is required for DDFM product registration of imported softgels in Cambodia?",
    a: "Cambodia's DDFM (Department of Drugs and Food under the Ministry of Health) requires product registration for imported pharmaceutical and nutraceutical products. The registration application must be submitted by a locally registered Cambodian company. The dossier requires: product formulation details, Certificate of Analysis (COA), GMP certificate (WHO-GMP preferred), Certificate of Pharmaceutical Product (CPP) or Certificate of Free Sale (CFS) from CDSCO India, product labeling, and product samples. The documentation requirements are less extensive than many ASEAN regulatory bodies, and review timelines are typically shorter. Admetus provides the complete manufacturer documentation package for Cambodian importers.",
  },
  {
    q: "What is the MOQ for Cambodia export orders?",
    a: "We offer highly flexible MOQs for the Cambodian market, recognizing that Cambodia's 17-million population means order volumes are typically smaller than larger ASEAN markets. Pilot-volume orders for market entry and DDFM registration are supported. We work with Cambodian importers to find order sizes that balance cost efficiency with market demand. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How long does shipping take from India to Cambodia?",
    a: "Sea freight from Chennai Port to Sihanoukville port takes approximately 12-16 days transit time. An alternative routing via Singapore transshipment adds 2-3 days but offers more frequent sailing schedules. From Sihanoukville, cargo can be transported overland to Phnom Penh (approximately 230 km). Some importers opt for Phnom Penh's dry port/inland container depot for final clearance. After port arrival, customs clearance typically takes 5-10 business days depending on documentation completeness. Total transit from factory dispatch to warehouse delivery is typically 25-35 days.",
  },
  {
    q: "Does Cambodia have strict pharmaceutical import regulations?",
    a: "Cambodia's pharmaceutical import regulations are comparatively less complex than many ASEAN neighbors. DDFM requires product registration, but the documentation requirements are less extensive and review timelines are shorter than markets like Indonesia, Malaysia, or the Philippines. There is no mandatory Halal certification requirement. Cambodia relies heavily on imported pharmaceutical products due to minimal domestic manufacturing capacity, so the regulatory framework is designed to facilitate rather than restrict imports — while maintaining basic quality and safety standards.",
  },
  {
    q: "What products are most in demand in Cambodia?",
    a: "The most in-demand softgel products in Cambodia include multivitamins (addressing widespread micronutrient deficiencies), Omega-3 (growing cardiovascular health awareness), Vitamin D3, Calcium supplements (bone health), and women's health products like Evening Primrose Oil. The Cambodian supplement market is still developing compared to more mature ASEAN markets, which means there are significant first-mover opportunities for importers who establish quality brands early. Affordable pricing is critical for market penetration in Cambodia.",
  },
  {
    q: "Can Admetus supply private label softgels for the Cambodian market?",
    a: "Yes. We offer full private label and contract manufacturing services for the Cambodian market. This includes custom formulation development, your brand name and artwork on packaging, DDFM-compliant labeling content, and all manufacturer documentation needed for registration under your brand. Our flexible MOQ makes private label viable even for Cambodia's smaller market volumes. Contact team@admetuslifesciences.com for specific requirements and pricing.",
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
      name: "Cambodia",
      item: "https://www.admetuslifesciences.com/export/cambodia/",
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

export default function CambodiaPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Cambodia — WHO-GMP certified, flexible MOQ"
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
            India &rarr; Cambodia
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;CAMBODIA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            Cambodian importers with flexible MOQ, DDFM-ready documentation,
            competitive pricing, and fast market&nbsp;entry.
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
                CAMBODIA PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Cambodia is a country of approximately 17 million people with
                a growing economy and an expanding healthcare sector. The
                country has minimal domestic pharmaceutical manufacturing
                capacity, which means it relies almost entirely on imported
                pharmaceutical and nutraceutical products to serve its
                population&apos;s health needs.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                This import dependency creates a clear opportunity for
                international pharmaceutical manufacturers. Cambodia&apos;s
                pharmaceutical market is growing steadily, driven by
                increasing healthcare spending, expanding private healthcare
                facilities in Phnom Penh and Siem Reap, growing health
                insurance coverage, and rising consumer awareness of
                preventive health and nutritional supplementation.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Cambodia&apos;s regulatory environment for pharmaceutical
                imports is comparatively straightforward. The Department of
                Drugs and Food (DDFM) under the Ministry of Health regulates
                pharmaceutical and health product imports, but the
                documentation requirements and review timelines are less
                demanding than many other ASEAN countries. This means
                Cambodian importers can achieve product registration and begin
                selling faster — making Cambodia an attractive market for
                manufacturers looking to establish an ASEAN presence.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                India is well-positioned as a pharmaceutical supplier to
                Cambodia. Indian products are known for quality at competitive
                price points — a critical factor in Cambodia&apos;s
                price-sensitive market. WHO-GMP certification from an Indian
                manufacturer provides Cambodian importers with quality
                assurance that exceeds baseline regulatory requirements,
                offering a competitive advantage in the Cambodian
                distribution landscape.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* DDFM Regulatory Section */}
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
                  DDFM REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  DDFM (Department of Drugs and Food) under Cambodia&apos;s
                  Ministry of Health regulates pharmaceutical and
                  nutraceutical imports. The registration process is
                  comparatively streamlined with fewer documentation
                  requirements than many ASEAN&nbsp;neighbors.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {ddfmSteps.map(([title, desc], i) => (
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
              Why Admetus for Cambodia
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY CAMBODIAN IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE CAMBODIAN&nbsp;MARKET
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
              under your brand name for the Cambodian market. See our{" "}
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
              DOCUMENTATION FOR DDFM &amp;&nbsp;CUSTOMS
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
                  INDIA TO CAMBODIA SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  Shipping to Cambodia is typically routed through
                  Sihanoukville port, with Singapore transshipment available
                  for more frequent sailing&nbsp;schedules.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: Chennai Port or JNPT (Mumbai)",
                    "Products are dispatched from our Jind, Haryana facility to either Chennai Port or JNPT (Nhava Sheva) in Mumbai. Chennai Port is the preferred origin for Cambodia-bound cargo due to shorter transit times to Southeast Asian destinations. Cargo is consolidated, inspected, and cleared for export at the port's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Sea freight: India to Sihanoukville",
                    "Direct container vessel services from Chennai to Sihanoukville port take approximately 12-16 days ocean transit time. An alternative routing via Singapore transshipment adds 2-3 days but offers more frequent sailing schedules and greater carrier flexibility. Pharmaceutical cargo is shipped in standard dry containers with temperature monitoring for heat-sensitive products.",
                  ],
                  [
                    "Destination: Sihanoukville Port or Phnom Penh Dry Port",
                    "Pharmaceutical imports arrive at Sihanoukville — Cambodia's primary deep-water port. From Sihanoukville, cargo is transported overland (approximately 230 km) to Phnom Penh for distribution. Some importers opt to clear cargo at Phnom Penh's dry port / inland container depot for convenience. Customs clearance typically takes 5-10 business days depending on documentation completeness.",
                  ],
                  [
                    "Packaging for tropical transit",
                    "All Cambodia-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants and moisture barriers, tamper-evident sealing, and batch identification. Packaging is designed for tropical transit conditions and Cambodia's high-humidity environment. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners.",
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
              CAMBODIA EXPORT Q&amp;A
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
              START YOUR CAMBODIA EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Cambodia import
              requirements — DDFM documentation, flexible MOQ, pricing, and
              shipping. We respond within 48&nbsp;hours.
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
                href="https://wa.me/919729977795?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Cambodia.%20Please%20share%20details."
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

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification — trusted quality for Laos",
    desc: "Laos' Food and Drug Department (FDD) accepts WHO-GMP certification as evidence of manufacturing quality compliance. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which provides Lao importers with internationally recognized quality assurance. In a market where domestic manufacturing is virtually nonexistent and import quality varies significantly, WHO-GMP certification is a strong differentiator that gives Lao distributors confidence in product quality and helps build trust with healthcare professionals.",
  },
  {
    title: "Zero regulatory barriers — fastest ASEAN market entry",
    desc: "Laos has the simplest pharmaceutical import regulatory framework in ASEAN. The FDD registration process has fewer documentation requirements, shorter review timelines, and no complex dossier formats like ACTD or CTD. There is no mandatory Halal certification requirement. For manufacturers and importers looking for the fastest market entry in Southeast Asia, Laos offers the lowest regulatory friction — making it an ideal starting point for building an ASEAN distribution footprint.",
  },
  {
    title: "Flexible MOQ for the smallest ASEAN market",
    desc: "With a population of approximately 8 million, Laos is the smallest market in ASEAN by population. Individual order volumes will be modest. We understand this reality and offer highly flexible minimum order quantities that match Lao market demand. Pilot-volume orders are available for market entry and FDD registration, with the ability to scale as your distribution network grows. This flexibility makes Admetus accessible to Lao importers of all sizes.",
  },
  {
    title: "Five international certifications",
    desc: "Our facility holds WHO-GMP, FSSAI, GMP, HACCP, and Halal certifications. This multi-certification profile covers food safety, pharmaceutical manufacturing, hazard control, and religious dietary standards. For Lao importers, this breadth of certification means flexibility across product categories and the documentation quality that exceeds baseline FDD requirements — providing a competitive advantage in the Lao pharmaceutical distribution landscape.",
  },
  {
    title: "Gateway to the CLMV market",
    desc: "Laos is part of the CLMV group (Cambodia, Laos, Myanmar, Vietnam) — the fastest-growing economic subregion in Southeast Asia. Establishing a supply relationship and product registrations in Laos can serve as a foundation for expanding into neighboring markets. Thailand — a major ASEAN distribution hub — borders Laos and provides overland logistics access. An Admetus partnership for Laos can be a strategic step toward broader CLMV market coverage.",
  },
];

const fddSteps = [
  [
    "Appoint a Lao importer or distributor",
    "FDD requires that all product registration and import activities be conducted by a locally registered Lao company — either an importer, distributor, or pharmaceutical company. The foreign manufacturer cannot directly register or import products into Laos. The Lao importer must hold appropriate business registration and import licenses from the Ministry of Health and the Ministry of Industry and Commerce.",
  ],
  [
    "Submit product registration to FDD",
    "The product registration application to FDD requires: product formulation and specifications, Certificate of Analysis (COA), GMP certificate (WHO-GMP is accepted and valued), Certificate of Pharmaceutical Product (CPP) or Certificate of Free Sale (CFS) from the country of origin, and product labeling. The documentation requirements are minimal compared to other ASEAN regulatory bodies. Admetus provides the complete manufacturer documentation package for the Lao importer to submit.",
  ],
  [
    "FDD evaluation and approval",
    "FDD evaluates the submitted application, which typically involves documentary review. The evaluation timeline is among the shortest in ASEAN — typically 1-3 months for straightforward applications. Laboratory testing may be requested for certain product categories. Upon successful evaluation, FDD issues product registration, authorizing import and sale of the specific product in Laos.",
  ],
  [
    "Import clearance and distribution",
    "Once FDD registration is secured, each import shipment requires customs clearance. Since Laos is landlocked, imports typically arrive overland via Thailand (through Nong Khai/Thanaleng border crossing to Vientiane) or via Vietnam (through Lao Bao border crossing). Lao customs verifies registration documentation, commercial invoice, packing list, and COA. Distribution channels in Laos include pharmacies, hospitals, and clinics — primarily concentrated in Vientiane, Luang Prabang, and Savannakhet.",
  ],
];

const products = [
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Laos has significant micronutrient deficiency challenges — particularly iron, zinc, Vitamin A, and iodine deficiencies affecting rural populations, women of reproductive age, and children. Multivitamin softgel capsules address multiple deficiencies in a single convenient dosage form. Both government-sponsored nutrition programs (supported by WHO and UNICEF initiatives) and the growing private pharmacy sector in Vientiane drive demand for affordable, quality multivitamin products.",
  },
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Vitamin D supplementation is gaining awareness in Laos, particularly among healthcare providers in urban centers. While Laos has a tropical climate, indoor lifestyles among urban populations and limited dietary sources of Vitamin D create supplementation opportunities. The high-dose 60,000 IU format serves therapeutic correction, while lower-dose maintenance formulations serve the growing retail pharmacy market in Vientiane and provincial capitals.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Cardiovascular health awareness is growing in Laos as the population urbanizes and non-communicable diseases become more prevalent. Omega-3 softgel capsules are increasingly recommended by Lao healthcare providers for cardiovascular support and general health maintenance. The expanding urban middle class in Vientiane is driving demand for health supplements that were previously unavailable in the Lao market.",
  },
  {
    name: "Calcium + Vitamin D3 Softgel Capsules",
    relevance: "Bone health products serve Laos' growing healthcare needs, particularly among women and the aging population. Calcium-Vitamin D3 combination softgels are straightforward to register, have clear health claims, and address documented nutritional deficiencies in the Lao population. This formulation is an excellent entry point for Lao importers building a health supplement portfolio.",
  },
  {
    name: "Iron + Folic Acid Softgel Capsules",
    relevance: "Iron deficiency and anemia are significant public health concerns in Laos, particularly among women of reproductive age and children. Iron-Folic Acid supplementation is part of WHO and government nutrition recommendations for Laos. Softgel capsules offer better bioavailability and tolerability than traditional tablet forms, making them attractive for both institutional procurement and retail pharmacy channels.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by FDD for product registration and by Lao importers for each shipment's customs clearance at border crossings.",
  },
  {
    doc: "Certificate of Pharmaceutical Product (CPP) from CDSCO",
    desc: "Issued by India's Central Drugs Standard Control Organisation, the CPP confirms that the product is registered and freely manufactured and sold in India. FDD accepts a CPP or Certificate of Free Sale (CFS) from the country of origin. Admetus coordinates the CPP application with CDSCO.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. FDD accepts WHO-GMP as strong evidence of manufacturing quality. This certificate strengthens the product registration application and differentiates Admetus products from lower-quality imports in the Lao market.",
  },
  {
    doc: "Stability Data & Shelf Life Documentation",
    desc: "Accelerated and real-time stability study data for each product under ICH climatic Zone IVb conditions (relevant to Laos' tropical climate). Stability data supports shelf life claims in the product registration application. We provide stability protocols and results as part of the documentation package.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF pricing, HS codes, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by Lao customs for import duty assessment and clearance at border crossing points.",
  },
  {
    doc: "Product Labeling Documentation",
    desc: "Complete labeling information including ingredients, dosage, storage conditions, manufacturer details, and warnings. Lao regulations may require labeling in Lao language. Admetus provides the base labeling content for the Lao importer to translate and adapt for FDD compliance.",
  },
];

const faqs = [
  {
    q: "What is required for FDD product registration of imported softgels in Laos?",
    a: "Laos' Food and Drug Department (FDD) requires product registration for imported pharmaceutical and nutraceutical products. The registration application must be submitted by a locally registered Lao company. The dossier requires: product formulation details, Certificate of Analysis (COA), GMP certificate (WHO-GMP preferred), Certificate of Pharmaceutical Product (CPP) or Certificate of Free Sale (CFS) from CDSCO India, and product labeling. The documentation requirements are minimal compared to other ASEAN regulatory bodies, and review timelines are among the shortest in ASEAN — typically 1-3 months. Admetus provides the complete manufacturer documentation package for Lao importers.",
  },
  {
    q: "How does shipping work to Laos since it is landlocked?",
    a: "Laos is landlocked, so imports arrive via overland routes from neighboring countries. The primary route for Indian pharmaceutical cargo is: sea freight from Chennai Port to Bangkok's Laem Chabang port (10-14 days), then overland transport from Bangkok through Thailand's Nong Khai border crossing to Vientiane, Laos (1-2 days). An alternative route is via Ho Chi Minh City (Cat Lai port) in Vietnam, with overland transport through the Lao Bao border crossing. Total transit from factory dispatch to Vientiane delivery is typically 20-30 days. We coordinate with logistics partners experienced in Thailand-Laos cross-border pharmaceutical shipments.",
  },
  {
    q: "What is the MOQ for Laos export orders?",
    a: "We offer the most flexible MOQs for the Lao market, recognizing that Laos' 8-million population is the smallest in ASEAN. Pilot-volume orders for market entry and FDD registration are fully supported. We work with Lao importers to find order sizes that balance cost efficiency with realistic market demand. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Is Laos a viable market for pharmaceutical imports?",
    a: "Yes, despite its small population. Laos has virtually zero domestic pharmaceutical manufacturing, which means the entire market is served by imports. Healthcare spending is increasing with economic development, and the government — supported by international organizations like WHO and UNICEF — is actively working to improve pharmaceutical access and nutrition. The regulatory barriers are the lowest in ASEAN, making market entry fast and cost-effective. For manufacturers looking to build an ASEAN presence, Laos is an excellent low-risk starting point that can serve as a gateway to the broader CLMV (Cambodia, Laos, Myanmar, Vietnam) market.",
  },
  {
    q: "What products are most needed in Laos?",
    a: "The most needed softgel products in Laos include multivitamins (addressing widespread micronutrient deficiencies), Iron + Folic Acid (for maternal and child health), Calcium + Vitamin D3 (bone health), Omega-3 (cardiovascular health), and Vitamin D3. The Lao supplement market is in its early stages, which means there are significant first-mover opportunities for importers who establish quality brands. Government and NGO institutional procurement channels are also important demand drivers alongside the growing private pharmacy retail sector.",
  },
  {
    q: "Can Admetus supply private label softgels for the Lao market?",
    a: "Yes. We offer full private label and contract manufacturing services for the Lao market. This includes custom formulation development, your brand name and artwork on packaging, FDD-compliant labeling content, and all manufacturer documentation needed for registration under your brand. Our highly flexible MOQ makes private label viable even for Laos' small market volumes. Contact team@admetuslifesciences.com for specific requirements and pricing.",
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
      name: "Laos",
      item: "https://www.admetuslifesciences.com/export/laos/",
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

export default function LaosPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Laos — WHO-GMP certified"
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
            India &rarr; Laos
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;LAOS
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            Lao importers with FDD-ready documentation, flexible MOQ, zero
            regulatory barriers, and competitive&nbsp;pricing.
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
                LAOS PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Laos (Lao People&apos;s Democratic Republic) is a landlocked
                Southeast Asian country with a population of approximately 8
                million. It is the smallest ASEAN market by population, but
                its pharmaceutical sector is growing as the country develops
                economically and its healthcare infrastructure expands with
                international support.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Laos has virtually zero domestic pharmaceutical manufacturing
                capacity. The country relies almost entirely on imported
                pharmaceutical and nutraceutical products — primarily from
                Thailand, Vietnam, India, and China. This complete import
                dependency means there is no domestic competition for
                international manufacturers, and the market is open to
                suppliers who can provide quality products at accessible price
                points.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The Food and Drug Department (FDD) under the Ministry of
                Health regulates pharmaceutical imports into Laos. The
                regulatory framework is the simplest in ASEAN — with minimal
                documentation requirements, no complex dossier formats, and
                short review timelines. There are no mandatory Halal
                certification requirements. This makes Laos the fastest
                market entry point in Southeast Asia for pharmaceutical
                manufacturers.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Being landlocked, Laos is accessed primarily through Thailand
                (overland from Bangkok via the Thai-Lao Friendship Bridge to
                Vientiane) or through Vietnam (overland via the Lao Bao
                border crossing). Despite the lack of direct sea port access,
                established overland logistics corridors make pharmaceutical
                imports reliable and cost-effective. Vientiane, Luang
                Prabang, and Savannakhet are the primary distribution centers
                for pharmaceutical products in Laos.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FDD Regulatory Section */}
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
                  FDD REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The Food and Drug Department (FDD) under the Ministry of
                  Health regulates pharmaceutical and nutraceutical imports
                  into Laos. The registration process is the simplest in
                  ASEAN with minimal documentation&nbsp;requirements.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {fddSteps.map(([title, desc], i) => (
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
              Why Admetus for Laos
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY LAO IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE LAO&nbsp;MARKET
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
              under your brand name for the Lao market. See our{" "}
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
              DOCUMENTATION FOR FDD &amp;&nbsp;CUSTOMS
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
                  INDIA TO LAOS SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  Laos is landlocked — imports arrive via overland routes
                  from Thailand or Vietnam. The primary corridor runs through
                  Bangkok to&nbsp;Vientiane.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: Chennai Port or JNPT (Mumbai)",
                    "Products are dispatched from our Jind, Haryana facility to either Chennai Port or JNPT (Nhava Sheva) in Mumbai. For Laos-bound cargo, Chennai Port is preferred due to shorter transit times to Southeast Asian ports. Cargo is consolidated, inspected, and cleared for export at the port's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Sea freight: India to Bangkok (Laem Chabang)",
                    "Container vessel services from Chennai to Bangkok's Laem Chabang port operate on regular schedules with 10-14 days ocean transit time. Thailand serves as the transshipment hub for landlocked Laos. Pharmaceutical cargo is shipped in standard dry containers with temperature monitoring. Multiple shipping lines serve the India-Thailand route with frequent departures.",
                  ],
                  [
                    "Overland: Bangkok to Vientiane",
                    "From Laem Chabang port or Bangkok, cargo is transported overland through northeastern Thailand to the Thai-Lao Friendship Bridge at Nong Khai/Thanaleng border crossing — the primary gateway to Vientiane. This overland segment takes 1-2 days. An alternative route via Vietnam (Ho Chi Minh City to Lao Bao border crossing) is available for eastern Lao destinations. Total India-to-Vientiane transit time is approximately 14-18 days.",
                  ],
                  [
                    "Packaging for tropical transit",
                    "All Laos-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants and moisture barriers, tamper-evident sealing, and batch identification. Packaging is designed for tropical transit conditions, including the overland segment through Thailand. We coordinate with logistics partners experienced in Thailand-Laos cross-border pharmaceutical shipments.",
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
              LAOS EXPORT Q&amp;A
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
              START YOUR LAOS EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Laos import
              requirements — FDD documentation, flexible MOQ, pricing, and
              shipping logistics. We respond within 48&nbsp;hours.
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
                href="https://wa.me/919729977795?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Laos.%20Please%20share%20details."
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

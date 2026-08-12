import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "Halal certified manufacturing — non-negotiable for Somalia",
    desc: "Somalia is a Muslim-majority country where Halal certification is not a differentiator — it is a baseline requirement. All pharmaceutical and nutraceutical imports must meet Halal standards for acceptance by Somali distributors, pharmacies, and consumers. Admetus holds Halal certification for its Jind, Haryana facility and product range, ensuring every softgel capsule we manufacture meets the religious dietary and manufacturing standards required for the Somali market.",
  },
  {
    title: "WHO-GMP certified quality at competitive pricing",
    desc: "Somalia is a price-sensitive market with limited healthcare infrastructure. Our WHO-GMP certification provides the quality assurance that international health organizations, NGOs, and Somali healthcare providers require, while our Haryana facility's lower overhead enables pricing that makes essential nutraceuticals commercially viable in Somalia's market. This combination of certified quality and competitive pricing is exactly what Somali importers need.",
  },
  {
    title: "100% import-dependent market — zero domestic competition",
    desc: "Somalia has zero domestic pharmaceutical manufacturing capacity. Every pharmaceutical and nutraceutical product consumed in Somalia is imported. This means there is no domestic manufacturing competition — the competitive landscape is entirely among foreign suppliers. Indian manufacturers, with their combination of WHO-GMP quality, competitive pricing, and established export infrastructure, are well-positioned to serve this fully import-dependent market.",
  },
  {
    title: "Minimal regulatory barriers to entry",
    desc: "Somalia's pharmaceutical regulatory framework is still developing. Unlike markets with established agencies (NAFDAC in Nigeria, PPB in Kenya, FDA in Philippines), Somalia does not have a fully operational national medicines regulatory authority with complex registration processes. This means the documentation burden for market entry is significantly lower — COA, Halal certificate, Free Sale Certificate, and standard export documents are typically sufficient for import clearance.",
  },
  {
    title: "Nigella Sativa (Habbatus Sauda) formulation",
    desc: "Nigella Sativa — known as Habbatus Sauda or Kalonji — holds deep cultural and religious significance in Muslim-majority countries. The Prophet Muhammad (PBUH) is quoted as saying it is a cure for every disease except death, making it one of the most trusted traditional remedies across the Islamic world. Admetus manufactures Nigella Sativa oil softgel capsules — a product with strong cultural demand in Somalia that very few Indian manufacturers specifically offer for this market.",
  },
];

const products = [
  {
    name: "Nigella Sativa (Habbatus Sauda / Kalonji) Oil Softgel Capsules",
    relevance: "Nigella Sativa — known as Habbatus Sauda in Arabic and Kalonji in South Asian languages — is one of the most culturally significant health products in the Islamic world. In Somali traditional medicine and across Muslim-majority countries, Nigella Sativa oil is used for immune support, digestive health, respiratory conditions, and general wellness. The softgel capsule format offers precise dosing, longer shelf life, and convenience compared to raw oil. This product has strong cultural demand in Somalia and across the Horn of Africa, making it a high-potential formulation for Somali importers.",
  },
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Despite Somalia's equatorial climate, Vitamin D deficiency is documented in Somali populations — particularly among women who wear full-body covering for religious reasons, limiting UV exposure. Vitamin D3 softgel capsules are prescribed for deficiency treatment and are increasingly recognized by Somali healthcare providers and international health organizations operating in Somalia for their role in immune function and bone health.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Cardiovascular health is an emerging concern in Somalia's growing urban population, particularly in Mogadishu, Hargeisa, and other cities where dietary patterns are shifting. Omega-3 softgel capsules serve both the commercial pharmacy market and the institutional healthcare channel — international NGOs and UN health agencies operating in Somalia procure nutraceutical supplements for their nutrition and health programs.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Malnutrition and micronutrient deficiency are critical health challenges in Somalia. UNICEF and the WHO estimate that over 50% of Somali children under five suffer from some form of malnutrition. Iron, Vitamin A, zinc, and folate deficiencies are widespread. Multivitamin softgel capsules address multiple deficiencies in a single dosage form and serve both commercial distribution and humanitarian procurement channels — NGOs, international health organizations, and government health programs all procure multivitamin supplements.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations are relevant to Somalia's healthcare needs, particularly for women (calcium deficiency during pregnancy and lactation is common) and elderly populations. The Calcitriol-Calcium-K2 combination addresses bone mineralization and calcium absorption — health concerns that are under-addressed in Somalia's limited healthcare infrastructure but increasingly recognized by healthcare providers in Mogadishu and Hargeisa's growing private hospital sector.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. The COA provides quality assurance documentation for Somali importers and is essential for customs clearance at Mogadishu and Berbera ports.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific products. This is the single most important documentation requirement for the Somali market. Somali distributors, pharmacies, and consumers require Halal certification as a non-negotiable condition. Our Halal certificate covers all gelatin sources, manufacturing processes, and cross-contamination prevention measures.",
  },
  {
    doc: "Free Sale Certificate",
    desc: "Indian government-issued certificate confirming the product is freely manufactured and sold in India. This document establishes the product's legitimate manufacturing origin and is used by Somali importers to demonstrate product provenance. Embassy authentication is generally not required for Somalia but can be provided upon request.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. While Somalia does not have a fully operational medicines regulatory authority that formally requires WHO-GMP, this certification is valued by international health organizations, NGOs, and quality-conscious Somali importers as evidence of manufacturing standards.",
  },
  {
    doc: "Packing List & Commercial Invoice",
    desc: "Detailed commercial invoice with FOB/CIF Mogadishu or Berbera pricing, HS codes, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required for customs clearance at Somali ports and for import documentation by the Somali customs authority.",
  },
  {
    doc: "Certificate of Origin",
    desc: "Certificate confirming Indian origin of manufacture, issued by the relevant Chamber of Commerce in India. This document supports customs processing and may be required by Somali customs authorities or by international banking institutions processing trade finance for Somalia-bound shipments.",
  },
];

const faqs = [
  {
    q: "Is Admetus Halal certified for the Somali market?",
    a: "Yes. Admetus Lifesciences holds Halal certification for its manufacturing facility in Jind, Haryana, and for its product range. Halal certification is non-negotiable for the Somali market — Somalia is a Muslim-majority country where all pharmaceutical and nutraceutical imports must meet Halal standards. Our Halal certification covers gelatin sources (we use Halal-certified bovine gelatin and offer vegetarian HPMC capsule alternatives), manufacturing processes, cleaning procedures, and cross-contamination prevention. Halal certificate documentation is included with every export shipment to Somalia.",
  },
  {
    q: "What is the regulatory framework for importing pharmaceuticals to Somalia?",
    a: "Somalia's pharmaceutical regulatory framework is still developing. Unlike established markets with agencies like NAFDAC (Nigeria) or PPB (Kenya), Somalia does not currently have a fully operational national medicines regulatory authority with complex product registration processes. Import clearance at Somali ports primarily requires standard trade documents — commercial invoice, packing list, Certificate of Analysis, Halal certificate, Free Sale Certificate, and Certificate of Origin. Some regions (particularly Somaliland) may have additional local requirements. This minimal regulatory framework means the documentation burden for market entry is significantly lower than in other markets, though we recommend importers verify current requirements with local customs authorities.",
  },
  {
    q: "What is the MOQ for Somalia export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. We understand that Somalia is an emerging market — initial orders may be smaller than established markets. We offer pilot-volume orders for market testing and relationship building, with the ability to scale as demand grows. For Nigella Sativa softgels and other high-demand formulations, we can accommodate varied order sizes. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How long does shipping take from India to Somalia?",
    a: "Sea freight from JNPT (Mumbai) to Mogadishu or Berbera port takes approximately 12-18 days ocean transit time via direct routes. An alternative route via Dubai (Jebel Ali port) transshipment adds 3-5 days but offers more frequent sailing schedules and may be more cost-effective for smaller shipments. Dubai serves as a major transshipment hub for East African and Horn of Africa destinations. After port arrival, customs clearance at Somali ports typically takes 3-7 business days. Total transit from factory dispatch to warehouse delivery is typically 25-35 days.",
  },
  {
    q: "What documentation is needed for importing softgels to Somalia?",
    a: "Documentation requirements for Somalia are relatively straightforward compared to heavily regulated markets. The standard documentation package includes: Certificate of Analysis (batch-specific), Halal certificate (essential for Muslim-majority market), Free Sale Certificate (Indian government-issued), Certificate of Origin, commercial invoice with FOB/CIF pricing, and packing list with batch details. WHO-GMP certificate is included as evidence of manufacturing quality. Embassy authentication of documents is generally not required for Somalia. We prepare the complete documentation package for every export shipment.",
  },
  {
    q: "Does Admetus manufacture Nigella Sativa (Habbatus Sauda) softgel capsules?",
    a: "Yes. Admetus manufactures Nigella Sativa oil softgel capsules — also known as Habbatus Sauda or Kalonji oil capsules. Nigella Sativa holds deep cultural and religious significance in the Islamic world and has strong traditional demand across Muslim-majority countries including Somalia. Our Nigella Sativa softgel formulation uses cold-pressed Nigella Sativa seed oil encapsulated in Halal-certified gelatin shells, providing precise dosing, extended shelf life, and convenience. This product is specifically relevant for Somali, Middle Eastern, and North African markets. Private label Nigella Sativa softgels are available with custom branding and packaging.",
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
      name: "Somalia",
      item: "https://www.admetuslifesciences.com/export/somalia/",
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

export default function SomaliaPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Somalia — WHO-GMP and Halal certified"
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
            India &rarr; Somalia
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;SOMALIA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP and Halal certified softgel capsules from Haryana,
            India — serving Somali importers with culturally appropriate
            formulations, Nigella Sativa capsules, minimal documentation
            burden, and competitive&nbsp;pricing.
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
                SOMALIA&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Somalia is 100% import-dependent for pharmaceuticals — the
                country has zero domestic pharmaceutical manufacturing
                capacity. Every medication, supplement, and nutraceutical
                product consumed by Somalia&apos;s 16 million people is
                imported. Pharmaceutical imports from India to Somalia total
                approximately $43 million annually (2024), making India one
                of the primary supplier countries for Somali pharmaceutical
                needs.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Somalia is a Muslim-majority country where Halal
                certification is not optional — it is a non-negotiable
                requirement for any pharmaceutical or nutraceutical product
                entering the market. Somali consumers, pharmacies, and
                distributors will not accept products without Halal
                certification. This religious and cultural requirement
                immediately narrows the field of eligible Indian
                manufacturers to those holding valid Halal certification —
                which Admetus does.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Somalia&apos;s pharmaceutical regulatory framework is still
                developing. Unlike markets with established regulatory
                agencies such as NAFDAC in Nigeria or PPB in Kenya, Somalia
                does not currently have a fully operational national
                medicines regulatory authority with complex product
                registration processes. This means the barrier to market
                entry is significantly lower — standard trade documentation,
                Halal certification, and quality certificates are typically
                sufficient for import clearance. For Indian manufacturers,
                this represents a low-friction export opportunity.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The market has both commercial and humanitarian dimensions.
                Somalia&apos;s growing private healthcare sector in
                Mogadishu, Hargeisa, and other urban centers drives
                commercial pharmacy demand. Simultaneously, international
                humanitarian organizations — UNICEF, WHO, MSF, and numerous
                NGOs — procure significant volumes of pharmaceutical and
                nutraceutical products for health programs across the
                country. Multivitamins for malnutrition, Vitamin D3 for
                deficiency, and essential supplements are in constant
                demand from both channels.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Somalia Matters */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">
                  Market Opportunity
                </span>
                <h2
                  className="mt-3 display-section text-[var(--foreground)] mb-4"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
                >
                  WHY SOMALIA&nbsp;MATTERS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  Somalia is an underserved market that very few Indian
                  manufacturers specifically target — creating opportunity
                  for exporters willing to meet the market&apos;s
                  specific&nbsp;requirements.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "16 million population, 100% import-dependent",
                    "Somalia has absolutely no domestic pharmaceutical manufacturing. Every pill, capsule, syrup, and supplement is imported. This total import dependency means there is no domestic manufacturing competition — the entire market is served by foreign suppliers. For Indian manufacturers with WHO-GMP certification and Halal compliance, this is a structurally open market with consistent baseline demand for essential health products.",
                  ],
                  [
                    "Growing healthcare spending",
                    "Somalia's healthcare spending is growing as the country stabilizes and develops. Private hospitals and clinics are expanding in Mogadishu, Hargeisa, Garowe, and Bosaso. The Somali diaspora — one of the world's largest per capita — sends significant remittances that fund healthcare expenditure. The private pharmacy sector is growing rapidly in urban areas, creating retail distribution channels for imported nutraceutical products.",
                  ],
                  [
                    "Dual demand: commercial + humanitarian",
                    "Somalia has a unique dual-demand structure. Commercial importers serve the growing private pharmacy and hospital market. Simultaneously, international humanitarian organizations (UNICEF, WHO, MSF, ICRC, and numerous NGOs) procure significant volumes of pharmaceutical and nutraceutical products for health programs. A single manufacturer relationship can serve both commercial distribution and institutional procurement channels.",
                  ],
                  [
                    "Very few Indian manufacturers target Somalia specifically",
                    "Most Indian pharmaceutical exporters focus on larger, better-known African markets — Nigeria, Kenya, South Africa, Ghana. Very few Indian manufacturers specifically target Somalia with Halal-certified products, culturally relevant formulations (Nigella Sativa), and documentation tailored for the Somali market. This competitive gap creates opportunity for manufacturers willing to specifically serve Somali importers.",
                  ],
                  [
                    "Minimal regulatory barriers",
                    "Somalia's developing regulatory framework means the documentation burden for market entry is significantly lower than in established markets. Standard export documentation — COA, Halal certificate, Free Sale Certificate, commercial invoice, packing list — is typically sufficient for import clearance. This reduces both the cost and timeline of market entry compared to markets requiring complex multi-month registration processes.",
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

      {/* Halal Focus */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <span className="label-text text-[var(--gold)]">
                Halal Compliance
              </span>
              <h2
                className="mt-3 display-section text-[var(--foreground)] mb-4"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
              >
                HALAL CERTIFICATION — NON-NEGOTIABLE FOR&nbsp;SOMALIA
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Somalia is a Muslim-majority country where Islamic dietary
                and manufacturing standards apply to all consumable
                products — including pharmaceutical and nutraceutical
                capsules. Halal certification is the single most
                important documentation requirement for the Somali market.
                Products without Halal certification will not be accepted
                by Somali distributors, pharmacies, or consumers.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Admetus Lifesciences holds Halal certification for its
                manufacturing facility in Jind, Haryana. Our Halal
                compliance covers the entire manufacturing process:
                gelatin sourcing (Halal-certified bovine gelatin),
                manufacturing equipment, cleaning procedures,
                cross-contamination prevention, storage, and handling.
                We also offer vegetarian HPMC (Hydroxypropyl
                Methylcellulose) capsule alternatives for importers
                who prefer a non-gelatin option.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Nigella Sativa (Habbatus Sauda) holds special
                significance in Islamic traditional medicine. The
                Prophet Muhammad (PBUH) described it as a cure for
                every disease except death — making Nigella Sativa oil
                one of the most trusted and culturally valued health
                products across the Muslim world. Our Nigella Sativa
                softgel capsule formulation is specifically designed
                for Muslim-majority markets like Somalia, combining
                traditional cultural significance with modern softgel
                encapsulation technology and Halal manufacturing
                standards.
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
              Why Admetus for Somalia
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY SOMALI IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE SOMALI&nbsp;MARKET
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
              formulation development on request. All products are Halal
              certified and can be supplied under your brand name for the
              Somali market. See our{" "}
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
              DOCUMENTATION FOR SOMALI&nbsp;IMPORT
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
                  INDIA TO SOMALIA SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  Somalia is served by both direct shipping from Indian
                  ports and via Dubai (Jebel Ali) transshipment — a major
                  hub for Horn of Africa&nbsp;trade.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: JNPT (Nhava Sheva), Mumbai",
                    "Products are dispatched from our Jind, Haryana facility to JNPT port in Mumbai — approximately 1,200km by road, 2-3 days transit. JNPT is India's largest container port and the primary departure point for pharmaceutical exports to the Horn of Africa. Cargo is consolidated, inspected, and cleared for export at JNPT's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Direct route: JNPT to Mogadishu / Berbera",
                    "Direct container vessel services from JNPT to Mogadishu or Berbera port take approximately 12-18 days ocean transit time. Berbera (in Somaliland) is an increasingly important port with recent infrastructure investment by DP World. Direct services are less frequent than transshipment routes but offer shorter total transit times for full-container loads.",
                  ],
                  [
                    "Transshipment route: via Dubai (Jebel Ali)",
                    "An alternative and often-used route is India to Dubai (Jebel Ali) to Somalia. Jebel Ali is the region's largest transshipment port and serves as a major trade hub for the Horn of Africa. India to Jebel Ali takes 3-5 days, with onward feeder services from Jebel Ali to Mogadishu or Berbera in 5-8 days. This route offers more frequent sailing schedules and may be more cost-effective for LCL (less than container load) shipments.",
                  ],
                  [
                    "Packaging for arid and tropical transit",
                    "All Somalia-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants and moisture barriers, tamper-evident sealing, and batch identification. Packaging accounts for Somalia's hot, arid climate conditions. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-Somalia corridor.",
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
              SOMALIA EXPORT Q&amp;A
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
              <Link href="/export/kenya/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Kenya
              </Link>
              <Link href="/export/tanzania/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Tanzania
              </Link>
              <Link href="/export/ethiopia/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Ethiopia
              </Link>
              <Link href="/export/uganda/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Uganda
              </Link>
              <Link href="/export/rwanda/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Rwanda
              </Link>
              <Link href="/export/south-sudan/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                South Sudan
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
              START YOUR SOMALIA EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Somalia import
              requirements — Halal documentation, Nigella Sativa
              formulations, MOQ, pricing, and shipping to Mogadishu or
              Berbera. We respond within 48&nbsp;hours.
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
                href="https://wa.me/919729977795?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Somalia.%20Please%20share%20details."
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

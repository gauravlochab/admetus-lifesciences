import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "Halal certified manufacturing — absolute requirement for Mauritania",
    desc: "Mauritania is 100% Muslim — Islam is the state religion and Halal compliance is an absolute, non-negotiable requirement for every consumable product entering the country. Pharmaceutical and nutraceutical imports must meet Halal standards without exception. Admetus holds Halal certification for its Jind, Haryana facility and product range, ensuring every softgel capsule meets the religious dietary and manufacturing standards required for the Mauritanian market. Products without Halal certification cannot be imported or sold in Mauritania.",
  },
  {
    title: "WHO-GMP certified quality at competitive pricing",
    desc: "Mauritania is a price-sensitive market with limited healthcare infrastructure. Our WHO-GMP certification provides the quality assurance that international health organizations, NGOs, and Mauritanian healthcare providers require, while our Haryana facility's lower overhead enables pricing that makes essential nutraceuticals commercially viable. For Mauritanian importers, this combination of internationally certified quality and affordable pricing addresses the fundamental challenge of making health products accessible to the population.",
  },
  {
    title: "Small market, large opportunity — 4.5 million underserved",
    desc: "Mauritania's 4.5 million population is small by African standards, but the country is almost entirely import-dependent for pharmaceuticals. The domestic pharmaceutical sector is minimal — the vast majority of medicines and supplements are imported. This small but underserved market is overlooked by most Indian manufacturers who focus on larger African markets. For manufacturers willing to specifically target Mauritania with Halal-certified, culturally appropriate products, there is limited competition and consistent demand.",
  },
  {
    title: "DPL regulatory framework — low barriers to entry",
    desc: "Mauritania's Direction de la Pharmacie et du Laboratoire (DPL) oversees pharmaceutical regulation. The regulatory framework is relatively straightforward compared to complex multi-year registration processes in larger markets. Standard export documentation — Certificate of Analysis, Halal certificate, Free Sale Certificate, WHO-GMP certificate, and commercial trade documents — is typically sufficient for import clearance. This significantly reduces both the cost and timeline of market entry for Indian manufacturers.",
  },
  {
    title: "Nigella Sativa (Habbatus Sauda) — universal cultural demand",
    desc: "Nigella Sativa — known as Habbatus Sauda or Kalonji — holds deep cultural and religious significance across the Islamic world. The Prophet Muhammad (PBUH) is quoted as saying it is a cure for every disease except death. In Mauritania, where Islam permeates every aspect of daily life, Nigella Sativa oil is one of the most trusted and widely used traditional health remedies. Admetus manufactures Nigella Sativa oil softgel capsules — a product with universal cultural demand in Mauritania that very few Indian manufacturers specifically offer for this market.",
  },
];

const products = [
  {
    name: "Nigella Sativa (Habbatus Sauda / Kalonji) Oil Softgel Capsules",
    relevance: "Nigella Sativa — known as Habbatus Sauda in Arabic and Kalonji in South Asian languages — is one of the most culturally significant health products in the Islamic world. In Mauritania's 100% Muslim population, Nigella Sativa oil is used for immune support, digestive health, respiratory conditions, and general wellness. The softgel capsule format offers precise dosing, longer shelf life, and convenience compared to raw oil — particularly important in Mauritania's hot desert climate where liquid oils degrade rapidly. This product has universal cultural demand in Mauritania, making it a high-potential formulation for Mauritanian importers.",
  },
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Despite Mauritania's intense desert sunlight, Vitamin D deficiency is documented among Mauritanian populations — particularly among women who wear full-body covering (mulafa) as a cultural and religious practice, and among populations with darker skin pigmentation which reduces UV-driven Vitamin D synthesis. Vitamin D3 softgel capsules are prescribed for deficiency treatment and increasingly recognized by Mauritanian healthcare providers for their role in immune function and bone health. The 60,000 IU softgel format is suited for weekly or monthly dosing in resource-limited healthcare settings.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Mauritania has an Atlantic coastline with a significant fishing industry, yet fish consumption is not uniformly high across all population segments — particularly in the interior desert regions. Cardiovascular health is an emerging concern in Nouakchott's growing urban population. Omega-3 softgel capsules serve both the commercial pharmacy market in Nouakchott and Nouadhibou, and the institutional healthcare channel — international health organizations operating in Mauritania procure nutraceutical supplements for their nutrition programs.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Malnutrition and micronutrient deficiency remain significant health challenges in Mauritania, particularly in rural areas and among nomadic populations. Iron, Vitamin A, zinc, and folate deficiencies are documented. Multivitamin softgel capsules address multiple deficiencies in a single dosage form and serve both commercial distribution through Nouakchott's pharmacy network and humanitarian procurement channels — NGOs and international health organizations operating in Mauritania procure multivitamin supplements for maternal and child health programs.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations are relevant to Mauritania's healthcare needs — calcium deficiency during pregnancy and lactation is common, and dietary calcium intake is limited in many population segments. The Calcitriol-Calcium-K2 combination supports bone mineralization and calcium absorption for pregnant and lactating women, elderly populations, and growing children. These health needs are under-addressed in Mauritania's limited healthcare infrastructure but increasingly recognized by healthcare providers in Nouakchott's private hospital sector.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. The COA provides quality assurance documentation for Mauritanian importers and is essential for customs clearance and DPL import verification. French-language and Arabic-language COAs can be provided upon request, as both are used in Mauritania.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific products. This is the single most important documentation requirement for Mauritania — a 100% Muslim country where Halal compliance is absolute. Mauritanian distributors, pharmacies, and consumers require Halal certification without exception. Our Halal certificate covers all gelatin sources, manufacturing processes, and cross-contamination prevention measures.",
  },
  {
    doc: "Free Sale Certificate",
    desc: "Indian government-issued certificate confirming the product is freely manufactured and sold in India. This document establishes the product's legitimate manufacturing origin and is used by Mauritanian importers to demonstrate product provenance to the DPL. Embassy authentication or apostille can be provided upon request for the Mauritanian market.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. The DPL in Mauritania recognizes WHO-GMP certification as evidence of manufacturing quality standards. This certification is valued by Mauritanian importers, healthcare providers, and international organizations operating in the country as assurance of manufacturing standards.",
  },
  {
    doc: "Packing List & Commercial Invoice",
    desc: "Detailed commercial invoice with FOB/CIF Nouakchott pricing, HS codes, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required for customs clearance at the Port de Nouakchott (Port de l'Amitie) and for import documentation by the Direction Generale des Douanes de Mauritanie (Mauritanian customs authority).",
  },
  {
    doc: "Certificate of Origin",
    desc: "Certificate confirming Indian origin of manufacture, issued by the relevant Chamber of Commerce in India. This document supports customs processing and may be required by Mauritanian customs authorities. Mauritania's direct Atlantic port access at Nouakchott simplifies logistics compared to landlocked Sahelian neighbors — no transit country documentation is required.",
  },
];

const faqs = [
  {
    q: "Is Admetus Halal certified for the Mauritanian market?",
    a: "Yes. Admetus Lifesciences holds Halal certification for its manufacturing facility in Jind, Haryana, and for its product range. Mauritania is 100% Muslim — Islam is the state religion and Halal certification is an absolute, non-negotiable requirement for every consumable product. Our Halal certification covers gelatin sources (we use Halal-certified bovine gelatin and offer vegetarian HPMC capsule alternatives), manufacturing processes, cleaning procedures, and cross-contamination prevention. Halal certificate documentation is included with every export shipment to Mauritania.",
  },
  {
    q: "What is the regulatory process for importing pharmaceuticals to Mauritania?",
    a: "Mauritania's pharmaceutical imports are regulated by the Direction de la Pharmacie et du Laboratoire (DPL). The regulatory framework is relatively straightforward. Import clearance typically requires standard trade and quality documents — commercial invoice, packing list, Certificate of Analysis, Halal certificate, Free Sale Certificate, WHO-GMP certificate, and Certificate of Origin. Mauritania uses both French and Arabic, so bilingual documentation may be preferred. The documentation burden is lower than in markets with complex multi-year registration processes. We recommend importers verify current requirements with the DPL and local customs.",
  },
  {
    q: "What is the MOQ for Mauritania export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. Mauritania is a smaller market (4.5 million population) — we understand that order volumes may be smaller than larger African markets. We offer pilot-volume orders for market testing and relationship building, with the ability to scale as demand grows. For Nigella Sativa softgels and other high-demand formulations, we can accommodate varied order sizes. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How long does shipping take from India to Mauritania?",
    a: "Mauritania has direct Atlantic port access at Nouakchott (Port de l'Amitie), which simplifies logistics compared to landlocked Sahelian neighbors. Sea freight from JNPT (Mumbai) to Nouakchott takes approximately 20-24 days ocean transit via West African shipping lanes. Some routes may involve transshipment at Las Palmas (Canary Islands), Dakar (Senegal), or Tangier Med (Morocco), adding 2-4 days. After port arrival, customs clearance at Nouakchott typically takes 3-5 business days. Total transit from factory dispatch to warehouse delivery is typically 25-32 days.",
  },
  {
    q: "What documentation is needed for importing softgels to Mauritania?",
    a: "Documentation requirements for Mauritania include: Certificate of Analysis (batch-specific), Halal certificate (absolute requirement — Mauritania is 100% Muslim), Free Sale Certificate (Indian government-issued), WHO-GMP certificate, Certificate of Origin, commercial invoice with FOB/CIF pricing, and packing list with batch details. French and Arabic documentation is preferred. Mauritania's direct port access means no transit country documentation is required, simplifying the process compared to landlocked Sahelian markets. We prepare the complete documentation package for every shipment.",
  },
  {
    q: "Does Admetus manufacture Nigella Sativa (Habbatus Sauda) softgel capsules?",
    a: "Yes. Admetus manufactures Nigella Sativa oil softgel capsules — also known as Habbatus Sauda or Kalonji oil capsules. Nigella Sativa holds deep cultural and religious significance in the Islamic world and has universal demand in Mauritania's 100% Muslim population. Our Nigella Sativa softgel formulation uses cold-pressed Nigella Sativa seed oil encapsulated in Halal-certified gelatin shells, providing precise dosing, extended shelf life, and convenience — particularly important in Mauritania's hot Saharan climate. Private label Nigella Sativa softgels are available with custom branding and packaging for the Mauritanian market.",
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
      name: "Mauritania",
      item: "https://www.admetuslifesciences.com/export/mauritania/",
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

export default function MauritaniaPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Mauritania — WHO-GMP and Halal certified"
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
            India &rarr; Mauritania
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;MAURITANIA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP and Halal certified softgel capsules from Haryana,
            India — serving Mauritanian importers with culturally
            appropriate formulations, Nigella Sativa capsules, direct
            Atlantic port shipping, and competitive&nbsp;pricing.
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
                MAURITANIA&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Mauritania is a West African nation of 4.5 million people
                situated on the Atlantic coast, bridging the Arab
                Maghreb and sub-Saharan Africa. The country is almost
                entirely import-dependent for pharmaceuticals and
                nutraceuticals — domestic pharmaceutical manufacturing
                capacity is minimal. Every significant medication,
                supplement, and nutraceutical product consumed in
                Mauritania is imported, with India among the primary
                supplier countries for affordable generics and health
                products.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Mauritania is 100% Muslim — Islam is the state religion,
                enshrined in the constitution. Halal certification is
                an absolute, non-negotiable requirement for every
                consumable product entering the country, including
                pharmaceutical and nutraceutical capsules. Products
                without Halal certification cannot be imported, sold,
                or consumed. This absolute religious requirement
                narrows the field of eligible Indian manufacturers to
                those holding valid Halal certification — which Admetus
                does.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Mauritania&apos;s pharmaceutical sector is regulated by
                the Direction de la Pharmacie et du Laboratoire (DPL).
                The regulatory framework is relatively straightforward
                — standard trade documentation, Halal certification,
                WHO-GMP certificate, and quality certificates are
                typically sufficient for import clearance. Unlike
                landlocked Sahelian neighbors (Mali, Niger, Chad),
                Mauritania has direct Atlantic port access at Nouakchott,
                simplifying logistics and reducing transit times from
                Indian ports.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Despite its small population, Mauritania represents a
                strategically interesting market. The country bridges
                the Arab world and sub-Saharan Africa — culturally,
                linguistically, and commercially. Mauritanian importers
                often serve as distribution bridges to neighboring
                Sahelian markets. The healthcare sector is growing,
                with expanding private clinics in Nouakchott and
                Nouadhibou, and international health organizations
                operating nutrition and maternal health programs
                across the country.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Mauritania Matters */}
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
                  WHY MAURITANIA&nbsp;MATTERS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  Mauritania is a small but strategically positioned
                  market at the crossroads of the Arab Maghreb and
                  sub-Saharan Africa — overlooked by most Indian
                  manufacturers, with direct port&nbsp;access.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "100% Muslim — Halal is absolute and universal",
                    "Mauritania's entire population is Muslim. Halal certification is not a competitive advantage — it is an absolute prerequisite. Every consumable product must be Halal certified. This eliminates all non-certified competitors from the market entirely. Indian manufacturers with Halal certification, like Admetus, are positioned to serve a market where the certification barrier provides structural protection from non-compliant competitors.",
                  ],
                  [
                    "Direct Atlantic port access — simpler logistics",
                    "Unlike landlocked Sahelian neighbors (Mali, Niger, Chad), Mauritania has direct Atlantic port access at Nouakchott (Port de l'Amitie). This eliminates the need for overland transit through third countries, reduces transit times by 5-10 days compared to landlocked destinations, avoids transit customs complications, and reduces total shipping cost. Sea freight from JNPT to Nouakchott takes approximately 20-24 days.",
                  ],
                  [
                    "Strategic bridge market — Arab and sub-Saharan Africa",
                    "Mauritania sits at the crossroads of the Arab Maghreb and sub-Saharan West Africa. Mauritanian importers and distributors often serve as bridges to neighboring markets — including Mali, Senegal, and Western Sahara. Establishing a supply relationship with Mauritanian distributors can open secondary distribution channels across the western Sahel. Arabic and French are both used commercially, creating connections to both the Francophone Sahel and the Arab Maghreb.",
                  ],
                  [
                    "Very few Indian manufacturers target Mauritania",
                    "Mauritania's small population (4.5 million) means most Indian pharmaceutical exporters do not specifically target it. The focus is typically on larger markets — Nigeria, Kenya, Ghana. This competitive gap means fewer Indian manufacturers compete for Mauritanian import relationships, allowing manufacturers who specifically target the market to build strong, potentially exclusive distribution partnerships.",
                  ],
                  [
                    "Low regulatory barriers via DPL",
                    "Mauritania's Direction de la Pharmacie et du Laboratoire (DPL) oversees pharmaceutical regulation with a framework that is significantly less complex than established agencies in larger markets. Standard export documentation — COA, Halal certificate, Free Sale Certificate, WHO-GMP certificate — is typically sufficient for import clearance. This reduces the cost and timeline of market entry.",
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
                HALAL CERTIFICATION — ABSOLUTE FOR&nbsp;MAURITANIA
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Mauritania is 100% Muslim — Islam is the state religion.
                Halal certification is not merely preferred or expected
                — it is an absolute legal and cultural requirement for
                every consumable product. Pharmaceutical and
                nutraceutical capsules are no exception. Products
                without Halal certification cannot be imported, sold,
                or consumed in Mauritania under any circumstances.
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
                products across the Muslim world. In Mauritania, where
                Islamic tradition and daily life are inseparable,
                Nigella Sativa oil capsules have universal cultural
                demand. Our Nigella Sativa softgel capsule formulation
                is specifically designed for Muslim-majority markets
                like Mauritania, combining deep cultural significance
                with modern softgel encapsulation technology and Halal
                manufacturing standards.
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
              Why Admetus for Mauritania
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY MAURITANIAN IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE MAURITANIAN&nbsp;MARKET
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
              Mauritanian market. See our{" "}
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
              DOCUMENTATION FOR MAURITANIAN&nbsp;IMPORT
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
                  INDIA TO MAURITANIA SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  Mauritania has direct Atlantic port access at
                  Nouakchott — simpler and faster logistics than
                  landlocked Sahelian&nbsp;neighbors.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: JNPT (Nhava Sheva), Mumbai",
                    "Products are dispatched from our Jind, Haryana facility to JNPT port in Mumbai — approximately 1,200km by road, 2-3 days transit. JNPT is India's largest container port and the primary departure point for pharmaceutical exports to West Africa and the Maghreb. Cargo is consolidated, inspected, and cleared for export at JNPT's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Direct route: JNPT to Nouakchott",
                    "Sea freight from JNPT to Nouakchott (Port de l'Amitie) takes approximately 20-24 days ocean transit via West African shipping lanes. Direct services may be less frequent than routes to larger West African ports, but Mauritania's Atlantic coastline means no overland transit through third countries is required — a significant logistical advantage over landlocked Sahelian destinations like Mali, Niger, and Chad.",
                  ],
                  [
                    "Transshipment options: via Dakar, Tangier Med, or Las Palmas",
                    "Some shipping routes to Nouakchott involve transshipment at regional hub ports — Dakar (Senegal), Tangier Med (Morocco), or Las Palmas (Canary Islands, Spain). These transshipment routes may add 2-4 days to total transit time but often offer more frequent sailing schedules and competitive freight rates, particularly for LCL (less than container load) shipments.",
                  ],
                  [
                    "Packaging for Saharan desert climate",
                    "All Mauritania-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants and moisture barriers, tamper-evident sealing, and batch identification. Packaging specifically accounts for Mauritania's extreme Saharan climate — temperatures regularly exceed 45 degrees C in interior regions. Coastal humidity in Nouakchott also requires moisture barrier protection. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners.",
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
              MAURITANIA EXPORT Q&amp;A
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
              START YOUR MAURITANIA EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Mauritania import
              requirements — Halal documentation, Nigella Sativa
              formulations, MOQ, pricing, and direct shipping to
              Nouakchott. We respond within 48&nbsp;hours.
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
                href="https://wa.me/917497841608?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Mauritania.%20Please%20share%20details."
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

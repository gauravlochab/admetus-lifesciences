import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "Halal certified manufacturing — critical for Chad",
    desc: "Chad is approximately 55% Muslim, with Islam predominant in the northern and central regions. Halal certification is essential for pharmaceutical and nutraceutical products targeting the Muslim-majority population. Chadian distributors and pharmacies serving Muslim communities require Halal compliance as a baseline condition. Admetus holds Halal certification for its Jind, Haryana facility and product range, ensuring every softgel capsule meets the religious dietary and manufacturing standards required for the Chadian market.",
  },
  {
    title: "WHO-GMP certified quality at competitive pricing",
    desc: "Chad faces critical medicine shortages — affordability is a primary determinant of pharmaceutical access. Our WHO-GMP certification provides the quality assurance required by international health organizations, NGOs, and Chadian healthcare providers, while our Haryana facility's lower overhead enables pricing that makes essential nutraceuticals accessible in Chad's extremely price-sensitive market. This combination of certified quality and affordable pricing addresses Chad's most pressing pharmaceutical supply challenge.",
  },
  {
    title: "Critical medicine shortages — massive unmet demand",
    desc: "Chad faces some of the most severe medicine shortages in the world. The country has virtually no domestic pharmaceutical manufacturing capacity, and its landlocked geography, limited infrastructure, and ongoing humanitarian crises create persistent supply gaps. Essential medicines, vitamins, and supplements are chronically unavailable across much of the country. For Indian manufacturers willing to navigate the logistics, this unmet demand represents a significant and growing export opportunity.",
  },
  {
    title: "DPA regulatory framework — minimal barriers",
    desc: "Chad's Direction de la Pharmacie et des Analyses (DPA) oversees pharmaceutical regulation. The regulatory framework is relatively straightforward compared to complex multi-year registration processes in larger markets. Standard export documentation — Certificate of Analysis, Halal certificate, Free Sale Certificate, WHO-GMP certificate, and commercial trade documents — is typically sufficient for import clearance. This significantly reduces both the cost and timeline of market entry for Indian manufacturers.",
  },
  {
    title: "Nigella Sativa (Habbatus Sauda) — strong cultural demand",
    desc: "Nigella Sativa — known as Habbatus Sauda or Kalonji — holds deep cultural and religious significance in Muslim communities worldwide. The Prophet Muhammad (PBUH) is quoted as saying it is a cure for every disease except death. In Chad's Muslim-majority northern and central regions, Nigella Sativa oil is widely used as a traditional health remedy. Admetus manufactures Nigella Sativa oil softgel capsules — a product with strong cultural demand in Chad that very few Indian manufacturers specifically offer for this market.",
  },
];

const products = [
  {
    name: "Nigella Sativa (Habbatus Sauda / Kalonji) Oil Softgel Capsules",
    relevance: "Nigella Sativa — known as Habbatus Sauda in Arabic and Kalonji in South Asian languages — is one of the most culturally significant health products in the Islamic world. In Chad's Muslim-majority population, particularly in N'Djamena, Abeche, and the northern and central regions, Nigella Sativa oil is used for immune support, digestive health, respiratory conditions, and general wellness. The softgel capsule format offers precise dosing, longer shelf life, and convenience compared to raw oil — critical advantages in Chad's hot Sahelian climate. This product has strong cultural demand across Chad's Muslim communities.",
  },
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Despite Chad's intense Sahelian sunlight, Vitamin D deficiency is documented among populations with limited dietary diversity and among women who wear full-body covering for religious reasons. Vitamin D3 softgel capsules are prescribed for deficiency treatment and recognized by international health organizations operating in Chad for their role in immune function and bone health. The 60,000 IU softgel format is particularly suited for weekly or monthly dosing protocols in resource-limited settings where daily compliance is difficult to achieve.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Chad is a landlocked country with limited access to seafood, making the population's dietary Omega-3 intake naturally very low. Cardiovascular health is an emerging concern in N'Djamena's growing urban population. Omega-3 softgel capsules serve both the small commercial pharmacy market and the institutional healthcare channel — international NGOs and UN health agencies operating in Chad procure nutraceutical supplements for their nutrition and health programs, particularly for maternal and child health initiatives.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Malnutrition and micronutrient deficiency are among Chad's most critical health challenges. Chad consistently ranks among the countries with the highest rates of child malnutrition and food insecurity globally. Iron, Vitamin A, zinc, iodine, and folate deficiencies are widespread. Multivitamin softgel capsules address multiple deficiencies in a single dosage form and are essential for humanitarian procurement — UNICEF, WHO, MSF, WFP, and numerous NGOs operating in Chad procure multivitamin supplements for maternal health, child nutrition, and refugee health programs.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations address critical needs in Chad — calcium deficiency during pregnancy and lactation is extremely common in a country with high fertility rates and limited dietary diversity. The Calcitriol-Calcium-K2 combination supports bone mineralization and calcium absorption for pregnant and lactating women, elderly populations, and growing children. These health needs are severely under-addressed in Chad's extremely limited healthcare infrastructure, creating demand through both commercial and humanitarian procurement channels.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. The COA provides quality assurance documentation for Chadian importers and is essential for customs clearance and DPA import verification. French-language COAs can be provided upon request, as French is one of Chad's official languages.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific products. This is a critical documentation requirement for Chad — a Muslim-majority country where Halal compliance is expected for pharmaceutical imports. Chadian distributors and pharmacies serving the Muslim population require Halal certification as a baseline condition. Our Halal certificate covers all gelatin sources, manufacturing processes, and cross-contamination prevention measures.",
  },
  {
    doc: "Free Sale Certificate",
    desc: "Indian government-issued certificate confirming the product is freely manufactured and sold in India. This document establishes the product's legitimate manufacturing origin and is used by Chadian importers to demonstrate product provenance to the DPA. Embassy authentication or apostille can be provided upon request for the Chadian market.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. The DPA in Chad recognizes WHO-GMP certification as evidence of manufacturing quality standards. This certification is particularly valued by international health organizations and NGOs procuring pharmaceuticals for Chad — it is often a mandatory requirement for institutional buyers and humanitarian procurement.",
  },
  {
    doc: "Packing List & Commercial Invoice",
    desc: "Detailed commercial invoice with FOB/CIF N'Djamena pricing, HS codes, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required for customs clearance at Chadian border points and for import documentation by the Direction Generale des Douanes et Droits Indirects (Chadian customs authority). Transit documentation for the Douala-N'Djamena corridor is also included.",
  },
  {
    doc: "Certificate of Origin",
    desc: "Certificate confirming Indian origin of manufacture, issued by the relevant Chamber of Commerce in India. This document supports customs processing and is required by Chadian customs authorities. Transit through Cameroon (the primary port access route via Douala) requires additional CEMAC transit documentation, which we coordinate with the buyer's freight forwarder.",
  },
];

const faqs = [
  {
    q: "Is Admetus Halal certified for the Chadian market?",
    a: "Yes. Admetus Lifesciences holds Halal certification for its manufacturing facility in Jind, Haryana, and for its product range. Chad is approximately 55% Muslim, with Islam predominant in the northern and central regions including the capital N'Djamena. Halal certification is essential for pharmaceutical and nutraceutical imports targeting the Muslim-majority population. Our Halal certification covers gelatin sources (we use Halal-certified bovine gelatin and offer vegetarian HPMC capsule alternatives), manufacturing processes, cleaning procedures, and cross-contamination prevention. Halal certificate documentation is included with every export shipment to Chad.",
  },
  {
    q: "What is the regulatory process for importing pharmaceuticals to Chad?",
    a: "Chad's pharmaceutical imports are regulated by the Direction de la Pharmacie et des Analyses (DPA). The regulatory framework is relatively straightforward compared to heavily regulated markets. Import clearance typically requires standard trade and quality documents — commercial invoice, packing list, Certificate of Analysis, Halal certificate, Free Sale Certificate, WHO-GMP certificate, and Certificate of Origin. Chad is a French-speaking country, so French-language documentation is preferred by the DPA and customs authorities. The documentation burden is significantly lower than in markets with complex multi-year registration processes. We recommend importers verify current requirements with the DPA.",
  },
  {
    q: "What is the MOQ for Chad export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. We understand that Chad faces unique logistics challenges as a landlocked country with limited infrastructure — initial orders may be smaller and affordability is the primary concern. We offer pilot-volume orders for market testing and relationship building, with the ability to scale as demand grows. For Nigella Sativa softgels and other high-demand formulations, we can accommodate varied order sizes. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How long does shipping take from India to Chad?",
    a: "Chad is a landlocked country, so all shipments require ocean freight plus overland transit. The primary route is JNPT (Mumbai) to Douala (Cameroon) — approximately 20-24 days ocean transit — followed by overland transit from Douala to N'Djamena, Chad, approximately 1,800km, taking 4-6 days. An alternative route via Lagos (Nigeria) through northern Nigeria to N'Djamena is also available. Total transit from factory dispatch to warehouse delivery in N'Djamena is typically 24-30 days. The Douala-N'Djamena corridor is the most established trade route for Chadian imports, with CEMAC transit facilitation agreements in place.",
  },
  {
    q: "What documentation is needed for importing softgels to Chad?",
    a: "Documentation requirements for Chad include: Certificate of Analysis (batch-specific), Halal certificate (essential for Muslim-majority country), Free Sale Certificate (Indian government-issued), WHO-GMP certificate, Certificate of Origin, commercial invoice with FOB/CIF pricing, and packing list with batch details. French-language documentation is strongly preferred by Chadian authorities. CEMAC transit documentation for the Douala-N'Djamena corridor is also required. We prepare the complete documentation package for every export shipment.",
  },
  {
    q: "Does Admetus manufacture Nigella Sativa (Habbatus Sauda) softgel capsules?",
    a: "Yes. Admetus manufactures Nigella Sativa oil softgel capsules — also known as Habbatus Sauda or Kalonji oil capsules. Nigella Sativa holds deep cultural and religious significance in the Islamic world and has strong demand in Chad's Muslim-majority population. Our Nigella Sativa softgel formulation uses cold-pressed Nigella Sativa seed oil encapsulated in Halal-certified gelatin shells, providing precise dosing, extended shelf life, and convenience — particularly important in Chad's extreme Sahelian climate where raw oils degrade rapidly. Private label Nigella Sativa softgels are available with custom branding and packaging.",
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
      name: "Chad",
      item: "https://www.admetuslifesciences.com/export/chad/",
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

export default function ChadPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Chad — WHO-GMP and Halal certified"
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
            India &rarr; Chad
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;CHAD
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP and Halal certified softgel capsules from Haryana,
            India — serving Chadian importers with affordable
            formulations, Nigella Sativa capsules, essential
            nutraceuticals for critical medicine shortages, and
            competitive&nbsp;pricing.
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
                CHAD&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Chad is a landlocked Central African nation of 17 million
                people that faces some of the most severe medicine
                shortages in the world. The country has virtually no
                domestic pharmaceutical manufacturing capacity — every
                medication, supplement, and nutraceutical product
                consumed in Chad is imported, primarily through the port
                corridor of Douala (Cameroon) via the Douala-N&apos;Djamena
                trade route. India is a primary supplier country for
                Chad&apos;s pharmaceutical needs, with Indian-manufactured
                generics widely distributed through N&apos;Djamena&apos;s
                pharmacy network and humanitarian supply chains.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Chad is approximately 55% Muslim, with Islam predominant
                in the northern and central regions including the capital
                N&apos;Djamena. Halal certification is an essential
                requirement for pharmaceutical and nutraceutical products
                targeting the Muslim-majority population. Chadian
                distributors and pharmacies serving Muslim communities
                expect Halal compliance. This narrows the field of
                eligible Indian manufacturers to those holding valid
                Halal certification — which Admetus does.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Chad&apos;s pharmaceutical sector is regulated by the
                Direction de la Pharmacie et des Analyses (DPA). The
                regulatory framework is relatively straightforward —
                standard trade documentation, Halal certification,
                WHO-GMP certificate, and quality certificates are
                typically sufficient for import clearance. The
                documentation burden is significantly lower than in
                markets with complex multi-year registration processes.
                For Indian manufacturers, Chad represents a low-barrier
                export opportunity with massive unmet demand.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Chad faces a unique combination of health challenges —
                chronic malnutrition, disease burden from malaria and
                other endemic conditions, refugee health needs (Chad
                hosts hundreds of thousands of refugees from Sudan,
                Nigeria, and CAR), and extremely limited healthcare
                infrastructure. This creates enormous demand for
                affordable, essential health products. The market has
                both a commercial dimension (growing pharmacy sector
                in N&apos;Djamena and regional capitals) and a massive
                humanitarian dimension — UNICEF, WHO, MSF, UNHCR,
                and dozens of NGOs operate extensive health programs
                across the country.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Chad Matters */}
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
                  WHY CHAD&nbsp;MATTERS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  Chad has critical medicine shortages and among the
                  highest unmet pharmaceutical needs in Central Africa
                  — an underserved market with enormous demand for
                  affordable, Halal-certified health&nbsp;products.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "17 million population, zero domestic pharma manufacturing",
                    "Chad has absolutely no domestic pharmaceutical manufacturing capacity. Every pill, capsule, syrup, and supplement is imported. This total import dependency, combined with limited supply chain infrastructure, creates chronic medicine shortages — and opportunity for manufacturers willing to serve the market. Indian manufacturers with WHO-GMP certification and competitive pricing are increasingly filling this supply gap.",
                  ],
                  [
                    "Critical medicine shortages — massive unmet demand",
                    "Chad faces some of the most severe medicine shortages in the world. Essential medicines, vitamins, and supplements are frequently unavailable outside N'Djamena. The WHO estimates that a significant proportion of health facilities across Chad experience stockouts of essential medicines. This chronic shortage means demand consistently exceeds supply — for manufacturers who can navigate the logistics, this is a market with guaranteed baseline demand.",
                  ],
                  [
                    "55% Muslim — Halal certification essential",
                    "Chad's Muslim-majority population, concentrated in the northern and central regions including N'Djamena, requires Halal-certified health products. Indian manufacturers holding Halal certification and offering culturally relevant formulations like Nigella Sativa are positioned to serve a market segment that non-certified competitors cannot access. The Muslim population represents the majority of N'Djamena's pharmacy consumers.",
                  ],
                  [
                    "Major humanitarian procurement hub",
                    "Chad is one of the largest humanitarian operation theaters in Central Africa. It hosts hundreds of thousands of refugees from Sudan, Nigeria, and CAR. UNICEF, WHO, MSF, UNHCR, WFP, ICRC, and dozens of international NGOs operate extensive health programs. These organizations procure significant volumes of pharmaceutical and nutraceutical products — multivitamins, micronutrient supplements, immune support formulations — creating a large institutional procurement channel alongside commercial distribution.",
                  ],
                  [
                    "Very low regulatory barriers via DPA",
                    "Chad's Direction de la Pharmacie et des Analyses (DPA) oversees pharmaceutical regulation with a framework that is significantly less complex than established agencies in larger markets. Standard export documentation is typically sufficient for import clearance, reducing both the cost and timeline of market entry for Indian manufacturers targeting this underserved market.",
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
                HALAL CERTIFICATION — ESSENTIAL FOR&nbsp;CHAD
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Chad is approximately 55% Muslim, with Islam predominant
                in the northern and central regions including the capital
                N&apos;Djamena. Islamic dietary and manufacturing
                standards apply to all consumable products for the
                Muslim population — including pharmaceutical and
                nutraceutical capsules. Halal certification is an
                essential documentation requirement for reaching
                Chad&apos;s Muslim consumers, who represent the
                majority of the country&apos;s pharmaceutical market.
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
                who prefer a non-gelatin option — serving both Muslim
                and Christian populations in Chad.
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
                products across the Muslim world. In Chad&apos;s Muslim
                communities, where traditional and Islamic medicine
                practices are deeply rooted, Nigella Sativa oil
                capsules have strong cultural demand. Our Nigella
                Sativa softgel capsule formulation combines traditional
                cultural significance with modern softgel encapsulation
                technology and Halal manufacturing standards.
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
              Why Admetus for Chad
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY CHADIAN IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE CHADIAN&nbsp;MARKET
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
              Chadian market. See our{" "}
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
              DOCUMENTATION FOR CHADIAN&nbsp;IMPORT
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
                  INDIA TO CHAD SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  Chad is landlocked — all shipments travel by sea to
                  Central African ports then overland to N&apos;Djamena,
                  primarily via the Douala-N&apos;Djamena&nbsp;corridor.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: JNPT (Nhava Sheva), Mumbai",
                    "Products are dispatched from our Jind, Haryana facility to JNPT port in Mumbai — approximately 1,200km by road, 2-3 days transit. JNPT is India's largest container port and the primary departure point for pharmaceutical exports to Central and West Africa. Cargo is consolidated, inspected, and cleared for export at JNPT's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Primary route: JNPT to Douala (Cameroon) to N'Djamena",
                    "The most commonly used corridor for Chad-bound goods is via Douala, Cameroon — the closest major port to N'Djamena. Ocean transit from JNPT to Douala takes approximately 20-24 days. From Douala, goods travel overland by truck through Cameroon to N'Djamena — approximately 1,800km, taking 4-6 days via the Douala-N'Djamena highway corridor. This is the most established trade route for Chadian imports, with CEMAC transit facilitation agreements in place.",
                  ],
                  [
                    "Alternative route: via Lagos (Nigeria) to N'Djamena",
                    "An alternative route is JNPT to Lagos, Nigeria — approximately 18-22 days ocean transit — followed by overland transit through northern Nigeria to N'Djamena, approximately 1,700km, taking 4-7 days. This route may be competitive on freight rates but border crossings can be less predictable than the Cameroon corridor. Some importers use this route when Douala port is congested.",
                  ],
                  [
                    "Packaging for extreme Sahelian and tropical transit",
                    "All Chad-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants and moisture barriers, tamper-evident sealing, and batch identification. Packaging specifically accounts for Chad's extreme climate variability — from tropical humidity in southern Cameroon during transit to extreme Sahelian heat in N'Djamena (temperatures regularly exceed 45 degrees C). We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-Chad corridor.",
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
              CHAD EXPORT Q&amp;A
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
              START YOUR CHAD EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Chad import
              requirements — Halal documentation, Nigella Sativa
              formulations, MOQ, pricing, and shipping via Douala to
              N&apos;Djamena. We respond within 48&nbsp;hours.
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
                href="https://wa.me/917497841608?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Chad.%20Please%20share%20details."
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

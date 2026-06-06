import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "Halal certified manufacturing — non-negotiable for Niger",
    desc: "Niger is approximately 99% Muslim — among the highest Muslim-majority concentrations in the world. Halal certification is not a differentiator in this market — it is an absolute baseline requirement. All pharmaceutical and nutraceutical imports must meet Halal standards for acceptance by Nigerien distributors, pharmacies, and consumers. Admetus holds Halal certification for its Jind, Haryana facility and product range, ensuring every softgel capsule meets the religious dietary and manufacturing standards required for the Nigerien market.",
  },
  {
    title: "WHO-GMP quality at the most affordable pricing",
    desc: "Niger consistently ranks among the poorest nations globally — affordability is not just a factor, it is the primary determinant of pharmaceutical access. Our WHO-GMP certification provides the quality assurance required by international health organizations and Nigerien healthcare providers, while our Haryana facility's lower overhead enables pricing that makes essential nutraceuticals accessible in Niger's extremely price-sensitive market. This combination of certified quality and the lowest viable pricing is critical for serving Niger's population.",
  },
  {
    title: "100% import-dependent — zero domestic pharma capacity",
    desc: "Niger has no domestic pharmaceutical manufacturing capacity whatsoever. Every medication, supplement, and nutraceutical product consumed by Niger's 26 million people is imported. This total import dependency means there is zero domestic manufacturing competition — the competitive landscape is entirely among foreign suppliers. Indian manufacturers, with their combination of WHO-GMP quality, Halal certification, and the most competitive pricing globally, are among the primary supplier countries for Niger's pharmaceutical needs.",
  },
  {
    title: "DPH regulatory framework — minimal barriers",
    desc: "Niger's Direction de la Pharmacie et de l'Hygiene (DPH) oversees pharmaceutical regulation. The regulatory framework is relatively straightforward compared to complex multi-year registration processes in larger markets. Standard export documentation — Certificate of Analysis, Halal certificate, Free Sale Certificate, WHO-GMP certificate, and commercial trade documents — is typically sufficient for import clearance. This significantly reduces both the cost and timeline of market entry for Indian manufacturers.",
  },
  {
    title: "Nigella Sativa (Habbatus Sauda) — universal cultural demand",
    desc: "Nigella Sativa — known as Habbatus Sauda or Kalonji — holds deep cultural and religious significance across the Islamic world. The Prophet Muhammad (PBUH) is quoted as saying it is a cure for every disease except death. In Niger, with its 99% Muslim population, Nigella Sativa oil is one of the most trusted and widely used traditional health remedies. Admetus manufactures Nigella Sativa oil softgel capsules — a product with near-universal cultural demand in Niger that very few Indian manufacturers specifically offer for this market.",
  },
];

const products = [
  {
    name: "Nigella Sativa (Habbatus Sauda / Kalonji) Oil Softgel Capsules",
    relevance: "Nigella Sativa — known as Habbatus Sauda in Arabic and Kalonji in South Asian languages — is one of the most culturally significant health products in the Islamic world. In Niger's 99% Muslim population, Nigella Sativa oil is used for immune support, digestive health, respiratory conditions, and general wellness. The softgel capsule format offers precise dosing, longer shelf life, and convenience compared to raw oil — advantages that are particularly important in Niger's hot Sahelian climate where liquid oils degrade faster. This product has near-universal cultural demand in Niger, making it a high-potential formulation for Nigerien importers.",
  },
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Despite Niger's intense Sahelian sunlight, Vitamin D deficiency is documented in Nigerien populations — particularly among women who wear full-body covering for religious reasons, limiting UV exposure, and among malnourished populations where absorption is impaired. Vitamin D3 softgel capsules are prescribed for deficiency treatment and are recognized by international health organizations operating in Niger for their role in immune function and bone health. The 60,000 IU softgel format is suited for weekly or monthly dosing protocols used in resource-limited settings where daily compliance is difficult.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Niger is a landlocked country with extremely limited access to seafood, making the population's dietary Omega-3 intake naturally very low. Cardiovascular health is an emerging concern in Niamey and other growing urban centers where dietary patterns are shifting. Omega-3 softgel capsules serve both the small but growing commercial pharmacy market and the institutional healthcare channel — international NGOs and UN health agencies operating in Niger procure nutraceutical supplements for their nutrition and health programs.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Malnutrition and micronutrient deficiency are among Niger's most critical health challenges. Niger has one of the highest rates of child malnutrition globally — UNICEF and WHO data show that a significant proportion of Nigerien children under five suffer from chronic malnutrition. Iron, Vitamin A, zinc, iodine, and folate deficiencies are widespread. Multivitamin softgel capsules address multiple deficiencies in a single dosage form and are essential for both humanitarian procurement (NGOs, international health organizations, government health programs) and the growing commercial pharmacy sector in Niamey, Zinder, and Maradi.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations address critical needs in Niger — calcium deficiency during pregnancy and lactation is extremely common in a country with one of the highest fertility rates globally (approximately 7 children per woman). The Calcitriol-Calcium-K2 combination supports bone mineralization and calcium absorption for pregnant and lactating women, elderly populations, and growing children. These health needs are severely under-addressed in Niger's limited healthcare infrastructure.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. The COA provides quality assurance documentation for Nigerien importers and is essential for customs clearance and DPH import verification. French-language COAs can be provided upon request, as French is Niger's official language.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific products. This is the single most important documentation requirement for Niger — a 99% Muslim country. Nigerien distributors, pharmacies, and consumers require Halal certification as an absolute non-negotiable condition. Our Halal certificate covers all gelatin sources, manufacturing processes, and cross-contamination prevention measures.",
  },
  {
    doc: "Free Sale Certificate",
    desc: "Indian government-issued certificate confirming the product is freely manufactured and sold in India. This document establishes the product's legitimate manufacturing origin and is used by Nigerien importers to demonstrate product provenance to the DPH. Embassy authentication or apostille can be provided upon request for the Nigerien market.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. The DPH in Niger recognizes WHO-GMP certification as evidence of manufacturing quality standards. This certification is particularly valued by international health organizations and NGOs procuring pharmaceuticals for Niger — it is often a mandatory procurement requirement for institutional buyers operating in the country.",
  },
  {
    doc: "Packing List & Commercial Invoice",
    desc: "Detailed commercial invoice with FOB/CIF Niamey pricing, HS codes, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required for customs clearance at Nigerien border points and for import documentation by the Direction Generale des Douanes du Niger (Nigerien customs authority). Transit documentation for the Lagos-Niamey or Cotonou-Niamey corridor is also included.",
  },
  {
    doc: "Certificate of Origin",
    desc: "Certificate confirming Indian origin of manufacture, issued by the relevant Chamber of Commerce in India. This document supports customs processing and is required by Nigerien customs authorities. Transit through ECOWAS member port countries (Nigeria or Benin) may require additional transit documentation, which we coordinate with the buyer's freight forwarder.",
  },
];

const faqs = [
  {
    q: "Is Admetus Halal certified for the Nigerien market?",
    a: "Yes. Admetus Lifesciences holds Halal certification for its manufacturing facility in Jind, Haryana, and for its product range. Niger is approximately 99% Muslim — Halal certification is an absolute, non-negotiable requirement for any pharmaceutical or nutraceutical import. Our Halal certification covers gelatin sources (we use Halal-certified bovine gelatin and offer vegetarian HPMC capsule alternatives), manufacturing processes, cleaning procedures, and cross-contamination prevention. Halal certificate documentation is included with every export shipment to Niger.",
  },
  {
    q: "What is the regulatory process for importing pharmaceuticals to Niger?",
    a: "Niger's pharmaceutical imports are regulated by the Direction de la Pharmacie et de l'Hygiene (DPH). The regulatory framework is relatively straightforward compared to heavily regulated markets. Import clearance typically requires standard trade and quality documents — commercial invoice, packing list, Certificate of Analysis, Halal certificate, Free Sale Certificate, WHO-GMP certificate, and Certificate of Origin. Niger is a French-speaking country, so French-language documentation is preferred by the DPH and customs authorities. The documentation burden is significantly lower than in markets with complex multi-year registration processes. We recommend importers verify current requirements with the DPH.",
  },
  {
    q: "What is the MOQ for Niger export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. We understand that Niger is one of the most price-sensitive markets globally — initial orders may be smaller, and affordability is the primary concern. We offer pilot-volume orders for market testing and relationship building, with the ability to scale as demand grows. For Nigella Sativa softgels and other high-demand formulations, we can accommodate varied order sizes. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How long does shipping take from India to Niger?",
    a: "Niger is a landlocked country, so all shipments require ocean freight plus overland transit. The primary route is JNPT (Mumbai) to Lagos (Nigeria) — approximately 18-22 days ocean transit — followed by overland transit from Lagos through northern Nigeria to Niamey, adding 4-6 days. An alternative route via Cotonou (Benin) to Niamey is also available with similar total transit times and may offer smoother customs transit for some shipments. Total transit from factory dispatch to warehouse delivery in Niamey is typically 22-28 days. We coordinate with freight forwarders experienced in the West Africa landlocked corridor.",
  },
  {
    q: "What documentation is needed for importing softgels to Niger?",
    a: "Documentation requirements for Niger include: Certificate of Analysis (batch-specific), Halal certificate (essential — Niger is 99% Muslim), Free Sale Certificate (Indian government-issued), WHO-GMP certificate, Certificate of Origin, commercial invoice with FOB/CIF pricing, and packing list with batch details. French-language documentation is strongly preferred by Nigerien authorities. Transit documentation for the Lagos-Niamey or Cotonou-Niamey corridor is also required. We prepare the complete documentation package for every export shipment.",
  },
  {
    q: "Does Admetus manufacture Nigella Sativa (Habbatus Sauda) softgel capsules?",
    a: "Yes. Admetus manufactures Nigella Sativa oil softgel capsules — also known as Habbatus Sauda or Kalonji oil capsules. Nigella Sativa holds deep cultural and religious significance in the Islamic world and has near-universal demand in Niger's 99% Muslim population. Our Nigella Sativa softgel formulation uses cold-pressed Nigella Sativa seed oil encapsulated in Halal-certified gelatin shells, providing precise dosing, extended shelf life, and convenience — particularly important in Niger's hot Sahelian climate. This product is specifically relevant for Nigerien, Sahelian, and broader West African Muslim markets. Private label Nigella Sativa softgels are available with custom branding and packaging.",
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
      name: "Niger",
      item: "https://www.admetuslifesciences.com/export/niger/",
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

export default function NigerPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Niger — WHO-GMP and Halal certified"
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
            India &rarr; Niger
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;NIGER
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP and Halal certified softgel capsules from Haryana,
            India — serving Nigerien importers with affordable,
            culturally appropriate formulations, Nigella Sativa capsules,
            minimal documentation burden, and the most
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
                NIGER&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Niger is a landlocked Sahelian nation of 26 million
                people — one of the fastest-growing populations in the
                world — that is completely import-dependent for
                pharmaceuticals and nutraceuticals. The country has no
                domestic pharmaceutical manufacturing capacity. Every
                medication, supplement, and nutraceutical product
                consumed in Niger is imported, primarily through the
                port corridors of Lagos (Nigeria) and Cotonou (Benin).
                India is a primary supplier country for Niger&apos;s
                pharmaceutical needs, with Indian-manufactured generics
                and supplements widely distributed across the country.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Niger is approximately 99% Muslim — making Halal
                certification an absolute, non-negotiable requirement
                for any pharmaceutical or nutraceutical product entering
                the market. Products without Halal certification will
                be rejected by Nigerien distributors, pharmacies, and
                consumers. This religious requirement immediately
                narrows the field of eligible Indian manufacturers to
                those holding valid Halal certification — which Admetus
                does.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Niger&apos;s pharmaceutical sector is regulated by the
                Direction de la Pharmacie et de l&apos;Hygiene (DPH).
                The regulatory framework is relatively straightforward
                — standard trade documentation, Halal certification,
                WHO-GMP certificate, and quality certificates are
                typically sufficient for import clearance. The
                documentation burden is significantly lower than in
                markets with complex multi-year registration processes.
                For Indian manufacturers, Niger represents a low-barrier
                export opportunity with significant unmet demand.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Niger ranks among the poorest nations globally, with
                some of the highest rates of malnutrition, child
                mortality, and disease burden. This creates enormous
                demand for affordable, essential health products —
                multivitamins, Vitamin D3, calcium supplements, and
                immune-support formulations. The market has both a
                commercial dimension (growing pharmacy sector in
                Niamey, Zinder, Maradi) and a massive humanitarian
                dimension — UNICEF, WHO, MSF, and dozens of NGOs
                procure significant volumes of pharmaceutical and
                nutraceutical products for health programs across the
                country.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Niger Matters */}
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
                  WHY NIGER&nbsp;MATTERS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  Niger has among the highest unmet pharmaceutical
                  needs globally — an underserved market with enormous
                  demand for affordable, Halal-certified health&nbsp;products.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "26 million population, fastest-growing in the world",
                    "Niger has one of the highest population growth rates globally — approximately 3.7% annually. This rapidly growing population creates continuously expanding demand for pharmaceutical and nutraceutical products. Every new generation needs vitamins, supplements, and essential health products. For manufacturers willing to establish early relationships with Nigerien importers, this demographic trajectory means growing demand for decades to come.",
                  ],
                  [
                    "99% Muslim — Halal is absolute",
                    "Niger's near-total Muslim population means Halal certification is not a competitive advantage — it is an absolute entry requirement. Products without Halal certification simply cannot be sold. Indian manufacturers who hold Halal certification and produce culturally relevant formulations like Nigella Sativa are positioned to serve a market where non-certified competitors are automatically excluded.",
                  ],
                  [
                    "Highest need for affordable essential medicines",
                    "Niger consistently ranks among the poorest nations globally. Healthcare spending per capita is extremely low, yet the disease burden and malnutrition rates are among the highest in the world. This creates massive demand for affordable essential health products — multivitamins, micronutrient supplements, immune support formulations. Indian manufacturers with WHO-GMP quality and competitive pricing are uniquely positioned to serve this demand.",
                  ],
                  [
                    "Massive humanitarian procurement channel",
                    "Niger is one of the largest humanitarian operation theaters in the Sahel. UNICEF, WHO, MSF, ICRC, WFP, and dozens of international NGOs operate extensive health programs across the country. These organizations procure significant volumes of pharmaceutical and nutraceutical products — multivitamins, Vitamin D3, iron supplements, zinc — for maternal health, child nutrition, and disease prevention programs. A single manufacturer relationship can serve both commercial and humanitarian channels.",
                  ],
                  [
                    "Very low regulatory barriers via DPH",
                    "Niger's Direction de la Pharmacie et de l'Hygiene (DPH) oversees pharmaceutical regulation with a framework that is significantly less complex than established agencies in larger markets. Standard export documentation — COA, Halal certificate, Free Sale Certificate, WHO-GMP certificate, commercial invoice — is typically sufficient for import clearance. This reduces the cost and timeline of market entry substantially.",
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
                HALAL CERTIFICATION — ABSOLUTE REQUIREMENT FOR&nbsp;NIGER
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Niger is approximately 99% Muslim — Islamic dietary and
                manufacturing standards apply to all consumable products
                including pharmaceutical and nutraceutical capsules.
                Halal certification is the single most important
                documentation requirement for the Nigerien market.
                Products without Halal certification will not be
                accepted by any distributor, pharmacy, or consumer in
                Niger.
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
                products across the Muslim world. In Niger, where
                Islam permeates every aspect of daily life and
                traditional medicine practices are deeply rooted,
                Nigella Sativa oil capsules have near-universal
                cultural demand. Our Nigella Sativa softgel capsule
                formulation is specifically designed for Muslim-majority
                markets like Niger, combining traditional cultural
                significance with modern softgel encapsulation
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
              Why Admetus for Niger
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY NIGERIEN IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE NIGERIEN&nbsp;MARKET
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
              Nigerien market. See our{" "}
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
              DOCUMENTATION FOR NIGERIEN&nbsp;IMPORT
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
                  INDIA TO NIGER SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  Niger is landlocked — all shipments travel by sea to
                  West African ports then overland to Niamey via the
                  Lagos-Niamey or Cotonou-Niamey&nbsp;corridors.
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
                    "Primary route: JNPT to Lagos (Nigeria) to Niamey",
                    "The most commonly used corridor for Niger-bound goods is via Lagos, Nigeria. Ocean transit from JNPT to Lagos (Apapa or Tin Can Island port) takes approximately 18-22 days. From Lagos, goods travel overland by truck through northern Nigeria to Niamey — approximately 1,100km, taking 4-6 days. Lagos is the closest major port to Niger, and the Lagos-Niamey corridor is well-established for pharmaceutical imports.",
                  ],
                  [
                    "Alternative route: via Cotonou (Benin) to Niamey",
                    "An alternative route is JNPT to Cotonou, Benin — approximately 18-22 days ocean transit — followed by overland transit from Cotonou to Niamey via the Cotonou-Niamey highway corridor, approximately 1,050km, taking 3-5 days. Cotonou serves as a major transit port for landlocked Sahelian countries and may offer smoother customs processing than the Lagos corridor for some shipments.",
                  ],
                  [
                    "Packaging for extreme Sahelian climate",
                    "All Niger-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants and moisture barriers, tamper-evident sealing, and batch identification. Packaging specifically accounts for Niger's extreme Sahelian heat (temperatures regularly exceed 45 degrees C) and the extended overland transit from port to destination. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-Niger corridor.",
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
              NIGER EXPORT Q&amp;A
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
              START YOUR NIGER EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Niger import
              requirements — Halal documentation, Nigella Sativa
              formulations, MOQ, pricing, and shipping via Lagos or
              Cotonou to Niamey. We respond within 48&nbsp;hours.
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
                href="https://wa.me/917497841608?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Niger.%20Please%20share%20details."
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

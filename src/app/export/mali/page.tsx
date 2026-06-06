import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "Halal certified manufacturing — essential for Mali",
    desc: "Mali is approximately 95% Muslim. Halal certification is not a differentiator in this market — it is a baseline expectation for any pharmaceutical or nutraceutical product. Malian distributors, pharmacies, and consumers require Halal compliance as a non-negotiable condition. Admetus holds Halal certification for its Jind, Haryana facility and entire product range, ensuring every softgel capsule meets the religious dietary and manufacturing standards required for the Malian market.",
  },
  {
    title: "WHO-GMP certified quality at affordable pricing",
    desc: "Mali is one of the poorest countries in West Africa — affordability is a critical factor for pharmaceutical imports. Our WHO-GMP certification provides the quality assurance that international health organizations, NGOs, and Malian healthcare providers require, while our Haryana facility's lower overhead enables pricing that makes essential nutraceuticals commercially viable. This combination of certified quality and competitive pricing is exactly what Malian importers need to serve a price-sensitive population.",
  },
  {
    title: "100% import-dependent market — zero domestic pharma manufacturing",
    desc: "Mali has virtually no domestic pharmaceutical manufacturing capacity. The country's 22 million people depend entirely on imported medicines and supplements. This total import dependency means there is no domestic manufacturing competition — the competitive landscape is entirely among foreign suppliers. Indian manufacturers, with their combination of WHO-GMP quality, Halal certification, competitive pricing, and established export infrastructure, are well-positioned to serve this fully import-dependent market.",
  },
  {
    title: "DPM regulatory framework — low barriers to entry",
    desc: "Mali's Direction de la Pharmacie et du Medicament (DPM) oversees pharmaceutical regulation. Compared to heavily regulated markets with complex multi-year registration processes, Mali's regulatory framework is relatively straightforward. Standard export documentation — Certificate of Analysis, Halal certificate, Free Sale Certificate, WHO-GMP certificate, and commercial trade documents — is typically sufficient for import clearance. This significantly reduces both the cost and timeline of market entry.",
  },
  {
    title: "Nigella Sativa (Habbatus Sauda) — deep cultural demand",
    desc: "Nigella Sativa — known as Habbatus Sauda or Kalonji — holds deep cultural and religious significance in Muslim-majority countries. The Prophet Muhammad (PBUH) is quoted as saying it is a cure for every disease except death, making it one of the most trusted traditional remedies across the Islamic world. In Mali's predominantly Muslim population, Nigella Sativa oil is widely used for immune support, digestive health, and general wellness. Admetus manufactures Nigella Sativa oil softgel capsules — a product with strong cultural demand that very few Indian manufacturers specifically offer for the Malian market.",
  },
];

const products = [
  {
    name: "Nigella Sativa (Habbatus Sauda / Kalonji) Oil Softgel Capsules",
    relevance: "Nigella Sativa — known as Habbatus Sauda in Arabic and Kalonji in South Asian languages — is one of the most culturally significant health products in the Islamic world. In Mali's Muslim-majority population, Nigella Sativa oil is used for immune support, digestive health, respiratory conditions, and general wellness. The softgel capsule format offers precise dosing, longer shelf life, and convenience compared to raw oil. This product has strong cultural demand across Mali and the broader Sahel region, making it a high-potential formulation for Malian importers looking to serve both urban pharmacies in Bamako and regional distributors.",
  },
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Despite Mali's Sahelian climate with intense sunlight, Vitamin D deficiency is documented in Malian populations — particularly among women who wear full-body covering for religious reasons, limiting UV exposure. Vitamin D3 softgel capsules are prescribed for deficiency treatment and are increasingly recognized by Malian healthcare providers and international health organizations operating in Mali for their role in immune function and bone health. The 60,000 IU softgel format is particularly suited for weekly or monthly dosing protocols used in resource-limited healthcare settings.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Cardiovascular health is an emerging concern in Mali's growing urban population, particularly in Bamako, Sikasso, and other cities where dietary patterns are shifting toward processed foods. Omega-3 softgel capsules serve both the commercial pharmacy market and the institutional healthcare channel — international NGOs and UN health agencies operating in Mali procure nutraceutical supplements for their nutrition and health programs. Mali's landlocked geography means seafood-derived Omega-3 intake is naturally low, increasing the relevance of supplementation.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Malnutrition and micronutrient deficiency are critical health challenges in Mali. UNICEF and the WHO estimate that malnutrition affects a significant proportion of Malian children under five. Iron, Vitamin A, zinc, and folate deficiencies are widespread across the population. Multivitamin softgel capsules address multiple deficiencies in a single dosage form and serve both commercial distribution and humanitarian procurement channels — NGOs, international health organizations, and government health programs operating in Mali all procure multivitamin supplements for maternal and child health programs.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations are relevant to Mali's healthcare needs, particularly for women during pregnancy and lactation when calcium deficiency is common, and for elderly populations. The Calcitriol-Calcium-K2 combination addresses bone mineralization and calcium absorption — health concerns that are under-addressed in Mali's limited healthcare infrastructure but increasingly recognized by healthcare providers in Bamako's growing private hospital sector and by international health organizations operating across the country.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. The COA provides quality assurance documentation for Malian importers and is essential for customs clearance and DPM import verification. French-language COAs can be provided upon request.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific products. This is a critical documentation requirement for the Malian market given the country's 95% Muslim population. Malian distributors, pharmacies, and consumers require Halal certification as a baseline condition. Our Halal certificate covers all gelatin sources, manufacturing processes, and cross-contamination prevention measures.",
  },
  {
    doc: "Free Sale Certificate",
    desc: "Indian government-issued certificate confirming the product is freely manufactured and sold in India. This document establishes the product's legitimate manufacturing origin and is used by Malian importers to demonstrate product provenance to the DPM. Embassy authentication or apostille can be provided upon request for the Malian market.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. The DPM in Mali recognizes WHO-GMP certification as evidence of manufacturing quality. This certification is also valued by international health organizations and NGOs operating in Mali and is often a procurement requirement for institutional buyers.",
  },
  {
    doc: "Packing List & Commercial Invoice",
    desc: "Detailed commercial invoice with FOB/CIF Bamako pricing, HS codes, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required for customs clearance at Malian border points and for import documentation by the Direction Generale des Douanes (Malian customs authority).",
  },
  {
    doc: "Certificate of Origin",
    desc: "Certificate confirming Indian origin of manufacture, issued by the relevant Chamber of Commerce in India. This document supports customs processing and may be required by Malian customs authorities. Mali is a member of ECOWAS (Economic Community of West African States), and Certificate of Origin documentation assists with transit through ECOWAS member port countries like Senegal or Cote d'Ivoire.",
  },
];

const faqs = [
  {
    q: "Is Admetus Halal certified for the Malian market?",
    a: "Yes. Admetus Lifesciences holds Halal certification for its manufacturing facility in Jind, Haryana, and for its product range. Mali is approximately 95% Muslim, making Halal certification an essential requirement for pharmaceutical and nutraceutical imports. Our Halal certification covers gelatin sources (we use Halal-certified bovine gelatin and offer vegetarian HPMC capsule alternatives), manufacturing processes, cleaning procedures, and cross-contamination prevention. Halal certificate documentation is included with every export shipment to Mali.",
  },
  {
    q: "What is the regulatory process for importing pharmaceuticals to Mali?",
    a: "Mali's pharmaceutical imports are regulated by the Direction de la Pharmacie et du Medicament (DPM). The regulatory framework is relatively straightforward compared to heavily regulated markets. Import clearance typically requires standard trade and quality documents — commercial invoice, packing list, Certificate of Analysis, Halal certificate, Free Sale Certificate, WHO-GMP certificate, and Certificate of Origin. Mali is a French-speaking country, so French-language documentation may be preferred. The documentation burden for market entry is significantly lower than in markets with complex multi-year registration processes, though we recommend importers verify current requirements with the DPM and local customs authorities.",
  },
  {
    q: "What is the MOQ for Mali export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. We understand that Mali is an emerging market with unique logistics challenges as a landlocked country — initial orders may be smaller than established coastal markets. We offer pilot-volume orders for market testing and relationship building, with the ability to scale as demand grows. For Nigella Sativa softgels and other high-demand formulations, we can accommodate varied order sizes. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How long does shipping take from India to Mali?",
    a: "Mali is a landlocked country, so all shipments require ocean freight plus overland transit. The primary route is JNPT (Mumbai) to Dakar (Senegal) — approximately 18-22 days ocean transit — followed by overland or rail transit from Dakar to Bamako, Mali, adding 4-6 days. An alternative route via Abidjan (Cote d'Ivoire) is also available with similar total transit times. Total transit from factory dispatch to warehouse delivery in Bamako is typically 22-28 days. We coordinate with freight forwarders experienced in the West Africa landlocked corridor to ensure smooth customs clearance at transit ports.",
  },
  {
    q: "What documentation is needed for importing softgels to Mali?",
    a: "Documentation requirements for Mali include: Certificate of Analysis (batch-specific), Halal certificate (essential for Muslim-majority market), Free Sale Certificate (Indian government-issued), WHO-GMP certificate, Certificate of Origin, commercial invoice with FOB/CIF pricing, and packing list with batch details. French-language documentation is preferred by Malian authorities. Transit documentation for the Dakar-Bamako or Abidjan-Bamako corridor may also be required. We prepare the complete documentation package for every export shipment and can arrange embassy authentication or apostille upon request.",
  },
  {
    q: "Does Admetus manufacture Nigella Sativa (Habbatus Sauda) softgel capsules?",
    a: "Yes. Admetus manufactures Nigella Sativa oil softgel capsules — also known as Habbatus Sauda or Kalonji oil capsules. Nigella Sativa holds deep cultural and religious significance in the Islamic world and has strong traditional demand across Muslim-majority countries including Mali. Our Nigella Sativa softgel formulation uses cold-pressed Nigella Sativa seed oil encapsulated in Halal-certified gelatin shells, providing precise dosing, extended shelf life, and convenience. This product is specifically relevant for Malian, Sahelian, and broader West African Muslim markets. Private label Nigella Sativa softgels are available with custom branding and packaging.",
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
      name: "Mali",
      item: "https://www.admetuslifesciences.com/export/mali/",
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

export default function MaliPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Mali — WHO-GMP and Halal certified"
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
            India &rarr; Mali
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;MALI
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP and Halal certified softgel capsules from Haryana,
            India — serving Malian importers with culturally appropriate
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
                MALI&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Mali is a landlocked West African nation of 22 million
                people that is almost entirely import-dependent for
                pharmaceuticals and nutraceuticals. The country has
                virtually no domestic pharmaceutical manufacturing
                capacity — every medication, supplement, and
                nutraceutical product consumed in Mali is imported,
                primarily through the port corridors of Dakar (Senegal)
                and Abidjan (Cote d&apos;Ivoire). India is one of the
                primary supplier countries for Mali&apos;s pharmaceutical
                needs, with Indian-manufactured generics and supplements
                forming a significant share of the Malian market.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Mali is approximately 95% Muslim — making Halal
                certification an essential, non-negotiable requirement
                for any pharmaceutical or nutraceutical product entering
                the market. Malian consumers, pharmacies, and
                distributors expect Halal compliance as a baseline
                condition. This religious and cultural requirement
                narrows the field of eligible Indian manufacturers to
                those holding valid Halal certification — which Admetus
                does.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Mali&apos;s pharmaceutical sector is regulated by the
                Direction de la Pharmacie et du Medicament (DPM). While
                the DPM oversees import authorization, the regulatory
                framework is significantly less complex than markets with
                established agencies like NAFDAC in Nigeria or PPB in
                Kenya. Standard trade documentation, Halal certification,
                WHO-GMP certificate, and quality certificates are
                typically sufficient for import clearance. For Indian
                manufacturers, this represents a low-friction export
                opportunity with minimal regulatory overhead.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The market has both commercial and humanitarian
                dimensions. Mali&apos;s growing private healthcare
                sector in Bamako, Sikasso, Mopti, and other urban centers
                drives commercial pharmacy demand. Simultaneously,
                international humanitarian organizations — UNICEF, WHO,
                MSF, and numerous NGOs — procure significant volumes of
                pharmaceutical and nutraceutical products for health
                programs across the country, particularly in the
                conflict-affected northern and central regions where
                healthcare infrastructure is extremely limited.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Mali Matters */}
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
                  WHY MALI&nbsp;MATTERS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  Mali is an underserved Sahelian market that very few
                  Indian manufacturers specifically target — creating
                  opportunity for exporters willing to meet the
                  market&apos;s specific&nbsp;requirements.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "22 million population, 100% import-dependent",
                    "Mali has virtually no domestic pharmaceutical manufacturing. Every pill, capsule, syrup, and supplement is imported. This total import dependency means there is no domestic manufacturing competition — the entire market is served by foreign suppliers. For Indian manufacturers with WHO-GMP certification and Halal compliance, this is a structurally open market with consistent baseline demand for essential health products across the Sahel.",
                  ],
                  [
                    "95% Muslim population — Halal is non-negotiable",
                    "Mali's overwhelmingly Muslim population means Halal certification is not a competitive advantage — it is a baseline entry requirement. Products without Halal certification face rejection by distributors and consumers. Indian manufacturers who hold Halal certification and can produce culturally relevant formulations like Nigella Sativa are positioned to capture demand that non-certified competitors cannot access.",
                  ],
                  [
                    "Dual demand: commercial + humanitarian",
                    "Mali has a significant dual-demand structure. Commercial importers serve the growing private pharmacy and hospital market, particularly in Bamako. Simultaneously, international humanitarian organizations (UNICEF, WHO, MSF, ICRC, and numerous NGOs) procure significant volumes of pharmaceutical and nutraceutical products for health programs across the country. A single manufacturer relationship can serve both commercial distribution and institutional procurement channels.",
                  ],
                  [
                    "Very few Indian manufacturers target Mali specifically",
                    "Most Indian pharmaceutical exporters focus on larger, better-known African markets — Nigeria, Kenya, South Africa, Ghana. Very few Indian manufacturers specifically target Mali with Halal-certified products, French-language documentation, culturally relevant formulations (Nigella Sativa), and logistics planning for the landlocked Dakar-Bamako corridor. This competitive gap creates opportunity for manufacturers willing to specifically serve Malian importers.",
                  ],
                  [
                    "Low regulatory barriers via DPM",
                    "Mali's Direction de la Pharmacie et du Medicament (DPM) oversees pharmaceutical regulation with a framework that is significantly less complex than established agencies in larger markets. Standard export documentation — COA, Halal certificate, Free Sale Certificate, WHO-GMP certificate, commercial invoice, packing list — is typically sufficient for import clearance. This reduces both the cost and timeline of market entry.",
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
                HALAL CERTIFICATION — ESSENTIAL FOR&nbsp;MALI
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Mali is approximately 95% Muslim — Islamic dietary and
                manufacturing standards apply to all consumable products
                including pharmaceutical and nutraceutical capsules.
                Halal certification is among the most important
                documentation requirements for the Malian market.
                Products without Halal certification face rejection by
                Malian distributors, pharmacies, and consumers.
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
                products across the Muslim world. In Mali, where
                traditional and Islamic medicine practices are deeply
                intertwined, Nigella Sativa oil capsules have strong
                cultural resonance. Our Nigella Sativa softgel capsule
                formulation is specifically designed for Muslim-majority
                markets like Mali, combining traditional cultural
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
              Why Admetus for Mali
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY MALIAN IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE MALIAN&nbsp;MARKET
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
              Malian market. See our{" "}
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
              DOCUMENTATION FOR MALIAN&nbsp;IMPORT
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
                  INDIA TO MALI SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  Mali is landlocked — all shipments travel by sea to
                  West African ports then overland to Bamako via the
                  Dakar-Bamako or Abidjan-Bamako&nbsp;corridors.
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
                    "Primary route: JNPT to Dakar (Senegal) to Bamako",
                    "The most commonly used corridor for Mali-bound goods is via Dakar, Senegal. Ocean transit from JNPT to Dakar takes approximately 18-22 days. From Dakar, goods travel overland by truck or the Dakar-Bamako railway corridor — approximately 1,200km, taking 4-6 days. Dakar is the most established port for Malian imports, with well-developed customs transit procedures for landlocked Sahelian countries.",
                  ],
                  [
                    "Alternative route: via Abidjan (Cote d'Ivoire)",
                    "An alternative route is JNPT to Abidjan, Cote d'Ivoire — approximately 20-24 days ocean transit — followed by overland transit from Abidjan to Bamako via the Abidjan-Bamako highway corridor, approximately 1,100km, taking 3-5 days. This route may offer more competitive freight rates depending on carrier availability and is increasingly used by Malian importers.",
                  ],
                  [
                    "Packaging for Sahelian climate transit",
                    "All Mali-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants and moisture barriers, tamper-evident sealing, and batch identification. Packaging accounts for Mali's hot Sahelian climate and the extended overland transit from port to destination. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-Mali corridor.",
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
              MALI EXPORT Q&amp;A
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
              START YOUR MALI EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Mali import
              requirements — Halal documentation, Nigella Sativa
              formulations, MOQ, pricing, and shipping via Dakar or
              Abidjan to Bamako. We respond within 48&nbsp;hours.
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
                href="https://wa.me/917497841608?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Mali.%20Please%20share%20details."
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

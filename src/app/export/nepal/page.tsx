import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyNepal = [
  {
    title: "India-Nepal Free Trade Agreement",
    desc: "India and Nepal have a bilateral Free Trade Agreement that enables zero or minimal duty on pharmaceutical and nutraceutical products. This means Nepalese importers can source softgel capsules from India without the tariff burden that adds 15-30% to imports from other countries. The FTA makes Indian manufacturers the most cost-effective supply option for Nepalese brands and distributors.",
  },
  {
    title: "Open border & shared trade infrastructure",
    desc: "The India-Nepal border is one of the most open international borders in the world — Indian and Nepalese nationals cross freely, and trade infrastructure at key border points like Birgunj and Biratnagar is well-established for pharmaceutical cargo. This eliminates the shipping complexity and transit uncertainty that comes with exporting to distant markets.",
  },
  {
    title: "No regulatory barriers",
    desc: "Nepal's Department of Drug Administration (DDA) recognizes Indian pharmaceutical manufacturing standards, and Indian GMP/WHO-GMP certifications are accepted without requiring separate facility audits in most cases. Products registered and freely sold in India face a streamlined import registration process in Nepal compared to products from non-SAARC countries.",
  },
  {
    title: "Shared language capability",
    desc: "Hindi is widely understood across Nepal's Terai belt and urban centers, and our export documentation team communicates in both Hindi and English. This removes the language barrier that Indian manufacturers face when dealing with buyers in Africa, Latin America, or Southeast Asia — making business communication, order negotiation, and documentation review straightforward.",
  },
  {
    title: "1-3 day transit from Haryana",
    desc: "Our Jind, Haryana facility is approximately 800-900km from the Nepal border crossings at Birgunj and Biratnagar. Road transport delivers consignments in 1-3 days — faster than domestic delivery to many south Indian cities. This proximity means lower shipping costs, faster order fulfillment, and the ability to place smaller, more frequent orders rather than committing to large container loads.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Nepal's mountainous geography means large populations live at high altitudes with cold winters and extended indoor periods. Vitamin D deficiency is a documented public health concern across Nepal — particularly in the hill and mountain districts. High-dose Vitamin D3 60,000 IU softgel capsules are prescribed weekly by Nepalese physicians and represent one of the highest-volume nutraceutical imports from India.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Non-communicable diseases — particularly cardiovascular conditions — are rising in Nepal's urban populations. Omega-3 softgel capsules are increasingly prescribed by Nepalese cardiologists and recommended in pharmacy retail for heart health. The combination with Vitamin E provides antioxidant support alongside cardiovascular benefits.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations address Nepal's significant burden of osteoporosis and musculoskeletal conditions, particularly in women over 35 and elderly populations. The combination of active Vitamin D (Calcitriol), Calcium Citrate for absorption, and Vitamin K2-7 for calcium metabolism is a standard prescription format in Nepalese orthopedic and women's health practice.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Micronutrient deficiency remains prevalent across Nepal, particularly in rural areas and among children and women of reproductive age. Multivitamin softgel capsules provide a convenient, stable dosage form that addresses multiple deficiencies — iron, zinc, B-complex, vitamins A, C, D, and E — in a single daily dose. These are stocked in both pharmacy retail and institutional health programs.",
  },
  {
    name: "Ginseng + Astaxanthin Multivitamin",
    relevance: "Energy and vitality formulations are growing in demand in Nepal's urban pharmacy market — Kathmandu, Pokhara, and Biratnagar. Ginseng-based softgel capsules with Astaxanthin antioxidant are positioned as premium wellness supplements, targeting working professionals and health-conscious consumers in Nepal's expanding middle class.",
  },
  {
    name: "Glutathione + Alpha Lipoic Acid + Grape Seed Extract",
    relevance: "Antioxidant and skin health formulations are seeing increased demand in Nepal's urban beauty and wellness market. Glutathione softgel capsules are positioned for skin brightening and antioxidant protection — a growing consumer health segment in Kathmandu Valley's pharmacy and beauty retail channels.",
  },
];

const shippingSteps = [
  [
    "Birgunj border crossing (primary route)",
    "Birgunj is Nepal's largest trade gateway, connected to India via Raxaul (Bihar). From our Jind, Haryana facility, road freight reaches Birgunj in approximately 18-24 hours via the Delhi-Varanasi-Raxaul route. Birgunj has established customs infrastructure for pharmaceutical cargo, and the Integrated Check Post (ICP) at Raxaul-Birgunj is one of the most modern trade facilitation points on the India-Nepal border.",
  ],
  [
    "Biratnagar border crossing (eastern route)",
    "For distribution to eastern Nepal — Biratnagar, Dharan, Itahari — the Jogbani-Biratnagar crossing provides direct road access. Transit from Haryana to Biratnagar is approximately 24-36 hours via road. This route is preferred for orders destined for eastern Nepal's pharmaceutical wholesale markets.",
  ],
  [
    "Bhairahawa/Sunauli crossing (western route)",
    "For distribution to Lumbini Province and western Nepal, the Sunauli-Bhairahawa border point connects to Butwal and beyond. This crossing is approximately 12-16 hours from Jind by road, making it the fastest route for orders serving Nepal's western markets.",
  ],
  [
    "Transit packaging & documentation",
    "All Nepal-bound shipments are packed in pharmaceutical-grade transit packaging with desiccants, tamper-evident sealing, and proper labeling in English. Documentation includes commercial invoice, packing list with batch numbers, Certificate of Analysis, FSSAI license copy, and any SAARC preferential origin certificates required for duty exemption under the FTA.",
  ],
];

const documentation = [
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Standard trade documents with product descriptions, HS codes, batch numbers, quantities, and FOB/CIF pricing. Required by Nepal Customs for duty assessment — which is zero or minimal under the India-Nepal FTA for qualifying pharmaceutical products.",
  },
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-wise quality certificate covering identity, assay, dissolution, microbial limits, and physical parameters. Nepalese importers require COA for product verification and submission to the Department of Drug Administration (DDA) if required.",
  },
  {
    doc: "FSSAI License & GMP Certificate",
    desc: "Indian regulatory license and manufacturing quality certificate — recognized by Nepal's DDA as baseline evidence of manufacturing standards compliance. WHO-GMP certificate is also provided, which carries additional weight for institutional and hospital supply contracts in Nepal.",
  },
  {
    doc: "Certificate of Origin (SAARC Preferential)",
    desc: "For duty-free or preferential-duty treatment under the India-Nepal Free Trade Agreement and SAFTA (South Asian Free Trade Area), a SAARC Certificate of Origin is issued confirming Indian manufacture. This document is critical for importers to claim FTA tariff benefits at Nepal Customs.",
  },
  {
    doc: "Free Sale Certificate",
    desc: "Government-issued certificate confirming that the products are freely manufactured and sold in India. Required by Nepal's DDA for import registration of pharmaceutical and nutraceutical products not previously registered in Nepal.",
  },
];

const faqs = [
  {
    q: "Can Admetus export softgel capsules to Nepal?",
    a: "Yes. Admetus Lifesciences regularly supplies softgel capsules to the Nepalese market. Nepal is one of India's closest pharmaceutical trade partners — the India-Nepal Free Trade Agreement, open border, and shared regulatory recognition make India-to-Nepal pharmaceutical trade straightforward. We provide complete export documentation, SAARC preferential origin certificates for duty benefits, and road transport delivery within 1-3 days from our Haryana facility.",
  },
  {
    q: "What duty or tariff applies to softgel imports from India to Nepal?",
    a: "Under the India-Nepal Free Trade Agreement and SAFTA (South Asian Free Trade Area), pharmaceutical and nutraceutical products manufactured in India qualify for zero or significantly reduced customs duty when imported into Nepal. To claim this preferential treatment, the importer needs a SAARC Certificate of Origin — which we provide as part of our standard export documentation package.",
  },
  {
    q: "What is the MOQ for Nepal export orders?",
    a: "MOQs are flexible and depend on the formulation and packaging format. Because Nepal is a road-transport market (no sea freight container minimums), we can support smaller, more frequent orders compared to distant export markets. This is particularly useful for Nepalese distributors who want to maintain lean inventory with fast replenishment. Specific MOQ is confirmed within 48 hours at team@admetuslifesciences.com.",
  },
  {
    q: "How long does shipping take from India to Nepal?",
    a: "Road transport from our Jind, Haryana facility to Nepal border crossings takes 1-3 days depending on the crossing point — Birgunj (18-24 hours), Bhairahawa/Sunauli (12-16 hours), or Biratnagar (24-36 hours). After customs clearance at the border, onward delivery within Nepal adds 1-2 days depending on the destination city. Total transit from order dispatch to delivery is typically 3-5 days.",
  },
  {
    q: "What documentation do you provide for Nepal import clearance?",
    a: "Our standard Nepal export documentation package includes: Commercial Invoice with HS codes, Packing List with batch numbers, Certificate of Analysis (COA) per batch, FSSAI License copy, GMP and WHO-GMP certificates, Free Sale Certificate, SAARC Certificate of Origin for FTA duty benefits, and ingredient declaration. All documents are prepared in English and formatted for Nepal Customs and DDA requirements.",
  },
  {
    q: "Which softgel products are most in demand in Nepal?",
    a: "The highest-demand softgel formulations in Nepal are: Vitamin D3 60,000 IU (widespread deficiency due to cold climate and altitude), Omega-3 for cardiovascular health, Calcitriol + Calcium + K2-7 for bone health, and Multivitamin capsules for micronutrient supplementation. We also see growing demand for Ginseng-based energy supplements and Glutathione antioxidant capsules in urban Nepalese pharmacy markets. All these formulations are in our standard production line.",
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
      name: "Nepal",
      item: "https://www.admetuslifesciences.com/export/nepal/",
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

export default function NepalPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Nepal — WHO-GMP certified, FSSAI compliant"
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
            India &rarr; Nepal
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            EXPORTER INDIA
            <br />
            FOR&nbsp;NEPAL
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — delivered
            to Nepal via road transport in 1-3 days. Zero/low duty under the
            India-Nepal Free Trade&nbsp;Agreement.
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
                INDIA-NEPAL PHARMACEUTICAL TRADE&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Nepal is one of India&apos;s most important pharmaceutical
                export destinations. The two countries share an open border,
                deep cultural ties, and a bilateral Free Trade Agreement that
                makes India the natural and most cost-effective pharmaceutical
                supply partner for Nepalese brands, distributors, and health
                institutions.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Nepal relies heavily on Indian pharmaceutical imports for the
                majority of its pharmaceutical and nutraceutical needs. While
                Nepal has some domestic tablet manufacturing capacity, advanced
                dosage forms like softgel capsules are almost entirely
                imported — and India is the dominant source due to geographic
                proximity, regulatory compatibility, and trade agreement
                benefits.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The India-Nepal Free Trade Agreement — along with SAFTA (South
                Asian Free Trade Area) provisions — enables zero or minimal
                customs duty on qualifying pharmaceutical products. This tariff
                advantage, combined with 1-3 day road transport from Indian
                manufacturing hubs, makes India-to-Nepal pharmaceutical trade
                one of the most frictionless export corridors in South Asia.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Nepal&apos;s pharmaceutical market is growing steadily, driven
                by increasing healthcare access, government health insurance
                programs, rising consumer awareness about preventive
                supplementation, and an expanding network of pharmacy retail
                outlets across urban and semi-urban centers including
                Kathmandu, Pokhara, Biratnagar, Bharatpur, and Butwal.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Easy / Why Admetus */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">
              Why India-Nepal Trade Works
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY NEPALESE IMPORTERS CHOOSE&nbsp;INDIA
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyNepal.map((adv, i) => (
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
              SOFTGEL FORMULATIONS FOR THE NEPALESE&nbsp;MARKET
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
              Our full portfolio includes 10+ standard softgel formulations with
              custom formulation development on request. See our{" "}
              <Link
                href="/products/"
                className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline"
              >
                complete product catalog
              </Link>{" "}
              for all available formulations.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Shipping Routes */}
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
                  HARYANA TO NEPAL DELIVERY&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  Nepal&apos;s proximity to our Haryana facility means road
                  transport delivery in 1-3 days — faster than many domestic
                  Indian deliveries. Three border crossings serve different
                  regions of&nbsp;Nepal.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {shippingSteps.map(([title, desc], i) => (
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

      {/* Documentation */}
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
              DOCUMENTATION FOR NEPAL&nbsp;IMPORTS
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {documentation.map((item, i) => (
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

      {/* FAQ */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">
              Frequently Asked
            </span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              NEPAL EXPORT Q&amp;A
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
              <Link href="/export/afghanistan/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Afghanistan
              </Link>
              <Link href="/export/bangladesh/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Bangladesh
              </Link>
              <Link href="/export/myanmar/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Myanmar
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              START YOUR NEPAL EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Nepal import requirements
              — formulation selection, MOQ, pricing, FTA documentation, and
              delivery scheduling. We respond within 48&nbsp;hours.
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
                href="https://wa.me/917497841608?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Nepal.%20Please%20share%20details."
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

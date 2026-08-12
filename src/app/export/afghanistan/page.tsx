import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "Halal certified production",
    desc: "Afghanistan is a Muslim-majority country where Halal certification is not optional — it is expected. Admetus Lifesciences holds Halal certification for its entire softgel manufacturing facility, covering gelatin sourcing, production processes, and finished products. Every batch ships with a Halal certificate that Afghan importers can present to health authorities and retail partners.",
  },
  {
    title: "WHO-GMP accepted by Afghan health authorities",
    desc: "Afghanistan's health regulatory framework recognizes WHO-GMP certification as a baseline standard for imported pharmaceuticals and nutraceuticals. Admetus holds WHO-GMP certification for its Jind, Haryana facility — meaning our products meet the manufacturing quality standards accepted by Afghan import authorities without requiring additional facility audits in most cases.",
  },
  {
    title: "Flexible MOQ for new market entrants",
    desc: "Afghanistan's pharmaceutical distribution landscape is fragmented, with many small-to-mid-size importers operating across Kabul, Mazar-i-Sharif, Herat, and Kandahar. We offer flexible minimum order quantities that allow new Afghan importers to start with manageable volumes, test market demand, and scale orders as their distribution expands.",
  },
  {
    title: "Full export documentation support",
    desc: "We handle the complete documentation package required for Afghan import clearance — Certificate of Analysis (COA), Free Sale Certificate, Halal certificate, ingredient declarations, packing lists, and commercial invoices. Our export team is experienced in preparing paperwork that meets the requirements of Afghan customs and health authorities.",
  },
  {
    title: "Competitive pricing for emerging markets",
    desc: "Afghanistan is a price-sensitive pharmaceutical market. Our Haryana facility operates with lower overhead than manufacturers in Mumbai or Hyderabad, and our direct-to-importer model eliminates middleman markups. We provide transparent, MOQ-based pricing that allows Afghan distributors to maintain competitive retail margins.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Vitamin D deficiency is widespread in Afghanistan — studies indicate prevalence rates above 70% in Afghan women due to limited sun exposure (full-body covering) and indoor lifestyles in urban areas. High-dose Vitamin D3 60,000 IU softgel capsules are prescribed as weekly supplementation by Afghan physicians and are among the highest-demand nutraceutical imports.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Cardiovascular disease is a growing health concern in Afghanistan, exacerbated by high-fat traditional diets and limited access to preventive healthcare. Omega-3 softgel capsules are increasingly recommended by Afghan healthcare providers for cardiac health management and cholesterol control.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Malnutrition and micronutrient deficiency remain significant public health challenges in Afghanistan. Multivitamin softgels address multiple deficiencies in a single dosage form — iron, zinc, B-complex, vitamins A, C, D, and E — making them a practical supplementation choice for both urban pharmacies and rural health programs.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations are in high demand in Afghanistan, particularly for women's health. The combination of Calcitriol (active Vitamin D), Calcium Citrate, and Vitamin K2-7 supports bone density maintenance and is commonly prescribed for osteoporosis prevention in Afghan women aged 35 and above.",
  },
  {
    name: "Nigella Sativa (Kalonji) Oil Softgel Capsules",
    relevance: "Nigella Sativa — known as Kalonji or Black Seed — holds deep cultural and medicinal significance across Muslim-majority countries including Afghanistan. It is referenced in traditional Islamic medicine (Tibb-e-Nabawi) and is widely used for immune support, digestive health, and general wellness. Softgel capsules offer a standardized, convenient dosage form compared to loose oil, making them popular in Afghan pharmacies and health stores.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Issued per batch — covers identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Afghan importers use the COA for customs clearance and quality verification.",
  },
  {
    doc: "Free Sale Certificate",
    desc: "Government-issued certificate confirming that the product is freely sold in India. Required by Afghan health authorities for import registration of pharmaceutical and nutraceutical products.",
  },
  {
    doc: "Halal Certificate",
    desc: "Facility-level Halal certification covering raw materials, manufacturing processes, and finished products. Essential for all pharmaceutical imports into Afghanistan given the country's regulatory and cultural requirements.",
  },
  {
    doc: "Packing List & Commercial Invoice",
    desc: "Detailed packing list with batch numbers, quantities, net/gross weights, and HS codes. Commercial invoice with FOB/CIF pricing as required by Afghan customs for duty assessment.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. Accepted by Afghan health authorities as evidence of manufacturing quality standards compliance.",
  },
  {
    doc: "Ingredient Declaration",
    desc: "Full composition statement listing active ingredients, excipients, gelatin source, and shell composition. Required for product registration and labeling compliance in Afghanistan.",
  },
];

const faqs = [
  {
    q: "Can Admetus export softgel capsules to Afghanistan?",
    a: "Yes. Admetus Lifesciences is an export-ready softgel capsule manufacturer based in Jind, Haryana, India. We hold WHO-GMP and Halal certifications — both recognized by Afghan health authorities. We provide complete export documentation including COA, Free Sale Certificate, Halal certificate, and commercial invoices. Our facility has the capacity and regulatory readiness to serve Afghan importers and distributors.",
  },
  {
    q: "Are your products Halal certified for Afghanistan?",
    a: "Yes. Our entire manufacturing facility — including gelatin sourcing, encapsulation processes, and finished products — is Halal certified. Every export shipment includes a Halal certificate that Afghan importers can present to customs authorities and retail partners. This is a standard inclusion in our Afghanistan export documentation package, not an add-on service.",
  },
  {
    q: "What is the MOQ for Afghanistan export orders?",
    a: "MOQs are flexible and depend on the specific formulation, packaging format, and order configuration. We understand that Afghanistan's import market includes many small-to-mid-size distributors, so we support manageable initial order volumes. Pilot orders are available for new Afghan importers to test market demand before committing to larger volumes. Specific MOQ for your order is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "What documentation do you provide for Afghan import clearance?",
    a: "We provide the complete documentation package: Certificate of Analysis (COA) per batch, Free Sale Certificate, Halal certificate, WHO-GMP certificate, ingredient declaration, packing list with batch numbers and HS codes, and commercial invoice. Our export team prepares all documents to meet Afghan customs and health authority requirements. Additional certificates or attestations are arranged on request.",
  },
  {
    q: "What shipping routes are used for India to Afghanistan delivery?",
    a: "Two primary shipping routes are used for India-Afghanistan trade. Sea freight: JNPT (Mumbai) or Mundra (Gujarat) to Chabahar Port in Iran, then overland to Afghanistan — this is the India-Afghanistan trade corridor developed under the Chabahar agreement. Alternatively, sea freight to Jebel Ali (Dubai), then overland via Pakistan or air-transhipped to Kabul. Air freight: Direct cargo flights from Delhi to Kabul via the India-Afghanistan air freight corridor. Transit times vary — sea/land routes take 15-25 days, air freight takes 3-5 days.",
  },
  {
    q: "What softgel products are in highest demand in Afghanistan?",
    a: "Based on Afghanistan's disease burden and market demand, the highest-demand softgel formulations are: Vitamin D3 60,000 IU (widespread deficiency, especially in women), Omega-3 for cardiovascular health, Multivitamins for micronutrient deficiency, Calcitriol + Calcium for bone health, and Nigella Sativa (Kalonji) oil capsules which have strong demand in Muslim-majority markets due to their significance in traditional Islamic medicine. All five formulations are in our standard production line.",
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
      name: "Afghanistan",
      item: "https://www.admetuslifesciences.com/export/afghanistan/",
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

export default function AfghanistanPage() {
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
          alt="Golden softgel capsules manufactured by Admetus Lifesciences for export to Afghanistan — WHO-GMP and Halal certified"
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
            India &rarr; Afghanistan
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;AFGHANISTAN
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP and Halal certified softgel capsules from Haryana, India —
            serving Afghan importers and distributors with full export
            documentation, competitive pricing, and flexible&nbsp;MOQs.
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
                AFGHANISTAN&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Afghanistan spends approximately $400 million per year on
                pharmaceutical products, with roughly 85% of that demand met
                through imports. The country has limited domestic pharmaceutical
                manufacturing capacity — most facilities handle only basic
                tablet production and repackaging. Softgel capsules, injectable
                formulations, and advanced dosage forms are almost entirely
                imported.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                India is now exporting approximately $100 million in
                pharmaceutical products to Afghanistan annually, and this figure
                is growing rapidly. The shift is structural: Pakistan — which was
                historically Afghanistan&apos;s primary pharmaceutical supplier —
                has faced prolonged border closures and trade disruptions. As a
                result, India is replacing Pakistan as Afghanistan&apos;s
                dominant pharma supplier across multiple product categories
                including nutraceuticals, generics, and branded
                formulations.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The nutraceutical segment is growing fastest. India&apos;s
                nutraceutical exports to Afghanistan grew 1,233% year-over-year
                in recent trade data — driven by demand for Vitamin D3, Omega-3,
                multivitamins, and traditional remedies like Nigella Sativa
                (Kalonji). Afghan importers are actively seeking Indian
                manufacturing partners who can supply quality-certified products
                with proper Halal documentation.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The current Afghan administration has actively sought Indian
                pharmaceutical partnerships, including invitations to Indian air
                freight companies to operate the Delhi-Kabul air cargo corridor
                for pharmaceutical and essential goods shipments. This
                trade infrastructure creates a direct supply route for Indian
                nutraceutical manufacturers to serve the Afghan market.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Admetus for Afghanistan */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">
              Why Admetus for Afghanistan
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY AFGHAN IMPORTERS CHOOSE&nbsp;US
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

      {/* Product Range for Afghanistan */}
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
              SOFTGEL FORMULATIONS FOR THE AFGHAN&nbsp;MARKET
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

          <SectionReveal delay={0.2}>
            <p className="mt-8 body-text text-[var(--text-cream)] max-w-[68ch]">
              Beyond these five high-demand formulations, Admetus manufactures
              10+ standard softgel products and develops custom formulations on
              request. See our full{" "}
              <Link
                href="/products/"
                className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline"
              >
                product catalog
              </Link>{" "}
              for the complete range.
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
              DOCUMENTATION FOR AFGHAN&nbsp;IMPORTS
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

      {/* Shipping Routes */}
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
                  INDIA TO AFGHANISTAN SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  Afghanistan is a landlocked country, which means all
                  international shipments arrive via neighboring country ports
                  or air freight. Two primary trade corridors connect Indian
                  manufacturers to Afghan&nbsp;importers.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Chabahar Port route (Iran)",
                    "Sea freight from JNPT (Mumbai) or Mundra (Gujarat) to Chabahar Port in southeastern Iran, then overland via the Zaranj-Delaram highway to Afghan border cities. This is the India-Afghanistan trade corridor developed under the bilateral Chabahar agreement, specifically designed to bypass Pakistan. Transit time: 15-20 days sea + 3-5 days overland.",
                  ],
                  [
                    "Jebel Ali route (Dubai)",
                    "Sea freight from JNPT or Mundra to Jebel Ali (Dubai), then either air-transhipped to Kabul or overland via Pakistan (when border crossings are operational). The Dubai route is well-established for pharmaceutical cargo with extensive cold-chain and warehousing infrastructure at Jebel Ali Free Zone. Transit time: 10-15 days sea + 5-7 days onward.",
                  ],
                  [
                    "Delhi-Kabul air freight corridor",
                    "Direct air cargo from Indira Gandhi International Airport (Delhi) to Kabul International Airport. The air freight corridor has been operational for pharmaceutical and essential goods shipments, with Afghan authorities actively inviting Indian air freight companies to expand capacity. Transit time: 3-5 days including customs clearance. Higher per-kg cost but faster for urgent or high-value shipments.",
                  ],
                  [
                    "Packaging for transit",
                    "All Afghanistan-bound shipments are packed with pharmaceutical-grade transit packaging — desiccants, temperature indicators (for heat-sensitive products), tamper-evident sealing, and outer cartons rated for multi-modal transport. We coordinate with the buyer's preferred freight forwarder or recommend trusted logistics partners experienced in India-Afghanistan pharmaceutical trade.",
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
              AFGHANISTAN EXPORT Q&amp;A
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
              <Link href="/export/nepal/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Nepal
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
              START YOUR AFGHANISTAN EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Afghanistan import
              requirements — formulation selection, MOQ, pricing, and
              documentation. We respond within 48&nbsp;hours.
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
                href="https://wa.me/919729977795?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Afghanistan.%20Please%20share%20details."
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

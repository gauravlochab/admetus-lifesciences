import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "Halal certification — essential for Sudan's Muslim-majority market",
    desc: "Sudan is a Muslim-majority country — approximately 91% of the population follows Islam. Halal certification is not merely a preference but a fundamental market requirement for pharmaceutical and nutritional products. Admetus holds Halal certification for its manufacturing facility and product range, ensuring all softgel formulations meet Islamic dietary and manufacturing standards. This certification is non-negotiable for effective distribution across Sudan's pharmacy, hospital, and retail channels.",
  },
  {
    title: "WHO-GMP certification for NMPB compliance",
    desc: "The National Medicines & Poisons Board (NMPB) of Sudan requires evidence of GMP compliance from foreign pharmaceutical manufacturers as part of the product registration process. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which aligns with NMPB's manufacturing quality requirements and facilitates the regulatory dossier review. WHO-GMP status is a recognized standard in Sudan's pharmaceutical import framework.",
  },
  {
    title: "Established India-Sudan pharmaceutical trade relationship",
    desc: "India is already a significant pharmaceutical exporter to Sudan, with an established trade corridor and recognized quality standards. Indian pharmaceutical products are well-accepted in the Sudanese market, and Indian manufacturers with WHO-GMP certification have a recognized pathway through NMPB's regulatory framework. Admetus builds on this established India-Sudan pharmaceutical trade relationship to offer Sudanese importers reliable, quality-certified softgel supply.",
  },
  {
    title: "Competitive pricing for an import-dependent market",
    desc: "Sudan's pharmaceutical market is heavily import-dependent with limited domestic manufacturing capacity. Price competitiveness is critical — Sudan's economic challenges and currency pressures make landed cost a primary determinant of commercial viability. Our Haryana facility operates with lower overhead than manufacturers in Mumbai, Hyderabad, or Ahmedabad, enabling the most competitive pricing possible for the Sudanese market while maintaining WHO-GMP quality standards.",
  },
  {
    title: "Fast Red Sea shipping route — 7-10 days to Port Sudan",
    desc: "Sudan's Port Sudan, located on the Red Sea, offers one of the fastest maritime routes from India to any African country. Sea freight from JNPT (Mumbai) to Port Sudan takes approximately 7-10 days — significantly faster than the 14-22 day transit times to East or Southern African ports. This fast shipping route reduces lead times, improves supply chain responsiveness, and minimizes pharmaceutical exposure to extended ocean transit conditions.",
  },
];

const nmpbSteps = [
  [
    "Appoint a local licensed pharmaceutical importer",
    "NMPB Sudan requires all imported pharmaceutical and health products to be represented by a locally licensed pharmaceutical importer or authorized agent. The Sudanese entity must hold appropriate licenses from NMPB and the Federal Ministry of Health, and is responsible for the product registration application, NMPB correspondence, and post-market obligations. This local partnership is mandatory before any product registration can proceed. Importers are typically based in Khartoum or Port Sudan.",
  ],
  [
    "Manufacturer GMP compliance verification",
    "NMPB evaluates GMP compliance of foreign manufacturing facilities as part of the product registration process. This typically involves review of GMP documentation — including the WHO-GMP certificate, facility documentation, quality system overview, and manufacturing process descriptions. Our WHO-GMP certification provides strong evidence of manufacturing quality and significantly facilitates NMPB's assessment process.",
  ],
  [
    "Submit product registration dossier",
    "NMPB requires a product registration dossier that includes manufacturing and quality information, product specifications, stability data, labeling samples (Arabic-language labeling may be required), and supporting certificates. Admetus prepares the complete quality documentation including manufacturing process validation, analytical methods, stability data under ICH Zone IVa conditions (hot and dry — relevant for Sudan's climate), and Certificate of Analysis templates.",
  ],
  [
    "Provide Certificate of Pharmaceutical Product (WHO format)",
    "NMPB requires a Certificate of Pharmaceutical Product (CPP) in WHO format issued by the Central Drugs Standard Control Organisation (CDSCO) of India. The CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in the country of origin. Admetus coordinates the CPP application with CDSCO and provides the authenticated certificate as part of the registration package.",
  ],
  [
    "Halal certification verification",
    "Given Sudan's Muslim-majority population (91%), NMPB and Sudanese importers place significant emphasis on Halal certification. The Halal certificate must cover both the manufacturing facility and the specific product formulations — confirming that no haram (prohibited) ingredients are used and that manufacturing processes comply with Islamic standards. Admetus provides comprehensive Halal certification documentation as part of every registration package for Sudan.",
  ],
  [
    "Import permit and customs clearance",
    "Once product registration is approved, each import shipment requires an import permit from NMPB and customs clearance through Sudan Customs at Port Sudan. The Sudanese importer's clearing agent processes the import documentation with the export paperwork we provide — commercial invoice, packing list, COA, Halal certificate, and NMPB registration evidence. Port clearance at Port Sudan typically takes 5-10 business days.",
  ],
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Vitamin D deficiency is highly prevalent in Sudan despite the country's abundant sunshine — cultural practices of covering skin (particularly among women), limited dietary intake, and urban lifestyles contribute to widespread deficiency. Sudanese healthcare providers increasingly prescribe high-dose Vitamin D3 for deficiency treatment, immune support, and bone health. The 60,000 IU softgel format is preferred for therapeutic loading doses, with weekly dosing protocols becoming standard in Sudanese clinical practice.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Non-communicable diseases — particularly cardiovascular disease, hypertension, and diabetes — are a significant and growing health burden in Sudan. The epidemiological transition from infectious to non-communicable diseases is well underway, particularly in urban centres like Khartoum, Omdurman, and Port Sudan. Omega-3 softgel capsules are recommended by Sudanese healthcare providers for cardiovascular protection and are available through pharmacy channels in major cities.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Micronutrient deficiency is a critical public health challenge in Sudan — iron, zinc, Vitamin A, and folate deficiencies are widespread, particularly among women of reproductive age and children under five. The ongoing conflict and displacement have exacerbated nutritional deficiencies across the population. Multivitamin softgel capsules serve both the institutional market (government health programmes, WHO and UNICEF nutrition interventions, NGO-funded programmes) and the private pharmacy retail channel in Khartoum and other major urban centres.",
  },
  {
    name: "Antioxidant Formulations (Lycopene + Grape Seed Extract)",
    relevance: "Preventive health awareness is growing among Sudan's urban educated population, particularly in Khartoum's expanding middle class. Antioxidant formulations targeting cardiovascular protection, immune support, and prostate health (Lycopene) are gaining traction in urban pharmacy retail. Sudan's young population (median age approximately 19 years) and rising health awareness represent a developing market for preventive nutritional supplements.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations address a critical need in Sudan — calcium deficiency is widespread due to limited dairy consumption and dietary diversity. The Calcitriol-Calcium-K2 combination is particularly relevant for pregnant and lactating women (a large demographic in Sudan's young, high-fertility population), post-menopausal women, and elderly patients. Sudanese orthopedic specialists in Khartoum's medical facilities are increasingly prescribing advanced bone health formulations.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by NMPB for product registration and by Sudanese importers for each shipment's customs clearance at Port Sudan.",
  },
  {
    doc: "Certificate of Pharmaceutical Product (WHO Format)",
    desc: "Issued by India's CDSCO in WHO format, the CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in India. NMPB Sudan requires a WHO-format CPP as part of the product registration dossier. Admetus coordinates the CPP application with CDSCO.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. NMPB requires GMP compliance evidence as a baseline for product registration — this certificate is a key document in the NMPB registration dossier and demonstrates manufacturing quality standards accepted in Sudan's regulatory framework.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific product formulations. This is a critical document for Sudan's Muslim-majority market (91% Muslim population). The Halal certificate confirms that no haram ingredients are used and manufacturing processes comply with Islamic standards. Required by NMPB, importers, and retailers across Sudan.",
  },
  {
    doc: "Quality Dossier (Manufacturing & Stability Data)",
    desc: "Comprehensive quality documentation including manufacturing process description, validation data, analytical method details, stability study results under ICH Zone IVa conditions (hot — relevant for Sudan's hot, arid climate), and product specifications. Admetus prepares this documentation for the Sudanese importer to include in their NMPB registration submission.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF Port Sudan pricing, HS codes, tariff classifications, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by Sudan Customs for import duty assessment and clearance at Port Sudan. Arabic-language documentation support available where required.",
  },
];

const faqs = [
  {
    q: "What is the NMPB registration process for importing softgels to Sudan?",
    a: "The National Medicines & Poisons Board (NMPB) is Sudan's pharmaceutical regulatory authority. All imported pharmaceutical and health products must be registered with NMPB before sale in Sudan. The process involves: appointing a local licensed pharmaceutical importer (typically based in Khartoum or Port Sudan), submitting a product registration dossier with quality and manufacturing data, providing a WHO-GMP certificate and Certificate of Pharmaceutical Product (WHO format) from CDSCO India, providing Halal certification (critical for Sudan's 91% Muslim population), and submitting product samples for quality testing if required. Registration timelines vary but are typically 6-12 months. Admetus provides the complete manufacturer documentation package for NMPB registration.",
  },
  {
    q: "Why is Halal certification critical for the Sudanese market?",
    a: "Sudan is a Muslim-majority country — approximately 91% of the population follows Islam. Halal certification is a fundamental market requirement, not merely a preference. Sudanese importers, pharmacy chains, hospitals, and consumers require assurance that pharmaceutical and nutritional products comply with Islamic dietary and manufacturing standards. Without Halal certification, effective distribution in Sudan is extremely limited. Admetus holds Halal certification for its manufacturing facility and all softgel formulations, covering both ingredient sourcing and manufacturing processes.",
  },
  {
    q: "What is the MOQ for Sudan export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. For initial orders — particularly those tied to NMPB registration and market testing — we offer pilot volumes. Once NMPB registration is secured and market demand is established, we support full 20ft and 40ft container loads for ongoing supply. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How fast is shipping from India to Sudan?",
    a: "The India-Sudan shipping route via the Red Sea is one of the fastest India-to-Africa corridors. Sea freight from JNPT (Mumbai) to Port Sudan takes approximately 7-10 days ocean transit time — significantly faster than the 14-22 day transit to East or Southern African ports. Port Sudan is located on the Red Sea coast, providing direct maritime access without the need for transhipment. After port arrival, customs clearance at Port Sudan typically takes 5-10 business days. Total transit from factory dispatch to warehouse delivery in Khartoum is typically 18-25 days.",
  },
  {
    q: "What is the current state of Sudan's pharmaceutical market?",
    a: "Sudan's pharmaceutical market is import-dependent with limited domestic manufacturing. The country has a population of 45 million with significant unmet healthcare needs. The ongoing post-conflict situation has disrupted some supply chains but has also increased demand for essential medicines and nutritional supplements — particularly through international humanitarian programmes (WHO, UNICEF, ICRC, MSF). India is already an established pharmaceutical supplier to Sudan, and Indian WHO-GMP certified products are recognized and accepted in the market. The humanitarian and institutional procurement channel is significant alongside private-sector pharmacy distribution in Khartoum, Omdurman, and Port Sudan.",
  },
  {
    q: "Does Admetus provide Arabic-language documentation for Sudan?",
    a: "Admetus provides support for Arabic-language product labeling and documentation as required by NMPB and the Sudanese market. Arabic is the official language of Sudan, and product labels, patient information leaflets, and certain regulatory documents may require Arabic translation. We work with qualified translators to provide Arabic-language documentation that meets NMPB requirements and ensures market readiness. All regulatory and commercial documentation can be prepared in both English and Arabic.",
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
      name: "Sudan",
      item: "https://www.admetuslifesciences.com/export/sudan/",
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

export default function SudanPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Sudan — WHO-GMP and Halal certified, NMPB documentation ready"
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
            India &rarr; Sudan
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;SUDAN
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP and Halal certified softgel capsules from Haryana, India —
            serving Sudanese importers with NMPB-ready documentation, fast Red
            Sea shipping (7-10 days), competitive pricing, and flexible
            order&nbsp;volumes.
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
                SUDAN&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Sudan is a Muslim-majority country with a population of 45
                million and an import-dependent pharmaceutical market. With
                approximately 91% of the population following Islam, Halal
                certification is a fundamental requirement — not a preference —
                for any pharmaceutical or nutritional product entering the
                Sudanese market. India is already an established pharmaceutical
                supplier to Sudan, with recognized quality standards and an
                existing trade corridor that Indian manufacturers can leverage.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Sudan&apos;s healthcare landscape is shaped by both its disease
                burden and its post-conflict recovery trajectory. The country
                faces significant health challenges — malaria, dengue,
                tuberculosis, and other infectious diseases remain prevalent.
                Simultaneously, non-communicable diseases including
                cardiovascular disease, diabetes, and hypertension are rising in
                urban centres like Khartoum, Omdurman, and Port Sudan. Chronic
                malnutrition and micronutrient deficiencies are widespread,
                particularly among women, children, and displaced populations.
                This complex health profile creates sustained demand for both
                essential medicines and nutritional supplements.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The National Medicines &amp; Poisons Board (NMPB) regulates all
                pharmaceutical and health product imports into Sudan. The
                registration process requires a local licensed importer,
                product registration dossier with quality data, WHO-GMP
                certificate verification, Certificate of Pharmaceutical Product
                (WHO format) from CDSCO India, and critically — Halal
                certification. NMPB&apos;s framework recognizes Indian WHO-GMP
                certified manufacturers, providing a structured pathway for
                regulatory compliance.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Sudan&apos;s strategic position on the Red Sea provides a
                significant logistics advantage for Indian exporters. Port
                Sudan — the country&apos;s primary port — is reachable from
                JNPT (Mumbai) in just 7-10 days by sea freight, making it one
                of the fastest India-to-Africa shipping routes. This fast
                transit time reduces supply chain lead times and minimizes
                product exposure to extended ocean transit conditions.
                International humanitarian organisations (WHO, UNICEF, ICRC,
                MSF) are significant purchasers in Sudan&apos;s pharmaceutical
                market and require WHO-GMP certification from manufacturers.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* NMPB Regulatory Section */}
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
                  NMPB SUDAN REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The National Medicines &amp; Poisons Board (NMPB) regulates
                  all pharmaceutical and health product imports into Sudan.
                  The registration process requires a local licensed importer,
                  product dossier, GMP verification, Halal certification, and
                  quality&nbsp;testing.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {nmpbSteps.map(([title, desc], i) => (
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

      {/* Strategic Position */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <span className="label-text text-[var(--gold)]">
                Strategic Position
              </span>
              <h2
                className="mt-3 display-section text-[var(--foreground)] mb-4"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
              >
                SUDAN — RED SEA ACCESS &amp; NORTHEAST AFRICA&nbsp;GATEWAY
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Sudan&apos;s strategic position on the Red Sea gives it one of
                the fastest maritime connections from India of any African
                country. Port Sudan is reachable from JNPT (Mumbai) in just
                7-10 days — compared to 10-14 days for East African ports and
                14-18 days for Southern African ports. This geography makes
                Sudan one of the most accessible African markets for Indian
                pharmaceutical exporters, with reduced transit times, lower
                freight costs relative to transit duration, and faster supply
                chain responsiveness.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Sudan borders seven countries — Egypt, Libya, Chad, Central
                African Republic, South Sudan, Ethiopia, and Eritrea. This
                geographic position at the intersection of North Africa, the
                Sahel, and the Horn of Africa positions Sudan as a potential
                distribution hub for pharmaceutical products serving the
                broader Northeast African region. Cross-border pharmaceutical
                trade with neighbouring countries represents a future growth
                opportunity for importers establishing supply relationships in
                Khartoum and Port Sudan.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Sudan is a member of the Common Market for Eastern and Southern
                Africa (COMESA), the Arab League, and the Organisation of
                Islamic Cooperation (OIC) — providing trade framework access
                to multiple regional and international blocs. These memberships
                facilitate cross-border trade and create opportunities for
                Halal-certified pharmaceutical products to access broader
                markets in the Arab and Islamic world from a Sudanese base.
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
              Why Admetus for Sudan
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY SUDANESE IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE SUDANESE&nbsp;MARKET
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
              Sudanese market. See our{" "}
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
              DOCUMENTATION FOR NMPB &amp;&nbsp;CUSTOMS
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
                  INDIA TO SUDAN SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-Sudan Red Sea shipping route is one of the fastest
                  India-to-Africa corridors — just 7-10 days from JNPT to
                  Port&nbsp;Sudan.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: JNPT (Mumbai)",
                    "Products are dispatched from our Jind, Haryana facility to JNPT port in Mumbai (approximately 1,200km by road, 2-3 days transit). JNPT is India's largest container port and offers services to Red Sea ports including Port Sudan. Cargo is consolidated, inspected, and cleared for export at the port's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Sea freight: India to Port Sudan via Red Sea",
                    "Container vessel services from JNPT to Port Sudan operate via the Arabian Sea and Red Sea corridor — one of the world's busiest shipping lanes. Transit time is approximately 7-10 days, making it one of the fastest India-to-Africa routes. Some services may transit via Jeddah or other Red Sea hub ports. Pharmaceutical cargo is shipped in standard dry containers with temperature monitoring for heat-sensitive products.",
                  ],
                  [
                    "Destination: Port Sudan, Red Sea Coast",
                    "Pharmaceutical imports arrive at Port Sudan — Sudan's primary port located on the Red Sea coast. Sudan Customs clearance and NMPB verification are processed at the port, typically taking 5-10 business days depending on documentation completeness. The importer's clearing agent handles port-side clearance with the documentation package we provide. From Port Sudan, cargo is transported to Khartoum (approximately 800km via the Port Sudan-Khartoum highway or railway) and distributed nationally.",
                  ],
                  [
                    "Packaging for hot climate transit",
                    "All Sudan-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants, tamper-evident sealing, and batch identification. Packaging is designed for hot, arid transit conditions — Sudan's climate requires enhanced heat protection and moisture barrier materials. The relatively short 7-10 day transit time via the Red Sea minimizes product exposure to ocean transit conditions compared to longer Africa routes.",
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
              SUDAN EXPORT Q&amp;A
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
              <Link href="/export/mali/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Mali
              </Link>
              <Link href="/export/niger/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Niger
              </Link>
              <Link href="/export/chad/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Chad
              </Link>
              <Link href="/export/mauritania/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Mauritania
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
              START YOUR SUDAN EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Sudan import
              requirements — NMPB documentation, Halal certification,
              formulation selection, MOQ, pricing, and fast Red Sea shipping
              to Port Sudan. We respond within 48&nbsp;hours.
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
                href="https://wa.me/919729977795?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Sudan.%20Please%20share%20details."
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

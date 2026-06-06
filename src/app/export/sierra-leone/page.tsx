import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification accepted by PBSL",
    desc: "PBSL (Pharmacy Board of Sierra Leone) — Sierra Leone's pharmaceutical regulatory body — recognizes WHO-GMP certification as evidence of manufacturing quality standards. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which streamlines the PBSL product registration process and demonstrates compliance with international manufacturing standards expected by humanitarian and commercial buyers in Sierra Leone.",
  },
  {
    title: "Five international certifications",
    desc: "Beyond WHO-GMP, our facility holds FSSAI, GMP, HACCP, and Halal certifications. This multi-certification profile demonstrates compliance across food safety, pharmaceutical manufacturing, hazard control, and religious dietary standards — covering the documentation requirements of PBSL and the quality expectations of international NGOs, humanitarian organizations, and commercial importers operating in Sierra Leone.",
  },
  {
    title: "Export documentation for PBSL registration",
    desc: "We provide the complete documentation package that Sierra Leonean importers need for PBSL product registration: Certificate of Analysis (COA), Free Sale Certificate, WHO-GMP certificate, ingredient declarations, stability data, and manufacturing process flow. Sierra Leone has relatively streamlined regulatory requirements compared to larger African markets, and our export team is experienced in preparing PBSL-specific documentation efficiently.",
  },
  {
    title: "Competitive pricing for humanitarian and commercial supply",
    desc: "Sierra Leone is a price-sensitive market where affordable pharmaceuticals are critical for both commercial importers and humanitarian organizations. Our Haryana facility operates with lower overhead than manufacturers in Mumbai, Hyderabad, or Ahmedabad. Our direct-to-importer model enables pricing that supports both commercial distribution margins and humanitarian procurement budgets.",
  },
  {
    title: "Flexible MOQ and pilot orders",
    desc: "We understand that Sierra Leonean importers — given the country's 8 million population and developing distribution infrastructure — need flexibility in order sizes. We support pilot-volume orders for market testing and PBSL sample submission, with the ability to scale based on demand. We also support NGO and humanitarian procurement orders with customized packaging and documentation requirements.",
  },
];

const pbslSteps = [
  [
    "Appoint a local pharmaceutical representative in Sierra Leone",
    "PBSL requires all imported pharmaceutical and nutraceutical products to be represented by a locally registered pharmaceutical entity or authorized agent in Sierra Leone. The local representative handles the registration application, communication with PBSL, and is responsible for the product in the Sierra Leonean market. This is a mandatory first step — though the process is more streamlined than in larger African markets.",
  ],
  [
    "Submit manufacturer documentation to PBSL",
    "The product registration submission to PBSL includes: manufacturer's WHO-GMP certificate, Certificate of Analysis, Free Sale Certificate, product formulation details, stability data, and manufacturing process flow. PBSL reviews the documentation for compliance with Sierra Leonean pharmaceutical standards. The regulatory process in Sierra Leone is relatively streamlined with lower barriers compared to markets like Nigeria or Ghana.",
  ],
  [
    "Product samples for quality verification",
    "PBSL may require product samples for quality verification testing. We prepare and ship the required sample quantities with full Certificate of Analysis documentation. Sierra Leone's quality control capacity is developing, and WHO-GMP certified products from established Indian manufacturers typically face an expedited review process.",
  ],
  [
    "PBSL registration and import authorization",
    "Upon successful completion of documentation review and quality verification, PBSL issues product registration and import authorization. The process from application to approval is typically faster than in larger African markets — often 3-6 months. This relatively low regulatory barrier makes Sierra Leone an accessible market for Indian pharmaceutical exporters.",
  ],
  [
    "Ongoing compliance and renewal",
    "PBSL registration is renewable and requires ongoing compliance with quality standards and reporting requirements. We support importers with updated COA documentation for each shipment, annual certificate renewals, and any additional documentation PBSL may request for post-market surveillance or regulatory updates.",
  ],
];

const products = [
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Sierra Leone has one of the highest burdens of micronutrient deficiency in West Africa — iron, zinc, Vitamin A, iodine, and folate deficiencies are widespread, particularly among women of reproductive age, children, and rural populations. Multivitamin softgel capsules address multiple deficiencies in a single dosage form and are distributed through pharmacy retail, health clinics, and humanitarian nutrition programs across the country.",
  },
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Vitamin D deficiency is documented in Sierra Leonean populations despite tropical sun exposure — dietary patterns, indoor work in Freetown's growing urban economy, and health conditions affecting vitamin D metabolism all contribute to deficiency. Vitamin D3 softgel capsules are increasingly prescribed by Sierra Leonean physicians and distributed through health programs for deficiency treatment and immune support.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Cardiovascular disease is an emerging health concern in Sierra Leone as the country's disease profile evolves beyond infectious diseases. Omega-3 softgel capsules serve both the growing pharmacy retail market in Freetown, Bo, and Kenema, and institutional health programs focused on non-communicable disease prevention and management.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations address the needs of Sierra Leone's women's health and maternal health segments. Calcium deficiency is a recognized health challenge — particularly during pregnancy and lactation. The Calcitriol-Calcium-K2 combination supports bone density and maternal health, serving both commercial pharmacy retail and institutional maternal health programs.",
  },
  {
    name: "Lycopene + Grape Seed Extract Multivitamin",
    relevance: "Antioxidant formulations serve Sierra Leone's growing preventive health market and the health-conscious urban consumer segment in Freetown. Lycopene and Grape Seed Extract address oxidative stress and support overall health — relevant to Sierra Leone's population as lifestyle diseases become more prevalent alongside the country's economic development.",
  },
  {
    name: "Ginseng + Astaxanthin Multivitamin",
    relevance: "Energy and vitality supplements have growing demand in Sierra Leone's urban centers — Freetown, Bo, Kenema, and Makeni. Ginseng-based softgel capsules are marketed for energy, stamina, and immune support. The combination of traditional herbal ingredients with modern nutraceutical science appeals to Sierra Leonean consumers seeking accessible health support supplements.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by PBSL for product registration and by Sierra Leonean importers for each shipment's customs clearance at Freetown Port.",
  },
  {
    doc: "Free Sale Certificate",
    desc: "Indian government-issued certificate confirming the product is freely manufactured and sold in India. For Sierra Leone, authentication requirements are typically less stringent than larger African markets. We prepare the Free Sale Certificate and coordinate any required authentication process.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. PBSL recognizes WHO-GMP as baseline evidence of manufacturing quality — this certificate is a key document in the PBSL registration process and is also required by NGOs and humanitarian organizations procuring pharmaceuticals for Sierra Leone.",
  },
  {
    doc: "Manufacturing License & FSSAI",
    desc: "Indian manufacturing license and FSSAI (Food Safety and Standards Authority of India) registration. These documents establish the legal manufacturing authorization and food safety compliance of the facility for PBSL review and humanitarian procurement compliance.",
  },
  {
    doc: "Stability Data & Process Flow",
    desc: "Accelerated and real-time stability study data for the specific product, along with manufacturing process flow documentation. PBSL requires this for product registration to verify shelf life claims and manufacturing consistency under tropical storage conditions relevant to Sierra Leone's hot and humid climate.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF Freetown pricing, HS codes, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by Sierra Leone's National Revenue Authority (NRA) for import duty assessment and customs clearance at Queen Elizabeth II Quay.",
  },
];

const faqs = [
  {
    q: "What is PBSL and how does it affect importing softgels to Sierra Leone?",
    a: "PBSL — the Pharmacy Board of Sierra Leone — is Sierra Leone's pharmaceutical regulatory body responsible for drug registration, quality control, and import authorization. All pharmaceutical and nutraceutical products imported into Sierra Leone must be registered with PBSL. The registration process involves documentation review and quality verification — with relatively lower regulatory barriers compared to larger African markets. PBSL registration typically takes 3-6 months. Admetus provides the complete manufacturer documentation package required for PBSL registration.",
  },
  {
    q: "Can Admetus export softgel capsules to Sierra Leone?",
    a: "Yes. Admetus Lifesciences is an export-ready softgel capsule manufacturer with WHO-GMP certification — recognized by PBSL as evidence of manufacturing quality standards. We provide the full documentation package for PBSL registration: COA, Free Sale Certificate, WHO-GMP certificate, stability data, and manufacturing process flow. We serve both commercial importers and humanitarian/NGO procurement for the Sierra Leonean market.",
  },
  {
    q: "Does Sierra Leone accept Indian pharmaceutical imports?",
    a: "Yes. Sierra Leone relies heavily on Indian pharmaceutical imports — particularly for antibiotics, anti-malarials, and essential medicines. India is one of the primary sources of affordable pharmaceutical and nutraceutical products for the Sierra Leonean market. WHO-GMP certified Indian manufacturers are well-established suppliers to both commercial importers and international humanitarian organizations operating in Sierra Leone.",
  },
  {
    q: "Can Admetus supply humanitarian and NGO orders for Sierra Leone?",
    a: "Yes. We understand that Sierra Leone's pharmaceutical market includes significant humanitarian and NGO procurement alongside commercial imports. Our WHO-GMP certification, competitive pricing, and flexible order volumes make us suitable for humanitarian procurement. We can provide documentation formatted for UN, WHO, and international NGO procurement standards, including detailed COA, traceability data, and compliance certificates.",
  },
  {
    q: "How long does shipping take from India to Sierra Leone?",
    a: "Sea freight from JNPT (Mumbai) to Freetown takes approximately 20-24 days transit time. The route typically involves transshipment at a West African hub port. After port arrival, customs clearance at Queen Elizabeth II Quay in Freetown typically takes 5-10 business days depending on documentation completeness and PBSL verification. Total transit from factory dispatch to warehouse delivery in Freetown is typically 32-42 days.",
  },
  {
    q: "What is the MOQ for Sierra Leone export orders?",
    a: "MOQs are flexible and tailored to Sierra Leone's market size (8 million population). For initial orders — particularly those tied to PBSL registration, market testing, or NGO pilot programs — we offer small pilot volumes. For ongoing commercial supply, we support orders scaled to market demand rather than requiring full-container minimums. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
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
      name: "Sierra Leone",
      item: "https://www.admetuslifesciences.com/export/sierra-leone/",
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

export default function SierraLeonePage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Sierra Leone — WHO-GMP certified, PBSL documentation ready"
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
            India &rarr; Sierra Leone
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;SIERRA&nbsp;LEONE
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            Sierra Leonean importers and humanitarian organizations with
            PBSL-ready documentation, competitive pricing, and flexible
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
                SIERRA LEONE&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Sierra Leone — with a population of 8 million — relies heavily
                on pharmaceutical imports to meet its healthcare needs. India
                is one of the primary sources of affordable pharmaceuticals for
                Sierra Leone, supplying antibiotics, anti-malarials, essential
                medicines, and increasingly, nutraceutical supplements. The
                deep trade relationship between Indian pharmaceutical
                manufacturers and Sierra Leonean importers is built on
                affordability, WHO-GMP quality assurance, and established
                logistics corridors.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Sierra Leone&apos;s pharmaceutical market operates through a
                combination of commercial importers serving pharmacy retail and
                institutional buyers (hospitals, clinics), and humanitarian
                organizations (UN agencies, WHO, international NGOs) that
                procure pharmaceuticals for public health programs. Both
                channels source significantly from Indian manufacturers, making
                WHO-GMP certification the baseline quality standard for market
                entry.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The regulatory environment in Sierra Leone is overseen by PBSL
                (Pharmacy Board of Sierra Leone), which manages drug
                registration and import authorization. Sierra Leone has
                relatively low regulatory barriers compared to larger African
                markets like Nigeria or Ghana — making it an accessible entry
                point for Indian pharmaceutical exporters looking to establish
                a presence in West Africa.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Healthcare spending in Sierra Leone is growing — driven by
                post-Ebola health system strengthening, government investment
                in primary healthcare, and increasing international development
                partner support. The nutraceutical segment is emerging as
                Sierra Leone&apos;s healthcare system expands beyond emergency
                and infectious disease care toward preventive health,
                nutrition, and non-communicable disease management.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* PBSL Regulatory Section */}
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
                  PBSL REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  PBSL — the Pharmacy Board of Sierra Leone — regulates all
                  pharmaceutical and nutraceutical imports into Sierra Leone.
                  The registration process is relatively streamlined and
                  typically takes 3-6&nbsp;months.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {pbslSteps.map(([title, desc], i) => (
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
              Why Admetus for Sierra Leone
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY SIERRA LEONEAN IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE SIERRA LEONEAN&nbsp;MARKET
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
              under your brand name for the Sierra Leonean market. See our{" "}
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
              DOCUMENTATION FOR PBSL &amp;&nbsp;CUSTOMS
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
                  INDIA TO SIERRA LEONE SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-Sierra Leone shipping corridor serves
                  pharmaceutical cargo through container vessel services from
                  Mumbai to&nbsp;Freetown.
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
                    "Sea freight: Mumbai to Freetown",
                    "Container vessel services from JNPT to Freetown operate with 20-24 days ocean transit time. The route typically involves transshipment at a West African hub port (Dakar, Abidjan, or Tema). Pharmaceutical cargo is shipped in standard dry containers with temperature monitoring for heat-sensitive products.",
                  ],
                  [
                    "Destination: Queen Elizabeth II Quay, Freetown",
                    "Pharmaceutical imports arrive at Queen Elizabeth II Quay — Freetown's main commercial port. Customs clearance at Freetown port typically takes 5-10 business days depending on documentation completeness and PBSL verification. The importer's customs broker handles port-side clearance with the documentation package we provide (commercial invoice, packing list, COA, PBSL registration evidence).",
                  ],
                  [
                    "Packaging for transit",
                    "All Sierra Leone-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants, tamper-evident sealing, and batch identification. Packaging is designed for 28+ day sea transit in tropical conditions with high humidity resistance. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners.",
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
              SIERRA LEONE EXPORT Q&amp;A
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
              START YOUR SIERRA LEONE EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Sierra Leone import
              requirements — PBSL documentation, formulation selection, MOQ,
              pricing, and shipping to Freetown. We respond within
              48&nbsp;hours.
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
                href="https://wa.me/917497841608?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Sierra%20Leone.%20Please%20share%20details."
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

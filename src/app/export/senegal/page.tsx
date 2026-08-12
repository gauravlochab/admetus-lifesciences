import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "Halal certification for Senegal's Muslim-majority market",
    desc: "Senegal is a 95% Muslim-majority country where Halal certification is not optional — it is a market expectation. Admetus holds Halal certification for its Jind, Haryana facility, covering the entire manufacturing process including raw material sourcing, gelatin shell composition, and cross-contamination controls. Our Halal-certified softgel capsules use bovine gelatin from Halal-certified sources, ensuring compliance with Islamic dietary requirements.",
  },
  {
    title: "WHO-GMP certification accepted by DPM Senegal",
    desc: "DPM (Direction de la Pharmacie et du Medicament) — Senegal's pharmaceutical regulatory body — recognizes WHO-GMP certification as evidence of manufacturing quality standards. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which streamlines the DPM product registration process and demonstrates compliance with international manufacturing standards.",
  },
  {
    title: "Five international certifications",
    desc: "Beyond WHO-GMP and Halal, our facility holds FSSAI, GMP, and HACCP certifications. This multi-certification profile demonstrates compliance across food safety, pharmaceutical manufacturing, hazard control, and religious dietary standards — covering the documentation requirements of DPM Senegal and Senegalese importers across different product categories.",
  },
  {
    title: "Gateway to Francophone West Africa via ECOWAS",
    desc: "Senegal is a founding member of ECOWAS (Economic Community of West African States) and serves as the primary commercial gateway to Francophone West Africa. Importers who establish product registrations in Senegal can leverage ECOWAS trade frameworks to distribute across neighboring markets — Mali, Guinea, Guinea-Bissau, Mauritania, and beyond. We support importers with scalable supply and documentation for multi-country distribution.",
  },
  {
    title: "Flexible MOQ and pilot orders",
    desc: "We understand that Senegalese importers — particularly those registering new products with DPM — need flexibility in initial order sizes. We support pilot-volume orders for market testing and DPM sample submission, with the ability to scale to full-container loads once product registration and market demand are established across Senegal and the broader ECOWAS region.",
  },
];

const dpmSteps = [
  [
    "Appoint a local pharmaceutical representative in Senegal",
    "DPM Senegal requires all imported pharmaceutical and nutraceutical products to be represented by a locally registered pharmaceutical company or authorized representative in Senegal. The local representative handles the registration application, communication with DPM, and is legally responsible for the product in the Senegalese market. This is a mandatory first step before any product registration can begin.",
  ],
  [
    "Manufacturer GMP assessment by DPM",
    "DPM may conduct a GMP assessment of the manufacturing facility or accept WHO-GMP certification as evidence of manufacturing quality standards. Our WHO-GMP certification significantly reduces the scope and likelihood of an on-site inspection. We welcome and facilitate DPM inspection visits to our Jind, Haryana facility when required and provide complete facility documentation.",
  ],
  [
    "Product dossier submission to DPM",
    "The product registration dossier for DPM includes: manufacturer's WHO-GMP certificate, Certificate of Analysis, Free Sale Certificate, product formulation details, stability data, manufacturing process flow, and Halal certification (critical for the Senegalese market). DPM reviews the dossier for compliance with Senegalese pharmaceutical standards and ECOWAS harmonization guidelines.",
  ],
  [
    "Product samples for DPM laboratory testing",
    "DPM requires product samples for quality control testing at the Laboratoire National de Controle des Medicaments (LNCM) — Senegal's national pharmaceutical quality control laboratory. We prepare and ship the required sample quantities with full Certificate of Analysis documentation. Testing covers identity, assay, dissolution, microbial limits, and heavy metal content.",
  ],
  [
    "DPM registration and market authorization",
    "Upon successful completion of documentation review, GMP assessment, and laboratory testing, DPM issues a market authorization (Autorisation de Mise sur le Marche — AMM) for the product. This AMM must be referenced on all product packaging and labeling for the Senegalese market. The process from application to approval typically takes 6-10 months.",
  ],
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Vitamin D deficiency is documented across West African populations despite tropical sun exposure — indoor lifestyles in Dakar and other urban centers, traditional modest clothing that limits skin exposure, and dietary patterns contribute to deficiency. Vitamin D3 softgel capsules are increasingly prescribed by Senegalese physicians for deficiency treatment and bone health support.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Cardiovascular disease is a growing health concern in Senegal, particularly in urban centers like Dakar, Thies, and Saint-Louis. Dietary transitions, hypertension, and sedentary lifestyles are driving demand for cardiovascular health supplements. Omega-3 softgel capsules are recommended by Senegalese healthcare providers for cholesterol management and cardiovascular risk reduction.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Senegal has a significant burden of micronutrient deficiency — iron, zinc, Vitamin A, and folate deficiencies are prevalent, particularly among women of reproductive age, children, and rural populations. Multivitamin softgel capsules address multiple deficiencies in a single convenient dosage form and are distributed through pharmacy retail, health centers, and institutional nutrition programs.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations address the needs of Senegal's women's health and elderly care segments. Calcium deficiency and osteoporosis are under-diagnosed but recognized health challenges. The Calcitriol-Calcium-K2 combination is prescribed by Senegalese physicians for bone density management, post-menopausal health, and fracture prevention.",
  },
  {
    name: "Lycopene + Grape Seed Extract Multivitamin",
    relevance: "Antioxidant formulations are positioned in Senegal's growing preventive health market. Lycopene (prostate health) and Grape Seed Extract (cardiovascular and skin health) address health concerns relevant to Senegal's disease profile. Prostate cancer awareness is increasing in the Senegalese male population, driving demand for preventive health supplements.",
  },
  {
    name: "Ginseng + Astaxanthin Multivitamin",
    relevance: "Energy and vitality supplements have strong demand in Senegal's urban pharmacy market — Dakar, Thies, Saint-Louis, and Kaolack. Ginseng-based softgel capsules are marketed for energy, stamina, and immune support. The combination of traditional herbal ingredients with modern nutraceutical science appeals to Senegalese consumers seeking both efficacy and natural health solutions.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by DPM Senegal for product registration and by Senegalese importers for each shipment's customs clearance at Dakar Port.",
  },
  {
    doc: "Free Sale Certificate (Embassy Authenticated)",
    desc: "Indian government-issued certificate confirming the product is freely manufactured and sold in India. For Senegal, this must be authenticated by the Senegalese Embassy in India or through the Indian Ministry of External Affairs. We prepare the certificate and coordinate the authentication process.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. DPM Senegal recognizes WHO-GMP as baseline evidence of manufacturing quality — this certificate is a key document in the DPM registration dossier.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific products. In Senegal's 95% Muslim-majority market, Halal certification is essential for market acceptance. Our Halal certificate covers raw materials, manufacturing process, and finished product compliance with Islamic dietary standards.",
  },
  {
    doc: "Stability Data & Process Flow",
    desc: "Accelerated and real-time stability study data for the specific product, along with manufacturing process flow documentation. DPM requires this for product registration to verify shelf life claims and manufacturing consistency under tropical storage conditions.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF Dakar pricing, HS codes, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by Senegalese Customs (Direction Generale des Douanes) for import duty assessment and ECOWAS Common External Tariff application.",
  },
];

const faqs = [
  {
    q: "What is DPM and how does it affect importing softgels to Senegal?",
    a: "DPM — Direction de la Pharmacie et du Medicament — is Senegal's pharmaceutical regulatory authority under the Ministry of Health. All pharmaceutical and nutraceutical products imported into Senegal must receive market authorization (AMM — Autorisation de Mise sur le Marche) from DPM before they can be distributed and sold. The registration process involves documentation review, manufacturer GMP assessment, and laboratory testing at the LNCM (Laboratoire National de Controle des Medicaments). DPM registration typically takes 6-10 months. Admetus provides the complete manufacturer documentation package required for DPM registration.",
  },
  {
    q: "Why is Halal certification important for the Senegalese market?",
    a: "Senegal is approximately 95% Muslim, making it one of the most significant Muslim-majority markets in West Africa. Halal certification is a market expectation — not just a regulatory requirement but a consumer trust factor. Pharmaceutical and nutraceutical products with Halal certification gain significantly better market acceptance among Senegalese consumers and healthcare providers. Admetus holds Halal certification covering our entire manufacturing process, including gelatin sourcing, to ensure full compliance with Islamic dietary standards.",
  },
  {
    q: "Can I distribute from Senegal to other ECOWAS countries?",
    a: "Yes. Senegal is a founding member of ECOWAS (Economic Community of West African States) and serves as a commercial hub for Francophone West Africa. Importers who establish product registrations and distribution in Senegal can leverage ECOWAS trade frameworks — including reduced tariffs and simplified customs procedures — to distribute across neighboring markets such as Mali, Guinea, Guinea-Bissau, Mauritania, The Gambia, and beyond. We support importers with scalable supply volumes and documentation for multi-country distribution strategies.",
  },
  {
    q: "What is the MOQ for Senegal export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. For initial orders — particularly those tied to DPM registration and market testing — we offer pilot volumes. Once DPM market authorization is secured and demand is established, we support full 20ft and 40ft container loads for ongoing supply. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How long does shipping take from India to Senegal?",
    a: "Sea freight from JNPT (Mumbai) to Dakar Port takes approximately 18-22 days transit time. This is the standard shipping route for pharmaceutical cargo from western India to Senegal. After port arrival, customs clearance at Dakar Port typically takes 5-10 business days depending on documentation completeness and DPM verification. Total transit from factory dispatch to warehouse delivery in Dakar is typically 30-40 days.",
  },
  {
    q: "Does Admetus provide French-language documentation for Senegal?",
    a: "Senegal is a Francophone country where French is the official language. We provide all essential export documentation in English — the standard language for international pharmaceutical trade — and can coordinate French translation of key documents (product labels, patient information leaflets, marketing materials) as needed for DPM registration and Senegalese market requirements. Our export team is experienced in preparing documentation for Francophone African markets.",
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
      name: "Senegal",
      item: "https://www.admetuslifesciences.com/export/senegal/",
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

export default function SenegalPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Senegal — Halal certified, WHO-GMP certified, DPM documentation ready"
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
            India &rarr; Senegal
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;SENEGAL
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal certified, WHO-GMP softgel capsules from Haryana, India —
            serving Senegalese importers with DPM-ready documentation,
            competitive pricing, and a gateway to Francophone West&nbsp;Africa.
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
                SENEGAL&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Senegal is the commercial and pharmaceutical hub of Francophone
                West Africa — and a strategically critical market for Indian
                pharmaceutical exporters targeting the ECOWAS region. As a
                founding member of ECOWAS, Senegal serves as the primary entry
                point for pharmaceutical products destined for Francophone West
                African markets including Mali, Guinea, Mauritania, and
                Guinea-Bissau.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Senegal is a 95% Muslim-majority country — the most important
                single factor for pharmaceutical and nutraceutical manufacturers
                entering this market. Halal certification is a market
                expectation, not just a regulatory formality. Products without
                Halal certification face significant resistance from consumers,
                pharmacists, and healthcare providers. Admetus&apos;s Halal
                certification covers our entire manufacturing process from raw
                material sourcing to finished product packaging.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The pharmaceutical sector in Senegal is regulated by the DPM
                (Direction de la Pharmacie et du Medicament) under the Ministry
                of Health. DPM oversees product registration, manufacturing
                quality standards, and import authorization. Indian
                manufacturers with WHO-GMP certification have a recognized
                quality baseline that facilitates the DPM registration process.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Senegal&apos;s healthcare spending is growing, driven by
                government investment in universal health coverage (Couverture
                Maladie Universelle — CMU), increasing private sector
                healthcare participation, and a growing urban middle class in
                Dakar and secondary cities. The nutraceutical softgel segment
                benefits from this expanding healthcare market, with increasing
                demand for preventive health supplements, multivitamins, and
                condition-specific formulations.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* DPM Regulatory Section */}
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
                  DPM SENEGAL REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  DPM — Direction de la Pharmacie et du Medicament — regulates
                  all pharmaceutical and nutraceutical imports into Senegal. The
                  registration process is structured and typically takes
                  6-10&nbsp;months.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {dpmSteps.map(([title, desc], i) => (
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
              Why Admetus for Senegal
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY SENEGALESE IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE SENEGALESE&nbsp;MARKET
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
              under your brand name for the Senegalese market. See our{" "}
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
              DOCUMENTATION FOR DPM &amp;&nbsp;CUSTOMS
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
                  INDIA TO SENEGAL SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-Senegal shipping corridor serves pharmaceutical
                  cargo through regular container vessel services from Mumbai
                  to&nbsp;Dakar.
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
                    "Sea freight: Mumbai to Dakar",
                    "Container vessel services from JNPT to Dakar Port operate on regular schedules with 18-22 days ocean transit time. Pharmaceutical cargo is shipped in standard dry containers with temperature monitoring for heat-sensitive products. The Mumbai-Dakar route typically involves transshipment at a hub port (Tangier Med, Algeciras, or Las Palmas).",
                  ],
                  [
                    "Destination: Port Autonome de Dakar",
                    "Pharmaceutical imports arrive at the Port Autonome de Dakar — Senegal's primary commercial port and the main entry point for containerized cargo. Customs clearance at Dakar Port typically takes 5-10 business days depending on documentation completeness and DPM verification. The importer's customs broker handles port-side clearance with the documentation package we provide.",
                  ],
                  [
                    "Packaging for transit",
                    "All Senegal-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants, tamper-evident sealing, and batch identification. Packaging is designed for 25+ day sea transit in tropical conditions. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-Senegal corridor.",
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
              SENEGAL EXPORT Q&amp;A
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
              START YOUR SENEGAL EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Senegal import
              requirements — DPM documentation, Halal certification, formulation
              selection, MOQ, pricing, and shipping to Dakar. We respond within
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
                href="https://wa.me/919729977795?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Senegal.%20Please%20share%20details."
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

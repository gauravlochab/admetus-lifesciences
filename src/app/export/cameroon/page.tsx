import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification accepted by DPML Cameroon",
    desc: "DPML (Direction de la Pharmacie, du Medicament et des Laboratoires) — Cameroon's pharmaceutical regulatory body under MINSANTE (Ministry of Public Health) — recognizes WHO-GMP certification as evidence of manufacturing quality standards. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which streamlines the DPML product registration process and demonstrates compliance with international manufacturing standards.",
  },
  {
    title: "Five international certifications",
    desc: "Beyond WHO-GMP, our facility holds FSSAI, GMP, HACCP, and Halal certifications. This multi-certification profile demonstrates compliance across food safety, pharmaceutical manufacturing, hazard control, and religious dietary standards — covering the documentation requirements of DPML and Cameroonian importers across different product categories and consumer segments.",
  },
  {
    title: "Export documentation for DPML registration",
    desc: "We provide the complete documentation package that Cameroonian importers need for DPML product registration: Certificate of Analysis (COA), Free Sale Certificate (authenticated), WHO-GMP certificate, ingredient declarations, stability data, manufacturing process flow, and product samples for DPML laboratory testing. Our export team is experienced in preparing DPML-specific documentation.",
  },
  {
    title: "Bilingual market advantage — French and English",
    desc: "Cameroon is uniquely bilingual in Africa — with both French-speaking (80%) and English-speaking (20%) regions. This bilingual character makes Cameroon a strategic distribution hub for both Francophone Central Africa (Chad, Gabon, Congo, Central African Republic) and Anglophone West Africa. We support importers with documentation and labeling adaptable to both language markets.",
  },
  {
    title: "Flexible MOQ and pilot orders",
    desc: "We understand that Cameroonian importers — particularly those registering new products with DPML — need flexibility in initial order sizes. We support pilot-volume orders for market testing and DPML sample submission, with the ability to scale to full-container loads once product registration and market demand are established across Cameroon and the broader Central African region.",
  },
];

const dpmlSteps = [
  [
    "Appoint a local pharmaceutical representative in Cameroon",
    "DPML requires all imported pharmaceutical and nutraceutical products to be represented by a locally registered pharmaceutical company or authorized representative in Cameroon. The local representative handles the registration application, communication with DPML, and is legally responsible for the product in the Cameroonian market. This is a mandatory first step before any product registration can begin.",
  ],
  [
    "Manufacturer GMP assessment by DPML",
    "DPML may conduct a GMP assessment of the manufacturing facility or accept WHO-GMP certification as evidence of manufacturing quality standards. Our WHO-GMP certification significantly reduces the scope and likelihood of an on-site inspection. We welcome and facilitate DPML inspection visits to our Jind, Haryana facility when required and provide complete facility documentation.",
  ],
  [
    "Product dossier submission to DPML",
    "The product registration dossier for DPML includes: manufacturer's WHO-GMP certificate, Certificate of Analysis, Free Sale Certificate, product formulation details, stability data, manufacturing process flow, and packaging specifications. DPML reviews the dossier for compliance with Cameroonian pharmaceutical standards. Documentation may need to be submitted in French for the Francophone regulatory process.",
  ],
  [
    "Product samples for DPML laboratory testing",
    "DPML requires product samples for quality control testing at the Laboratoire National de Controle de Qualite des Medicaments et d'Expertises (LANACOME) — Cameroon's national pharmaceutical quality control laboratory. We prepare and ship the required sample quantities with full Certificate of Analysis documentation. Testing covers identity, assay, dissolution, microbial limits, and heavy metal content.",
  ],
  [
    "DPML market authorization issuance",
    "Upon successful completion of documentation review, GMP assessment, and laboratory testing, DPML issues a market authorization (Autorisation de Mise sur le Marche — AMM) for the product. This AMM must be referenced on all product packaging and labeling for the Cameroonian market. The process from application to approval typically takes 6-12 months.",
  ],
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Vitamin D deficiency is documented in Cameroonian populations despite the country's tropical location — indoor lifestyles in urban centers like Douala and Yaounde, traditional clothing, and dietary patterns contribute to deficiency. Vitamin D3 softgel capsules are prescribed by Cameroonian physicians for deficiency treatment and increasingly recommended for bone health and immune support.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Cardiovascular disease and hypertension are growing health concerns in Cameroon, particularly in urban centers. With a population of 28 million and increasing urbanization, dietary transitions are driving demand for cardiovascular health supplements. Omega-3 softgel capsules are recommended by Cameroonian healthcare providers for cholesterol management, cardiovascular risk reduction, and anti-inflammatory support.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Cameroon has a significant burden of micronutrient deficiency — iron, zinc, Vitamin A, iodine, and folate deficiencies are prevalent, particularly in the northern regions and among women and children. Multivitamin softgel capsules address multiple deficiencies in a single dosage form and are distributed through pharmacy retail, health centers, and institutional nutrition programs across all ten regions of Cameroon.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations serve Cameroon's growing elderly population and women's health segment. Calcium deficiency and osteoporosis are increasingly recognized health challenges as Cameroon's population ages. The Calcitriol-Calcium-K2 combination is prescribed by Cameroonian physicians for bone density management, post-menopausal health, and fracture prevention.",
  },
  {
    name: "Lycopene + Grape Seed Extract Multivitamin",
    relevance: "Antioxidant formulations are positioned in Cameroon's growing preventive health market. Lycopene (prostate health) and Grape Seed Extract (cardiovascular and skin health) address health concerns relevant to Cameroon's disease profile. Cancer awareness and prevention are increasing health priorities in Cameroon, driving demand for antioxidant and preventive health supplements.",
  },
  {
    name: "Ginseng + Astaxanthin Multivitamin",
    relevance: "Energy and vitality supplements have strong demand in Cameroon's urban pharmacy market — Douala, Yaounde, Bamenda, and Bafoussam. Ginseng-based softgel capsules are marketed for energy, stamina, and immune support, targeting working professionals and health-conscious consumers in Cameroon's growing urban economy.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by DPML for product registration and by Cameroonian importers for each shipment's customs clearance at Douala Port.",
  },
  {
    doc: "Free Sale Certificate (Embassy Authenticated)",
    desc: "Indian government-issued certificate confirming the product is freely manufactured and sold in India. For Cameroon, this must be authenticated by the Cameroonian Embassy/High Commission in India or through the Indian Ministry of External Affairs. We prepare the certificate and coordinate the authentication process.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. DPML recognizes WHO-GMP as baseline evidence of manufacturing quality — this certificate is a key document in the DPML registration dossier and facilitates the GMP assessment process.",
  },
  {
    doc: "Manufacturing License & FSSAI",
    desc: "Indian manufacturing license and FSSAI (Food Safety and Standards Authority of India) registration. These documents establish the legal manufacturing authorization and food safety compliance of the facility for DPML review.",
  },
  {
    doc: "Stability Data & Process Flow",
    desc: "Accelerated and real-time stability study data for the specific product, along with manufacturing process flow documentation. DPML requires this for product registration to verify shelf life claims and manufacturing consistency under tropical storage conditions relevant to Cameroon's climate zones.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF Douala pricing, HS codes, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by Cameroon Customs (Direction Generale des Douanes) for import duty assessment and CEMAC Common External Tariff application.",
  },
];

const faqs = [
  {
    q: "What is DPML and how does it affect importing softgels to Cameroon?",
    a: "DPML — Direction de la Pharmacie, du Medicament et des Laboratoires — is Cameroon's pharmaceutical regulatory authority under MINSANTE (Ministry of Public Health). All pharmaceutical and nutraceutical products imported into Cameroon must receive market authorization (AMM — Autorisation de Mise sur le Marche) from DPML before they can be distributed and sold. The registration process involves documentation review, manufacturer GMP assessment, and laboratory testing at LANACOME (Cameroon's national quality control laboratory). DPML registration typically takes 6-12 months. Admetus provides the complete manufacturer documentation package required for DPML registration.",
  },
  {
    q: "Can Admetus export softgel capsules to Cameroon?",
    a: "Yes. Admetus Lifesciences is an export-ready softgel capsule manufacturer with WHO-GMP certification — recognized by DPML as evidence of manufacturing quality standards. We provide the full documentation package for DPML registration: COA, Free Sale Certificate (with embassy authentication support), WHO-GMP certificate, stability data, manufacturing process flow, and product samples. We have the certifications, documentation capability, and production capacity to serve Cameroonian importers and distributors.",
  },
  {
    q: "Is Cameroon a good hub for distributing to Central Africa?",
    a: "Yes. Cameroon is the largest economy in the CEMAC (Central African Economic and Monetary Community) region and serves as the primary commercial hub for Central Africa. Cameroon's unique bilingual status (French and English) makes it a strategic distribution point for both Francophone Central Africa (Chad, Gabon, Republic of Congo, Central African Republic, Equatorial Guinea) and Anglophone markets. Douala Port is the busiest port in the CEMAC zone, making it the natural entry point for pharmaceutical imports destined for the broader Central African market.",
  },
  {
    q: "What is the MOQ for Cameroon export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. For initial orders — particularly those tied to DPML registration and market testing — we offer pilot volumes. Once DPML market authorization is secured and demand is established, we support full 20ft and 40ft container loads for ongoing supply. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How long does shipping take from India to Cameroon?",
    a: "Sea freight from JNPT (Mumbai) to Douala Port takes approximately 20-24 days transit time. This is the standard shipping route for pharmaceutical cargo from western India to Cameroon. After port arrival, customs clearance at Douala Port typically takes 7-12 business days depending on documentation completeness and DPML verification. Total transit from factory dispatch to warehouse delivery in Douala or Yaounde is typically 35-45 days.",
  },
  {
    q: "Does documentation need to be in French for Cameroon?",
    a: "Cameroon is bilingual (French and English), but the pharmaceutical regulatory process through DPML typically operates in French — as approximately 80% of the country is Francophone. We provide all essential export documentation in English — the standard language for international pharmaceutical trade — and can coordinate French translation of key documents (product labels, patient information leaflets, regulatory submissions) as needed for DPML registration and Cameroonian market requirements.",
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
      name: "Cameroon",
      item: "https://www.admetuslifesciences.com/export/cameroon/",
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

export default function CameroonPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Cameroon — WHO-GMP certified, DPML documentation ready"
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
            India &rarr; Cameroon
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;CAMEROON
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            Cameroonian importers with DPML-ready documentation, competitive
            pricing, and a gateway to Central&nbsp;Africa.
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
                CAMEROON&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Cameroon is the largest economy in the CEMAC (Central African
                Economic and Monetary Community) region — with a population of
                28 million and growing healthcare expenditure. As the
                commercial hub of Central Africa, Cameroon is a strategically
                important market for Indian pharmaceutical exporters seeking to
                serve the broader Central African region.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Cameroon is uniquely bilingual in Africa — French-speaking
                (approximately 80%) and English-speaking (approximately 20%)
                regions coexist, making the country a natural distribution hub
                for both Francophone Central Africa (Chad, Gabon, Republic of
                Congo, Central African Republic) and Anglophone markets. This
                bilingual advantage extends to pharmaceutical trade and
                regulatory documentation.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The pharmaceutical sector in Cameroon is regulated by DPML
                (Direction de la Pharmacie, du Medicament et des Laboratoires)
                under MINSANTE (Ministry of Public Health). DPML oversees
                product registration, manufacturing quality standards, and
                import authorization. Indian manufacturers with WHO-GMP
                certification have a recognized quality baseline that
                facilitates the DPML registration process.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Cameroon&apos;s healthcare spending is growing — driven by
                government investment in public health infrastructure,
                increasing private sector healthcare participation, and a
                growing urban middle class in Douala, Yaounde, and secondary
                cities. The nutraceutical softgel segment benefits from this
                expanding healthcare market, with increasing demand for
                preventive health supplements, multivitamins, and
                condition-specific formulations to address Cameroon&apos;s
                evolving disease burden.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* DPML Regulatory Section */}
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
                  DPML CAMEROON REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  DPML — Direction de la Pharmacie, du Medicament et des
                  Laboratoires — under MINSANTE regulates all pharmaceutical
                  and nutraceutical imports into Cameroon. The registration
                  process typically takes 6-12&nbsp;months.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {dpmlSteps.map(([title, desc], i) => (
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
              Why Admetus for Cameroon
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY CAMEROONIAN IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE CAMEROONIAN&nbsp;MARKET
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
              under your brand name for the Cameroonian market. See our{" "}
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
              DOCUMENTATION FOR DPML &amp;&nbsp;CUSTOMS
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
                  INDIA TO CAMEROON SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-Cameroon shipping corridor serves pharmaceutical
                  cargo through regular container vessel services from Mumbai
                  to&nbsp;Douala.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: JNPT (Nhava Sheva), Mumbai",
                    "Products are dispatched from our Jind, Haryana facility to JNPT port in Mumbai — approximately 1,200km by road, 2-3 days transit. JNPT is India's largest container port and the primary departure point for pharmaceutical exports to West and Central Africa. Cargo is consolidated, inspected, and cleared for export at JNPT's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Sea freight: Mumbai to Douala",
                    "Container vessel services from JNPT to Douala Port operate on regular schedules with 20-24 days ocean transit time. Pharmaceutical cargo is shipped in standard dry containers with temperature monitoring for heat-sensitive products. The Mumbai-Douala route typically involves transshipment at a hub port in the Mediterranean or West Africa.",
                  ],
                  [
                    "Destination: Port Autonome de Douala",
                    "Pharmaceutical imports arrive at the Port Autonome de Douala — Cameroon's largest and busiest commercial port, handling over 95% of the country's seaborne trade. Douala Port is also the primary entry point for goods destined for landlocked Central African countries (Chad, Central African Republic). Customs clearance typically takes 7-12 business days depending on documentation completeness and DPML verification.",
                  ],
                  [
                    "Packaging for transit",
                    "All Cameroon-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants, tamper-evident sealing, and batch identification. Packaging is designed for 28+ day sea transit in tropical conditions. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-Cameroon corridor.",
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
              CAMEROON EXPORT Q&amp;A
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
              START YOUR CAMEROON EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Cameroon import
              requirements — DPML documentation, formulation selection, MOQ,
              pricing, and shipping to Douala Port. We respond within
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
                href="https://wa.me/919729977795?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Cameroon.%20Please%20share%20details."
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

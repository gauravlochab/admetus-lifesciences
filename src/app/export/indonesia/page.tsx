import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "Halal certification — mandatory for Indonesia",
    desc: "Indonesia is the world's largest Muslim-majority country (87% of 270 million). Halal certification is not optional — it is legally required for all food, pharmaceutical, and nutraceutical products under Indonesia's 2014 Halal Product Assurance Law (JPH), enforced by BPJPH (Badan Penyelenggara Jaminan Produk Halal). MUI/LPPOM conducts the Halal audit for imported products. Admetus holds Halal certification for its Jind, Haryana facility, ensuring that all softgel formulations meet the Halal manufacturing requirements recognized by Indonesian authorities.",
  },
  {
    title: "WHO-GMP certification accepted by BPOM",
    desc: "BPOM (Badan Pengawas Obat dan Makanan) — Indonesia's national drug and food regulatory authority — recognizes WHO-GMP certification as evidence of manufacturing quality compliance. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which streamlines the BPOM product registration process. WHO-GMP status reduces the scope of additional manufacturing site inspections and accelerates the registration timeline for pharmaceutical and nutraceutical softgel products.",
  },
  {
    title: "Five international certifications",
    desc: "Beyond WHO-GMP and Halal, our facility holds FSSAI, GMP, and HACCP certifications. This multi-certification profile demonstrates compliance across food safety, pharmaceutical manufacturing, hazard control, and religious dietary standards — covering the documentation requirements of BPOM and Indonesian importers across different product categories. The combination of Halal + WHO-GMP is particularly critical for the Indonesian market.",
  },
  {
    title: "Glutathione and skin health formulations",
    desc: "Indonesia's beauty and personal care market is one of the largest in Southeast Asia. Glutathione softgel capsules — valued for skin-brightening and antioxidant properties — are in high demand among Indonesian consumers. Admetus manufactures Glutathione softgel formulations (reduced L-Glutathione) with verified potency, stability data, and the documentation required for BPOM registration. We also offer combination formulations with Vitamin C and Collagen for the Indonesian beauty supplement market.",
  },
  {
    title: "Competitive pricing from India's API hub",
    desc: "India is a key API (Active Pharmaceutical Ingredient) supplier to Indonesia's pharmaceutical sector. Our Haryana facility operates with lower overhead than manufacturers in major Indian metros, enabling competitive pricing that allows Indonesian distributors to maintain healthy retail margins. Our direct-to-importer model eliminates intermediary costs, making Admetus a cost-effective partner for Indonesian pharmaceutical and nutraceutical companies seeking WHO-GMP + Halal certified softgel supply.",
  },
];

const bpomSteps = [
  [
    "Appoint an Indonesian importer or local representative",
    "BPOM requires that all product registration applications be submitted by a locally registered Indonesian company — either an importer, distributor, or local representative. The foreign manufacturer cannot directly register products with BPOM. The Indonesian importer must hold a valid business license (NIB — Nomor Induk Berusaha) and import license (API — Angka Pengenal Importir) for pharmaceutical or nutraceutical products.",
  ],
  [
    "Obtain Halal certification (mandatory)",
    "Under Indonesia's Halal Product Assurance Law (JPH), all pharmaceutical and nutraceutical products must carry Halal certification. The certification process involves BPJPH (the Halal Product Assurance Organizing Agency), which designates LPH (Halal Inspection Bodies like LPPOM MUI) to conduct the manufacturing audit. Admetus holds Halal certification, and we provide all Halal manufacturing documentation required for the Indonesian Halal registration process.",
  ],
  [
    "Submit product registration to BPOM",
    "BPOM product registration requires a complete dossier including: product formulation and specifications, manufacturing process documentation, Certificate of Analysis (COA), WHO-GMP certificate, Certificate of Free Sale (CFS) or Certificate of Pharmaceutical Product (CPP) from CDSCO India, stability data, labeling details in Bahasa Indonesia, and Halal certificate. Admetus prepares the complete manufacturer documentation package for the Indonesian importer to submit.",
  ],
  [
    "BPOM evaluation and product approval",
    "BPOM evaluates the submitted dossier, which may include documentary review, laboratory testing of product samples, and verification of manufacturing compliance. For nutraceutical products, BPOM may classify registration under different categories (obat tradisional, suplemen kesehatan) — each with specific requirements. Upon successful evaluation, BPOM issues the product registration number (nomor registrasi), authorizing import and sale in Indonesia.",
  ],
  [
    "Customs clearance and distribution",
    "Once BPOM registration is secured, each import shipment requires customs clearance at the destination port. Indonesian customs (DJBC — Direktorat Jenderal Bea dan Cukai) verifies the BPOM registration number, commercial invoice, packing list, COA, and Halal certificate. The importer's customs broker handles port-side clearance. Post-clearance distribution must comply with BPOM's GDP (Good Distribution Practice) requirements.",
  ],
];

const products = [
  {
    name: "Glutathione (Reduced L-Glutathione) Softgel Capsules",
    relevance: "Indonesia's skin health and beauty supplement market is among the largest in Southeast Asia. Glutathione softgel capsules are in high demand for their skin-brightening and antioxidant properties. Indonesian consumers — particularly in urban markets like Jakarta, Surabaya, and Bandung — drive strong retail and e-commerce demand for Glutathione products. Halal certification is essential for Glutathione supplements in Indonesia, and Admetus provides fully Halal-certified Glutathione formulations with BPOM-ready documentation.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Cardiovascular disease is a leading cause of mortality in Indonesia, with hypertension affecting approximately 34% of the adult population. Omega-3 softgel capsules are widely recommended by Indonesian healthcare providers for cardiovascular risk management, cholesterol control, and anti-inflammatory support. The growing urban middle class and increasing health awareness are driving sustained demand for Omega-3 supplements in pharmacy retail and e-commerce channels across Indonesia.",
  },
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Despite Indonesia's equatorial location, Vitamin D deficiency is documented in Indonesian populations — particularly among women, urban office workers, and those who practice modest dressing that limits sun exposure. Vitamin D3 softgel capsules are increasingly prescribed by Indonesian physicians for deficiency treatment. The high-dose 60,000 IU format is used for therapeutic correction under medical supervision, while lower-dose maintenance formulations serve the retail supplement market.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Indonesia has a significant burden of micronutrient deficiency — iron, Vitamin A, zinc, and iodine deficiencies are prevalent, particularly in rural areas and among women of reproductive age. Multivitamin softgel capsules address multiple deficiencies in a single dosage form. The Indonesian government's nutrition programs and growing consumer health awareness drive demand across both institutional procurement and retail pharmacy channels.",
  },
  {
    name: "Evening Primrose Oil + Vitamin E",
    relevance: "Evening Primrose Oil (EPO) softgel capsules are popular among Indonesian women for hormonal balance, skin health, and PMS symptom relief. The Indonesian women's health supplement market is growing rapidly, driven by increasing health awareness and disposable income among urban women. EPO combined with Vitamin E is a high-demand formulation in Indonesian pharmacies and health food stores.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by BPOM for product registration and by Indonesian importers for each shipment's customs clearance at Indonesian ports.",
  },
  {
    doc: "Certificate of Pharmaceutical Product (CPP) from CDSCO",
    desc: "Issued by India's Central Drugs Standard Control Organisation, the CPP confirms that the product is registered and freely manufactured and sold in India. BPOM requires a CPP or Certificate of Free Sale (CFS) from the country of origin as part of the product registration dossier. Admetus coordinates the CPP application with CDSCO.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. BPOM accepts WHO-GMP as baseline evidence of manufacturing quality — this certificate is a key document in the product registration application and reduces the likelihood of requiring a separate facility inspection by BPOM.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific product formulations. Mandatory for all pharmaceutical and nutraceutical imports into Indonesia under the JPH law. The certificate must be recognized by BPJPH/MUI. Admetus holds Halal certification and provides the complete Halal documentation package for Indonesian importers.",
  },
  {
    doc: "Stability Data & Shelf Life Documentation",
    desc: "Accelerated and real-time stability study data for each product under ICH climatic Zone IVb conditions (relevant to Indonesia's tropical climate — 30°C/75% RH). BPOM requires stability data to verify shelf life claims. We provide stability protocols and results as part of the registration documentation package.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF pricing, HS codes, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by Indonesian customs (DJBC) for import duty assessment and clearance at Tanjung Priok or other Indonesian ports.",
  },
];

const faqs = [
  {
    q: "Is Halal certification mandatory for softgel imports into Indonesia?",
    a: "Yes. Halal certification is legally mandatory for all pharmaceutical and nutraceutical products imported into Indonesia under the Halal Product Assurance Law (JPH). The certification process is managed by BPJPH (Badan Penyelenggara Jaminan Produk Halal) and audited by designated Halal inspection bodies such as LPPOM MUI. Products without valid Halal certification cannot be registered with BPOM or sold in Indonesia. Admetus holds Halal certification for its manufacturing facility and provides all Halal documentation required for Indonesian product registration.",
  },
  {
    q: "What is required for BPOM product registration of imported softgels?",
    a: "BPOM requires product registration for every imported pharmaceutical and nutraceutical product. The registration application must be submitted by a locally registered Indonesian company (importer or distributor). The dossier requires: product formulation details, manufacturing process documentation, Certificate of Analysis (COA), WHO-GMP certificate, CPP/CFS from CDSCO India, stability data under Zone IVb conditions, labeling in Bahasa Indonesia, and Halal certificate. Admetus provides the complete manufacturer documentation package — WHO-GMP certificate, CPP coordination, stability data, COA, and Halal certificate — enabling Indonesian importers to compile and submit their BPOM registration application.",
  },
  {
    q: "What documentation does Admetus provide for Indonesian import?",
    a: "We provide the complete manufacturer documentation package for BPOM registration and Indonesian customs clearance: Certificate of Analysis (batch-specific), WHO-GMP certificate, Halal certificate, coordination for Certificate of Pharmaceutical Product (CPP) from CDSCO, stability data under Zone IVb tropical conditions, product specifications, and commercial export documents (invoice, packing list, HS codes). We also provide product samples for BPOM laboratory evaluation upon request. Our export team is experienced in preparing documentation for the Indonesian regulatory environment.",
  },
  {
    q: "Does Admetus manufacture Glutathione softgel capsules for Indonesia?",
    a: "Yes. Admetus manufactures Halal-certified Glutathione softgel capsules using reduced L-Glutathione. Indonesia has strong consumer demand for Glutathione supplements, driven by the skin health and beauty market. We offer Glutathione in standalone formulations and in combination with Vitamin C, Collagen, or other synergistic ingredients. All Glutathione formulations are manufactured under WHO-GMP conditions with Halal certification, full stability data, COA, and the documentation required for BPOM registration. Private label Glutathione softgels for the Indonesian market are available.",
  },
  {
    q: "How long does shipping take from India to Indonesia?",
    a: "Sea freight from Chennai Port or JNPT (Mumbai) to Jakarta — Tanjung Priok port — takes approximately 10-14 days transit time. This is the primary shipping route for pharmaceutical cargo from India to Indonesia. Additional Indonesian ports including Surabaya (Tanjung Perak) and Medan (Belawan) are also served by regular container vessel services from Indian ports. After port arrival, customs clearance at Indonesian ports typically takes 5-10 business days depending on documentation completeness and BPOM verification. Total transit from factory dispatch to warehouse delivery is typically 20-35 days.",
  },
  {
    q: "What is the MOQ for Indonesia export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. For initial orders — particularly those tied to BPOM registration and market testing — we offer pilot volumes. Once product registration is secured and market demand is established, we support full 20ft and 40ft container loads for ongoing supply. All orders for Indonesia must use Halal-certified formulations. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
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
      name: "Indonesia",
      item: "https://www.admetuslifesciences.com/export/indonesia/",
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

export default function IndonesiaPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Indonesia — WHO-GMP and Halal certified, BPOM documentation ready"
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
            India &rarr; Indonesia
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;INDONESIA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP and Halal certified softgel capsules from Haryana, India
            — serving Indonesian importers with BPOM-ready documentation,
            MUI/LPPOM Halal compliance, Glutathione formulations, and
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
                INDONESIA PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Indonesia is the largest economy in Southeast Asia and the
                world&apos;s fourth most populous country with approximately
                270 million people. It is also the largest Muslim-majority
                nation on Earth — 87% of the population identifies as Muslim,
                making Halal certification an absolute legal and commercial
                requirement for pharmaceutical and nutraceutical imports.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Indonesia&apos;s pharmaceutical market is valued at over $10
                billion and growing at 7-8% annually, driven by a rapidly
                expanding middle class, increasing health insurance coverage
                under JKN (Jaminan Kesehatan Nasional), and rising consumer
                spending on health supplements. The nutraceutical and dietary
                supplement segment is growing even faster — fueled by
                e-commerce platforms like Tokopedia, Shopee, and Lazada, which
                have made health supplements accessible to consumers across
                the archipelago.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                India is a key supplier of Active Pharmaceutical Ingredients
                (APIs) and finished dosage forms to Indonesia. Indian
                manufacturers with WHO-GMP certification and Halal compliance
                have a strong competitive position in the Indonesian market.
                The regulatory pathway through BPOM (Badan Pengawas Obat dan
                Makanan — Indonesia&apos;s national food and drug authority)
                is well-defined, and WHO-GMP certification significantly
                streamlines the product registration process.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The Indonesian softgel market has distinctive demand patterns.
                Skin health and beauty supplements — particularly Glutathione
                — are in high demand, driven by consumer interest in
                skin-brightening products. Cardiovascular health supplements
                (Omega-3), multivitamins, and bone health formulations are
                also high-volume categories. All imported softgel products
                must carry BPOM registration numbers and Halal certification
                to be legally sold in Indonesia.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* BPOM Regulatory Section */}
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
                  BPOM REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  BPOM (Badan Pengawas Obat dan Makanan) regulates all
                  pharmaceutical and nutraceutical imports into Indonesia. The
                  registration process requires a locally registered importer
                  and mandatory Halal&nbsp;certification.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {bpomSteps.map(([title, desc], i) => (
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
              Why Admetus for Indonesia
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY INDONESIAN IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE INDONESIAN&nbsp;MARKET
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
              formulation development on request. All products for Indonesia
              are manufactured with Halal certification. See our{" "}
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
              DOCUMENTATION FOR BPOM &amp;&nbsp;CUSTOMS
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
                  INDIA TO INDONESIA SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-Indonesia shipping corridor is well-established
                  for pharmaceutical cargo, with regular container vessel
                  services from Chennai and Mumbai to Jakarta&apos;s Tanjung
                  Priok&nbsp;port.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: Chennai Port or JNPT (Mumbai)",
                    "Products are dispatched from our Jind, Haryana facility to either Chennai Port or JNPT (Nhava Sheva) in Mumbai. Both ports have regular container services to Indonesian ports. Chennai Port offers slightly shorter transit times to Southeast Asian destinations. Cargo is consolidated, inspected, and cleared for export at the port's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Sea freight: India to Jakarta",
                    "Container vessel services from Chennai/JNPT to Jakarta's Tanjung Priok port operate on regular schedules with 10-14 days ocean transit time. Pharmaceutical cargo is shipped in standard dry containers with temperature monitoring for heat-sensitive products. Multiple shipping lines serve the India-Indonesia route with weekly departures, ensuring consistent supply chain reliability. Alternative Indonesian ports including Surabaya (Tanjung Perak) and Medan (Belawan) are also served.",
                  ],
                  [
                    "Destination: Tanjung Priok, Jakarta",
                    "Pharmaceutical imports typically arrive at Tanjung Priok — Indonesia's largest and busiest port, handling over 50% of the country's total imports. Indonesian customs (DJBC) clearance and BPOM verification at the port typically take 5-10 business days. The importer's customs broker handles port-side clearance with the documentation package we provide (commercial invoice, packing list, COA, BPOM registration evidence, Halal certificate).",
                  ],
                  [
                    "Packaging for tropical transit",
                    "All Indonesia-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants and moisture barriers, tamper-evident sealing, and batch identification. Packaging is designed for tropical transit conditions and Indonesia's equatorial high-humidity environment. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-Indonesia corridor.",
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
              INDONESIA EXPORT Q&amp;A
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
              <Link href="/export/philippines/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Philippines
              </Link>
              <Link href="/export/vietnam/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Vietnam
              </Link>
              <Link href="/export/cambodia/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Cambodia
              </Link>
              <Link href="/export/laos/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Laos
              </Link>
              <Link href="/export/malaysia/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Malaysia
              </Link>
              <Link href="/export/thailand/" className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem]">
                Thailand
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* CTA */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-t border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              START YOUR INDONESIA EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Indonesia import
              requirements — BPOM documentation, Halal certification,
              Glutathione formulations, MOQ, pricing, and shipping. We
              respond within 48&nbsp;hours.
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
                href="https://wa.me/919729977795?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Indonesia.%20Please%20share%20details."
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

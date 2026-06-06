import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification accepted by NDA Uganda",
    desc: "The National Drug Authority (NDA) of Uganda recognizes WHO-GMP certification as evidence of manufacturing quality compliance. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which streamlines the NDA product registration process. WHO-GMP status is a baseline requirement for pharmaceutical imports into Uganda and reduces the scope of additional manufacturing site inspections by NDA inspectors.",
  },
  {
    title: "India — Uganda's key pharmaceutical supplier",
    desc: "India is one of Uganda's most important pharmaceutical supplier nations. Indian-manufactured medicines dominate Uganda's import market, covering antibiotics, anti-malarials, antiretrovirals, and increasingly nutraceutical supplements. This established India-Uganda pharmaceutical trade relationship means that Ugandan importers, distributors, and NDA regulators are familiar with Indian manufacturing standards, documentation formats, and quality systems.",
  },
  {
    title: "Five international certifications including Halal",
    desc: "Beyond WHO-GMP, our facility holds FSSAI, GMP, HACCP, and Halal certifications. Uganda has a significant Muslim population (approximately 14%) — Halal certification is important for distribution in Muslim-majority regions and for cross-border trade to neighboring countries. This multi-certification profile covers NDA requirements and importer needs across different market segments in Uganda's diverse population.",
  },
  {
    title: "Competitive pricing for the Ugandan market",
    desc: "Uganda is a price-sensitive pharmaceutical market where landed cost determines commercial viability. Our Haryana facility operates with lower overhead than manufacturers in Mumbai, Hyderabad, or Ahmedabad. Combined with the East African Community (EAC) Common External Tariff provisions for essential medicines, our pricing structure enables Ugandan distributors to maintain competitive retail margins across pharmacy, hospital, and institutional channels throughout the country.",
  },
  {
    title: "Flexible MOQ for market entry",
    desc: "We understand that Ugandan importers — particularly those registering new products with NDA — need flexibility in initial order sizes. We support pilot-volume orders for market testing and NDA sample submission, with the ability to scale to full-container loads once product registration and market demand are established. This is particularly valuable for importers entering new therapeutic categories or expanding their nutraceutical portfolio in Uganda's growing pharmacy retail channel.",
  },
];

const ndaSteps = [
  [
    "Appoint a local licensed pharmaceutical importer",
    "NDA Uganda requires all imported pharmaceutical and nutraceutical products to be represented by a locally licensed pharmaceutical importer or wholesale dealer. The local agent must hold a valid NDA import license and is responsible for the product registration application, NDA correspondence, and post-market surveillance obligations. This local partnership is mandatory before any product registration can proceed.",
  ],
  [
    "Manufacturer GMP inspection by NDA",
    "NDA may conduct a GMP inspection of the foreign manufacturing facility as part of the product registration process. NDA inspectors may visit the manufacturing site to verify WHO-GMP compliance, production processes, quality control systems, and documentation practices. Our WHO-GMP certification significantly reduces the scope of inspection, but we welcome and facilitate NDA inspection visits to our Jind, Haryana facility when required.",
  ],
  [
    "Submit CTD-format dossier",
    "NDA Uganda follows the CTD (Common Technical Document) format for product registration submissions. The dossier includes modules covering administrative information, quality (chemistry, manufacturing, controls), safety data, efficacy information, and product labeling. Admetus prepares the complete Module 3 (Quality) documentation including manufacturing process validation, analytical methods, stability data under ICH Zone IVa conditions, and Certificate of Analysis templates.",
  ],
  [
    "Provide Certificate of Pharmaceutical Product (WHO format)",
    "NDA requires a Certificate of Pharmaceutical Product (CPP) in WHO format issued by the Central Drugs Standard Control Organisation (CDSCO) of India. The CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in the country of origin. Admetus coordinates the CPP application with CDSCO and provides the authenticated certificate as part of the registration package.",
  ],
  [
    "Pre-registration laboratory analysis",
    "NDA requires laboratory analysis of product samples at the National Drug Quality Control Laboratory (NDQCL) in Kampala or at an NDA-approved laboratory. Testing covers identity, assay, dissolution, microbial limits, heavy metals, and compliance with pharmacopoeial specifications. We provide the required sample quantities with full Certificate of Analysis documentation to facilitate the laboratory evaluation process.",
  ],
  [
    "Import permit and customs clearance",
    "Once product registration is approved, each import shipment requires an import permit from NDA. Because Uganda is landlocked, all imports arrive via Mombasa port (Kenya) and are transported overland to Kampala via the Northern Corridor. The Ugandan importer's clearing agent processes the import permit and customs clearance through the Uganda Revenue Authority (URA) with the documentation package we provide.",
  ],
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Vitamin D deficiency is a growing health concern in Uganda, identified across urban populations and among women and children. The high-dose 60,000 IU softgel format is preferred for therapeutic loading doses, with weekly dosing protocols gaining adoption in Ugandan clinical practice. Kampala's major hospitals and pharmacies increasingly stock high-dose Vitamin D3 for deficiency treatment, immune support, and bone health.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Non-communicable diseases — particularly cardiovascular disease, hypertension, and diabetes — are a rapidly growing health burden in Uganda. Urbanization and dietary changes are driving NCD prevalence in Kampala, Jinja, Mbarara, and other urban centers. Omega-3 softgel capsules are increasingly recommended by Ugandan healthcare providers and are gaining availability through pharmacy retail channels across Uganda's major towns.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Micronutrient deficiency remains a critical health challenge in Uganda — iron, zinc, Vitamin A, and folate deficiencies are widespread, particularly among women of reproductive age and children under five. Multivitamin softgel capsules serve both the institutional market (government health programs, NGO nutrition interventions, USAID/PEPFAR-supported programs) and the growing pharmacy retail channel. Uganda's health sector reform is expanding access to essential nutritional supplements.",
  },
  {
    name: "Antioxidant Formulations (Lycopene + Grape Seed Extract)",
    relevance: "Preventive health awareness is growing in Uganda's urban middle class, driven by increasing NCD burden and health education campaigns. Antioxidant formulations targeting cardiovascular protection, immune support, and prostate health (Lycopene) are gaining traction in Kampala's pharmacy retail market and among health-conscious Ugandan consumers who are increasingly adopting preventive supplementation practices.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations serve Uganda's aging population and women's health segment. Calcium deficiency and osteoporosis are under-diagnosed but increasingly recognized in Ugandan clinical practice. The Calcitriol-Calcium-K2 combination is relevant for post-menopausal women and elderly patients, with prescriptions increasing at major referral hospitals including Mulago National Referral Hospital and regional referral facilities.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by NDA for product registration and by Ugandan importers for each shipment's customs clearance via the Northern Corridor from Mombasa.",
  },
  {
    doc: "Certificate of Pharmaceutical Product (WHO Format)",
    desc: "Issued by India's CDSCO in WHO format, the CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in India. NDA Uganda requires a WHO-format CPP as part of the product registration dossier. Admetus coordinates the CPP application with CDSCO.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. NDA Uganda requires WHO-GMP as baseline evidence of manufacturing quality — this certificate is a key document in the NDA registration dossier and may reduce the scope of an NDA facility inspection.",
  },
  {
    doc: "CTD-Format Quality Dossier (Module 3)",
    desc: "The Common Technical Document Module 3 (Quality) section includes manufacturing process description, validation data, analytical method details, stability study results under ICH Zone IVa conditions, and product specifications. Admetus prepares this module for the Ugandan importer to include in their NDA registration submission.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific products. Important for distribution in Uganda's Muslim-majority communities and for meeting the requirements of distributors serving diverse population segments across the country.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF Mombasa pricing, HS codes, EAC tariff classifications, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by Uganda Revenue Authority (URA) for import duty assessment and customs clearance at Malaba or Busia border crossings.",
  },
];

const faqs = [
  {
    q: "What is the NDA registration process for importing softgels to Uganda?",
    a: "The National Drug Authority (NDA) is Uganda's pharmaceutical regulatory body. All imported pharmaceutical and nutraceutical products must be registered with NDA before sale in Uganda. The process involves: appointing a local licensed pharmaceutical importer, submitting a CTD-format registration dossier, providing a WHO-GMP certificate and Certificate of Pharmaceutical Product (WHO format) from CDSCO India, and submitting product samples for laboratory analysis at the National Drug Quality Control Laboratory (NDQCL). NDA may also conduct a GMP inspection of the manufacturing facility. Registration typically takes 6-12 months and is valid for 5 years. Admetus provides the complete manufacturer documentation package for NDA registration.",
  },
  {
    q: "What documentation does Admetus provide for Ugandan import?",
    a: "We provide the complete manufacturer documentation package for NDA Uganda registration: Certificate of Analysis (batch-specific), WHO-GMP certificate, coordination for Certificate of Pharmaceutical Product (WHO format) from CDSCO, CTD Module 3 quality dossier (manufacturing process, validation, analytical methods, stability data for ICH Zone IVa), product specifications, Halal certificate, and commercial export documents (invoice, packing list, HS codes, EAC tariff classifications). We also provide product samples for NDQCL laboratory evaluation upon request.",
  },
  {
    q: "How long does shipping take from India to Uganda?",
    a: "Because Uganda is landlocked, all sea freight enters via Mombasa port (Kenya). Sea freight from JNPT (Mumbai) or Mundra Port to Mombasa takes approximately 10-14 days ocean transit time. From Mombasa, cargo is transported overland to Kampala via the Northern Corridor — approximately 1,150km by road through Kenya, crossing at Malaba or Busia border points. Overland transit from Mombasa to Kampala typically takes 3-5 days. Total transit from factory dispatch to warehouse delivery in Kampala is typically 14-18 days ocean plus overland, with customs clearance adding 3-7 business days.",
  },
  {
    q: "What is the MOQ for Uganda export orders?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and order configuration. For initial orders — particularly those tied to NDA registration and market testing — we offer pilot volumes. Once NDA registration is secured and market demand is established, we support full 20ft and 40ft container loads for ongoing supply. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Can Admetus products be distributed to other countries from Uganda?",
    a: "Yes. Uganda serves as a regional distribution hub for several neighboring landlocked and conflict-affected markets. Ugandan pharmaceutical distributors routinely serve cross-border markets including South Sudan, eastern DRC, Rwanda, and Burundi. An NDA-registered product in Uganda can be positioned for regional distribution, subject to each country's local registration requirements. Uganda's Kampala is a well-established pharmaceutical distribution hub for the Great Lakes region of Africa.",
  },
  {
    q: "Does Uganda accept NDA registration from other EAC countries as reference?",
    a: "The East African Community (EAC) has been working toward harmonized pharmaceutical registration across member states. While each country still requires its own registration, NDA Uganda may consider registration in other EAC countries (Kenya PPB, Tanzania TFDA, Rwanda FDA) as a reference during evaluation, which can expedite the review process. Having products registered in Kenya (PPB) before applying to NDA Uganda can be strategically advantageous. Admetus supports importers pursuing multi-country EAC registration strategies.",
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
      name: "Uganda",
      item: "https://www.admetuslifesciences.com/export/uganda/",
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

export default function UgandaPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Uganda — WHO-GMP certified, NDA documentation ready"
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
            India &rarr; Uganda
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;UGANDA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            Ugandan importers with NDA-ready documentation, Mombasa-Kampala
            corridor logistics, competitive pricing, and flexible
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
                UGANDA&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Uganda is a key pharmaceutical market in East Africa with a
                population of approximately 45 million — one of the youngest
                and fastest-growing populations on the continent. India is one
                of Uganda&apos;s most important pharmaceutical supplier
                nations, with Indian-manufactured medicines dominating
                Uganda&apos;s import market across antibiotics, anti-malarials,
                antiretrovirals, and an expanding range of nutraceutical
                supplements.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Uganda&apos;s healthcare landscape is shaped by both
                government investment and significant international donor
                funding, particularly through PEPFAR, the Global Fund, and
                USAID programs. While these programs have historically focused
                on infectious disease (HIV/AIDS, malaria, TB), there is a
                growing recognition of the non-communicable disease burden and
                the need for preventive health products including nutraceutical
                supplements.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The National Drug Authority (NDA) regulates all pharmaceutical
                and nutraceutical imports into Uganda. NDA registration
                follows a structured process requiring a local licensed
                pharmaceutical importer, CTD-format dossier submission,
                WHO-GMP certificate verification, Certificate of
                Pharmaceutical Product (WHO format) from CDSCO India, and
                pre-registration laboratory analysis at the National Drug
                Quality Control Laboratory (NDQCL). Indian manufacturers with
                WHO-GMP certification have an established pathway through this
                regulatory framework.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Uganda&apos;s disease burden is transitioning. While
                infectious diseases remain dominant, non-communicable diseases
                — cardiovascular disease, diabetes, cancer, and chronic
                respiratory disease — are rapidly growing, particularly in
                urban areas like Kampala, Jinja, and Mbarara. Micronutrient
                deficiency is widespread across the population. This shifting
                health landscape drives demand for nutraceutical supplements:
                multivitamins, Omega-3 for cardiovascular health, Vitamin D3
                for immune support, and bone health formulations.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* NDA Regulatory Section */}
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
                  NDA UGANDA REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The National Drug Authority (NDA) regulates all
                  pharmaceutical and nutraceutical imports into Uganda. The
                  registration process requires a local licensed importer,
                  CTD dossier, GMP verification, and
                  laboratory&nbsp;analysis.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {ndaSteps.map(([title, desc], i) => (
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

      {/* Mombasa-Kampala Corridor */}
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
                THE MOMBASA&ndash;KAMPALA NORTHERN&nbsp;CORRIDOR
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Uganda is a landlocked nation — all sea freight imports enter
                via Kenya&apos;s Mombasa port, approximately 1,150 kilometers
                from Kampala. The Northern Corridor is one of East
                Africa&apos;s most important trade routes, connecting
                Mombasa to Uganda, Rwanda, Burundi, South Sudan, and eastern
                DRC. This corridor is well-established for pharmaceutical
                cargo with regular trucking services and bonded transit
                arrangements.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The Malaba and Busia border crossing points between Kenya and
                Uganda are the primary entry points for containerized cargo
                destined for Kampala. The Northern Corridor Transit and
                Transport Coordination Authority (NCTTCA) facilitates trade
                along this route, and both Kenya and Uganda have implemented
                one-stop border post (OSBP) systems to reduce transit times
                and border delays.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Uganda also serves as a distribution hub for neighboring
                landlocked and conflict-affected markets. Kampala-based
                pharmaceutical distributors routinely supply South Sudan,
                eastern DRC, Rwanda, and Burundi. For Admetus, this means that
                a Ugandan import partnership extends beyond Uganda itself — it
                opens a distribution network across the Great Lakes region of
                Africa.
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
              Why Admetus for Uganda
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY UGANDAN IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE UGANDAN&nbsp;MARKET
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
              under your brand name for the Ugandan and East African market.
              See our{" "}
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
              DOCUMENTATION FOR NDA &amp;&nbsp;CUSTOMS
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
                  INDIA TO UGANDA SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-Uganda shipping corridor routes through
                  Mombasa port (Kenya), with overland transport to Kampala
                  via the Northern&nbsp;Corridor.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: JNPT (Mumbai) or Mundra Port",
                    "Products are dispatched from our Jind, Haryana facility to JNPT port in Mumbai (approximately 1,200km by road, 2-3 days transit) or Mundra Port in Gujarat. Both ports have regular container services to Mombasa. Cargo is consolidated, inspected, and cleared for export at the port's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Sea freight: India to Mombasa",
                    "Container vessel services from JNPT/Mundra to Mombasa operate on regular schedules with 10-14 days ocean transit time. Mombasa is the primary port serving Uganda and the broader Northern Corridor region. Pharmaceutical cargo is shipped in standard dry containers with temperature monitoring for heat-sensitive products.",
                  ],
                  [
                    "Overland: Mombasa to Kampala",
                    "From Mombasa port, containerized cargo is transported by truck approximately 1,150km to Kampala via the Northern Corridor, crossing the Kenya-Uganda border at Malaba or Busia. Both border points operate one-stop border post (OSBP) systems to facilitate trade. Overland transit from Mombasa to Kampala typically takes 3-5 days. Uganda Revenue Authority (URA) customs clearance typically takes 3-7 business days depending on documentation completeness.",
                  ],
                  [
                    "Packaging for transit",
                    "All Uganda-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants, tamper-evident sealing, and batch identification. Packaging is designed for the multi-modal transit (sea + overland) and East Africa's tropical climate. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-Mombasa-Kampala corridor.",
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
              UGANDA EXPORT Q&amp;A
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
              START YOUR UGANDA EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Uganda import
              requirements — NDA documentation, formulation selection, MOQ,
              pricing, and shipping via the Mombasa-Kampala corridor. We
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
                href="https://wa.me/917497841608?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Uganda.%20Please%20share%20details."
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

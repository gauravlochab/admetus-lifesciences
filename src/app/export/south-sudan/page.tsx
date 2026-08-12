import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification for a quality-starved market",
    desc: "South Sudan's pharmaceutical market is almost entirely import-dependent, with minimal domestic manufacturing capacity. Quality assurance is a critical concern — substandard and counterfeit medicines are a documented problem. Our WHO-GMP certification provides verifiable evidence of manufacturing quality, giving South Sudanese importers, NGOs, and international organizations confidence in the products they procure. WHO-GMP status is increasingly required by institutional buyers and donor-funded programs operating in South Sudan.",
  },
  {
    title: "Serving both humanitarian and commercial demand",
    desc: "South Sudan has a dual pharmaceutical market — humanitarian/institutional procurement (through UN agencies, NGOs, and international health organizations) and commercial private-sector import. Admetus can serve both channels. Our WHO-GMP certification and documentation standards meet the requirements of institutional procurement processes, while our competitive pricing and flexible MOQs serve private-sector importers and distributors operating in Juba and other major towns.",
  },
  {
    title: "Five international certifications including Halal",
    desc: "Beyond WHO-GMP, our facility holds FSSAI, GMP, HACCP, and Halal certifications. South Sudan has a small but present Muslim population, and Halal certification adds distribution flexibility. More importantly, our multi-certification profile meets the diverse procurement requirements of international organizations, NGOs, and private-sector importers who may have their own supplier qualification criteria beyond basic GMP compliance.",
  },
  {
    title: "Competitive pricing for an aid-dependent and cost-sensitive market",
    desc: "South Sudan is one of the world's poorest nations, and both commercial and humanitarian pharmaceutical procurement are extremely price-sensitive. Our Haryana facility operates with lower overhead than manufacturers in Mumbai, Hyderabad, or Ahmedabad. This cost advantage is critical for South Sudan, where affordability directly determines whether essential health products reach the population that needs them most.",
  },
  {
    title: "Flexible MOQ for a fragmented market",
    desc: "South Sudan's market is fragmented — distribution is concentrated in Juba with limited reach into rural areas and conflict-affected regions. Initial order volumes are typically small compared to larger East African markets. We support pilot-volume orders for market entry and institutional sample submission, with the ability to scale as distribution networks expand. This flexibility is essential for importers navigating South Sudan's challenging operating environment.",
  },
];

const regulatorySteps = [
  [
    "Identify import pathway — commercial or institutional",
    "South Sudan's pharmaceutical regulatory framework is minimal compared to established East African markets. The country's regulatory authority has limited capacity for formal product registration processes. Importers typically enter the market through one of two pathways: commercial private-sector import with basic customs documentation, or institutional/humanitarian procurement through UN agencies, NGOs, and international health organizations which have their own supplier qualification processes.",
  ],
  [
    "Obtain import authorization",
    "Commercial pharmaceutical imports require authorization from South Sudan's Ministry of Health or the relevant regulatory office. The specific requirements and processes can vary and may be subject to change given the country's evolving governance structures. We recommend that importers work with a local agent in Juba who is familiar with current import authorization procedures. Admetus provides all manufacturer documentation needed for any authorization process.",
  ],
  [
    "Provide manufacturer quality documentation",
    "Regardless of the import pathway, quality documentation is essential. We provide: WHO-GMP certificate, Certificate of Analysis (batch-specific), Certificate of Pharmaceutical Product (WHO format) from CDSCO India, product specifications, stability data, and manufacturing process documentation. For institutional procurement, we additionally provide documentation aligned with WHO prequalification standards and donor-specific requirements.",
  ],
  [
    "Coordinate logistics through Kenya or Djibouti",
    "South Sudan is landlocked and conflict-affected, with limited transport infrastructure. Most pharmaceutical imports enter via Mombasa port (Kenya) and are transported overland to Juba via Uganda. Alternative routes include via Djibouti/Port Sudan. The importer's logistics partner manages the multi-stage transit, and we provide all export documentation formatted for the specific routing selected.",
  ],
  [
    "Customs clearance at Juba or border point",
    "Customs clearance for pharmaceutical imports is processed at Juba's customs facilities or at border crossing points (Nimule from Uganda, or other entry points). The importer's clearing agent handles customs processing with the documentation package we provide — commercial invoice, packing list, COA, and import authorization evidence. Clearance timelines are variable and depend on current conditions.",
  ],
  [
    "Post-import quality verification",
    "For institutional and donor-funded procurement, post-import quality verification may be conducted by the procuring organization or a designated quality assurance partner. We provide comprehensive quality documentation for each batch and can facilitate third-party testing if required. For commercial imports, the importer takes responsibility for post-import quality management.",
  ],
];

const products = [
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Micronutrient deficiency is pervasive in South Sudan — one of the most nutritionally challenged nations in the world. Iron, Vitamin A, zinc, and folate deficiencies are widespread across the population, exacerbated by conflict, displacement, and food insecurity. Multivitamin softgel capsules serve both institutional distribution (NGO nutrition programs, UN agency procurement, refugee camp health facilities) and the limited commercial pharmacy channel in Juba. This is the highest-demand nutraceutical category in South Sudan.",
  },
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Vitamin D deficiency is documented in South Sudan's population, particularly among displaced populations, women, and children with limited dietary diversity. The high-dose 60,000 IU softgel format is practical for humanitarian and clinical settings where weekly dosing protocols are more feasible than daily supplementation. Health facilities in Juba and regional centers increasingly recognize Vitamin D supplementation as an important component of nutritional support programs.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "While South Sudan's primary health burden is infectious disease, non-communicable diseases are present and under-served, particularly among Juba's urban population. Omega-3 softgel capsules are available through pharmacy retail in Juba and are recommended by healthcare providers at the limited number of private clinics and hospitals serving the capital's relatively more affluent population.",
  },
  {
    name: "Antioxidant Formulations (Lycopene + Grape Seed Extract)",
    relevance: "Antioxidant formulations serve Juba's small but growing commercial pharmacy market and the private healthcare sector. As South Sudan's urban economy develops, there is emerging demand for preventive health products among the small middle class, NGO expatriates, and UN staff — a niche but consistent market segment that values quality-assured health supplements.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations address calcium deficiency and nutritional support needs in South Sudan's women's health segment. Calcium deficiency is common, particularly among women of reproductive age. These formulations serve health facilities in Juba and are relevant for maternal health programs run by international organizations operating in South Sudan.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Essential for all import pathways — commercial, institutional, and humanitarian. Required by institutional buyers and recommended for commercial imports to establish product quality credentials.",
  },
  {
    doc: "Certificate of Pharmaceutical Product (WHO Format)",
    desc: "Issued by India's CDSCO in WHO format, the CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in India. Required by institutional procurement processes and international organizations. Admetus coordinates the CPP application with CDSCO.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. This is the single most important quality credential for the South Sudan market — it provides verifiable quality assurance in a market where regulatory oversight is limited and substandard products are a documented concern.",
  },
  {
    doc: "Product Specifications & Stability Data",
    desc: "Comprehensive product specifications and stability study results under ICH Zone IVa conditions (hot and humid). Particularly important for South Sudan given the country's tropical climate and the extended supply chain transit times involved in reaching this landlocked, logistically challenging market.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific products. Provides additional procurement flexibility for institutional buyers serving diverse population groups and for commercial distribution in South Sudan's market.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF Mombasa pricing, HS codes, tariff classifications, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Formatted for the specific routing selected — whether via Mombasa/Uganda or via alternative corridors.",
  },
];

const faqs = [
  {
    q: "What is the regulatory process for importing softgels to South Sudan?",
    a: "South Sudan's pharmaceutical regulatory framework is still developing — the country gained independence in 2011 and has faced significant governance challenges. There is no fully established pharmaceutical registration process comparable to Kenya's PPB or Uganda's NDA. Pharmaceutical imports typically require authorization from the Ministry of Health or relevant regulatory office, along with quality documentation (WHO-GMP certificate, COA, CPP). For institutional/humanitarian procurement, the procuring organization (UN agency, NGO) applies its own supplier qualification process. We recommend working with a local agent in Juba who is familiar with current import procedures, which can change. Admetus provides all manufacturer documentation needed for any import pathway.",
  },
  {
    q: "How does pharmaceutical supply reach South Sudan?",
    a: "South Sudan is landlocked and has limited transport infrastructure. The primary pharmaceutical supply route is: sea freight from India to Mombasa port (Kenya), overland through Kenya to Uganda, then overland from Uganda to Juba via the Nimule border crossing. Alternative routes include via Djibouti port to Port Sudan and overland, though this route is less commonly used for commercial pharmaceutical cargo. Air freight to Juba International Airport is used for urgent humanitarian supplies but is significantly more expensive. Total transit from India to Juba via the Mombasa-Uganda route is typically 20-30 days plus customs clearance.",
  },
  {
    q: "What is the MOQ for South Sudan export orders?",
    a: "MOQs are flexible and calibrated for South Sudan's market realities. The country has a population of approximately 12 million with limited distribution infrastructure concentrated in Juba. For initial orders — particularly for market entry or institutional procurement samples — we offer pilot volumes. For humanitarian procurement, we work with the procuring organization's order specifications. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Can Admetus supply to UN agencies and NGOs operating in South Sudan?",
    a: "Yes. Our WHO-GMP certification, comprehensive quality documentation, and experience with institutional procurement standards position us to serve as a supplier to organizations operating in South Sudan. We can provide documentation aligned with UN procurement requirements, WHO prequalification standards, and donor-specific quality requirements. We support both direct procurement by international organizations and indirect supply through authorized local importers who serve institutional clients in South Sudan.",
  },
  {
    q: "What are the payment and trade terms for South Sudan?",
    a: "South Sudan's financial system presents challenges — the country has experienced currency instability, limited banking infrastructure, and foreign exchange constraints. For commercial orders, we typically require advance payment or confirmed letter of credit through an international bank. For institutional procurement through UN agencies or established international NGOs, standard institutional payment terms apply. We work with each buyer to find a payment structure that manages risk for both parties. Details are discussed during the inquiry process.",
  },
  {
    q: "Is South Sudan safe for pharmaceutical trade?",
    a: "South Sudan has experienced significant conflict since independence in 2011, with a fragile peace process ongoing. Security conditions vary by region — Juba and some state capitals are generally stable for commercial activity, while other areas may have active conflict or access restrictions. Pharmaceutical trade is concentrated in Juba and operates through established commercial and humanitarian supply chains. Indian pharmaceutical exports to South Sudan continue through both commercial and institutional channels. We recommend that importers and their logistics partners maintain current awareness of security conditions and plan logistics accordingly.",
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
      name: "South Sudan",
      item: "https://www.admetuslifesciences.com/export/south-sudan/",
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

export default function SouthSudanPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to South Sudan — WHO-GMP certified, quality documentation ready"
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
            India &rarr; South Sudan
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;SOUTH&nbsp;SUDAN
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            South Sudan&apos;s humanitarian and commercial pharmaceutical
            demand with quality-assured products, flexible volumes, and
            multi-corridor shipping&nbsp;options.
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
                SOUTH SUDAN&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                South Sudan is the world&apos;s youngest nation, having
                gained independence from Sudan in 2011. With a population of
                approximately 12 million, South Sudan is almost 100%
                import-dependent for pharmaceutical and nutraceutical
                products — the country has virtually no domestic
                pharmaceutical manufacturing capacity. This total
                import-dependence creates a sustained and growing demand for
                quality-assured pharmaceutical products from established
                international manufacturers.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                India is one of South Sudan&apos;s most important
                pharmaceutical supplier nations. Indian-manufactured
                antibiotics, anti-malarials, antiretrovirals, and basic
                medicines form the backbone of South Sudan&apos;s
                pharmaceutical supply — both through commercial private-sector
                imports and through institutional procurement by UN agencies,
                international NGOs, and donor-funded health programs. South
                Sudan relies heavily on Indian pharmaceutical manufacturers
                for affordable, quality-assured essential medicines.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                South Sudan&apos;s pharmaceutical market operates through two
                parallel channels. The humanitarian/institutional channel —
                driven by UN agencies (UNICEF, WHO, UNFPA), international
                NGOs (MSF, IMC, IRC), and donor-funded programs (Global Fund,
                PEPFAR, USAID) — accounts for a significant portion of
                pharmaceutical supply, particularly for essential medicines,
                anti-malarials, and HIV/AIDS treatment. The commercial
                private-sector channel operates through importers and
                distributors based primarily in Juba, serving private
                pharmacies, clinics, and hospitals.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                South Sudan&apos;s disease burden is dominated by infectious
                diseases — malaria, respiratory infections, diarrheal
                diseases, HIV/AIDS, and tuberculosis. However, micronutrient
                deficiency is pervasive and severe, driven by conflict-related
                food insecurity, population displacement, and limited
                healthcare access. Multivitamin supplementation, Vitamin D3,
                and nutritional support products are in high demand across
                both humanitarian and commercial channels.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Regulatory Section */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">
                  Regulatory &amp; Import
                </span>
                <h2
                  className="mt-3 display-section text-[var(--foreground)] mb-4"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
                >
                  SOUTH SUDAN IMPORT&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  South Sudan&apos;s pharmaceutical regulatory framework is
                  still developing. Import processes involve authorization
                  from the Ministry of Health and quality documentation
                  verification, with specifics varying by import&nbsp;pathway.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {regulatorySteps.map(([title, desc], i) => (
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

      {/* Youngest Nation */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <span className="label-text text-[var(--gold)]">
                Strategic Context
              </span>
              <h2
                className="mt-3 display-section text-[var(--foreground)] mb-4"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
              >
                SOUTH SUDAN — THE WORLD&apos;S YOUNGEST&nbsp;NATION
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                South Sudan gained independence on 9 July 2011, making it the
                world&apos;s youngest nation. Since independence, the country
                has faced significant challenges — civil conflict,
                displacement of millions of people, economic instability,
                and severe healthcare infrastructure gaps. These challenges
                have created a pharmaceutical market that is almost entirely
                dependent on imports and where demand is driven by both
                humanitarian need and emerging commercial activity.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Despite these challenges, South Sudan represents a real and
                ongoing market for quality pharmaceutical products. The
                presence of major international organizations — UNMISS (UN
                Mission in South Sudan), WHO, UNICEF, MSF, and dozens of
                international NGOs — creates institutional procurement demand
                that operates through established supply chains. The
                commercial private-sector market in Juba, while smaller, is
                growing as stability improves in the capital.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                For Admetus, South Sudan is a market where our WHO-GMP
                certification provides critical quality assurance in an
                environment where substandard medicines are a documented risk.
                We serve importers and organizations that are committed to
                delivering quality health products to a population with
                enormous unmet healthcare needs. Our flexible volumes, strong
                documentation, and multi-corridor shipping capability make us
                a reliable supplier for this logistically challenging market.
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
              Why Admetus for South Sudan
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY SOUTH SUDAN IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR SOUTH&nbsp;SUDAN
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
              under your brand name or in institutional packaging for the
              South Sudan market.
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
              DOCUMENTATION FOR IMPORT &amp;&nbsp;PROCUREMENT
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
                  INDIA TO SOUTH SUDAN SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  South Sudan is reached via multiple shipping corridors —
                  primarily through Mombasa (Kenya) via Uganda, with
                  alternative routes through Djibouti or Port&nbsp;Sudan.
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
                    "Primary route: India to Mombasa to Juba via Uganda",
                    "The primary shipping route is: JNPT/Mundra to Mombasa (10-14 days ocean transit), then overland through Kenya to Uganda (3-5 days), then Uganda to Juba via the Nimule border crossing (1-2 days). Total transit from port to Juba is approximately 20-30 days including border processing. This is the most established and commonly used route for commercial pharmaceutical imports to South Sudan.",
                  ],
                  [
                    "Alternative route: via Djibouti or Port Sudan",
                    "Alternative routes include sea freight to Djibouti (10-14 days from JNPT) with overland transit through Ethiopia and South Sudan's northern border, or via Port Sudan with overland transit through Sudan. These routes are less commonly used for commercial pharmaceutical cargo but may be relevant for specific logistics arrangements or humanitarian supply operations serving northern South Sudan.",
                  ],
                  [
                    "Packaging for extended transit",
                    "All South Sudan-bound shipments are packed in pharmaceutical-grade export packaging designed for extended multi-modal transit — blister packs or bottles in outer cartons, master cartons with desiccants, tamper-evident sealing, and batch identification. Packaging is engineered for South Sudan's tropical climate and the extended transit times involved in reaching this landlocked market. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners experienced in the South Sudan corridor.",
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
              SOUTH SUDAN EXPORT Q&amp;A
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
              START YOUR SOUTH SUDAN EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your South Sudan import
              requirements — quality documentation, formulation selection,
              MOQ, pricing, and multi-corridor shipping options. We respond
              within 48&nbsp;hours.
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
                href="https://wa.me/919729977795?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20South%20Sudan.%20Please%20share%20details."
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

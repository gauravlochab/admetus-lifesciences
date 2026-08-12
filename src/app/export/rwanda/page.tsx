import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyAdmetus = [
  {
    title: "WHO-GMP certification accepted by Rwanda FDA",
    desc: "The Rwanda Food and Drugs Authority (Rwanda FDA) recognizes WHO-GMP certification as evidence of manufacturing quality compliance. Admetus holds WHO-GMP certification for its Jind, Haryana facility, which streamlines the Rwanda FDA product registration process. WHO-GMP status is a baseline requirement for pharmaceutical imports into Rwanda and reduces the scope of additional manufacturing site inspections.",
  },
  {
    title: "Rwanda's ambitious healthcare investment agenda",
    desc: "Rwanda has earned the reputation of 'Africa's Singapore' through its extraordinary governance reforms, technology adoption, and healthcare investment. Rwanda's community-based health insurance program (Mutuelle de Sante) covers over 90% of the population — one of the highest coverage rates in Africa. This universal coverage creates sustained demand for quality pharmaceutical and nutraceutical products across the population, not just the urban elite.",
  },
  {
    title: "Five international certifications including Halal",
    desc: "Beyond WHO-GMP, our facility holds FSSAI, GMP, HACCP, and Halal certifications. Rwanda has a small but growing Muslim population — Halal certification adds distribution flexibility. More importantly, Rwanda's position as a trade hub for the Great Lakes region means that Halal certification enables cross-border distribution to Muslim-majority areas in neighboring countries. This multi-certification profile covers Rwanda FDA requirements across market segments.",
  },
  {
    title: "Competitive pricing for a quality-conscious market",
    desc: "Rwanda is a quality-conscious pharmaceutical market where the government actively combats substandard and counterfeit medicines. Our WHO-GMP certification aligns with Rwanda's stringent quality requirements, while our Haryana facility's lower overhead — compared to manufacturers in Mumbai, Hyderabad, or Ahmedabad — enables competitive pricing. Rwanda's EAC membership provides zero or reduced duty on essential medicines, further improving landed cost economics.",
  },
  {
    title: "Flexible MOQ for market entry",
    desc: "We understand that Rwandan importers — particularly those registering new products with Rwanda FDA — need flexibility in initial order sizes. Rwanda is a 13-million population market, and initial order volumes reflect this market size. We support pilot-volume orders for market testing and Rwanda FDA sample submission, with the ability to scale as market demand grows. This flexibility is critical for importers building a nutraceutical portfolio in Rwanda's evolving pharmacy retail market.",
  },
];

const rwandaFdaSteps = [
  [
    "Appoint a local authorized agent",
    "Rwanda FDA requires all imported pharmaceutical and nutraceutical products to be represented by a locally authorized agent or company registered in Rwanda. The local agent must hold a valid import license and is responsible for the product registration application, Rwanda FDA correspondence, and post-market obligations. This local partnership is mandatory before any product registration can proceed.",
  ],
  [
    "Manufacturer GMP verification",
    "Rwanda FDA verifies the GMP status of foreign manufacturing facilities as part of the product registration process. Rwanda FDA may conduct a desktop review of GMP documentation or schedule an on-site inspection. Our WHO-GMP certification significantly reduces the scope of verification, but we welcome and facilitate Rwanda FDA inspection visits to our Jind, Haryana facility when required.",
  ],
  [
    "Submit CTD-format dossier",
    "Rwanda FDA follows the CTD (Common Technical Document) format for product registration submissions. The dossier includes modules covering administrative information, quality (chemistry, manufacturing, controls), safety data, efficacy information, and product labeling. Admetus prepares the complete Module 3 (Quality) documentation including manufacturing process validation, analytical methods, stability data under ICH Zone IVa conditions, and Certificate of Analysis templates.",
  ],
  [
    "Provide Certificate of Pharmaceutical Product (WHO format)",
    "Rwanda FDA requires a Certificate of Pharmaceutical Product (CPP) in WHO format issued by the Central Drugs Standard Control Organisation (CDSCO) of India. The CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in the country of origin. Admetus coordinates the CPP application with CDSCO and provides the authenticated certificate as part of the registration package.",
  ],
  [
    "Laboratory analysis and quality verification",
    "Rwanda FDA may require laboratory analysis of product samples to verify quality, identity, and compliance with pharmacopoeial specifications. Testing may be conducted at Rwanda FDA's laboratory facilities or at approved regional laboratories. We provide the required sample quantities with full Certificate of Analysis documentation to facilitate the quality verification process.",
  ],
  [
    "Import permit and customs clearance",
    "Once product registration is approved, each import shipment requires an import permit from Rwanda FDA. Because Rwanda is landlocked, imports typically arrive via Mombasa port (Kenya) through the Northern Corridor, or via Dar es Salaam (Tanzania) through the Central Corridor. Customs clearance is processed through the Rwanda Revenue Authority (RRA) with the documentation package we provide.",
  ],
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    relevance: "Vitamin D deficiency is a health concern in Rwanda, particularly among urban populations. Despite Rwanda's equatorial location, factors including indoor lifestyles and nutritional gaps contribute to deficiency. The high-dose 60,000 IU softgel format is preferred for therapeutic loading doses, with prescriptions increasing at major hospitals in Kigali. Rwanda's community health insurance system (Mutuelle de Sante) supports access to essential health products.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    relevance: "Non-communicable diseases are a growing health burden in Rwanda. The Rwandan government has identified NCDs as a priority health challenge, with cardiovascular disease, diabetes, and hypertension rates increasing in urban areas. Omega-3 softgel capsules are increasingly available through pharmacy retail in Kigali and other major towns, driven by physician recommendations and growing health awareness among Rwanda's expanding middle class.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    relevance: "Micronutrient deficiency remains a health challenge in Rwanda, particularly among women of reproductive age and children. Rwanda's government and international partners (UNICEF, USAID) have implemented nutrition programs that drive demand for multivitamin supplements across both institutional and retail channels. Rwanda's high health insurance coverage means that a larger proportion of the population has access to pharmaceutical and nutritional products.",
  },
  {
    name: "Antioxidant Formulations (Lycopene + Grape Seed Extract)",
    relevance: "Preventive health awareness is growing in Rwanda, aligned with the country's broader health modernization agenda. Kigali's growing middle class and health-conscious consumers are increasingly adopting preventive supplementation. Antioxidant formulations targeting cardiovascular protection and immune support are positioned for growth in Rwanda's pharmacy retail channel.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    relevance: "Bone health formulations serve Rwanda's women's health segment and aging population. The Calcitriol-Calcium-K2 combination is relevant for post-menopausal women and elderly patients. Rwanda's healthcare infrastructure — including district hospitals and referral facilities — increasingly recognizes and prescribes bone health supplements as part of comprehensive women's health care.",
  },
];

const exportDocs = [
  {
    doc: "Certificate of Analysis (COA)",
    desc: "Batch-specific quality certificate covering identity testing, assay, dissolution, microbial limits, heavy metals, and physical parameters. Required by Rwanda FDA for product registration and by Rwandan importers for each shipment's customs clearance.",
  },
  {
    doc: "Certificate of Pharmaceutical Product (WHO Format)",
    desc: "Issued by India's CDSCO in WHO format, the CPP confirms that the product is registered, manufactured under GMP conditions, and freely sold in India. Rwanda FDA requires a WHO-format CPP as part of the product registration dossier. Admetus coordinates the CPP application with CDSCO.",
  },
  {
    doc: "WHO-GMP Certificate",
    desc: "World Health Organization Good Manufacturing Practice certificate for the manufacturing facility. Rwanda FDA requires WHO-GMP as baseline evidence of manufacturing quality — this certificate is a key document in the Rwanda FDA registration dossier and may reduce the scope of facility inspection requirements.",
  },
  {
    doc: "CTD-Format Quality Dossier (Module 3)",
    desc: "The Common Technical Document Module 3 (Quality) section includes manufacturing process description, validation data, analytical method details, stability study results under ICH Zone IVa conditions, and product specifications. Admetus prepares this module for the Rwandan importer to include in their Rwanda FDA registration submission.",
  },
  {
    doc: "Halal Certificate",
    desc: "Halal certification for the manufacturing facility and specific products. Provides additional distribution flexibility in Rwanda and enables cross-border trade to Muslim-majority communities in neighboring countries accessible through Rwanda's trade networks.",
  },
  {
    doc: "Commercial Invoice & Packing List",
    desc: "Detailed commercial invoice with FOB/CIF Mombasa or Dar es Salaam pricing, HS codes, EAC tariff classifications, and payment terms. Packing list with batch numbers, quantities, net/gross weights, and container loading details. Required by Rwanda Revenue Authority (RRA) for import duty assessment and customs clearance.",
  },
];

const faqs = [
  {
    q: "What is the Rwanda FDA registration process for importing softgels?",
    a: "Rwanda FDA is Rwanda's pharmaceutical regulatory body. All imported pharmaceutical and nutraceutical products must be registered with Rwanda FDA before sale in Rwanda. The process involves: appointing a local authorized agent, submitting a CTD-format registration dossier, providing a WHO-GMP certificate and Certificate of Pharmaceutical Product (WHO format) from CDSCO India, and undergoing quality verification which may include laboratory analysis. Rwanda FDA may also verify the manufacturing facility's GMP status. Registration timelines vary but are typically 6-12 months. Admetus provides the complete manufacturer documentation package for Rwanda FDA registration.",
  },
  {
    q: "What documentation does Admetus provide for Rwandan import?",
    a: "We provide the complete manufacturer documentation package for Rwanda FDA registration: Certificate of Analysis (batch-specific), WHO-GMP certificate, coordination for Certificate of Pharmaceutical Product (WHO format) from CDSCO, CTD Module 3 quality dossier (manufacturing process, validation, analytical methods, stability data for ICH Zone IVa), product specifications, Halal certificate, and commercial export documents (invoice, packing list, HS codes, EAC tariff classifications). We also provide product samples for laboratory evaluation upon request.",
  },
  {
    q: "How long does shipping take from India to Rwanda?",
    a: "Because Rwanda is landlocked, imports arrive via one of two routes. The primary route is via Mombasa port (Kenya) — sea freight from JNPT/Mundra to Mombasa takes 10-14 days, then overland via the Northern Corridor through Uganda to Kigali, approximately 1,700km total from Mombasa, taking 5-8 days by road. The alternative route is via Dar es Salaam (Tanzania) — sea freight takes 12-16 days, then overland approximately 1,500km to Kigali, taking 4-7 days. Total transit from factory dispatch to warehouse delivery in Kigali is typically 16-20 days ocean plus overland, with customs clearance adding 3-7 business days.",
  },
  {
    q: "What is the MOQ for Rwanda export orders?",
    a: "MOQs are flexible and calibrated for Rwanda's 13-million population market. For initial orders — particularly those tied to Rwanda FDA registration and market testing — we offer pilot volumes appropriate for market entry. Once Rwanda FDA registration is secured and market demand is established, we scale supply accordingly. Rwanda's market size means that initial volumes are smaller than larger East African markets, and we structure our MOQs to reflect this reality. Specific MOQ and pricing are confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "Does Rwanda accept registration from other EAC countries as reference?",
    a: "The East African Community (EAC) has been working toward harmonized pharmaceutical registration. Rwanda FDA may consider registration in other EAC countries (Kenya PPB, Uganda NDA, Tanzania TFDA) as a reference during evaluation, which can expedite the review process. Rwanda is also a member of the EAC Medicines Regulatory Harmonization (MRH) initiative. Having products registered in Kenya or Uganda before applying to Rwanda FDA can be strategically advantageous. Admetus supports importers pursuing multi-country EAC registration strategies.",
  },
  {
    q: "Why is Rwanda called 'Africa's Singapore' and what does it mean for pharma?",
    a: "Rwanda has earned this comparison through its remarkable governance reforms, technology adoption, anti-corruption measures, and ease of doing business. For pharmaceutical importers, this translates to: transparent and predictable regulatory processes at Rwanda FDA, efficient customs clearance, low corruption, strong intellectual property protections, and a government that actively promotes quality in its healthcare supply chain. Rwanda's Mutuelle de Sante community health insurance program covers over 90% of the population, creating broad-based demand for quality health products rather than demand limited to urban elites.",
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
      name: "Rwanda",
      item: "https://www.admetuslifesciences.com/export/rwanda/",
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

export default function RwandaPage() {
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
          alt="Softgel capsules manufactured by Admetus Lifesciences for export to Rwanda — WHO-GMP certified, Rwanda FDA documentation ready"
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
            India &rarr; Rwanda
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE
            <br />
            MANUFACTURER INDIA
            <br />
            FOR&nbsp;RWANDA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India — serving
            Rwandan importers with Rwanda FDA-ready documentation,
            Mombasa/Dar es Salaam corridor logistics, competitive pricing,
            and flexible order&nbsp;volumes.
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
                RWANDA&apos;S PHARMACEUTICAL IMPORT&nbsp;LANDSCAPE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Rwanda is one of Africa&apos;s most remarkable healthcare
                stories — a nation of 13 million that has achieved universal
                health insurance coverage exceeding 90% through its
                community-based Mutuelle de Sante program. Often called
                &ldquo;Africa&apos;s Singapore&rdquo; for its governance
                quality, technology adoption, and ease of doing business,
                Rwanda represents a uniquely attractive pharmaceutical market
                for quality-focused Indian manufacturers.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Rwanda&apos;s healthcare investment trajectory is exceptional.
                The government has committed to building a world-class
                healthcare system, with investments in hospital
                infrastructure, medical education, and pharmaceutical supply
                chain modernization. Rwanda is constructing Africa&apos;s
                first mRNA vaccine manufacturing facility and has deployed
                drone-based medical supply delivery (Zipline) across the
                country. This forward-looking healthcare agenda creates a
                market that values quality, innovation, and reliable supply
                partnerships.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                The Rwanda Food and Drugs Authority (Rwanda FDA) regulates all
                pharmaceutical and nutraceutical imports. Rwanda FDA has
                earned a reputation for professionalism and transparency,
                following CTD-format dossier requirements, WHO-GMP
                verification, and quality testing protocols aligned with
                international standards. Indian manufacturers with WHO-GMP
                certification have an established pathway through Rwanda
                FDA&apos;s regulatory framework.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Rwanda&apos;s health priorities span both infectious diseases
                (HIV/AIDS, malaria, tuberculosis) and a rapidly growing NCD
                burden. Cardiovascular disease, diabetes, and cancer are
                increasing, particularly in Kigali and other urban areas.
                Meanwhile, micronutrient deficiency — especially iron,
                Vitamin A, and zinc — remains a challenge among women and
                children. This dual burden drives demand for both therapeutic
                and preventive nutraceutical products including
                multivitamins, Omega-3, Vitamin D3, and bone health
                formulations.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Rwanda FDA Regulatory Section */}
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
                  RWANDA FDA REGISTRATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The Rwanda Food and Drugs Authority (Rwanda FDA) regulates
                  all pharmaceutical and nutraceutical imports into Rwanda.
                  The registration process requires a local authorized agent,
                  CTD dossier, GMP verification, and
                  quality&nbsp;testing.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {rwandaFdaSteps.map(([title, desc], i) => (
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

      {/* Africa's Singapore */}
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
                RWANDA — AFRICA&apos;S SINGAPORE&nbsp;AMBITION
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Rwanda&apos;s transformation over the past two decades has
                been extraordinary. From the devastation of the 1994 genocide,
                Rwanda has built one of Africa&apos;s most efficient
                governance systems, lowest corruption levels, and most
                business-friendly regulatory environments. For pharmaceutical
                importers, this translates to transparent regulatory
                processes, efficient customs clearance, reliable rule of law,
                and a government that actively promotes quality in its
                healthcare supply chain.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Rwanda is landlocked — imports enter via Mombasa port (Kenya)
                through the Northern Corridor, or via Dar es Salaam
                (Tanzania) through the Central Corridor. Despite its
                landlocked position, Rwanda has invested in logistics
                efficiency, including the Kigali Logistics Platform and
                streamlined customs processes through the Rwanda Revenue
                Authority (RRA). Rwanda also serves as a trade hub for the
                Great Lakes region, with established trade connections to
                Burundi, eastern DRC, and Uganda.
              </p>
              <p
                className="body-text text-[var(--text-cream)]"
                style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                For Admetus, Rwanda represents a market where quality is
                valued over price alone, where regulatory processes are
                predictable and professional, and where a long-term
                partnership approach yields the best results. We structure our
                Rwanda partnerships for sustained supply and regulatory
                compliance, supporting importers who share Rwanda&apos;s
                commitment to healthcare quality.
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
              Why Admetus for Rwanda
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              WHY RWANDAN IMPORTERS CHOOSE&nbsp;US
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
              SOFTGEL FORMULATIONS FOR THE RWANDAN&nbsp;MARKET
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
              under your brand name for the Rwandan market.
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
              DOCUMENTATION FOR RWANDA FDA &amp;&nbsp;CUSTOMS
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
                  INDIA TO RWANDA SHIPPING&nbsp;ROUTE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--text-cream)] max-w-[52ch]"
                  style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}
                >
                  The India-Rwanda shipping corridor routes through Mombasa
                  port (Kenya) or Dar es Salaam (Tanzania), with overland
                  transport to Kigali via the Northern or Central&nbsp;Corridor.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {[
                  [
                    "Origin: JNPT (Mumbai) or Mundra Port",
                    "Products are dispatched from our Jind, Haryana facility to JNPT port in Mumbai (approximately 1,200km by road, 2-3 days transit) or Mundra Port in Gujarat. Both ports have regular container services to Mombasa and Dar es Salaam. Cargo is consolidated, inspected, and cleared for export at the port's pharmaceutical cargo handling facilities.",
                  ],
                  [
                    "Sea freight: India to Mombasa or Dar es Salaam",
                    "Container vessel services from JNPT/Mundra to Mombasa operate with 10-14 days ocean transit time; to Dar es Salaam, 12-16 days. The choice of port depends on routing efficiency and importer preference. Both ports connect to Kigali via established trade corridors. Pharmaceutical cargo is shipped in standard dry containers with temperature monitoring.",
                  ],
                  [
                    "Overland: Port to Kigali",
                    "Via the Northern Corridor: from Mombasa through Kenya and Uganda to Kigali, approximately 1,700km total, 5-8 days by road. Via the Central Corridor: from Dar es Salaam through Tanzania to Kigali, approximately 1,500km, 4-7 days by road. Rwanda Revenue Authority (RRA) customs clearance typically takes 3-7 business days. Total transit from factory to Kigali warehouse is typically 16-20 days plus customs clearance.",
                  ],
                  [
                    "Packaging for transit",
                    "All Rwanda-bound shipments are packed in pharmaceutical-grade export packaging — blister packs or bottles in outer cartons, master cartons with desiccants, tamper-evident sealing, and batch identification. Packaging is designed for multi-modal transit (sea + overland) through East Africa's varied climate zones. We coordinate with the buyer's freight forwarder or recommend trusted logistics partners for the India-Rwanda corridor.",
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
              RWANDA EXPORT Q&amp;A
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
              START YOUR RWANDA EXPORT&nbsp;ORDER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Contact our export team to discuss your Rwanda import
              requirements — Rwanda FDA documentation, formulation selection,
              MOQ, pricing, and shipping via the Mombasa or Dar es Salaam
              corridor. We respond within 48&nbsp;hours.
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
                href="https://wa.me/919729977795?text=Hi%2C%20I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Rwanda.%20Please%20share%20details."
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

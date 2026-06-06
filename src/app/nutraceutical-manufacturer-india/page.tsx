import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const productCategories = [
  {
    category: "Calcium & Bone Health",
    products: [
      "Cholecalciferol (Vitamin D3) 60,000 IU Softgel Capsules",
      "Calcitriol + Calcium Citrate Maleate + Vitamin K2-7 + Zinc Softgel Capsules",
    ],
    desc: "High-potency bone health formulations for therapeutic and preventive supplementation. Vitamin D3 60K IU is among our highest-volume nutraceutical products, supplied to hospitals, pharmacy chains, and brand owners across India.",
  },
  {
    category: "Omega & Heart Health",
    products: [
      "Omega-3 Fatty Acids + Vitamin E Softgel Capsules",
      "Krill Oil Softgel Capsules",
    ],
    desc: "Cardiovascular and lipid-management formulations with premium marine-sourced omega-3 fatty acids. Krill oil softgels deliver superior bioavailability with naturally occurring astaxanthin.",
  },
  {
    category: "Antioxidant & Multivitamin",
    products: [
      "Ginseng + Astaxanthin Multivitamin Softgel Capsules",
      "Glutathione + Alpha Lipoic Acid + Grape Seed Extract Softgel Capsules",
      "Lycopene + Grape Seed Extract Multivitamin Softgel Capsules",
    ],
    desc: "Advanced antioxidant blends targeting oxidative stress, skin health, and cellular protection. Glutathione + ALA is a high-demand formulation in the dermatology and wellness supplement segments.",
  },
  {
    category: "Women's Health",
    products: [
      "Soy Isoflavones + Calcium Citrate Maleate + Vitamin D3 Softgel Capsules",
    ],
    desc: "Nutraceutical formulations designed for menopausal bone health support, hormonal balance, and calcium supplementation in women over 40.",
  },
  {
    category: "Men's Health",
    products: [
      "Ginkgo Biloba + Tribulus Terrestris Softgel Capsules",
    ],
    desc: "Herbal-extract softgel formulations for male vitality, cognitive function, and physical performance. Standardized botanical extracts ensure consistent potency.",
  },
  {
    category: "Herbal & Specialty",
    products: [
      "Nigella Sativa (Kalonji) Oil Softgel Capsules",
    ],
    desc: "Cold-pressed black seed oil in softgel format for immunity, anti-inflammatory support, and traditional wellness applications. Strong demand in Middle East and South-East Asian export markets.",
  },
];

const marketAdvantages = [
  {
    title: "Rapidly growing domestic market",
    desc: "India's nutraceutical market is projected to grow from $375M to $685M between 2024 and 2030, driven by rising health awareness, preventive healthcare adoption, and expanding middle-class spending on dietary supplements.",
  },
  {
    title: "Cost-competitive manufacturing base",
    desc: "Indian nutraceutical manufacturers offer 40-60% lower production costs compared to US and European facilities, without compromising WHO-GMP quality standards. This cost advantage extends to raw materials, labour, and regulatory compliance.",
  },
  {
    title: "WHO-GMP certified infrastructure",
    desc: "India has one of the highest concentrations of WHO-GMP certified pharmaceutical and nutraceutical facilities globally. Admetus Lifesciences operates from a fully certified facility in Jind, Haryana with FSSAI, GMP, HACCP, and Halal certifications.",
  },
  {
    title: "Skilled pharmaceutical workforce",
    desc: "India produces over 200,000 pharmacy graduates annually. Our facility employs a 90%+ women workforce trained on-site in encapsulation, quality control, blister packing, and dispatch protocols — delivering precision at scale.",
  },
  {
    title: "Strategic export positioning",
    desc: "India is the world's third-largest pharmaceutical producer by volume. Proximity to JNPT and Mundra ports, established export documentation systems, and bilateral trade agreements with 190+ countries make India an ideal nutraceutical manufacturing hub for global distribution.",
  },
  {
    title: "Regulatory alignment",
    desc: "Indian nutraceutical manufacturers operate under FSSAI (domestic) and can align production with international frameworks — US FDA 21 CFR, EU food supplement directives, GCC Halal requirements, and ASEAN regulatory standards.",
  },
];

const services = [
  {
    title: "Contract Manufacturing",
    desc: "End-to-end nutraceutical softgel capsule manufacturing under your specifications. We handle raw material sourcing, encapsulation, quality testing, packaging, and dispatch. Ideal for brands that have established formulations and need a reliable Indian manufacturing partner.",
    link: "/contract-manufacturing/",
    linkText: "Contract manufacturing details",
  },
  {
    title: "Third Party Manufacturing",
    desc: "Manufacture nutraceutical products under your brand name with full regulatory compliance. We provide formulation support, manufacturing, FSSAI labelling compliance, and finished goods ready for market. Suitable for pharma distributors and healthcare companies entering the nutraceutical segment.",
    link: "/third-party-manufacturer-india/",
    linkText: "Third party manufacturing details",
  },
  {
    title: "Private Label Manufacturing",
    desc: "Launch your own nutraceutical softgel brand without building manufacturing infrastructure. Choose from our 80+ ready formulations or develop custom blends. We handle everything from capsule production to branded packaging and labelling.",
    link: "/private-label-softgel-manufacturer-india/",
    linkText: "Private label service details",
  },
  {
    title: "Custom Formulation Development",
    desc: "Our R&D team develops bespoke nutraceutical softgel formulations to your therapeutic and market requirements. From composition design and stability studies to pilot batch production and regulatory alignment — we bring your product concept to manufacturing reality.",
    link: "/products/",
    linkText: "View existing formulations",
  },
  {
    title: "Export & International Supply",
    desc: "Export-ready nutraceutical manufacturing with full documentation support — Certificate of Analysis (COA), Free Sale Certificate, ingredient declarations, Halal certification for GCC markets, and country-specific regulatory paperwork. Sea freight via JNPT/Mundra; air freight via Delhi.",
    link: "/export/",
    linkText: "Export capabilities",
  },
];

const faqs = [
  {
    q: "What nutraceutical products does Admetus manufacture?",
    a: "Admetus Lifesciences manufactures 80+ nutraceutical softgel capsule formulations spanning six therapeutic categories: Calcium & Bone Health (Vitamin D3 60K IU, Calcitriol + K2-7), Omega & Heart Health (Omega-3 + Vitamin E, Krill Oil), Antioxidant & Multivitamin (Ginseng + Astaxanthin, Glutathione + ALA, Lycopene), Women's Health (Isoflavones + Calcium + D3), Men's Health (Ginkgo + Tribulus), and Herbal & Specialty (Nigella Sativa / Kalonji). Custom formulations are developed on request.",
  },
  {
    q: "What certifications does your nutraceutical manufacturing facility hold?",
    a: "Our Jind, Haryana facility holds five key certifications: WHO-GMP (World Health Organization Good Manufacturing Practice), FSSAI (Food Safety and Standards Authority of India), GMP (Good Manufacturing Practice), HACCP (Hazard Analysis Critical Control Points), and Halal certification. Certificate copies and facility audit reports are available for qualified business inquiries.",
  },
  {
    q: "Do you offer contract manufacturing for nutraceutical brands?",
    a: "Yes. We provide full-service contract manufacturing for nutraceutical softgel capsules — covering raw material procurement, encapsulation on our ARBES SGX-806P production line, multi-point quality testing, blister packing on Elmach EPI 2000, and dispatch with complete batch documentation. We work with brand owners, distributors, hospital chains, and international importers.",
  },
  {
    q: "What is the MOQ for nutraceutical softgel orders?",
    a: "MOQs are flexible based on the specific formulation, capsule size, and packaging format. We support pilot runs for new brands entering the nutraceutical market as well as full-scale production for established distributors. Specific MOQ and pricing for your requirement is confirmed within 48 hours of inquiry at admetuslifesciences@gmail.com.",
  },
  {
    q: "Can you develop custom nutraceutical formulations?",
    a: "Yes. Beyond our standard portfolio, our R&D team develops custom softgel formulations to your specifications — including composition design, stability validation, pilot batch production, and regulatory alignment for both Indian (FSSAI) and international markets. Typical development cycle is 4-8 weeks from brief to pilot batch.",
  },
  {
    q: "Do you export nutraceutical products internationally?",
    a: "Yes. Admetus Lifesciences operates as an export-ready nutraceutical manufacturer with documentation support for international shipments — Certificate of Analysis (COA), Free Sale Certificate, ingredient declarations, and country-specific regulatory paperwork including Halal certification for GCC markets. Sea freight routes via JNPT (Mumbai) or Mundra (Gujarat); air freight via Delhi. We currently serve inquiries from Middle East, South-East Asia, Africa, and CIS countries.",
  },
  {
    q: "What quality control measures do you follow for nutraceutical manufacturing?",
    a: "Every batch undergoes a 7-stage quality control process: incoming raw material testing, in-process checks during encapsulation, post-encapsulation visual and weight inspection, dissolution testing, microbial limit testing, controlled-environment drying monitoring, and final finished-goods inspection before packaging. We maintain 100% batch traceability with full Certificate of Analysis (COA) documentation.",
  },
  {
    q: "What is the lead time for nutraceutical softgel capsule orders?",
    a: "Standard formulation orders typically ship within 3-4 weeks from order confirmation, depending on batch size and packaging requirements. Custom formulation orders that require R&D development have an additional 4-8 week development phase before production. Rush orders on standard formulations can be accommodated based on production line availability — contact us for specific timelines.",
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
      name: "Nutraceutical Manufacturer India",
      item: "https://www.admetuslifesciences.com/nutraceutical-manufacturer-india/",
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

export default function NutraceuticalManufacturerIndiaPage() {
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
          alt="Golden nutraceutical softgel capsules manufactured at Admetus Lifesciences — WHO-GMP certified nutraceutical manufacturer in India"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 py-2 label-text text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={13} />
            Home
          </Link>
          <span className="label-text text-[var(--gold)]">Nutraceutical Manufacturing  ·  India</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            NUTRACEUTICAL MANUFACTURER<br />IN&nbsp;INDIA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified nutraceutical softgel capsule manufacturer — 80+
            formulations, contract manufacturing, private label, and export-ready
            production for health supplement brands, distributors, and
            importers&nbsp;worldwide.
          </p>
        </div>
      </section>

      {/* India Nutraceutical Market */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                India is emerging as a global hub for <strong>nutraceutical manufacturing</strong>,
                with the domestic market projected to grow from <strong>$375 million to $685 million
                between 2024 and 2030</strong>. This growth is driven by rising health awareness,
                preventive healthcare adoption, increasing middle-class spending on dietary
                supplements, and India&apos;s cost-competitive manufacturing infrastructure.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences operates at the centre of this opportunity — a <strong>WHO-GMP
                certified nutraceutical manufacturing facility</strong> in Jind, Haryana, producing
                softgel capsules for brand owners, distributors, hospital chains, and international
                importers. Founded in 2020 by Mr. Anudeep Deswal, our facility combines precision
                encapsulation technology, a skilled workforce, and multi-certification compliance
                to deliver pharmaceutical-grade nutraceutical products at&nbsp;scale.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Whether you are a <strong>health supplement brand</strong> launching a new product line,
                a <strong>dietary supplement distributor</strong> seeking a reliable Indian manufacturing
                partner, or an <strong>international importer</strong> looking for export-ready
                nutraceutical products — Admetus provides the infrastructure, certifications, and
                production capability to support your&nbsp;requirements.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why India for Nutraceutical Manufacturing */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Why India</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              INDIA AS A NUTRACEUTICAL<br />MANUFACTURING&nbsp;HUB
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {marketAdvantages.map((adv, i) => (
              <SectionReveal key={adv.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{adv.title}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">{adv.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Portfolio</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              NUTRACEUTICAL SOFTGEL CAPSULES<br />BY THERAPEUTIC&nbsp;CATEGORY
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {productCategories.map((cat, i) => (
              <SectionReveal key={cat.category} delay={i * 0.05}>
                <div className="p-6 border border-[var(--border-subtle)] bg-[var(--bg-charcoal)]">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>
                      {cat.category}
                    </h3>
                  </div>
                  <ul className="ml-12 space-y-1 mb-4">
                    {cat.products.map((product) => (
                      <li key={product} className="body-text text-[var(--text-cream)] !text-[0.875rem] flex items-start gap-2">
                        <span className="text-[var(--gold)] shrink-0 mt-0.5">-</span>
                        {product}
                      </li>
                    ))}
                  </ul>
                  <p className="ml-12 body-text text-[var(--text-muted)] !text-[0.875rem] max-w-[52ch]">
                    {cat.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.3}>
            <div className="mt-10 text-center">
              <Link
                href="/products/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                View Full Product Catalogue
                <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Manufacturing Capabilities</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  PRECISION NUTRACEUTICAL<br />PRODUCTION&nbsp;LINE
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Our nutraceutical manufacturing facility operates with
                  industry-standard encapsulation and packaging equipment,
                  delivering consistent fill accuracy and batch-level
                  traceability across every production&nbsp;run.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-0">
                {[
                  ["ARBES SGX-806P Encapsulation", "Industry-standard soft gelatin encapsulation machine delivering precision softgel production with consistent fill weight accuracy and capsule uniformity across high-volume runs."],
                  ["Elmach EPI 2000 Blister Packing", "High-speed blister packing machine for tamper-evident primary packaging. Supports multiple blister formats and secondary carton packaging per brand specifications."],
                  ["7-Stage Quality Process", "Incoming raw material QC, in-process encapsulation checks, visual + weight inspection, dissolution testing, microbial limit testing, controlled drying, and final finished-goods inspection."],
                  ["100% Batch Inspection", "Every batch undergoes complete inspection with full Certificate of Analysis (COA) documentation. No batch ships without passing all quality parameters and traceability records."],
                  ["Controlled Environment", "Temperature and humidity controlled production and drying areas ensure capsule integrity, dissolution consistency, and extended shelf life for all nutraceutical formulations."],
                ].map(([title, desc], i) => (
                  <div key={title} className="py-5 border-t border-[var(--border-subtle)] flex items-start gap-4">
                    <span className="shrink-0 mono-text text-[0.6875rem] font-bold text-[var(--gold)] mt-1.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}>{title}</h3>
                      <p className="mt-1 body-text text-[var(--text-muted)] max-w-[58ch] !text-[0.9375rem]">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Services</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              NUTRACEUTICAL MANUFACTURING<br />SERVICES
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((svc, i) => (
              <SectionReveal key={svc.title} delay={i * 0.05}>
                <div className={i === services.length - 1 ? "lg:col-span-1" : ""}>
                  <div className="flex items-start gap-4 mb-3">
                    <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>
                      {svc.title}
                    </h3>
                  </div>
                  <p className="ml-12 body-text text-[var(--text-muted)] max-w-[58ch] mb-3">
                    {svc.desc}
                  </p>
                  <Link
                    href={svc.link}
                    className="ml-12 inline-flex items-center gap-2 text-[var(--gold)] hover:text-[var(--gold-light)] body-text !text-[0.875rem] underline-offset-2 hover:underline transition-colors duration-200"
                  >
                    {svc.linkText}
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Specs */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Facility Overview</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              MANUFACTURING FACILITY<br />AT A&nbsp;GLANCE
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
            {[
              { label: "Location", value: "Village Anta, Safidon, Jind, Haryana 126112, India" },
              { label: "Founded", value: "2020" },
              { label: "Founder", value: "Mr. Anudeep Deswal" },
              { label: "Encapsulation", value: "ARBES SGX-806P" },
              { label: "Blister Packing", value: "Elmach EPI 2000" },
              { label: "Formulations", value: "80+ standard, custom on request" },
              { label: "Certifications", value: "FSSAI, GMP, HACCP, Halal, WHO-GMP" },
              { label: "Workforce", value: "90%+ women, on-site trained" },
            ].map((spec) => (
              <div key={spec.label} className="p-5 bg-[var(--background)]">
                <span className="mono-text text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.1em] block mb-2">
                  {spec.label}
                </span>
                <p className="body-text text-[var(--foreground)] !text-[0.875rem]">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Frequently Asked</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              NUTRACEUTICAL MANUFACTURING Q&amp;A
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
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              PARTNER WITH INDIA&apos;S TRUSTED<br />NUTRACEUTICAL&nbsp;MANUFACTURER
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Whether you need contract manufacturing, private label production,
              custom formulation, or export-ready nutraceutical supply — our
              WHO-GMP certified facility is ready to support your&nbsp;requirements.
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
              <Link
                href="/products/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--foreground)] border border-[var(--border-subtle)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                View Products
                <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

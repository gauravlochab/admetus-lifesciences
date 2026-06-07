import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const marketHighlights = [
  {
    title: "Regional pharma hub — manufacturing + imports",
    desc: "Jordan is one of the most established pharmaceutical hubs in the Middle East and North Africa (MENA) region. The Jordanian pharmaceutical industry manufactures and exports to over 60 countries, while simultaneously importing active ingredients, excipients, and finished products from global manufacturers. This dual role as manufacturer and importer creates sophisticated pharmaceutical supply chains and experienced distribution networks that understand quality certification, regulatory compliance, and international trade documentation.",
  },
  {
    title: "11M population — 97% Muslim",
    desc: "Jordan has a population of approximately 11 million, with 97% identifying as Muslim. This demographic composition makes Halal certification a de facto market requirement — while Halal is not always legally mandated for pharmaceuticals as strictly as in the GCC, consumer preference is overwhelmingly for Halal-certified products. Indian manufacturers with Halal certification have a clear competitive advantage over non-certified competitors.",
  },
  {
    title: "JFDA — structured regulatory framework",
    desc: "The Jordan Food and Drug Administration (JFDA) is one of the most respected regulatory bodies in the MENA region. JFDA regulates all pharmaceutical and nutraceutical imports with a well-structured registration process. JFDA registration is recognized across the Arab world and serves as a credibility marker for products seeking entry into other MENA markets including Iraq, Libya, Yemen, and Palestine.",
  },
  {
    title: "Strategic location — Levant gateway",
    desc: "Jordan sits at the crossroads of the Levant, bordering Saudi Arabia, Iraq, Syria, Palestine, and Israel. This geographic position makes Jordan a natural distribution hub for the broader Levant and northern Arabian Peninsula. Products registered with JFDA can be distributed to neighboring markets through established Jordanian trading networks, extending market reach well beyond Jordan's own borders.",
  },
];

const regulatoryReqs = [
  {
    title: "JFDA product registration",
    desc: "All pharmaceutical and nutraceutical products imported into Jordan require registration with the Jordan Food and Drug Administration (JFDA). The registration process is comprehensive and well-documented, validating manufacturer credentials, product composition, quality documentation, safety data, labeling compliance, and post-market surveillance plans. JFDA registration is recognized across the MENA region as a mark of regulatory rigor.",
  },
  {
    title: "GMP / WHO-GMP certificate",
    desc: "The manufacturer must hold a valid GMP certificate, with WHO-GMP certification strongly preferred by JFDA. Jordan's pharmaceutical industry is sophisticated — JFDA evaluates manufacturer credentials rigorously. Admetus Lifesciences holds both GMP and WHO-GMP certifications for our Jind, Haryana facility, meeting JFDA's manufacturing standards requirements.",
  },
  {
    title: "Free Sale Certificate from FSSAI",
    desc: "A Free Sale Certificate issued by FSSAI (Food Safety and Standards Authority of India) confirming that the products are legally manufactured and freely sold in India. This establishes the product's regulatory status in the country of origin and is a mandatory document in the JFDA registration submission.",
  },
  {
    title: "Halal certification",
    desc: "While Jordan's regulatory framework does not always legally mandate Halal certification for pharmaceutical products to the same degree as GCC countries, the 97% Muslim population creates overwhelming consumer preference for Halal-certified products. Halal certification provides a significant competitive advantage and is strongly recommended for market acceptance. Our facility holds Halal certification covering raw materials, manufacturing process, and finished products.",
  },
  {
    title: "Arabic labeling required",
    desc: "All product labels must include Arabic text covering product name, composition, dosage instructions, warnings, contraindications, manufacturer details, batch number, manufacturing date, and expiry date. Arabic is the official language of Jordan. Admetus Lifesciences provides complete Arabic labeling support as part of our Jordan export service.",
  },
  {
    title: "Local authorized agent",
    desc: "A Jordan-based authorized agent with a valid commercial registration is required to submit the JFDA registration and act as the local representative. The agent handles regulatory liaison with JFDA, in-country distribution coordination, pharmacovigilance reporting, and post-market surveillance responsibilities.",
  },
  {
    title: "Stability data requirements",
    desc: "JFDA requires stability data for registered products, demonstrating that the product maintains its identity, potency, quality, and purity throughout its shelf life under specified storage conditions. Our quality control laboratory provides comprehensive stability studies conducted under ICH guidelines, with both accelerated and long-term stability data available for JFDA submission.",
  },
  {
    title: "Certificate of Analysis per batch",
    desc: "A Certificate of Analysis (COA) is required for each batch of imported nutraceutical products. The COA confirms that the product meets the registered specifications for identity, potency, purity, dissolution, and microbial limits. Our quality control laboratory provides detailed COAs with every production batch, tested against pharmacopoeial standards.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is prevalent across Jordan, affecting a significant portion of the population. Despite being a sun-rich country, conservative dress codes, indoor lifestyles, and urban living drive widespread deficiency. Cholecalciferol 60,000 IU weekly softgels are a high-demand category in Jordanian pharmacy retail, prescribed by physicians and available through both hospital and community pharmacy channels across Amman and other governorates.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular health supplementation is a growing category in Jordan's healthcare market. Rising rates of obesity, diabetes, and metabolic syndrome — particularly in urban areas — drive demand for Omega-3 softgels. Jordan's well-established pharmacy retail network and growing health awareness among consumers create consistent demand for cardiovascular health supplements.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health formulations targeting Jordan's aging population and post-menopausal women. Calcitriol (active Vitamin D metabolite) combined with Calcium Citrate and K2-7 for enhanced calcium absorption and bone mineralization. Jordan's established pharmaceutical market supports sophisticated combination formulations that address multiple aspects of bone health.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Comprehensive multivitamin formulations for Jordan's growing wellness market. Jordan's relatively young population (median age ~24 years) and rising health awareness drive demand for daily multivitamin supplementation. The country's sophisticated pharmacy retail environment supports both prescription and over-the-counter multivitamin products across multiple price tiers.",
  },
  {
    name: "Nigella Sativa (Habbatus Sauda / Habbat Al-Barakah)",
    desc: "Nigella Sativa — known as Habbat Al-Barakah (the blessed seed) in Jordan — holds deep cultural and religious significance across the 97% Muslim population. The traditional remedy is referenced in Islamic hadith and commands consistent demand across all demographics. Standardized black seed oil softgel capsules deliver the traditional remedy in a modern, dose-controlled format. Jordan's sophisticated pharmaceutical market supports both traditional and modern positioning of Nigella Sativa products.",
  },
  {
    name: "Glutathione + ALA + Grape Seed Extract",
    desc: "Antioxidant and skin health formulation with emerging demand in Jordan's growing beauty and wellness market. Jordan's young, urban population is increasingly health-conscious, driving demand for premium antioxidant supplements. Glutathione softgels are positioned across pharmacy retail and beauty clinic channels in Amman and major cities.",
  },
  {
    name: "Krill Oil Softgel Capsules",
    desc: "Premium Omega-3 source with superior bioavailability. Jordan's pharmaceutical market supports premium-tier products alongside mass-market formulations. Krill oil softgels are positioned for health-conscious consumers and physicians seeking higher-quality Omega-3 sources than standard fish oil. Growing demand in premium pharmacy chains in Amman and Aqaba.",
  },
];

const whyAdmetus = [
  {
    title: "Halal certified — full supply chain",
    desc: "Our Halal certification covers the entire manufacturing chain: raw material sourcing (Halal-certified gelatin suppliers), production process, packaging, and finished products. With Jordan's 97% Muslim population, Halal certification provides essential consumer trust and competitive advantage. Product-specific Halal certificates accompany every export shipment.",
  },
  {
    title: "WHO-GMP certified facility",
    desc: "Our Jind, Haryana facility holds WHO-GMP certification — essential for JFDA registration in Jordan's sophisticated pharmaceutical market. Jordan's own pharmaceutical manufacturers operate to international standards, so JFDA expects imported products to meet equivalent quality benchmarks. WHO-GMP certification meets this expectation.",
  },
  {
    title: "Competitive pricing vs. local & EU manufacturers",
    desc: "Indian-manufactured softgels offer 40-60% cost advantage over equivalent European-manufactured products, and competitive pricing against Jordanian domestic manufacturers for formulations not locally produced. Jordan's pharmaceutical market is price-sensitive, and Indian softgel manufacturers offer the best quality-to-price ratio for nutraceutical categories.",
  },
  {
    title: "Arabic labeling support",
    desc: "We provide end-to-end Arabic labeling support for Jordan-bound products — translation coordination with native Arabic speakers, label design, compliance review, and print-ready artwork. Products arrive ready for Jordanian pharmacy shelves with no additional labeling work required by the importer.",
  },
  {
    title: "JFDA documentation support",
    desc: "We provide all manufacturer-side documentation required for JFDA registration: WHO-GMP certificate, Free Sale Certificate from FSSAI, Halal certificate, Certificate of Analysis, product specifications, stability data (ICH guidelines), and label artwork. Our export team is experienced with JFDA submission requirements.",
  },
  {
    title: "Private label & contract manufacturing",
    desc: "Full private-label service for Jordanian pharmaceutical companies — your brand identity, packaging design, and Arabic labeling on our manufactured products. Jordan's pharmaceutical industry includes companies that market imported products under their own brands — our private-label service supports this model.",
  },
];

const faqs = [
  {
    q: "What is the JFDA registration process for importing softgels to Jordan?",
    a: "The Jordan Food and Drug Administration (JFDA) requires comprehensive product registration for all nutraceutical imports. Required documentation includes: manufacturer's GMP/WHO-GMP certificate, Free Sale Certificate from FSSAI, Halal certificate, Certificate of Analysis per batch, product composition and specifications, stability data (ICH guidelines), label artwork with Arabic text, and post-market surveillance plan. A Jordan-based authorized agent submits the registration. JFDA is one of the most respected regulatory bodies in the MENA region. Admetus Lifesciences provides all manufacturer-side documentation required for JFDA submission.",
  },
  {
    q: "Is Halal certification required for pharmaceutical exports to Jordan?",
    a: "While Jordan does not always legally mandate Halal certification for pharmaceutical products as strictly as GCC countries, the 97% Muslim population creates overwhelming consumer preference for Halal-certified products. In practice, Halal certification is essential for market acceptance and competitive positioning. Our Jind facility holds Halal certification covering the entire manufacturing chain — raw material sourcing, production process, and finished products. Product-specific Halal certificates are included with every export shipment to Jordan.",
  },
  {
    q: "How does Jordan serve as a regional pharma hub?",
    a: "Jordan is one of the most established pharmaceutical hubs in the MENA region, manufacturing and exporting to over 60 countries. The Jordanian pharmaceutical industry has deep expertise in regulatory compliance, quality assurance, and international trade. This means Jordanian distributors and importers are sophisticated partners who understand GMP requirements, regulatory documentation, and international supply chain management. JFDA registration is recognized across the Arab world, and products registered in Jordan benefit from regulatory credibility in neighboring markets including Iraq, Libya, Yemen, and Palestine.",
  },
  {
    q: "How long does shipping from India to Jordan take?",
    a: "Sea freight from JNPT (Nhava Sheva, Mumbai) to Aqaba Port on Jordan's Red Sea coast takes approximately 7-10 days. Aqaba is Jordan's only seaport, located at the northeastern tip of the Red Sea. Air freight from Delhi or Mumbai reaches Queen Alia International Airport in Amman in approximately 5-6 hours of flight time for sample shipments or urgent orders. We coordinate with the buyer's preferred freight forwarder or recommend trusted logistics partners experienced with the India-Jordan trade corridor.",
  },
  {
    q: "What is the minimum order quantity for Jordan export?",
    a: "MOQs are flexible based on the formulation, packaging format, and order configuration. We support pilot shipments for new Jordanian distributors and pharmaceutical companies testing product acceptance, as well as regular replenishment orders for established importers. Jordan's population of 11 million supports meaningful order volumes. Specific MOQ and pricing is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "What documentation is provided with each Jordan export shipment?",
    a: "Every shipment includes: Certificate of Analysis (COA) per batch, Halal certificate, Free Sale Certificate from FSSAI, GMP/WHO-GMP certificate copies, commercial invoice with HS codes, packing list, bill of lading, and Certificate of Origin from the Indian Chamber of Commerce. For JFDA-registered products, we also provide stability data, product specifications, and any additional documentation requested during the registration review. Our documentation meets the standards expected by Jordan's sophisticated pharmaceutical industry.",
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
      name: "Jordan",
      item: "https://www.admetuslifesciences.com/export/jordan/",
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

export default function JordanExportPage() {
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
          alt="Halal certified WHO-GMP softgel capsules manufactured in India for export to Jordan — Admetus Lifesciences"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <Link
            href="/export/"
            className="inline-flex items-center gap-2 py-2 label-text text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={13} />
            Export Markets
          </Link>
          <span className="label-text text-[var(--gold)]">India &rarr; Jordan</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;JORDAN
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal and WHO-GMP certified softgel capsules from Haryana, India &mdash;
            JFDA documentation support, Arabic labeling, and formulations for
            Jordan&apos;s established pharmaceutical&nbsp;market.
          </p>
        </div>
      </section>

      {/* Jordan Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Jordan is one of the most established <strong>pharmaceutical hubs
                in the Middle East and North Africa (MENA)</strong> region. The
                Jordanian pharmaceutical industry manufactures and exports to over
                60 countries, while simultaneously importing raw materials,
                excipients, and finished products from international manufacturers.
                This dual role as manufacturer and importer creates a sophisticated
                market with experienced distributors who understand international
                quality standards and regulatory compliance.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The <strong>Jordan Food and Drug Administration (JFDA)</strong> regulates
                all pharmaceutical and nutraceutical imports. JFDA is one of the
                most respected regulatory bodies in the MENA region, with a
                comprehensive registration process that validates manufacturer
                credentials, product quality, and labeling compliance. JFDA
                registration is recognized across the Arab world as a mark of
                regulatory rigor.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Jordan has a population of approximately <strong>11 million, with
                97% identifying as Muslim</strong>. While Halal certification for
                pharmaceuticals is not always as strictly legislated as in the GCC,
                the overwhelming Muslim majority means Halal-certified products
                enjoy significant consumer preference and competitive advantage.
                For Indian manufacturers with Halal certification, Jordan
                represents a natural market fit.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Jordan&apos;s strategic location at the <strong>crossroads of the
                Levant</strong> &mdash; bordering Saudi Arabia, Iraq, Syria,
                Palestine, and Israel &mdash; makes it a natural distribution
                hub for the broader region. Products registered with JFDA can
                be distributed to neighboring markets through established
                Jordanian trading networks.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana
                126112, manufactures Halal-certified, WHO-GMP compliant nutraceutical
                softgel capsules specifically configured for the Jordanian market &mdash;
                with full JFDA documentation support, Arabic labeling, and formulations
                aligned with Jordan&apos;s healthcare demand patterns.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Market Highlights */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              JORDAN &mdash; MENA PHARMA&nbsp;HUB
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {marketHighlights.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{item.title}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">{item.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Section */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Jordan Regulatory Framework</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              JFDA REGISTRATION &amp;&nbsp;COMPLIANCE
            </h2>
            <div className="gold-rule w-16 mb-6" />
            <p className="body-text text-[var(--text-cream)] max-w-[68ch] mb-10" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              The Jordan Food and Drug Administration (JFDA) administers
              product registration for all pharmaceutical and nutraceutical
              imports. JFDA is recognized as one of the most rigorous
              regulatory bodies in the MENA region. Below are the key
              requirements &mdash; Admetus Lifesciences provides all
              manufacturer-side documentation.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {regulatoryReqs.map((req, i) => (
              <SectionReveal key={req.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{req.title}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">{req.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Jordan as Levant Gateway */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Strategic Advantage</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  JORDAN &mdash; GATEWAY TO THE&nbsp;LEVANT
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Jordan&apos;s strategic location and respected JFDA
                  registration open doors to neighboring markets across
                  the Levant and northern Arabian&nbsp;Peninsula.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Jordan sits at the crossroads of the Middle East, bordering{" "}
                  <strong>Saudi Arabia</strong> to the south and east,{" "}
                  <strong>Iraq</strong> to the northeast, <strong>Syria</strong> to
                  the north, and <strong>Palestine</strong> and <strong>Israel</strong> to
                  the west. This geographic position makes Jordan a natural
                  distribution hub for the broader Levant region.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Jordan&apos;s pharmaceutical industry exports to over{" "}
                  <strong>60 countries worldwide</strong>. The established
                  international trading networks of Jordanian pharmaceutical
                  companies can serve as distribution channels for Indian-manufactured
                  softgels across the MENA region. Many Jordanian distributors
                  operate cross-border networks spanning Iraq, Palestine, Libya,
                  Yemen, and Sudan.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  <strong>JFDA registration</strong> is recognized as a credibility
                  marker across the Arab world. Products registered with JFDA
                  benefit from regulatory recognition when seeking registration
                  in neighboring markets. For Indian nutraceutical manufacturers,
                  JFDA registration — combined with WHO-GMP and Halal
                  certification — creates a strong foundation for MENA-wide
                  market expansion.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For Admetus Lifesciences, Jordan represents both a significant
                  direct market (11M population, 97% Muslim) and a strategic
                  platform for broader Levant expansion. Our Halal certification,
                  WHO-GMP credentials, Arabic labeling, and comprehensive
                  documentation are pre-configured for this dual role.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Halal Section */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Halal Compliance</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              HALAL CERTIFICATION FOR JORDAN&apos;S 97% MUSLIM&nbsp;MARKET
            </h2>
            <div className="gold-rule w-16 mb-6" />
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Jordan&apos;s population is <strong>97% Muslim</strong>, creating
                overwhelming consumer preference for Halal-certified products.
                While Halal certification for pharmaceuticals is not always as
                strictly legislated as in GCC countries, the market reality is
                clear: Halal-certified products enjoy significantly higher
                consumer trust, pharmacy recommendation rates, and market
                acceptance.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences holds <strong>Halal certification</strong> that
                covers the entire manufacturing chain. Our <strong>ARBES SGX-806P</strong> and{" "}
                <strong>Elmach EPI 2000</strong> softgel encapsulation lines follow
                documented Halal SOPs with dedicated protocols ensuring no
                cross-contamination with non-Halal materials.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Our facility certifications include <strong>FSSAI, GMP, HACCP, Halal,
                and WHO-GMP</strong> &mdash; providing Jordanian importers with a
                comprehensive quality and compliance framework. For products like
                Nigella Sativa (Habbat Al-Barakah), which carry deep religious
                significance in Jordan, Halal certification is particularly
                important for consumer credibility.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Portfolio</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;JORDAN
            </h2>
            <div className="gold-rule w-16 mb-6" />
            <p className="body-text text-[var(--text-cream)] max-w-[68ch] mb-10" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              All products are Halal certified and manufactured at our WHO-GMP
              facility in Jind, Haryana. The full portfolio is available for
              private-label manufacturing with custom branding and Arabic
              labeling for the Jordanian&nbsp;market.
            </p>
          </SectionReveal>

          <div className="space-y-0">
            {products.map((product, i) => (
              <SectionReveal key={product.name} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] last:border-b flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{product.name}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[68ch]">{product.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.3}>
            <p className="mt-10 body-text text-[var(--text-muted)] max-w-[68ch]">
              Custom softgel formulations are developed on request for Jordanian
              distributors and pharmaceutical companies targeting specific
              therapeutic categories. Contact us at{" "}
              <a href="mailto:team@admetuslifesciences.com" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">
                team@admetuslifesciences.com
              </a>{" "}
              with your formulation requirements &mdash; evaluation within 48 hours.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Shipping */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Shipping &amp; Logistics</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              INDIA TO JORDAN: AQABA&nbsp;PORT
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
            {[
              { label: "Origin Ports", value: "JNPT (Mumbai), Mundra (Gujarat)" },
              { label: "Destination", value: "Aqaba Port (Red Sea)" },
              { label: "Sea Transit", value: "7-10 days" },
              { label: "Air Freight", value: "Under 6 hours (Delhi/Mumbai)" },
              { label: "Facility to Port", value: "~1,200 km (Jind to JNPT)" },
              { label: "FCL Support", value: "20ft & 40ft containers" },
              { label: "Incoterms", value: "FOB, CIF, CFR available" },
              { label: "Documentation", value: "COA, Halal, FSC, CO, invoice, BL" },
            ].map((spec) => (
              <div key={spec.label} className="p-5 bg-[var(--background)]">
                <span className="mono-text text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.1em] block mb-2">
                  {spec.label}
                </span>
                <p className="body-text text-[var(--foreground)] !text-[0.875rem]">{spec.value}</p>
              </div>
            ))}
          </div>

          <SectionReveal delay={0.15}>
            <div className="mt-10 max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Sea freight from JNPT (Mumbai) to <strong>Aqaba Port</strong> on
                Jordan&apos;s Red Sea coast takes approximately 7-10 days. Aqaba is
                Jordan&apos;s only seaport, located at the northeastern tip of the
                Red Sea. From Aqaba, overland transport to Amman and other major
                cities takes approximately 4-5 hours.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                For sample shipments and urgent orders, air freight from Delhi or
                Mumbai reaches Queen Alia International Airport in Amman in
                approximately 5-6 hours of flight time. We coordinate with the
                buyer&apos;s preferred freight forwarder or recommend trusted
                logistics partners experienced with the India-Jordan trade corridor.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Admetus for Jordan */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Why Admetus</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY ADMETUS FOR THE JORDANIAN&nbsp;MARKET
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyAdmetus.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{item.title}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">{item.desc}</p>
                  </div>
                </div>
              </SectionReveal>
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
              JORDAN EXPORT Q&amp;A
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
              SUPPLY SOFTGELS TO&nbsp;JORDAN
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Jordanian pharmaceutical companies, Amman-based distributors,
              and MENA trading companies seeking a WHO-GMP and Halal certified
              softgel manufacturer in India &mdash; share your requirements and
              our export team will respond within 48&nbsp;hours.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/917497841608?text=I%20am%20interested%20in%20importing%20softgel%20capsules%20to%20Jordan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[#25D366] hover:bg-[#20bd5a] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                WhatsApp +91-7497841608
                <ArrowRight size={14} />
              </a>
              <Link
                href="/contact/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Request Export Quote
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/products/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--foreground)] border border-[var(--border-subtle)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                View Product Catalog
                <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

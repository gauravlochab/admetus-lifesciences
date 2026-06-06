import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const marketHighlights = [
  {
    title: "$212M+ pharma imports from India",
    desc: "The UAE imports over $212 million worth of pharmaceutical and nutraceutical products from India annually, making India one of the largest source countries for the UAE health sector. Indian-manufactured softgels, tablets, and capsules are well-established in UAE pharmacy retail, hospital formularies, and re-export supply chains.",
  },
  {
    title: "Dubai — the GCC re-export hub",
    desc: "Dubai is not just a UAE market — it is THE distribution gateway to the entire Gulf Cooperation Council (Saudi Arabia, Oman, Qatar, Kuwait, Bahrain) plus East Africa. Over 60% of goods entering Dubai are re-exported. One relationship with a Dubai-based distributor can unlock access to 6+ additional markets without separate product registrations in each country.",
  },
  {
    title: "India-UAE CEPA advantage",
    desc: "The India-UAE Comprehensive Economic Partnership Agreement (CEPA), operational since May 2022, provides preferential tariff treatment for Indian exports to the UAE. Pharmaceutical and nutraceutical products benefit from reduced or zero import duties, making Indian-manufactured softgels even more price-competitive against European and East Asian alternatives.",
  },
  {
    title: "Fastest shipping route from India",
    desc: "JNPT (Mumbai) or Mundra (Gujarat) to Jebel Ali (Dubai) is the fastest sea freight route from India — just 3-5 days transit time. This means shorter lead times, lower inventory carrying costs for UAE distributors, and the ability to respond to demand surges faster than competitors sourcing from Europe or the Americas.",
  },
];

const regulatoryReqs = [
  {
    title: "MoHAP / Dubai Municipality registration",
    desc: "Nutraceutical and health supplement products imported into the UAE require registration with the Ministry of Health and Prevention (MoHAP) or Dubai Municipality (for products sold within Dubai). The registration process validates the manufacturer's credentials, product composition, labeling compliance, and safety documentation.",
  },
  {
    title: "Montaji system registration",
    desc: "Product registration is submitted through the Montaji digital platform — the UAE's centralized system for health product registration. Required documentation includes GMP certificate, Free Sale Certificate from FSSAI, Certificate of Analysis, product composition and specifications, stability data, and label artwork with Arabic translation.",
  },
  {
    title: "GMP / WHO-GMP certificate",
    desc: "The manufacturer must hold a valid GMP certificate, with WHO-GMP certification strongly preferred. Admetus Lifesciences holds both GMP and WHO-GMP certifications for our Jind, Haryana facility — these are provided as part of the Montaji registration package.",
  },
  {
    title: "Free Sale Certificate from FSSAI",
    desc: "A Free Sale Certificate issued by FSSAI (Food Safety and Standards Authority of India) confirming that the products are legally manufactured and freely sold in India. This is a mandatory requirement for MoHAP and Dubai Municipality registration.",
  },
  {
    title: "Halal certification",
    desc: "Halal certification is required for all food and health supplement products sold in the UAE. Our facility holds Halal certification covering raw materials, manufacturing process, and finished products. The Halal certificate is included in the Montaji registration submission.",
  },
  {
    title: "Arabic labeling",
    desc: "All product labels must include Arabic text covering product name, composition, usage instructions, warnings, manufacturer details, and expiry date. Admetus Lifesciences provides Arabic labeling support — we coordinate the translation and label design as part of our private-label export service.",
  },
  {
    title: "Local authorized agent",
    desc: "A UAE-based authorized agent with a valid Dubai trade license is required to submit the Montaji registration and act as the local representative for the product. The buyer or their designated import partner typically serves as the authorized agent.",
  },
  {
    title: "GSO 2571/2021 compliance",
    desc: "Products must comply with GSO 2571/2021 — the Gulf Standards Organization technical regulation for pre-packaged food labeling (applicable to nutraceuticals). This covers labeling requirements, nutritional information format, allergen declarations, and Arabic language requirements. Our export documentation team ensures label compliance before production.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency affects an estimated 80-90% of the UAE population despite year-round sunshine — driven by indoor lifestyles, air conditioning, and limited sun exposure. Cholecalciferol 60,000 IU weekly softgels are one of the highest-volume nutraceutical categories in UAE pharmacy retail.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular health supplementation is a major category in the UAE market, driven by high prevalence of metabolic syndrome and heart disease. Omega-3 softgels with Vitamin E are a pharmacy staple — prescribed by cardiologists and purchased over-the-counter.",
  },
  {
    name: "Calcitriol + Calcium Citrate + Vitamin K2-7",
    desc: "Bone health formulations targeting the UAE's aging expat population and post-menopausal women. Calcitriol (active Vitamin D metabolite) + K2-7 for enhanced calcium absorption and bone mineralization.",
  },
  {
    name: "Ginseng + Astaxanthin Multivitamin",
    desc: "Premium multivitamin softgel combining Korean Ginseng and Astaxanthin — positioned for the UAE's health-conscious consumer segment. Strong demand in Dubai health food retail and premium pharmacy chains.",
  },
  {
    name: "Glutathione + ALA + Grape Seed Extract",
    desc: "Antioxidant and skin health formulation — a high-demand category in the UAE driven by the beauty and wellness market. Glutathione softgels are one of the fastest-growing nutraceutical segments in GCC pharmacy retail.",
  },
  {
    name: "Nigella Sativa (Kalonji / Habbatus Sauda)",
    desc: "Culturally significant across the Arab world — Nigella Sativa (Habbatus Sauda) softgels deliver standardized black seed oil in a convenient format. Strong demand in both traditional and modern pharmacy channels across the UAE and the broader GCC.",
  },
  {
    name: "Krill Oil Softgel Capsules",
    desc: "Premium Omega-3 source with superior bioavailability — positioned for the UAE's premium health supplement market. Krill oil softgels carry a higher price point than standard fish oil, appealing to health-conscious consumers in Dubai and Abu Dhabi.",
  },
];

const whyAdmetus = [
  {
    title: "Halal certified — full supply chain",
    desc: "Our Halal certification covers raw materials, gelatin sourcing, manufacturing process, and finished products. This is not a label-only certification — it is integrated into our manufacturing protocols and auditable at every stage. Essential for MoHAP registration and UAE market acceptance.",
  },
  {
    title: "WHO-GMP certified facility",
    desc: "Our Jind facility holds WHO-GMP certification — the gold standard for pharmaceutical and nutraceutical manufacturing recognized by MoHAP, Dubai Municipality, and regulatory authorities across the GCC. This certification is a prerequisite for Montaji registration.",
  },
  {
    title: "Competitive pricing vs. EU manufacturers",
    desc: "Indian-manufactured softgels offer 40-60% cost advantage over equivalent European-manufactured products, without compromising on quality documentation. The India-UAE CEPA further enhances this pricing advantage through preferential tariff treatment.",
  },
  {
    title: "Arabic labeling support",
    desc: "We provide end-to-end Arabic labeling support for UAE-bound products — translation coordination, label design, GSO 2571/2021 compliance review, and print-ready artwork. Your products arrive ready for UAE pharmacy shelves.",
  },
  {
    title: "3-5 day shipping to Jebel Ali",
    desc: "JNPT or Mundra to Jebel Ali is the fastest sea freight route from India — 3-5 days transit. This means UAE distributors can maintain lean inventory and respond to demand fluctuations with shorter replenishment cycles than competitors sourcing from Europe or the Americas.",
  },
  {
    title: "Private label & contract manufacturing",
    desc: "Full private-label service for UAE brands — your brand identity, packaging design, and Arabic labeling on our manufactured products. We handle formulation, production, quality testing, export packaging, and documentation. You handle market distribution.",
  },
];

const faqs = [
  {
    q: "What is the MoHAP registration process for importing softgels from India?",
    a: "MoHAP (Ministry of Health and Prevention) registration for nutraceutical products is submitted through the Montaji digital platform. Required documentation includes: manufacturer's GMP/WHO-GMP certificate, Free Sale Certificate from FSSAI, Halal certificate, Certificate of Analysis, product composition and specifications, stability data, and label artwork with Arabic translation. A UAE-based authorized agent with a valid trade license submits the registration. Processing time in Dubai is approximately 12 working days. Admetus Lifesciences provides all manufacturer-side documentation required for Montaji submission.",
  },
  {
    q: "Is Halal certification provided for all products exported to the UAE?",
    a: "Yes. Our Jind facility holds Halal certification covering the entire manufacturing chain — raw material sourcing (Halal-certified gelatin suppliers), production process, and finished products. Product-specific Halal certificates are included with every export shipment. The certification is recognized by MoHAP, Dubai Municipality, and regulatory authorities across the GCC. This covers all softgel formulations in our portfolio.",
  },
  {
    q: "What is the minimum order quantity for UAE export?",
    a: "MOQs are flexible based on the formulation, packaging format, and order configuration. We support pilot shipments for new UAE distributors testing the product line, as well as full-container loads for established importers with multi-market distribution. Specific MOQ and pricing for your order is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "How does Dubai serve as a re-export hub for GCC and East Africa?",
    a: "Dubai's Jebel Ali Free Zone is the largest free trade zone in the world — over 60% of goods entering Dubai are re-exported to other markets. A Dubai-based distributor can import our softgels, warehouse them in Jebel Ali Free Zone, and re-export to Saudi Arabia, Oman, Qatar, Kuwait, Bahrain, and East African markets (Kenya, Tanzania, Ethiopia) without paying UAE import duty on re-exported goods. This means one import relationship in Dubai can serve 6+ additional markets. Many of our prospective UAE partners operate precisely this model.",
  },
  {
    q: "How long does shipping from India to Dubai take?",
    a: "Sea freight from JNPT (Nhava Sheva, Mumbai) or Mundra (Gujarat) to Jebel Ali (Dubai) takes 3-5 days — this is the fastest sea freight route from India. Air freight via Delhi or Mumbai reaches Dubai in under 24 hours for sample shipments or urgent orders. We coordinate with the buyer's preferred freight forwarder or recommend trusted logistics partners for both sea and air freight.",
  },
  {
    q: "What documentation is provided with each UAE export shipment?",
    a: "Every shipment includes: Certificate of Analysis (COA) per batch, Halal certificate, Free Sale Certificate from FSSAI, GMP/WHO-GMP certificate copies, commercial invoice with HS codes, packing list, bill of lading, and Certificate of Origin from the Indian Chamber of Commerce. For Montaji-registered products, we also provide stability data, product specifications, and any additional documentation requested by MoHAP during the registration review.",
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
      name: "UAE",
      item: "https://www.admetuslifesciences.com/export/uae/",
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

export default function UAEExportPage() {
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
          alt="WHO-GMP certified nutraceutical softgel capsules manufactured in India for export to UAE and GCC markets — Admetus Lifesciences"
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
          <span className="label-text text-[var(--gold)]">India &rarr; UAE &amp; GCC</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            NUTRACEUTICAL SOFTGEL<br />SUPPLIER INDIA<br />FOR&nbsp;UAE
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Halal and WHO-GMP certified softgel capsules from Haryana, India &mdash;
            supplying Dubai distributors, UAE pharmacy chains, and GCC re-export
            partners. JNPT to Jebel Ali in 3-5&nbsp;days.
          </p>
        </div>
      </section>

      {/* UAE Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The United Arab Emirates is India&apos;s most strategically important
                pharmaceutical and nutraceutical export destination in the Middle East.
                With over <strong>$212 million in annual pharma imports from India</strong>,
                the UAE is not just a consumer market &mdash; it is the distribution
                gateway to the entire Gulf Cooperation Council and beyond.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Dubai, specifically, functions as the re-export hub for the GCC region.
                Over 60% of goods entering Dubai through Jebel Ali port and Jebel Ali
                Free Zone are re-exported to Saudi Arabia, Oman, Qatar, Kuwait, Bahrain,
                and East African markets. For Indian nutraceutical manufacturers, this
                means a single distribution relationship in Dubai can unlock access to
                6+ additional countries &mdash; making the UAE the highest-leverage
                export market in the region.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                The <strong>India-UAE Comprehensive Economic Partnership Agreement (CEPA)</strong>,
                operational since May 2022, further strengthens this trade corridor.
                Indian-manufactured nutraceuticals benefit from preferential tariff
                treatment under CEPA, reducing import costs for UAE buyers and improving
                price competitiveness against European and East Asian alternatives.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana 126112,
                manufactures Halal-certified, WHO-GMP compliant nutraceutical softgel
                capsules specifically configured for the UAE and GCC markets &mdash; with
                full MoHAP/Montaji documentation support, Arabic labeling, and the fastest
                shipping route from any Indian manufacturer.
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
              WHY THE UAE IS INDIA&apos;S TOP PHARMA EXPORT&nbsp;MARKET
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
            <span className="label-text text-[var(--gold)]">UAE Regulatory Framework</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              MoHAP &amp; DUBAI MUNICIPALITY REGISTRATION
            </h2>
            <div className="gold-rule w-16 mb-6" />
            <p className="body-text text-[var(--text-cream)] max-w-[68ch] mb-10" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              The UAE has a structured regulatory framework for nutraceutical imports,
              administered by the Ministry of Health and Prevention (MoHAP) at the
              federal level and Dubai Municipality for products distributed within
              Dubai. Product registration is submitted through the Montaji digital
              platform. Typical processing time in Dubai is approximately 12 working
              days. Below are the key requirements &mdash; Admetus Lifesciences
              provides all manufacturer-side documentation.
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

      {/* Dubai as Force Multiplier */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Strategic Advantage</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  DUBAI AS A FORCE&nbsp;MULTIPLIER
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  One import relationship in Dubai opens doors to the entire GCC
                  and East Africa &mdash; making the UAE the single most leveraged
                  export market for Indian nutraceutical&nbsp;manufacturers.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Dubai&apos;s Jebel Ali Free Zone (JAFZA) is the world&apos;s largest
                  free trade zone, with over 8,700 companies operating across logistics,
                  trading, and distribution. For nutraceutical re-export, the model is
                  straightforward: a Dubai-based distributor imports our softgels, warehouses
                  them in JAFZA (no import duty on goods intended for re-export), and ships
                  to their clients across the GCC and East Africa.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  The markets accessible through Dubai re-export include:{" "}
                  <strong>Saudi Arabia</strong> (the largest GCC pharma market, $9B+),{" "}
                  <strong>Oman</strong>, <strong>Qatar</strong>, <strong>Kuwait</strong>,{" "}
                  <strong>Bahrain</strong>, and East African markets including{" "}
                  <strong>Kenya</strong>, <strong>Tanzania</strong>, and{" "}
                  <strong>Ethiopia</strong>. Many Dubai-based trading companies operate
                  distribution networks spanning all of these markets simultaneously.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  For Admetus Lifesciences, this means a single UAE export partner can
                  generate demand across 6-8 countries. The Halal certification, WHO-GMP
                  credentials, and Arabic labeling support we provide are accepted across
                  all GCC markets &mdash; no additional manufacturer-side certification
                  is needed for re-export from Dubai.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  The logistics economics are compelling: 3-5 day sea freight from JNPT
                  or Mundra to Jebel Ali, followed by 1-3 day overland or sea forwarding
                  to any GCC destination. Total door-to-door from our Jind facility to
                  a pharmacy shelf in Riyadh, Muscat, or Doha: approximately 10-14 days.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Portfolio</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR UAE &amp;&nbsp;GCC
            </h2>
            <div className="gold-rule w-16 mb-6" />
            <p className="body-text text-[var(--text-cream)] max-w-[68ch] mb-10" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
              All products are Halal certified and manufactured at our WHO-GMP
              facility in Jind, Haryana. The full portfolio is available for
              private-label manufacturing with custom branding and Arabic
              labeling for the UAE and GCC&nbsp;markets.
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
              Custom softgel formulations are developed on request for UAE
              distributors targeting specific therapeutic categories or consumer
              segments. Contact us at{" "}
              <a href="mailto:team@admetuslifesciences.com" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">
                team@admetuslifesciences.com
              </a>{" "}
              with your formulation requirements &mdash; evaluation within 48 hours.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Shipping */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Shipping &amp; Logistics</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              FASTEST ROUTE: INDIA TO&nbsp;DUBAI
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
            {[
              { label: "Origin Ports", value: "JNPT (Mumbai), Mundra (Gujarat), Kandla" },
              { label: "Destination", value: "Jebel Ali (Dubai), UAE" },
              { label: "Sea Transit", value: "3-5 days" },
              { label: "Air Freight", value: "Under 24 hours (Delhi/Mumbai)" },
              { label: "Facility to Port", value: "~1,200 km (Jind → JNPT)" },
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
                The JNPT/Mundra to Jebel Ali route is the fastest sea freight corridor
                from India, with multiple weekly sailings and a transit time of just
                3-5 days. This is significantly shorter than routes to European, East
                Asian, or American ports &mdash; giving UAE distributors the ability
                to maintain leaner inventory and shorter replenishment cycles.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Kandla port (Gujarat) is also available as an origin port, offering
                additional shipping flexibility. For sample shipments and urgent
                orders, air freight from Delhi or Mumbai reaches Dubai in under
                24 hours. We coordinate with the buyer&apos;s preferred freight
                forwarder or recommend trusted logistics partners for both sea
                and air freight.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Admetus for UAE */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Why Admetus</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY ADMETUS FOR THE UAE&nbsp;MARKET
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
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Frequently Asked</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              UAE EXPORT Q&amp;A
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
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              SUPPLY SOFTGELS TO THE UAE &amp;&nbsp;GCC
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For UAE importers, Dubai-based distributors, and GCC trading companies
              seeking a WHO-GMP and Halal certified softgel manufacturer in India &mdash;
              share your requirements and our export team will respond within
              48&nbsp;hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
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

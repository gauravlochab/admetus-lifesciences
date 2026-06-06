import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const whyMyanmar = [
  {
    title: "$161M in pharmaceutical imports from India",
    desc: "Myanmar imported approximately $161 million worth of pharmaceutical products from India in 2024 — making India the single largest source country for Myanmar's pharmaceutical imports. This dominant trade relationship is built on decades of cross-border commerce, geographic proximity, and the established reputation of Indian generic manufacturers. Myanmar's healthcare system relies on Indian generics as the backbone of its pharmaceutical supply chain, and softgel capsules from WHO-GMP certified Indian manufacturers fit directly into this proven procurement corridor.",
  },
  {
    title: "India is Myanmar's #1 pharmaceutical import source",
    desc: "Among Myanmar's pharmaceutical import partners, India leads ahead of Thailand, Indonesia, Singapore, and China. Indian generics dominate Myanmar's pharmacy shelves — from antibiotics and cardiovascular drugs to vitamins and nutritional supplements. This established market position means Indian manufacturers face less resistance from distributors, pharmacists, and regulators compared to suppliers from other countries. Admetus Lifesciences builds on this established trust with WHO-GMP certified softgel capsules manufactured in Haryana.",
  },
  {
    title: "100% foreign ownership allowed in pharma distribution",
    desc: "Myanmar's Companies Act now permits 100% foreign-owned companies to distribute pharmaceutical products domestically. This regulatory change has opened the market to Indian pharma companies seeking direct distribution presence — eliminating the traditional requirement for a local joint venture partner. For Admetus Lifesciences and our distribution partners, this means the ability to establish deeper, more controlled market access without ownership restrictions.",
  },
  {
    title: "Growing healthcare infrastructure and nutraceutical demand",
    desc: "Myanmar's 54 million population has expanding healthcare coverage, a growing urban middle class, and increasing awareness of preventive health and nutritional supplementation. The nutraceutical segment is growing rapidly — driven by urbanization, rising disposable incomes in cities like Yangon and Mandalay, and exposure to health-and-wellness trends from neighboring Thailand and Singapore. Softgel capsules (vitamins, Omega-3, skin health products) are among the fastest-growing categories in Myanmar's pharmacy retail sector.",
  },
];

const products = [
  {
    name: "Cholecalciferol (Vitamin D3) 60,000 IU",
    desc: "Vitamin D deficiency is common across Southeast Asia, including Myanmar — driven by indoor lifestyles in urban areas and dietary gaps. Cholecalciferol 60,000 IU softgels serve as weekly therapeutic supplementation prescribed across Myanmar's clinics and pharmacies. The product is procured both through established pharmacy chains in Yangon and Mandalay, and through rural health programs addressing widespread nutritional deficiencies.",
  },
  {
    name: "Omega-3 Fatty Acids + Vitamin E",
    desc: "Cardiovascular health awareness is growing rapidly among Myanmar's urban population. Omega-3 softgels with Vitamin E support cardiac health, triglyceride management, and anti-inflammatory response — a high-demand category in Myanmar's expanding pharmacy retail sector. The product competes effectively against Thai and Singaporean imports on both price and quality certification.",
  },
  {
    name: "Multivitamin Softgel Capsules",
    desc: "Broad-spectrum nutritional supplementation addressing micronutrient deficiencies across Myanmar's population. Multivitamin softgels are a staple in Myanmar's pharmacy distribution networks — from urban chains in Yangon to regional distributors serving smaller cities and rural areas. Our formulation covers essential vitamins and minerals in a single daily softgel dose.",
  },
  {
    name: "Ginseng + Astaxanthin (Energy & Vitality)",
    desc: "Energy and vitality supplements are extremely popular across Southeast Asian markets, and Myanmar is no exception. Ginseng combined with Astaxanthin (a powerful antioxidant from microalgae) addresses the growing demand for performance, energy, and anti-fatigue products — particularly among Myanmar's urban working population. This formulation category is one of the fastest-growing segments in SE Asian nutraceutical markets.",
  },
  {
    name: "Krill Oil Softgel Capsules",
    desc: "Krill oil delivers Omega-3 fatty acids in phospholipid form for superior bioavailability compared to standard fish oil. The product targets Myanmar's premium supplement segment — health-conscious consumers in Yangon and Mandalay willing to pay for advanced formulations. Krill oil softgels are positioned as a premium alternative to standard Omega-3, with strong demand from Myanmar's growing wellness retail channel.",
  },
  {
    name: "Glutathione Softgel Capsules (Skin Health)",
    desc: "Glutathione is the single most demanded skin health supplement across Southeast Asia — driven by strong consumer preference for skin brightening and antioxidant protection. In Myanmar, as in Thailand, the Philippines, and Indonesia, glutathione supplements command premium pricing and sustained consumer loyalty. Our softgel encapsulation delivers standardized glutathione with enhanced absorption, meeting the specific product expectations of the SE Asian market.",
  },
];

const shippingSteps = [
  {
    title: "Production & QC at Jind facility",
    desc: "Softgel capsules manufactured on the ARBES SGX-806P line, dried under controlled conditions, and subjected to multi-point quality testing — visual inspection, weight uniformity, dissolution, microbial limits. Full Certificate of Analysis (COA) generated per batch.",
  },
  {
    title: "Export packaging & documentation",
    desc: "Products packed in export-grade secondary packaging with desiccants and tamper-evident sealing. Export documentation prepared: COA, WHO-GMP certificate, Free Sale Certificate (FSSAI), commercial invoice, packing list, bill of lading, and Myanmar FDA registration documents where applicable.",
  },
  {
    title: "Dispatch from Chennai, Kolkata, or JNPT port",
    desc: "Sea freight from Chennai (closest major port for Bay of Bengal route), Kolkata (India's primary east-coast port), or JNPT (Nhava Sheva, Mumbai) — all offering regular container services to Yangon. Chennai and Kolkata provide the shortest transit times due to geographic proximity.",
  },
  {
    title: "Arrival at Thilawa port (Yangon)",
    desc: "Direct sea route to Thilawa International Terminal, Myanmar's modern deep-water port facility located 25 km south of Yangon. Thilawa is Myanmar's primary container port and includes a Special Economic Zone (SEZ) that supports pharmaceutical import and distribution operations.",
  },
  {
    title: "Alternative: India-Myanmar land route",
    desc: "Land transport is also possible via India's Northeast — the Moreh-Tamu border crossing connects India's Manipur state to Myanmar's Sagaing Region. This route is used for smaller consignments and offers an alternative when sea freight timelines or costs are less favorable. The India-Myanmar-Thailand Trilateral Highway is improving overland connectivity.",
  },
  {
    title: "Transit time: 7-12 days (sea) / 5-8 days (land)",
    desc: "Sea freight from Chennai/Kolkata to Thilawa (Yangon) takes approximately 7-12 days depending on the shipping line and route. The Moreh-Tamu land route can deliver in 5-8 days for smaller consignments. Air freight via Delhi or Kolkata to Yangon International Airport is available for urgent or sample shipments with 2-3 day delivery.",
  },
];

const faqs = [
  {
    q: "What is the Myanmar FDA registration process for imported softgel capsules?",
    a: "Myanmar's Department of Food and Drug Administration (FDA) requires registration for pharmaceutical imports. The process involves submitting product documentation including Certificate of Analysis, WHO-GMP certificate, Free Sale Certificate, and product specifications. WHO-GMP certification from the manufacturer is accepted as the primary quality credential. India's established pharmaceutical trade relationship with Myanmar — with major Indian companies like Ranbaxy, Wockhardt, and Cipla already operating in the market — means the registration pathway for Indian manufacturers is well-documented and familiar to Myanmar FDA reviewers. Admetus provides all manufacturer-side documentation required for registration.",
  },
  {
    q: "What documentation does Admetus provide for Myanmar imports?",
    a: "We provide comprehensive export documentation: Certificate of Analysis (COA) per batch, WHO-GMP certificate, GMP certificate, Free Sale Certificate from FSSAI, Certificate of Origin, commercial invoice with HS codes, packing list, and bill of lading. For Myanmar FDA registration, we also provide product master files, stability data, and manufacturing process documentation as required. All documents are prepared in English, which is the standard language for pharmaceutical documentation in Myanmar.",
  },
  {
    q: "What is the minimum order quantity for export to Myanmar?",
    a: "MOQs are flexible and designed to accommodate Myanmar's fragmented distributor market. Myanmar's pharmaceutical distribution is characterized by many small-to-medium distributors operating across different regions — not every importer can commit to full-container loads. We support pilot shipments for new Myanmar distributors establishing product lines, as well as bulk orders for established importers. Specific MOQ for your order is confirmed within 48 hours of inquiry at team@admetuslifesciences.com.",
  },
  {
    q: "What are the shipping routes from India to Myanmar?",
    a: "Two primary routes: (1) Sea freight from Chennai or Kolkata to Thilawa port (Yangon) — approximately 7-12 days transit via the Bay of Bengal and Andaman Sea. JNPT (Mumbai) is also available but with longer transit time. (2) Land route via Moreh (Manipur, India) to Tamu (Sagaing, Myanmar) — approximately 5-8 days for smaller consignments. The sea route is standard for full-container loads; the land route offers flexibility for smaller or urgent shipments. Air freight via Kolkata or Delhi to Yangon is available for samples (2-3 days).",
  },
  {
    q: "Which softgel products have the highest demand in Myanmar?",
    a: "The highest-demand categories in Myanmar are: (1) Glutathione — skin health is the single largest nutraceutical category in Southeast Asia, and Myanmar follows this trend strongly. (2) Multivitamins — broad-spectrum nutritional supplementation for a market with significant micronutrient gaps. (3) Omega-3 / Krill Oil — cardiovascular health awareness is growing among urban consumers. (4) Vitamin D3 — deficiency correction is increasingly recognized by Myanmar's healthcare practitioners. (5) Ginseng + Astaxanthin — energy and vitality products are popular across SE Asian markets. We can customize formulations based on specific market positioning and distributor requirements.",
  },
  {
    q: "Can you manufacture private-label softgels for the Myanmar market?",
    a: "Yes. We operate as a private-label and contract manufacturer — your brand name, packaging design, and labeling specifications are applied to the finished product. We support Myanmar-language (Burmese) labeling as required by Myanmar FDA for consumer-facing products. Brand artwork approval and proof signoff happens before production begins. Private labeling is particularly relevant in Myanmar's market where local brand identity drives consumer preference. See our private label softgel manufacturer page for the full process.",
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
      name: "Myanmar",
      item: "https://www.admetuslifesciences.com/export/myanmar/",
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

export default function MyanmarExportPage() {
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
          alt="WHO-GMP certified softgel capsules manufactured in India for export to Myanmar — Admetus Lifesciences"
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
          <span className="label-text text-[var(--gold)]">India &rarr; Myanmar</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            SOFTGEL CAPSULE<br />MANUFACTURER INDIA<br />FOR&nbsp;MYANMAR
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            WHO-GMP certified softgel capsules from Haryana, India &mdash;
            supplying Myanmar&apos;s $161M pharmaceutical import market.
            Flexible MOQ, competitive pricing, sea and land shipping&nbsp;routes.
          </p>
        </div>
      </section>

      {/* Myanmar Market Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Myanmar represents one of the most significant pharmaceutical import
                markets in Southeast Asia for Indian manufacturers. With pharmaceutical
                imports from India valued at approximately <strong>$161 million in
                2024</strong>, India holds the position of Myanmar&apos;s number one
                pharmaceutical import source &mdash; ahead of Thailand, Indonesia,
                Singapore, and China. This dominant trade relationship is the product
                of geographic proximity, competitive Indian manufacturing economics, and
                decades of established procurement relationships between Indian exporters
                and Myanmar distributors.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Myanmar&apos;s pharmaceutical market serves a population of 54 million
                with expanding healthcare infrastructure. The country&apos;s major
                generic pharmaceutical companies &mdash; including Ranbaxy, Wockhardt,
                and Cipla &mdash; have long-established operations in Myanmar, creating
                a familiar and trusted trade corridor for Indian pharma products. Myanmar&apos;s
                pharmacy shelves in Yangon, Mandalay, Naypyidaw, and regional cities are
                stocked predominantly with Indian-manufactured generics and supplements.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences, based in Village Anta, Safidon, Jind, Haryana 126112,
                manufactures WHO-GMP certified softgel capsules positioned for Myanmar&apos;s
                growing nutraceutical segment. Our product range &mdash; from Vitamin D3 and
                Omega-3 to Glutathione and Ginseng formulations &mdash; targets the specific
                therapeutic categories driving demand in Myanmar&apos;s pharmacy retail and
                healthcare distribution networks.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                A significant regulatory development has further opened the market:
                Myanmar&apos;s Companies Act now allows <strong>100% foreign-owned
                companies to distribute pharmaceutical products domestically</strong>.
                This eliminates the historical requirement for local joint venture partners
                and enables Indian manufacturers and their distribution partners to establish
                deeper, more controlled market access. Combined with Myanmar FDA&apos;s
                acceptance of WHO-GMP certification, this creates a streamlined pathway
                for Indian softgel manufacturers to enter and scale in the Myanmar market.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Why Myanmar */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY EXPORT SOFTGELS TO&nbsp;MYANMAR
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {whyMyanmar.map((item, i) => (
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

      {/* Regulatory */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Regulatory Landscape</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              MYANMAR FDA &amp; IMPORT REGISTRATION
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <SectionReveal delay={0.05}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Myanmar&apos;s Department of Food and Drug Administration (Myanmar FDA)
                  oversees pharmaceutical import registration. The registration process
                  requires submission of product documentation including Certificate of
                  Analysis, WHO-GMP certificate, Free Sale Certificate, stability data,
                  and product specifications. While this is a formal regulatory process,
                  it is significantly more streamlined than equivalent systems in ASEAN
                  markets like Thailand (Thai FDA) or Singapore&nbsp;(HSA).
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  The critical credential for Myanmar FDA acceptance is{" "}
                  <strong>WHO-GMP certification</strong> from the manufacturing facility.
                  Admetus Lifesciences holds WHO-GMP certification for our Jind, Haryana
                  facility &mdash; the same standard accepted by Myanmar FDA and recognized
                  as the baseline quality benchmark for imported pharmaceutical products.
                  This certification is what allows Indian generics to dominate Myanmar&apos;s
                  pharmaceutical market.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  India&apos;s major generic pharmaceutical companies &mdash; Ranbaxy,
                  Wockhardt, Cipla, Dr. Reddy&apos;s, and others &mdash; already operate
                  in Myanmar with registered products. This established trade corridor
                  means that Myanmar FDA reviewers are familiar with Indian manufacturing
                  documentation formats, WHO-GMP certificates issued by Indian state drug
                  controllers, and the general quality profile of Indian pharmaceutical
                  products. New Indian manufacturers entering the Myanmar market benefit
                  from this established familiarity.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Admetus Lifesciences provides all manufacturer-side documentation
                  required for Myanmar FDA registration: WHO-GMP certificate, GMP
                  certificate, Free Sale Certificate from FSSAI, Certificate of Analysis
                  per batch, product master file, stability data, manufacturing process
                  documentation, and Certificate of Origin. The buyer or their Myanmar-based
                  regulatory agent handles the in-country registration submission.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Product Range for Myanmar */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Product Range</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              SOFTGEL FORMULATIONS FOR&nbsp;MYANMAR
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
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{product.name}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[68ch]">{product.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.25}>
            <p className="mt-10 body-text text-[var(--text-muted)] max-w-[68ch]">
              Beyond these core formulations, Admetus Lifesciences develops custom
              softgel blends for Myanmar distributors targeting specific therapeutic
              or wellness categories. Southeast Asian market formulation trends
              (skin health, energy, detox) are well-understood and supported.
              Custom formulation requests are evaluated within 48 hours.
              Contact us at{" "}
              <a href="mailto:team@admetuslifesciences.com" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">
                team@admetuslifesciences.com
              </a>{" "}
              with your formulation requirements.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Shipping & Logistics */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Shipping &amp; Logistics</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  INDIA TO MYANMAR SHIPPING&nbsp;ROUTES
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Two distinct shipping routes connect our Haryana facility to
                  Myanmar &mdash; sea freight to Thilawa port (Yangon) or overland
                  via the Moreh-Tamu border crossing. Transit time:
                  7-12 days (sea) or 5-8 days&nbsp;(land).
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {shippingSteps.map(({ title, desc }, i) => (
                  <li key={title} className="flex items-start gap-4 body-text text-[var(--text-cream)]">
                    <span className="shrink-0 mono-text text-[0.6875rem] font-bold text-[var(--gold)] mt-1.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}>{title}</h3>
                      <p className="mt-1 body-text text-[var(--text-muted)] max-w-[58ch] !text-[0.9375rem]">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why Admetus */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Why Admetus</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY MYANMAR DISTRIBUTORS CHOOSE&nbsp;ADMETUS
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <SectionReveal delay={0.05}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  <strong>WHO-GMP certified &mdash; Myanmar FDA accepted.</strong> The
                  single most important credential for pharmaceutical imports into
                  Myanmar. Our WHO-GMP certification from the Jind, Haryana facility is
                  the same standard accepted by Myanmar FDA and recognized across ASEAN
                  pharmaceutical markets. This certification enables product registration
                  and import clearance without additional facility audits.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  <strong>Competitive pricing vs Thai and Chinese suppliers.</strong>{" "}
                  Myanmar&apos;s pharmaceutical market is price-sensitive, and Indian
                  manufacturers compete primarily against Thai and Chinese suppliers.
                  Our Haryana manufacturing economics deliver WHO-GMP certified softgels
                  at pricing that is competitive with Chinese manufacturers while offering
                  the quality documentation and regulatory acceptance that Thai products
                  carry &mdash; the best of both positioning.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  <strong>Flexible MOQ for fragmented distributor market.</strong>{" "}
                  Myanmar&apos;s pharmaceutical distribution is highly fragmented &mdash;
                  hundreds of small-to-medium distributors operate across different
                  regions, cities, and ethnic states. Not every distributor can commit
                  to full-container loads. Admetus supports pilot shipments for new
                  distributors as well as scaled orders for established importers,
                  accommodating Myanmar&apos;s market structure.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  <strong>Full export documentation for Myanmar FDA.</strong> We provide
                  all manufacturer-side documentation required for Myanmar FDA
                  registration and import clearance &mdash; WHO-GMP certificate, COA,
                  Free Sale Certificate, stability data, product master file, and
                  Certificate of Origin. Our documentation package is formatted for
                  Myanmar FDA submission requirements, reducing the administrative burden
                  on the importer&apos;s regulatory team.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Frequently Asked</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              MYANMAR EXPORT Q&amp;A
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
              EXPORT SOFTGELS TO&nbsp;MYANMAR
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              For Myanmar importers and distributors seeking a WHO-GMP certified
              softgel capsule manufacturer in India &mdash; share your requirements
              and our export team will respond within 48&nbsp;hours.
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

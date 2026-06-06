import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const omega3Products = [
  {
    name: "OMEGA-3 + VITAMIN E",
    slug: "omega-3-vitamin-e-softgel",
    composition: "Fish Oil Omega-3 Fatty Acid (EPA & DHA) + Vitamin E Softgel Capsules",
    packSize: "10 x 1 x 10 Softgel Capsules",
    category: "Omega & Heart Health",
    highlights: [
      "Concentrated fish oil with standardized EPA & DHA content",
      "Vitamin E (alpha-tocopherol) prevents oxidative degradation of omega-3 fatty acids",
      "Supports cardiovascular health, healthy triglyceride levels, and brain function",
      "Enteric-compatible softgel shell minimizes fishy aftertaste and repeat",
      "Suitable for domestic and international markets — Halal certified",
    ],
  },
  {
    name: "KRILL OIL",
    slug: "krill-oil-softgel",
    composition: "Antarctic Krill Oil Softgel Capsules — Phospholipid-bound Omega-3, EPA, DHA & Astaxanthin",
    packSize: "10 x 1 x 10 Softgel Capsules",
    category: "Omega & Heart Health",
    highlights: [
      "Sourced from Antarctic krill (Euphausia superba) — sustainable marine harvest",
      "Phospholipid-bound omega-3 delivers superior bioavailability versus triglyceride-form fish oil",
      "Naturally occurring astaxanthin provides built-in antioxidant stability",
      "Supports heart health, joint comfort, cognitive function, and healthy cholesterol",
      "No fishy aftertaste — preferred consumer experience versus standard fish oil capsules",
    ],
  },
];

const marketDrivers = [
  {
    title: "Cardiovascular health demand",
    desc: "Omega-3 fatty acids (EPA and DHA) are among the most clinically validated nutraceutical ingredients for cardiovascular support. Cardiologists and physicians globally recommend omega-3 supplementation for triglyceride management, blood pressure support, and overall heart health — driving consistent prescription and OTC demand.",
  },
  {
    title: "Brain health & cognitive function",
    desc: "DHA constitutes approximately 40% of polyunsaturated fatty acids in the brain. Growing consumer awareness around cognitive health, memory support, and neuroprotective supplementation is expanding the omega-3 softgel market across all age demographics — from prenatal DHA to senior cognitive support.",
  },
  {
    title: "Global market growth",
    desc: "The global omega-3 supplements market is valued at over USD 5 billion and projected to grow at 7–8% CAGR through 2030. India is both a high-growth domestic market and a cost-competitive manufacturing base for omega-3 softgels exported to GCC, Africa, Southeast Asia, and Latin America.",
  },
  {
    title: "Krill oil premium segment",
    desc: "Krill oil represents the fastest-growing segment within omega-3 supplements. Its phospholipid-bound EPA/DHA format offers 2–3x better absorption versus standard fish oil triglycerides, and naturally occurring astaxanthin eliminates the need for separate antioxidant additives. Brand owners are launching krill oil lines to capture the premium health-conscious consumer.",
  },
];

const processSteps = [
  ["Gelatin shell preparation", "Pharma-grade gelatin (bovine or fish-derived for Halal) is blended with plasticizers and purified water. The gelatin mass is heated, deaerated, and cast into thin ribbons on cooled drums — forming the outer shell of each omega-3 softgel."],
  ["Fish oil / krill oil preparation", "Concentrated fish oil (standardized to EPA and DHA specifications) or Antarctic krill oil is blended with Vitamin E or other co-actives. Oil fill is precisely metered to ensure consistent potency per capsule."],
  ["Nitrogen-blanket encapsulation", "Encapsulation on the ARBES SGX-806P occurs under a nitrogen atmosphere to prevent oxidation of polyunsaturated fatty acids. Two gelatin ribbons sandwich the oil fill, die-cut into individual softgels with hermetic seals."],
  ["Controlled drying", "Fresh softgels pass through temperature- and humidity-controlled drying tunnels. Residual moisture is reduced to specification — critical for shelf stability of omega-3 products, which are sensitive to moisture-induced degradation."],
  ["Quality testing", "Every batch undergoes multi-point QC: peroxide value (oxidation marker), EPA/DHA assay (potency verification), weight uniformity, dissolution testing, heavy metal screening, and microbial limits testing per pharmacopeial standards."],
  ["Blister packing & dispatch", "Finished softgels are blister-packed on the Elmach EPI 2000 for tamper-evident primary packaging. Secondary packaging per client brand specifications. Full Certificate of Analysis (COA) and batch records accompany every shipment."],
];

const faqs = [
  {
    q: "What Omega-3 softgel products do you manufacture?",
    a: "We manufacture two omega-3 softgel formulations: (1) Fish Oil Omega-3 Fatty Acid (EPA & DHA) + Vitamin E Softgel Capsules, and (2) Antarctic Krill Oil Softgel Capsules with phospholipid-bound Omega-3, EPA, DHA, and naturally occurring Astaxanthin. Both are available for contract manufacturing, private label, and bulk supply.",
  },
  {
    q: "What is the difference between fish oil and krill oil softgels?",
    a: "Fish oil delivers omega-3 fatty acids (EPA and DHA) in triglyceride form. Krill oil delivers the same EPA and DHA but bound to phospholipids — a structural form that mirrors human cell membranes, resulting in 2–3x better bioavailability. Krill oil also contains naturally occurring astaxanthin (a potent antioxidant), which provides built-in oxidative stability and eliminates the fishy aftertaste common in standard fish oil capsules. Krill oil is positioned as the premium omega-3 format.",
  },
  {
    q: "What is the EPA and DHA content in your Omega-3 softgels?",
    a: "Our fish oil softgels use concentrated fish oil standardized to deliver clinically relevant levels of EPA (eicosapentaenoic acid) and DHA (docosahexaenoic acid) per capsule, with Vitamin E as a co-antioxidant. Exact EPA/DHA specifications can be customized for private label orders based on your target market requirements. Every batch is assayed for EPA and DHA content as part of our standard quality testing protocol.",
  },
  {
    q: "Can I get private label Omega-3 softgel capsules?",
    a: "Yes. We offer full private label services for both fish oil and krill oil omega-3 softgels — custom branding, packaging design, dosage customization, and regulatory documentation. We handle manufacturing, blister packing, secondary packaging, and labeling under your brand identity. See our private label service page for the complete process.",
  },
  {
    q: "What is the MOQ for Omega-3 softgel orders?",
    a: "MOQs are flexible based on formulation, packaging format, and order configuration. We support pilot runs for brands launching new omega-3 product lines as well as full-scale production for established distributors. Specific MOQ for your order is confirmed within 48 hours of inquiry at admetuslifesciences@gmail.com.",
  },
  {
    q: "Are your Omega-3 softgels Halal certified?",
    a: "Yes. Our facility holds Halal certification, and we offer Halal-compliant omega-3 softgel production using fish-derived gelatin shells (instead of bovine gelatin) for markets requiring Halal documentation — particularly GCC, Southeast Asia, and African markets. Halal certificates are provided with every qualifying shipment.",
  },
  {
    q: "What quality testing do you perform on Omega-3 softgels?",
    a: "Every omega-3 batch undergoes: peroxide value testing (measures oxidation level — critical for fish oil stability), EPA and DHA assay (potency verification via HPLC), weight uniformity, dissolution testing, heavy metal screening (mercury, lead, arsenic, cadmium), and microbial limits testing. All results are documented in the Certificate of Analysis (COA) shipped with each batch.",
  },
  {
    q: "Do you export Omega-3 softgel capsules?",
    a: "Yes. We are an export-ready omega-3 manufacturer with documentation support for international shipments — Certificate of Analysis (COA), Free Sale Certificate, Halal certificate, ingredient declarations, and country-specific regulatory paperwork. Sea freight routes via JNPT (Mumbai) or Mundra (Gujarat); air freight via Delhi. We currently support export inquiries from GCC, Africa, Southeast Asia, and Latin America.",
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
      name: "Omega-3 Softgel Capsule Manufacturer India",
      item: "https://www.admetuslifesciences.com/omega-3-softgel-manufacturer-india/",
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

const omega3VitaminEProductJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Omega-3 + Vitamin E Softgel Capsules",
  description:
    "Fish Oil Omega-3 Fatty Acid (EPA & DHA) + Vitamin E Softgel Capsules — manufactured by Admetus Lifesciences, WHO-GMP certified facility in Jind, Haryana, India.",
  brand: {
    "@type": "Brand",
    name: "Admetus Lifesciences",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Admetus Lifesciences",
    url: "https://www.admetuslifesciences.com/",
  },
  url: "https://www.admetuslifesciences.com/products/omega-3-vitamin-e-softgel/",
  category: "Omega & Heart Health",
  material: "Soft Gelatin Capsule",
  additionalProperty: [
    { "@type": "PropertyValue", name: "Pack Size", value: "10 x 1 x 10 Softgel Capsules" },
    { "@type": "PropertyValue", name: "Key Ingredients", value: "Fish Oil, EPA, DHA, Vitamin E" },
    { "@type": "PropertyValue", name: "Certifications", value: "FSSAI, GMP, HACCP, Halal, WHO-GMP" },
  ],
};

const krillOilProductJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Krill Oil Softgel Capsules",
  description:
    "Antarctic Krill Oil Softgel Capsules with phospholipid-bound Omega-3, EPA, DHA & naturally occurring Astaxanthin — manufactured by Admetus Lifesciences, WHO-GMP certified facility in Jind, Haryana, India.",
  brand: {
    "@type": "Brand",
    name: "Admetus Lifesciences",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Admetus Lifesciences",
    url: "https://www.admetuslifesciences.com/",
  },
  url: "https://www.admetuslifesciences.com/products/krill-oil-softgel/",
  category: "Omega & Heart Health",
  material: "Soft Gelatin Capsule",
  additionalProperty: [
    { "@type": "PropertyValue", name: "Pack Size", value: "10 x 1 x 10 Softgel Capsules" },
    { "@type": "PropertyValue", name: "Key Ingredients", value: "Antarctic Krill Oil, Phospholipid-bound Omega-3, EPA, DHA, Astaxanthin" },
    { "@type": "PropertyValue", name: "Certifications", value: "FSSAI, GMP, HACCP, Halal, WHO-GMP" },
  ],
};

export default function Omega3ManufacturerIndiaPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(omega3VitaminEProductJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(krillOilProductJsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="/images/facility/softgels-pile-cinematic.jpg"
          alt="Omega-3 fish oil softgel capsules manufactured at Admetus Lifesciences — WHO-GMP certified facility in India"
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
          <span className="label-text text-[var(--gold)]">Fish Oil  &middot;  Krill Oil  &middot;  EPA &amp; DHA</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            OMEGA-3 SOFTGEL CAPSULE<br />MANUFACTURER IN&nbsp;INDIA
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Fish Oil and Krill Oil omega-3 softgel manufacturing from a WHO-GMP
            certified facility in Jind, Haryana — contract manufacturing, private
            label, and export-ready production for nutraceutical brands&nbsp;worldwide.
          </p>
        </div>
      </section>

      {/* Intro / context */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Admetus Lifesciences is an <strong>omega-3 softgel capsule manufacturer in India</strong>,
                producing Fish Oil (EPA &amp; DHA) + Vitamin E softgel capsules and Antarctic Krill
                Oil softgel capsules at our WHO-GMP certified facility in{" "}
                <strong>Village Anta, Tehsil Safidon, District Jind, Haryana 126112</strong>.
                We serve brand owners, distributors, and importers across India and international
                markets through contract manufacturing, private label, and bulk supply arrangements.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Omega-3 fatty acids — specifically eicosapentaenoic acid (EPA) and docosahexaenoic
                acid (DHA) — are among the most clinically validated nutraceutical ingredients
                globally. Our omega-3 manufacturing capabilities include both standard fish oil
                encapsulation and premium krill oil processing, with nitrogen-atmosphere production
                to prevent oxidation and preserve potency through the full shelf life.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Products section */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Our Omega-3 Products</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              FISH OIL &amp; KRILL OIL SOFTGEL&nbsp;CAPSULES
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {omega3Products.map((product, idx) => (
              <SectionReveal key={product.slug} delay={idx * 0.08}>
                <div className="border border-[var(--border-subtle)] bg-[var(--background)] p-8">
                  <span className="mono-text text-[0.6875rem] text-[var(--gold)] uppercase tracking-[0.1em] block mb-3">
                    {product.category}
                  </span>
                  <h3 className="heading-2 text-[var(--foreground)] mb-2" style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.5rem)" }}>
                    {product.name}
                  </h3>
                  <p className="body-text text-[var(--text-cream)] mb-4" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    {product.composition}
                  </p>
                  <p className="mono-text text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.1em] mb-5">
                    Pack: {product.packSize}
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {product.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 body-text text-[var(--text-muted)] !text-[0.9375rem]">
                        <span className="text-[var(--gold)] shrink-0 mt-1.5 text-[0.5rem]">&bull;</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/products/${product.slug}/`}
                    className="inline-flex items-center gap-2 text-[var(--gold)] hover:text-[var(--gold-light)] label-text transition-colors duration-200"
                  >
                    View product details
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fish Oil vs Krill Oil comparison table */}
      <section className="py-16 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)] mb-3 block">COMPARISON</span>
          <h2 className="display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
            FISH OIL VS KRILL OIL
          </h2>
          <div className="gold-rule w-16 mb-8" />
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--border-subtle)]">
                  <th scope="col" className="py-4 pr-6 label-text text-[var(--gold)]">Feature</th>
                  <th scope="col" className="py-4 pr-6 label-text text-[var(--gold)]">Fish Oil Omega-3</th>
                  <th scope="col" className="py-4 label-text text-[var(--gold)]">Krill Oil</th>
                </tr>
              </thead>
              <tbody className="body-text text-[var(--text-cream)]">
                <tr className="border-b border-[var(--border-subtle)]">
                  <td className="py-4 pr-6 text-[var(--text-muted)]">Omega-3 Form</td>
                  <td className="py-4 pr-6">Triglyceride-bound EPA &amp; DHA</td>
                  <td className="py-4">Phospholipid-bound EPA &amp; DHA</td>
                </tr>
                <tr className="border-b border-[var(--border-subtle)]">
                  <td className="py-4 pr-6 text-[var(--text-muted)]">Bioavailability</td>
                  <td className="py-4 pr-6">Standard absorption</td>
                  <td className="py-4">Superior — phospholipid form crosses cell membranes more efficiently</td>
                </tr>
                <tr className="border-b border-[var(--border-subtle)]">
                  <td className="py-4 pr-6 text-[var(--text-muted)]">Astaxanthin</td>
                  <td className="py-4 pr-6">Not present</td>
                  <td className="py-4">Naturally occurring — provides built-in antioxidant protection</td>
                </tr>
                <tr className="border-b border-[var(--border-subtle)]">
                  <td className="py-4 pr-6 text-[var(--text-muted)]">Aftertaste</td>
                  <td className="py-4 pr-6">Fishy aftertaste common</td>
                  <td className="py-4">Minimal to no aftertaste</td>
                </tr>
                <tr className="border-b border-[var(--border-subtle)]">
                  <td className="py-4 pr-6 text-[var(--text-muted)]">Price Tier</td>
                  <td className="py-4 pr-6">Cost-effective — higher volume</td>
                  <td className="py-4">Premium segment — higher per-unit value</td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 text-[var(--text-muted)]">Pack Size</td>
                  <td className="py-4 pr-6">10 x 1 x 10 Softgel Capsules</td>
                  <td className="py-4">10 x 1 x 10 Softgel Capsules</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Omega-3 softgels */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Market Opportunity</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY OMEGA-3 SOFTGEL&nbsp;CAPSULES
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {marketDrivers.map((driver, i) => (
              <SectionReveal key={driver.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{driver.title}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">{driver.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing process for Omega-3 */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Manufacturing Process</span>
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  OMEGA-3 ENCAPSULATION&nbsp;PROCESS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Omega-3 softgel manufacturing demands specialized handling —
                  polyunsaturated fatty acids are highly susceptible to oxidation.
                  Our production line operates under nitrogen atmosphere with
                  controlled temperature and humidity at every&nbsp;stage.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <ol className="space-y-4">
                {processSteps.map(([title, desc], i) => (
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

      {/* Private label & contract manufacturing */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Private Label &amp; Contract Manufacturing</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              CUSTOM OMEGA-3&nbsp;FORMULATIONS
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <SectionReveal delay={0.05}>
              <div>
                <h3 className="heading-2 text-[var(--foreground)] mb-3" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>
                  Private label omega-3 softgels
                </h3>
                <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
                  Launch your own omega-3 brand without building a manufacturing facility.
                  We handle formulation, encapsulation, blister packing, and secondary
                  packaging under your brand identity. Choose from our standard fish oil
                  or krill oil formulations, or request custom EPA/DHA ratios and
                  co-active ingredients tailored to your target market. See our{" "}
                  <Link href="/private-label-softgel-manufacturer-india/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">private label service page</Link> for
                  the full process.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div>
                <h3 className="heading-2 text-[var(--foreground)] mb-3" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>
                  Contract manufacturing for omega-3
                </h3>
                <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
                  Bring your existing omega-3 formulation — we manufacture to your
                  specification with full batch traceability, Certificate of Analysis
                  per batch, and packaging per your requirements. Our{" "}
                  <Link href="/contract-manufacturing/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">contract manufacturing service</Link> supports
                  both domestic Indian brands and international importers with
                  export-ready documentation.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div>
                <h3 className="heading-2 text-[var(--foreground)] mb-3" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>
                  Custom dosage &amp; packaging
                </h3>
                <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
                  We support custom softgel sizes, fill weights, shell colors (clear,
                  amber, opaque), and packaging formats — blister packs, HDPE bottles,
                  strip packs, or bulk drums for further downstream packaging. Custom
                  artwork, carton design, and labeling are included in our private
                  label service.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div>
                <h3 className="heading-2 text-[var(--foreground)] mb-3" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>
                  Export-ready omega-3 manufacturing
                </h3>
                <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
                  Our facility holds WHO-GMP, FSSAI, GMP, HACCP, and Halal certifications —
                  required for both domestic compliance and international export.
                  We provide COA, Free Sale Certificate, Halal certificate, ingredient
                  declarations, and country-specific regulatory paperwork. See our{" "}
                  <Link href="/export/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">export operations page</Link> for
                  details on international shipment support.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Frequently Asked</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              OMEGA-3 MANUFACTURING Q&amp;A
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
              START YOUR OMEGA-3&nbsp;LINE
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Whether you&apos;re launching a fish oil brand, adding krill oil to your
              portfolio, or sourcing bulk omega-3 softgels for distribution — we
              manufacture to your specification with WHO-GMP certified quality.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Request a Quote
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/products/omega-3-vitamin-e-softgel/"
                className="inline-flex items-center gap-2 px-7 py-3 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--gold)] border border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg-black)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Omega-3 + Vitamin E
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/products/krill-oil-softgel/"
                className="inline-flex items-center gap-2 px-7 py-3 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--gold)] border border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg-black)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Krill Oil
                <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { SectionReveal } from "@/components/section-reveal";

/* ═══ Section 1: HERO ═══ */
function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] md:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image with warm overlay */}
      <div className="absolute inset-0 img-warm-overlay">
        <img
          src="/images/facility/softgels-bulk.jpg"
          alt="Premium amber softgel capsules manufactured by Admetus Lifesciences — WHO-GMP certified contract manufacturer in Haryana, India"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager" fetchPriority="high"
          style={{ animation: "ken-burns 25s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.88) 40%, rgba(10,10,10,0.55) 70%, rgba(10,10,10,0.4) 100%)" }} />
      </div>

      {/* Margin label */}
      <div
        className={`hidden xl:block absolute left-6 top-1/2 -translate-y-1/2 margin-label ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "opacity 500ms cubic-bezier(0.23, 1, 0.32, 1) 1000ms" }}
      >
        SOFTGEL MANUFACTURING
      </div>

      {/* Content -- left-aligned, asymmetric */}
      <div className="relative z-10 mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)] pt-20 pb-20 md:pt-0 md:pb-0">
        <div className="max-w-[var(--content-narrow)]">
          <div
            className={`label-text text-[var(--gold)] mb-3 md:mb-5 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transition: "opacity 500ms cubic-bezier(0.23, 1, 0.32, 1) 200ms, transform 500ms cubic-bezier(0.23, 1, 0.32, 1) 200ms" }}
          >
            ADMETUS LIFESCIENCES
          </div>

          <h1 className="sr-only">Admetus Lifesciences - Precision Encapsulated Softgel Capsules</h1>
          <div aria-hidden="true">
            {["PRECISION", "ENCAPSULATED"].map((word, i) => (
              <div
                key={word}
                className={`display-hero text-[var(--hero-text)] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transition: `opacity 600ms cubic-bezier(0.23, 1, 0.32, 1) ${300 + i * 80}ms, transform 600ms cubic-bezier(0.23, 1, 0.32, 1) ${300 + i * 80}ms` }}
              >
                {word}
              </div>
            ))}
          </div>

          <div
            className={`gold-rule w-16 md:w-24 mt-4 md:mt-6 origin-left ${loaded ? "scale-x-100" : "scale-x-0"}`}
            style={{ transition: `transform 500ms cubic-bezier(0.23, 1, 0.32, 1) 600ms` }}
          />

          <p
            className={`mt-3 md:mt-4 body-large text-[var(--text-cream)] max-w-[480px] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transition: "opacity 500ms cubic-bezier(0.23, 1, 0.32, 1) 700ms, transform 500ms cubic-bezier(0.23, 1, 0.32, 1) 700ms" }}
          >
            Improving the quality of your life through better health. One of India&apos;s advanced manufacturers, exporters and suppliers of Nutraceutical Soft Gelatin Capsules.
          </p>

          <div
            className={`mt-6 md:mt-8 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transition: "opacity 500ms cubic-bezier(0.23, 1, 0.32, 1) 800ms, transform 500ms cubic-bezier(0.23, 1, 0.32, 1) 800ms" }}
          >
            <Link
              href="/manufacturing/"
              className="btn-editorial cursor-pointer inline-flex items-center justify-center gap-3 px-6 md:px-[var(--space-8)] min-h-[44px] py-3 md:py-[var(--space-4)] text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--gold)] border-2 border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg-black)]"
              style={{ fontFamily: "var(--font-display), Archivo, sans-serif" }}
            >
              Explore Our Facility
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* Section number */}
      <span className="hidden lg:block absolute top-20 right-[var(--gutter)] section-number">01</span>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "opacity 500ms cubic-bezier(0.23, 1, 0.32, 1) 1400ms" }}
      >
        <span className="label-text text-[var(--text-muted)] !text-[0.5rem]">Scroll</span>
        <div
          className="w-px h-8 md:h-10 bg-gradient-to-b from-[var(--text-muted)] to-transparent origin-top"
          style={{ animation: "scroll-drift 2.5s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}

/* ═══ Section 2: CREDIBILITY STRIP ═══ */
function CredibilityStrip() {
  const certs = [
    { name: "FSSAI", desc: "Food Safety Standards", img: "/images/cert-fssai.png" },
    { name: "GMP", desc: "Good Manufacturing Practice", img: "/images/cert-gmp.png" },
    { name: "HACCP", desc: "Hazard Analysis & CCP", img: "/images/cert-haccp.png" },
    { name: "Halal", desc: "Halal Certified", img: "/images/cert-halal.png" },
    { name: "WHO-GMP", desc: "WHO Standards", img: "/images/cert-who.png" },
  ];

  return (
    <section className="py-6 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
        <div className="flex overflow-x-auto scrollbar-hide gap-6 md:gap-4 md:flex-wrap md:justify-between md:overflow-visible">
          {certs.map((cert, i) => (
            <SectionReveal key={cert.name} delay={i * 0.06}>
              <div className="flex items-center gap-3 min-w-[150px] flex-shrink-0 md:min-w-0 md:flex-shrink">
                <img src={cert.img} alt={cert.name} className="h-10 w-10 object-contain shrink-0" width={40} height={40} />
                <div className="flex flex-col gap-0.5">
                  <span
                    className="text-[0.875rem] font-bold text-[var(--foreground)] tracking-tight leading-tight"
                    style={{ fontFamily: "var(--font-display), Archivo, sans-serif" }}
                  >
                    {cert.name}
                  </span>
                  <span className="text-[0.5625rem] tracking-[0.08em] uppercase text-[var(--text-muted)] whitespace-nowrap" style={{ fontFamily: "var(--font-display)" }}>
                    {cert.desc}
                  </span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ═══ Section 2b: METRICS ═══ */
function Metrics() {
  const metrics = [
    { value: "2020", label: "Established" },
    { value: "05", label: "International Certifications" },
    { value: "80+", label: "Product Range" },
    { value: "100%", label: "Batch Quality Inspection" },
  ];

  return (
    <section className="py-10 md:py-12 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((m, i) => (
            <SectionReveal key={m.label} delay={i * 0.08}>
              <div>
                <div
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--gold)]"
                  style={{ fontFamily: "var(--font-display), sans-serif" }}
                >
                  {m.value}
                </div>
                <div className="mt-1.5 text-[0.625rem] md:text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                  {m.label}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ Section 3: MANIFESTO (IntersectionObserver reveal) ═══ */
function Manifesto() {
  const [visibleLines, setVisibleLines] = useState<Set<number>>(new Set());
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleLines(new Set([0, 1, 2]));
      return;
    }

    const observers: IntersectionObserver[] = [];
    lineRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleLines(prev => new Set(prev).add(i));
            obs.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  const lines = [
    "We don\u2019t just manufacture softgel capsules.",
    "We engineer precision at molecular scale.",
    "Every capsule carries a commitment to human health.",
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[var(--bg-warm-dark)] relative">
      {/* Margin label */}
      <div className="hidden xl:block absolute left-6 top-1/2 -translate-y-1/2 margin-label">
        PHILOSOPHY
      </div>

      <span className="hidden lg:block absolute top-20 right-[var(--gutter)] section-number">02</span>

      <div className="max-w-[860px] px-[var(--gutter)] mx-auto lg:mx-0 lg:ml-[calc(var(--gutter)+2rem)]">
        <span className="label-text text-[var(--gold)] mb-4 md:mb-6 block">OUR PHILOSOPHY</span>
        <div className="space-y-3 md:space-y-4">
          {lines.map((line, i) => (
            <div
              key={i}
              ref={(el) => { lineRefs.current[i] = el; }}
              className={`text-[var(--foreground)] ${
                visibleLines.has(i) ? "opacity-100 translate-y-0" : "opacity-[0.12] translate-y-3"
              }`}
              style={{
                fontFamily: "var(--font-display), sans-serif",
                fontSize: "clamp(1.125rem, 2.5vw, 1.75rem)",
                fontWeight: 700,
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
                transition: `opacity 700ms cubic-bezier(0.23, 1, 0.32, 1) ${i * 150}ms, transform 700ms cubic-bezier(0.23, 1, 0.32, 1) ${i * 150}ms`,
              }}
            >
              {line}
            </div>
          ))}
        </div>
        <div
          className={`gold-rule mt-8 md:mt-12 w-32 md:w-48 origin-left ${
            visibleLines.has(2) ? "scale-x-100" : "scale-x-0"
          }`}
          style={{ transition: "transform 700ms cubic-bezier(0.23, 1, 0.32, 1) 600ms" }}
        />
      </div>
    </section>
  );
}

/* ═══ Section 4: SCALE & METRICS ═══ */
function ScaleMetrics() {
  return (
    <section className="relative py-14 md:py-20 bg-[var(--bg-black)]">
      <div className="absolute inset-0 img-vignette">
        <img
          src="/images/facility/softgels-tray-closeup.jpg"
          alt="Close-up of nutraceutical softgel capsules manufactured at Admetus Lifesciences, Village Anta, Haryana"
          className="w-full h-full object-cover opacity-12"
          width={1920}
          height={1080}
          loading="lazy"
        />
      </div>

      <span className="hidden lg:block absolute top-20 right-[var(--gutter)] section-number z-10">03</span>

      <div className="relative z-10 mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
        <SectionReveal>
          <span className="label-text text-[var(--gold)] mb-3 block">OUR FACILITY</span>
          <h2 className="display-section text-[var(--foreground)]">
            BUILT FOR<br />SCALE
          </h2>
        </SectionReveal>

        {/* Thin gold rule */}
        <div className="gold-rule w-16 mt-4 md:mt-6 mb-8 md:mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1px_1fr] gap-8 lg:gap-16">
          <SectionReveal delay={0.1}>
            <div className="max-w-[65ch]">
              <p className="body-large text-[var(--text-cream)]">
                Our <Link href="/softgel-capsule-manufacturer-haryana/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">Haryana facility</Link> produces over <span className="text-[var(--foreground)] font-semibold">80+ product formulations</span> across
                multiple precision-formulated product lines, each backed by 5 international certifications. Supplying hospitals and retailers worldwide.
              </p>
              <p className="mt-4 body-text text-[var(--text-muted)]">
                State-of-the-art ARBES SGX-806P encapsulation line.
                Elmach EPI 2000 blister packaging.
                WHO-GMP certified facility in Haryana, India.
              </p>
            </div>
          </SectionReveal>

          <div className="hidden lg:block bg-[var(--border-subtle)]" />

          <div className="flex flex-col gap-6 md:gap-8">
            {[
              { label: "Equipment", value: "ARBES SGX-806P rotary die encapsulation, Elmach EPI 2000 blister sealing" },
              { label: "Certifications", value: "FSSAI, GMP, HACCP, Halal, WHO-GMP" },
              { label: "Quality Control", value: "100% batch inspection with full traceability documentation" },
            ].map((item, i) => (
              <SectionReveal key={item.label} delay={0.15 + i * 0.08}>
                <div>
                  <span className="label-text text-[var(--text-muted)]">{item.label}</span>
                  <p className="mt-1.5 body-text text-[var(--text-cream)]">{item.value}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ Section 5: PRODUCTS -- Grid ═══ */
function ProductShowcase() {
  const featured = products.slice(0, 7);

  return (
    <section className="py-14 md:py-20 bg-[var(--bg-charcoal)]">
      <span className="hidden lg:block absolute top-20 right-[var(--gutter)] section-number z-20">04</span>

      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
        <SectionReveal>
          <span className="label-text text-[var(--gold)]">FORMULATION PORTFOLIO</span>
          <h2 className="mt-3 display-section text-[var(--foreground)]">
            ENGINEERED FOR EFFICACY
          </h2>
          <div className="gold-rule w-12 mt-4 mb-4" />
          <p className="body-text text-[var(--text-cream)] max-w-[52ch] mb-8 md:mb-10" style={{ fontSize: "0.9375rem" }}>
            Precision-formulated softgel capsules &mdash; each designed for optimal
            bioavailability and manufactured under strict quality controls. Supplied to hospitals and retailers worldwide.
          </p>
        </SectionReveal>
      </div>

      {/* Product grid */}
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {featured.map((product, i) => (
            <SectionReveal key={product.slug} delay={i * 0.04}>
              <Link href={`/products/${product.slug}/`}>
                <div className="product-card border border-[var(--border-subtle)] p-4 md:p-5 h-full cursor-pointer min-h-[44px]"
                  style={{ background: `linear-gradient(160deg, ${product.color}06, var(--bg-charcoal))` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="mono-text text-[0.5625rem] tracking-[0.15em] text-[var(--text-muted)] opacity-50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-block px-2 py-0.5 text-[0.5rem] uppercase tracking-[0.08em] border" style={{ color: product.color, borderColor: `${product.color}30` }}>
                      {product.category}
                    </span>
                  </div>
                  <h3 className="mt-3 heading-2 text-[var(--foreground)] uppercase break-words">{product.name}</h3>
                  <p className="mt-1 text-[0.75rem] text-[var(--gold)]">{product.tagline}</p>
                  <p className="mt-2 text-[0.75rem] text-[var(--text-muted)] line-clamp-2 leading-relaxed">{product.composition}</p>
                  <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="text-[0.625rem] text-[var(--text-muted)]">{product.packSize}</span>
                    <span className="text-[0.625rem] text-[var(--gold)] flex items-center gap-1">Details <ArrowRight size={10} /></span>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] mt-6 md:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 md:gap-4">
        <Link
          href="/products/"
          className="min-h-[44px] inline-flex items-center justify-center sm:justify-start text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[var(--gold)] gap-2"
          style={{
            fontFamily: "var(--font-display)",
            transition: "color 200ms cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        >
          View All Products <ArrowRight size={13} />
        </Link>
        <a
          href="/catalogue.pdf"
          className="btn-editorial inline-flex items-center justify-center gap-2 px-7 min-h-[44px] py-3 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[var(--foreground)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 cursor-pointer"
        >
          Download Product Catalogue
          <ArrowRight size={13} />
        </a>
      </div>
    </section>
  );
}

/* ═══ Section 5b: CATALOGUE DOWNLOAD ═══ */
function CatalogueDownload() {
  return (
    <section className="py-14 md:py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-center">
          <SectionReveal>
            <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] overflow-hidden border border-[var(--border-subtle)] img-warm-overlay relative max-w-md">
              <img
                src="/images/facility/encapsulation-arbes.jpg"
                width={1000}
                height={1250}
                alt="Admetus Lifesciences product catalogue cover featuring nutraceutical softgel capsules"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.55), transparent 50%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                <span className="label-text text-[var(--gold)]">2026 EDITION</span>
                <h3 className="mt-2 heading-2 text-white uppercase" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}>
                  Product<br />Catalogue
                </h3>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div>
              <span className="label-text text-[var(--gold)] mb-3 block">DOWNLOAD CATALOGUE</span>
              <h2 className="display-section text-[var(--foreground)] mt-3 mb-4">
                EXPLORE OUR<br />FULL RANGE
              </h2>
              <div className="gold-rule w-16 mb-6" />
              <p className="body-text text-[var(--text-cream)] max-w-[58ch] mb-6" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Get the complete Admetus product catalogue with detailed
                composition, pack sizes, and product photographs across 80+
                softgel formulations. Built for brand owners, distributors,
                and importers evaluating&nbsp;partnerships.
              </p>

              <ul className="space-y-2.5 mb-8 max-w-[52ch]">
                <li className="flex items-start gap-3 body-text text-[var(--text-muted)]" style={{ fontSize: "0.875rem" }}>
                  <span className="text-[var(--gold)] mt-1">&bull;</span>
                  Full product range with images, composition, and pack sizes
                </li>
                <li className="flex items-start gap-3 body-text text-[var(--text-muted)]" style={{ fontSize: "0.875rem" }}>
                  <span className="text-[var(--gold)] mt-1">&bull;</span>
                  Manufacturing certifications and quality documentation
                </li>
                <li className="flex items-start gap-3 body-text text-[var(--text-muted)]" style={{ fontSize: "0.875rem" }}>
                  <span className="text-[var(--gold)] mt-1">&bull;</span>
                  Contract manufacturing &amp; private label capabilities
                </li>
              </ul>

              <a
                href="/catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Download Catalogue (PDF)
                <ArrowRight size={13} />
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══ Section 6: MANUFACTURING PROCESS ═══ */
function ManufacturingProcess() {
  const steps = [
    { num: "01", title: "RAW MATERIAL SOURCING", desc: "Nutraceutical-grade ingredients sourced from certified global suppliers." },
    { num: "02", title: "QUALITY TESTING", desc: "Every batch undergoes rigorous incoming material analysis." },
    { num: "03", title: "GELATIN PREPARATION", desc: "Precision gelatin formulation for optimal capsule integrity." },
    { num: "04", title: "ENCAPSULATION", desc: "ARBES SGX-806P rotary die process at controlled temperature." },
    { num: "05", title: "DRYING & TUMBLING", desc: "Controlled-environment drying for consistent moisture content." },
    { num: "06", title: "INSPECTION & SORTING", desc: "Visual and automated defect detection, 100% inspection." },
    { num: "07", title: "BLISTER PACKAGING", desc: "Elmach EPI 2000 blister sealing with tamper-evident packaging." },
  ];

  return (
    <section className="py-14 md:py-20 bg-[var(--bg-warm-dark)]">
      <span className="hidden lg:block absolute top-20 right-[var(--gutter)] section-number z-20">05</span>

      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
        <SectionReveal>
          <span className="label-text text-[var(--gold)] mb-3 block">MANUFACTURING</span>
          <h2 className="display-section text-[var(--foreground)]">THE PROCESS</h2>
          <div className="gold-rule w-12 mt-4 mb-8 md:mb-10" />
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-6 md:gap-y-8">
          {steps.map((step, i) => (
            <SectionReveal key={step.num} delay={i * 0.05}>
              <div className="flex gap-4 group">
                <span className="text-[0.5625rem] font-mono text-[var(--gold)] opacity-60 pt-1">{step.num}</span>
                <div>
                  <h3
                    className="text-sm font-bold uppercase tracking-[0.05em] text-[var(--foreground)]"
                    style={{ transition: "color 200ms cubic-bezier(0.23, 1, 0.32, 1)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[0.8125rem] text-[var(--text-muted)] leading-relaxed max-w-[45ch]">{step.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ Section 7: VISUAL BREAK (static) ═══ */
function VisualBreak() {
  return (
    <section className="relative h-[35vh] md:h-[50vh] overflow-hidden">
      <div className="absolute inset-0 img-vignette">
        <img
          src="/images/facility/softgels-production-line.jpg"
          alt="Admetus Lifesciences softgel capsules on the production line, Village Anta, Haryana"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.55), transparent 50%, rgba(10,10,10,0.25))" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.05), transparent 60%)" }} />

      <div className="absolute inset-0 flex items-end p-[var(--gutter)]">
        <div className="flex items-center gap-4 md:gap-6">
          <div className="gold-rule w-6 md:w-8" />
          <span className="label-text text-white text-[0.5625rem] md:text-[0.6875rem]" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}>
            VILLAGE ANTA, HARYANA &mdash; EST. 2020
          </span>
        </div>
      </div>
    </section>
  );
}

/* ═══ Section 8: DIFFERENTIATORS ═══ */
function Differentiators() {
  const cards = [
    {
      title: "Advanced Equipment",
      body: "ARBES SGX-806P encapsulation and Elmach EPI 2000 blister packaging \u2014 precision-engineered for consistency.",
      image: "/images/facility/encapsulation-arbes.jpg",
    },
    {
      title: "End-to-End Quality",
      body: "From raw material testing to final product release \u2014 100% inspection at every stage.",
      image: "/images/facility/encapsulation-arbes.jpg",
    },
    {
      title: "Globally Certified",
      body: "FSSAI, GMP, HACCP, Halal, and WHO-GMP certified. Meeting the world\u2019s strictest standards.",
      image: "/images/facility/capsule-drying-women.jpg",
    },
    {
      title: "Custom Formulations",
      body: "Private label and contract manufacturing with flexible MOQs and custom formulation capabilities.",
      image: "/images/facility/elmach-blister-machine.jpg",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-[var(--bg-charcoal)] relative">
      <span className="hidden lg:block absolute top-20 right-[var(--gutter)] section-number">06</span>

      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
        <SectionReveal>
          <span className="label-text text-[var(--gold)] mb-3 block">WHY ADMETUS</span>
          <h2 className="display-section text-[var(--foreground)] mb-4">
            THE ADMETUS<br />DIFFERENCE
          </h2>
          <div className="gold-rule w-16 mb-8 md:mb-10" />
        </SectionReveal>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <SectionReveal delay={0.05} className="md:col-span-2">
            <div className="diff-card relative overflow-hidden border border-[var(--border-subtle)] group min-h-[280px] md:min-h-[380px] flex flex-col justify-end img-warm-overlay">
              <img src={cards[0].image} alt={cards[0].title} className="absolute inset-0 w-full h-full object-cover" width={600} height={800} loading="lazy" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.88), rgba(10,10,10,0.2) 60%, transparent)" }} />
              <div className="relative p-5 md:p-6 z-10">
                <span className="mono-text text-[0.5625rem] text-[var(--text-muted)] opacity-40 block mb-2">01</span>
                <h3 className="heading-2 md:heading-1 text-white">{cards[0].title}</h3>
                <p className="mt-2 body-text text-white/80 max-w-[65ch]">{cards[0].body}</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="diff-card relative overflow-hidden border border-[var(--border-subtle)] group min-h-[280px] md:min-h-[380px] flex flex-col justify-end img-warm-overlay">
              <img src={cards[1].image} alt={cards[1].title} className="absolute inset-0 w-full h-full object-cover" width={600} height={800} loading="lazy" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.88), rgba(10,10,10,0.2) 60%, transparent)" }} />
              <div className="relative p-5 z-10">
                <span className="mono-text text-[0.5625rem] text-[var(--text-muted)] opacity-40 block mb-2">02</span>
                <h3 className="heading-2 text-white">{cards[1].title}</h3>
                <p className="mt-1.5 body-text text-white/80">{cards[1].body}</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="diff-card relative overflow-hidden border border-[var(--border-subtle)] group min-h-[260px] md:min-h-[340px] flex flex-col justify-end img-warm-overlay">
              <img src={cards[2].image} alt={cards[2].title} className="absolute inset-0 w-full h-full object-cover" width={600} height={800} loading="lazy" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.88), rgba(10,10,10,0.2) 60%, transparent)" }} />
              <div className="relative p-5 z-10">
                <span className="mono-text text-[0.5625rem] text-[var(--text-muted)] opacity-40 block mb-2">03</span>
                <h3 className="heading-2 text-white">{cards[2].title}</h3>
                <p className="mt-1.5 body-text text-white/80">{cards[2].body}</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2} className="md:col-span-2">
            <div className="diff-card relative overflow-hidden border border-[var(--border-subtle)] group min-h-[260px] md:min-h-[340px] flex flex-col justify-end img-warm-overlay">
              <img src={cards[3].image} alt={cards[3].title} className="absolute inset-0 w-full h-full object-cover" width={600} height={800} loading="lazy" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.88), rgba(10,10,10,0.2) 60%, transparent)" }} />
              <div className="relative p-5 md:p-6 z-10">
                <span className="mono-text text-[0.5625rem] text-[var(--text-muted)] opacity-40 block mb-2">04</span>
                <h3 className="heading-2 md:heading-1 text-white">{cards[3].title}</h3>
                <p className="mt-2 body-text text-white/80 max-w-[65ch]">{cards[3].body}</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══ Section 9: PARTNERSHIP ═══ */
function Partnership() {
  return (
    <section className="min-h-[auto] md:min-h-[75vh] flex bg-[var(--bg-warm-dark)] relative">
      <span className="hidden lg:block absolute top-20 right-[var(--gutter)] section-number z-20">07</span>

      {/* Left: Image with warm overlay */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden img-warm-overlay">
        <img
          src="/images/facility/capsule-drying-women.jpg"
          alt="Nutraceutical research and formulation process for softgel capsule manufacturing"
          className="absolute inset-0 w-full h-full object-cover"
          width={1200}
          height={800}
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,23,16,0.3), rgba(10,10,10,0.15))" }} />
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center py-14 md:py-20 lg:py-0 px-[var(--gutter)] lg:pl-[var(--space-16)]">
        <div className="max-w-lg">
          <SectionReveal direction="right">
            <span className="label-text text-[var(--gold)]">PARTNER WITH US</span>
            <h2 className="mt-4 display-section text-[var(--foreground)]">
              YOUR BRAND.<br />OUR SCIENCE.
            </h2>
            <div className="gold-rule w-12 mt-5 mb-5" />
            <p className="body-large text-[var(--text-cream)]">
              From concept to shelf &mdash; turnkey private label softgel manufacturing.
            </p>
          </SectionReveal>
          <SectionReveal direction="right" delay={0.15}>
            <ul className="mt-6 md:mt-8 space-y-3">
              {["Custom formulations", "Flexible MOQs", "Regulatory support", "Export documentation"].map((s) => (
                <li key={s} className="flex items-center gap-4 body-text text-[var(--text-cream)]">
                  <span className="w-5 h-px bg-[var(--gold)] flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <Link
              href="/contract-manufacturing/"
              className="btn-editorial cursor-pointer mt-8 md:mt-10 inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 md:px-[var(--space-8)] min-h-[44px] py-3 md:py-[var(--space-4)] text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Start a Project
              <ArrowRight size={13} />
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

/* ═══ Section 10: GLOBAL REACH ═══ */
function GlobalReach() {
  const features = [
    { title: "Export Markets", desc: "Serving nutraceutical markets across multiple international regions." },
    { title: "Regulatory Compliance", desc: "Documentation and certifications for seamless global market entry." },
    { title: "Logistics Support", desc: "Export packaging, freight coordination, and customs documentation." },
  ];

  return (
    <section className="py-14 md:py-20 bg-[var(--bg-black)] relative">
      <span className="hidden lg:block absolute top-20 right-[var(--gutter)] section-number">08</span>

      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16">
          <SectionReveal>
            <div>
              <span className="label-text text-[var(--gold)] mb-3 block">GLOBAL PRESENCE</span>
              <h2 className="display-section text-[var(--foreground)]">
                BEYOND<br />BORDERS
              </h2>
              <div className="gold-rule w-16 mt-5 mb-5" />
              <p className="body-large text-[var(--text-cream)] max-w-[480px]">
                Regulatory-compliant export capabilities serving nutraceutical markets worldwide.
              </p>
              <Link
                href="/export/"
                className="btn-editorial cursor-pointer mt-8 md:mt-10 inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 md:px-[var(--space-8)] min-h-[44px] py-3 md:py-[var(--space-4)] text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--gold)] border-2 border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg-black)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Explore Export Capabilities
                <ArrowRight size={13} />
              </Link>
            </div>
          </SectionReveal>

          <div className="flex flex-col justify-center gap-0">
            {features.map((f, i) => (
              <SectionReveal key={f.title} delay={i * 0.08}>
                <div className="py-5 md:py-6 border-t border-[var(--border-subtle)]">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="mono-text text-[0.5625rem] text-[var(--text-muted)] opacity-40">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}>{f.title}</h3>
                  </div>
                  <p className="body-text text-[var(--text-muted)] max-w-[65ch] pl-[calc(0.5625rem*3+1rem)] md:ml-[calc(0.5625rem*3+1rem)] md:pl-0">{f.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        <SectionReveal delay={0.2}>
          <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {["Middle East", "Africa", "Southeast Asia", "Latin America", "Central Asia", "South Asia", "CIS Countries", "East Africa"].map((region) => (
              <div key={region} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--gold)] flex-shrink-0" />
                <span className="text-sm text-[var(--text-cream)]">{region}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ═══ Section 11: TRUST QUOTE ═══ */
function TrustQuote() {
  return (
    <section className="py-14 md:py-20 bg-[var(--bg-charcoal)] flex items-center">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
        <SectionReveal>
          <div className="max-w-[640px]">
            <div className="gold-rule w-12 md:w-16 mb-8 md:mb-10" />

            <blockquote>
              <p
                className="text-[var(--foreground)] italic leading-[1.35]"
                style={{
                  fontFamily: "var(--font-body), 'Source Serif 4', Georgia, serif",
                  fontSize: "clamp(1.25rem, 3vw, 2.25rem)",
                  fontWeight: 400,
                }}
              >
                Quality is not a department. It is an agreement between the manufacturer and the consumer &mdash; a promise kept in every capsule we produce.
              </p>
            </blockquote>

            <div className="mt-6 md:mt-8 flex items-center gap-4">
              <div className="gold-rule w-6" />
              <p className="label-text text-[var(--gold)]">
                ADMETUS LIFESCIENCES
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

/* ═══ Section 12: CLOSING CTA ═══ */
function ClosingCTA() {
  return (
    <section className="py-16 md:py-24 bg-[var(--bg-black)] relative overflow-hidden">
      {/* Gold rule above */}
      <div className="absolute top-0 left-[var(--gutter)] right-[var(--gutter)] gold-rule" />

      <span className="hidden lg:block absolute top-20 right-[var(--gutter)] section-number z-10">10</span>

      <SectionReveal>
        <div className="relative z-10 max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)] mb-4 block">LET&apos;S BUILD TOGETHER</span>

          <h2 className="heading-1 text-[var(--foreground)] uppercase">
            YOUR NEXT MANUFACTURING&nbsp;PARTNER
          </h2>

          <div className="h-px w-12 bg-[var(--gold)]/40 mt-4 mb-5" />

          <p className="text-[var(--text-cream)] max-w-[48ch] leading-relaxed" style={{ fontSize: "0.9375rem" }}>
            <Link href="/contract-manufacturing/" className="text-[var(--text-cream)] hover:text-[var(--gold)] underline-offset-4 underline decoration-[var(--gold)]/20 hover:decoration-[var(--gold)]/60 transition-colors">Contract manufacturing</Link>,{" "}
            <Link href="/private-label-softgel-manufacturer-india/" className="text-[var(--text-cream)] hover:text-[var(--gold)] underline-offset-4 underline decoration-[var(--gold)]/20 hover:decoration-[var(--gold)]/60 transition-colors">private label solutions</Link>, and{" "}
            <Link href="/export/" className="text-[var(--text-cream)] hover:text-[var(--gold)] underline-offset-4 underline decoration-[var(--gold)]/20 hover:decoration-[var(--gold)]/60 transition-colors">export-ready softgel capsules</Link>{" "}
            — discuss your requirements with our&nbsp;team.
          </p>

          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
            <Link
              href="/contact/"
              className="btn-editorial cursor-pointer inline-flex items-center justify-center gap-3 px-6 md:px-[var(--space-8)] min-h-[44px] py-3 md:py-[var(--space-4)] text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] w-full sm:w-auto"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Start a Project
              <ArrowRight size={13} />
            </Link>
            <Link
              href="/contact/"
              className="btn-editorial cursor-pointer inline-flex items-center justify-center gap-2 px-6 md:px-[var(--space-8)] min-h-[44px] py-3 md:py-[var(--space-4)] text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--gold)] border-2 border-[var(--gold)]/40 hover:border-[var(--gold)] w-full sm:w-auto"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Request Product Samples
            </Link>
          </div>

          <p className="mt-6 md:mt-8 mono-text text-[0.75rem] text-[var(--text-muted)]">
            admetuslifesciences@gmail.com &nbsp;|&nbsp; +91-7497841608
          </p>
          <p className="mt-1.5 body-text text-[var(--text-muted)] !text-[0.8125rem]">
            Village Anta, Tehsil Safidon, Distt. Jind, Haryana - 126112, India
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}

/* ═══ PAGE ═══ */
export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <Metrics />
      <Manifesto />
      <ScaleMetrics />
      <ProductShowcase />
      <CatalogueDownload />
      <ManufacturingProcess />
      <VisualBreak />
      <Differentiators />
      <Partnership />
      <GlobalReach />
      <TrustQuote />
      <ClosingCTA />
    </>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import type { Metadata } from "next";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.tagline}`,
    description: `${product.name}: ${product.composition}. Manufactured by Admetus Lifesciences, India.`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const otherProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end pt-24 pb-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&h=1080&fit=crop"
          alt={`${product.name} softgel capsules by Admetus Lifesciences`}
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <Link
            href="/products/"
            className="inline-flex items-center gap-2 py-2 label-text text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={13} />
            All Products
          </Link>
          <span className="block label-text mb-2 text-[var(--teal)]">
            {product.category}
          </span>
          <h1 className="display-section text-[var(--hero-text)]">
            {product.name}
          </h1>
          <p className="mt-3 body-large text-[var(--gold)]">{product.tagline}</p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
            {/* Left: Product visual */}
            <div
              className="aspect-square border border-[var(--border-subtle)] flex items-center justify-center relative overflow-hidden"
              style={{ background: `linear-gradient(160deg, ${product.color}06, var(--bg-charcoal))` }}
            >
              <div className="text-center">
                <div
                  className="opacity-[0.05]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(4rem, 8vw, 6.5rem)",
                    fontWeight: 900,
                    lineHeight: 0.85,
                    color: product.color,
                  }}
                >
                  {product.shortName}
                </div>
                <p className="mt-3 label-text text-[var(--text-muted)]">{product.name}</p>
              </div>
            </div>

            {/* Right: Info */}
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <span className="label-text text-[var(--text-muted)] block mb-0.5">Pack Size</span>
                  <span className="mono-text text-[0.8125rem] text-[var(--foreground)]">{product.packSize}</span>
                </div>
                <div className="w-px h-8 bg-[var(--border-subtle)]" />
                <div>
                  <span className="label-text text-[var(--text-muted)] block mb-0.5">Dosage Form</span>
                  <span className="mono-text text-[0.8125rem] text-[var(--foreground)]">{product.dosageForm}</span>
                </div>
              </div>

              {/* Composition */}
              <div className="mb-8">
                <h2 className="label-text text-[var(--text-muted)] mb-3">Composition</h2>
                <p className="body-text text-[var(--text-cream)] p-5 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] max-w-[58ch]">
                  {product.composition}
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h2 className="label-text text-[var(--text-muted)] mb-3">Key Benefits</h2>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, i) => (
                    <li key={benefit} className="flex items-start gap-3 body-text text-[var(--text-cream)]">
                      <span className="mono-text text-[0.5rem] text-[var(--text-muted)] opacity-50 mt-1.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.12em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Request Quote for {product.shortName}
                  <ArrowRight size={13} />
                </Link>
                <Link
                  href="/contract-manufacturing/"
                  className="inline-flex items-center gap-2 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.12em] uppercase text-[var(--gold)] border border-[var(--gold)]/30 hover:bg-[var(--gold)]/[0.06] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Private Label Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-16 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <h2 className="label-text text-[var(--text-muted)] mb-6">Ingredients</h2>
          <div className="flex flex-wrap gap-2">
            {product.ingredients.map((ing) => (
              <span
                key={ing}
                className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] bg-[var(--bg-warm-dark)] !text-[0.8125rem]"
              >
                {ing}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <h2 className="label-text text-[var(--text-muted)] mb-6">Other Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}/`}
                className="group p-4 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/15 transition-all duration-200 hover:-translate-y-px"
              >
                <span className="mono-text text-[0.5rem] text-[var(--text-muted)] opacity-50 block mb-1.5">
                  {p.category}
                </span>
                <p className="text-[0.8125rem] font-semibold text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors duration-200" style={{ fontFamily: "var(--font-display)" }}>
                  {p.shortName}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { SectionReveal } from "@/components/section-reveal";
import { products } from "@/data/products";


interface FormErrors {
  name?: string;
  company?: string;
  country?: string;
  email?: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  function validate(form: HTMLFormElement): FormErrors {
    const errs: FormErrors = {};
    const name = (form.elements.namedItem("full_name") as HTMLInputElement).value.trim();
    const company = (form.elements.namedItem("company_name") as HTMLInputElement).value.trim();
    const country = (form.elements.namedItem("country") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();

    if (!name) errs.name = "Full name is required.";
    if (!company) errs.company = "Company name is required.";
    if (!country) errs.country = "Country is required.";
    if (!email) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email address.";

    return errs;
  }

  function handleBlur(field: string, form: HTMLFormElement) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(form));
  }

  {/* TODO: Replace with real Web3Forms access key */}
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const errs = validate(form);
    setTouched({ name: true, company: true, country: true, email: true });
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setSubmitError(false);

    const formData = new FormData(form);
    formData.append("access_key", "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full h-12 px-4 py-3 bg-[var(--bg-warm-dark)] border border-[var(--border-subtle)] text-[var(--foreground)] body-text text-base placeholder-[var(--text-muted)]/40 focus:border-[var(--gold)]/40 focus:shadow-[0_0_0_3px_rgba(200,169,81,0.08)] focus:outline-none transition-all duration-200";
  const inputErrorClass =
    "w-full h-12 px-4 py-3 bg-[var(--bg-warm-dark)] border border-[var(--destructive)] text-[var(--foreground)] body-text text-base placeholder-[var(--text-muted)]/40 focus:border-[var(--gold)]/40 focus:shadow-[0_0_0_3px_rgba(200,169,81,0.08)] focus:outline-none transition-all duration-200";

  function fieldError(field: keyof FormErrors) {
    if (!touched[field] || !errors[field]) return null;
    return (
      <p id={`contact-${field}-error`} className="mt-1 text-[0.75rem] text-[var(--destructive)]" role="alert">
        {errors[field]}
      </p>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Admetus Lifesciences",
            url: "https://www.admetuslifesciences.com/contact/",
            mainEntity: {
              "@type": "LocalBusiness",
              "@id": "https://www.admetuslifesciences.com/#localbusiness",
              name: "Admetus Lifesciences",
              telephone: "+91-9729977795",
              email: "admetuslifesciences@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Village Anta, Tehsil Safidon",
                addressLocality: "Jind",
                addressRegion: "Haryana",
                postalCode: "126112",
                addressCountry: "IN",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "18:00",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9729977795",
                contactType: "sales",
                availableLanguage: ["English", "Hindi"],
              },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.admetuslifesciences.com/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.admetuslifesciences.com/contact/" },
          ],
        }) }}
      />
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="/images/facility/building-overview.jpg"
          alt="Admetus Lifesciences WHO-GMP certified softgel manufacturing facility — Village Anta, Tehsil Safidon, Haryana"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">Get in Touch</span>
          <h1 className="mt-3 mb-8 md:mb-10 display-section text-[var(--hero-text)]">
            REQUEST A<br />QUOTE
          </h1>
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            For bulk and export enquiries, contract manufacturing, or private
            label requirements -- share your details and our team will respond&nbsp;promptly.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
            {/* Form */}
            <div>
              <SectionReveal>
                {submitted ? (
                  <div className="p-10 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)]" role="alert">
                    <span className="label-text text-[var(--gold)] block mb-4">CONFIRMED</span>
                    <h3 className="heading-1 text-[var(--foreground)]">
                      Enquiry Received
                    </h3>
                    <div className="gold-rule w-10 mt-3 mb-3" />
                    <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
                      Thank you for your interest. Our team will review your
                      requirements and respond within 48&nbsp;hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="p-5 sm:p-8 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)]"
                    noValidate
                  >
                    {/* TODO: Replace with real Web3Forms access key */}
                    <input type="hidden" name="access_key" value="" />
                    <input type="hidden" name="from_name" value="Admetus Website" />
                    <input type="hidden" name="subject" value="New Enquiry from Admetus Lifesciences Website" />
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                    <span className="label-text text-[var(--gold)] block mb-6">ENQUIRY FORM</span>

                    {submitError && (
                      <div className="mb-5 p-4 border border-[var(--destructive)] bg-[var(--destructive)]/5" role="alert">
                        <p className="body-text text-[var(--destructive)] !text-[0.875rem]">
                          Something went wrong. Please try again.
                        </p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                      <div>
                        <label htmlFor="contact-name" className="block label-text text-[var(--text-muted)] mb-1.5">Full Name *</label>
                        <input
                          id="contact-name"
                          name="full_name"
                          type="text"
                          required
                          className={touched.name && errors.name ? inputErrorClass : inputClass}
                          placeholder="Your full name"
                          autoComplete="name"
                          aria-invalid={touched.name && !!errors.name}
                          aria-describedby={touched.name && errors.name ? "contact-name-error" : undefined}
                          onBlur={(e) => handleBlur("name", e.currentTarget.form!)}
                        />
                        {fieldError("name")}
                      </div>
                      <div>
                        <label htmlFor="contact-company" className="block label-text text-[var(--text-muted)] mb-1.5">Company Name *</label>
                        <input
                          id="contact-company"
                          name="company_name"
                          type="text"
                          required
                          className={touched.company && errors.company ? inputErrorClass : inputClass}
                          placeholder="Company name"
                          autoComplete="organization"
                          aria-invalid={touched.company && !!errors.company}
                          aria-describedby={touched.company && errors.company ? "contact-company-error" : undefined}
                          onBlur={(e) => handleBlur("company", e.currentTarget.form!)}
                        />
                        {fieldError("company")}
                      </div>
                      <div>
                        <label htmlFor="contact-country" className="block label-text text-[var(--text-muted)] mb-1.5">Country *</label>
                        <input
                          id="contact-country"
                          name="country"
                          type="text"
                          required
                          className={touched.country && errors.country ? inputErrorClass : inputClass}
                          placeholder="Your country"
                          autoComplete="country-name"
                          aria-invalid={touched.country && !!errors.country}
                          aria-describedby={touched.country && errors.country ? "contact-country-error" : undefined}
                          onBlur={(e) => handleBlur("country", e.currentTarget.form!)}
                        />
                        {fieldError("country")}
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block label-text text-[var(--text-muted)] mb-1.5">Email *</label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          className={touched.email && errors.email ? inputErrorClass : inputClass}
                          placeholder="business@email.com"
                          autoComplete="email"
                          aria-invalid={touched.email && !!errors.email}
                          aria-describedby={touched.email && errors.email ? "contact-email-error" : undefined}
                          onBlur={(e) => handleBlur("email", e.currentTarget.form!)}
                        />
                        {fieldError("email")}
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block label-text text-[var(--text-muted)] mb-1.5">Phone / WhatsApp</label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          className={inputClass}
                          placeholder="+91 ..."
                          autoComplete="tel"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-product" className="block label-text text-[var(--text-muted)] mb-1.5">Product of Interest</label>
                        <select
                          id="contact-product"
                          name="product_interest"
                          className={inputClass}
                        >
                          <option value="">Select a product</option>
                          {products.map((p) => (
                            <option key={p.slug} value={p.slug}>{p.name}</option>
                          ))}
                          <option value="custom">Custom Formulation</option>
                          <option value="contract">Contract Manufacturing</option>
                          <option value="private-label">Private Label</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="contact-quantity" className="block label-text text-[var(--text-muted)] mb-1.5">Order Quantity / MOQ</label>
                        <input
                          id="contact-quantity"
                          name="order_quantity"
                          type="text"
                          className={inputClass}
                          placeholder="e.g., 10,000 units"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-packaging" className="block label-text text-[var(--text-muted)] mb-1.5">Packaging Preference</label>
                        <select
                          id="contact-packaging"
                          name="packaging_preference"
                          className={inputClass}
                        >
                          <option value="">Select preference</option>
                          <option value="blister">Blister Pack</option>
                          <option value="bottle">Bottle</option>
                          <option value="bulk">Bulk</option>
                          <option value="custom">Custom</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label htmlFor="contact-message" className="block label-text text-[var(--text-muted)] mb-1.5">Message</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        className={`${inputClass} h-auto resize-none`}
                        placeholder="Share your requirements, specifications, or questions..."
                      />
                    </div>

                    <div className="mt-6 flex justify-center">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(200,169,81,0.15)] active:translate-y-[1px] active:shadow-none text-[0.6875rem] font-bold tracking-[0.12em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {submitting ? "Submitting..." : "Submit Enquiry"}
                      </button>
                    </div>
                  </form>
                )}
              </SectionReveal>
            </div>

            {/* Sidebar */}
            <div>
              <SectionReveal delay={0.1}>
                <div className="space-y-5">
                  <div className="p-6 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)]">
                    <span className="label-text text-[var(--gold)] block mb-4">CONTACT</span>

                    <div className="space-y-4">
                      <div>
                        <span className="label-text !text-[0.5625rem] text-[var(--text-muted)] block mb-0.5">Email</span>
                        <a href="mailto:admetuslifesciences@gmail.com" className="body-text text-[var(--foreground)] hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem] break-all">
                          admetuslifesciences@gmail.com
                        </a>
                      </div>
                      <div>
                        <span className="label-text !text-[0.5625rem] text-[var(--text-muted)] block mb-0.5">Phone</span>
                        <a href="tel:+919729977795" className="body-text text-[var(--foreground)] hover:text-[var(--gold)] transition-all duration-200 !text-[0.8125rem] block">
                          +91-9729977795
                        </a>
                      </div>
                      <div>
                        <span className="label-text !text-[0.5625rem] text-[var(--text-muted)] block mb-0.5">Business Hours</span>
                        <p className="body-text text-[var(--foreground)] !text-[0.8125rem]">
                          Mon - Sat, 9:00 AM - 6:00 PM
                        </p>
                      </div>
                      <div>
                        <span className="label-text !text-[0.5625rem] text-[var(--text-muted)] block mb-0.5">Manufacturing Unit</span>
                        <p className="body-text text-[var(--foreground)] !text-[0.8125rem]">
                          Village Anta, Tehsil Safidon,<br />
                          Distt. Jind, Haryana - 126112<br />
                          India
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)]">
                    <span className="label-text text-[var(--gold)] block mb-3">QUICK CONNECT</span>
                    <a
                      href="https://wa.me/919729977795?text=Hello%2C%20I%20am%20interested%20in%20your%20softgel%20capsule%20products.%20Please%20share%20more%20details."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3 hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(200,169,81,0.15)] active:translate-y-[1px] active:shadow-none bg-[#25D366]/[0.08] border border-[#25D366]/15 hover:bg-[#25D366]/[0.12] transition-all duration-200"
                    >
                      <span className="body-text text-[var(--foreground)] !text-[0.8125rem] font-medium">Chat on WhatsApp</span>
                    </a>
                  </div>

                  <div className="p-6 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)]">
                    <span className="label-text text-[var(--gold)] block mb-3">BUSINESS DETAILS</span>
                    <dl className="space-y-2">
                      <div>
                        <dt className="label-text !text-[0.5625rem] text-[var(--text-muted)]">GSTIN</dt>
                        <dd className="mono-text text-[0.75rem] text-[var(--foreground)] break-all">06ABRFA9749C1Z3</dd>
                      </div>
                      <div>
                        <dt className="label-text !text-[0.5625rem] text-[var(--text-muted)]">FSSAI License</dt>
                        <dd className="mono-text text-[0.75rem] text-[var(--foreground)] break-all">10020064002545</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

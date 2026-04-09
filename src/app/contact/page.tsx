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
    const name = (form.elements.namedItem("contact-name") as HTMLInputElement).value.trim();
    const company = (form.elements.namedItem("contact-company") as HTMLInputElement).value.trim();
    const country = (form.elements.namedItem("contact-country") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("contact-email") as HTMLInputElement).value.trim();

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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const errs = validate(form);
    setTouched({ name: true, company: true, country: true, email: true });
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setSubmitError(false);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full px-4 py-3 bg-[var(--bg-warm-dark)] border border-[var(--border-subtle)] text-[var(--foreground)] body-text !text-[0.875rem] placeholder-[var(--text-muted)]/40 focus:border-[var(--gold)] focus:outline-none transition-colors";
  const inputErrorClass =
    "w-full px-4 py-3 bg-[var(--bg-warm-dark)] border border-[var(--destructive)] text-[var(--foreground)] body-text !text-[0.875rem] placeholder-[var(--text-muted)]/40 focus:border-[var(--gold)] focus:outline-none transition-colors";

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
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=1920&h=1080&fit=crop"
          alt="Admetus Lifesciences facility exterior, ready for business enquiries and partnerships"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--overlay-black), rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.25))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">Get in Touch</span>
          <h1 className="mt-4 display-section text-[var(--text-white)]">
            REQUEST A<br />QUOTE
          </h1>
          <div className="gold-rule w-16 mt-6 mb-6" />
          <p className="body-large text-[var(--text-cream)] max-w-2xl">
            For bulk and export enquiries, contract manufacturing, or private
            label requirements -- share your details and our team will respond
            promptly.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-[var(--space-32)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16">
            {/* Form */}
            <div>
              <SectionReveal>
                {submitted ? (
                  <div className="p-14 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)]" role="alert">
                    <span className="label-text text-[var(--gold)] block mb-6">CONFIRMED</span>
                    <h3 className="heading-1 text-[var(--foreground)]">
                      Enquiry Received
                    </h3>
                    <div className="gold-rule w-10 mt-4 mb-4" />
                    <p className="body-text text-[var(--text-muted)]">
                      Thank you for your interest. Our team will review your
                      requirements and respond within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="p-10 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)]"
                    noValidate
                  >
                    <span className="label-text text-[var(--gold)] block mb-8">ENQUIRY FORM</span>

                    {submitError && (
                      <div className="mb-6 p-4 border border-[var(--destructive)] bg-[var(--destructive)]/5" role="alert">
                        <p className="body-text text-[var(--destructive)] !text-[0.875rem]">
                          Something went wrong. Please try again.
                        </p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block label-text text-[var(--text-muted)] mb-2">Full Name *</label>
                        <input
                          id="contact-name"
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
                        <label htmlFor="contact-company" className="block label-text text-[var(--text-muted)] mb-2">Company Name *</label>
                        <input
                          id="contact-company"
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
                        <label htmlFor="contact-country" className="block label-text text-[var(--text-muted)] mb-2">Country *</label>
                        <input
                          id="contact-country"
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
                        <label htmlFor="contact-email" className="block label-text text-[var(--text-muted)] mb-2">Email *</label>
                        <input
                          id="contact-email"
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
                        <label htmlFor="contact-phone" className="block label-text text-[var(--text-muted)] mb-2">Phone / WhatsApp</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          className={inputClass}
                          placeholder="+91 ..."
                          autoComplete="tel"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-product" className="block label-text text-[var(--text-muted)] mb-2">Product of Interest</label>
                        <select
                          id="contact-product"
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
                        <label htmlFor="contact-quantity" className="block label-text text-[var(--text-muted)] mb-2">Order Quantity / MOQ</label>
                        <input
                          id="contact-quantity"
                          type="text"
                          className={inputClass}
                          placeholder="e.g., 10,000 units"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-packaging" className="block label-text text-[var(--text-muted)] mb-2">Packaging Preference</label>
                        <select
                          id="contact-packaging"
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

                    <div className="mt-5">
                      <label htmlFor="contact-message" className="block label-text text-[var(--text-muted)] mb-2">Message</label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        className={`${inputClass} resize-none`}
                        placeholder="Share your requirements, specifications, or questions..."
                      />
                    </div>

                    <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                      <p className="label-text !text-[0.5625rem] text-[var(--text-muted)]">
                        For bulk and export enquiries only
                      </p>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="cursor-pointer inline-flex items-center gap-2 px-8 py-3 text-[0.6875rem] font-bold tracking-[0.12em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
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
              <SectionReveal delay={0.15}>
                <div className="space-y-6">
                  <div className="p-8 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)]">
                    <span className="label-text text-[var(--gold)] block mb-6">CONTACT</span>

                    <div className="space-y-6">
                      <div>
                        <span className="label-text !text-[0.5625rem] text-[var(--text-muted)] block mb-1">Email</span>
                        <a href="mailto:admetuslifesciences@gmail.com" className="body-text text-[var(--foreground)] hover:text-[var(--gold)] transition-colors !text-[0.875rem]">
                          admetuslifesciences@gmail.com
                        </a>
                      </div>
                      <div>
                        <span className="label-text !text-[0.5625rem] text-[var(--text-muted)] block mb-1">Manufacturing Unit</span>
                        <p className="body-text text-[var(--foreground)] !text-[0.875rem]">
                          Village Anta, Tehsil Safidon,<br />
                          Distt. Jind, Haryana - 126112<br />
                          India
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)]">
                    <span className="label-text text-[var(--gold)] block mb-4">QUICK CONNECT</span>
                    <a
                      href="https://wa.me/?text=Hello%2C%20I%20am%20interested%20in%20your%20softgel%20capsule%20products.%20Please%20share%20more%20details."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-5 py-3 bg-[#25D366]/[0.08] border border-[#25D366]/15 hover:bg-[#25D366]/[0.12] transition-colors"
                    >
                      <span className="body-text text-[var(--foreground)] !text-[0.875rem] font-medium">Chat on WhatsApp</span>
                    </a>
                  </div>

                  <div className="p-8 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)]">
                    <span className="label-text text-[var(--gold)] block mb-4">BUSINESS DETAILS</span>
                    <dl className="space-y-3">
                      <div>
                        <dt className="label-text !text-[0.5625rem] text-[var(--text-muted)]">GSTIN</dt>
                        <dd className="mono-text text-[0.75rem] text-[var(--foreground)]">06ABRFA9749C1Z3</dd>
                      </div>
                      <div>
                        <dt className="label-text !text-[0.5625rem] text-[var(--text-muted)]">License No.</dt>
                        <dd className="mono-text text-[0.75rem] text-[var(--foreground)]">10020064002545</dd>
                      </div>
                      <div>
                        <dt className="label-text !text-[0.5625rem] text-[var(--text-muted)]">Website</dt>
                        <dd className="body-text text-[var(--foreground)] !text-[0.75rem]">admetuslifesciences.com</dd>
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

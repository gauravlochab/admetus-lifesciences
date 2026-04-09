"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send, CheckCircle, MessageCircle, Shield } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { products } from "@/data/products";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=1920&h=1080&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
        <div className="relative mx-auto max-w-[1400px] w-full px-[clamp(1.5rem,4vw,4rem)]">
          <span className="label-text text-[#C8A951]">Get in Touch</span>
          <h1
            className="mt-4 text-[#FAFAFA] uppercase"
            style={{
              fontFamily: "var(--font-literata), Georgia, serif",
              fontSize: "clamp(3.5rem, 7vw, 7rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            REQUEST A
            <br />
            <span className="text-[#C8A951]">QUOTE</span>
          </h1>
          <p className="mt-6 text-[1.25rem] text-[#E8E0D0] max-w-2xl leading-[1.7]">
            For bulk and export enquiries, contract manufacturing, or private
            label requirements — share your details and our team will respond
            promptly.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <SectionReveal>
                {submitted ? (
                  <div className="p-12 text-center bg-[#141414] border border-white/[0.06]">
                    <CheckCircle size={48} className="text-[#22c55e] mx-auto mb-4" />
                    <h3
                      className="text-[#FAFAFA] text-2xl"
                      style={{ fontFamily: "var(--font-literata), Georgia, serif" }}
                    >
                      Enquiry Received
                    </h3>
                    <p className="mt-3 text-[#8A8274]">
                      Thank you for your interest. Our team will review your
                      requirements and respond within 48 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="p-8 bg-[#141414]/80 backdrop-blur-[20px] border border-white/[0.06]"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block label-text text-[#8A8274] mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/[0.06] text-[#FAFAFA] text-sm placeholder-[#8A8274]/50 focus:border-[#C8A951] focus:outline-none transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block label-text text-[#8A8274] mb-2">Company Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/[0.06] text-[#FAFAFA] text-sm placeholder-[#8A8274]/50 focus:border-[#C8A951] focus:outline-none transition-colors"
                          placeholder="Company name"
                        />
                      </div>
                      <div>
                        <label className="block label-text text-[#8A8274] mb-2">Country *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/[0.06] text-[#FAFAFA] text-sm placeholder-[#8A8274]/50 focus:border-[#C8A951] focus:outline-none transition-colors"
                          placeholder="Your country"
                        />
                      </div>
                      <div>
                        <label className="block label-text text-[#8A8274] mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-white/[0.06] text-[#FAFAFA] text-sm placeholder-[#8A8274]/50 focus:border-[#C8A951] focus:outline-none transition-colors"
                          placeholder="business@email.com"
                        />
                      </div>
                      <div>
                        <label className="block label-text text-[#8A8274] mb-2">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 bg-white/5 border border-white/[0.06] text-[#FAFAFA] text-sm placeholder-[#8A8274]/50 focus:border-[#C8A951] focus:outline-none transition-colors"
                          placeholder="+91 ..."
                        />
                      </div>
                      <div>
                        <label className="block label-text text-[#8A8274] mb-2">Product of Interest</label>
                        <select className="w-full px-4 py-3 bg-white/5 border border-white/[0.06] text-[#FAFAFA] text-sm focus:border-[#C8A951] focus:outline-none transition-colors">
                          <option value="" className="bg-[#141414]">Select a product</option>
                          {products.map((p) => (
                            <option key={p.slug} value={p.slug} className="bg-[#141414]">{p.name}</option>
                          ))}
                          <option value="custom" className="bg-[#141414]">Custom Formulation</option>
                          <option value="contract" className="bg-[#141414]">Contract Manufacturing</option>
                          <option value="private-label" className="bg-[#141414]">Private Label</option>
                        </select>
                      </div>
                      <div>
                        <label className="block label-text text-[#8A8274] mb-2">Order Quantity / MOQ</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-white/5 border border-white/[0.06] text-[#FAFAFA] text-sm placeholder-[#8A8274]/50 focus:border-[#C8A951] focus:outline-none transition-colors"
                          placeholder="e.g., 10,000 units"
                        />
                      </div>
                      <div>
                        <label className="block label-text text-[#8A8274] mb-2">Packaging Preference</label>
                        <select className="w-full px-4 py-3 bg-white/5 border border-white/[0.06] text-[#FAFAFA] text-sm focus:border-[#C8A951] focus:outline-none transition-colors">
                          <option value="" className="bg-[#141414]">Select preference</option>
                          <option value="blister" className="bg-[#141414]">Blister Pack</option>
                          <option value="bottle" className="bg-[#141414]">Bottle</option>
                          <option value="bulk" className="bg-[#141414]">Bulk</option>
                          <option value="custom" className="bg-[#141414]">Custom</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-5">
                      <label className="block label-text text-[#8A8274] mb-2">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 border border-white/[0.06] text-[#FAFAFA] text-sm placeholder-[#8A8274]/50 focus:border-[#C8A951] focus:outline-none transition-colors resize-none"
                        placeholder="Share your requirements, specifications, or questions..."
                      />
                    </div>

                    <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
                      <p className="text-[0.75rem] text-[#8A8274] flex items-center gap-1">
                        <Shield size={12} className="text-[#C8A951]" />
                        For bulk and export enquiries only
                      </p>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-[0.05em] uppercase text-[#0A0A0A] bg-[#C8A951] hover:bg-[#E2CC7A] transition-colors"
                      >
                        Submit Enquiry
                        <Send size={14} />
                      </button>
                    </div>
                  </form>
                )}
              </SectionReveal>
            </div>

            {/* Sidebar */}
            <div>
              <SectionReveal delay={0.2}>
                <div className="space-y-6">
                  <div className="p-6 bg-[#141414] border border-white/[0.06]">
                    <h3
                      className="text-[#FAFAFA] text-lg mb-4"
                      style={{ fontFamily: "var(--font-literata), Georgia, serif" }}
                    >
                      Contact Information
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Mail size={14} className="text-[#C8A951] mt-1 shrink-0" />
                        <div>
                          <p className="text-[0.75rem] text-[#8A8274] mb-1">Email</p>
                          <a href="mailto:admetuslifesciences@gmail.com" className="text-sm text-[#FAFAFA] hover:text-[#C8A951] transition-colors">
                            admetuslifesciences@gmail.com
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <MapPin size={14} className="text-[#C8A951] mt-1 shrink-0" />
                        <div>
                          <p className="text-[0.75rem] text-[#8A8274] mb-1">Manufacturing Unit</p>
                          <p className="text-sm text-[#FAFAFA]">
                            Village Anta, Tehsil Safidon,<br />
                            Distt. Jind, Haryana - 126112<br />
                            India
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 bg-[#141414] border border-white/[0.06]">
                    <h3
                      className="text-[#FAFAFA] text-lg mb-3"
                      style={{ fontFamily: "var(--font-literata), Georgia, serif" }}
                    >
                      Quick Connect
                    </h3>
                    <a
                      href="https://wa.me/?text=Hello%2C%20I%20am%20interested%20in%20your%20softgel%20capsule%20products.%20Please%20share%20more%20details."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors"
                    >
                      <MessageCircle size={20} className="text-[#25D366]" fill="#25D366" />
                      <span className="text-sm font-medium text-[#FAFAFA]">Chat on WhatsApp</span>
                    </a>
                  </div>

                  <div className="p-6 bg-[#141414] border border-white/[0.06]">
                    <h3
                      className="text-[#FAFAFA] text-lg mb-3"
                      style={{ fontFamily: "var(--font-literata), Georgia, serif" }}
                    >
                      Business Details
                    </h3>
                    <dl className="space-y-2 text-sm">
                      <div>
                        <dt className="text-[#8A8274]">GSTIN</dt>
                        <dd className="text-[#FAFAFA] font-mono text-xs">06ABRFA9749C1Z3</dd>
                      </div>
                      <div>
                        <dt className="text-[#8A8274]">License No.</dt>
                        <dd className="text-[#FAFAFA] font-mono text-xs">10020064002545</dd>
                      </div>
                      <div>
                        <dt className="text-[#8A8274]">Website</dt>
                        <dd className="text-[#FAFAFA] text-xs">admetuslifesciences.com</dd>
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

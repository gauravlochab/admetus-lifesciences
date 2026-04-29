"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919729977795?text=Hello%2C%20I%20am%20interested%20in%20your%20softgel%20capsule%20products.%20Please%20share%20more%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center hover:translate-y-[-2px] active:scale-[0.98] active:opacity-90 transition-[transform,box-shadow,background-color] duration-300 rounded-full"
      style={{ backgroundColor: "var(--whatsapp-bg)", boxShadow: "0 2px 12px var(--whatsapp-shadow)" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} className="text-white" fill="white" />
    </a>
  );
}

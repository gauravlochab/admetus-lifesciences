"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/?text=Hello%2C%20I%20am%20interested%20in%20your%20softgel%20capsule%20products.%20Please%20share%20more%20details."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#25D366] flex items-center justify-center shadow-[0_2px_12px_rgba(37,211,102,0.25)] hover:shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:translate-y-[-2px] transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} className="text-white" fill="white" />
    </a>
  );
}

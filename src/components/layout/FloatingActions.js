"use client";

import { ChevronUp, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

const actionStyles =
  "flex size-10 items-center justify-center text-white shadow-[0_8px_22px_rgba(16,42,67,0.18)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5";

export default function FloatingActions() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <div
      className="fixed right-3 bottom-4 z-40 flex flex-col items-center gap-2.5 sm:right-5 sm:bottom-5"
      aria-label="Quick actions"
    >
      <a
        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
        className={`${actionStyles} phone-blink rounded-full bg-[#73d45f] hover:bg-[#62c74d]`}
        aria-label={`Call Prayana Holidays at ${siteConfig.phone}`}
        title="Call us"
      >
        <PhoneCall aria-hidden="true" className="size-[18px]" strokeWidth={2.4} />
      </a>

      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${actionStyles} rounded-xl bg-[#52c94b] hover:bg-[#43b83d]`}
        aria-label="Chat with Prayana Holidays on WhatsApp"
        title="WhatsApp us"
      >
        <FaWhatsapp aria-hidden="true" className="size-[22px]" />
      </a>

      <button
        type="button"
        onClick={scrollToTop}
        className={`${actionStyles} rounded-xl bg-[#1f9fc2] hover:bg-[#168bad]`}
        aria-label="Scroll back to the top"
        title="Back to top"
      >
        <ChevronUp aria-hidden="true" className="size-5" strokeWidth={2.4} />
      </button>
    </div>
  );
}

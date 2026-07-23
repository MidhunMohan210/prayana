"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Compass, Luggage, Phone } from "lucide-react";
import { useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/layout/Section";
import { siteConfig } from "@/data/siteConfig";

function AnimatedNumber({ value, label, Icon }) {
  const numberRef = useRef(null);
  const isInView = useInView(numberRef, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return undefined;

    let frameId;
    const startTime = performance.now();
    const duration = 1500;

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 3))));

      if (progress < 1) frameId = requestAnimationFrame(update);
    };

    frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, prefersReducedMotion, value]);

  return (
    <div ref={numberRef} className="flex items-center gap-4" aria-label={`${value}+ ${label}`}>
      <span
        aria-hidden="true"
        className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand"
      >
        <Icon className="size-5" strokeWidth={2} />
      </span>
      <div>
        <p
          aria-hidden="true"
          className="text-3xl leading-none font-semibold tracking-[-0.03em] text-heading tabular-nums sm:text-[2.2rem]"
        >
          {prefersReducedMotion ? value : count}+
        </p>
        <p aria-hidden="true" className="mt-1 text-sm font-medium text-gray-500">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <Section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-white font-sans !py-20 sm:!py-28 lg:!py-36"
      contentClassName="relative max-w-[1240px]"
    >
      <div className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-14">
        <div className="relative mx-auto w-full max-w-[600px] lg:mx-0">
          <Image
            src="/images/about/about-travel-illustration.jpg"
            alt="Hand-drawn travel illustration with luggage, landmarks, and a direction sign"
            width={1600}
            height={1425}
            sizes="(max-width: 1023px) 90vw, 600px"
            className="h-auto w-full mix-blend-multiply"
          />
        </div>

        {/* Text column */}
        <div className="relative max-w-[610px] lg:pb-4">
          <p className="mb-4 flex items-center gap-2 text-xs font-bold tracking-[0.08em] text-brand uppercase sm:text-sm">
            <Compass aria-hidden="true" className="size-4" strokeWidth={2.5} />
            About Us
          </p>
          <h2 className="text-[2.6rem] leading-[1.08] font-light tracking-[-0.045em] text-heading sm:text-[3.4rem] lg:text-[3.7rem]">
            Journeys planned around you
          </h2>

          <p className="mt-8 max-w-[570px] text-sm leading-8 text-gray-500 sm:text-base">
            At Prayana Holidays, we turn travel ideas into thoughtfully
            planned experiences. From relaxing family holidays and romantic
            escapes to group tours and international adventures, every
            itinerary is shaped around your interests, comfort, and budget.
          </p>
          <p className="mt-5 max-w-[570px] text-sm leading-8 text-gray-500 sm:text-base">
            Our team takes care of the details with honest guidance,
            carefully selected stays, and dependable support, so you can
            travel with confidence and focus on making lasting memories.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-16 gap-y-6">
            <AnimatedNumber value={250} label="Holiday Packages" Icon={Luggage} />
            <AnimatedNumber value={10} label="Years of Experience" Icon={Award} />
          </div>

          <hr className="mt-10 border-gray-200" />

          <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
            <a className="flex items-center gap-4" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                <Phone aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="text-sm text-gray-500">Talk to our travel team</p>
                <p className="text-lg font-bold text-heading">{siteConfig.phone}</p>
              </div>
            </a>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 min-w-44 items-center justify-center rounded-full bg-brand px-8 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

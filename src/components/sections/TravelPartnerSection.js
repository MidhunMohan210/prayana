"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Section from "@/components/layout/Section";
import { travelPartnerFeatures } from "@/data/travelPartnerFeatures";

const introItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TravelPartnerSection() {
  const prefersReducedMotion = useReducedMotion();
  const initialState = prefersReducedMotion ? "visible" : "hidden";

  return (
    <Section
      id="why-us"
      className="relative scroll-mt-20 overflow-hidden bg-surface font-sans !pb-15"
      contentClassName="max-w-[1440px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-1/2 w-[min(1174px,94vw)] -translate-x-1/2 -translate-y-[20%] bg-contain bg-center bg-no-repeat sm:h-full"
        style={{ backgroundImage: "url('/images/about/travel-pattern.svg')" }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center"
        initial={initialState}
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
        variants={{
          visible: {
            transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
          },
        }}
      >
        <motion.p
          className="mb-4 text-xs font-semibold tracking-[0.2em] text-gray-700 uppercase sm:text-sm"
          variants={introItemVariants}
        >
          Get to know us
        </motion.p>
        <motion.h2
          className="text-4xl leading-tight font-light tracking-[-0.035em] text-heading sm:text-5xl"
          variants={introItemVariants}
        >
          Why we&apos;re your perfect travel partner
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-body sm:text-lg sm:leading-8"
          variants={introItemVariants}
        >
          From thoughtful planning to dependable travel support, every detail is handled with care so you can explore with confidence.
        </motion.p>
      </motion.div>

      <motion.div
        className="relative z-10 mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
        initial={initialState}
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          visible: {
            transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 },
          },
        }}
      >
        {travelPartnerFeatures.map((feature) => {
          return (
            <motion.article
              key={feature.id}
              className="flex flex-col items-center text-center"
              variants={cardVariants}
            >
              <div className="flex size-24 items-center justify-center self-center rounded-full bg-background sm:size-28">
                <Image
                  src={feature.icon}
                  alt=""
                  width={170}
                  height={170}
                  className="size-12 object-contain brightness-0 opacity-80 sm:size-14"
                />
              </div>
              <h3 className="mt-9 self-center text-center text-xl leading-snug font-semibold tracking-[-0.025em] text-heading sm:text-2xl">
                {feature.title}
              </h3>
              <p className="mt-4 max-w-[19rem] self-center text-sm leading-7 text-body sm:text-base sm:leading-7">
                {feature.description}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}

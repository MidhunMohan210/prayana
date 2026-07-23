"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/layout/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import TourPackageCard from "@/components/sections/TourPackage/Tourpackagecard";
import Button from "@/components/ui/Button";
import {
  domesticTourPackages,
  packagesSectionContent,
  tourPackages,
} from "@/data/tourPackages";

const revealVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 42, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PopularPackagesSection() {
  const [activePackageType, setActivePackageType] = useState("domestic");
  const prefersReducedMotion = useReducedMotion();
  const initialState = prefersReducedMotion ? "visible" : "hidden";
  const activePackages =
    activePackageType === "domestic" ? domesticTourPackages : tourPackages;

  return (
    <Section
      id="packages"
      className="scroll-mt-20 bg-white"
      contentClassName="max-w-[1440px]"
    >
      <motion.div
        className="flex flex-col items-center"
        initial={initialState}
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={revealVariants}
      >
        <p className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gray-700 uppercase sm:text-sm">
          <span className="h-px w-6 bg-[#C9A24B]" />
          {packagesSectionContent.eyebrow}
          <span className="h-px w-6 bg-[#C9A24B]" />
        </p>
        <SectionHeading
          title={packagesSectionContent.title}
          description={packagesSectionContent.description}
          align="center"
        />
      </motion.div>

      <motion.div
        className="mt-12 flex justify-center lg:mt-14"
        initial={initialState}
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={revealVariants}
      >
        <div
          className="inline-flex items-center gap-8 sm:gap-12"
          role="tablist"
          aria-label="Tour package type"
        >
          <button
            id="domestic-packages-tab"
            type="button"
            role="tab"
            aria-selected={activePackageType === "domestic"}
            aria-controls="packages-panel"
            onClick={() => setActivePackageType("domestic")}
            className={`border-b-2 px-1 pb-2 text-base font-semibold transition-colors duration-300 ${
              activePackageType === "domestic"
                ? "border-brand text-brand"
                : "border-transparent text-body hover:text-brand"
            }`}
          >
            Domestic
          </button>
          <button
            id="international-packages-tab"
            type="button"
            role="tab"
            aria-selected={activePackageType === "international"}
            aria-controls="packages-panel"
            onClick={() => setActivePackageType("international")}
            className={`border-b-2 px-1 pb-2 text-base font-semibold transition-colors duration-300 ${
              activePackageType === "international"
                ? "border-brand text-brand"
                : "border-transparent text-body hover:text-brand"
            }`}
          >
            International
          </button>
        </div>
      </motion.div>

      <div
        id="packages-panel"
        key={activePackageType}
        role="tabpanel"
        aria-labelledby={`${activePackageType}-packages-tab`}
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
      >
        {activePackages.map((tourPackage, index) => (
          <motion.div
            key={tourPackage.id}
            initial={initialState}
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            variants={prefersReducedMotion ? undefined : cardVariants}
            transition={{ delay: prefersReducedMotion ? 0 : (index % 3) * 0.07 }}
          >
            <TourPackageCard tourPackage={tourPackage} />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 flex justify-center"
        initial={initialState}
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={revealVariants}
      >
        <Button
          href="#contact"
          className="border border-heading bg-transparent text-heading transition-colors duration-300 hover:bg-heading hover:text-white"
        >
          View All Tour Packages
        </Button>
      </motion.div>
    </Section>
  );
}

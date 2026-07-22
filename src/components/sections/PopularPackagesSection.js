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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
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
      className="scroll-mt-20 bg-[#F6F5F0]"
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
          className="inline-flex rounded-full border border-[#D8D6CC] bg-white p-1.5 shadow-sm"
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
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 sm:px-8 ${
              activePackageType === "domestic"
                ? "bg-brand text-white shadow-sm"
                : "text-body hover:text-brand"
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
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 sm:px-8 ${
              activePackageType === "international"
                ? "bg-brand text-white shadow-sm"
                : "text-body hover:text-brand"
            }`}
          >
            International
          </button>
        </div>
      </motion.div>

      <motion.div
        id="packages-panel"
        key={activePackageType}
        role="tabpanel"
        aria-labelledby={`${activePackageType}-packages-tab`}
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.35 }}
        variants={{
          visible: {
            transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
          },
        }}
      >
        {activePackages.map((tourPackage) => (
          <motion.div key={tourPackage.id} variants={revealVariants}>
            <TourPackageCard tourPackage={tourPackage} />
          </motion.div>
        ))}
      </motion.div>

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

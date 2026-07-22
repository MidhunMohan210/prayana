"use client";

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
  const prefersReducedMotion = useReducedMotion();
  const initialState = prefersReducedMotion ? "visible" : "hidden";

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
        <p className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#1F5D4E] uppercase sm:text-sm">
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

      <div className="mt-12 lg:mt-14">
        <motion.h3
          className="text-center text-2xl font-bold tracking-[-0.02em] text-[#10241E] sm:text-3xl"
          initial={initialState}
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={revealVariants}
        >
          Domestic Packages
        </motion.h3>

        <motion.div
          className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          initial={initialState}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: {
              transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
            },
          }}
        >
          {domesticTourPackages.map((tourPackage) => (
            <motion.div key={tourPackage.id} variants={revealVariants}>
              <TourPackageCard tourPackage={tourPackage} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-16 lg:mt-20">
        <motion.h3
          className="text-center text-2xl font-bold tracking-[-0.02em] text-[#10241E] sm:text-3xl"
          initial={initialState}
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={revealVariants}
        >
          International Packages
        </motion.h3>

        <motion.div
          className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7"
          initial={initialState}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: {
              transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
            },
          }}
        >
          {tourPackages.map((tourPackage) => (
            <motion.div key={tourPackage.id} variants={revealVariants}>
              <TourPackageCard tourPackage={tourPackage} />
            </motion.div>
          ))}
        </motion.div>
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
          className="border border-[#10241E] bg-transparent text-[#10241E] transition-colors duration-300 hover:bg-[#10241E] hover:text-white"
        >
          View All Tour Packages
        </Button>
      </motion.div>
    </Section>
  );
}

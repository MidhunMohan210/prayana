"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/data/siteConfig";

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const initialState = prefersReducedMotion ? "visible" : "hidden";
  const heroImage = siteConfig.heroImages[siteConfig.activeHeroImage] ?? "/images/hero/hero-main.jpg";

  return (
    <section
      id="home"
      data-hero-image={heroImage}
      className="hero-background relative isolate flex min-h-[100dvh] items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[center_45%] max-md:object-[60%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(10,26,26,0.82)_0%,rgba(10,26,26,0.58)_42%,rgba(10,26,26,0.12)_75%)] max-md:bg-[linear-gradient(90deg,rgba(10,26,26,0.8)_0%,rgba(10,26,26,0.55)_65%,rgba(10,26,26,0.28)_100%)]" />

      <Container className="relative max-w-[1440px] pt-48 pb-16 sm:pt-96 sm:pb-20 lg:pt-36">
        <motion.div
          className="max-w-3xl translate-y-8 text-white sm:translate-y-10 lg:translate-y-12"
          initial={initialState}
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
            },
          }}
        >
          <motion.p className="mb-4 text-[0.68rem] font-bold tracking-[0.18em] text-white/85 uppercase sm:text-xs" variants={itemVariants}>
            Travel beyond the ordinary
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="hero-heading  max-w-xl  sm:max-w-lg lg:max-w-2xl text-[clamp(2.55rem,5.8vw,5.2rem)] leading-[1.02] font-semibold tracking-[-0.04em]"
            variants={itemVariants}
          >
            Discover journeys made for you
          </motion.h1>

          <motion.p className="mt-6 max-w-2xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7" variants={itemVariants}>
            Thoughtfully planned holidays, memorable destinations, and travel support you can depend on.
          </motion.p>

          <motion.div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap" variants={itemVariants}>
            <Button href="#packages" className="min-h-11 w-full border-none px-5 py-2.5 text-sm sm:w-auto">
              Explore Tour Packages
            </Button>
            <Button
              href={siteConfig.whatsappUrl}
              variant="secondary"
              className="min-h-11 w-full px-5 py-2.5 text-sm sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plan on WhatsApp
            </Button>
          </motion.div>

          <motion.p className="mt-6 text-xs font-medium tracking-wide text-white/75 sm:text-sm" variants={itemVariants}>
            Personalised holidays · Trusted assistance · Memorable experiences
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}

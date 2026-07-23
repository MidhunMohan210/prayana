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

      <Container className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36">
        <motion.div
          className="max-w-3xl text-white"
          initial={initialState}
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
            },
          }}
        >
          <motion.p className="mb-5 text-xs font-bold tracking-[0.2em] text-white/85 uppercase" variants={itemVariants}>
            Travel beyond the ordinary
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="hero-heading max-w-3xl text-[clamp(3rem,7vw,6.5rem)] leading-[0.98] font-semibold tracking-[-0.055em]"
            variants={itemVariants}
          >
            Discover journeys made for you
          </motion.h1>

          <motion.p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8" variants={itemVariants}>
            Thoughtfully planned holidays, memorable destinations, and travel support you can depend on.
          </motion.p>

          <motion.div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap" variants={itemVariants}>
            <Button href="#packages" className="w-full sm:w-auto border-none">
              Explore Tour Packages
            </Button>
            <Button
              href={siteConfig.whatsappUrl}
              variant="secondary"
              className="w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plan on WhatsApp
            </Button>
          </motion.div>

          <motion.p className="mt-7 text-sm font-medium tracking-wide text-white/75" variants={itemVariants}>
            Personalised holidays · Trusted assistance · Memorable experiences
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}

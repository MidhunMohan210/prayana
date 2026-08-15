"use client";

import Container from "@/components/layout/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function VideoStorySection() {
  return (
    <section
      id="travel-story"
      className="relative isolate h-[320px] overflow-hidden bg-heading sm:h-[520px] lg:h-[550px]"
      aria-labelledby="travel-story-heading"
    >
      <video
        className="absolute inset-0 -z-20 size-full object-cover object-center"
        src="/videos/travel-story.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div className="absolute inset-0 -z-10 bg-heading/55" />

      <Container className="flex h-full items-center py-12 sm:py-16 lg:py-20">
        <Reveal className="max-w-[42rem] text-white" amount={0.35}>
          <p className="text-xs font-semibold tracking-[0.16em] text-white/85 uppercase sm:text-sm">
            Travel with purpose
          </p>
          <div
            id="travel-story-heading"
            role="heading"
            aria-level="2"
            className="mt-4 max-w-[15ch] text-[clamp(2.25rem,5.5vw,5rem)] leading-[1.02] font-medium tracking-[-0.045em] text-white"
            style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
          >
            Unforgettable journeys, made for you.
          </div>

          <Button href="#contact" variant="secondary" className="mt-6 sm:mt-10">
            Plan Your Journey
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}

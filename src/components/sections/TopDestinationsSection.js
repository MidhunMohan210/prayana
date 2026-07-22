"use client";

import Image from "next/image";
import Section from "@/components/layout/Section";
import {
  topDestinations,
  topDestinationsContent,
} from "@/data/topDestinations";

export default function TopDestinationsSection() {
  return (
    <Section
      id="destinations"
      className="scroll-mt-20 bg-white"
      contentClassName="max-w-[1440px]"
    >
      <div className="text-center">
        <h2 className="text-4xl font-light tracking-[-0.04em] text-heading sm:text-5xl">
          {topDestinationsContent.title}
        </h2>
        <p className="mt-4 text-base text-body sm:text-lg">
          {topDestinationsContent.description}
        </p>
      </div>

      <div
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:h-[600px] lg:grid-cols-4 lg:grid-rows-2 lg:gap-6 xl:h-[660px]"
      >
        {topDestinations.map((destination) => (
          <article
            key={destination.id}
            className={`group relative h-[320px] overflow-hidden rounded-[22px] sm:h-[340px] lg:h-auto ${
              destination.tall ? "lg:row-span-2" : ""
            }`}
          >
            <a
              href="#packages"
              className="block size-full focus-visible:outline-white"
              aria-label={`View tour packages for ${destination.city}, ${destination.country}`}
            >
              <Image
                src={destination.image}
                alt={destination.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />
              <span className="absolute top-0 left-0 p-7 text-white sm:p-8">
                <span className="block text-xs font-semibold tracking-[0.08em] uppercase sm:text-sm">
                  {destination.country}
                </span>
                <span className="mt-1 block text-3xl leading-none font-medium tracking-[-0.035em] sm:text-4xl">
                  {destination.city}
                </span>
              </span>
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

import Image from "next/image";
import Section from "@/components/layout/Section";
import { travelPartnerFeatures } from "@/data/travelPartnerFeatures";

export default function TravelPartnerSection() {
  return (
    <Section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-surface font-sans"
      contentClassName="max-w-[1440px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-1/2 w-[min(1174px,94vw)] -translate-x-1/2 -translate-y-1/2 bg-contain bg-center bg-no-repeat sm:h-[70%]"
        style={{ backgroundImage: "url('/images/about/travel-pattern.svg')" }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-brand uppercase sm:text-sm">
          Get to know us
        </p>
        <h2 className="text-4xl leading-tight font-light tracking-[-0.035em] text-heading sm:text-5xl">
          Why we&apos;re your perfect travel partner
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-body sm:text-lg sm:leading-8">
          From thoughtful planning to dependable travel support, every detail is handled with care so you can explore with confidence.
        </p>
      </div>

      <div className="relative z-10 mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
        {travelPartnerFeatures.map((feature) => {
          return (
            <article
              key={feature.id}
              className="flex flex-col items-center text-center"
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
            </article>
          );
        })}
      </div>
    </Section>
  );
}

import Script from "next/script";

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-20 lg:scroll-mt-24"
      aria-label="Customer testimonials"
    >
      <div
        className="woice-testimonial-widget"
        data-business-slug="prayana-holidays-s9f8c"
        data-theme="light"
        data-layout="slider"
        data-height="420"
      />

      <Script
        src="https://app.woice.it.com/embed.js"
        strategy="afterInteractive"
        data-base-url="https://app.woice.it.com"
      />
    </section>
  );
}

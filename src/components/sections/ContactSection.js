"use client";

import Image from "next/image";
import { ArrowUpRight, Send } from "lucide-react";
import Container from "@/components/layout/Container";
import { contactDetails } from "@/data/contactDetails";
import { siteConfig } from "@/data/siteConfig";

const inputStyles =
  "min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm text-heading transition placeholder:text-slate-400 hover:border-slate-300 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10";

export default function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = [
      "Hello Prayana Holidays,",
      "",
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Subject: ${formData.get("subject")}`,
      "",
      `${formData.get("message")}`,
    ].join("\n");

    window.open(
      `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#f8f1df]"
      aria-labelledby="contact-heading"
    >
      <Image
        src="/images/contact/contact-travel-bg.png"
        alt=""
        fill
        sizes="200vw"
        className="-z-20 object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-[#fffaf0]/55" />

      <Container className="max-w-[1180px] pt-32 pb-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,460px)] lg:gap-20">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-brand uppercase">
              Contact Prayana Holidays
            </p>
            <h2
              id="contact-heading"
              className="mt-4 max-w-[12ch] text-4xl font-light tracking-[-0.04em] text-heading sm:text-5xl"
            >
              Let&apos;s plan your next journey
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Visit our office or tell us where you would love to go. Our travel
              team will help shape a holiday around your interests and budget.
            </p>

            <div className="mt-9 grid max-w-xl gap-5">
              {contactDetails.map(({ title, description, value, href, Icon, external }) => (
                <article key={title} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-sm">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.9} />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold tracking-[0.08em] text-heading uppercase">
                      {title}
                    </h3>
                    <p className="mt-1 max-w-md text-sm leading-6 text-slate-600">
                      {description}
                    </p>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-hover"
                    >
                      {value}
                      {external ? (
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      ) : null}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <form
            className="grid gap-3 rounded-2xl border border-white bg-white p-5 shadow-[0_20px_50px_rgba(16,42,67,0.12)] sm:grid-cols-2 sm:p-7"
            onSubmit={handleSubmit}
          >
            <div className="mb-2 sm:col-span-2">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-heading">
                Send an enquiry
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                We&apos;ll continue the conversation on WhatsApp.
              </p>
            </div>
            <div>
              <label className="sr-only" htmlFor="contact-name">
                Full name
              </label>
              <input
                className={inputStyles}
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Full name*"
                required
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="contact-email">
                Email address
              </label>
              <input
                className={inputStyles}
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email*"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="sr-only" htmlFor="contact-subject">
                Subject
              </label>
              <input
                className={inputStyles}
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Subject*"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="sr-only" htmlFor="contact-message">
                Message
              </label>
              <textarea
                className={`${inputStyles} min-h-28 resize-y py-3`}
                id="contact-message"
                name="message"
                placeholder="Tell us about your travel plans*"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-1 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand px-6 text-sm font-bold text-white transition-colors hover:bg-brand-hover sm:col-span-2"
            >
              Send enquiry
              <Send aria-hidden="true" className="size-4" />
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

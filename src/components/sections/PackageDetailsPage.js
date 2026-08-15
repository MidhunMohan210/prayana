"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Globe2,
  Heart,
  MapPin,
  MessageCircle,
  Share2,
  UsersRound,
} from "lucide-react";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/data/siteConfig";

const galleryPositions = [
  "sm:col-start-2 sm:row-start-1",
  "sm:col-start-3 sm:row-start-1",
  "sm:col-start-2 sm:row-start-2",
  "sm:col-start-3 sm:row-start-2",
];

function getEnquiryUrl(title, date, guests) {
  const message = [
    `Hello Prayana Holidays, I would like to enquire about ${title}.`,
    `Preferred travel date: ${date || "Not decided yet"}`,
    `Guests: ${guests}`,
  ].join("\n");

  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

function DetailRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 size-5 shrink-0 text-brand" strokeWidth={1.8} />
      <p className="text-sm leading-6 text-body">
        <span className="font-bold text-heading">{label}: </span>
        {value}
      </p>
    </div>
  );
}

function BookingCard({ trip }) {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("2 guests");

  return (
    <aside className="rounded-3xl border border-border bg-white p-6 shadow-[0_16px_36px_rgba(16,42,67,0.09)] sm:p-7">
      <p className="text-sm font-medium text-body">Starting from</p>
      <p className="mt-1 text-3xl font-bold tracking-[-0.045em] text-heading">
        {trip.price}
        <span className="ml-1 text-base font-medium tracking-normal text-body">
          /{trip.unit}
        </span>
      </p>
      <div className="mt-6 grid overflow-hidden rounded-xl border border-border text-sm font-semibold text-body">
        <label className="flex items-center gap-2 border-b border-border px-4 py-3.5">
          <CalendarDays className="size-5 shrink-0 text-brand" />
          <span className="sr-only">Preferred travel date</span>
          <input
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-heading outline-none"
            aria-label="Preferred travel date"
          />
        </label>
        <label className="flex items-center gap-2 px-4 py-3.5">
          <UsersRound className="size-5 shrink-0 text-brand" />
          <span className="sr-only">Number of guests</span>
          <select
            value={guests}
            onChange={(event) => setGuests(event.target.value)}
            className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-heading outline-none"
            aria-label="Number of guests"
          >
            {[
              "1 guest",
              "2 guests",
              "3 guests",
              "4 guests",
              "5 guests",
              "6+ guests",
            ].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>
      <a
        href={getEnquiryUrl(trip.title, date, guests)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-hover"
      >
        <MessageCircle className="size-4" />
        Enquire on WhatsApp
      </a>
      <a
        href="#enquiry"
        className="mt-3 flex min-h-12 items-center justify-center rounded-full border border-heading px-5 py-3 text-sm font-bold text-heading transition hover:border-brand hover:text-brand"
      >
        Make an enquiry
      </a>
    </aside>
  );
}

export default function PackageDetailsPage({ trip }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [activePhoto, setActivePhoto] = useState(0);
  const touchStart = useRef(0);

  function handleGalleryTouchEnd(event) {
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) < 40) return;

    setActivePhoto((current) =>
      distance < 0
        ? (current + 1) % trip.gallery.length
        : (current - 1 + trip.gallery.length) % trip.gallery.length,
    );
  }

  return (
    <main className="relative bg-[#fbfaf7] pb-16 before:absolute before:inset-x-0 before:top-0 before:h-24 before:bg-black/50">
      <Container className="max-w-[1240px] pt-28 sm:pt-32">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap gap-2 text-xs font-semibold text-body"
        >
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <span>›</span>
          <Link href="/#packages" className="hover:text-brand">
            Tour packages
          </Link>
          <span>›</span>
          <span className="text-heading">Kerala</span>
        </nav>
        <div className="mt-4 flex items-start justify-between gap-5">
          <div>
            <h1 className="max-w-4xl text-3xl sm:text-4xl lg:text-[42px]">
              {trip.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
              <span className="inline-flex items-center gap-1.5 text-brand">
                <span className="text-base">★</span>4.9{" "}
                <span className="text-body">(32 travellers)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-heading">
                <MapPin className="size-4 text-brand" />
                {trip.location}
              </span>
            </div>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              className="grid size-10 place-items-center rounded-full border border-border bg-white text-heading"
              aria-label="Share this package"
            >
              <Share2 className="size-4" />
            </button>
            <button
              className="grid size-10 place-items-center rounded-full border border-border bg-white text-heading"
              aria-label="Save this package"
            >
              <Heart className="size-4" />
            </button>
          </div>
        </div>
        <section aria-label="Package gallery" className="mt-7 sm:hidden">
          <div
            className="relative h-[310px] overflow-hidden rounded-2xl"
            onTouchStart={(event) => {
              touchStart.current = event.touches[0].clientX;
            }}
            onTouchEnd={handleGalleryTouchEnd}
          >
            <div
              className="flex h-full transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${activePhoto * 100}%)` }}
            >
              {trip.gallery.map((image, index) => (
                <div className="relative h-full min-w-full" key={image}>
                  <Image
                    src={image}
                    alt={`Kerala journey photo ${index + 1}`}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="absolute right-3 bottom-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-heading">
              {activePhoto + 1} / {trip.gallery.length}
            </span>
          </div>
          <div
            className="mt-3 flex justify-center gap-2"
            aria-label="Gallery slides"
          >
            {trip.gallery.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActivePhoto(index)}
                className={`h-2 rounded-full transition-all ${activePhoto === index ? "w-5 bg-brand" : "w-2 bg-border"}`}
                aria-label={`Show photo ${index + 1}`}
                aria-current={activePhoto === index ? "true" : undefined}
              />
            ))}
          </div>
        </section>
        <section
          aria-label="Package gallery"
          className="mt-7 hidden h-[460px] grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-3 overflow-hidden rounded-2xl sm:grid"
        >
          <div className="relative row-span-2">
            <Image
              src={trip.gallery[0]}
              alt="Kerala backwaters and houseboat"
              fill
              priority
              sizes="50vw"
              className="object-cover"
            />
          </div>
          {trip.gallery.slice(1).map((image, index) => (
            <div
              className={`relative overflow-hidden ${galleryPositions[index]}`}
              key={image}
            >
              <Image
                src={image}
                alt="Kerala journey experience"
                fill
                sizes="25vw"
                className="object-cover"
              />
              {index === 3 && (
                <span className="absolute right-3 bottom-3 rounded-full bg-white px-3 py-2 text-xs font-bold text-heading shadow-sm">
                  View gallery
                </span>
              )}
            </div>
          ))}
        </section>
        <div className="sticky top-0 z-20 -mx-5 mt-0 flex overflow-x-auto border-b border-border bg-[#fbfaf7] px-5 sm:hidden">
          <a
            href="#overview"
            className="shrink-0 border-b-2 border-brand px-4 py-3 text-sm font-bold text-heading"
          >
            Overview
          </a>
          <a
            href="#highlights"
            className="shrink-0 px-4 py-3 text-sm font-bold text-heading"
          >
            Highlights
          </a>
          <a
            href="#included"
            className="shrink-0 px-4 py-3 text-sm font-bold text-heading"
          >
            Includes
          </a>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
          <div className="min-w-0 space-y-11">
            <section id="overview">
              <h2 className="text-2xl">Overview</h2>
              <div className="mt-6 grid gap-5 border-y border-border py-6 sm:grid-cols-2">
                <DetailRow
                  icon={Clock3}
                  label="Duration"
                  value={trip.duration}
                />
                <DetailRow
                  icon={UsersRound}
                  label="Travellers"
                  value={trip.travelers}
                />
                <DetailRow
                  icon={CalendarDays}
                  label="Tour type"
                  value={trip.type}
                />
                <DetailRow
                  icon={Globe2}
                  label="Language"
                  value={trip.language}
                />
              </div>
              <div className="mt-6 space-y-4 text-[15px] leading-7 text-body">
                {trip.overview.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
            <section id="highlights" className="border-t border-border pt-10">
              <h2 className="text-2xl">Highlights</h2>
              <ul className="mt-6 space-y-3">
                {trip.highlights.map((item) => (
                  <li
                    className="flex gap-3 text-[15px] leading-6 text-body"
                    key={item}
                  >
                    <BadgeCheck
                      className="mt-0.5 size-5 shrink-0 text-[#ff5b31]"
                      strokeWidth={1.9}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section id="included" className="border-t border-border pt-10">
              <h2 className="text-2xl">Includes / Excludes</h2>
              <div className="mt-6 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-base">Included</h3>
                  <ul className="mt-4 space-y-3">
                    {trip.included.map((item) => (
                      <li
                        className="flex gap-3 text-sm leading-6 text-body"
                        key={item}
                      >
                        <Check className="mt-0.5 size-5 shrink-0 text-[#4b9c64]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-base">Not included</h3>
                  <ul className="mt-4 space-y-3">
                    {trip.excluded.map((item) => (
                      <li
                        className="flex gap-3 text-sm leading-6 text-body"
                        key={item}
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-body" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            <section className="border-t border-border pt-10">
              <h2 className="text-2xl">Cancellation policy</h2>
              <p className="mt-5 text-[15px] leading-7 text-body">
                {trip.cancellation}
              </p>
            </section>
            <section className="border-t border-border pt-10">
              <h2 className="text-2xl">Frequently asked questions</h2>
              <div className="mt-6 space-y-3">
                {trip.faqs.map((faq, index) => (
                  <div
                    className="rounded-xl border border-border bg-white"
                    key={faq.question}
                  >
                    <button
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-heading"
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      aria-expanded={openFaq === index}
                    >
                      {faq.question}
                      <ChevronDown
                        className={`size-5 shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openFaq === index && (
                      <p className="border-t border-border px-5 py-4 text-sm leading-7 text-body">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <BookingCard trip={trip} />
            <div className="mt-6 rounded-3xl border border-border bg-white p-6">
              <h2 className="text-lg">Why travel with Prayana?</h2>
              <ul className="mt-5 space-y-3">
                {[
                  "Flexible travel planning",
                  "Handpicked stays and experiences",
                  "Transparent pricing",
                  "On-trip support when you need it",
                ].map((item) => (
                  <li
                    className="flex gap-3 text-sm font-medium text-body"
                    key={item}
                  >
                    <CircleCheck
                      className="size-5 shrink-0 text-[#3ddc69]"
                      strokeWidth={2}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <section
          id="enquiry"
          className="mt-16 rounded-3xl bg-[#102a43] px-6 py-10 text-center sm:px-12"
        >
          <p className="text-sm font-bold tracking-[0.16em] text-[#b9d7ff] uppercase">
            Plan this journey your way
          </p>
          <h2 className="mt-3 !text-white text-3xl">
            Ready to experience Kerala?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">
            Tell us your dates, group size, and travel preferences. We’ll help
            tailor the right Kerala holiday for you.
          </p>
          <a
            href={getEnquiryUrl(trip.title, "", "Not specified")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-heading"
          >
            <MessageCircle className="size-4 text-brand" />
            Talk to a travel expert
          </a>
        </section>
      </Container>
    </main>
  );
}

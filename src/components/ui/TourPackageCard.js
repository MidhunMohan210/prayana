"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Clock3,
  ImageIcon,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

function getWhatsAppUrl(packageTitle) {
  const message = encodeURIComponent(
    `Hello ${siteConfig.businessName}, I would like to know more about the ${packageTitle} package.`,
  );
  const separator = siteConfig.whatsappUrl.includes("?") ? "&" : "?";

  return `${siteConfig.whatsappUrl}${separator}text=${message}`;
}

export default function TourPackageCard({ tourPackage }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_10px_28px_rgba(22,42,43,0.05)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-background">
        {tourPackage.imageAvailable ? (
          <Image
            src={tourPackage.image}
            alt={tourPackage.imageAlt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
          />
        ) : (
          <div
            className="flex size-full flex-col items-center justify-center gap-3 text-brand/65"
            role="img"
            aria-label={`${tourPackage.title} destination image coming soon`}
          >
            <ImageIcon aria-hidden="true" className="size-9" strokeWidth={1.4} />
            <span className="text-xs font-semibold tracking-[0.12em] uppercase">
              Image coming soon
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-body">
          <span className="inline-flex items-center gap-1.5">
            <MapPin aria-hidden="true" className="size-4 text-brand" />
            {tourPackage.location}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 aria-hidden="true" className="size-4 text-brand" />
            {tourPackage.duration}
          </span>
        </div>

        <h3 className="mt-4 text-2xl leading-tight font-semibold tracking-[-0.03em] text-heading">
          {tourPackage.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-body">
          {tourPackage.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Package highlights">
          {tourPackage.highlights.map((highlight) => (
            <li
              key={highlight}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-heading"
            >
              <Check aria-hidden="true" className="size-3.5 text-brand" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <p className="text-xs font-semibold tracking-[0.1em] text-body uppercase">
            Starting from
          </p>
          <p className="mt-1 text-2xl font-bold tracking-[-0.03em] text-brand">
            {tourPackage.price}
          </p>

          <div className="mt-5 grid gap-2">
            <Link
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-bold text-heading transition-colors hover:border-brand hover:text-brand"
            >
              View Details
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
            <a
              href={getWhatsAppUrl(tourPackage.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand bg-brand px-4 py-2.5 text-sm font-bold text-white transition-colors hover:border-brand-hover hover:bg-brand-hover"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Star } from "lucide-react";

export default function TourPackageCard({ tourPackage }) {
  const {
    title,
    location,
    duration,
    rating,
    priceFrom,
    currency = "$",
    image,
  } = tourPackage;

  return (
    <article className="w-full max-w-sm overflow-hidden rounded-3xl bg-white shadow-[0_14px_35px_rgba(16,36,60,0.10)]">
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-5 py-4">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-[13px] text-slate-400">
          <MapPin aria-hidden="true" className="size-3.5 text-[#2F80ED]" />
          <span className="truncate">{location}</span>
        </div>

        {/* Title */}
        <h3 className="mt-1 line-clamp-1 text-[15px] font-extrabold leading-tight tracking-[-0.01em] text-[#0F2A4A]">
          {title}
        </h3>

        {/* Bottom row: duration / rating+price */}
        <div className="mt-4 flex items-center justify-between gap-3">
          {/* Duration pill */}
          <div className="flex items-center gap-2 rounded-xl bg-slate-100 py-2 pl-2 pr-3.5">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <Calendar aria-hidden="true" className="size-4 text-[#2F80ED]" />
            </span>
            <span className="leading-tight">
              <p className="text-[11px] font-medium text-slate-400">
                Duration
              </p>
              <p className="text-[13px] font-bold text-[#0F2A4A]">
                {duration}
              </p>
            </span>
          </div>

          {/* Rating + Price */}
          <div className="flex shrink-0 flex-col items-end gap-1.5">
            {rating > 0 && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#F0A93E] px-2.5 py-0.5 text-[11px] font-bold text-white">
                <Star
                  aria-hidden="true"
                  className="size-3 fill-white text-white"
                />
                {rating.toFixed(1)}
              </span>
            )}
            {priceFrom && (
              <p className="text-[13px] font-bold text-[#0F2A4A]">
                {currency}
                {priceFrom}
              </p>
            )}
          </div>
        </div>

        {tourPackage.id === "kerala-backwaters-luxury-retreat" ? (
          <Link
            href={`/packages/${tourPackage.id}`}
            className="mt-5 flex min-h-10 items-center justify-center rounded-full border border-[#0F2A4A] px-4 py-2 text-xs font-bold text-[#0F2A4A] transition-colors hover:border-[#2F80ED] hover:bg-[#2F80ED] hover:text-white"
          >
            View package details
          </Link>
        ) : null}
      </div>
    </article>
  );
}

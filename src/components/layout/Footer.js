import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  UsersRound,
} from "lucide-react";
import Container from "@/components/layout/Container";
import { footerLinkGroups } from "@/data/footerLinks";
import { siteConfig } from "@/data/siteConfig";

const socialIcons = {
  Facebook: UsersRound,
  Instagram: Camera,
  YouTube: Play,
};

const contactLinks = [
  {
    label: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "Kuravilangad, Kerala",
    href: siteConfig.mapUrl,
    icon: MapPin,
    external: true,
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0c1422] text-white">
      <Container className="pt-20 pb-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 border-b border-white/12 pb-12 sm:grid-cols-2 lg:grid-cols-[1.55fr_0.75fr_0.85fr_1.1fr] lg:gap-14 lg:pb-16">
          <div className="max-w-sm sm:col-span-2 lg:col-span-1">
            <Link
              href="#home"
              className="inline-flex items-center gap-3 text-xl font-bold tracking-[-0.03em]"
            >
              <span
                className="relative size-12 shrink-0 overflow-hidden rounded-xl bg-white"
                aria-hidden="true"
              >
                <Image
                  src="/images/logo/prayana-logo.png"
                  alt=""
                  width={96}
                  height={96}
                  className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
                />
              </span>
              <span>{siteConfig.businessName}</span>
            </Link>

            <p className="mt-6 text-sm leading-7 text-white/60 sm:text-[15px]">
              Thoughtfully planned holidays, dependable support, and memorable journeys for
              families, couples, groups, and curious travellers.
            </p>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-hover"
            >
              <MessageCircle size={17} aria-hidden="true" />
              Plan on WhatsApp
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-bold tracking-wide !text-white">{group.title}</h2>
              <ul className="mt-5 space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-sm font-bold tracking-wide !text-white">Get in touch</h2>
            <ul className="mt-5 space-y-4">
              {contactLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-3 text-sm leading-6 text-white/60 transition-colors hover:text-white"
                    >
                      <Icon
                        size={17}
                        className="mt-0.5 shrink-0 text-[#6fb2ff] transition-colors group-hover:text-brand"
                        aria-hidden="true"
                      />
                      <span className="break-words">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-7 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-white/45 sm:text-sm">
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.
          </p>

          <div className="flex items-center gap-3" aria-label="Social media">
            {siteConfig.socialLinks.map((social) => {
              const Icon = socialIcons[social.label];
              const className =
                "inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-white/65 transition hover:border-brand hover:bg-brand hover:text-white";

              if (social.isPlaceholder) {
                return (
                  <span
                    key={social.label}
                    className={className}
                    aria-label={`${social.label} link coming soon`}
                    title={`${social.label} link coming soon`}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </span>
                );
              }

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  aria-label={social.label}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}

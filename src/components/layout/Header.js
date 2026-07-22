"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { siteConfig } from "@/data/siteConfig";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuState, setMenuState] = useState({ open: false, pathname: null });
  const isMenuOpen = menuState.open && menuState.pathname === pathname;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuState({ open: false, pathname });
      }
    };

    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen, pathname]);

  const closeMenu = () => setMenuState({ open: false, pathname });
  const headerText = "text-white";

  return (
    <header
      data-testid="site-header"
      data-scrolled={isScrolled}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/40" : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between gap-6 lg:h-24">
        <Link
          href="#home"
          className={`flex shrink-0 items-center gap-2.5 text-base font-bold tracking-[-0.03em] transition-colors sm:text-lg ${headerText}`}
          onClick={closeMenu}
        >
          <span className="relative size-12 shrink-0 overflow-hidden rounded-xl" aria-hidden="true">
            <Image
              src="/images/logo/prayana-logo.png"
              alt=""
              width={96}
              height={96}
              priority
              className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
            />
          </span>
          <span>{siteConfig.businessName}</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {siteConfig.navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-semibold transition-colors hover:text-brand ${headerText}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button
            href={siteConfig.whatsappUrl}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Plan Your Trip
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/35 bg-black/10 text-white transition-colors hover:bg-black/20 lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuState({ open: !isMenuOpen, pathname })}
        >
          {isMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </Container>

      {isMenuOpen ? (
        <div id="mobile-navigation" className="border-t border-border bg-surface lg:hidden">
          <Container className="max-h-[calc(100dvh-5rem)] overflow-y-auto py-6">
            <nav aria-label="Mobile navigation" className="flex flex-col">
              {siteConfig.navigationItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="border-b border-border py-3.5 text-base font-semibold text-heading transition-colors hover:text-brand"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button
              href={siteConfig.whatsappUrl}
              className="mt-6 w-full"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Plan Your Trip
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

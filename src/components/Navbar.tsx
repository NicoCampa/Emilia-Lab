"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { languages, navItems, type Language } from "@/content/site";
import { useLanguage } from "@/components/LanguageProvider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { content, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/45 bg-white/24 shadow-[0_1px_24px_rgba(16,32,24,0.04)] backdrop-blur-2xl supports-[backdrop-filter]:bg-white/18">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        <Link
          className="group flex items-center text-ink transition hover:text-moss"
          href="/"
          onClick={closeMenu}
        >
          <BrandMark className="transition group-hover:scale-[0.98]" />
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/70 bg-white/55 p-1 shadow-sm backdrop-blur-md md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold text-graphite transition hover:bg-lime/30 hover:text-ink",
                  active && "bg-lime/50 text-ink"
                )}
                href={item.href}
                key={item.href}
              >
                {content.nav[item.key]}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
          <Link
            className="rounded-full bg-leaf px-5 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-moss"
            href="/join"
          >
            {content.common.joinCta}
          </Link>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/55 text-ink shadow-sm backdrop-blur-md md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "grid border-t border-white/50 bg-white/88 backdrop-blur-xl transition-all duration-300 md:hidden",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-2 px-5 py-5">
            {navItems.map((item) => (
              <Link
                className={cn(
                  "block rounded-lg px-4 py-3 text-base font-medium text-graphite transition hover:bg-lime/30 hover:text-ink",
                  pathname === item.href && "bg-white text-ink"
                )}
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {content.nav[item.key]}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-3">
              <LanguageSwitcher language={language} setLanguage={setLanguage} />
              <Link
                className="rounded-full bg-leaf px-4 py-2 text-sm font-semibold text-white"
                href="/join"
                onClick={closeMenu}
              >
                {content.common.joinCta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function LanguageSwitcher({
  language,
  setLanguage
}: {
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  return (
    <div
      aria-label="Language switcher"
      className="inline-flex rounded-full border border-white/70 bg-white/55 p-1 shadow-sm backdrop-blur-md"
      role="group"
    >
      {(Object.keys(languages) as Language[]).map((item) => (
        <button
          className={cn(
            "h-8 rounded-full px-3 text-xs font-bold transition",
            language === item ? "bg-ink text-white" : "text-graphite hover:text-ink"
          )}
          key={item}
          onClick={() => setLanguage(item)}
          type="button"
        >
          {languages[item]}
        </button>
      ))}
    </div>
  );
}

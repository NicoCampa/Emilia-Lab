"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { languages, navItems, type Language } from "@/content/site";
import { useLanguage } from "@/components/LanguageProvider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { content, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/82 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
      >
        <Link
          className="group flex items-center gap-3 text-ink transition hover:text-moss"
          href="/"
          onClick={closeMenu}
        >
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-leaf text-sm font-black text-white shadow-sm ring-1 ring-leaf/20 transition group-hover:scale-95">
            <span className="absolute right-0 top-0 h-3 w-3 bg-lime" />
            EL
          </span>
          <span className="text-base font-black">Emilia Lab</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold text-graphite transition hover:bg-lime/35 hover:text-ink",
                  active && "bg-lime/60 text-ink"
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
            className="rounded-full bg-leaf px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-moss"
            href="/join"
          >
            {content.common.joinCta}
          </Link>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "grid border-t border-ink/10 bg-white transition-all duration-300 md:hidden",
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
      className="inline-flex rounded-full border border-ink/10 bg-white p-1"
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

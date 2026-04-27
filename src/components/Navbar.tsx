"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  applicationFormUrl,
  languages,
  navItems,
  type Language
} from "@/content/site";
import { useLanguage } from "@/components/LanguageProvider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { content, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto] items-center px-5 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-8"
      >
        <div className="hidden items-center gap-2 md:col-start-2 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                className={cn(
                  "pointer-events-auto rounded-full border border-white/70 bg-white/55 px-4 py-2 text-sm font-semibold text-graphite shadow-sm backdrop-blur-md transition hover:bg-lime/40 hover:text-ink",
                  active && "border-lime/70 bg-lime/70 text-ink"
                )}
                href={item.href}
                key={item.href}
              >
                {content.nav[item.key]}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center justify-self-end gap-3 md:flex">
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
          <a
            className="pointer-events-auto rounded-full bg-lime px-5 py-2 text-sm font-bold text-ink shadow-sm transition hover:-translate-y-0.5 hover:bg-lime/80"
            href={applicationFormUrl}
            rel="noreferrer"
            target="_blank"
          >
            {content.common.joinCta}
          </a>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="pointer-events-auto col-start-2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/55 text-ink shadow-sm backdrop-blur-md md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="pointer-events-auto mx-5 grid rounded-lg border border-white/70 bg-white/92 shadow-soft backdrop-blur-xl transition-all duration-300 md:hidden">
          <div className="overflow-hidden">
            <div className="space-y-2 px-5 py-5">
              {navItems.map((item) => (
                <Link
                  className={cn(
                    "block rounded-lg px-4 py-3 text-base font-medium text-graphite transition hover:bg-lime/30 hover:text-ink",
                    pathname === item.href && "bg-lime/50 text-ink"
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
                <a
                  className="rounded-full bg-lime px-4 py-2 text-sm font-semibold text-ink"
                  href={applicationFormUrl}
                  onClick={closeMenu}
                  rel="noreferrer"
                  target="_blank"
                >
                  {content.common.joinCta}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
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
      className="pointer-events-auto inline-flex rounded-full border border-white/70 bg-white/55 p-1 shadow-sm backdrop-blur-md"
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

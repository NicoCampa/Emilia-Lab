"use client";

import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/content/site";
import { useLanguage } from "@/components/LanguageProvider";

export function Footer() {
  const { content } = useLanguage();

  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <Link className="inline-flex items-center gap-3 text-ink" href="/">
            <span className="relative h-11 w-11 overflow-hidden rounded-lg bg-leaf">
              <Image
                alt="Emilia Lab logo"
                className="object-cover object-bottom"
                fill
                sizes="44px"
                src="/emilia-logo.png"
              />
            </span>
            <span className="text-lg font-bold">Emilia Lab</span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-6 text-graphite">
            {content.footer.tagline}
          </p>
          <p className="mt-6 text-sm font-semibold text-ink">
            {content.footer.location}
          </p>
        </div>

        <div>
          <p className="text-sm font-bold text-ink">{content.footer.linksTitle}</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {navItems.map((item) => (
              <Link
                className="text-sm text-graphite transition hover:text-moss"
                href={item.href}
                key={item.href}
              >
                {content.nav[item.key]}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/Button";
import { IconBadge } from "@/components/IconBadge";
import { Container, Section } from "@/components/Section";
import { SectionReveal } from "@/components/SectionReveal";
import { useLanguage } from "@/components/LanguageProvider";
import { iconMap, type IconName } from "@/content/site";

export function HomePage() {
  const { content } = useLanguage();
  const home = content.home;

  return (
    <>
      <section className="hero-poster relative isolate overflow-hidden">
        <div className="hero-location-plane hidden lg:block">
          <Image
            alt="Bologna two towers"
            className="object-cover object-center"
            fill
            priority
            sizes="48vw"
            src="/bologna-towers.jpg"
          />
          <div className="hero-location-wash" />
          <div className="hero-location-grid" />
          <div className="hero-location-label">
            <span>{home.hero.location}</span>
            <span>{home.hero.signal}</span>
          </div>
        </div>

        <Container className="relative z-10 grid min-h-[calc(100svh-4rem)] items-center gap-8 py-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,0.58fr)]">
          <div className="max-w-3xl py-7 lg:py-12">
            <p className="animate-fade-up text-sm font-black uppercase text-moss">
              {home.hero.eyebrow}
            </p>
            <h1 className="mt-5 animate-fade-up text-7xl font-black leading-[0.86] text-ink delay-100 sm:text-8xl lg:text-[8.4rem]">
              Emilia
              <span className="block text-leaf">Lab</span>
            </h1>
            <p className="mt-8 max-w-2xl animate-fade-up text-lg leading-8 text-graphite delay-200 sm:text-xl">
              {home.hero.subtitle}
            </p>
            <div className="mt-8 flex animate-fade-up flex-col gap-3 delay-300 sm:flex-row">
              <Button href="/join">{home.hero.primaryCta}</Button>
              <Button href="/what-we-do" variant="secondary">
                {home.hero.secondaryCta}
              </Button>
            </div>
            <div className="mt-9 flex max-w-2xl animate-fade-up flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/10 pt-5 delay-500">
              {home.hero.proof.map((item) => (
                <div
                  className="flex items-center gap-2 text-sm font-black text-ink"
                  key={item}
                >
                  <Check className="h-4 w-4 text-leaf" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="relative mt-8 h-36 overflow-hidden rounded-lg border border-ink/10 shadow-soft lg:hidden">
              <Image
                alt="Bologna two towers"
                className="object-cover object-[50%_36%]"
                fill
                sizes="100vw"
                src="/bologna-towers.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-ink/10 to-leaf/20" />
              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase text-ink">
                {home.hero.location}
              </div>
            </div>
          </div>

        </Container>
      </section>

      <Section className="bg-white">
        <SectionReveal>
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <p className="text-sm font-black uppercase text-moss">{home.intro.label}</p>
            <div>
              <h2 className="max-w-4xl text-4xl font-black leading-[1.05] text-ink sm:text-5xl">
                <span className="lime-underline">{home.intro.title}</span>
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-graphite">
                {home.intro.body}
              </p>
            </div>
          </div>
        </SectionReveal>
      </Section>

      <Section id="focus">
        <SectionReveal>
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <h2 className="text-4xl font-black text-ink sm:text-5xl">
              {home.focusTitle}
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-graphite">
              {home.focusSubtitle}
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12">
          {home.focusAreas.map((area, index) => (
            <SectionReveal key={area.title}>
              <article className="focus-lane group grid gap-6 py-8 transition duration-300 hover:bg-white/70 sm:grid-cols-[4rem_1fr] lg:grid-cols-[5rem_0.9fr_1fr] lg:items-start lg:px-4">
                <div className="flex items-center justify-between sm:block">
                  <span className="text-sm font-black text-leaf">
                    0{index + 1}
                  </span>
                  <div className="mt-0 sm:mt-6">
                    <IconBadge icon={area.icon as IconName} />
                  </div>
                </div>
                <h3 className="text-3xl font-black leading-tight text-ink transition group-hover:text-moss">
                  {area.title}
                </h3>
                <div>
                  <p className="max-w-2xl leading-7 text-graphite">
                    {area.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {area.points.map((point) => (
                      <li
                        className="rounded-full bg-lime/45 px-3 py-1.5 text-sm font-bold text-ink"
                        key={point}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </Section>

      <Section className="bg-ink text-white">
        <SectionReveal>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="sticky top-28">
              <p className="text-sm font-bold uppercase text-lime">Why</p>
              <h2 className="mt-4 max-w-lg text-4xl font-black leading-[1.05] sm:text-5xl">
                {home.why.title}
              </h2>
            </div>
            <div className="hairline-list">
              {home.why.items.map((item) => {
                const Icon = iconMap[item.icon as IconName];

                return (
                  <div className="grid gap-5 py-8 sm:grid-cols-[3rem_1fr]" key={item.title}>
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-lime">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-2xl font-black">{item.title}</h3>
                      <p className="mt-3 max-w-2xl leading-7 text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </SectionReveal>
      </Section>

      <Section className="bg-white">
        <SectionReveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
            <div>
              <h2 className="text-4xl font-black leading-[1.05] text-ink sm:text-5xl">
                {home.teamPreview.title}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-graphite">
                {home.teamPreview.body}
              </p>
              <Link
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-moss transition hover:text-ink"
                href="/team"
              >
                {content.nav.team}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="rounded-lg border border-ink/10 bg-mist p-3">
              {home.teamPreview.roles.map((role) => (
                <div
                  className="flex items-center justify-between border-b border-ink/10 px-4 py-5 text-lg font-black text-ink last:border-b-0"
                  key={role}
                >
                  <span>{role}</span>
                  <span className="h-3 w-3 rounded-full bg-leaf" />
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </Section>

      <Section className="relative overflow-hidden bg-leaf text-white">
        <SectionReveal>
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-black leading-[1.05] sm:text-5xl">
                {home.finalCta.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                {home.finalCta.body}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="/join" variant="light">
                {home.finalCta.primary}
              </Button>
              <Button
                href="https://www.linkedin.com"
                variant="outlineLight"
                external
              >
                {home.finalCta.secondary}
              </Button>
            </div>
          </div>
        </SectionReveal>
      </Section>
    </>
  );
}

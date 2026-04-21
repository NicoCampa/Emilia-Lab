"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MoveRight } from "lucide-react";
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
      <section className="hero-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-lab-grid bg-[size:32px_32px] opacity-60" />
        <Container className="relative grid min-h-[calc(100svh-5rem)] items-center gap-12 py-14 md:grid-cols-[1.02fr_0.98fr] lg:py-16">
          <div className="max-w-3xl">
            <p className="animate-fade-up text-sm font-bold uppercase text-moss">
              {home.hero.eyebrow}
            </p>
            <h1 className="mt-5 animate-fade-up text-6xl font-black leading-[0.95] text-ink delay-100 sm:text-7xl lg:text-8xl">
              {home.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-8 text-graphite delay-200 sm:text-xl">
              {home.hero.subtitle}
            </p>
            <div className="mt-8 flex animate-fade-up flex-col gap-3 delay-300 sm:flex-row">
              <Button href="/join">{home.hero.primaryCta}</Button>
              <Button href="/what-we-do" variant="secondary">
                {home.hero.secondaryCta}
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl animate-fade-up gap-3 delay-500 sm:grid-cols-3">
              {home.hero.proof.map((item) => (
                <div
                  className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-sm font-semibold text-ink ring-1 ring-ink/10 backdrop-blur"
                  key={item}
                >
                  <Check className="h-4 w-4 text-leaf" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] animate-float">
            <div className="signal-plane aspect-square rounded-[2rem] shadow-soft">
              <Image
                alt="Emilia Lab logo poster"
                className="relative z-10 object-cover object-bottom"
                fill
                priority
                sizes="(min-width: 1024px) 520px, 90vw"
                src="/emilia-logo.png"
              />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 z-20 flex items-center justify-between rounded-2xl bg-white/92 px-5 py-4 shadow-soft ring-1 ring-ink/10 backdrop-blur">
              <span className="text-sm font-bold text-ink">{home.hero.signal}</span>
              <MoveRight className="h-5 w-5 text-leaf" />
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <SectionReveal>
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <p className="text-sm font-bold uppercase text-moss">{home.intro.label}</p>
            <div>
              <h2 className="max-w-4xl text-4xl font-black leading-[1.05] text-ink sm:text-5xl">
                {home.intro.title}
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
          <div className="max-w-3xl">
            <h2 className="text-4xl font-black text-ink sm:text-5xl">
              {home.focusTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-graphite">
              {home.focusSubtitle}
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {home.focusAreas.map((area, index) => (
            <SectionReveal className="h-full" key={area.title}>
              <article className="group flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-white p-6 shadow-[0_1px_0_rgba(16,32,24,0.05)] transition duration-300 hover:-translate-y-1 hover:border-leaf/30 hover:shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <IconBadge icon={area.icon as IconName} />
                  <span className="text-sm font-black text-ink/20">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-black leading-tight text-ink">
                  {area.title}
                </h3>
                <p className="mt-4 flex-1 leading-7 text-graphite">
                  {area.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {area.points.map((point) => (
                    <li className="flex items-center gap-3 text-sm font-semibold text-ink" key={point}>
                      <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
                      {point}
                    </li>
                  ))}
                </ul>
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
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lime">
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
            <div className="grid gap-3 sm:grid-cols-2">
              {home.teamPreview.roles.map((role) => (
                <div
                  className="rounded-2xl border border-ink/10 bg-mist px-5 py-6 text-lg font-black text-ink transition hover:border-leaf/30 hover:bg-white"
                  key={role}
                >
                  {role}
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </Section>

      <Section className="bg-leaf text-white">
        <SectionReveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
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

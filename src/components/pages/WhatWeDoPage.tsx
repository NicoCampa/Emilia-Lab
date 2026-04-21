"use client";

import { IconBadge } from "@/components/IconBadge";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionReveal } from "@/components/SectionReveal";
import { useLanguage } from "@/components/LanguageProvider";
import { type IconName } from "@/content/site";

export function WhatWeDoPage() {
  const { content } = useLanguage();
  const page = content.whatWeDo;

  return (
    <>
      <PageHeader intro={page.pageIntro} title={page.pageTitle} />

      <Section className="bg-white">
        <div className="space-y-6">
          {page.sections.map((section, index) => (
            <SectionReveal key={section.title}>
              <article className="grid gap-6 rounded-[1.5rem] border border-ink/10 bg-mist p-6 transition hover:border-leaf/30 hover:bg-white hover:shadow-soft md:grid-cols-[4rem_1fr_0.8fr] md:p-8">
                <div className="flex items-start justify-between md:block">
                  <IconBadge icon={section.icon as IconName} />
                  <span className="text-sm font-black text-ink/20 md:mt-8 md:block">
                    0{index + 1}
                  </span>
                </div>
                <div>
                  <h2 className="text-3xl font-black text-ink">{section.title}</h2>
                  <p className="mt-4 max-w-2xl leading-7 text-graphite">
                    {section.description}
                  </p>
                </div>
                <ul className="space-y-3">
                  {section.details.map((detail) => (
                    <li className="rounded-full bg-white px-4 py-3 text-sm font-bold text-ink ring-1 ring-ink/10" key={detail}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            </SectionReveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionReveal>
          <div className="rounded-[2rem] bg-ink p-8 text-white sm:p-10 lg:p-12">
            <p className="text-sm font-bold uppercase text-lime">Workflow</p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              {page.rhythmTitle}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">
              {page.rhythm}
            </p>
          </div>
        </SectionReveal>
      </Section>
    </>
  );
}

"use client";

import { IconBadge } from "@/components/IconBadge";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionReveal } from "@/components/SectionReveal";
import { useLanguage } from "@/components/LanguageProvider";
import { type IconName } from "@/content/site";

export function AboutPage() {
  const { content } = useLanguage();
  const page = content.about;

  return (
    <>
      <PageHeader intro={page.pageIntro} title={page.pageTitle} />

      <Section className="bg-white">
        <SectionReveal>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <p className="text-2xl font-black leading-10 text-ink">{page.body}</p>
            <div className="hairline-list rounded-lg border border-ink/10 bg-mist px-6">
              {page.manifesto.map((item) => (
                <p className="py-6 text-lg font-semibold leading-8 text-ink" key={item}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </SectionReveal>
      </Section>

      <Section>
        <SectionReveal>
          <h2 className="text-4xl font-black text-ink sm:text-5xl">
            {page.principlesTitle}
          </h2>
        </SectionReveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {page.principles.map((principle) => (
            <SectionReveal key={principle.title}>
              <article className="h-full rounded-lg border border-ink/10 bg-white p-6 transition hover:-translate-y-1 hover:border-leaf/30 hover:shadow-soft">
                <IconBadge icon={principle.icon as IconName} />
                <h3 className="mt-6 text-2xl font-black text-ink">
                  {principle.title}
                </h3>
                <p className="mt-4 leading-7 text-graphite">
                  {principle.description}
                </p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </Section>
    </>
  );
}

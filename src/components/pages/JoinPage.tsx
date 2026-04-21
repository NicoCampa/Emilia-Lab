"use client";

import { Mail, Plus, Radio } from "lucide-react";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionReveal } from "@/components/SectionReveal";
import { useLanguage } from "@/components/LanguageProvider";

export function JoinPage() {
  const { content } = useLanguage();
  const page = content.join;

  return (
    <>
      <PageHeader intro={page.pageIntro} title={page.pageTitle} />

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionReveal>
            <div>
              <p className="text-sm font-bold uppercase text-moss">
                {page.lookingForTitle}
              </p>
              <div className="hairline-list mt-5 rounded-lg border border-ink/10 bg-mist px-6">
                {page.lookingFor.map((item) => (
                  <div className="flex gap-4 py-6" key={item}>
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
                      <Plus className="h-4 w-4" />
                    </span>
                    <p className="text-lg font-semibold leading-8 text-ink">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="rounded-lg bg-ink p-8 text-white shadow-soft sm:p-10">
              <p className="text-sm font-bold uppercase text-lime">
                {page.contactTitle}
              </p>
              <h2 className="mt-5 text-4xl font-black leading-[1.05]">
                Emilia Lab
              </h2>
              <p className="mt-5 leading-8 text-white/72">{page.contactBody}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={`mailto:${page.email}`}
                  variant="light"
                >
                  <Mail className="h-4 w-4" />
                  {page.primary}
                </Button>
                <Button
                  href="https://www.linkedin.com"
                  variant="outlineLight"
                  external
                >
                  <Radio className="h-4 w-4" />
                  {page.secondary}
                </Button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </Section>
    </>
  );
}

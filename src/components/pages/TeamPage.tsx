"use client";

import { UsersRound } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionReveal } from "@/components/SectionReveal";
import { useLanguage } from "@/components/LanguageProvider";

export function TeamPage() {
  const { content } = useLanguage();
  const page = content.team;

  return (
    <>
      <PageHeader intro={page.pageIntro} title={page.pageTitle} />

      <Section className="bg-white">
        <div className="border-y border-ink/10">
          {page.groups.map((group, index) => (
            <SectionReveal key={group.title}>
              <article className="grid gap-6 border-b border-ink/10 py-8 last:border-b-0 lg:grid-cols-[5rem_0.65fr_1fr] lg:items-start">
                <div className="flex items-center justify-between lg:block">
                  <span className="text-sm font-black text-leaf">
                    0{index + 1}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-lime text-ink lg:mt-6">
                    <UsersRound className="h-5 w-5" />
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl font-black leading-tight text-ink sm:text-3xl">
                    {group.title}
                  </h2>
                  <div className="mt-5 space-y-3">
                    {group.members.map((member) => (
                      <div
                        className="inline-flex items-center gap-3 rounded-full bg-mist px-4 py-2 ring-1 ring-ink/10"
                        key={`${group.title}-${member.name}`}
                      >
                        <span className="font-black text-ink">{member.name}</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
                        <span className="text-sm font-bold text-graphite">
                          {member.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="max-w-3xl text-base leading-8 text-graphite lg:text-lg">
                  {group.description}
                </p>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <p className="mt-10 max-w-3xl rounded-lg border border-ink/10 bg-white p-5 leading-7 text-graphite">
            {page.note}
          </p>
        </SectionReveal>
      </Section>
    </>
  );
}

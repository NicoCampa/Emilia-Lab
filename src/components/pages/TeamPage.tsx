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
        <div className="grid gap-5 lg:grid-cols-2">
          {page.groups.map((group) => (
            <SectionReveal key={group.title}>
              <article className="h-full rounded-lg border border-ink/10 bg-mist p-6 transition hover:-translate-y-1 hover:border-leaf/30 hover:bg-white hover:shadow-soft">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-lime text-ink">
                    <UsersRound className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-black text-ink">{group.title}</h2>
                    <p className="mt-3 leading-7 text-graphite">{group.description}</p>
                  </div>
                </div>

                <div className="mt-7 space-y-3">
                  {group.members.map((member) => (
                    <div
                      className="flex items-center justify-between gap-4 rounded-lg bg-white px-4 py-4 ring-1 ring-ink/10"
                      key={`${group.title}-${member.name}`}
                    >
                      <div>
                        <p className="font-black text-ink">{member.name}</p>
                        <p className="mt-1 text-sm font-medium text-graphite">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
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

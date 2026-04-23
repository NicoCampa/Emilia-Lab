import { HighlightEmilia } from "@/components/BrandText";
import { Container } from "@/components/Section";

export function PageHeader({
  title,
  intro
}: {
  title: string;
  intro: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-lab-grid bg-[size:28px_28px] opacity-10" />
      <div className="absolute inset-y-0 right-0 hidden w-[38vw] bg-leaf md:block" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#102018_0%,rgba(16,32,24,0.94)_56%,rgba(16,32,24,0.28)_100%)]" />
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase text-white">
            Emilia Lab
          </p>
          <h1 className="text-5xl font-black leading-[1.02] text-white sm:text-6xl">
            <HighlightEmilia text={title} tone="mark" />
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/74 sm:text-xl">
            <HighlightEmilia text={intro} tone="mark" />
          </p>
        </div>
      </Container>
    </section>
  );
}

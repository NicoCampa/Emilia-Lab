import { Container } from "@/components/Section";

export function PageHeader({
  title,
  intro
}: {
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-white py-20 sm:py-24">
      <div className="absolute inset-0 bg-lab-grid bg-[size:28px_28px] opacity-50" />
      <Container className="relative">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase text-moss">Emilia Lab</p>
          <h1 className="text-5xl font-black leading-[1.02] text-ink sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-graphite sm:text-xl">{intro}</p>
        </div>
      </Container>
    </section>
  );
}

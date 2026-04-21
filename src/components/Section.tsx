import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function Container({ children, className }: SectionProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section className={cn("py-20 sm:py-24 lg:py-28", className)} id={id}>
      <Container>{children}</Container>
    </section>
  );
}

import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-label="Emilia Lab"
      className={cn(
        "relative inline-flex h-9 items-end overflow-hidden rounded-[3px] bg-leaf px-3 pb-2 pt-1 text-white shadow-sm ring-1 ring-leaf/20",
        className
      )}
    >
      <span className="absolute inset-x-0 top-0 h-0.5 bg-lime" />
      <span className="text-[14px] font-black leading-none">
        EMIL<span className="text-lime">IA</span>
      </span>
    </span>
  );
}

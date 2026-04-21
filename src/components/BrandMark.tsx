import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-label="Emilia Lab"
      className={cn(
        "relative inline-flex h-10 w-[116px] overflow-hidden rounded-md bg-leaf px-3 py-2 text-white shadow-sm ring-1 ring-leaf/20",
        className
      )}
    >
      <span className="absolute inset-x-0 top-0 h-1 bg-lime" />
      <span className="mt-auto font-black leading-none text-[15px]">
        EMIL<span className="text-lime">IA</span>
      </span>
    </span>
  );
}

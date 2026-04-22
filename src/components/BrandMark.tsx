import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-label="Emilia Lab"
      className={cn(
        "relative inline-flex h-9 w-[4.9rem] overflow-hidden rounded-[3px] bg-leaf shadow-sm ring-1 ring-leaf/20",
        className
      )}
    >
      <Image
        alt=""
        aria-hidden="true"
        className="object-cover object-[50%_55%]"
        fill
        sizes="96px"
        src="/emilia-logo.png"
      />
    </span>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light" | "outlineLight";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external = false
}: ButtonProps) {
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf",
    variant === "primary" &&
      "bg-leaf text-white shadow-soft hover:-translate-y-0.5 hover:bg-moss",
    variant === "secondary" &&
      "border border-ink/10 bg-white text-ink hover:-translate-y-0.5 hover:border-leaf/40 hover:bg-lime/25 hover:text-moss",
    variant === "ghost" &&
      "text-ink hover:bg-ink/[0.04] hover:text-moss",
    variant === "light" &&
      "bg-white text-ink hover:-translate-y-0.5 hover:bg-lime",
    variant === "outlineLight" &&
      "border border-white/35 bg-transparent text-white hover:-translate-y-0.5 hover:bg-white hover:text-ink",
    className
  );

  const content = (
    <>
      <span className="inline-flex items-center gap-2">{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5"
      />
    </>
  );

  if (external) {
    return (
      <a className={classes} href={href} rel="noreferrer" target="_blank">
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}

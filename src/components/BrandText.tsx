import { Fragment } from "react";
import { cn } from "@/lib/utils";

type BrandTone = "brand" | "mark";
type HighlightMode = "plain" | "brand";

function getBrandClasses(tone: BrandTone) {
  if (tone === "mark") {
    return {
      main: "text-white",
      accent: "text-lime",
      lab: "text-white"
    };
  }

  return {
    main: "text-leaf",
    accent: "brand-ai-on-light",
    lab: "text-leaf"
  };
}

export function EmiliaWord({
  className,
  tone = "brand",
  uppercase = false
}: {
  className?: string;
  tone?: BrandTone;
  uppercase?: boolean;
}) {
  const classes = getBrandClasses(tone);
  const stem = uppercase ? "EMIL" : "Emil";
  const ai = uppercase ? "IA" : "ia";

  return (
    <span className={cn(classes.main, className)}>
      {stem}
      <span className={classes.accent}>{ai}</span>
    </span>
  );
}

export function EmiliaLab({
  className,
  tone = "brand",
  uppercase = false
}: {
  className?: string;
  tone?: BrandTone;
  uppercase?: boolean;
}) {
  const classes = getBrandClasses(tone);

  return (
    <span className={cn("inline", className)}>
      <EmiliaWord tone={tone} uppercase={uppercase} />{" "}
      <span className={classes.lab}>{uppercase ? "LAB" : "Lab"}</span>
    </span>
  );
}

export function HighlightEmilia({
  text,
  tone = "brand",
  mode = "plain"
}: {
  text: string;
  tone?: BrandTone;
  mode?: HighlightMode;
}) {
  const parts = text.split(/(Emilia Lab|EMILIA LAB|Emilia|EMILIA)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (mode === "plain") {
          return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
        }

        if (part === "Emilia Lab") {
          return (
            <EmiliaLab key={`${part}-${index}`} tone={tone} />
          );
        }

        if (part === "EMILIA LAB") {
          return (
            <EmiliaLab key={`${part}-${index}`} tone={tone} uppercase />
          );
        }

        if (part === "Emilia") {
          return (
            <EmiliaWord key={`${part}-${index}`} tone={tone} />
          );
        }

        if (part === "EMILIA") {
          return (
            <EmiliaWord key={`${part}-${index}`} tone={tone} uppercase />
          );
        }

        return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
      })}
    </>
  );
}

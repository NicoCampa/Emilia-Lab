import { Fragment } from "react";
import { cn } from "@/lib/utils";

export function EmiliaWord({
  accentClassName = "text-leaf"
}: {
  accentClassName?: string;
}) {
  return (
    <>
      Emil<span className={accentClassName}>ia</span>
    </>
  );
}

export function EmiliaLab({
  accentClassName = "text-leaf",
  className
}: {
  accentClassName?: string;
  className?: string;
}) {
  return (
    <span className={cn("inline", className)}>
      <EmiliaWord accentClassName={accentClassName} /> Lab
    </span>
  );
}

export function HighlightEmilia({
  text,
  accentClassName = "text-leaf"
}: {
  text: string;
  accentClassName?: string;
}) {
  const parts = text.split(/(Emilia|EMILIA)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part === "Emilia") {
          return (
            <Fragment key={`${part}-${index}`}>
              Emil<span className={accentClassName}>ia</span>
            </Fragment>
          );
        }

        if (part === "EMILIA") {
          return (
            <Fragment key={`${part}-${index}`}>
              EMIL<span className={accentClassName}>IA</span>
            </Fragment>
          );
        }

        return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
      })}
    </>
  );
}

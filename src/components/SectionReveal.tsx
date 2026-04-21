"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function SectionReveal({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.16 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "translate-y-6 opacity-0 transition duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100",
        visible && "translate-y-0 opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
}

import type { ReactNode } from "react";

import { Reveal } from "@/components/reveal";
import { useIsMobile } from "@/hooks/use-mobile";

type MobileRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "figure" | "article";
};

/** Fade-in on scroll only on mobile; renders plain on desktop. */
export function MobileReveal({ children, className = "", delay = 0, as = "div" }: MobileRevealProps) {
  const isMobile = useIsMobile();
  const Tag = as as React.ElementType;

  if (!isMobile) return <Tag className={className}>{children}</Tag>;

  return (
    <Reveal as={as} className={className} delay={delay}>
      {children}
    </Reveal>
  );
}

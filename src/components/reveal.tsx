import type { ReactNode } from "react";

import { FadeInSection } from "@/components/fade-in-section";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "figure" | "article" | "li" | "header";
};

/** Back-compat alias for {@link FadeInSection}. */
export function Reveal({ children, className, delay, as }: RevealProps) {
  return (
    <FadeInSection className={className} delay={delay} as={as}>
      {children}
    </FadeInSection>
  );
}

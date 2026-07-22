import type { HTMLAttributes } from "react";

import "./section.css";

type SectionProps = HTMLAttributes<HTMLElement>;

export function Section({
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      className={`ui-section ${className}`.trim()}
      {...props}
    />
  );
}
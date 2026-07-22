import type { HTMLAttributes } from "react";

import "./stack.css";

type StackProps = HTMLAttributes<HTMLDivElement> & {
  gap?: "sm" | "md" | "lg";
};

export function Stack({
  gap = "md",
  className = "",
  ...props
}: StackProps) {
  return (
    <div
      className={`ui-stack ui-stack--${gap} ${className}`.trim()}
      {...props}
    />
  );
}
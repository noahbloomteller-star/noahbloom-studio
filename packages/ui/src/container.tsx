import type { HTMLAttributes } from "react";

import "./container.css";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export function Container({
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`ui-container ${className}`.trim()}
      {...props}
    />
  );
}
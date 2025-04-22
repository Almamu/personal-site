import { PropsWithChildren } from "react";
import * as React from "react";

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export function LabelBase({
  children,
  style = {},
  className = "",
}: PropsWithChildren<Props>) {
  return (
    <li
      className={
        "flex gap-1 flex-row align-middle px-2 py-1 backdrop-blur-sm rounded text-sm " +
        className
      }
      style={style}
    >
      {children}
    </li>
  );
}

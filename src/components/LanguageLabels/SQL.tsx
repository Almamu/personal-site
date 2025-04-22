import { PropsWithChildren } from "react";

export function SQL({ children }: PropsWithChildren) {
  return (
    <li
      style={{ background: "#e06c1a" }}
      className="inline px-2 py-1 backdrop-blur-sm rounded text-sm text-white"
    >
      {children}
    </li>
  );
}

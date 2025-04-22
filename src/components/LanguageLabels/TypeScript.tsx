import { PropsWithChildren } from "react";

export function TypeScript({ children }: PropsWithChildren) {
  return (
    <li
      style={{ background: "#3178c6" }}
      className="inline px-2 py-1 backdrop-blur-sm rounded text-sm text-white"
    >
      {children}
    </li>
  );
}

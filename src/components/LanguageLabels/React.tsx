import { PropsWithChildren } from "react";

export function React({ children }: PropsWithChildren) {
  return (
    <li
      style={{ background: "rgb(88 196 220)" }}
      className="inline px-2 py-1 backdrop-blur-sm rounded text-sm text-black"
    >
      {children}
    </li>
  );
}

import { PropsWithChildren } from "react";

export function Linux({ children }: PropsWithChildren) {
  return (
    <li
      style={{ background: "#ffbb03" }}
      className="inline px-2 py-1 backdrop-blur-sm rounded text-sm text-black"
    >
      {children}
    </li>
  );
}

import { PropsWithChildren } from "react";

export function Laravel({ children }: PropsWithChildren) {
  return (
    <li
      style={{ background: "rgb(245, 48, 3)" }}
      className="inline px-2 py-1 backdrop-blur-sm rounded text-sm text-white"
    >
      {children}
    </li>
  );
}

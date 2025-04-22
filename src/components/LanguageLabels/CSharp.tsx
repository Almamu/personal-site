import { PropsWithChildren } from "react";

export function CSharp({ children }: PropsWithChildren) {
  return (
    <li
      style={{ background: "#00a439" }}
      className="inline px-2 py-1 backdrop-blur-sm rounded text-sm text-white"
    >
      {children}
    </li>
  );
}

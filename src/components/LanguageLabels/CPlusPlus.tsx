import { PropsWithChildren } from "react";

export function CPlusPlus({ children }: PropsWithChildren) {
  return (
    <li
      style={{ background: "#004283" }}
      className="inline px-2 py-1 backdrop-blur-sm rounded text-sm text-white"
    >
      {children}
    </li>
  );
}

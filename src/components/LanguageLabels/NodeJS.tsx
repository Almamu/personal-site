import { PropsWithChildren } from "react";

export function NodeJS({ children }: PropsWithChildren) {
  return (
    <li
      style={{ background: "rgb(132, 186, 100)" }}
      className="inline px-2 py-1 backdrop-blur-sm rounded text-sm text-black"
    >
      {children}
    </li>
  );
}

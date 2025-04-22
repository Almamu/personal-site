import { PropsWithChildren } from "react";

export function Expo({ children }: PropsWithChildren) {
  return (
    <li
      style={{ background: "rgb(73 76 252)" }}
      className="inline px-2 py-1 backdrop-blur-sm rounded text-sm text-white"
    >
      {children}
    </li>
  );
}

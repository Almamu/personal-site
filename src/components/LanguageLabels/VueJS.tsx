import { PropsWithChildren } from "react";

export function VueJS({ children }: PropsWithChildren) {
  return (
    <li
      style={{
        backgroundImage: "linear-gradient(315deg,#42d392 25%,#647eff)",
      }}
      className="inline px-2 py-1 backdrop-blur-sm rounded text-sm text-black"
    >
      {children}
    </li>
  );
}

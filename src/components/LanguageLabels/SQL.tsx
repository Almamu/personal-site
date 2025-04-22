import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function SQL({ children }: PropsWithChildren) {
  return (
    <LabelBase style={{ background: "#e06c1a" }} className="text-white">
      {children}
    </LabelBase>
  );
}

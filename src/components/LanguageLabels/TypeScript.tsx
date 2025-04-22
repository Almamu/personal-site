import { SiTypescript, SiTypescriptHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function TypeScript({ children }: PropsWithChildren) {
  return (
    <LabelBase style={{ background: SiTypescriptHex }} className="text-white">
      <SiTypescript />
      {children}
    </LabelBase>
  );
}

import { SiC, SiCHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function C({ children }: PropsWithChildren) {
  return (
    <LabelBase style={{ background: SiCHex }} className="text-black">
      <SiC />
      {children}
    </LabelBase>
  );
}

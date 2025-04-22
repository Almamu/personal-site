import { SiPhp, SiPhpHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function PHP({ children }: PropsWithChildren) {
  return (
    <LabelBase style={{ background: SiPhpHex }} className="text-white">
      <SiPhp />
      {children}
    </LabelBase>
  );
}

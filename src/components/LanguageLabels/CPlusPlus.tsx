import { SiCplusplus, SiCplusplusHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function CPlusPlus({ children }: PropsWithChildren) {
  return (
    <LabelBase style={{ background: SiCplusplusHex }} className="text-white">
      <SiCplusplus />
      {children}
    </LabelBase>
  );
}

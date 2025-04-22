import { SiPython, SiPythonHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function Python({ children }: PropsWithChildren) {
  return (
    <LabelBase style={{ background: SiPythonHex }} className="text-black">
      <SiPython />
      {children}
    </LabelBase>
  );
}

import { SiSharp, SiSharpHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function CSharp({ children }: PropsWithChildren) {
  return (
    <LabelBase style={{ background: SiSharpHex }} className="text-white">
      <SiSharp />
      {children}
    </LabelBase>
  );
}

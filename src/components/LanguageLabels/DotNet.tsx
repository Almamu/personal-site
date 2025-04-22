import { SiDotnet, SiDotnetHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function DotNet({ children }: PropsWithChildren) {
  return (
    <LabelBase style={{ background: SiDotnetHex }} className="text-white">
      <SiDotnet />
      {children}
    </LabelBase>
  );
}

import { SiLinux, SiLinuxHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function Linux({ children }: PropsWithChildren) {
  return (
    <LabelBase style={{ background: SiLinuxHex }} className="text-black">
      <SiLinux />
      {children}
    </LabelBase>
  );
}

import { SiLaravel, SiLaravelHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function Laravel({ children }: PropsWithChildren) {
  return (
    <LabelBase style={{ background: SiLaravelHex }} className="text-white">
      <SiLaravel />
      {children}
    </LabelBase>
  );
}

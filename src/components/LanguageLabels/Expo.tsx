import { SiExpo, SiExpoHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function Expo({ children }: PropsWithChildren) {
  return (
    <LabelBase style={{ background: SiExpoHex }} className="text-white">
      <SiExpo />
      {children}
    </LabelBase>
  );
}

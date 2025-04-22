import { SiNodedotjs, SiNodedotjsHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function NodeJS({ children }: PropsWithChildren) {
  return (
    <LabelBase style={{ background: SiNodedotjsHex }} className="text-black">
      <SiNodedotjs />
      {children}
    </LabelBase>
  );
}

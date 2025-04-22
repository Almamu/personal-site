import { SiNextdotjs, SiNextdotjsHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function NextJS({ children }: PropsWithChildren) {
  return (
    <LabelBase style={{ background: SiNextdotjsHex }} className="text-white">
      <SiNextdotjs />
      {children}
    </LabelBase>
  );
}

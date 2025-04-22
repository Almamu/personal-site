import { SiReact, SiReactHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function React({ children }: PropsWithChildren) {
  return (
    <LabelBase style={{ background: SiReactHex }} className="text-black">
      <SiReact />
      {children}
    </LabelBase>
  );
}

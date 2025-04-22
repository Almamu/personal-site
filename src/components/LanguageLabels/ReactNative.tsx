import { SiReact, SiReactHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function ReactNative({ children }: PropsWithChildren) {
  return (
    <LabelBase style={{ background: SiReactHex }} className="text-black">
      <SiReact />
      {children}
    </LabelBase>
  );
}

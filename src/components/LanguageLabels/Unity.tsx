import { SiUnity, SiUnityHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function Unity({ children }: PropsWithChildren) {
  return (
    <LabelBase style={{ background: SiUnityHex }} className="text-black">
      <SiUnity />
      {children}
    </LabelBase>
  );
}

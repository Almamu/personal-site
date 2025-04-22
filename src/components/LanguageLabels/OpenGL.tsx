import { SiOpengl, SiOpenglHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function OpenGL({ children }: PropsWithChildren) {
  return (
    <LabelBase
      style={{
        background: SiOpenglHex,
      }}
      className="text-black"
    >
      <SiOpengl />
      {children}
    </LabelBase>
  );
}

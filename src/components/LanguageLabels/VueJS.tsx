import { SiVuedotjs } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function VueJS({ children }: PropsWithChildren) {
  return (
    <LabelBase
      style={{
        backgroundImage: "linear-gradient(315deg,#42d392 25%,#647eff)",
      }}
      className="text-black"
    >
      <SiVuedotjs />
      {children}
    </LabelBase>
  );
}

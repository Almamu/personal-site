import { SiAngular } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function Angular({ children }: PropsWithChildren) {
  return (
    <LabelBase
      style={{
        backgroundImage:
          "linear-gradient(120deg, #ed0100 0%, #e449b4 25%, #ae3bfc 50%, #7f15fd 100%)",
      }}
      className="text-white"
    >
      <SiAngular />
      {children}
    </LabelBase>
  );
}

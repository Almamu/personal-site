import { SiGit, SiGitHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function Git({ children }: PropsWithChildren) {
  return (
    <LabelBase style={{ background: SiGitHex }} className="text-white">
      <SiGit />
      {children}
    </LabelBase>
  );
}

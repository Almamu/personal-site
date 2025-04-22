import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function Other({ children }: PropsWithChildren) {
  return <LabelBase className="bg-gray-700/50">{children}</LabelBase>;
}

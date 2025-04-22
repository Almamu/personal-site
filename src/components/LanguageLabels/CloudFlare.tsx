import { SiCloudflare, SiCloudflareHex } from "@icons-pack/react-simple-icons";
import { PropsWithChildren } from "react";

import { LabelBase } from "./LabelBase.tsx";

export function CloudFlare({ children }: PropsWithChildren) {
  return (
    <LabelBase
      style={{
        background: SiCloudflareHex,
      }}
      className="text-black"
    >
      <SiCloudflare />
      {children}
    </LabelBase>
  );
}

import { PropsWithChildren } from "react";

export function NextJS({ children }: PropsWithChildren) {
  return (
    <li className="inline px-2 py-1 bg-white backdrop-blur-sm rounded text-sm text-black">
      {children}
    </li>
  );
}

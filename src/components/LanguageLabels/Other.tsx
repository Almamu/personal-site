import { PropsWithChildren } from "react";

export function Other({ children }: PropsWithChildren) {
  return (
    <li className="inline px-2 py-1 bg-gray-700/50 backdrop-blur-sm rounded text-sm">
      {children}
    </li>
  );
}

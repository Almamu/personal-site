import { PropsWithChildren } from "react";

export function Angular({ children }: PropsWithChildren) {
  return (
    <li
      style={{
        backgroundImage:
          "linear-gradient(120deg, #ed0100 0%, #e449b4 25%, #ae3bfc 50%, #7f15fd 100%)",
      }}
      className="inline px-2 py-1 backdrop-blur-sm rounded text-sm text-white"
    >
      {children}
    </li>
  );
}

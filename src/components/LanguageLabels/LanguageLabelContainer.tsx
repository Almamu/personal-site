import { PropsWithChildren } from "react";

export function LanguageLabelContainer({ children }: PropsWithChildren) {
  return <ul className="list-none flex gap-2 text-gray-300">{children}</ul>;
}

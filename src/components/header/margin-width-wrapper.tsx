import { ReactNode } from "react";

export default function MarginWidthWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="flex flex-col w-full  sm:border-r sm:border-zinc-700 min-h-screen"
      id="marshood 2"
    >
      {children}
    </div>
  );
}

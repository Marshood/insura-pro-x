import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex flex-col py-8 px-4 space-y-2 bg-white flex-grow w-full">
      {children}
    </div>
  );
}

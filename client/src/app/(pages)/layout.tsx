import { ReactNode } from "react";

import Providers from "@/app/providers";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div className="grid grid-cols-2 w-full h-screen">
        <div className="bg-primary"></div>
        <div className="flex h-full w-full items-center justify-center font-sans">{children}</div>
      </div>
    </Providers>
  );
}

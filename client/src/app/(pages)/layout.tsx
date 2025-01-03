import { ReactNode } from "react";

import Providers from "@/app/providers";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div className="w-full h-screen bg-zinc-200">{children}</div>
    </Providers>
  );
}

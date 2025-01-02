import { ReactNode } from "react";

import Providers from "@/app/providers";

export default function PageLayout({ children }: { children: ReactNode }) {
  return <Providers>{children}</Providers>;
}

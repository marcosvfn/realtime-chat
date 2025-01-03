import { Toaster } from "@/components/ui/toaster";

import TanstackQueryProvider from "@/app/providers/tanstack-query.provider";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <TanstackQueryProvider>
      {children}
      <Toaster />
    </TanstackQueryProvider>
  );
}

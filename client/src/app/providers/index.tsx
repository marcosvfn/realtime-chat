import TanstackQueryProvider from "@/app/providers/tanstack-query.provider";

import { Toaster } from "@/shared/components/ui/toaster";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <TanstackQueryProvider>
      {children}
      <Toaster />
    </TanstackQueryProvider>
  );
}

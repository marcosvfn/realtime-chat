import AuthProvider from "@/app/providers/auth.provider";
import TanstackQueryProvider from "@/app/providers/tanstack-query.provider";
import WebSocketProvider from "@/app/providers/websocket.provider";

import { Toaster } from "@/shared/components/ui/toaster";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthProvider>
      <TanstackQueryProvider>
        <WebSocketProvider>
          {children}
          <Toaster />
        </WebSocketProvider>
      </TanstackQueryProvider>
    </AuthProvider>
  );
}

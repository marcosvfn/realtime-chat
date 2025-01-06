"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

type Connection = WebSocket | null;

export type WebSocketContextType = {
  connection: Connection;
  setConnection: Dispatch<SetStateAction<Connection>>;
};

type WebSocketProviderProps = {
  children: ReactNode;
};

export const WebSocketContext = createContext<WebSocketContextType>({
  connection: null,
  setConnection: () => {},
});

export default function WebSocketProvider({ children }: WebSocketProviderProps) {
  const [connection, setConnection] = useState<Connection>(null);

  return (
    <WebSocketContext.Provider value={{ connection, setConnection }}>
      {children}
    </WebSocketContext.Provider>
  );
}

export function useWebSocket() {
  const { connection, setConnection } = useContext(WebSocketContext);

  return { connection, setConnection };
}

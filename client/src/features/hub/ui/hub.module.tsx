"use client";

import axios from "axios";

import { useWebSocket } from "@/app/providers/websocket.provider";

import { HubViewModel } from "@/features/hub";

import { RoomService } from "@/entities/rooms";

import { WS_URL } from "@/shared/constants/env";
import { HttpClient } from "@/shared/http";

export default function HubModule() {
  const webSocket = useWebSocket();

  const httpClient = new HttpClient();
  const wsHttpClient = new HttpClient(axios, WS_URL);
  const roomService = new RoomService(httpClient, wsHttpClient);

  return <HubViewModel roomService={roomService} webSocketCtx={webSocket} />;
}

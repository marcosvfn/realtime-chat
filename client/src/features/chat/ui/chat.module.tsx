"use client";

import { ChatModuleProps, ChatViewModel } from "@/features/chat";

import { ChatService } from "@/entities/chat";

import { HttpClient } from "@/shared/http";

export default function ChatModule({ roomId }: ChatModuleProps) {
  const httpClient = new HttpClient();
  const chatService = new ChatService(httpClient);

  return <ChatViewModel chatService={chatService} roomId={roomId} />;
}

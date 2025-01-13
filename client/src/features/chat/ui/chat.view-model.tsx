"use client";

import { ChatModelProps, ChatView, useChatModel } from "@/features/chat";

export default function ChatViewModel(modelProps: ChatModelProps) {
  const methods = useChatModel(modelProps);
  return <ChatView {...methods} />;
}

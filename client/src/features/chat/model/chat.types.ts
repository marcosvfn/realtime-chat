import { useChatModel } from "@/features/chat/model/chat.model";

import { IChatService } from "@/entities/chat";

export type ChatMessageType = {
  content: string;
  clientId: string;
  username: string;
  roomId: string;
  type: "received" | "sent";
};

export type ChatModelMethods = ReturnType<typeof useChatModel>;

export type ChatModelProps = {
  chatService: IChatService;
  roomId: string;
};

export type ChatModuleProps = {
  roomId: string;
};

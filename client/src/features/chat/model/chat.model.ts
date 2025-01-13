"use client";

import { useQuery } from "@tanstack/react-query";
import autosize from "autosize";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { queryClient } from "@/app/providers/tanstack-query.provider";
import { useWebSocket } from "@/app/providers/websocket.provider";

import { ChatMessageType, ChatModelProps, USER_CHAT_EVENTS } from "@/features/chat";

import { ChatClientsDto } from "@/entities/chat";
import { UserDto } from "@/entities/user";

export function useChatModel({ chatService, roomId }: ChatModelProps) {
  const router = useRouter();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { connection } = useWebSocket();
  const userInfo = localStorage.getItem("user");

  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  const { data: users } = useQuery<ChatClientsDto>({
    queryKey: ["users"],
    queryFn: () => {
      if (!connection) return [];
      return chatService.getClients(roomId);
    },
  });

  const sendMessage = () => {
    if (!connection) return router.push("/");

    const inputMessage = textAreaRef.current?.value;
    if (!inputMessage) return;

    connection.send(inputMessage);
    textAreaRef.current!.value = "";
  };

  const onMessage = (message: MessageEvent<any>) => {
    if (!userInfo) return;

    const m: ChatMessageType = JSON.parse(message.data);

    if (USER_CHAT_EVENTS.includes(m.content)) {
      setMessages((prev) => [...prev, m]);
      return queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    }

    const user = JSON.parse(userInfo) as UserDto;

    const newMessage: ChatMessageType = {
      ...m,
      type: m.username === user.username ? "sent" : "received",
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  useEffect(() => {
    if (textAreaRef.current) {
      autosize(textAreaRef.current);
    }

    if (!connection) return router.push("/");

    connection.onmessage = onMessage;
  }, []);

  return {
    messages,
    sendMessage,
    textAreaRef,
  };
}

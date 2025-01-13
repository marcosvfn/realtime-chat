"use client";

import { v4 as uuidv4 } from "uuid";

import { ChatMessage, ChatModelMethods } from "@/features/chat";

import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { Textarea } from "@/shared/components/ui/textarea";

export default function ChatView(methods: ChatModelMethods) {
  const { messages, sendMessage, textAreaRef } = methods;

  return (
    <Card className="p-6 w-full md:max-w-lg max-h-[80vh] flex flex-col h-full">
      <div className="flex flex-col gap-2">
        {messages.map((message) => (
          <ChatMessage key={message.clientId + uuidv4()} message={message} />
        ))}
      </div>

      <div className="mt-auto flex gap-2">
        <Textarea className="max-h-32" ref={textAreaRef} />
        <Button className="h-full" onClick={sendMessage}>
          Enviar
        </Button>
      </div>
    </Card>
  );
}

"use client";

import { ChatMessageType } from "@/features/chat";

import { cn } from "@/shared/lib/utils/utils";

export default function ChatMessage({ message }: { message: ChatMessageType }) {
  const { type, content, username } = message;

  return (
    <div
      className={cn("flex flex-col gap-1", {
        ["ml-auto "]: type === "sent",
      })}
    >
      <span
        className={cn("text-[0.75rem] font-semibold text-zinc-700", {
          ["hidden"]: type === "sent",
        })}
      >
        {username}
      </span>
      <div
        className={cn("text-sm font-sans w-fit p-2 rounded-md ", {
          ["bg-zinc-200"]: type === "received",
          ["bg-primary text-white"]: type === "sent",
        })}
      >
        {content}
      </div>
    </div>
  );
}

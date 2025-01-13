import { ChatModule } from "@/features/chat";

interface ChatPageParams {
  params: {
    roomId: string;
  };
}

export default function ChatPage({ params }: ChatPageParams) {
  const { roomId } = params;

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <ChatModule roomId={roomId} />
    </main>
  );
}

import { RoomCardProps } from "@/features/hub/model/hub.types";

import { Button } from "@/shared/components/ui/button";

export default function RoomCard({ room, joinRoom }: RoomCardProps) {
  return (
    <div className="w-full border-2 rounded-md h-24 flex items-center p-2 min-w-[300px]">
      <div className="flex flex-col">
        <span className="text-muted-foreground text-sm font-sans">Room</span>
        <span className="tracking-tight font-sans font-semibold text-zinc-800 text-xl">
          {room.name}
        </span>
      </div>
      <Button className="ml-auto w-16 font-sans" onClick={() => joinRoom(room.id)}>
        Join
      </Button>
    </div>
  );
}

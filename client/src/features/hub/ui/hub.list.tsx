import { Else, If, Then } from "react-if";

import { HubListProps, RoomCard } from "@/features/hub";

export default function HubList(props: HubListProps) {
  const { rooms, joinRoom } = props;

  return (
    <If condition={rooms && rooms?.length > 0}>
      <Then>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center w-full">
          {rooms && rooms.map((room) => <RoomCard key={room.id} room={room} joinRoom={joinRoom} />)}
        </div>
      </Then>
      <Else>
        <div className="flex flex-col gap-2 items-start justify-start font-sans text-muted-foreground">
          <div>No rooms found.</div>
        </div>
      </Else>
    </If>
  );
}

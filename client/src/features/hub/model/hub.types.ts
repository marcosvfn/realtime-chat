import { z } from "zod";

import { WebSocketContextType } from "@/app/providers/websocket.provider";

import { CreateRoomSchema } from "@/features/hub";
import { useHubModel } from "@/features/hub/model/hub.model";

import { IRoomService, RoomDto } from "@/entities/rooms";

export type CreateRoomFormSchema = z.infer<typeof CreateRoomSchema>;
export type RoomList = Array<RoomDto>;
export type HubModelMethods = ReturnType<typeof useHubModel>;
export type HubModelProps = {
  roomService: IRoomService;
  webSocketCtx: WebSocketContextType;
};

export type CreateRoomFormViewProps = Pick<HubModelMethods, "isPending" | "form" | "onCreateRoom">;
export type HubListProps = Pick<HubModelMethods, "rooms" | "joinRoom">;
export type RoomCardProps = { room: RoomDto; joinRoom: HubModelMethods["joinRoom"] };

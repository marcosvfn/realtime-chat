import { z } from "zod";

import {
  CreateRoomDtoRequestDefinition,
  CreateRoomDtoResponseDefinition,
  RoomDtoDefinition,
} from "@/entities/rooms";

export type RoomDto = z.infer<typeof RoomDtoDefinition>;
export type CreateRoomDtoRequest = z.infer<typeof CreateRoomDtoRequestDefinition>;
export type CreateRoomDtoResponse = z.infer<typeof CreateRoomDtoResponseDefinition>;

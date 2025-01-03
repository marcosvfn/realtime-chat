import { z } from "zod";

export const RoomDtoDefinition = z.object({
  id: z.string(),
  name: z.string(),
});

export const CreateRoomDtoRequestDefinition = z.object({
  id: z.string(),
  name: z.string(),
});

export const CreateRoomDtoResponseDefinition = z.object({
  message: z.string(),
});

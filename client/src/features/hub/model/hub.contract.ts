import { z } from "zod";

export const CreateRoomSchema = z.object({
  name: z.string().min(1, { message: "Room name must be at least 1 character" }),
});

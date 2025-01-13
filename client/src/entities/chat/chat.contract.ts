import { z } from "zod";

export const ChatClientsSchema = z.array(
  z.object({
    id: z.string(),
    username: z.string(),
  })
);

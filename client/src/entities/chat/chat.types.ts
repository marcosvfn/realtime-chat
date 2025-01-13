import { z } from "zod";

import { ChatClientsSchema } from "@/entities/chat";

export type ChatClientsDto = z.infer<typeof ChatClientsSchema>;

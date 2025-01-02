import { z } from "zod";

import { RegisterSchema } from "@/features/register";

export type RegisterFormSchema = z.infer<typeof RegisterSchema>;

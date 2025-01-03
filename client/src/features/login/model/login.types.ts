import { z } from "zod";

import { LoginSchema, useLoginModel } from "@/features/login";

import { IUserService } from "@/entities/user";

export type LoginFormSchema = z.infer<typeof LoginSchema>;
export type LoginModelMethods = ReturnType<typeof useLoginModel>;
export type LoginModelProps = {
  userService: IUserService;
};

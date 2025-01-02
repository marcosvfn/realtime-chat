import { z } from "zod";

import { RegisterSchema, useRegisterModel } from "@/features/register";

import { IUserService } from "@/entities/user";

export type RegisterFormSchema = z.infer<typeof RegisterSchema>;
export type RegisterModelMethods = ReturnType<typeof useRegisterModel>;
export type RegisterModelProps = {
  userService: IUserService;
};

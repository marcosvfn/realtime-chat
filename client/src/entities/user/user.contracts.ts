import { z } from "zod";

export const UserDtoDefinition = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

export const UserRegisterRequestDtoDefinition = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

export const UserRegisterResponseDtoDefinition = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
});

export const UserLoginRequestDtoDefinition = z.object({
  email: z.string(),
  password: z.string(),
});

export const UserLoginResponseDtoDefinition = z.object({
  id: z.string(),
  username: z.string(),
});

export const UserLogoutResponseDtoDefinition = z.object({
  message: z.string(),
});

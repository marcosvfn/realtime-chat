import { z } from "zod";

import {
  UserDtoDefinition,
  UserLoginRequestDtoDefinition,
  UserLoginResponseDtoDefinition,
  UserLogoutResponseDtoDefinition,
  UserRegisterRequestDtoDefinition,
  UserRegisterResponseDtoDefinition,
} from "@/entities/user";

export type UserDto = z.infer<typeof UserDtoDefinition>;
export type UserRegisterRequestDto = z.infer<typeof UserRegisterRequestDtoDefinition>;
export type UserRegisterResponseDto = z.infer<typeof UserRegisterResponseDtoDefinition>;
export type UserLoginRequestDto = z.infer<typeof UserLoginRequestDtoDefinition>;
export type UserLoginResponseDto = z.infer<typeof UserLoginResponseDtoDefinition>;
export type UserLogoutResponseDto = z.infer<typeof UserLogoutResponseDtoDefinition>;

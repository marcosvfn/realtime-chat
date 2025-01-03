"use client";

import { RegisterView, useRegisterModel } from "@/features/register";

import { UserService } from "@/entities/user";

import { HttpClient } from "@/shared/http";

export default function RegisterViewModel() {
  const httpClient = new HttpClient();
  const userService = new UserService(httpClient);
  const methods = useRegisterModel({ userService });

  return <RegisterView {...methods} />;
}

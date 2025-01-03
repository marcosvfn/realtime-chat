"use client";

import RegisterViewModel from "@/features/register/ui/register.view-model";

import { UserService } from "@/entities/user";

import { HttpClient } from "@/shared/http";

export default function RegisterModule() {
  const httpClient = new HttpClient();
  const userService = new UserService(httpClient);

  return <RegisterViewModel userService={userService} />;
}

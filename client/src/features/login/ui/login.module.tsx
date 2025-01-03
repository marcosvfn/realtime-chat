"use client";

import { LoginViewModel } from "@/features/login";

import { UserService } from "@/entities/user";

import { HttpClient } from "@/shared/http";

export default function LoginModule() {
  const httpClient = new HttpClient();
  const userService = new UserService(httpClient);

  return <LoginViewModel userService={userService} />;
}

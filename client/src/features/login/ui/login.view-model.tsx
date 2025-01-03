"use client";

import { LoginModelProps, LoginView, useLoginModel } from "@/features/login";

export default function LoginViewModel(props: LoginModelProps) {
  const methods = useLoginModel(props);

  return <LoginView {...methods} />;
}

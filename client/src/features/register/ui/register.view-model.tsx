"use client";

import { RegisterModelProps, RegisterView, useRegisterModel } from "@/features/register";

export default function RegisterViewModel(props: RegisterModelProps) {
  const methods = useRegisterModel(props);

  return <RegisterView {...methods} />;
}

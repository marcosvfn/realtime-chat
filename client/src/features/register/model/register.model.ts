"use client";

import { useMutation } from "@tanstack/react-query";

import { RegisterModelProps } from "@/features/register";

export function useRegisterModel({ userService }: RegisterModelProps) {
  const { mutate: register, isPending } = useMutation({
    mutationFn: userService.register,
  });

  return {
    register,
    isPending,
  };
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultError, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { LoginFormSchema, LoginModelProps, LoginSchema } from "@/features/login";

import { UserLoginRequestDto, UserLoginResponseDto } from "@/entities/user";

import { useToast } from "@/shared/hooks/use-toast";

export function useLoginModel({ userService }: LoginModelProps) {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: login, isPending } = useMutation<
    UserLoginResponseDto,
    DefaultError,
    UserLoginRequestDto
  >({
    mutationFn: (data) => userService.login(data),
    onSuccess: () => {
      router.push("/rooms");
      toast({
        title: "User logged in successfully.",
        description: "You are ready to chat with other users.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error logging in user.",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: LoginFormSchema) => {
    login(data);
  };

  return {
    isPending,
    form,
    onSubmit,
  };
}

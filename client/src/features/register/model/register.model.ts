"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultError, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { RegisterFormSchema, RegisterModelProps, RegisterSchema } from "@/features/register";

import { UserRegisterRequestDto, UserRegisterResponseDto } from "@/entities/user";

import { useToast } from "@/shared/hooks/use-toast";

export function useRegisterModel({ userService }: RegisterModelProps) {
  const { toast } = useToast();

  const form = useForm<RegisterFormSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: RegisterFormSchema) => {
    register(data);
  };

  const { mutate: register, isPending } = useMutation<
    UserRegisterResponseDto,
    DefaultError,
    UserRegisterRequestDto
  >({
    mutationFn: (data) => userService.register(data),
    onSuccess: () => {
      toast({
        title: "User registered successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error registering user.",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return {
    isPending,
    form,
    onSubmit,
  };
}

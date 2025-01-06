"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultError, useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import { queryClient } from "@/app/providers/tanstack-query.provider";
import { useWebSocket } from "@/app/providers/websocket.provider";

import { CreateRoomFormSchema, CreateRoomSchema, HubModelProps, RoomList } from "@/features/hub";

import { CreateRoomDtoRequest, CreateRoomDtoResponse } from "@/entities/rooms";
import { UserDto } from "@/entities/user";

import { WS_URL } from "@/shared/constants/env";
import { useToast } from "@/shared/hooks/use-toast";

export function useHubModel({ roomService }: HubModelProps) {
  const { toast } = useToast();
  const { setConnection } = useWebSocket();
  const router = useRouter();
  const cookies = parseCookies();
  const { username, id: userId } = JSON.parse(cookies.user) as Partial<UserDto>;

  const form = useForm<CreateRoomFormSchema>({
    resolver: zodResolver(CreateRoomSchema),
    defaultValues: {
      name: "",
    },
  });

  const { mutate: createRoom, isPending } = useMutation<
    CreateRoomDtoResponse,
    DefaultError,
    CreateRoomDtoRequest
  >({
    mutationFn: (data) => roomService.createRoom(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });

      toast({
        title: "Room created successfully.",
        description: "You can now join the room.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error creating room.",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onCreateRoom = (data: CreateRoomFormSchema) => {
    createRoom({ id: uuidv4(), name: data.name });
  };

  const { data: rooms } = useQuery<RoomList>({
    queryKey: ["rooms"],
    queryFn: () => roomService.getRooms(),
  });

  const joinRoom = (roomId: string) => {
    const wsConnection = new WebSocket(
      WS_URL + `/ws/join-room/${roomId}?userId=${userId}&username=${username}`
    );

    if (wsConnection.OPEN) {
      setConnection(wsConnection);
      router.push("/chat");
    }
  };

  return {
    onCreateRoom,
    isPending,
    rooms,
    form,
    joinRoom,
  };
}

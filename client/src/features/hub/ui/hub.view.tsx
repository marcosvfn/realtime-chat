"use client";

import Image from "next/image";

import logo from "public/assets/logo-pri-black.svg";

import { CreateRoomForm, HubList, HubModelMethods } from "@/features/hub";

import { Card, CardTitle } from "@/shared/components/ui/card";

export default function HubView(methods: HubModelMethods) {
  const { rooms, joinRoom, ...formMethods } = methods;

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full min-w-md">
      <Card className="p-6 w-full">
        <Image priority src={logo} alt="logo" width={100} height={100} className="mx-auto" />
        <CardTitle className="mb-3 text-muted-foreground">New room</CardTitle>
        <CreateRoomForm {...formMethods} />
      </Card>
      <Card className="p-6 w-full">
        <CardTitle className="mb-3 text-muted-foreground">Active rooms</CardTitle>
        <HubList rooms={rooms} joinRoom={joinRoom} />
      </Card>
    </div>
  );
}

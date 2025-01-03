"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Case, Switch } from "react-if";

import logo from "public/assets/logo-pri-black.svg";

import { useLandingPage } from "@/app/(pages)/(landing)/page.hook";

import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";

const LoginForm = dynamic(() => import("@/features/login").then((mod) => mod.LoginModule));
const RegisterForm = dynamic(() => import("@/features/register").then((mod) => mod.RegisterModule));

export default function LandingPageClient() {
  const { toggleMode, mode, switchModeLabel } = useLandingPage();

  return (
    <div className="flex flex-col w-full items-center justify-center h-full">
      <Card className="w-full max-w-xs sm:max-w-sm md:max-w-lg">
        <CardContent className="flex flex-col items-center justify-center">
          <Image priority src={logo} alt="logo" width={100} height={100} className="my-5" />

          <Switch>
            <Case condition={mode === "login"}>
              <LoginForm />
            </Case>
            <Case condition={mode === "register"}>
              <RegisterForm />
            </Case>
          </Switch>

          <Button
            variant={"ghost"}
            onClick={toggleMode}
            className="text-muted-foreground cursor-pointer hover:bg-transparent py-0"
          >
            {switchModeLabel}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

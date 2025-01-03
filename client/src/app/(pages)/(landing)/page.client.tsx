"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Case, Switch } from "react-if";

import { Button } from "@/shared/components/ui/button";

const LoginForm = dynamic(() => import("@/features/login").then((mod) => mod.LoginModule));
const RegisterForm = dynamic(() => import("@/features/register").then((mod) => mod.RegisterModule));

export default function LandingPageClient() {
  const [mode, setMode] = useState<"login" | "register">("login");

  const toggleMode = () => {
    setMode(mode === "login" ? "register" : "login");
  };

  const switchModeLabel =
    mode === "login"
      ? "Don't have an account? Register here"
      : "Already have an account? Login here";

  return (
    <div className="flex flex-col w-full items-center justify-center">
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
        className="text-muted-foreground cursor-pointer hover:bg-transparent"
      >
        {switchModeLabel}
      </Button>
    </div>
  );
}

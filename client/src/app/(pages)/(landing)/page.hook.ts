"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type LandingPageMode = "login" | "register";

export function useLandingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialMode = searchParams.get("state") as LandingPageMode;
  const [mode, setMode] = useState<LandingPageMode>(initialMode ?? "login");

  const toggleMode = () => {
    const nextMode = mode === "login" ? "register" : "login";
    setMode(nextMode);
    router.replace("?state=" + nextMode);
  };

  const switchModeLabel =
    mode === "login"
      ? "Don't have an account? Register here"
      : "Already have an account? Login here";

  useEffect(() => {
    const updatedMode = searchParams.get("state") as LandingPageMode;

    if (updatedMode) {
      setMode(updatedMode);
    }
  }, [searchParams]);

  return {
    toggleMode,
    mode,
    switchModeLabel,
  };
}

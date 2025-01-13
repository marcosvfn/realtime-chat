"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { UserDto } from "@/entities/user";

type AuthContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserDto;
  setUser: React.Dispatch<React.SetStateAction<UserDto>>;
};

export const AuthContext = React.createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: {} as UserDto,
  setUser: () => {},
});

export default function AuthProvider({ children }: React.PropsWithChildren<{}>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({} as UserDto);

  const router = useRouter();

  useEffect(() => {
    const userInfo = localStorage.getItem("user");

    if (!userInfo) {
      if (window.location.pathname !== "/register") {
        router.push("/");
        return;
      }
    } else {
      setUser(JSON.parse(userInfo));
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

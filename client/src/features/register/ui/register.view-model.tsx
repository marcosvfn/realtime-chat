"use client";

import { RegisterView } from "@/features/register";

export default function RegisterViewModel() {
  // const httpClient = HttpClient.create();
  // const userService = new UserService(httpClient);
  // const methods = useRegisterModel({ userService });

  return (
    <div className="bg-white text-red-700 text-5xl">
      <RegisterView />
    </div>
  );
}

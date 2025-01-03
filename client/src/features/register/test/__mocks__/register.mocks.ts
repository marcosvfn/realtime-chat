import { IUserService } from "@/entities/user";

export const MockUserServiceSuccess: IUserService = {
  register: async (_) => {
    return new Promise((resolve) => resolve({ id: "1", username: "test", email: "test@test.com" }));
  },
  login: async (_) => {
    return new Promise((resolve) => resolve({ id: "1", username: "test" }));
  },
  logout: async () => {
    return new Promise((resolve) => resolve({ message: "Logged out successfully" }));
  },
};

export const MockUserServiceFailure: IUserService = {
  register: async (_) => {
    return new Promise((_, reject) => reject(new Error("Error registering user")));
  },
  login: async (_) => {
    return new Promise((_, reject) => reject(new Error("Error logging in user")));
  },
  logout: async () => {
    return new Promise((_, reject) => reject(new Error("Error logging out user")));
  },
};

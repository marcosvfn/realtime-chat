import {
  UserLoginRequestDto,
  UserLoginResponseDto,
  UserLogoutResponseDto,
  UserRegisterRequestDto,
  UserRegisterResponseDto,
} from "@/entities/user";

import { HttpMethod, IHttpClient } from "@/shared/http";

export interface IUserService {
  register: (user: UserRegisterRequestDto) => Promise<UserRegisterResponseDto>;
  login: (user: UserLoginRequestDto) => Promise<UserLoginResponseDto>;
  logout: () => Promise<UserLogoutResponseDto>;
}

export class UserService implements IUserService {
  constructor(private readonly httpClient: IHttpClient) {}

  async register(user: UserRegisterRequestDto): Promise<UserRegisterResponseDto> {
    return this.httpClient.sendRequest<UserRegisterResponseDto, UserRegisterRequestDto>({
      endpoint: "/signup",
      method: HttpMethod.POST,
      body: user,
    });
  }

  async login(user: UserLoginRequestDto): Promise<UserLoginResponseDto> {
    return this.httpClient.sendRequest<UserLoginResponseDto, UserLoginRequestDto>({
      endpoint: "/login",
      method: HttpMethod.POST,
      body: user,
    });
  }

  async logout(): Promise<UserLogoutResponseDto> {
    return this.httpClient.sendRequest<UserLogoutResponseDto>({
      endpoint: "/logout",
      method: HttpMethod.GET,
    });
  }
}

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

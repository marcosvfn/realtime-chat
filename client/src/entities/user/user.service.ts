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
    return this.httpClient.sendRequest<UserRegisterResponseDto>({
      endpoint: "/singup",
      method: HttpMethod.POST,
      body: user,
    });
  }

  async login(user: UserLoginRequestDto): Promise<UserLoginResponseDto> {
    return this.httpClient.sendRequest<UserLoginResponseDto>({
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

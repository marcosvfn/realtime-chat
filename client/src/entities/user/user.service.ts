import {
  UserLoginRequestDto,
  UserLoginResponseDto,
  UserLogoutResponseDto,
  UserRegisterRequestDto,
  UserRegisterResponseDto,
} from "@/entities/user";

import { IHttpClient } from "@/shared/http";

export interface IUserService {
  register: (user: UserRegisterRequestDto) => Promise<UserRegisterResponseDto>;
  login: (user: UserLoginRequestDto) => Promise<UserLoginResponseDto>;
  logout: () => Promise<UserLogoutResponseDto>;
}

export class UserService implements IUserService {
  constructor(http: IHttpClient) {}

  async register(user: UserRegisterRequestDto): Promise<UserRegisterResponseDto> {
    return {} as UserRegisterResponseDto;
  }

  async login(user: UserLoginRequestDto): Promise<UserLoginResponseDto> {
    return {} as UserLoginResponseDto;
  }

  async logout(): Promise<UserLogoutResponseDto> {
    return {} as UserLogoutResponseDto;
  }
}

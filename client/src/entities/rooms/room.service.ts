import { CreateRoomDtoRequest, CreateRoomDtoResponse, RoomDto } from "@/entities/rooms";

import { HttpMethod, IHttpClient } from "@/shared/http";

export interface IRoomService {
  createRoom(data: CreateRoomDtoRequest): Promise<CreateRoomDtoResponse>;
  getRooms(): Promise<Array<RoomDto>>;
}

export class RoomService implements IRoomService {
  constructor(
    private httpClient: IHttpClient,
    private wsClient: IHttpClient
  ) {}

  async createRoom(body: CreateRoomDtoRequest): Promise<CreateRoomDtoResponse> {
    return this.httpClient.sendRequest({
      endpoint: "/ws/create-room",
      method: HttpMethod.POST,
      body,
    });
  }

  async getRooms(): Promise<Array<RoomDto>> {
    return this.httpClient.sendRequest<Array<RoomDto>>({
      endpoint: "/ws/get-rooms",
      method: HttpMethod.GET,
    });
  }

  async joinRoom(roomId: string): Promise<void> {
    return this.wsClient.sendRequest({
      endpoint: `/ws/join-room/${roomId}`,
      method: HttpMethod.GET,
    });
  }
}

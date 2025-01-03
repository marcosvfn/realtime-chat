import { CreateRoomDtoRequest, CreateRoomDtoResponse, RoomDto } from "@/entities/rooms";

import { HttpMethod, IHttpClient } from "@/shared/http";

export interface IRoomService {
  createRoom(data: CreateRoomDtoRequest): Promise<CreateRoomDtoResponse>;
  getRooms(): Promise<Array<RoomDto>>;
}

export class RoomService implements IRoomService {
  constructor(private httpClient: IHttpClient) {}

  async createRoom(body: CreateRoomDtoRequest): Promise<CreateRoomDtoResponse> {
    return this.httpClient.sendRequest({
      endpoint: "/ws/rooms",
      method: HttpMethod.POST,
      body,
    });
  }

  async getRooms(): Promise<Array<RoomDto>> {
    return this.httpClient.sendRequest<Array<RoomDto>>({
      endpoint: "/ws/rooms",
      method: HttpMethod.GET,
    });
  }
}

import { ChatClientsDto } from "@/entities/chat";

import { HttpMethod, IHttpClient } from "@/shared/http";

export interface IChatService {
  getClients: (roomId: string) => Promise<ChatClientsDto>;
}

export class ChatService {
  constructor(private readonly httpClient: IHttpClient) {}

  async getClients(roomId: string): Promise<ChatClientsDto> {
    return this.httpClient.sendRequest<ChatClientsDto>({
      endpoint: `/ws/get-clients/${roomId}`,
      method: HttpMethod.GET,
    });
  }
}

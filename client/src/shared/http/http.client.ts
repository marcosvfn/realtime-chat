import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

import { HttpRequest, IHttpClient } from "@/shared/http/http.contract";

export class HttpClient implements IHttpClient {
  constructor(
    private apiInstance: AxiosInstance = axios,
    private baseUrl: string = "http://localhost:8080"
  ) {}

  async sendRequest<TResponse, TBody>(props: HttpRequest<TBody>): Promise<TResponse> {
    const { endpoint, method, body, headers } = props;
    const requestConfig: AxiosRequestConfig = {
      method,
      url: this.baseUrl + endpoint,
      data: body,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    try {
      const { data } = await this.apiInstance.request<TResponse>(requestConfig);
      return data;
    } catch (er) {
      const error = er as AxiosError;
      const status = error.response?.status || 500;
      const message = error.response?.data || error.message;
      throw new Error(`Request failed with status ${status}: ${message}`);
    }
  }
}

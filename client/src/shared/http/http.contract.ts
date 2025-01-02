export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export type HttpRequest<TBody> = {
  endpoint: string;
  method: HttpMethod;
  body?: TBody;
  header?: Record<string, string>;
};

export interface IHttpClient {
  sendRequest: <TResponse, TBody = unknown>(request: HttpRequest<TBody>) => Promise<TResponse>;
}

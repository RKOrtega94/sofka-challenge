import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseInterface } from '../interfaces/response.interface';

/**
 * ApiService
 */
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  #client = inject(HttpClient);

  /**
   * HTTP GET
   *
   * @param path Path to the endpoint
   * @param headers Headers to be sent
   * @param params Query parameters
   * @param requiresToken If the request requires a token or not (default: true)
   * @returns Observable<T>
   */
  protected get<T>(
    path: string,
    {
      headers,
      params,
      requiresToken = true,
    }: {
      headers?: HttpHeaders;
      params?: HttpParams | { [param: string]: string | string[] };
      requiresToken?: boolean;
    }
  ): Observable<ResponseInterface<T>> {
    return this.#client.get<ResponseInterface<T>>(path, {
      headers: this.#getHeaders(requiresToken, headers),
      params,
    });
  }

  /**
   * HTTP POST
   *
   * @param path Path to the endpoint
   * @param body Body to be sent
   * @param headers Headers to be sent
   * @param requiresToken If the request requires a token or not (default: true)
   * @returns Observable<T>
   */
  protected post<T>(
    path: string,
    body: T,
    {
      headers,
      requiresToken = true,
    }: {
      headers?: HttpHeaders;
      requiresToken?: boolean;
    }
  ): Observable<ResponseInterface<T>> {
    return this.#client.post<ResponseInterface<T>>(path, body, {
      headers: this.#getHeaders(requiresToken, headers),
    });
  }

  /**
   * HTTP PUT
   *
   * @param path Path to the endpoint
   * @param body Body to be sent
   * @param headers Headers to be sent
   * @param requiresToken If the request requires a token or not (default: true)
   * @returns Observable<T>
   */
  protected put<T>(
    path: string,
    body: T,
    {
      headers,
      requiresToken = true,
    }: {
      headers?: HttpHeaders;
      requiresToken?: boolean;
    }
  ): Observable<ResponseInterface<T>> {
    return this.#client.put<ResponseInterface<T>>(path, body, {
      headers: this.#getHeaders(requiresToken, headers),
    });
  }

  /**
   * HTTP DELETE
   *
   * @param path Path to the endpoint
   * @param headers Headers to be sent
   * @param requiresToken If the request requires a token or not (default: true)
   * @returns Observable<T>
   */
  protected delete(
    path: string,
    {
      headers,
      requiresToken = true,
    }: {
      headers?: HttpHeaders;
      requiresToken?: boolean;
    }
  ): Observable<ResponseInterface<null>> {
    return this.#client.delete<ResponseInterface<null>>(path, {
      headers: this.#getHeaders(requiresToken, headers),
    });
  }

  #getHeaders(requiresToken: boolean, headers?: HttpHeaders): HttpHeaders {
    const newHeaders = new HttpHeaders({});
    if (requiresToken) {
      if (localStorage.getItem('token') === null) {
        throw new Error('Token not found');
      }
      newHeaders.append('user_id', localStorage.getItem('token')!);
    }

    if (headers) {
      headers.keys().forEach((key) => {
        newHeaders.append(key, headers.get(key)!);
      });
    }

    return newHeaders;
  }
}

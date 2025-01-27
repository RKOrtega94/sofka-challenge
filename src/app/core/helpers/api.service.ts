import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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
  ): Observable<T> {
    return this.#client
      .get<ResponseInterface<T>>(path, {
        headers: this.#getHeaders(requiresToken, headers),
        params,
      })
      .pipe(
        map((response: ResponseInterface<T>) => {
          if (response.data) {
            return response.data;
          } else {
            throw new Error('Error retrieving data');
          }
        }),
        catchError(this.#handleError)
      );
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
    body: any,
    {
      headers,
      requiresToken = true,
    }: {
      headers?: HttpHeaders;
      requiresToken?: boolean;
    }
  ): Observable<T> {
    return this.#client
      .post<ResponseInterface<T>>(path, body, {
        headers: this.#getHeaders(requiresToken, headers),
      })
      .pipe(
        map((response: ResponseInterface<T>) => {
          if (response.data) {
            return response.data;
          } else {
            throw new Error('Error retrieving data');
          }
        }),
        catchError(this.#handleError)
      );
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
  ): Observable<T> {
    return this.#client
      .put<ResponseInterface<T>>(path, body, {
        headers: this.#getHeaders(requiresToken, headers),
      })
      .pipe(
        map((response: ResponseInterface<T>) => {
          if (response.data) {
            return response.data;
          } else {
            throw new Error('Error retrieving data');
          }
        }),
        catchError(this.#handleError)
      );
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
  ): Observable<any> {
    return this.#client
      .delete<ResponseInterface<null>>(path, {
        headers: this.#getHeaders(requiresToken, headers),
      })
      .pipe(catchError(this.#handleError));
  }

  #getHeaders(requiresToken: boolean, headers?: HttpHeaders): HttpHeaders {
    let newHeaders = new HttpHeaders();
    if (requiresToken) {
      const user = localStorage.getItem('user');
      if (!user) {
        throw new Error('Token not found');
      }
      const token = JSON.parse(user).id;
      newHeaders = newHeaders.append('user_id', token);
    }
    if (headers) {
      headers.keys().forEach((key) => {
        const value = headers.get(key)!;
        newHeaders = newHeaders.append(key, value);
      });
    }
    return newHeaders;
  }

  #handleError(error: any): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => errorMessage);
  }
}

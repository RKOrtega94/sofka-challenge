import { HttpErrorResponse } from '@angular/common/http';
import { ResponseInterface } from './../../../../core/interfaces/response.interface';
import { Injectable } from '@angular/core';
import { UserModel } from '@auth/application/model/user.model';
import { ApiService } from '@helpers/api.service';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserSource extends ApiService {
  retrieveUserByEmail(email: string): Observable<UserModel> {
    return this.get<UserModel>(`users/${email}`, { requiresToken: false }).pipe(
      map((response: ResponseInterface<UserModel>) => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error('Error retrieving user');
        }
      }),
      catchError((error) => {
        throw new HttpErrorResponse(
          error ? error.message : 'Error retrieving user'
        );
      })
    );
  }
}

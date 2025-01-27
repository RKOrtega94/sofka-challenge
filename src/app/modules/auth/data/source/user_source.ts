import { Injectable } from '@angular/core';
import { UserModel } from '@auth/application/model/user.model';
import { ApiService } from '@helpers/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserSource extends ApiService {
  /**
   * Retrieve user by email
   *
   * @param email Email to retrieve the user
   * @returns Observable<UserModel>
   */
  retrieveUserByEmail(email: string): Observable<UserModel> {
    return this.get<UserModel>(`users/${email}`, { requiresToken: false });
  }

  /**
   * Create user
   *
   * @param email Email to create the user
   * @returns Observable<UserModel>
   */
  createUser(email: string): Observable<UserModel> {
    return this.post<UserModel>(`users`, { email }, { requiresToken: false });
  }
}

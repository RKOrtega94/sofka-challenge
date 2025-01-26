import { inject, Injectable } from '@angular/core';
import { UserModel } from '@auth/application/model/user.model';
import { UserRepository } from '@auth/application/repository/user_repository';
import { Observable } from 'rxjs';
import { UserSource } from '../source/user_source';

@Injectable({
  providedIn: 'root',
})
export class UserRepositoryImpl implements UserRepository {
  #source = inject(UserSource);

  /**
   * Retrieve user by email
   *
   * @param email Email to retrieve the user
   * @returns Observable<UserModel>
   */
  retrieveUserByEmail(email: string): Observable<UserModel> {
    return this.#source.retrieveUserByEmail(email);
  }

  /**
   * Create user
   *
   * @param email Email to create the user
   * @returns Observable<UserModel>
   */
  createUser(email: string): Observable<UserModel> {
    return this.#source.createUser(email);
  }
}

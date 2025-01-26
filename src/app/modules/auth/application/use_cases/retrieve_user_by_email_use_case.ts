import { ResponseInterface } from './../../../../core/interfaces/response.interface';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';
import { UserRepository } from '../repository/user_repository';
import { inject, Injectable } from '@angular/core';
import { UserRepositoryImpl } from '@auth/data/repository/user_repository_impl';

/**
 * RetrieveUserByEmailUseCase
 */
@Injectable({
  providedIn: 'root',
})
export class RetrieveUserByEmailUseCase {
  #repository: UserRepository = inject(UserRepositoryImpl);

  /**
   * Execute the use case
   *
   * @param email - Email to retrieve the user
   * @returns Observable<UserModel>
   */
  execute(email: string): Observable<UserModel> {
    return this.#repository.retrieveUserByEmail(email);
  }
}

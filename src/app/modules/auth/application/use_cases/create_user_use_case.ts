import { inject, Injectable } from '@angular/core';
import { UserRepository } from '../repository/user_repository';
import { UserRepositoryImpl } from '@auth/data/repository/user_repository_impl';
import { UserModel } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateUserUseCase {
  #repository: UserRepository = inject(UserRepositoryImpl);

  /**
   * Execute the use case
   *
   * @param email - Email to create the user
   * @param password - Password to create the user
   * @returns Observable<UserModel>
   */
  execute(email: string): Observable<UserModel> {
    return this.#repository.createUser(email);
  }
}

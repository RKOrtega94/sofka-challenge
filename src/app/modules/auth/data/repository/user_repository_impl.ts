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

  retrieveUserByEmail(email: string): Observable<UserModel> {
    return this.#source.retrieveUserByEmail(email);
  }
}

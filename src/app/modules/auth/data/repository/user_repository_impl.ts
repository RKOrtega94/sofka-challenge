import { UserModel } from '@auth/application/model/user.model';
import { UserRepository } from '@auth/application/repository/user_repository';
import { Observable } from 'rxjs';

export class UserRepositoryImpl implements UserRepository {
  retrieveUserByEmail(email: string): Observable<UserModel> {
    throw new Error('Method not implemented.');
  }
}

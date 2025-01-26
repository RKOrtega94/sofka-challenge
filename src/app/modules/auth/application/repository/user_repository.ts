import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';

export abstract class UserRepository {
  abstract retrieveUserByEmail(email: string): Observable<UserModel>;
}

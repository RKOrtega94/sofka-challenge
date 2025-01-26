import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class UserRepository {
  abstract retrieveUserByEmail(email: string): Observable<UserModel>;
}

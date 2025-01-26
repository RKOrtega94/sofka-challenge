import { ResponseInterface } from './../../../../core/interfaces/response.interface';
import { Observable } from 'rxjs';
import { UserModel } from '../model/user.model';
import { UserRepository } from '../repository/user_repository';

/**
 * RetrieveUserByEmailUseCase
 */
export class RetrieveUserByEmailUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * Execute the use case
   *
   * @param email - Email to retrieve the user
   * @returns Observable<UserModel>
   */
  execute(email: string): Observable<UserModel> {
    return this.userRepository.retrieveUserByEmail(email);
  }
}

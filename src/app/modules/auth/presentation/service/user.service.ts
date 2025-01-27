import { RetrieveUserByEmailUseCase } from './../../application/use_cases/retrieve_user_by_email_use_case';
import { Injectable, computed, inject, signal } from '@angular/core';
import { UserModel } from '@auth/application/model/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CreateUserUseCase } from '@auth/application/use_cases/create_user_use_case';
import { DialogService } from '@components/dialog/dialog.service';
import { CreateUserModalComponent } from '../components/create-user-modal/create-user-modal.component';

interface UserState {
  user: UserModel | null;
  loading: boolean;
}

const initialState: UserState = {
  user: null,
  loading: false,
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  #dialogService = inject(DialogService);
  #retrieveUserByEmail = inject(RetrieveUserByEmailUseCase);
  #createUser = inject(CreateUserUseCase);

  #route = inject(Router);
  #state = signal<UserState>(initialState);
  user = computed(() => this.#state().user);
  loading = computed(() => this.#state().loading);

  constructor() {
    const user = localStorage.getItem('user');
    if (user) {
      this.#state.set({
        ...this.#state(),
        user: JSON.parse(user),
      });
    }
  }

  /**
   * Retrieve user by email
   *
   * @param email Email to retrieve the user
   * @returns Observable<UserModel>
   */
  retrieveUserByEmail(email: string) {
    this.#state.update((state) => ({ ...state, loading: true }));
    return this.#retrieveUserByEmail.execute(email).subscribe({
      next: (user: UserModel) => {
        this.#state.update((state) => ({ ...state, user, loading: false }));
        localStorage.setItem('user', JSON.stringify(user));
        this.#route.navigate(['/']);
      },
      error: (error: string) => {
        if (error.includes('404')) {
          this.#dialogService.showDialog(CreateUserModalComponent, {
            data: { email },
          });
        } else {
          alert(error);
        }
        this.#state.update((state) => ({ ...state, loading: false }));
      },
    });
  }

  /**
   * Create user
   *
   * @param email Email to create the user
   * @returns Observable<UserModel>
   */
  createUser(email: string) {
    this.#state.update((state) => ({ ...state, loading: true }));
    return this.#createUser.execute(email).subscribe({
      next: (user: UserModel) => {
        this.#state.update((state) => ({ ...state, user, loading: false }));
        localStorage.setItem('user', JSON.stringify(user));
        alert('User created successfully');
        this.#route.navigate(['/']);
      },
      error: (error: HttpErrorResponse) => {
        this.#state.update((state) => ({ ...state, loading: false }));
        console.error(error);
      },
    });
  }

  /**
   * Logout the user
   */
  logout() {
    localStorage.removeItem('user');
    this.#state.update((state) => ({ ...state, user: null }));
    localStorage.removeItem('user');
    this.#route.navigate(['/auth']);
  }
}

import { Observable } from 'rxjs';
import { RetrieveUserByEmailUseCase } from './../../application/use_cases/retrieve_user_by_email_use_case';
import { Injectable, OnInit, computed, inject, signal } from '@angular/core';
import { UserModel } from '@auth/application/model/user.model';
import { ResponseInterface } from 'src/app/core/interfaces/response.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

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
  #retrieveUserByEmail = inject(RetrieveUserByEmailUseCase);

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
      error: (error: HttpErrorResponse) => {
        this.#state.update((state) => ({ ...state, loading: false }));
        alert(error.error.message);
      },
    });
  }
}

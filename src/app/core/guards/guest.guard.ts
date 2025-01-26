import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { UserService } from '@auth/presentation/service/user.service';

export const guestGuard: CanActivateFn = (route, state) => {
  const service = inject(UserService);
  const router = inject(Router);
  const user = service.user();
  if (user?.id) {
    console.log('User is already logged in');
    router.navigate(['/']);
    return false;
  }
  return true;
};

import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { UserService } from '@auth/presentation/service/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(UserService);
  const router = inject(Router);
  const user = service.user();
  if (!user) {
    router.navigate(['/auth/login']);
    return false;
  }
  return true;
};

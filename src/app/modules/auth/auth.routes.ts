import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './presentation/layout/layout.component';
import { LoginPageComponent } from './presentation/pages/login-page/login-page.component';
import { guestGuard } from 'src/app/core/guards/guest.guard';

export const authRoutes: Routes = [
  {
    path: 'auth',
    canActivate: [guestGuard],
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
    ],
  },
];

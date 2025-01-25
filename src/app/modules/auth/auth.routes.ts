import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './presentation/layout/layout.component';
import { LoginPageComponent } from './presentation/pages/login-page/login-page.component';

export const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
    ],
  },
];

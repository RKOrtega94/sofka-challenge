import { Routes } from '@angular/router';
import { authRoutes } from './modules/auth/auth.routes';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  ...authRoutes,
  {
    path: '',
    canActivate: [authGuard],
    component: MainLayoutComponent,
  },
];

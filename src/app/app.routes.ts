import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { authRoutes } from '@auth/auth.routes';
import { taskRoutes } from '@task/task.routes';

export const routes: Routes = [
  ...authRoutes,
  {
    path: '',
    pathMatch: 'full',
    canActivate: [authGuard],
    component: MainLayoutComponent,
    children: [...taskRoutes],
  },
];

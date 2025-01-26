import { Routes } from '@angular/router';
import { TasksComponent } from './presentation/pages/tasks/tasks.component';

export const taskRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TasksComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

import { Injectable } from '@angular/core';
import { TaskModel } from '../model/task_model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class TaskRepository {
  abstract retrieveTasks(): Observable<TaskModel[]>;
}

import { Injectable } from '@angular/core';
import { TaskModel } from '../model/task_model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class TaskRepository {
  abstract retrieveTasks(): Observable<TaskModel[]>;
  abstract createTask(task: TaskModel): Observable<TaskModel>;
  abstract deleteTask(id: string): Observable<any>;
  abstract updateTask(task: TaskModel): Observable<TaskModel>;
}

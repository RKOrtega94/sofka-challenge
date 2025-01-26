import { Injectable } from '@angular/core';
import { TaskModel } from '@task/application/model/task_model';
import { TaskRepository } from '@task/application/repository/task_repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskRepositoryImpl implements TaskRepository {
  retrieveTasks(): Observable<TaskModel[]> {
    throw new Error('Method not implemented.');
  }
}

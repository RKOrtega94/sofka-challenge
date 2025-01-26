import { inject, Injectable } from '@angular/core';
import { TaskModel } from '@task/application/model/task_model';
import { TaskRepository } from '@task/application/repository/task_repository';
import { Observable } from 'rxjs';
import { TaskSource } from '../source/task_source';

@Injectable({
  providedIn: 'root',
})
export class TaskRepositoryImpl implements TaskRepository {
  #source = inject(TaskSource);

  retrieveTasks(): Observable<TaskModel[]> {
    return this.#source.retrieveTasks();
  }
}

import { inject, Injectable } from '@angular/core';
import { TaskRepository } from '../repository/task_repository';
import { TaskRepositoryImpl } from '@task/data/repository/task_repository_impl';
import { TaskModel } from '../model/task_model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateTaskUseCase {
  #repository: TaskRepository = inject(TaskRepositoryImpl);

  execute(task: TaskModel): Observable<TaskModel> {
    return this.#repository.updateTask(task);
  }
}

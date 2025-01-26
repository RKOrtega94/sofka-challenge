import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../model/task_model';
import { TaskRepository } from '../repository/task_repository';
import { TaskRepositoryImpl } from '@task/data/repository/task_repository_impl';

/**
 * RetrieveTasksUseCase
 */
@Injectable({
  providedIn: 'root',
})
export class RetrieveTasksUseCase {
  #repository: TaskRepository = inject(TaskRepositoryImpl);

  /**
   * Execute the use case
   *
   * @returns Observable<TaskModel[]>
   */
  execute(): Observable<TaskModel[]> {
    return this.#repository.retrieveTasks();
  }
}

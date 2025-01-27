import { inject, Injectable } from '@angular/core';
import { TaskRepositoryImpl } from '@task/data/repository/task_repository_impl';
import { TaskRepository } from '../repository/task_repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeleteTaskUseCase {
  #repository: TaskRepository = inject(TaskRepositoryImpl);

  execute(id: string): Observable<any> {
    return this.#repository.deleteTask(id);
  }
}

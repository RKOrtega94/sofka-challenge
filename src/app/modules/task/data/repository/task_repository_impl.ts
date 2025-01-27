import { inject, Injectable } from '@angular/core';
import { TaskModel } from '@task/application/model/task_model';
import { TaskRepository } from '@task/application/repository/task_repository';
import { Observable } from 'rxjs';
import { TaskSource } from '../source/task_source';
import { ObserversModule } from '@angular/cdk/observers';

@Injectable({
  providedIn: 'root',
})
export class TaskRepositoryImpl implements TaskRepository {
  #source = inject(TaskSource);

  retrieveTasks(): Observable<TaskModel[]> {
    return this.#source.retrieveTasks();
  }

  createTask(task: TaskModel): Observable<TaskModel> {
    return this.#source.createTask(task);
  }

  deleteTask(id: string): Observable<any> {
    return this.#source.deleteTask(id);
  }

  updateTask(task: TaskModel): Observable<TaskModel> {
    return this.#source.updateTask(task);
  }
}

import { Injectable, computed, inject, signal } from '@angular/core';
import { TaskModel } from '@task/application/model/task_model';
import { RetrieveTasksUseCase } from '@task/application/use_cases/retrieve_tasks_uses_case';

interface TaskState {
  tasks: TaskModel[];
  loading: boolean;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  #retrieveTasksUseCase = inject(RetrieveTasksUseCase);

  #state = signal<TaskState>(initialState);
  tasks = computed(() => this.#state().tasks);
  loading = computed(() => this.#state().loading);

  retrieveTasks() {
    this.#state.update((state) => ({ ...state, loading: true }));
    return this.#retrieveTasksUseCase.execute().subscribe({
      next: (tasks) => {
        this.#state.update((state) => ({ ...state, tasks, loading: false }));
      },
      error: (error) => {
        this.#state.update((state) => ({ ...state, loading: false }));
        alert(error);
      },
    });
  }
}

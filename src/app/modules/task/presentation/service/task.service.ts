import { UpdateTaskUseCase } from './../../application/use_cases/update_task_use_case';
import { Injectable, computed, inject, signal } from '@angular/core';
import { TaskModel } from '@task/application/model/task_model';
import { CreateTaskUseCase } from '@task/application/use_cases/create_task_use_case';
import { DeleteTaskUseCase } from '@task/application/use_cases/delete_task_use_case';
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
  #createTaskUseCase = inject(CreateTaskUseCase);
  #deleteTaskUseCase = inject(DeleteTaskUseCase);
  #updateTaskUseCase = inject(UpdateTaskUseCase);

  #state = signal<TaskState>(initialState);
  tasks = computed(() => this.#state().tasks);
  loading = computed(() => this.#state().loading);

  retrieveTasks() {
    this.#state.update((state) => ({ ...state, loading: true }));
    this.#retrieveTasksUseCase.execute().subscribe({
      next: (tasks) => {
        tasks.sort(
          (a, b) =>
            new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime()
        );
        this.#state.update((state) => ({ ...state, tasks, loading: false }));
      },
      error: (error) => {
        this.#state.update((state) => ({ ...state, loading: false }));
        alert(error);
      },
    });
  }

  createTask(task: TaskModel, onComplete: () => void) {
    this.#state.update((state) => ({ ...state, loading: true }));
    this.#createTaskUseCase.execute(task).subscribe({
      next: () => {
        this.retrieveTasks();
      },
      error: (error) => {
        this.#state.update((state) => ({ ...state, loading: false }));
        alert(error);
      },
      complete: onComplete,
    });
  }

  deleteTask(id: string) {
    this.#state.update((state) => ({ ...state, loading: true }));
    this.#deleteTaskUseCase.execute(id).subscribe({
      next: () => {
        this.#state.update((state) => ({
          ...state,
          tasks: state.tasks.filter((task) => task.id !== id),
          loading: false,
        }));
      },
      error: (error) => {
        this.#state.update((state) => ({ ...state, loading: false }));
        alert(error);
      },
    });
  }

  updateTask(task: TaskModel, onComplete: () => void) {
    this.#state.update((state) => ({ ...state, loading: true }));
    this.#updateTaskUseCase.execute(task).subscribe({
      next: () => {
        this.#state.update((state) => ({
          ...state,
          tasks: state.tasks.map((t) => (t.id === task.id ? task : t)),
          loading: false,
        }));
      },
      error: (error) => {
        this.#state.update((state) => ({ ...state, loading: false }));
        alert(error);
      },
      complete: onComplete,
    });
  }
}

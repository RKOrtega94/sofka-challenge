import { DialogRef } from '@angular/cdk/dialog';
import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { ButtonModule } from '@components/button/button.module';
import { DialogService } from '@components/dialog/dialog.service';
import { TaskModel } from '@task/application/model/task_model';
import { TaskDeleteComponent } from '../task-delete/task-delete.component';
import { TaskService } from '@task/presentation/service/task.service';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task',
  imports: [ButtonModule, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {
  #dialogService = inject(DialogService);
  #taskService = inject(TaskService);
  task = input.required<TaskModel>();

  handleDelete() {
    const ref: DialogRef = this.#dialogService.showDialog(TaskDeleteComponent, {
      data: this.#taskService
        .tasks()
        .find((task) => task.id === this.task().id),
    });
    ref.closed.subscribe((result) => {
      if (result) {
        this.#taskService.deleteTask(this.task().id!);
      }
    });
  }

  handleUpdate() {
    const ref: DialogRef = this.#dialogService.showDialog(TaskFormComponent, {
      data: this.#taskService
        .tasks()
        .find((task) => task.id === this.task().id),
    });
  }

  handleToggleStatus() {
    const task = this.#taskService
      .tasks()
      .find((task) => task.id === this.task().id);
    if (!task) alert('Task not found');
    task!.status = task!.status === 'completed' ? 'pending' : 'completed';
    this.#taskService.updateTask(task!, () => {});
  }
}

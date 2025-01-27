import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonModule } from '@components/button/button.module';
import { TaskModel } from '@task/application/model/task_model';

@Component({
  selector: 'app-task-delete',
  imports: [ButtonModule],
  templateUrl: './task-delete.component.html',
  styleUrl: './task-delete.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskDeleteComponent {
  #dialogRef = inject(DialogRef);
  #data = inject<TaskModel>(DIALOG_DATA);

  task = this.#data;

  cancel() {
    this.#dialogRef.close(false);
  }

  delete() {
    this.#dialogRef.close(true);
  }
}

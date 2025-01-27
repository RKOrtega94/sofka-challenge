import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from '@components/button/button.module';
import { TextFieldComponent } from '@components/fields/text-field/text-field.component';
import { AppFormBuilder } from '@helpers/form-builder';
import { TaskModel } from '@task/application/model/task_model';
import { TaskService } from '@task/presentation/service/task.service';

@Component({
  selector: 'app-task-form',
  imports: [TextFieldComponent, ButtonModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormComponent implements OnInit {
  #service = inject(TaskService);
  #dialogRef = inject(DialogRef);
  #data = inject(DIALOG_DATA);

  editing = false;
  taskModel: TaskModel | undefined;

  titleController = new FormControl('', [Validators.required]);
  descriptionController = new FormControl('', [Validators.required]);
  statusController = new FormControl(false);

  formGroup = new AppFormBuilder({
    title: this.titleController,
    description: this.descriptionController,
    status: this.statusController,
  }).build();

  ngOnInit(): void {
    if (this.#data) {
      this.editing = true;
      this.taskModel = this.#data;
      this.titleController.setValue(this.taskModel?.title ?? '');
      this.descriptionController.setValue(this.taskModel?.description ?? '');
      this.statusController.setValue(this.taskModel?.status === 'completed');
    }
  }

  handleSave($event: Event) {
    $event.preventDefault();
    if (this.formGroup.invalid) {
      alert('Please fill all the fields');
      return;
    }
    const task: TaskModel = {
      id: this.taskModel?.id,
      title: this.titleController.value!,
      description: this.descriptionController.value!,
      status: this.taskModel?.status || 'pending',
    };
    if (task.id) {
      this.#service.updateTask(task, () => {
        this.#dialogRef.close();
      });
    } else {
      this.#service.createTask(task, () => {
        this.#dialogRef.close();
      });
    }
  }
}

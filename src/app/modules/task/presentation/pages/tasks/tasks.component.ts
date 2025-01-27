import { TaskComponent } from '@task/presentation/components/task/task.component';
import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ButtonModule } from '@components/button/button.module';
import { ButtonGroupComponent } from '@components/button/button-group/button-group.component';
import { TaskService } from '@task/presentation/service/task.service';
import { EmptyComponent } from '@components/empty/empty.component';
import { DialogService } from '@components/dialog/dialog.service';
import { TaskFormComponent } from '@task/presentation/components/task-form/task-form.component';

@Component({
  selector: 'app-tasks',
  imports: [ButtonModule, TaskComponent, ButtonGroupComponent, EmptyComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  #service = inject(TaskService);
  #dialogService = inject(DialogService);

  filters: string[] = ['all', 'pending', 'completed'];
  #selectedFilter = signal<string>('all');
  selectedFilter = computed(() => this.#selectedFilter());

  #tasks = signal(this.#service.tasks());
  tasks = computed(() => this.#tasks());

  constructor() {
    effect(() => {
      console.log('selectedFilter', this.selectedFilter());
      switch (this.selectedFilter()) {
        case 'all':
          this.#tasks.set(this.#service.tasks());
          break;
        default:
          this.#tasks.set(
            this.#service
              .tasks()
              .filter((task) => task.status === this.selectedFilter())
          );
          break;
      }
    });
  }

  selectFilter($event: string) {
    if ($event === this.selectedFilter()) return;
    this.#selectedFilter.set($event);
  }

  ngOnInit(): void {
    this.#service.retrieveTasks();
  }

  openForm(id?: string) {
    this.#dialogService.showDialog(TaskFormComponent, {
      data: id,
    });
  }
}

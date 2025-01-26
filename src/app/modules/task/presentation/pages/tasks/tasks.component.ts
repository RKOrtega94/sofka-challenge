import { TaskComponent } from '@task/presentation/components/task/task.component';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ButtonModule } from '@components/button/button.module';
import { ButtonGroupComponent } from '@components/button/button-group/button-group.component';
import { TaskService } from '@task/presentation/service/task.service';

@Component({
  selector: 'app-tasks',
  imports: [ButtonModule, TaskComponent, ButtonGroupComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  #service = inject(TaskService);

  filters: string[] = ['all', 'pending', 'completed'];
  #selectedFilter = signal<string>('all');
  selectedFilter = computed(() => this.#selectedFilter());

  selectFilter($event: string) {
    if ($event === this.selectedFilter()) return;
    this.#selectedFilter.set($event);
  }

  ngOnInit(): void {
    this.#service.retrieveTasks();
  }
}

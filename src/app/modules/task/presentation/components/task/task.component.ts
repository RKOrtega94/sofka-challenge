import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from '@components/button/button.module';

@Component({
  selector: 'app-task',
  imports: [ButtonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent {}

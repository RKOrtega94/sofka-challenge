import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from '@components/button/button.module';

@Component({
  selector: 'app-create-user-modal',
  imports: [ButtonModule],
  templateUrl: './create-user-modal.component.html',
  styleUrl: './create-user-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserModalComponent {}

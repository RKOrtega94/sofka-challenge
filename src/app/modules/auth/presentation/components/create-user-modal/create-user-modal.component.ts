import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { UserService } from '@auth/presentation/service/user.service';
import { ButtonModule } from '@components/button/button.module';

@Component({
  selector: 'app-create-user-modal',
  imports: [ButtonModule],
  templateUrl: './create-user-modal.component.html',
  styleUrl: './create-user-modal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserModalComponent {
  #dialogRef = inject(DialogRef);
  #service = inject(UserService);
  #data = inject(DIALOG_DATA);

  loading = computed(() => this.#service.loading());

  close() {
    this.#dialogRef.close();
  }

  createUser() {
    this.#service.createUser(this.#data.email);
    this.close();
  }
}

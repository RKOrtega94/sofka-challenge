import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '@auth/presentation/service/user.service';
import { ButtonModule } from '@components/button/button.module';

@Component({
  selector: 'app-header',
  imports: [ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  #service = inject(UserService);

  logout() {
    this.#service.logout();
  }
}

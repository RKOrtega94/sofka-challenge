import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonModule } from '@components/button/button.module';

@Component({
  selector: 'app-header',
  imports: [ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-empty',
  imports: [],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyComponent {
  title = input<string>('No data available');
  subtitle = input<string | undefined>();
}

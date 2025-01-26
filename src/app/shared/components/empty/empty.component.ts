import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-empty',
  imports: [],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyComponent { }

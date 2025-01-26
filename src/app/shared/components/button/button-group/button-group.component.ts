import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
  output,
} from '@angular/core';

@Component({
  selector: 'app-button-group',
  imports: [CommonModule],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent {
  options = input.required<string[]>();
  selected = input<string>();
  selectOption = output<string>();

  toggleOption(option: string) {
    this.selectOption.emit(option);
  }
}

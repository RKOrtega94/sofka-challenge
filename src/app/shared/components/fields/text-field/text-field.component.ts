import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  input,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'text-field',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.css',
})
export class TextFieldComponent implements AfterViewInit {
  control = input.required<FormControl>();
  label = input<string>();
  placeholder = input<string>('');
  type = input<
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'month'
    | 'week'
    | 'color'
    | 'hidden'
  >('text');

  @ViewChild('prefixicon') prefixicon!: ElementRef;

  #hasPrefix = signal<boolean>(false);
  hasPrefix = computed(() => this.#hasPrefix());

  ngAfterViewInit(): void {
    if (
      this.prefixicon &&
      this.prefixicon.nativeElement.childNodes.length > 0
    ) {
      this.#hasPrefix.set(true);
    } else {
      this.#hasPrefix.set(false);
    }
  }

  getErrors(): string[] {
    if (!this.control().errors) return [];
    const errors = Object.keys(this.control().errors || {});
    return errors.map((error) => {
      switch (error) {
        case 'required':
          return 'This field is required';
        case 'minlength':
          return `This field must have at least ${
            this.control().errors?.['minlength'].requiredLength
          } characters`;
        case 'maxlength':
          return `This field must have at most ${
            this.control().errors?.['maxlength'].requiredLength
          } characters`;
        case 'pattern':
          return 'Invalid format';
        case 'email':
          return 'Invalid email';
        case 'min':
          return `This field must be greater than ${
            this.control().errors?.['min'].min
          }`;
        case 'max':
          return `This field must be less than ${
            this.control().errors?.['max'].max
          }`;
        default:
          return 'Invalid value';
      }
    });
  }
}

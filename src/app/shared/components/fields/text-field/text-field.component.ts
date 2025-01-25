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
export class TextFieldComponent implements AfterViewInit, OnInit {
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

  ngOnInit(): void {}
}

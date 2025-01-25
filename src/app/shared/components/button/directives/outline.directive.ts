import {
  Directive,
  ElementRef,
  Host,
  inject,
  Optional,
  Renderer2,
} from '@angular/core';
import { PrimaryDirective } from './primary.directive';

@Directive({
  selector: '[outline]',
})
export class OutlineDirective {
  #el = inject(ElementRef);
  #render = inject(Renderer2);

  constructor() {
    this.#render.addClass(this.#el.nativeElement, 'bg-white');
    this.#render.addClass(this.#el.nativeElement, 'border');
    this.#render.addClass(this.#el.nativeElement, 'border-gray-300');
    this.#render.addClass(this.#el.nativeElement, 'text-gray-700');
    this.#render.addClass(this.#el.nativeElement, 'rounded-lg');
    this.#render.addClass(this.#el.nativeElement, 'py-2');
    this.#render.addClass(this.#el.nativeElement, 'font-semibold');
    this.#render.addClass(this.#el.nativeElement, 'text-sm');
    this.#render.addClass(this.#el.nativeElement, 'hover:bg-gray-50');
    this.#render.addClass(this.#el.nativeElement, 'focus:outline-none');
    this.#render.addClass(this.#el.nativeElement, 'active:bg-gray-100');
    this.#render.addClass(this.#el.nativeElement, 'disabled:bg-gray-200');
    this.#render.addClass(
      this.#el.nativeElement,
      'disabled:cursor-not-allowed'
    );
    this.#render.addClass(this.#el.nativeElement, 'dark:bg-gray-800');
    this.#render.addClass(this.#el.nativeElement, 'dark:border-gray-700');
    this.#render.addClass(this.#el.nativeElement, 'dark:text-gray-300');
    this.#render.addClass(this.#el.nativeElement, 'dark:hover:bg-gray-700');
    this.#render.addClass(this.#el.nativeElement, 'dark:focus:outline-none');
    this.#render.addClass(this.#el.nativeElement, 'dark:active:bg-gray-600');
    this.#render.addClass(this.#el.nativeElement, 'dark:disabled:bg-gray-900');
  }
}

import {
  Directive,
  ElementRef,
  Host,
  inject,
  Optional,
  Renderer2,
} from '@angular/core';
import { OutlineDirective } from './outline.directive';

@Directive({
  selector: '[secondary]',
})
export class SecondaryDirective {
  #el = inject(ElementRef);
  #render = inject(Renderer2);

  constructor(@Optional() @Host() private outline: OutlineDirective) {
    this.#render.addClass(this.#el.nativeElement, 'cursor-pointer');
    this.#render.addClass(this.#el.nativeElement, 'bg-gray-500');
    this.#render.addClass(this.#el.nativeElement, 'text-white');
    this.#render.addClass(this.#el.nativeElement, 'rounded-lg');
    this.#render.addClass(this.#el.nativeElement, 'py-2');
    this.#render.addClass(this.#el.nativeElement, 'font-semibold');
    this.#render.addClass(this.#el.nativeElement, 'text-sm');
    this.#render.addClass(this.#el.nativeElement, 'hover:bg-gray-600');
    this.#render.addClass(this.#el.nativeElement, 'focus:outline-none');
    this.#render.addClass(this.#el.nativeElement, 'active:bg-gray-700');
    this.#render.addClass(this.#el.nativeElement, 'disabled:bg-gray-300');
    this.#render.addClass(
      this.#el.nativeElement,
      'disabled:cursor-not-allowed'
    );
    this.#render.addClass(this.#el.nativeElement, 'border-gray-500');
    this.#render.addClass(this.#el.nativeElement, 'border');
    this.#render.addClass(this.#el.nativeElement, 'hover:border-gray-600');
    this.#render.addClass(this.#el.nativeElement, 'focus:border-gray-700');
    this.#render.addClass(this.#el.nativeElement, 'transition-colors');
    this.#render.addClass(this.#el.nativeElement, 'dark:bg-gray-700');
    this.#render.addClass(this.#el.nativeElement, 'dark:text-white');
    this.#render.addClass(this.#el.nativeElement, 'dark:hover:bg-gray-800');
    this.#render.addClass(this.#el.nativeElement, 'dark:focus:outline-none');
    this.#render.addClass(this.#el.nativeElement, 'dark:active:bg-gray-900');
    this.#render.addClass(this.#el.nativeElement, 'dark:disabled:bg-gray-400');
    this.#render.addClass(this.#el.nativeElement, 'dark:border-gray-700');
    this.#render.addClass(this.#el.nativeElement, 'dark:hover:border-gray-800');
    this.#render.addClass(this.#el.nativeElement, 'dark:focus:border-gray-900');
  }
}

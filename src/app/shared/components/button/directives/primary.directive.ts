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
  selector: '[primary]',
})
export class PrimaryDirective {
  #el = inject(ElementRef);
  #render = inject(Renderer2);

  constructor(@Optional() @Host() private outline: OutlineDirective) {
    this.#render.addClass(this.#el.nativeElement, 'bg-blue-500');
    this.#render.addClass(this.#el.nativeElement, 'text-white');
    this.#render.addClass(this.#el.nativeElement, 'rounded-lg');
    this.#render.addClass(this.#el.nativeElement, 'py-2');
    this.#render.addClass(this.#el.nativeElement, 'font-semibold');
    this.#render.addClass(this.#el.nativeElement, 'text-sm');
    this.#render.addClass(this.#el.nativeElement, 'hover:bg-blue-600');
    this.#render.addClass(this.#el.nativeElement, 'focus:outline-none');
    this.#render.addClass(this.#el.nativeElement, 'active:bg-blue-700');
    this.#render.addClass(this.#el.nativeElement, 'disabled:bg-blue-300');
    this.#render.addClass(
      this.#el.nativeElement,
      'disabled:cursor-not-allowed'
    );
    this.#render.addClass(this.#el.nativeElement, 'border-blue-500');
    this.#render.addClass(this.#el.nativeElement, 'border');
    this.#render.addClass(this.#el.nativeElement, 'hover:border-blue-600');
    this.#render.addClass(this.#el.nativeElement, 'focus:border-blue-700');
    this.#render.addClass(this.#el.nativeElement, 'transition-colors');
    this.#render.addClass(this.#el.nativeElement, 'dark:bg-blue-700');
    this.#render.addClass(this.#el.nativeElement, 'dark:text-white');
    this.#render.addClass(this.#el.nativeElement, 'dark:hover:bg-blue-800');
    this.#render.addClass(this.#el.nativeElement, 'dark:focus:outline-none');
    this.#render.addClass(this.#el.nativeElement, 'dark:active:bg-blue-900');
    this.#render.addClass(this.#el.nativeElement, 'dark:disabled:bg-blue-400');
    this.#render.addClass(this.#el.nativeElement, 'dark:border-blue-700');
    this.#render.addClass(this.#el.nativeElement, 'dark:hover:border-blue-800');
    this.#render.addClass(this.#el.nativeElement, 'dark:focus:border-blue-900');
  }
}

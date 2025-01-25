import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryDirective } from './directives/primary.directive';
import { OutlineDirective } from './directives/outline.directive';

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimaryDirective, OutlineDirective],
  exports: [PrimaryDirective, OutlineDirective],
})
export class ButtonModule {}

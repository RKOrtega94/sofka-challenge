import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryDirective } from './directives/primary.directive';
import { OutlineDirective } from './directives/outline.directive';
import { GhostDirective } from './directives/ghost.directive';

@NgModule({
  declarations: [],
  imports: [CommonModule, PrimaryDirective, OutlineDirective, GhostDirective],
  exports: [PrimaryDirective, OutlineDirective, GhostDirective],
})
export class ButtonModule {}

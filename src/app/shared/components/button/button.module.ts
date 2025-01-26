import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryDirective } from './directives/primary.directive';
import { OutlineDirective } from './directives/outline.directive';
import { GhostDirective } from './directives/ghost.directive';
import { SecondaryDirective } from './directives/secondary.directive';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimaryDirective,
    OutlineDirective,
    GhostDirective,
    SecondaryDirective,
  ],
  exports: [
    PrimaryDirective,
    OutlineDirective,
    GhostDirective,
    SecondaryDirective,
  ],
})
export class ButtonModule {}

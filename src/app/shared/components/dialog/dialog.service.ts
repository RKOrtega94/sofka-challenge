import { ElementRef, inject, Injectable } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  connetnt: ElementRef | undefined = undefined;
  #modalComponent = new ModalComponent(this.connetnt);

  //#dialog = inject(Dialog);

  showDialog() {}
}

import { ElementRef, inject, Injectable } from '@angular/core';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/portal';

interface DialogConfig {
  id?: string;
  disableClose: boolean;
  data?: any;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  #dialog = inject(Dialog);

  showDialog(
    content: ComponentType<any>,
    config: DialogConfig = { disableClose: false, size: 'md' }
  ): DialogRef<any> {
    return this.#dialog.open(content, {
      id: config.id,
      role: 'dialog',
      disableClose: config.disableClose,
      data: config.data,
      closeOnNavigation: true,
      hasBackdrop: true,
      width: this.#getSizes(config.size!),
      height: config.size === 'full' ? '100vh' : 'auto',
      maxHeight: config.size === 'full' ? '100vh' : '80vh',
    });
  }

  #getSizes(size: string): string {
    switch (size) {
      case 'sm':
        return '300px';
      case 'md':
        return '600px';
      case 'lg':
        return '900px';
      case 'xl':
        return '1200px';
      case 'full':
        return '100vw';
      default:
        return '600px';
    }
  }
}

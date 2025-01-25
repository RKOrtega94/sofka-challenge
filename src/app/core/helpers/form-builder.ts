import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

export class AppFormBuilder {
  formGroup: FormGroup | null = null;

  constructor(
    controllers: { [key: string]: FormControl },
    options?: { [key: string]: any }
  ) {
    this.formGroup = new FormBuilder().group(controllers, options);
  }

  build(): FormGroup {
    if (!this.formGroup) {
      throw new Error('Form group is not initialized');
    }

    return this.formGroup;
  }
}

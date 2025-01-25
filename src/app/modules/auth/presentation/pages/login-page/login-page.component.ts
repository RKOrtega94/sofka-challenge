import { Component } from '@angular/core';
import { TextFieldComponent } from 'src/app/shared/components/fields/text-field/text-field.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppFormBuilder } from 'src/app/core/helpers/form-builder';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@Component({
  selector: 'app-login-page',
  imports: [TextFieldComponent, ButtonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  emailCcontroller = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  formGroup = new AppFormBuilder({
    email: this.emailCcontroller,
  }).build();
}

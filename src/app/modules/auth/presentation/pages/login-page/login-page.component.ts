import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from '@components/button/button.module';
import { TextFieldComponent } from '@components/fields/text-field/text-field.component';
import { AppFormBuilder } from 'src/app/core/helpers/form-builder';

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

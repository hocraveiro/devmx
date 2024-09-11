import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUp } from '@devmx/shared-api-interfaces';
import { TypedForm } from '../types';

export class SignUpForm extends FormGroup<TypedForm<SignUp>> {
  constructor() {
    super({
      username: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(6)],
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      firstName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      lastName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }
}

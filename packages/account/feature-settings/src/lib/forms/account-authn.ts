import { AccountAuthn } from '@devmx/shared-api-interfaces';
import { TypedForm } from '@devmx/shared-ui-forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class AccountAuthnForm extends FormGroup<TypedForm<AccountAuthn>> {
  constructor() {
    super(
      {
        id: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        username: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        email: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required, Validators.email],
        }),
      },
      { updateOn: 'submit' }
    );
  }
}

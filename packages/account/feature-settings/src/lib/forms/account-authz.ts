import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RolesForm, TypedForm } from '@devmx/shared-ui-forms';
import { AccountAuthz } from '@devmx/shared-api-interfaces';

export class AccountAuthzForm extends FormGroup<TypedForm<AccountAuthz>> {
  constructor() {
    super({
      id: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      roles: new RolesForm(),
      active: new FormControl(),
    });
  }
}

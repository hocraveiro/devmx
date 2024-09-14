import { AccountPassword } from '@devmx/shared-api-interfaces';
import { TypedForm } from '@devmx/shared-ui-forms';
import {
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';

export const passwordsValidator = <T extends AccountPasswordForm>(
  control: AbstractControl<T>
) => {
  const currentPassword = control.get('currentPassword');
  const newPassword = control.get('newPassword');

  const bothAreFilled = currentPassword && newPassword;
  const bothAreTheSame = currentPassword?.value === newPassword?.value;

  return bothAreFilled && bothAreTheSame ? { bothAreTheSame } : null;
};

export class AccountPasswordForm extends FormGroup<TypedForm<AccountPassword>> {
  constructor() {
    super(
      {
        id: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        currentPassword: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        newPassword: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required, Validators.minLength(6)],
        }),
      },
      { updateOn: 'submit', validators: passwordsValidator }
    );
  }
}

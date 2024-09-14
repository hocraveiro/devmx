import { AccountProfile, Gender } from '@devmx/shared-api-interfaces';
import { TypedForm } from '@devmx/shared-ui-forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface GenderRecord {
  value: Gender;
  label: string;
}

export class AccountProfileForm extends FormGroup<TypedForm<AccountProfile>> {
  genders: GenderRecord[] = [
    { value: 'male', label: 'Masculino' },
    { value: 'female', label: 'Feminino' },
    { value: 'non-binary', label: 'Não-binário' },
    { value: 'gender-fluid', label: 'Gênero Fluido' },
    { value: 'agender', label: 'Agênero' },
    { value: 'prefer-not-to-say', label: 'Prefiro não dizer' },
    { value: '', label: 'Outro' },
  ];

  constructor() {
    super(
      {
        id: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        firstName: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        lastName: new FormControl('', {
          nonNullable: true,
          validators: [Validators.required],
        }),
        gender: new FormControl('prefer-not-to-say', {
          nonNullable: true,
        }),
        birthday: new FormControl('', {
          nonNullable: true,
        }),
        minibio: new FormControl('', {
          nonNullable: true,
        }),
        photo: new FormControl('', {
          nonNullable: true,
        }),
      },
      { updateOn: 'submit' }
    );
  }
}

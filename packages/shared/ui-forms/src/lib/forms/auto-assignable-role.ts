import { AutoAssignableRole } from '@devmx/shared-api-interfaces';
import { FormControl, FormGroup } from '@angular/forms';
import { TypedForm } from '../types';

export class AutoAssignableRoleForm extends FormGroup<
  TypedForm<{ roles: AutoAssignableRole }>
> {
  constructor() {
    super({
      roles: new FormControl(),
    });
  }
}

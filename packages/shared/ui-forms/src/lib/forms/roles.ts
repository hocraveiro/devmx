import { FormControl, FormGroup } from '@angular/forms';
import { Role } from '@devmx/shared-api-interfaces';
import { TypedForm } from '../types';

export class RolesForm extends FormGroup<TypedForm<Record<Role, boolean>>> {
  constructor() {
    super({
      director: new FormControl(),
      manager: new FormControl(),
      neighbor: new FormControl(),
      donor: new FormControl(),
      heroe: new FormControl(),
      leader: new FormControl(),
      staff: new FormControl(),
      speaker: new FormControl(),
      member: new FormControl(),
    });
  }
}

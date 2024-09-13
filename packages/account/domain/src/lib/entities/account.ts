import { Entity, Gender, Role } from '@devmx/shared-api-interfaces';

export interface Account extends Entity {
  username: string;

  password: string;

  email: string;

  firstName: string;

  lastName: string;

  gender?: Gender;

  photo?: string;

  minibio?: string;

  roles: Role[];

  birthday?: string;

  active: boolean;
}

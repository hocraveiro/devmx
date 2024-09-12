import { Role } from '../account';

export interface AuthAccount {
  firstName: string;
  username: string;
  email: string;
  roles: Role[];
  id: string;
}

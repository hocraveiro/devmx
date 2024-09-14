import { Role } from '../account';

export interface AuthAccount {
  firstName: string;
  username: string;
  email: string;
  roles: Record<Role, boolean>;
  id: string;
}

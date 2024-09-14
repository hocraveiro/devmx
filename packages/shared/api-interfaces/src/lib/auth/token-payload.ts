import { Role } from '../account';

export interface TokenPayload {
  firstName: string;
  username: string;
  email: string;
  roles: Record<Role, boolean>;
  sub: string;
}

import { Role } from '../account';

export interface TokenPayload {
  firstName: string;
  username: string;
  email: string;
  roles: Role[];
  sub: string;
}

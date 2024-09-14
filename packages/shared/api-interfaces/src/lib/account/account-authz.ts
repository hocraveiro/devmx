import { Role } from './role';

export interface AccountAuthz {
  id: string;
  roles: Record<Role, boolean>;
  active: boolean;
}

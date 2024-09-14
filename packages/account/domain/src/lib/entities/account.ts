import {
  Entity,
  AccountAuthn,
  AccountAuthz,
  AccountProfile,
} from '@devmx/shared-api-interfaces';

export interface Account
  extends Entity,
    AccountAuthn,
    AccountAuthz,
    AccountProfile {
  password: string;
}

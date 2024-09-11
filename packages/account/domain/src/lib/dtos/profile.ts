import { Account } from '../entities';

export type Profile = Omit<Account, 'password' | 'active'>;

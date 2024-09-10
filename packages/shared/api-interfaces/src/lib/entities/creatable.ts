import { Entity } from './entity';

export type Creatable<T extends Entity> = Omit<
  T,
  'id' | 'createdAt' | 'updatedAt'
>;

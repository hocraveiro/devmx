import { Entity, Creatable } from '../entities';

export interface CreateRepository<T extends Entity> {
  create(data: Creatable<T>): Promise<T>;
}

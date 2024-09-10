import { Entity, Updatable } from '../entities';

export interface UpdateRepository<T extends Entity> {
  update(data: Updatable<T>): Promise<T | null>;
}

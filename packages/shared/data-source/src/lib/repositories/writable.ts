import { Creatable, Entity, Updatable } from '@devmx/shared-api-interfaces';
import { ReadableRepository } from './readable';

export abstract class WritableRepository<
  T extends Entity
> extends ReadableRepository<T> {
  async create(data: Creatable<T>) {
    return this.repository.save(data);
  }

  async update(data: Updatable<T>) {
    return this.repository.save(data);
  }

  async remove(id: string) {
    this.repository.delete(id);
  }
}

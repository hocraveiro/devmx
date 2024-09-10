import { FindOptions } from './find-options';
import { Entity } from '../entities';
import { Page } from '../pagination';

export interface FindRepository<T extends Entity> {
  find(options: FindOptions<T>): Promise<Page<T>>;
}

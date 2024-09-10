import { FindOptions } from './find-options';
import { Page } from '../pagination/page';
import { Entity } from '../entities';

export interface FindRepository<T extends Entity> {
  find(options: FindOptions<T>): Promise<Page<T>>;
}

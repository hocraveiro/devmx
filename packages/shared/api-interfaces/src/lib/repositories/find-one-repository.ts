import { FindWhere } from './find-where';
import { Entity } from '../entities';

export interface FindOneRepository<T extends Entity> {
  findOne(options: FindWhere<T>): Promise<T | null>;
}

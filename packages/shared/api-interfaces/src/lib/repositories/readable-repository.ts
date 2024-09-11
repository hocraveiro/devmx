import { Entity } from '../entities';
import { FindOneRepository } from './find-one-repository';
import { FindRepository } from './find-repository';

export type ReadableRepository<T extends Entity> = FindOneRepository<T> &
  FindRepository<T>;

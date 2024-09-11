import { ReadableRepository } from './readable-repository';
import { CreateRepository } from './create-repository';
import { RemoveRepository } from './remove-repository';
import { UpdateRepository } from './update-repository';
import { Entity } from '../entities';

export type WritableRepository<T extends Entity> = ReadableRepository<T> &
  CreateRepository<T> &
  UpdateRepository<T> &
  RemoveRepository;

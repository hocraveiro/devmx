import { PageOptions } from '../pagination';
import { FindWhere } from './find-where';

export interface FindOptions<T> {
  page: PageOptions;
  where?: FindWhere<T>;
}

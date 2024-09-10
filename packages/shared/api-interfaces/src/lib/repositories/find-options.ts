import { PageOptions } from '../pagination/page-options';
import { FindWhere } from './find-where';

export interface FindOptions<T> {
  page: PageOptions;
  where?: FindWhere<T>;
}

import { SortOrder } from '../types';

export interface PageOptions {
  readonly order: SortOrder;

  readonly page: number;

  readonly take: number;

  readonly skip: number;
}

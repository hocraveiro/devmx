import { Entity, Page } from '@devmx/shared-api-interfaces';
import { Facade } from './facade';

interface EntityFacadeState<T extends Entity> extends Page<T> {
  selected: T | null;
  loading: boolean;
}

export const initialEntityFacadeState = {
  data: [],
  meta: {
    hasNextPage: false,
    hasPreviousPage: false,
    itemCount: 0,
    page: 1,
    pageCount: 0,
    take: 10,
  },
  loading: false,
  selected: null,
};

export abstract class EntityFacade<T extends Entity> extends Facade<
  EntityFacadeState<T>
> {
  selected$ = this.select((state) => state.selected);

  loading$ = this.select((state) => state.loading);

  data$ = this.select((state) => state.data);

  meta$ = this.select((state) => state.meta);
}

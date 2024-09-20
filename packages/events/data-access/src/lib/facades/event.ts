import { Facade } from '@devmx/shared-data-access';
import {
  Event,
  FindEventsClientUseCase
//   FindOneAccountClientUseCase,
//   UpdateAccountClientUseCase,
} from '@devmx/events-domain';
import { take } from 'rxjs';
import {
  Page,
  Updatable,
  FindWhere,
  FindOptions,
} from '@devmx/shared-api-interfaces';

interface EventState {
  events: Page<Event>;
  selected: Event | null;
}

const meta = {
  page: 1,
  take: 10,
  itemCount: 1,
  pageCount: 1,
  hasPreviousPage: false,
  hasNextPage: false,
};

export class EventFacade extends Facade<EventState> {
  selected$ = this.select((state) => state.selected);

  constructor(
    private readonly findEvents: FindEventsClientUseCase,
    // private readonly findOneAccount: FindOneAccountClientUseCase,
    // private readonly updateAccount: UpdateAccountClientUseCase
  ) {
    super({ events: { data: [], meta }, selected: null });
  }

  find(options: FindOptions<Event>) {
    const accounts$ = this.findEvents.execute(options).pipe(take(1));

    accounts$.subscribe((events) => this.setState({ events }));
  }

//   findOne(where: FindWhere<Account>) {
//     const accounts$ = this.findOneAccount.execute(where).pipe(take(1));

//     accounts$.subscribe((selected) => this.setState({ selected }));
//   }

//   update(data: Updatable<Account>) {
//     const account$ = this.updateAccount.execute(data).pipe(take(1));

//     account$.subscribe((selected) => this.setState({ selected }));
//   }
}

import { Facade } from '@devmx/shared-data-access';
import {
  Account,
  FindAccountsClientUseCase,
  FindOneAccountClientUseCase,
  UpdateAccountClientUseCase,
} from '@devmx/account-domain';
import { take } from 'rxjs';
import {
  Page,
  Updatable,
  FindWhere,
  FindOptions,
} from '@devmx/shared-api-interfaces';

interface AccountState {
  accounts: Page<Account>;
  selected: Account | null;
}

const meta = {
  page: 1,
  take: 10,
  itemCount: 1,
  pageCount: 1,
  hasPreviousPage: false,
  hasNextPage: false,
};

export class AccountFacade extends Facade<AccountState> {
  selected$ = this.select((state) => state.selected);

  constructor(
    private readonly findAccounts: FindAccountsClientUseCase,
    private readonly findOneAccount: FindOneAccountClientUseCase,
    private readonly updateAccount: UpdateAccountClientUseCase
  ) {
    super({ accounts: { data: [], meta }, selected: null });
  }

  find(options: FindOptions<Account>) {
    const accounts$ = this.findAccounts.execute(options).pipe(take(1));

    accounts$.subscribe((accounts) => this.setState({ accounts }));
  }

  findOne(where: FindWhere<Account>) {
    const accounts$ = this.findOneAccount.execute(where).pipe(take(1));

    accounts$.subscribe((selected) => this.setState({ selected }));
  }

  update(data: Updatable<Account>) {
    const account$ = this.updateAccount.execute(data).pipe(take(1));

    account$.subscribe((selected) => this.setState({ selected }));
  }
}

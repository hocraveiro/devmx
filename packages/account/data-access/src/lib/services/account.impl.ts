import {
  Page,
  FindWhere,
  AuthAccount,
  FindOptions,
  Updatable,
  AccountPassword,
} from '@devmx/shared-api-interfaces';
import { EnvClient, HttpClient } from '@devmx/shared-data-access';
import { Account, AccountService } from '@devmx/account-domain';

export class AccountServiceImpl implements AccountService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly env: EnvClient
  ) {}

  getAuthAccount() {
    const url = `${this.env.api}/accounts/auth`;
    return this.httpClient.get<AuthAccount>(url);
  }

  find(options: FindOptions<Account>) {
    const api = `${this.env.api}/accounts/auth`;
    const where = Object.entries(options.where ?? {});
    const page = Object.entries(options.page);
    const params = new URLSearchParams(...page, ...where);
    const url = `${api}?${params.toString()}`;
    return this.httpClient.get<Page<Account>>(url, { params });
  }

  findOne(where: FindWhere<Account>) {
    const api = `${this.env.api}/accounts/${where.id}`;
    const properties = Object.entries(where ?? {}) as [string, string][];
    const params = new URLSearchParams(properties);
    return this.httpClient.get<Account>(`${api}?${params.toString()}`);
  }

  update(value: Updatable<Account>) {
    const url = `${this.env.api}/accounts/${value.id}`;
    return this.httpClient.patch<Account>(url, value);
  }

  updatePassword(value: AccountPassword) {
    const url = `${this.env.api}/accounts/${value.id}/password`;
    return this.httpClient.patch<Account>(url, value);
  }
}

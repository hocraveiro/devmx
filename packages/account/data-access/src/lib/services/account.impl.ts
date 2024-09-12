import { EnvClient, HttpClient } from '@devmx/shared-data-access';
import { AuthAccount } from '@devmx/shared-api-interfaces';
import { AccountService } from '@devmx/account-domain';

export class AccountServiceImpl implements AccountService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly env: EnvClient
  ) {}

  getAuthAccount() {
    const url = `${this.env.api}/accounts/auth`;
    return this.httpClient.get<AuthAccount>(url);
  }
}

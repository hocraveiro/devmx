import { AuthAccount, UseCase } from '@devmx/shared-api-interfaces';
import { AccountService } from '../../../services';

export class GetAuthAccountClientUseCase implements UseCase<void, AuthAccount> {
  constructor(private readonly accountService: AccountService) {}

  execute() {
    return this.accountService.getAuthAccount();
  }
}

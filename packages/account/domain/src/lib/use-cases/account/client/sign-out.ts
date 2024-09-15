import { AccountService, StorageService } from '../../../services';
import { UseCase } from '@devmx/shared-api-interfaces';
import { map } from 'rxjs';

export class SignOutClientUseCase implements UseCase<void, null> {
  constructor(
    private readonly storageService: StorageService,
    private readonly accountService: AccountService
  ) {}

  execute() {
    this.storageService.removeItem('accessToken');

    return this.accountService.getAuthAccount().pipe(map(() => null));
  }
}

import { StorageService } from '@devmx/account-domain';

export function provideStorageServiceImpl(StorageServiceImpl: Storage) {
  return { provide: StorageService, useValue: StorageServiceImpl };
}

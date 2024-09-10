import { PresentationRepository } from '@devmx/account-domain';
import { PresentationEntity } from '../../entities';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Type } from '@devmx/shared-api-interfaces';
import { Repository } from 'typeorm';

export function providePresentationRepository(
  Repository: Type<PresentationRepository>
) {
  return {
    provide: PresentationRepository,
    useFactory(repository: Repository<PresentationEntity>) {
      return new Repository(repository);
    },
    inject: [getRepositoryToken(PresentationEntity)],
  };
}

export function providePresentationRepositoryTest(
  Repository: PresentationRepository
) {
  return {
    provide: PresentationRepository,
    useValue: Repository,
  };
}

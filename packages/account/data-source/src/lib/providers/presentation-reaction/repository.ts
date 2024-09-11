import { PresentationReactionRepository } from '@devmx/account-domain';
import { PresentationReactionEntity } from '../../entities';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Type } from '@devmx/shared-api-interfaces';
import { Repository } from 'typeorm';

export function providePresentationReactionRepository(
  Repository: Type<PresentationReactionRepository>
) {
  return {
    provide: PresentationReactionRepository,
    useFactory(repository: Repository<PresentationReactionEntity>) {
      return new Repository(repository);
    },
    inject: [getRepositoryToken(PresentationReactionEntity)],
  };
}

export function providePresentationReactionRepositoryTest(
  Repository: PresentationReactionRepository
) {
  return {
    provide: PresentationReactionRepository,
    useValue: Repository,
  };
}

import { PresentationReactionRepository } from '@devmx/account-domain';
import { PresentationReactionRepositoryImpl } from '../../repositories';
import { PresentationReactionEntity } from '../../entities';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export function providePresentationReactionRepository() {
  return {
    provide: PresentationReactionRepository,
    useFactory(repository: Repository<PresentationReactionEntity>) {
      return new PresentationReactionRepositoryImpl(repository);
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

import { PresentationRepository } from '@devmx/account-domain';
import { PresentationRepositoryImpl } from '../../repositories';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PresentationEntity } from '../../entities';
import { Repository } from 'typeorm';

export function providePresentationRepository() {
  return {
    provide: PresentationRepository,
    useFactory(repository: Repository<PresentationEntity>) {
      return new PresentationRepositoryImpl(repository);
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

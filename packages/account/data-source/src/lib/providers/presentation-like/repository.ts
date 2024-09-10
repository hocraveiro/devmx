import { PresentationLikeRepository } from '@devmx/account-domain';
import { PresentationLikeEntity } from '../../entities';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Type } from '@devmx/shared-api-interfaces';
import { Repository } from 'typeorm';

export function providePresentationLikeRepository(
  Repository: Type<PresentationLikeRepository>
) {
  return {
    provide: PresentationLikeRepository,
    useFactory(repository: Repository<PresentationLikeEntity>) {
      return new Repository(repository);
    },
    inject: [getRepositoryToken(PresentationLikeEntity)],
  };
}

export function providePresentationLikeRepositoryTest(
  Repository: PresentationLikeRepository
) {
  return {
    provide: PresentationLikeRepository,
    useValue: Repository,
  };
}

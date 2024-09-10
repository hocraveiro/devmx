import { PresentationCommentRepository } from '@devmx/account-domain';
import { PresentationCommentEntity } from '../../entities';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Type } from '@devmx/shared-api-interfaces';
import { Repository } from 'typeorm';

export function providePresentationCommentRepository(
  Repository: Type<PresentationCommentRepository>
) {
  return {
    provide: PresentationCommentRepository,
    useFactory(repository: Repository<PresentationCommentEntity>) {
      return new Repository(repository);
    },
    inject: [getRepositoryToken(PresentationCommentEntity)],
  };
}

export function providePresentationCommentRepositoryTest(
  Repository: PresentationCommentRepository
) {
  return {
    provide: PresentationCommentRepository,
    useValue: Repository,
  };
}

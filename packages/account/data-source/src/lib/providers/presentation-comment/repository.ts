import { PresentationCommentRepositoryImpl } from '../../repositories';
import { PresentationCommentRepository } from '@devmx/account-domain';
import { PresentationCommentEntity } from '../../entities';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export function providePresentationCommentRepository() {
  return {
    provide: PresentationCommentRepository,
    useFactory(repository: Repository<PresentationCommentEntity>) {
      return new PresentationCommentRepositoryImpl(repository);
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

import { EventRepository } from '@devmx/events-domain';
import { EventEntity } from '../../entities';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Type } from '@devmx/shared-api-interfaces';
import { Repository } from 'typeorm';

export function provideEventRepository(Repository: Type<EventRepository>) {
  return {
    provide: EventRepository,
    useFactory(repository: Repository<EventEntity>) {
      return new Repository(repository);
    },
    inject: [getRepositoryToken(EventEntity)],
  };
}

export function provideEventRepositoryTest(Repository: EventRepository) {
  return {
    provide: EventRepository,
    useValue: Repository,
  };
}

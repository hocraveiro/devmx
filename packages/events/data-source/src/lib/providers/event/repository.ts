import { EventRepository } from '@devmx/events-domain';
import { EventRepositoryImpl } from '../../repositories';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EventEntity } from '../../entities';
import { Repository } from 'typeorm';

export function provideEventRepository() {
  return {
    provide: EventRepository,
    useFactory(repository: Repository<EventEntity>) {
      return new EventRepositoryImpl(repository);
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

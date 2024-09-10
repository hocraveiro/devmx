import { RSVPRepository } from '@devmx/events-domain';
import { RSVPEntity } from '../../entities';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Type } from '@devmx/shared-api-interfaces';
import { Repository } from 'typeorm';

export function provideRSVPRepository(Repository: Type<RSVPRepository>) {
  return {
    provide: RSVPRepository,
    useFactory(repository: Repository<RSVPEntity>) {
      return new Repository(repository);
    },
    inject: [getRepositoryToken(RSVPEntity)],
  };
}

export function provideRSVPRepositoryTest(Repository: RSVPRepository) {
  return {
    provide: RSVPRepository,
    useValue: Repository,
  };
}

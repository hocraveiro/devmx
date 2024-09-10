import {
  Event,
  FindEventsServerUseCase,
  CreateEventServerUseCase,
  FindOneEventServerUseCase,
  UpdateEventServerUseCase,
  RemoveEventServerUseCase,
} from '@devmx/events-domain';
import {
  Creatable,
  FindOptions,
  FindWhere,
  Updatable,
} from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import { EventDto } from '../dtos';

export class EventFacade {
  constructor(
    private readonly createEventUseCase: CreateEventServerUseCase,
    private readonly findEventsUseCase: FindEventsServerUseCase,
    private readonly findOneEventUseCase: FindOneEventServerUseCase,
    private readonly updateEventUseCase: UpdateEventServerUseCase,
    private readonly removeEventUseCase: RemoveEventServerUseCase
  ) {}

  async create(data: Creatable<Event>) {
    const account = await this.createEventUseCase.execute(data);
    return plainToInstance(EventDto, account);
  }

  async find(options: FindOptions<Event>) {
    const { meta, data } = await this.findEventsUseCase.execute(options);
    return { meta, data: plainToInstance(EventDto, data) };
  }

  async findOne(data: FindWhere<Event>) {
    const account = await this.findOneEventUseCase.execute(data);
    return plainToInstance(EventDto, account);
  }

  async update(data: Updatable<Event>) {
    const account = await this.updateEventUseCase.execute(data);
    return plainToInstance(EventDto, account);
  }

  remove(id: string) {
    return this.removeEventUseCase.execute(id);
  }
}

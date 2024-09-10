import {
  RSVP,
  FindRSVPSServerUseCase,
  CreateRSVPServerUseCase,
  FindOneRSVPServerUseCase,
  UpdateRSVPServerUseCase,
  RemoveRSVPServerUseCase,
} from '@devmx/events-domain';
import {
  Creatable,
  FindOptions,
  FindWhere,
  Updatable,
} from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import { RSVPDto } from '../dtos';

export class RSVPFacade {
  constructor(
    private readonly createRSVPUseCase: CreateRSVPServerUseCase,
    private readonly findRSVPSUseCase: FindRSVPSServerUseCase,
    private readonly findOneRSVPUseCase: FindOneRSVPServerUseCase,
    private readonly updateRSVPUseCase: UpdateRSVPServerUseCase,
    private readonly removeRSVPUseCase: RemoveRSVPServerUseCase
  ) {}

  async create(data: Creatable<RSVP>) {
    const account = await this.createRSVPUseCase.execute(data);
    return plainToInstance(RSVPDto, account);
  }

  async find(options: FindOptions<RSVP>) {
    const { meta, data } = await this.findRSVPSUseCase.execute(options);
    return { meta, data: plainToInstance(RSVPDto, data) };
  }

  async findOne(data: FindWhere<RSVP>) {
    const account = await this.findOneRSVPUseCase.execute(data);
    return plainToInstance(RSVPDto, account);
  }

  async update(data: Updatable<RSVP>) {
    const account = await this.updateRSVPUseCase.execute(data);
    return plainToInstance(RSVPDto, account);
  }

  remove(id: string) {
    return this.removeRSVPUseCase.execute(id);
  }
}

import {
  Presentation,
  FindPresentationsServerUseCase,
  CreatePresentationServerUseCase,
  FindOnePresentationServerUseCase,
  UpdatePresentationServerUseCase,
  RemovePresentationServerUseCase,
} from '@devmx/account-domain';
import {
  Creatable,
  FindOptions,
  FindWhere,
  Updatable,
} from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import { PresentationDto } from '../dtos';

export class PresentationFacade {
  constructor(
    private readonly createPresentationUseCase: CreatePresentationServerUseCase,
    private readonly findPresentationsUseCase: FindPresentationsServerUseCase,
    private readonly findOnePresentationUseCase: FindOnePresentationServerUseCase,
    private readonly updatePresentationUseCase: UpdatePresentationServerUseCase,
    private readonly removePresentationUseCase: RemovePresentationServerUseCase
  ) {}

  async create(data: Creatable<Presentation>) {
    const account = await this.createPresentationUseCase.execute(data);
    return plainToInstance(PresentationDto, account);
  }

  async find(options: FindOptions<Presentation>) {
    const { meta, data } = await this.findPresentationsUseCase.execute(options);
    return { meta, data: plainToInstance(PresentationDto, data) };
  }

  async findOne(data: FindWhere<Presentation>) {
    const account = await this.findOnePresentationUseCase.execute(data);
    return plainToInstance(PresentationDto, account);
  }

  async update(data: Updatable<Presentation>) {
    const account = await this.updatePresentationUseCase.execute(data);
    return plainToInstance(PresentationDto, account);
  }

  remove(id: string) {
    return this.removePresentationUseCase.execute(id);
  }
}

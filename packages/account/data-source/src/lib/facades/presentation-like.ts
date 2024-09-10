import {
  PresentationLike,
  FindPresentationLikesServerUseCase,
  CreatePresentationLikeServerUseCase,
  FindOnePresentationLikeServerUseCase,
  UpdatePresentationLikeServerUseCase,
  RemovePresentationLikeServerUseCase,
} from '@devmx/account-domain';
import {
  Creatable,
  FindOptions,
  FindWhere,
  Updatable,
} from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import { PresentationLikeDto } from '../dtos';

export class PresentationLikeFacade {
  constructor(
    private readonly createPresentationLikeUseCase: CreatePresentationLikeServerUseCase,
    private readonly findPresentationLikesUseCase: FindPresentationLikesServerUseCase,
    private readonly findOnePresentationLikeUseCase: FindOnePresentationLikeServerUseCase,
    private readonly updatePresentationLikeUseCase: UpdatePresentationLikeServerUseCase,
    private readonly removePresentationLikeUseCase: RemovePresentationLikeServerUseCase
  ) {}

  async create(data: Creatable<PresentationLike>) {
    const account = await this.createPresentationLikeUseCase.execute(data);
    return plainToInstance(PresentationLikeDto, account);
  }

  async find(options: FindOptions<PresentationLike>) {
    const { meta, data } = await this.findPresentationLikesUseCase.execute(
      options
    );
    return { meta, data: plainToInstance(PresentationLikeDto, data) };
  }

  async findOne(data: FindWhere<PresentationLike>) {
    const account = await this.findOnePresentationLikeUseCase.execute(data);
    return plainToInstance(PresentationLikeDto, account);
  }

  async update(data: Updatable<PresentationLike>) {
    const account = await this.updatePresentationLikeUseCase.execute(data);
    return plainToInstance(PresentationLikeDto, account);
  }

  remove(id: string) {
    return this.removePresentationLikeUseCase.execute(id);
  }
}

import {
  PresentationComment,
  FindPresentationCommentsServerUseCase,
  CreatePresentationCommentServerUseCase,
  FindOnePresentationCommentServerUseCase,
  UpdatePresentationCommentServerUseCase,
  RemovePresentationCommentServerUseCase,
} from '@devmx/account-domain';
import {
  Creatable,
  FindOptions,
  FindWhere,
  Updatable,
} from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import { PresentationCommentDto } from '../dtos';

export class PresentationCommentFacade {
  constructor(
    private readonly createPresentationCommentUseCase: CreatePresentationCommentServerUseCase,
    private readonly findPresentationCommentsUseCase: FindPresentationCommentsServerUseCase,
    private readonly findOnePresentationCommentUseCase: FindOnePresentationCommentServerUseCase,
    private readonly updatePresentationCommentUseCase: UpdatePresentationCommentServerUseCase,
    private readonly removePresentationCommentUseCase: RemovePresentationCommentServerUseCase
  ) {}

  async create(data: Creatable<PresentationComment>) {
    const account = await this.createPresentationCommentUseCase.execute(data);
    return plainToInstance(PresentationCommentDto, account);
  }

  async find(options: FindOptions<PresentationComment>) {
    const { meta, data } = await this.findPresentationCommentsUseCase.execute(
      options
    );
    return { meta, data: plainToInstance(PresentationCommentDto, data) };
  }

  async findOne(data: FindWhere<PresentationComment>) {
    const account = await this.findOnePresentationCommentUseCase.execute(data);
    return plainToInstance(PresentationCommentDto, account);
  }

  async update(data: Updatable<PresentationComment>) {
    const account = await this.updatePresentationCommentUseCase.execute(data);
    return plainToInstance(PresentationCommentDto, account);
  }

  remove(id: string) {
    return this.removePresentationCommentUseCase.execute(id);
  }
}

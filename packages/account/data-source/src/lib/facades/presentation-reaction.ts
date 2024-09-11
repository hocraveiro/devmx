import {
  PresentationReaction,
  FindPresentationReactionsServerUseCase,
  CreatePresentationReactionServerUseCase,
  RemovePresentationReactionServerUseCase,
  CountPresentationReactionsServerUseCase,
  FindOnePresentationReactionServerUseCase,
} from '@devmx/account-domain';
import {
  Creatable,
  FindOptions,
  FindWhere,
} from '@devmx/shared-api-interfaces';
import { plainToInstance } from 'class-transformer';
import { PresentationReactionDto } from '../dtos';

export class PresentationReactionFacade {
  constructor(
    private readonly createPresentationReactionUseCase: CreatePresentationReactionServerUseCase,
    private readonly findPresentationReactionsUseCase: FindPresentationReactionsServerUseCase,
    private readonly findOnePresentationReactionUseCase: FindOnePresentationReactionServerUseCase,
    private readonly countPresentationReactionsUseCase: CountPresentationReactionsServerUseCase,
    private readonly removePresentationReactionUseCase: RemovePresentationReactionServerUseCase
  ) {}

  async create(data: Creatable<PresentationReaction>) {
    const account = await this.createPresentationReactionUseCase.execute(data);
    return plainToInstance(PresentationReactionDto, account);
  }

  async find(options: FindOptions<PresentationReaction>) {
    const { meta, data } = await this.findPresentationReactionsUseCase.execute(
      options
    );
    return { meta, data: plainToInstance(PresentationReactionDto, data) };
  }

  async findOne(data: FindWhere<PresentationReaction>) {
    const account = await this.findOnePresentationReactionUseCase.execute(data);
    return plainToInstance(PresentationReactionDto, account);
  }

  async count(options: FindWhere<PresentationReaction>) {
    return this.countPresentationReactionsUseCase.execute(options);
  }

  remove(id: string) {
    return this.removePresentationReactionUseCase.execute(id);
  }
}

import {
  Get,
  Body,
  Post,
  Param,
  Patch,
  Query,
  Delete,
  Controller,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import {
  PageOptionsDto,
  ApiPaginatedResponse,
} from '@devmx/shared-data-source';
import {
  PresentationDto,
  PresentationFacade,
  PresentationReactionDto,
  CreatePresentationDto,
  UpdatePresentationDto,
  PresentationCommentDto,
  CreatePresentationCommentDto,
  UpdatePresentationCommentDto,
  PresentationReactionFacade,
  PresentationCommentFacade,
  CreatePresentationReactionDto,
} from '@devmx/account-data-source';

@ApiTags('Apresentações')
@Controller('presentations')
export class PresentationsController {
  constructor(
    private readonly presentationFacade: PresentationFacade,
    private readonly presentationReactionFacade: PresentationReactionFacade,
    private readonly presentationCommentFacade: PresentationCommentFacade
  ) {}

  @Get()
  @ApiPaginatedResponse(PresentationDto)
  async find(@Query() page: PageOptionsDto) {
    return this.presentationFacade.find({ page });
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Presentation encontrada' })
  @ApiNotFoundResponse({ description: 'Presentation não encontrada' })
  async findOne(@Param('id') id: string) {
    try {
      return await this.presentationFacade.findOne({ id });
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Post()
  @ApiCreatedResponse({ description: 'Presentation criada com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao criar conta' })
  async create(@Body() createPresentation: CreatePresentationDto) {
    try {
      return await this.presentationFacade.create(createPresentation);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Presentation alterada com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao alterar conta' })
  async update(@Param('id') id: string, @Body() data: UpdatePresentationDto) {
    try {
      return await this.presentationFacade.update({ ...data, id });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Presentation apagada' })
  @ApiNotFoundResponse({ description: 'Presentation não encontrada' })
  @ApiBadRequestResponse({ description: 'Problema ao apagar conta' })
  async delete(@Param('id') id: string) {
    const presentation = await this.presentationFacade.findOne({ id });
    if (!presentation) throw new NotFoundException();

    try {
      return await this.presentationFacade.remove(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  /**
   *   ____                                     _
   *  / ___|___  _ __ ___  _ __ ___   ___ _ __ | |_ ___
   * | |   / _ \| '_ ` _ \| '_ ` _ \ / _ \ '_ \| __/ __|
   * | |__| (_) | | | | | | | | | | |  __/ | | | |_\__ \
   *  \____\___/|_| |_| |_|_| |_| |_|\___|_| |_|\__|___/
   */

  @Get(':id/comments')
  @ApiPaginatedResponse(PresentationCommentDto)
  async findComments(@Param('id') id: string, @Query() page: PageOptionsDto) {
    const where = { presentation: { id } };
    return this.presentationCommentFacade.find({ page, where });
  }

  @Get(':id/comments/:commentId')
  @ApiOkResponse({ description: 'Comentário encontrado' })
  @ApiNotFoundResponse({ description: 'Comentário não encontrado' })
  async findOneComment(
    @Param('id') id: string,
    @Param('commentId') commentId: string
  ) {
    try {
      const where = { id: commentId, presentation: { id } };
      return await this.presentationCommentFacade.findOne(where);
    } catch (err) {
      throw new NotFoundException(err);
    }
  }
  @Post(':id/comments')
  @ApiCreatedResponse({ description: 'Comentário criado com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao criar comentário' })
  async createComment(
    @Param('id') id: string,
    @Body() createPresentationComment: CreatePresentationCommentDto
  ) {
    const presentation = await this.findOne(id);
    try {
      return await this.presentationCommentFacade.create({
        ...createPresentationComment,
        presentation,
      });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
  @Patch(':id/comments/:commentId')
  @ApiOkResponse({ description: 'Comentário alterado com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao alterar comentário' })
  async updateComment(
    @Param('id') id: string,
    @Param('commentId') commentId: string,
    @Body() data: UpdatePresentationCommentDto
  ) {
    const presentation = await this.findOne(id);
    try {
      const comment = { ...data, presentation, id: commentId };
      return await this.presentationCommentFacade.update(comment);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
  @Delete(':id/comments/:commentId')
  @ApiOkResponse({ description: 'Comentário apagado' })
  @ApiNotFoundResponse({ description: 'Comentário não encontrado' })
  @ApiBadRequestResponse({ description: 'Problema ao apagar comentário' })
  async deleteComment(
    @Param('id') id: string,
    @Param('commentId') commentId: string
  ) {
    const where = { presentation: { id }, id: commentId };
    const comment = await this.presentationCommentFacade.findOne(where);
    if (!comment) throw new NotFoundException();

    try {
      return await this.presentationCommentFacade.remove(commentId);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  /**
   *  ____                 _   _
   * |  _ \ ___  __ _  ___| |_(_) ___  _ __  ___
   * | |_) / _ \/ _` |/ __| __| |/ _ \| '_ \/ __|
   * |  _ <  __/ (_| | (__| |_| | (_) | | | \__ \
   * |_| \_\___|\__,_|\___|\__|_|\___/|_| |_|___/
   */
  @Get(':id/reactions')
  @ApiPaginatedResponse(PresentationReactionDto)
  async findReactions(@Param('id') id: string, @Query() page: PageOptionsDto) {
    const where = { presentation: { id } };
    return this.presentationReactionFacade.find({ where, page });
  }

  @Post(':id/reactions')
  @ApiCreatedResponse({ description: 'Curtida criada' })
  @ApiBadRequestResponse({ description: 'Problema ao criar curtida' })
  async createReaction(
    @Param('id') _id: string,
    @Body() createPresentationReaction: CreatePresentationReactionDto
  ) {
    try {
      return await this.presentationReactionFacade.create(
        createPresentationReaction
      );
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id/reactions/:reactionId')
  @ApiOkResponse({ description: 'Curtida apagada' })
  @ApiNotFoundResponse({ description: 'Curtida não encontrada' })
  @ApiBadRequestResponse({ description: 'Problema ao apagar curtida' })
  async deleteReaction(
    @Param('id') id: string,
    @Param('reactionId') reactionId: string
  ) {
    const where = { presentation: { id }, id: reactionId };
    const reaction = await this.presentationReactionFacade.findOne(where);
    if (!reaction) throw new NotFoundException();

    try {
      return await this.presentationReactionFacade.remove(reactionId);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}

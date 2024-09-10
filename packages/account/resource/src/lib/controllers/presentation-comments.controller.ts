import {
  Body,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Delete,
  Controller,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  ApiPaginatedResponse,
  PageOptionsDto,
} from '@devmx/shared-data-source';
import {
  PresentationCommentDto,
  PresentationCommentFacade,
  CreatePresentationCommentDto,
  UpdatePresentationCommentDto,
} from '@devmx/account-data-source';

@ApiTags('Comentários em apresentações')
@Controller('presentations/:id/comments')
export class PresentationCommentsController {
  constructor(
    private readonly presentationCommentFacade: PresentationCommentFacade
  ) {}

  @Get()
  @ApiPaginatedResponse(PresentationCommentDto)
  async find(@Query() page: PageOptionsDto) {
    return this.presentationCommentFacade.find({ page });
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Comentário encontrado' })
  @ApiNotFoundResponse({ description: 'Comentário não encontrado' })
  async findOne(@Param('id') id: string) {
    try {
      return await this.presentationCommentFacade.findOne({ id });
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Post()
  @ApiCreatedResponse({ description: 'Comentário criado com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao criar comentário' })
  async create(
    @Body() createPresentationComment: CreatePresentationCommentDto
  ) {
    try {
      return await this.presentationCommentFacade.create(
        createPresentationComment
      );
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Comentário alterado com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao alterar comentário' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdatePresentationCommentDto
  ) {
    try {
      return await this.presentationCommentFacade.update({ ...data, id });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Comentário apagado' })
  @ApiNotFoundResponse({ description: 'Comentário não encontrado' })
  @ApiBadRequestResponse({ description: 'Problema ao apagar comentário' })
  async delete(@Param('id') id: string) {
    const presentationComment = await this.presentationCommentFacade.findOne({
      id,
    });
    if (!presentationComment) throw new NotFoundException();

    try {
      return await this.presentationCommentFacade.remove(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}

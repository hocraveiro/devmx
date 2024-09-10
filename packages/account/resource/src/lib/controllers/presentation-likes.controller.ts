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
  PresentationLikeDto,
  PresentationLikeFacade,
  CreatePresentationLikeDto,
  UpdatePresentationLikeDto,
} from '@devmx/account-data-source';

@ApiTags('PresentationLike')
@Controller('presentations/:id/likes')
export class PresentationLikesController {
  constructor(
    private readonly presentationLikeFacade: PresentationLikeFacade
  ) {}

  @Get()
  @ApiPaginatedResponse(PresentationLikeDto)
  async find(@Query() page: PageOptionsDto) {
    return this.presentationLikeFacade.find({ page });
  }

  @Get(':id')
  @ApiOkResponse({ description: 'PresentationLike encontrada' })
  @ApiNotFoundResponse({ description: 'PresentationLike não encontrada' })
  async findOne(@Param('id') id: string) {
    try {
      return await this.presentationLikeFacade.findOne({ id });
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Post()
  @ApiCreatedResponse({ description: 'PresentationLike criada com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao criar conta' })
  async create(@Body() createPresentationLike: CreatePresentationLikeDto) {
    try {
      return await this.presentationLikeFacade.create(createPresentationLike);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'PresentationLike alterada com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao alterar conta' })
  async update(
    @Param('id') id: string,
    @Body() data: UpdatePresentationLikeDto
  ) {
    try {
      return await this.presentationLikeFacade.update({ ...data, id });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'PresentationLike apagada' })
  @ApiNotFoundResponse({ description: 'PresentationLike não encontrada' })
  @ApiBadRequestResponse({ description: 'Problema ao apagar conta' })
  async delete(@Param('id') id: string) {
    const presentationLike = await this.presentationLikeFacade.findOne({ id });
    if (!presentationLike) throw new NotFoundException();

    try {
      return await this.presentationLikeFacade.remove(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}

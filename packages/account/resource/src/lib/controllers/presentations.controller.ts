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
  PresentationDto,
  PresentationFacade,
  CreatePresentationDto,
  UpdatePresentationDto,
} from '@devmx/account-data-source';

@ApiTags('Presentation')
@Controller('presentations')
export class PresentationsController {
  constructor(private readonly presentationFacade: PresentationFacade) {}

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
}

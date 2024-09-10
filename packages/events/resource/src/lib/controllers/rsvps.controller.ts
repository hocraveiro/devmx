import {
  Body,
  Get,
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
  RSVPDto,
  RSVPFacade,
  CreateRSVPDto,
  UpdateRSVPDto,
} from '@devmx/events-data-source';

@ApiTags('RSVP')
@Controller('events/:id/rsvps')
export class RSVPsController {
  constructor(private readonly rsvpFacade: RSVPFacade) {}

  @Get()
  @ApiPaginatedResponse(RSVPDto)
  async find(@Query() page: PageOptionsDto) {
    return this.rsvpFacade.find({ page });
  }

  @Get(':rsvpId')
  @ApiOkResponse({ description: 'RSVP encontrada' })
  @ApiNotFoundResponse({ description: 'RSVP não encontrada' })
  async findOne(@Param('rsvpId') rsvpId: string) {
    try {
      return await this.rsvpFacade.findOne({ id: rsvpId });
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Post()
  @ApiCreatedResponse({ description: 'RSVP criada com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao criar conta' })
  async create(@Body() createRSVP: CreateRSVPDto) {
    try {
      return await this.rsvpFacade.create(createRSVP);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Patch(':rsvpId')
  @ApiOkResponse({ description: 'RSVP alterada com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao alterar conta' })
  async update(@Param('rsvpId') rsvpId: string, @Body() data: UpdateRSVPDto) {
    try {
      return await this.rsvpFacade.update({ ...data, id: rsvpId });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':rsvpId')
  @ApiOkResponse({ description: 'RSVP apagada' })
  @ApiNotFoundResponse({ description: 'RSVP não encontrada' })
  @ApiBadRequestResponse({ description: 'Problema ao apagar conta' })
  async delete(@Param('rsvpId') rsvpId: string) {
    const rsvp = await this.rsvpFacade.findOne({ id: rsvpId });
    if (!rsvp) throw new NotFoundException();

    try {
      return await this.rsvpFacade.remove(rsvpId);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}

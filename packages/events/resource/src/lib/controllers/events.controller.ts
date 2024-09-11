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
  RSVPDto,
  EventDto,
  RSVPFacade,
  EventFacade,
  CreateEventDto,
  UpdateEventDto,
  CreateRSVPDto,
  UpdateRSVPDto,
} from '@devmx/events-data-source';

@ApiTags('Eventos')
@Controller('events')
export class EventsController {
  constructor(
    private readonly eventFacade: EventFacade,
    private readonly rsvpFacade: RSVPFacade
  ) {}

  @Get()
  @ApiPaginatedResponse(EventDto)
  async find(@Query() page: PageOptionsDto) {
    return this.eventFacade.find({ page });
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Event encontrada' })
  @ApiNotFoundResponse({ description: 'Event não encontrada' })
  async findOne(@Param('id') id: string) {
    try {
      return await this.eventFacade.findOne({ id });
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Post()
  @ApiCreatedResponse({ description: 'Event criada com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao criar conta' })
  async create(@Body() createEvent: CreateEventDto) {
    try {
      return await this.eventFacade.create(createEvent);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Event alterada com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao alterar conta' })
  async update(@Param('id') id: string, @Body() data: UpdateEventDto) {
    try {
      return await this.eventFacade.update({ ...data, id });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Event apagada' })
  @ApiNotFoundResponse({ description: 'Event não encontrada' })
  @ApiBadRequestResponse({ description: 'Problema ao apagar conta' })
  async delete(@Param('id') id: string) {
    const event = await this.eventFacade.findOne({ id });
    if (!event) throw new NotFoundException();

    try {
      return await this.eventFacade.remove(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  /**
   *  ____  ______     ______
   * |  _ \/ ___\ \   / /  _ \
   * | |_) \___ \\ \ / /| |_) |
   * |  _ < ___) |\ V / |  __/
   * |_| \_\____/  \_/  |_|
   */

  @Get(':id/rsvps')
  @ApiPaginatedResponse(RSVPDto)
  async findRSVPs(@Query() page: PageOptionsDto) {
    return this.rsvpFacade.find({ page });
  }

  @Get(':id/rsvps/:rsvpId')
  @ApiOkResponse({ description: 'RSVP encontrada' })
  @ApiNotFoundResponse({ description: 'RSVP não encontrada' })
  async findOneRSVP(@Param('rsvpId') rsvpId: string) {
    try {
      return await this.rsvpFacade.findOne({ id: rsvpId });
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Post(':id/rsvps')
  @ApiCreatedResponse({ description: 'RSVP criada com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao criar RSVP' })
  async createRSVP(@Body() createRSVP: CreateRSVPDto) {
    try {
      return await this.rsvpFacade.create(createRSVP);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Patch(':id/rsvps/:rsvpId')
  @ApiOkResponse({ description: 'RSVP alterada com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao alterar RSVP' })
  async updateRSVP(@Param('rsvpId') rsvpId: string, @Body() data: UpdateRSVPDto) {
    try {
      return await this.rsvpFacade.update({ ...data, id: rsvpId });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id/rsvps/:rsvpId')
  @ApiOkResponse({ description: 'RSVP apagada' })
  @ApiNotFoundResponse({ description: 'RSVP não encontrada' })
  @ApiBadRequestResponse({ description: 'Problema ao apagar RSVP' })
  async deleteRSVP(@Param('rsvpId') rsvpId: string) {
    const rsvp = await this.rsvpFacade.findOne({ id: rsvpId });
    if (!rsvp) throw new NotFoundException();

    try {
      return await this.rsvpFacade.remove(rsvpId);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}

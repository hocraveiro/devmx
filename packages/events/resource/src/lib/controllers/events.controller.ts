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
  EventDto,
  EventFacade,
  CreateEventDto,
  UpdateEventDto,
} from '@devmx/events-data-source';

@ApiTags('Event')
@Controller('events')
export class EventsController {
  constructor(private readonly eventFacade: EventFacade) {}

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
}

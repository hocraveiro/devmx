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
  AccountDto,
  AccountFacade,
  CreateAccountDto,
  UpdateAccountDto,
} from '@devmx/account-data-source';

@ApiTags('Account')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountFacade: AccountFacade) {}

  @Get()
  @ApiPaginatedResponse(AccountDto)
  async find(@Query() page: PageOptionsDto) {
    return this.accountFacade.find({ page });
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Account encontrada' })
  @ApiNotFoundResponse({ description: 'Account não encontrada' })
  async findOne(@Param('id') id: string) {
    try {
      return await this.accountFacade.findOne({ id });
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Post()
  @ApiCreatedResponse({ description: 'Account criada com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao criar conta' })
  async create(@Body() createAccount: CreateAccountDto) {
    try {
      return await this.accountFacade.create(createAccount);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Account alterada com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao alterar conta' })
  async update(@Param('id') id: string, @Body() data: UpdateAccountDto) {
    try {
      return await this.accountFacade.update({ ...data, id });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Account apagada' })
  @ApiNotFoundResponse({ description: 'Account não encontrada' })
  @ApiBadRequestResponse({ description: 'Problema ao apagar conta' })
  async delete(@Param('id') id: string) {
    const account = await this.accountFacade.findOne({ id });
    if (!account) throw new NotFoundException();

    try {
      return await this.accountFacade.remove(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}

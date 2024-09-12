import { AuthGuard, JwtAuthGuard, Roles } from '@devmx/shared-resource';
import {
  Get,
  Body,
  Post,
  Param,
  Patch,
  Query,
  Delete,
  Request,
  UseGuards,
  Controller,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import {
  AuthRequest,
  PageOptionsDto,
  ApiPaginatedResponse,
} from '@devmx/shared-data-source';
import {
  AccountDto,
  AccountFacade,
  AssignRolesDto,
  CreateAccountDto,
  UpdateAccountDto,
} from '@devmx/account-data-source';

@ApiBearerAuth()
@ApiTags('Contas')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountFacade: AccountFacade) {}

  @Get('auth')
  @UseGuards(AuthGuard, JwtAuthGuard)
  getProfile(@Request() req: AuthRequest) {
    return req.user;
  }

  @Get()
  @ApiPaginatedResponse(AccountDto)
  async find(@Query() page: PageOptionsDto) {
    return await this.accountFacade.find({ page });
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

  @Get(':id/presentations')
  @ApiOkResponse({ description: 'Apresentações' })
  @ApiNotFoundResponse({ description: 'A não encontrada' })
  async findPresentations(
    @Param('id') id: string,
    @Query() page: PageOptionsDto
  ) {
    const options = { page, where: { account: { id } } };
    try {
      return await this.accountFacade.findPresentationsByAccount(options);
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Post()
  @Roles('director', 'staff')
  @ApiCreatedResponse({ description: 'Conta criada com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao criar conta' })
  async create(@Body() createAccount: CreateAccountDto) {
    try {
      return await this.accountFacade.create(createAccount);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @Roles('director', 'staff')
  @ApiCreatedResponse({ description: 'Conta criada com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao criar conta' })
  async assignRoles(
    @Param('id') id: string,
    @Body() assignRoles: AssignRolesDto
  ) {
    if (id !== assignRoles.id) {
      throw new ForbiddenException();
    }

    try {
      return await this.accountFacade.update(assignRoles);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'Conta alterada com sucesso' })
  @ApiBadRequestResponse({ description: 'Problema ao alterar conta' })
  @ApiForbiddenResponse({
    description: 'Operação proibida para outros usuários',
  })
  async update(
    @Request() req: AuthRequest,
    @Param('id') id: string,
    @Body() data: UpdateAccountDto
  ) {
    if (req.user.id !== id) {
      throw new ForbiddenException();
    }

    try {
      return await this.accountFacade.update({ ...data, id });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'Conta apagada' })
  @ApiNotFoundResponse({ description: 'Account não encontrada' })
  @ApiBadRequestResponse({ description: 'Problema ao apagar conta' })
  @ApiForbiddenResponse({
    description: 'Operação proibida para outros usuários',
  })
  async delete(@Request() req: AuthRequest, @Param('id') id: string) {
    if (req.user.id !== id) {
      throw new ForbiddenException();
    }

    const account = await this.accountFacade.findOne({ id });
    if (!account) throw new NotFoundException();

    try {
      return account;
      // return await this.accountFacade.remove(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}

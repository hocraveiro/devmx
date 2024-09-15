import { AuthGuard, JwtAuthGuard, Roles } from '@devmx/shared-resource';
import { FileInterceptor } from '@nestjs/platform-express';
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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiBody,
  ApiConsumes,
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
import 'multer';
import { AccountPassword } from '@devmx/shared-api-interfaces';

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
  @Roles('director', 'manager', 'member')
  @ApiPaginatedResponse(AccountDto)
  async find(@Query() page: PageOptionsDto) {
    return await this.accountFacade.find({ page });
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Conta encontrada' })
  @ApiNotFoundResponse({ description: 'Conta não encontrada' })
  async findOne(@Param('id') id: string) {
    try {
      return await this.accountFacade.findOne({ id });
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  @Get(':id/presentations')
  @ApiOkResponse({ description: 'Apresentações' })
  @ApiNotFoundResponse({ description: 'Conta não encontrada' })
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
  @ApiForbiddenResponse({ description: 'Você não tem permissão' })
  @ApiBadRequestResponse({ description: 'Problema ao criar conta' })
  async create(@Body() createAccount: CreateAccountDto) {
    try {
      return await this.accountFacade.create(createAccount);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Post(':id/photo')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: { file: { type: 'string', format: 'binary' } },
    },
  })
  @ApiOkResponse({ description: 'Foto enviada com sucesso' })
  @ApiForbiddenResponse({ description: 'Você não tem permissão' })
  @ApiBadRequestResponse({ description: 'Problema ao enviar foto' })
  async upload(
    @Request() req: AuthRequest,
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File
  ) {
    if (req.user.id !== id) {
      throw new ForbiddenException();
    }

    console.log(file);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'Conta alterada com sucesso' })
  @ApiForbiddenResponse({ description: 'Você não tem permissão' })
  @ApiBadRequestResponse({ description: 'Problema ao alterar conta' })
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

  @Patch(':id/password')
  @UseGuards(JwtAuthGuard)
  @ApiCreatedResponse({ description: 'Senha alterada com sucesso' })
  @ApiForbiddenResponse({ description: 'Você não tem permissão' })
  @ApiBadRequestResponse({ description: 'Problema ao alterar senha' })
  async updatePassword(
    @Request() req: AuthRequest,
    @Param('id') id: string,
    @Body() passwords: AccountPassword
  ) {
    if (id !== req.user.id) {
      throw new ForbiddenException();
    }

    try {
      return await this.accountFacade.updatePassword(passwords);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  @Patch(':id/assign-roles')
  @UseGuards(JwtAuthGuard)
  @Roles('director', 'staff')
  @ApiCreatedResponse({ description: 'Conta criada com sucesso' })
  @ApiForbiddenResponse({ description: 'Você não tem permissão' })
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

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse({ description: 'Conta apagada' })
  @ApiNotFoundResponse({ description: 'Account não encontrada' })
  @ApiForbiddenResponse({ description: 'Você não tem permissão' })
  @ApiBadRequestResponse({ description: 'Problema ao apagar conta' })
  async delete(@Request() req: AuthRequest, @Param('id') id: string) {
    if (req.user.id !== id) {
      throw new ForbiddenException();
    }

    const account = await this.accountFacade.findOne({ id });
    if (!account) throw new NotFoundException();

    try {
      return await this.accountFacade.remove(id);
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}

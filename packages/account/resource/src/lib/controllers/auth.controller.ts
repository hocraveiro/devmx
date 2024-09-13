import { CheckUsernameDto } from '@devmx/account-data-source';
import { Allowed } from '@devmx/shared-resource';
import {
  Body,
  Post,
  Controller,
  BadRequestException,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import {
  SignInDto,
  SignUpDto,
  AuthenticationFacade,
} from '@devmx/account-data-source';
import {
  ApiTags,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
  ApiConflictResponse,
} from '@nestjs/swagger';

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
  constructor(private readonly facade: AuthenticationFacade) {}

  @Allowed()
  @Post('sign-in')
  @ApiOkResponse({ description: 'Token de autenticação' })
  @ApiUnauthorizedResponse({ description: 'Não autorizado' })
  async signIn(@Body() signInDto: SignInDto) {
    try {
      return await this.facade.signIn(signInDto);
    } catch (err) {
      if (err instanceof Error) {
        throw new UnauthorizedException(err.message);
      } else {
        throw new UnauthorizedException();
      }
    }
  }

  @Allowed()
  @Post('sign-up')
  @ApiCreatedResponse({ description: 'Conta criada' })
  @ApiBadRequestResponse({ description: 'Problema ao criar conta' })
  async signUp(@Body() signUpDto: SignUpDto) {
    try {
      return await this.facade.signUp(signUpDto);
    } catch (err) {
      if (err instanceof Error) {
        throw new BadRequestException(err.message);
      } else {
        throw new BadRequestException();
      }
    }
  }

  @Allowed()
  @Post('check-username')
  @ApiOkResponse({ description: 'Usuário disponível' })
  @ApiConflictResponse({ description: 'Usuário já existe' })
  async checkUsername(@Body() checkUsernameDto: CheckUsernameDto) {
    try {
      return await this.facade.checkUsername(checkUsernameDto);

    } catch (err) {
      if (err instanceof Error) {
        throw new ConflictException(err.message);
      } else {
        throw new ConflictException();
      }
    }
  }
}

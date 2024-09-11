import {
  Body,
  Post,
  Controller,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  SignInDto,
  SignUpDto,
  AuthenticationFacade,
} from '@devmx/account-data-source';
import {
  ApiTags,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

@ApiTags('Autenticação')
@Controller('auth')
export class AuthController {
  constructor(private readonly facade: AuthenticationFacade) {}

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
}

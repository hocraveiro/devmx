import { AuthRequest, EnvServer } from '@devmx/shared-data-source';
import { IS_ALLOWED_KEY } from '../decorators';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
    private env: EnvServer
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (this.isAllowed(context)) {
      return true;
    }

    const request = context.switchToHttp().getRequest<AuthRequest>();

    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const user = await this.jwtService.verifyAsync(token, {
        secret: this.env.jwt.secret,
      });

      request['user'] = user;
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }

  isAllowed(context: ExecutionContext) {
    const metaKey = IS_ALLOWED_KEY;
    const targets = [context.getHandler(), context.getClass()];
    return this.reflector.getAllAndOverride<boolean>(metaKey, targets);
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}

import { AuthAccount, TokenPayload } from '@devmx/shared-api-interfaces';
import { EnvServer } from '@devmx/shared-data-source';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(envServer: EnvServer) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: envServer.jwt.secret,
    });
  }

  validate({ username, email, firstName, roles, sub }: TokenPayload): AuthAccount {
    return { username, email, firstName, roles, id: sub };
  }
}

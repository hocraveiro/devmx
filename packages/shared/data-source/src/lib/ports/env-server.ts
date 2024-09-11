import {
  EnvServerJwt,
  EnvServerOAuth,
  EnvServerDatabase,
  EnvServerOAuthProvider,
} from '@devmx/shared-api-interfaces';

export abstract class EnvServer {
  abstract db: EnvServerDatabase;
  abstract jwt: EnvServerJwt;
  abstract oAuth: Record<EnvServerOAuthProvider, EnvServerOAuth>;
}

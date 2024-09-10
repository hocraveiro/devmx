interface EnvServerDatabase {
  name: string | undefined;
  password: string | undefined;
}

interface EnvServerOAuth {
  clientID: string;
  clientSecret: string;
  callbackURL: string
}

type EnvServerOAuthProvider = 'github';

export abstract class EnvServer {
  abstract db: EnvServerDatabase;
  abstract oAuth: Record<EnvServerOAuthProvider, EnvServerOAuth>;
}

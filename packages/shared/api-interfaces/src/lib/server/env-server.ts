export interface EnvServerDatabase {
  name: string | undefined;
  password: string | undefined;
}

export interface EnvServerJwt {
  secret: string;
}

export interface EnvServerOAuth {
  clientID: string;
  clientSecret: string;
  callbackURL: string;
}

export type EnvServerOAuthProvider = 'github';

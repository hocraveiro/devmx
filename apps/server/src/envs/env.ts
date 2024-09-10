export const env = {
  db: {
    name: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
  },
  oAuth: {
    github: {
      clientID: process.env.GITHUB_OAUTH2_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_OAUTH2_CLIENT_SECRET ?? '',
      callbackURL: process.env.GITHUB_OAUTH2_CALLBACK_URL ?? ''
    },
  },
};
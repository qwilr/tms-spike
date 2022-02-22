export interface BaseConfiguration {
  userId: string;
  oAuth: {
    accessToken: string;
    refreshToken: string;
  };
}

export default class ConfigurationService {}
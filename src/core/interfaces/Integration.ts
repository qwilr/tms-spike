import { BaseConfiguration } from '../IntegrationConfiguration/configuration.service';

export enum Environment {
  PROD = 'PROD',
  STAGING = 'STAGING',
  DEV = 'DEV',
}

export interface Integration {
  readonly PROVIDER_NAME: string;
  readonly ENABLED_ENVIRONMENTS: Environment[];

  setConfigurationForUser(
    userId: string,
    configurationPayload: BaseConfiguration,
  );
  getConfigurationForUser(userId: string): BaseConfiguration;

  getResolver(): any;
  getRetriever(): any;
}

import { Environment, Integration } from '../../core/interfaces/Integration';
import ZohoTokenResolver from './zoho-token.resolver';
import ZohoTokenRetriever from './zoho-token.retriever';
import ConfigurationService, {
  ConfigurationPayload,
} from '../../core/IntegrationConfiguration/configuration.service';

enum ZohoObjectType {
  CUSTOMER = 'customer',
  DEAL = 'deal',
  PRODUCT = 'product',
}

export default class ZohoIntegration implements Integration {
  readonly PROVIDER_NAME = 'zoho';
  readonly FRIENDLY_NAME = 'Zoho';
  readonly ENABLED_ENVIRONMENTS = [Environment.DEV];
  readonly OBJECT_TYPES = [
    ZohoObjectType.CUSTOMER,
    ZohoObjectType.DEAL,
    ZohoObjectType.PRODUCT,
  ];

  private resolver: ZohoTokenResolver;
  private retriever: ZohoTokenRetriever;
  private configurationService: ConfigurationService;

  public enabledEnvironments() {
    return [Environment.DEV];
  }

  public getResolver(): any {
    return {};
  }

  public getRetriever(): any {
    return {};
  }

  public setConfigurationForUser(
    userId: string,
    configuration: ConfigurationPayload,
  ) {
    configurationService.setConfigurationForUser(userId, configuration);
  }

  public getConfigurationForUser(userId: string): ConfigurationPayload {
    return undefined;
  }
}

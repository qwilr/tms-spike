import { Integration } from '../interfaces/Integration';
import ZohoIntegration from '../../providers/zoho/zoho-integration.service';

export default class IntegrationRegistrationService {
  private integrationMap: Map<string, Integration>;

  constructor(zohoIntegration: ZohoIntegration) {
    this.integrationMap = new Map<string, Integration>();

    if(zohoIntegration.ENABLED_ENVIRONMENTS contains CURRENT_ENVIRONMENT) {
      this.integrationMap.set(zohoIntegration.PROVIDER_NAME, zohoIntegration);
    }


  }

  public getProviderForName(
    userId: string,
    providerName: string,
  ): Integration | undefined {




    return this.integrationMap.get(providerName);
  }

  public getAllProvidersForUser(userId: string): Integration[] {
    return [];
  }
}

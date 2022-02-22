import { Controller, Get } from '@nestjs/common';
import { TokenRetrievalService } from './token-retrieval.service';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import IntegrationRegistrationService from '../IntegrationRegistration/integration-registration.service';

interface TokensQuery {
  providerName?: string;
}

@Controller('/tokens')
export class TokenRetrievalController {
  constructor(
    private readonly registrationService: IntegrationRegistrationService,
    @InjectPinoLogger(TokenRetrievalController.name)
    private readonly logger: PinoLogger,
  ) {}

  @Get()
  getTokens(query: TokensQuery): string {
    this.logger.info('testing logger');
    if (query.providerName) {
      const selectedProvider = this.registrationService.getProviderForName(
        '',
        '');
      if (!selectedProvider) {
        return "error couldn't find a provider for blah";
      }

      return selectedProvider.getRetriever().getTokens(query);
    }
    return this.registrationService
      .getProviderForName('', '')
      .getRetriever()
      .getTokens(query);
  }
}

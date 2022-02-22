import { Injectable } from '@nestjs/common';

class TokenQuery {}

@Injectable()
export class TokenRetrievalService {
  public getTokens(query: TokenQuery): string {
    return 'tokens';
  }
}

import { Injectable } from '@nestjs/common';

class TokenQuery {}

type ResolvedToken = string | { [key: string]: string };

@Injectable()
export class TokenResolutionService {

  constructor() {

  }

  public resolveValues(tokenIds: string[]): Map<string, ResolvedToken> {
    return new Map();
  }
}

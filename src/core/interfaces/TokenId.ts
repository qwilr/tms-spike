export class TokenId {
  constructor(
    public readonly providerType: string,
    public readonly components: string[],
  ) {}

  public asString(): string {
    const encodedComponents = this.components.map(encodeURIComponent).join(':');
    return `token:${this.providerType}:${encodedComponents}`;
  }
}
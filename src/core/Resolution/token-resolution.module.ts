import { Module } from '@nestjs/common';
import { TokenResolutionService } from './token-resolution.service';

@Module({
  imports: [],
  controllers: [],
  providers: [TokenResolutionService],
})
export class TokenResolutionModule {}

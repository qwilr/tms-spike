import { Module } from '@nestjs/common';
import { TokenRetrievalService } from './token-retrieval.service';
import { TokenRetrievalController } from './token-retrieval.controller';

@Module({
  imports: [],
  controllers: [TokenRetrievalController],
  providers: [TokenRetrievalService],
})
export class TokenRetrievalModule {}

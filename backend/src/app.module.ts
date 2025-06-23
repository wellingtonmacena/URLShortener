import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamoService } from './dynamodb.service';
import { DynamoModule } from './dynamodb.module';

@Module({
  imports: [DynamoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

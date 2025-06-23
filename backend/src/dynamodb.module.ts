import { Module } from '@nestjs/common';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoService } from './dynamodb.service';


@Module({
  providers: [
    {
      provide: 'DYNAMO_CLIENT',
      useFactory: () => {
        return new DynamoDBClient({
          region: 'us-east-1',
          endpoint: 'http://localhost:4566', // Dynamo local
          credentials: {
            accessKeyId: 'fake',
            secretAccessKey: 'fake',
          },
        });
      },
    },
    DynamoService,
  ],
  exports: ['DYNAMO_CLIENT', DynamoService],
})
export class DynamoModule {}

import { Injectable, Inject } from '@nestjs/common';
import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
} from '@aws-sdk/lib-dynamodb';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

@Injectable()
export class DynamoService {
  private docClient: DynamoDBDocumentClient;

  constructor(
    @Inject('DYNAMO_CLIENT') private readonly client: DynamoDBClient,
  ) {
    this.docClient = DynamoDBDocumentClient.from(client);
  }

  async getItem(tableName: string, key: Record<string, any>) {
    const command = new GetCommand({
      TableName: tableName,
      Key: key,
    });
    const response = await this.docClient.send(command);
    return response.Item;
  }

  async putItem(tableName: string, item: Record<string, any>) {
    const command = new PutCommand({
      TableName: tableName,
      Item: item,
    });
    await this.docClient.send(command);
  }
}

import { Injectable } from '@nestjs/common';
import { DynamoService } from './dynamodb.service';
// You must import DynamoService from its correct path

@Injectable()
export class AppService {
  constructor(private readonly dynamoService: DynamoService) {
    var tableName = 'url-shortener';
  }

  getHello(): string {
    return 'Hello World!';
  }

  async createNewURL(originalUrl: string): Promise<any> {
    const newUrl = this.generateAlphanumericCode(6);
    const item = {
      key: newUrl,
      originalUrl,
      createdAt: new Date().toISOString(),
    };

    var ret = await this.dynamoService.putItem('url-shortener', item);
    console.log(`ret: ${ret}`);
    console.log(`Creating new URL with ID: ${newUrl}`);
    return item;
  }

  async getUrl(url: string): Promise<Record<string, any> | undefined> {

    var ret = await this.dynamoService.getItem('url-shortener', { key: url });
    return ret;
  }

  generateAlphanumericCode(length: number = 8): string {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}

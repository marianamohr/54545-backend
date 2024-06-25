import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  getHello(): string {
    this.logger.log('Returning Hello World!');
    this.logger.error('Returning Hello World!');
    this.logger.warn('Returning Hello World!');
    this.logger.debug('Returning Hello World!');
    this.logger.verbose('Returning Hello World!');
    this.logger.fatal('Returning Hello World!');
    return 'Hello World!';
  }
}

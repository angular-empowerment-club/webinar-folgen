import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export class Swagger {
  static instrument(app: INestApplication) {
    const options = new DocumentBuilder()
      .setTitle('Socks API')
      .setDescription('Stocks that rocks')
      .setVersion('1.0')
      .addTag('stocks')
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/api', app, document);
  }
}

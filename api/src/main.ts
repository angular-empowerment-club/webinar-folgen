import { NestFactory } from '@nestjs/core';

import { ApplicationModule } from './app.module';
import { Swagger } from './core';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	app.enableCors();
  Swagger.instrument(app);
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common'; // IMPORTING LOGGER

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  const port = parseInt(`${process.env.PORT}`) || 3000;
  await app
    .listen(port)
    .catch((err) => {
      throw new err();
    })
    .then(() => logger.log(`Application running on port ${port}`));
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix('api/v1');
  app.enableCors({
    origin: '*', // Allow all origins (you can specify only your frontend domain in production)
    methods: 'GET, POST, PUT, DELETE', // Allow the required HTTP methods
    allowedHeaders: 'Content-Type, Authorization', // Set any headers your API might use
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

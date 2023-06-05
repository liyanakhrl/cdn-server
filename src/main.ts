/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.useGlobalPipes(new ValidationPipe());
  // Create Swagger document options
  const options = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API documentation for your NestJS application')
    .setVersion('1.0')
    .build();

  // Generate Swagger document
  const document = SwaggerModule.createDocument(app, options);

  // Add Swagger UI to the application
  SwaggerModule.setup('api', app, document);
  await app.listen(8080);//3000);
}
bootstrap();

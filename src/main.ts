import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validaciones globales
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  // Configuración Swagger
  const config = new DocumentBuilder()
    .setTitle('HouseFinder API')
    .setDescription('Documentación de la API de propiedades y usuarios')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('properties')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Habilitar CORS
  app.enableCors({
    origin: '*',
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();

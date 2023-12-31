import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { setDefaultAutoSelectFamilyAttemptTimeout } from 'net';
import { config } from 'rxjs';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const port = 3000 || process.env.PORT;

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Nest-Project')
    .setVersion('1.0.0')
    .addTag('User')
    .addServer('http://localhost:3000', 'Local')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(port);

  console.log('http://localhost:' + port + '/docs');
}
bootstrap();

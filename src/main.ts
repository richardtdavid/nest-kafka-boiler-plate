import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common'
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

function setupSwagger(app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('api-boiler-plate (v1)')
    .setDescription('boiler-plate')
    .setVersion('1.0')
    .addBearerAuth()
    .addSecurityRequirements('bearer')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app)
  await app.listen(3000);
}
bootstrap();

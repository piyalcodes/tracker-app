import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  /*
  app.use(
    cors({
      origin: "*",
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
      optionsSuccessStatus: 204,
    }),
  );
*/

const options = {
  "origin": "/**",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  "credentials":true
}
//app.use(cors(options))
app.enableCors(options)

 
 

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8080);
}
bootstrap();

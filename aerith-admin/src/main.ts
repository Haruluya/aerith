import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //配置swagger。
  const options = new DocumentBuilder()
  .setTitle('Aerith\'s game froum')
  .setDescription('API DESCRIPTION FRO THE PROJECT')
  .setVersion('1.0.0')
  .addTag('Test')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('aerith-api', app, document);
  
  await app.listen(8000);
  // 热重载配置。
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

console.log("aerith is running!");
bootstrap();




import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
  // 热重载配置。
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

console.log("aerith is running!");
bootstrap();




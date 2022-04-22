import { Module, Global} from '@nestjs/common';
import { databaseProviders } from './database.providers';

// database的导出者。
@Global()
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})

export class DatabaseModule {}

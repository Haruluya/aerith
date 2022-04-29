import { Module } from '@nestjs/common';
import { FocusController } from './focus.controller';

@Module({
  controllers: [FocusController]
})
export class FocusModule {}

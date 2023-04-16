import { Module } from '@nestjs/common';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {LogSchema} from './schemas/log.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'logs', schema: LogSchema }])],
  controllers: [LogsController],
  providers: [LogsService]
})
export class LogsModule {}

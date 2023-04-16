import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogsModule } from './logs/logs.module';
import { TestModule } from './test/test.module';


@Module({
  imports: [LogsModule, MongooseModule.forRoot('mongodb+srv://piyalcodes:0CAXatH6hZuK5lqC@store.4z9iw.mongodb.net/tracker'), TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}







 
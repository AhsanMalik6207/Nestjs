import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosController } from './controller/ todo.controller';
import { TodosService } from './provider/todo.service';
import { devConfig } from './config/database.config';
import {TodosModule} from './module/ todo.module'
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

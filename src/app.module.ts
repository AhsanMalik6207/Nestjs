import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { QuizController } from './modules/quiz/controller/quiz.controller';
import { QuizModule } from './modules/quiz/quiz.module';

//The root module of the application.
// we use controller and providers
@Module({
  //forRoot used where is typeorm entry point
  imports:[QuizModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

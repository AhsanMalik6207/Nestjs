import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizController } from './modules/quiz/quiz.controller';
import { QuizModule } from './modules/quiz/quiz.module';

//The root module of the application.
@Module({
  imports:[QuizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

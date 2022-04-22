import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { QuizController } from './modules/quiz/controller/quiz.controller';
import { QuizModule } from './modules/quiz/quiz.module';
import { UserModule } from './modules/user/user.module';

//The root module of the application.
// we use controller and providers
@Module({
  //forRoot used where is typeorm entry point
  imports:[ ConfigModule.forRoot({isGlobal: true}),
     TypeOrmModule.forRootAsync(typeOrmConfigAsync),QuizModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

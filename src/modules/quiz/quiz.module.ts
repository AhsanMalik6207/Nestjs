import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
// first creating module using nest g mo modules/quiz
// second create controller using nest g co modules/quiz
// third create service dependencey injection
@Module({
    providers: [QuizService],
    controllers: [QuizController],
})
export class QuizModule {}

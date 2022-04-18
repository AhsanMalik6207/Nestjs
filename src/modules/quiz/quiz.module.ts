import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestoinController } from './question.controller';
import { QuestionRepository } from './question.repository';
import { QuestoinService } from './question.service';
import { QuizController } from './quiz.controller';
import { QuizRepository } from './quiz.repository';
import { QuizService } from './quiz.service';
// first creating module using nest g mo modules/quiz
// second create controller using nest g co modules/quiz
// third create service dependencey injection
@Module({
    providers: [QuizService, QuestoinService],
    controllers: [QuizController, QuestoinController],
    imports: [TypeOrmModule.forFeature([QuizRepository,QuestionRepository])]
})
export class QuizModule {}

import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestoinController } from './controller/question.controller';
import { QuestionRepository } from './repositories/question.repository';
import { QuestoinService } from './services/question.service';
import { QuizController } from './controller/quiz.controller';
import { QuizRepository } from './repositories/quiz.repository';
import { QuizService } from './services/quiz.service';
import { OptionRepository } from './repositories/option.repository';
import { OptionController } from './controller/option.controller';
import { OptionService } from './services/option.service';
import { AuditMiddleware } from 'src/middlewares/audit.middleware';
// first creating module using nest g mo modules/quiz
// second create controller using nest g co modules/quiz
// third create service dependencey injection
@Module({
    providers: [QuizService, QuestoinService, OptionService],
    controllers: [QuizController, QuestoinController, OptionController],
    imports: [TypeOrmModule.forFeature([QuizRepository,QuestionRepository,OptionRepository])]
})
export class QuizModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(AuditMiddleware)
        .forRoutes({path: 'quiz/*', method:RequestMethod.POST})
    }
}

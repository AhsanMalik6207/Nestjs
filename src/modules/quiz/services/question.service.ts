import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { Question } from "../entities/question.entity";
import { QuestionRepository } from "../repositories/question.repository";
import { Quiz } from "../entities/quiz.entity";

@Injectable()
export class QuestoinService{
      constructor(@InjectRepository(QuestionRepository) 
      private questionRepositoy:QuestionRepository){}

      findQuestionById(id: number): Promise<Question>{
            return this.questionRepositoy.findOne(id, {relations: ['quiz', 'options']})
      }

      async createQuestion(question: CreateQuestionDto, quiz:Quiz): Promise<Question>{
          // save return the promises then entity
       const newQuestion = await this.questionRepositoy.save({
             question: question.question
       });

       quiz.questions = [...quiz.questions, newQuestion];

       await quiz.save()

       return newQuestion;
      }
}
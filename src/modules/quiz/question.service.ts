import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { Question } from "./question.entity";
import { QuestionRepository } from "./question.repository";

@Injectable()
export class QuestoinService{
      constructor(@InjectRepository(QuestionRepository) 
      private questionRepositoy:QuestionRepository){}

      async createQuestion(question: CreateQuestionDto): Promise<Question>{
          // save return the promises then entity
       return await this.questionRepositoy.save(question);
      }
}
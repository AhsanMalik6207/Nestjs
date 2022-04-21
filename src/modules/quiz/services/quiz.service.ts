import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { Question } from "../entities/question.entity";
import { Quiz } from "../entities/quiz.entity";
import { QuizRepository } from "../repositories/quiz.repository";

// Service is injectable to controller
@Injectable()
export class QuizService {
    constructor(@InjectRepository(QuizRepository) private quizRepository:QuizRepository, ){}

    // typeorm allow us to make custom query through query builder
    async getAllQuiz(): Promise<Quiz[]>{
        return await this.quizRepository.createQueryBuilder('q')
        .leftJoinAndSelect('q.questions','qt')
        .leftJoinAndSelect('qt.options','o').getMany();
    }

    async getQuizById(id:number): Promise<Quiz>{
          return await this.quizRepository.findOne(id, {relations: ['questions']});
    }
    async createNewQuiz(quiz: CreateQuizDto){
        return await this.quizRepository.save(quiz);
    }
}
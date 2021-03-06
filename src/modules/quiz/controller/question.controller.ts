import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "../dto/create-question.dto";
import { Question } from "../entities/question.entity";
import { QuestoinService } from "../services/question.service";
import { QuizService } from "../services/quiz.service";



@Controller('question')
export class QuestoinController {
    constructor(private questionService:QuestoinService, private quizService: QuizService){}

    
    @Post('')
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() question:CreateQuestionDto): Promise<Question> {

        const quiz = await this.quizService.getQuizById(question.quizId);
        
        return await this.questionService.createQuestion(question,quiz);
    }

}
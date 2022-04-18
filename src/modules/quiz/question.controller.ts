import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { Question } from "./question.entity";
import { QuestoinService } from "./question.service";



@Controller('question')
export class QuestoinController {
    constructor(private questionService:QuestoinService){}
    @Post('')
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() question:CreateQuestionDto): Promise<Question> {
      
        return await this.questionService.createQuestion(question);
    }

}
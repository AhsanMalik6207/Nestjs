import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateOptonDto } from "../dto/create-option.dto";
import { OptionService } from "../services/option.service";
import { QuestoinService } from "../services/question.service";


@Controller("question/option")
export class OptionController {
    constructor(private optionService:OptionService, private questionService:QuestoinService){}

    @Post('')
    @UsePipes(ValidationPipe)
     saveOptionToQuestion(@Body() createOption:CreateOptonDto){
         return createOption;
     }
}
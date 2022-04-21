import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateOptonDto } from "../dto/create-option.dto";
import { Question } from "../entities/question.entity";
import { OptionRepository } from "../repositories/option.repository";

@Injectable()
export class OptionService{
// service need to inject repository
    constructor(@InjectRepository(OptionRepository) 
    private optionRepository:OptionRepository,){}

    async createOption(option: CreateOptonDto, question:Question){

        const newOption = await this.optionRepository.save({
            text: option.text,
            isCorrect: option.isCorrect,
        });

        question.options = [...question.options, newOption];
        await question.save();

        
        return newOption;

    }

}
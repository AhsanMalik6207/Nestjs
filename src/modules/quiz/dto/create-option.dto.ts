import { IsNotEmpty, Length } from "class-validator";
// DTO(data transfer object) runs validation.
export class CreateOptonDto {
    @IsNotEmpty()
    @Length(2,255)
    text:string;
    
    @IsNotEmpty()
    questionId:number; 

    @IsNotEmpty()
    isCorrect: boolean;

}
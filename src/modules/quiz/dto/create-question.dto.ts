import { IsNotEmpty, Length } from "class-validator";
// DTO(data transfer object) runs validation.
export class CreateQuestionDto {
    @IsNotEmpty()
    @Length(3,255)
    question:string;

}
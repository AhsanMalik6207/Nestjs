import { IsNotEmpty, Length } from "class-validator";
// DTO(data transfer object) runs validation.
export class CreateQuizDto {
    @IsNotEmpty({message:"The quiz should have a title"})
    @Length(3,255)
    title:string;

    @IsNotEmpty()
    @Length(3)
    description:string;
}
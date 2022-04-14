import { Injectable } from "@nestjs/common";
// Service is injectable to controller
@Injectable()
export class QuizService {
    getAllQuiz(){
        return [1,2,3,4, 'From the service'];
    }
}
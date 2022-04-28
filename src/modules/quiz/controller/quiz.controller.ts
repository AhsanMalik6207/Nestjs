import { Body, CacheInterceptor, CacheKey, CacheTTL, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';
import {BenchmarkInterceptor} from '../../../interceptors/benchmark.interceptor'

@Controller("quiz")
@UseInterceptors(CacheInterceptor,BenchmarkInterceptor)
export class QuizController {

    constructor(private quizService: QuizService) {}

    @Get("/")
    @CacheKey('allQuizs')
    @CacheTTL(15)
    @ApiOperation({summary: " get all data from this api "})
    @ApiResponse({
        status:200,
        description: ' All data list'
    })   
    @ApiResponse({
        status:403,
        description: 'forbidden'
    })
    getAllQuiz(): Promise<Quiz[]>{
        return this.quizService.getAllQuiz();
    }

    @Get('/:id')
    @CacheTTL(30)
    async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz>{
             return await this.quizService.getQuizById(id);
    }

    @Post("/create")
    @HttpCode(200)
    // for validation we use pipes (DTO through pipes)
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData:CreateQuizDto){
        return await this.quizService.createNewQuiz(quizData);
    }
}

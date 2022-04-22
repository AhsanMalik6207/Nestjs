// import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
// import { MESSAGES, REGEX } from 'src/app.utils';

export class UserRegisterRequestDto {
 
  @IsNotEmpty()
  name: string;

  
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 24)
  password: string;

 
  @IsNotEmpty()
  @Length(8, 24)
  confirm: string;
}
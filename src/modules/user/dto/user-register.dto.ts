import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';
import { MESSAGES, REGEX } from 'src/app.utils';

export class UserRegisterRequestDto {
  //the @ApiProperty() decorator allows setting various Schema Object properties:
  @ApiProperty({
    description: 'The name of the User',
    example: 'ahsan',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The email address of the User',
    example: 'ahsan@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the User',
    example: 'Ahsan@123',
  })
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, { message: MESSAGES.PASSWORD_RULE_MESSAGE })
  password: string;

  @ApiProperty({
    description: 'Confirm the password',
    example: 'Ahsan@123',
  })
  @IsNotEmpty()
  @Length(8, 24)
  @Matches(REGEX.PASSWORD_RULE, { message: MESSAGES.PASSWORD_RULE_MESSAGE })
  confirm: string;
}
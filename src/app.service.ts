import { Injectable } from '@nestjs/common';
// here are the functions which call the controller
@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }

  getSomthingNew(): string {
    return 'Get Something new!';
  }
}

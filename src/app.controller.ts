import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// Controllers are responsible for handling incoming requests and returning responses to the client.
// Controller is an interface of our each module
// here we specify the route of controller
@Controller("main")
export class AppController {
  // every instance is specify within constructor
  //Read-only members can be accessed outside the class, but their value cannot be changed.
  constructor(private readonly appService: AppService) {}

  @Get("hellow")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("something")
  getSomthingNew(): string {
    return this.appService.getSomthingNew();
  }
}

import { Controller, Get, SetMetadata, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';
// Controllers are responsible for handling incoming requests and returning responses to the client.
// Controller is an interface of our each module
// here we specify the route of controller
@Controller("main")
export class AppController {
  // every instance is specify within constructor
  //Read-only members can be accessed outside the class, but their value cannot be changed.
  constructor(private readonly appService: AppService) {}

  @Get("hellow")
  // admin authorized
  @UseGuards(RolesGuard)
  // @SetMetadata('roles','admin')
  @Roles('admin')

  getHello(): string {
    return this.appService.getHello();
  }

  @Get("something")
  // public authorized
  @UseGuards(RolesGuard)
  // @SetMetadata('roles','public')
  @Roles('public')
  getSomthingNew(): string {
    return this.appService.getSomthingNew();
  }
}

import { Controller, Get, Post, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { diskStorage } from 'multer';
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
  // upload single file in nestJs

  @Post('upload')
@UseInterceptors(FileInterceptor('file', 
{
  storage:diskStorage({
    destination:'./uploads',
    filename:(req, file, cb) =>{
      const name = file.originalname.split('.')[0];
      const fileExtension = file.originalname.split('.')[1]; 
      const newFileName = name.split(" ").join('_')+'_'+Date.now()+'.'+fileExtension;

      cb(null, newFileName);
    },
  }),
//   fileFilter: (req, file, cb)=>{
//     if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
//       return cb(null, false);
//   }
// }
}
))
uploadFile(@UploadedFile() file: Express.Multer.File) {
  console.log(file);
  console.log(file.originalname)
}

  // upload multiple file in nestJs

  @Post('uploads')
@UseInterceptors(FilesInterceptor('files'))
uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
  console.log(files);
}}


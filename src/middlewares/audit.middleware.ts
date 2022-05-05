import { NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";
// Middleware is a function which is called before the route handler.
export class AuditMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: Function) {
        console.log("Logging Create request IP:", req.ip);
        console.log("Logging Create request PATH:", req.path);
        console.log("Logging Create request Headers:", req.headers);
        next();
    }
}
import { NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

export class AuditMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: Function) {
        console.log("Logging Create request IP:", req.ip);
        console.log("Logging Create request PATH:", req.path);
        console.log("Logging Create request Headers:", req.headers);
        next();
    }
}
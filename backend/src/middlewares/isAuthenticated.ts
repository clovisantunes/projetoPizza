import { Payload } from "@prisma/client/runtime";
import {NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface payLoad{
    sub: string;
}

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
){
// Receber token

const authToken = req.headers.authorization;

if(!authToken){
    return res.status(401).end;
}

const [, token] = authToken.split(" ")
 try{
    //validar token
    const {sub} = verify(
        token,
        process.env.JWT_SECRET  
    )as payLoad;
        req.user_id = sub;

        return  next();
 }catch(err){
    return res.status(401).end();
 }

}
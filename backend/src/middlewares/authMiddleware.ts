import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken"


export function authMiddleware (req:Request, res:Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({error: "token nao fornecido"});
    }

    const [, token] = authHeader.split(" ");
    
    if(!token){
        return res.status(401).json({erro: "token mal formado"})
    }

    try {
        const decoded = Jwt.verify(token, process.env.JWT_SECRET!);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({error:"token invalido"})
    }
}
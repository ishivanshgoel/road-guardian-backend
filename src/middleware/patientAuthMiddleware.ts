import { Request, Response, NextFunction } from "express";
import { veriftyJwtToken } from "../util";

export function patientAuthMiddleware(req: Request, res: Response, next: NextFunction) {
    let token = req.headers.authorization;
    if(!token) {
        next(new Error("token not found"));
    }
    token = token.split(" ")[1];
    const response = veriftyJwtToken(token);
    if(!response || !response.deviceId) {
        next(new Error("unauthorized user"));
    }
    req["user"] = response;
    next();
}
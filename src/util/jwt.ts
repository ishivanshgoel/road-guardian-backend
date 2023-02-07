import jwt from "jsonwebtoken";

export function generateJwtToken(data: any) {
    const token = jwt.sign(data, process.env.JWT_SECRET);
    return token;
}

export function veriftyJwtToken(token: string) {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    return verified;
}
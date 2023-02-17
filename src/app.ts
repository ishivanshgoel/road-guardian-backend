import { Server } from "./server";
import dotenv from "dotenv";
dotenv.config();
const PORT = Number(process.env.PORT) || 3000;
const DB_URI = process.env.DB_URI;
const JWT_SECRET = process.env.JWT_SECRET;

if(!PORT || !DB_URI || !JWT_SECRET) {
    throw new Error("env configuration is missing");
}

// server instance
new Server(PORT, DB_URI);
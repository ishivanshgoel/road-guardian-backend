import express from "express";
import { userRouter, reportRouter } from "./router";
import { DbConnector } from "./config/db";
import cors from "cors";

export class Server {
    private readonly app = express();
    private PORT: number;

    constructor(PORT: number, dbUri: string) {
        console.log("connecting to db");
        DbConnector.connect(dbUri).then(() => {
            console.log("connected to DB");
            this.PORT = PORT;
            this.putGlobalMiddleWares();
            this.initiateRoutes();
            this.start();
        }).catch((err) => {
            console.log("Error " + err);
        })
    }

    private putGlobalMiddleWares() {
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private initiateRoutes() {
        this.app.use("/api/v1/user", userRouter);
        this.app.use("/api/v1/report", reportRouter);
    }

    private start() {
        this.app.listen(this.PORT, () => {
            console.log("Server" + `Running at PORT: ${this.PORT}`);
        })
    }
}
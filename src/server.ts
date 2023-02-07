import express from "express";

export class Server {
    private readonly app = express();
    private PORT: Number;

    constructor(PORT: Number) {
        this.PORT = PORT;
        this.putGlobalMiddleWares();
        this.initiateRoutes();
    }

    private putGlobalMiddleWares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private initiateRoutes() {
        // this.app.use("/api/v1/book", BookController);
        // this.app.use("/api/v1/user", UserController);
        // this.app.use("/api/v1/auth", AuthController);
    }

    public start() {
        this.app.listen(this.PORT, () => {
            console.log("Server" + `Running at PORT: ${this.PORT}`);
        })
    }
}
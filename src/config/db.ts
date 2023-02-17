import * as Mongoose from "mongoose";

export class DbConnector {
    //connect to db
    public static async connect(uri: string) {
        await Mongoose.connect(uri);
    }
}
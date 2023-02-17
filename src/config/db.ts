import { MongoClient } from "mongodb";

export class DbConnector {
    private static client: MongoClient;

    private constructor() {

    }

    //connect to db
    public static async connect(uri: string) {
        return await new MongoClient(uri).connect();
    }

    // to disconnect to database
    public static async disconnect() {
        await this.client.close();
    }
}
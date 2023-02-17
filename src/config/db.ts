import { MongoClient } from "mongodb";

export class DbConnector {
    private static uri: string; 
    private static client: MongoClient;

    private constructor() {

    }

    //connect to db
    public static async connect(uri: string) {
        await new MongoClient(this.uri).db("admin").command({ ping: 1 });
    }

    // to disconnect to database
    public static async disconnect() {
        await this.client.close();
    }
}
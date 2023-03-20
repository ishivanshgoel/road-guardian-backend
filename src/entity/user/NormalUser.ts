import { model, Schema } from "mongoose";

export interface INormalUser {
    aadharId: string,
    name:string,
    username: string;
    password: string;
}

const normalUser = new Schema<INormalUser>(
    {
        aadharId: {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }
);

const NormalUser = model<INormalUser>("NormalUser", normalUser);
export { NormalUser }
import { model, Schema } from "mongoose";

export interface IRoadAgencyUser {
    name:string,
    number: string;
    location: string[];
    username: string;
    password: string;
}

const roadAgencyUser = new Schema<IRoadAgencyUser>(
    {
        name: {
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        location: {
            type: [String],
            required: true
        }
    }
);

const RoadAgencyUser = model<IRoadAgencyUser>("RoadAgencyUser", roadAgencyUser);
export { RoadAgencyUser }
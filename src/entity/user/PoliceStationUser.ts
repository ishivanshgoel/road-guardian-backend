import { model, Schema } from "mongoose";

export interface IPoliceStationUser {
    name:string,
    number: string;
    location: string[];
    username: string;
    password: string;
}

const policeStationUser = new Schema<IPoliceStationUser>(
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

const PoliceStationUser = model<IPoliceStationUser>("PoliceStationUser", policeStationUser);
export { PoliceStationUser }
import { model, Schema } from "mongoose";

export interface IHospitalUser {
    name:string,
    number: string;
    location: string[];
    username: string;
    password: string;
}

const hospitalUser = new Schema<IHospitalUser>(
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

const HospitalUser = model<IHospitalUser>("HospitalUser", hospitalUser);
export { HospitalUser }
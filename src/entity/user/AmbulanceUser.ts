import { model, Schema } from "mongoose";

export interface IAmbulanceUser {
    name:string,
    number: string;
    location: string[];
    username: string;
    password: string;
    carNumber: string;
}

const ambulanceUser = new Schema<IAmbulanceUser>(
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
        },
        carNumber: {
            type: String,
            required: true
        }
    }
);

const AmbulanceUser = model<IAmbulanceUser>("AmbulanceUser", ambulanceUser);
export { AmbulanceUser }
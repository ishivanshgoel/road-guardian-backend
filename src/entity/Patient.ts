import { model, Schema } from "mongoose";

export interface IPatient {
    email: string,
    password: string,
    name: string;
    deviceId: string;
}

const patient = new Schema<IPatient>(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        deviceId: {
            type: String,
            required: true
        }
    }
);

const Patient = model<IPatient>("Patient", patient);
export { Patient }
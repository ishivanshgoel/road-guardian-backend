import { model, Schema } from "mongoose";

export interface IPatient {
    name: string;
    deviceId: string;
}

const patient = new Schema<IPatient>(
    {
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
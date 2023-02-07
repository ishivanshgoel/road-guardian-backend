import { model, Schema } from "mongoose";

export interface IDoctor {
    name: String;
    address: String;
    specialization: String;
}

const doctor = new Schema<IDoctor>(
    {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        specialization: {
            type: String,
            required: true,
            ref: 'Specialization'
        }
    }
);

const Doctor = model<IDoctor>("Doctor", doctor);
export { Doctor }
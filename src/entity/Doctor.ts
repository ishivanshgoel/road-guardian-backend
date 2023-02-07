import { model, Schema } from "mongoose";

export interface IDoctor {
    email: string,
    password:string,
    name: string;
    address: string;
    specialization: string;
}

const doctor = new Schema<IDoctor>(
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
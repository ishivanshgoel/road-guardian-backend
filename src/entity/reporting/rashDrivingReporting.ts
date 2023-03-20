import { model, Schema } from "mongoose";

export interface IRashDrivingReporting {
    name:string,
    number: string;
    location: string[];
    username: string;
    password: string;
    carNumber: string;
}

const rashDrivingReporting = new Schema<IRashDrivingReporting>(
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

const RashDrivingReporting = model<IRashDrivingReporting>("RashDrivingReporting", rashDrivingReporting);
export { RashDrivingReporting }
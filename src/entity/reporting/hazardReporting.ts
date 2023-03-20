import { model, Schema } from "mongoose";

export interface IHazardReporting {
    name:string,
    number: string;
    location: string[];
    username: string;
    password: string;
    carNumber: string;
}

const hazardReporting = new Schema<IHazardReporting>(
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

const HazardReporting = model<IHazardReporting>("HazardReporting", hazardReporting);
export { HazardReporting }
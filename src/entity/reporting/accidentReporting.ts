import { model, Schema } from "mongoose";

export interface IAccidentReporting {
    reportedBy: string;
    accident_location: string[];
    police_station_allocated: string;
    hospital_allocated: string;
    ambulance_allocated: string;
    video_url: string;
    verified: boolean;
}

const accidentReporting = new Schema<IAccidentReporting>(
    {
        reportedBy: {
            type: String,
            required: true
        },
        accident_location: {
            type: [String],
            required: true
        },
        police_station_allocated: {
            type: String,
            required: true
        },
        hospital_allocated: {
            type: String,
            required: true
        },
        ambulance_allocated: {
            type: String,
            required: true
        },
        video_url: {
            type: String,
            required: true
        },
        verified: {
            type: Boolean,
            default: false
        }
    }
);

const AccidentReporting = model<IAccidentReporting>("AccidentReporting", accidentReporting);
export { AccidentReporting }
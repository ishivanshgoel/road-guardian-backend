import { model, Schema } from "mongoose";

export interface IHazardReporting {
    reportedBy: string;
    hazard_location: string[];
    agency_allocated: string;
    video_url: string[];
    verified: boolean;
}

const hazardReporting = new Schema<IHazardReporting>(
    {
        reportedBy: {
            type: String,
            required: true
        },
        hazard_location: {
            type: [String],
            required: true
        },
        agency_allocated: {
            type: String,
            required: true
        },
        video_url: {
            type: [String],
            required: true
        },
        verified: {
            type: Boolean,
            default: false
        }
    }
);

const HazardReporting = model<IHazardReporting>("HazardReporting", hazardReporting);
export { HazardReporting }
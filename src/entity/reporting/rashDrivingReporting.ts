import { model, Schema } from "mongoose";

export interface IRashDrivingReporting {
    reportedBy: string;
    rashDriving_location: string[];
    police_station_allocated: string;
    video_url: string[];
    verified: boolean;
}

const rashDrivingReporting = new Schema<IRashDrivingReporting>(
    {
        reportedBy: {
            type: String,
            required: true
        },
        rashDriving_location: {
            type: [String],
            required: true
        },
        police_station_allocated: {
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

const RashDrivingReporting = model<IRashDrivingReporting>("RashDrivingReporting", rashDrivingReporting);
export { RashDrivingReporting }
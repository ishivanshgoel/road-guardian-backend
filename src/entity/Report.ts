import { model, Schema } from "mongoose";

// add more fields related to patients report based on the input from hardware
export interface IReport {
    patientId: string;
    ecgReportUrl: string,
    predictedDisease: string
}

const report = new Schema<IReport>(
    {
        patientId: {
            type: String,
            required: true,
            ref: 'Patient'
        },
        ecgReportUrl: {
            type: String,
            required: true
        },
        predictedDisease: {
            type: String
        }
    }
);

const Report = model<IReport>("Report", report);
export { Report }
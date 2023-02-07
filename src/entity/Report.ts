import { model, Schema } from "mongoose";

// add more fields related to patients report based on the input from hardware
export interface IReport {
    patientId: string;
}

const report = new Schema<IReport>(
    {
        patientId: {
            type: String,
            required: true,
            ref: 'Patient'
        }
    }
);

const Report = model<IReport>("Report", report);
export { Report }
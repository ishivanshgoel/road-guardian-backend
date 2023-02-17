import { model, Schema } from "mongoose";

export interface IDoctorRemarkOnPatientReport {
    patientId: string;
    doctorId: string;
    reportId: string;
    consultingRequired: boolean;
    note: string;
    firstAidNote: string;
    reviewdByDoctor: boolean;
}

const doctorRemarkOnPatientReport = new Schema<IDoctorRemarkOnPatientReport>(
    {
        patientId: {
            type: String,
            required: true
        },
        doctorId: {
            type: String,
            required: true,
            ref: 'Doctor'
        },
        reportId: {
            type: String,
            required: true,
            ref: 'Report'
        },
        consultingRequired: {
            type: Boolean,
            default: false
        },
        note: {
            type: String
        },
        firstAidNote: {
            type: String
        },
        reviewdByDoctor: {
            type: Boolean,
            default: false
        }
    }
);

const DoctorRemarkOnPatientReport = model<IDoctorRemarkOnPatientReport>("DoctorRemarkOnPatientReport", doctorRemarkOnPatientReport);
export { DoctorRemarkOnPatientReport }
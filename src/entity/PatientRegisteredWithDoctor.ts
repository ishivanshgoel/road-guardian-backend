import { model, Schema } from "mongoose";

export interface IPatientRegisteredWithDoctor {
    patientId: string;
    doctorId: string;
    approvedByDoctor: boolean;
    registeredOn: Date
};

const patientRegisteredWithDoctor = new Schema<IPatientRegisteredWithDoctor>(
    {
        patientId: {
            type: String,
            required: true,
            ref: 'Patient'
        },
        doctorId: {
            type: String,
            required: true,
            ref: 'Doctor'
        },
        approvedByDoctor: {
            type: Boolean,
            default: false
        },
        registeredOn: {
            type: Date,
            default: Date.now
        }
    }
);

const PatientRegisteredWithDoctor = model<IPatientRegisteredWithDoctor>("PatientRegisteredWithDoctor", patientRegisteredWithDoctor);
export { PatientRegisteredWithDoctor }
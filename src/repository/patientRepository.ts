import { Doctor, Patient, PatientRegisteredWithDoctor, Report, Specilaization, IDoctor, IPatient, IPatientRegisteredWithDoctor, IReport, ISpecialization } from "../entity";

export class PatientRepository {

    async registerPatient(email: string, password: string, name: string, deviceId: string) : Promise<IPatient> {
        const newPatient = new Patient({ email, password, name, deviceId });
        await newPatient.save();
        return newPatient;
    }

    async getPatientByEmail(email: string): Promise<IPatient> {
        const patient = await Patient.findOne({ email: email }).exec();
        return patient;
    }

    async getPatientById(patientId: string): Promise<IPatient> {
        const patient = await Patient.findOne({ _id: patientId }).exec();
        return patient;
    }
}
import { Doctor, Patient, PatientRegisteredWithDoctor, Report, Specilaization, IDoctor, IPatient, IPatientRegisteredWithDoctor, IReport, ISpecialization } from "../entity";

export class PatientRepository {

    async registerPatient(name: string, deviceId: string) : Promise<IPatient> {
        const newPatient = new Patient({ name, deviceId });
        await newPatient.save();
        return newPatient;
    }

    async getPatient(patientId: string): Promise<IPatient> {
        const patient = await Patient.findOne({ _id: patientId }).exec();
        return patient;
    }
}
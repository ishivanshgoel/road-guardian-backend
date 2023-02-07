import { Doctor, Patient, PatientRegisteredWithDoctor, Report, Specilaization, IDoctor, IPatient, IPatientRegisteredWithDoctor, IReport, ISpecialization } from "../entity";

export class DoctorRepository {

    async registerDoctor(name: string, address: string, specialization: string) : Promise<IDoctor> {
        const newDoctor = new Doctor({ name, address, specialization });
        await newDoctor.save();
        return newDoctor;
    }

    async getDoctor(doctorId: string): Promise<IDoctor> {
        const doctor = await Doctor.findOne({ _id: doctorId }).exec();
        return doctor;
    }
}
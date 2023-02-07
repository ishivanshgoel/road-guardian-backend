import { Doctor, Patient, PatientRegisteredWithDoctor, Report, Specilaization, IDoctor, IPatient, IPatientRegisteredWithDoctor, IReport, ISpecialization } from "../entity";

export class DoctorRepository {

    async registerDoctor(email: string, password: string, name: string, address: string, specialization: string) : Promise<IDoctor> {
        const newDoctor = new Doctor({ email, password, name, address, specialization });
        await newDoctor.save();
        return newDoctor;
    }

    async getDoctorByEmail(email: string): Promise<IDoctor> {
        const doctor = await Doctor.findOne({ email: email }).exec();
        return doctor;
    }

    async getDoctorById(doctorId: string) : Promise<IDoctor> {
        const doctor = await Doctor.findOne({ _id: doctorId }).exec();
        return doctor;
    }
}
import { Doctor, DoctorRemarkOnPatientReport, IDoctorRemarkOnPatientReport, PatientRegisteredWithDoctor, Report, Specilaization, IDoctor, IPatient, IPatientRegisteredWithDoctor, IReport, ISpecialization } from "../entity";

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

    async getPatientReportsRegisteredUnderDoctor(doctorId: string) : Promise<IDoctorRemarkOnPatientReport> {
        const reports = await DoctorRemarkOnPatientReport.findOne({ doctorId: doctorId }).populate('Report');
        return reports;
    }

    async provideRemarkOnPatientReport(doctorId: string, reportId: string, consultingRequired: boolean, note: string, firstAidNote: string): Promise<boolean> {
        const response = await DoctorRemarkOnPatientReport.updateOne({ doctorId, reportId }, { consultingRequired, note, firstAidNote, reviewedByDoctor: true });
        if(response) return true;
        return false;
    }

    async getAllDoctorsList(): Promise<Array<IDoctor>> {
        const doctors = await Doctor.find().populate('Specialization');
        return  doctors;
    }

    async getPatientRequests(doctorId: string): Promise<Array<IPatientRegisteredWithDoctor>> {
        const requests = await PatientRegisteredWithDoctor.find({ doctorId, approvedByDoctor: false }).populate('Patient');
        return  requests;
    }

    async approvePatientRequests(doctorId: string, patientId: string): Promise<boolean> {
        const res = await PatientRegisteredWithDoctor.updateOne({ doctorId, patientId }, { approvedByDoctor: true });
        if(res) return true;
        return false;
    }

    async getRegisteredPatients(doctorId: string) : Promise<Array<IPatientRegisteredWithDoctor>> {
        const response = await PatientRegisteredWithDoctor.find({ doctorId, approvedByDoctor: true }).populate('Report');
        return response;
    }
}
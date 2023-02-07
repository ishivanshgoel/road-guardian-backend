import { NextFunction, Request, Response } from "express";
import { PatientRepository } from "../repository";
import { IPatient } from "../entity";

export class PatientController {
  private patientRepository: PatientRepository = new PatientRepository();

  public registerNewPatient = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email, password, name, deviceId } = req.body;
      await this.patientRepository.registerPatient(
        email,
        password,
        name,
        deviceId
      );
      res.json({
        error: false,
        message: "patient registered",
      });
    } catch (error) {
      next(error);
    }
  };

  public loginPatient = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email, password } = req.body;
      const patient: IPatient = await this.patientRepository.getPatientByEmail(
        email
      );
      if (!patient) {
        throw new Error("Invalid email/ password");
      }

      if (patient.password !== password.trim()) {
        throw new Error("Invalid email/ password");
      }

      res.json({
        error: false,
        message: "login success",
        data: patient,
      });
    } catch (error) {
      next(error);
    }
  };

}

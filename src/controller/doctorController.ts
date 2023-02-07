import { NextFunction, Request, Response } from "express";
import { DoctorRepository } from "../repository";
import { IDoctor } from "../entity";
import { veriftyJwtToken, generateJwtToken } from "../util";

export class DoctorController {
  private doctorRepository: DoctorRepository = new DoctorRepository();

  public registerNewDoctor = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email, password, name, address, specialization } = req.body;
      if (!email || !password || !name || !address || !specialization) {
        throw new Error(
          "[email/ password/ name/ address/ specialization] is missing"
        );
      }
      await this.doctorRepository.registerDoctor(
        email,
        password,
        name,
        address,
        specialization
      );
      res.json({
        error: false,
        message: "doctor registered",
      });
    } catch (error) {
      next(error);
    }
  };

  public loginDoctor = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("[email/ password] is missing");
      }
      const doctor: IDoctor = await this.doctorRepository.getDoctorByEmail(
        email
      );
      if (!doctor) {
        throw new Error("Invalid email/ password");
      }

      if (doctor.password !== password.trim()) {
        throw new Error("Invalid email/ password");
      }

      delete doctor.password;
      const token = generateJwtToken(doctor);
      doctor["token"] = token;

      res.json({
        error: false,
        message: "login success",
        doctor: doctor,
      });
    } catch (error) {
      next(error);
    }
  };
}

import { NextFunction, Request, Response } from "express";
import { DoctorRepository } from "../repository";
import { IDoctor } from "../entity";
export class DoctorController {
  private doctorRepository: DoctorRepository = new DoctorRepository();

  public registerNewDoctor = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email, password, name, address, specialization } = req.body;
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
      const doctor: IDoctor = await this.doctorRepository.getDoctorByEmail(
        email
      );
      if (!doctor) {
        throw new Error("Invalid email/ password");
      }

      if (doctor.password !== password.trim()) {
        throw new Error("Invalid email/ password");
      }

      res.json({
        error: false,
        message: "login success",
        data: doctor,
      });
    } catch (error) {
      next(error);
    }
  };
}

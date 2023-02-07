import { NextFunction, Request, Response } from 'express';

export class DoctorController {

    public registerNewDoctor = async (req: Request, res: Response, next: NextFunction) => {
        try {
          // register new doctor
        } catch (error) {
          next(error);
        }
      };
}
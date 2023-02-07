import { NextFunction, Request, Response } from 'express';

export class PatientController {

    public registerNewPatient = async (req: Request, res: Response, next: NextFunction) => {
        try {
          // register new doctor
        } catch (error) {
          next(error);
        }
      };
}
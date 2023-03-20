import { NextFunction, Request, Response } from "express";
import {
  AccidentReporting,
  IAccidentReporting,
  HazardReporting,
  IHazardReporting,
  RashDrivingReporting,
  IRashDrivingReporting,
} from "../entity";
import { veriftyJwtToken, generateJwtToken } from "../util";

export class ReportController {
  public submitAccidentReport = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res.json({
        message: "ook",
      });
    } catch (error) {
      next(error);
    }
  };
}

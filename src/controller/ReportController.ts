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
      const { location } = req.body;

      const newAccidentReport = new AccidentReporting({
        reportedBy: "6417e36c4828d2ea09acf4f6",
        accident_location: location,
        police_station_allocated: "6417e47e4828d2ea09acf500",
        hospital_allocated: "6417e3cc4828d2ea09acf4f9",
        ambulance_allocated: "6417e36c4828d2ea09acf4f6",
        video_url: [
          "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20181016010405_Road-accidents.jpg&w=700&q=90&c=1",
        ],
      });

      await newAccidentReport.save();

      res.json({
        message: "success",
      });
    } catch (error) {
      next(error);
    }
  };

  public getAccidentReports = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const {
        hospital_allocated,
        police_station_allocated,
        ambulance_allocated,
      } = req.body;
      let filter = {};
      if (hospital_allocated) filter["hospital_allocated"] = hospital_allocated;
      if (police_station_allocated)
        filter["police_station_allocated"] = police_station_allocated;
      if (ambulance_allocated)
        filter["ambulance_allocated"] = ambulance_allocated;
      const allDocs = await AccidentReporting.find(filter);
      res.json({
        data: allDocs,
      });
    } catch (err) {
      next(err);
    }
  };

  public submitRashDrivingReport = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { location } = req.body;

      const newRashDrivingReport = new RashDrivingReporting({
        reportedBy: "6417e36c4828d2ea09acf4f6",
        rasdriving_location: location,
        police_station_allocated: "6417e47e4828d2ea09acf500",
        video_url: [
          "https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-3dl08fjmmah1i51ggnnrnmgdd5-20160922015202.Medi.jpeg",
        ],
      });

      await newRashDrivingReport.save();

      res.json({
        message: "success",
      });
    } catch (error) {
      next(error);
    }
  };

  public getRashDrivingReports = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { police_station_allocated } = req.body;
      let filter = {};
      if (police_station_allocated)
        filter["police_station_allocated"] = police_station_allocated;
      const allDocs = await RashDrivingReporting.find(filter);
      res.json({
        data: allDocs,
      });
    } catch (err) {
      next(err);
    }
  };

  public submitHazardReport = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { location } = req.body;

      const newHazardReport = new HazardReporting({
        reportedBy: "6417e36c4828d2ea09acf4f6",
        hazard_location: location,
        agency_allocated: "6417e47e4828d2ea09acf500",
        video_url: [
          "https://autovista24.autovistagroup.com/wp-content/uploads/sites/5/2021/08/GettyImages-185327915.jpg",
        ],
      });

      await newHazardReport.save();

      res.json({
        message: "success",
      });
    } catch (error) {
      next(error);
    }
  };

  public getHazardReports = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { agency_allocated } = req.body;
      let filter = {};
      if (agency_allocated) filter["agency_allocated"] = agency_allocated;
      const allDocs = await HazardReporting.find(filter);
      res.json({
        data: allDocs,
      });
    } catch (err) {
      next(err);
    }
  };
}
